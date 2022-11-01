import $RefParser = require("@apidevtools/json-schema-ref-parser");

import { toLowerCaseFirstCharacter } from "./string";

/**
 * Generates a fragment of the GraphQL query for the given type.
 *
 * This function will recurse (if necessary) for references entities
 *
 * @param url subgraph URL
 * @param type the defined type (e.g. TokenHolder)
 * @param fieldName for referenced entities, the type is different to the field name, so it is specified here
 * @returns
 */
const generateQueryFields = (schema: $RefParser.JSONSchema, fieldName: string, skipFieldName: boolean): string => {
  const SCALAR_TYPES: string[] = ["string", "number"];

  if (schema.type == "object") {
    if (!schema.properties) {
      throw new Error(`Excepted property ${fieldName} to have child properties, but it was empty`);
    }

    /**
     * If there is an object/entity type, we need to produce a query in the following format:
     *
     * fieldName {
     *   subFieldName1
     *   subFieldName2
     * }
     */
    let objectQuery = `${skipFieldName ? "" : fieldName} {\n`;

    objectQuery += Object.entries(schema.properties).reduce((previousString, [fieldName, fieldDefinition]) => {
      if (fieldName == "__typename") return previousString;

      // If a scalar type, append the field name to the previous value, otherwise recurse
      const isScalar = SCALAR_TYPES.includes(fieldDefinition.type);
      return `${previousString}${isScalar ? fieldName : generateQueryFields(fieldDefinition, fieldName, false)}\n`;
    }, "");

    objectQuery += `}`;
    return objectQuery;
  }

  // Otherwise just return the field name
  return `${fieldName}\n`;
};

export const getObjectQueryName = (object: string): string => {
  return toLowerCaseFirstCharacter(object) + "s";
};

/**
 * Construct an SDL query for the given subgraph and entity. This will
 * introspection the subgraph schema and produce a query for all fields.
 *
 * @param url subgraph url
 * @param type the name of the entity
 * @returns SDL query represented as a string
 * @throws if the entity cannot be found
 */
export const generateQuery = (
  schema: $RefParser.JSONSchema,
  type: string,
  recordCount: number,
  skip: number,
  dateField: string,
  orderDirection: "asc" | "desc",
  date_gte?: string,
  date_lt?: string,
): string => {
  const objectName = getObjectQueryName(type);

  const query = `query {
    ${objectName}(
      first: ${recordCount}
      skip: ${skip}
      orderBy: ${dateField}
      orderDirection: ${orderDirection}
      ${
        date_gte || date_lt
          ? `where: {
          ${date_gte ? `${dateField}_gte: "${date_gte}" ` : ""}
          ${date_lt ? `${dateField}_lt: "${date_lt}" ` : ""}
        }`
          : ""
      }
    ) ${generateQueryFields(schema, objectName, true)}
  }`;
  return query;
};
