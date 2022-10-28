# subgraph-cache

## Purpose

This deploys a Google Cloud Function that periodically fetches records from the token-holders subgraph and stores them in Google Cloud Storage

## Potential Uses

- Expose records in BigQuery through the external tables functionality
- Post-processing of records (e.g. to generate daily balances)

## Architecture

This project has a few components:

- Google Cloud Storage (GCS) bucket to store records (in JSONL files)
  - Files are stored in the following location: `<bucket>/token-holders-transactions/dt=<YYYY-MM-DD>/records.jsonl`
  - Files are stored in the `JSONL` (newline-delimited) format in order to make it easy to ingest into BigQuery
  - The parent directory of the `records.jsonl` file contains `dt=` followed by the date, so that [Hive partitioning](https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs#supported_data_layouts) is supported without further transformation.
- Google Cloud Function (GCF) to fetch records from the token-holders subgraph
  - It will fetch records from the latest date present in GCS, or the finish date specified in a PubSub message (which is useful when there's a timeout).
  - If the function detects that the timeout is approaching, it will exit fetching the records.
  - Before exit, the function sends a message on the specified PubSub Topic. This includes both the start date and the finish date for the fetching.
- Google Cloud Scheduler Job to trigger the function in GCF.
- BigQuery table exposing the data stored in the GCS bucket.
- Alert policies to inform about failures and extraneous executions in Discord.
- Monitoring dashboard for key metrics: function executions and status, GCS network activity

The Pulumi tool is used to manage the orchestration of resources in Google Cloud Platform, and has `dev` and `prod` stacks (environments).

## Caveats

- The [token-holder-balances](https://github.com/OlympusDAO/token-holder-balances) project has details of the resources in this project hard-coded into its configuration. Those values will need to be manually updated if the resource ids change (which is rare).
- If a new subgraph version is deployed that changes historical data (such as a new token being indexed, or a different calcultion being used), this function will not (yet) detect those changes. To force re-fetching of the transactions, delete the `token-holders-transactions` directory in the GCS bucket. Upon the next schedule, records will be fetched automatically.

## Improvements

- Generalise to support caching of _any_ subgraph by specifying a query in a configuration file
- Dynamically generate the BigQuery schema for each table using `graphql-codegen`, an introspection GraphQL query or the Typescript types. A few attempts were made to implement this, but they were abandoned.
