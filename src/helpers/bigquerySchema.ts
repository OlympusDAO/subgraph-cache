import $RefParser = require("@apidevtools/json-schema-ref-parser");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as jsonSchemaBigQuery from "jsonschema-bigquery";

const setTypeOverrides = (fields: any[], typeOverrides: Record<string, string>): void => {
  fields.forEach((fieldDefinition: { fields: any[]; name: string; type: string }) => {
    if (fieldDefinition.type == "RECORD") {
      setTypeOverrides(fieldDefinition.fields, typeOverrides);
      return;
    }

    const overridedType = typeOverrides[fieldDefinition.name];
    if (!overridedType) return;

    fieldDefinition.type = overridedType;
  });
};

export const getBigQuerySchema = (schema: $RefParser.JSONSchema, typeOverrides?: Record<string, string>): string => {
  console.log(`Converting schema to BigQuery format`);
  // Convert to BigQuery schema: https://github.com/thedumbterminal/jsonschema-bigquery
  const bigQuerySchema = jsonSchemaBigQuery.run(schema);
  const schemaFields = bigQuerySchema.schema.fields;

  if (typeOverrides) {
    console.log(`Passed type overrides: ${JSON.stringify(typeOverrides)}`);

    setTypeOverrides(schemaFields, typeOverrides);
  }

  return JSON.stringify(schemaFields, null, 2);
};
