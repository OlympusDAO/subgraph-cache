# subgraph-cache

## Purpose

This deploys a Google Cloud Function that periodically fetches records from subgraphs and exposes them in BigQuery.

## Potential Uses

- Post-processing of records (e.g. to generate daily balances)

## Architecture

This project has a few components:

- Google Cloud Storage (GCS) bucket to store records (in JSONL files)
  - Files are stored in the following location: `<bucket>/<subgraph name>/<deployment id>/<object>/dt=<YYYY-MM-DD>/records.jsonl`
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

## Caveats

- Data is by default stored as a string, to avoid any issues with data type. When performing queries in BigQuery, you will need to cast the data type appropriately.
- If specifying a BigQuery type override for a date in ISO string format (e.g. `2022-10-11T10:05.001Z`), the type to specify is `TIMESTAMP` (not `DATE`).
- After changing any of the contents of the `subgraphs/*.json` files, run `yarn codegen`.
- BigQuery does not support replacing the schema of an existing BigQuery table. If the type overrides are changed, you will need to delete the BigQuery table manually, run `pulumi refresh`, and then run `pulumi up`.

## Subgraph Configuration

For each subgraph, there is a corresponding JSON file in the `subgraphs/` directory. Note: the name of the file is irrelevant. This is used to:

- generate a query to fetch all fields in the subgraph
- generate a schema that is used in conjunction with Pulumi to create a BigQuery table

See the [Cooler_Loans_Loan.json](subgraphs/Cooler_Loans_Loan.json) file as an example.

To cache a new subgraph, perform the following:

- Add a new definition file in `subgraphs/`, adhering to the `SubgraphConfig` type
- Run `yarn codegen` to generate the GraphQL & BigQuery schemas, and the Typescript typings
- Run `pulumi up` on the appropriate stack to update the resources
- Once this is done, the function can be manually triggered by running `yarn run execute <subgraphFile>`
