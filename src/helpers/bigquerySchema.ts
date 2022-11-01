import $RefParser = require("@apidevtools/json-schema-ref-parser");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as jsonSchemaBigQuery from "jsonschema-bigquery";

export const getBigQuerySchema = async (schema: $RefParser.JSONSchema): Promise<string> => {
  // Convert to BigQuery schema: https://github.com/thedumbterminal/jsonschema-bigquery
  const bigQuerySchema = jsonSchemaBigQuery.run(schema);

  return JSON.stringify(bigQuerySchema, null, 2);
};
