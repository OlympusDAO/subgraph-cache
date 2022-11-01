import { loadSchemaSync } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import {
  buildClientSchema,
  getIntrospectionQuery,
  GraphQLEnumType,
  GraphQLObjectType,
  GraphQLSchema,
  graphqlSync,
  IntrospectionQuery,
  isEnumType,
  isObjectType,
} from "graphql";

import { toLowerCaseFirstCharacter } from "./string";

// export const generateTypes = (url: string):

/**
 * Generates a GraphQLSchema object from the subgraph URL.
 *
 * It was difficult to understand how to convert between the different formats
 * (introspection results, GraphQLSchema, SDL), and this post was useful:
 * https://www.apollographql.com/blog/backend/schema-design/three-ways-to-represent-your-graphql-schema/
 *
 * @param url subgraph URL
 * @returns GraphQLSchema object
 */
const generateSchema = (url: string): GraphQLSchema => {
  const schema = loadSchemaSync(url, {
    loaders: [new UrlLoader()],
  });

  const introspection = graphqlSync({ schema: schema, source: getIntrospectionQuery() });
  if (!introspection.data) {
    throw new Error(`Unable to run introspection query for subgraph: ${url}`);
  }

  const introspectionData = introspection.data as unknown as IntrospectionQuery;
  return buildClientSchema(introspectionData);
};

const getTypeFromSchema = (url: string, type: string): GraphQLObjectType | GraphQLEnumType => {
  const graphQLSchema: GraphQLSchema = generateSchema(url);
  const graphQLType = graphQLSchema.getType(type);
  if (!graphQLType) {
    throw new Error(
      `Type ${type} was not found in the GraphQL schema. Available types: ${Object.keys(graphQLSchema.getTypeMap())}`,
    );
  }

  if (isObjectType(graphQLType)) {
    return graphQLType as GraphQLObjectType;
  }

  if (isEnumType(graphQLType)) {
    return graphQLType as GraphQLEnumType;
  }

  throw new Error(`Type ${type} is not a handled type`);
};

const hasField = (type: GraphQLObjectType, field: string): boolean => {
  return Object.keys(type.getFields()).includes(field);
};

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
const generateQueryFields = (url: string, type: string, fieldName?: string): string => {
  const SCALAR_TYPES: string[] = ["String", "BigDecimal", "BigInt", "Bytes", "ID"];

  const objectType = getTypeFromSchema(url, type);

  if (objectType instanceof GraphQLObjectType) {
    /**
     * If there is an object/entity type, we need to produce a query in the following format:
     *
     * fieldName {
     *   subFieldName1
     *   subFieldName2
     * }
     *
     * When the root object type is specified, fieldName is undefined, so we also cater to that.
     */
    return `${fieldName ? `${fieldName} {\n` : ""}${Object.values(objectType.getFields()).reduce(
      (subQueryString, subFieldName) => {
        // The field type includes the nullable status, so we exclude that
        const fieldType = subFieldName.type.toString().replace("!", "");
        const isScalar = SCALAR_TYPES.includes(fieldType);
        // If the item is a scalar, then the name is returned, otherwise we recurse
        return `${subQueryString}${
          isScalar ? subFieldName.name : generateQueryFields(url, fieldType, subFieldName.name)
        }\n`;
      },
      "",
    )}${fieldName ? `}` : ""}`;
  }

  if (objectType instanceof GraphQLEnumType && !fieldName) {
    throw new Error(`Type ${type} is an enum type, but no field name was passed`);
  }

  // If we hit an enum type (stored as strings), we just return the field name
  if (objectType instanceof GraphQLEnumType) {
    return `${fieldName}\n`;
  }

  throw new Error(`Unsure how to handle type ${type}`);
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
export const generateQuery = (url: string, type: string): string => {
  const query = `query {
    ${toLowerCaseFirstCharacter(type) + "s"} {
        ${generateQueryFields(url, type)}
    }
  }`;
  return query;
};

// Convert types betwen GraphQLSchema and BQ

// Generate BQ schema
