import { loadSchemaSync } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import {
  buildClientSchema,
  getIntrospectionQuery,
  GraphQLObjectType,
  GraphQLSchema,
  graphqlSync,
  IntrospectionQuery,
  isCompositeType,
  isObjectType,
} from "graphql";

import { toLowerCaseFirstCharacter } from "./string";

// https://www.apollographql.com/blog/backend/schema-design/three-ways-to-represent-your-graphql-schema/

const generateSchema = (url: string): GraphQLSchema => {
  const schema = loadSchemaSync(url, {
    loaders: [new UrlLoader()],
  });

  const introspection = graphqlSync({ schema: schema, source: getIntrospectionQuery() });
  if (!introspection.data) {
    throw new Error("Oops");
  }

  const introspectionData = introspection.data as unknown as IntrospectionQuery;
  return buildClientSchema(introspectionData);
};

export const getObjectType = (url: string, type: string): GraphQLObjectType => {
  const graphQLSchema: GraphQLSchema = generateSchema(url);
  const graphQLType = graphQLSchema.getType(type);
  if (!graphQLType) {
    throw new Error(
      `Type ${type} was not found in the GraphQL schema. Available types: ${Object.keys(graphQLSchema.getTypeMap())}`,
    );
  }

  if (!isObjectType(graphQLType)) {
    throw new Error(`Type ${type} is not an object type`);
  }

  console.log(`type = ${JSON.stringify(graphQLType.getFields(), null, 2)}`);

  return graphQLType as GraphQLObjectType;
};

export const hasField = (type: GraphQLObjectType, field: string): boolean => {
  return Object.keys(type.getFields()).includes(field);
};

const generateQueryFields = (url: string, type: string): string => {
  const objectType = getObjectType(url, type);
  return Object.values(objectType.getFields()).reduce((prev, field) => {
    console.log(`field name = ${field.name}`);
    console.log(`type = ${field.type}`);
    console.log(`is type = ${isCompositeType(field.type)}`);
    return `${prev}${isObjectType(field.type) ? generateQueryFields(url, field.name) : field.name}\n`;
  }, "");
};

export const generateQuery = (url: string, type: string): string => {
  const query = `query {
    ${toLowerCaseFirstCharacter(type)} {
        ${generateQueryFields(url, type)}
    }
  }`;
  return query;
};

// Construct SDL query

// Convert types betwen GraphQLSchema and BQ

// Generate BQ schema
