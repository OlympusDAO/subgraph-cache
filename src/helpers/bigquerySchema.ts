import $RefParser = require("@apidevtools/json-schema-ref-parser");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as jsonSchemaBigQuery from "jsonschema-bigquery";

export const getBigQuerySchema = (schema: $RefParser.JSONSchema): string => {
  // Convert to BigQuery schema: https://github.com/thedumbterminal/jsonschema-bigquery
  const bigQuerySchema = jsonSchemaBigQuery.run(schema);

  return JSON.stringify(bigQuerySchema, null, 2);
};
