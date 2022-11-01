import $RefParser = require("@apidevtools/json-schema-ref-parser");
import { writeFileSync } from "fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as jsonSchemaBigQuery from "jsonschema-bigquery";
import { resolve } from "path";
import * as TJS from "typescript-json-schema";

export const getBigQuerySchema = async (typesFilePath: string): Promise<string> => {
  const jsonSchemaProgram = TJS.getProgramFromFiles([resolve(typesFilePath)], {
    strictNullChecks: true,
  });
  const jsonSchema = TJS.generateSchema(jsonSchemaProgram, "TokenHolderTransaction");
  console.log(`schema = ${JSON.stringify(jsonSchema, null, 2)}`);
  writeFileSync("schema.jsonschema", JSON.stringify(jsonSchema, null, 2));

  const derefSchema = await $RefParser.dereference("schema.jsonschema");

  console.log(`new schema = ${JSON.stringify(derefSchema, null, 2)}`);

  // Convert to BigQuery schema: https://github.com/thedumbterminal/jsonschema-bigquery
  const bigQuerySchema = jsonSchemaBigQuery.run(derefSchema);

  return JSON.stringify(bigQuerySchema);
};
