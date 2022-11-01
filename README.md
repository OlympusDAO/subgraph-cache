# subgraph-cache

## Purpose

This deploys a Google Cloud Function that periodically fetches records from subgraphs and stores them in Google Cloud Storage

## Potential Uses

- Expose records in BigQuery through the external tables functionality
- Post-processing of records (e.g. to generate daily balances)

## Architecture

This project has a few components:

- Google Cloud Storage (GCS) bucket to store records (in JSONL files)
  - Files are stored in the following location: `<bucket>/<object>/dt=<YYYY-MM-DD>/records.jsonl`
  - Files are stored in the `JSONL` (newline-delimited) format in order to make it easy to ingest into BigQuery
  - The parent directory of the `records.jsonl` file contains `dt=` followed by the date, so that [Hive partitioning](https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs#supported_data_layouts) is supported without further transformation.
- Google Cloud Function (GCF) to fetch records from the subgraph
  - It will fetch records from the latest date present in GCS, or the finish date specified in a PubSub message (which is useful when there's a timeout).
  - If the function detects that the timeout is approaching, it will exit fetching the records.
  - Before exit, the function sends a message on the specified PubSub Topic. This includes both the start date and the finish date for the fetching.
- Google Cloud Scheduler Job to trigger the function in GCF.
- BigQuery table exposing the data stored in the GCS bucket.
- Alert policies to inform about failures and extraneous executions in Discord/email.
- Monitoring dashboard for key metrics: function executions and status, GCS network activity

The Pulumi tool is used to manage the orchestration of resources in Google Cloud Platform, and has `dev` and `prod` stacks (environments).

This project is designed to cache any Graph Protocol subgraph that is specified, effectively creating a BigQuery pipeline. See the [Subgraph Configuration](#subgraph-configuration) section for more information.

## Discord Integration

GCP monitoring does not have a direct integration with Discord, and it seemed like overkill to write a GCP -> Discord webhook integration.

Instead, a [scenario](https://us1.make.com/126792/scenarios/446857/edit) is defined in Make (formerly Integromat) that does the following:

- Watches an email address supplied by the custom mailhook
- Send a HTTP post request to the Discord webhook

This results in a small message being sent into the alerts channel.

## Caveats

- The [token-holder-balances](https://github.com/OlympusDAO/token-holder-balances) project has details of the resources in this project hard-coded into its configuration. Those values will need to be manually updated if the resource ids change (which is rare).
- If a new subgraph version is deployed that changes historical data (such as a new token being indexed, or a different calcultion being used), this function will not (yet) detect those changes. To force re-fetching of the transactions, delete the `token-holders-transactions` directory in the GCS bucket. Upon the next schedule, records will be fetched automatically.

## Subgraph Configuration

For each subgraph, there is a corresponding JSON file in the `subgraphs/` directory. Note: the name of the file is irrelevant. This is used to:

- generate a query to fetch all fields in the subgraph
- generate a schema that is used in conjunction with Pulumi to create a BigQuery table

See the [TokenHolderTransaction](subgraphs/token-holder-transactions.json) file as an example.

To cache a new subgraph, perform the following:

- Add a new definition file in `subgraphs/`, adhering to the `SubgraphConfig` type
  - If a number is large or has a large number of decimal places, it should have a type override to be `BIGNUMERIC`
  - See the [data types](https://cloud.google.com/bigquery/docs/schemas#standard_sql_data_types)
- Run `yarn codegen` to generate the GraphQL & BigQuery schemas, and the Typescript typings
- Run `pulumi up` on the appropriate stack to update the resources
