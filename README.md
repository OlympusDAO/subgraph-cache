# subgraph-cache

## Purpose

This deploys a Google Cloud Function that periodically fetches records from the token-holders subgraph and stores them in Google Cloud Storage

## Potential Uses

- Expose records in BigQuery through the external tables functionality
- Post-processing of records (e.g. to generate daily balances)

## Architecture

This project has a few components:

- Google Cloud Function to fetch records from the token-holders subgraph
  - It is designed to only fetch records that are not already present in GCS
- Google Cloud Storage (GCS) bucket to store records (in JSONL files)
  - Files are stored in the following location: `<bucket>/<function>/dt=<YYYY-MM-DD>/records.jsonl`
  - Files are stored in the `JSONL` (newline-delimited) format in order to make it easy to ingest into BigQuery
  - The parent directory of the `records.jsonl` file contains `dt=` followed by the date, so that [Hive partitioning](https://cloud.google.com/bigquery/docs/hive-partitioned-queries-gcs#supported_data_layouts) is supported without further transformation.

The Pulumi tool is used to manage the orchestration of resources in Google Cloud Platform.

## Improvements

- Generalise to support caching of _any_ subgraph by specifying a query in a configuration file
- Dynamically generate the BigQuery schema for each table using `graphql-codegen`, an introspection GraphQL query or the Typescript types. A few attempts were made to implement this, but they were abandoned.
