import { JSONSchema7, JSONSchema7Definition } from "json-schema";
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
export const generateJSONSchema = async (type: string, typesFilename: string): Promise<JSONSchema7> => {
  console.log(`Generating JSONSchema for object ${type}`);
  // Convert to JSONSchema
  const tsjConfig: tsj.Config = {
    path: typesFilename,
    type: type,
    topRef: false, // Avoid generating a $ref at the root of the schema, which confuses the de-referencer. See: https://github.com/APIDevTools/json-schema-ref-parser/issues/48
  };
  const jsonSchema = tsj.createGenerator(tsjConfig).createSchema(tsjConfig.type);

  // Remove the definitions (as they are already included in the properties)
  delete jsonSchema.definitions;
  // Remove the required fields (as we are not using them)
  delete jsonSchema.required;

  // Iterate over the properties and perform some transformations
  if (jsonSchema.properties) {
    const newProperties: Record<string, JSONSchema7Definition> = {};

    for (const [key, val] of Object.entries(jsonSchema.properties)) {
      // If it is not an object, we can add it to the new properties
      if (typeof val == "boolean" || (typeof val == "object" && val.$ref == undefined)) {
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

    jsonSchema.properties = newProperties;
  }

  return jsonSchema;
};
