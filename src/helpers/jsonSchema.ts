import $RefParser = require("@apidevtools/json-schema-ref-parser");
import { JSONSchema7 } from "json-schema";
import { resolve } from "path";
import * as TJS from "typescript-json-schema";

/**
 * Generates a JSONSchema for the given {type},
 * based on the Typescript types located at {typesFilename}.
 *
 * TODO: this could be simplified further by generating the
 * Typescript types on demand with graphql-codegen. Unfortunately, I (Jem) wasn't able to get the programmatic calls working.
 *
 * @param type
 * @param typesFilename
 * @returns
 */
export const generateJSONSchema = async (type: string, typesFilename: string): Promise<$RefParser.JSONSchema> => {
  // Convert to JSONSchema
  const jsonSchemaProgram = TJS.getProgramFromFiles([resolve(typesFilename)], {
    strictNullChecks: true,
  });
  const jsonSchema = TJS.generateSchema(jsonSchemaProgram, type);
  if (!jsonSchema) {
    throw new Error(`Unable to generate JSONSchema for type ${type} and types file ${typesFilename}`);
  }

  // We need to de-reference types in the JSONSchema, otherwise the BigQuery schema library will complain
  const derefSchema = await $RefParser.dereference(jsonSchema as JSONSchema7);
  return derefSchema;
};
