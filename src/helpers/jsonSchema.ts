import $RefParser = require("@apidevtools/json-schema-ref-parser");
import { JSONSchema7, JSONSchema7Definition } from "json-schema";
import { resolve } from "path";
import * as TJS from "typescript-json-schema";
import * as tsj from "ts-json-schema-generator";

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
  console.log(`Generating JSONSchema for object ${type}`);
  // Convert to JSONSchema
  const tsjConfig: tsj.Config = {
    path: typesFilename,
    type: type,
    topRef: false, // Avoid generating a $ref at the root of the schema, which confuses the de-referencer. See: https://github.com/APIDevTools/json-schema-ref-parser/issues/48
  };
  const jsonSchema = tsj.createGenerator(tsjConfig).createSchema(tsjConfig.type);

  // We need to de-reference types in the JSONSchema, otherwise the BigQuery schema library will complain
  const derefSchema = await $RefParser.dereference(jsonSchema as JSONSchema7);
  // Remove the definitions (as they are already included in the properties)
  delete derefSchema.definitions;
  // Remove the required fields (as we are not using them)
  delete derefSchema.required;

  // Iterate over the properties and perform some transformations
  if (derefSchema.properties) {
    const newProperties: Record<string, JSONSchema7Definition> = {};

    for (const [key, val] of Object.entries(derefSchema.properties)) {
      // If it is not an object, we can add it to the new properties
      if (val.type !== "object") {
        newProperties[key] = val;
        continue;
      }

      // If it is an object, we replace it with an id field
      const newKey = `${key}__id`;
      newProperties[newKey] = {
        type: "string",
      };
      console.log(`Replaced ${key} with ${newKey}`);
    }

    derefSchema.properties = newProperties;
  }

  return derefSchema;
};
