import { codegen } from "@graphql-codegen/core";
import * as typescriptPlugin from "@graphql-codegen/typescript";
import { loadSchemaSync } from "@graphql-tools/load";
import { UrlLoader } from "@graphql-tools/url-loader";
import {
  buildClientSchema,
  getIntrospectionQuery,
  GraphQLSchema,
  graphqlSync,
  IntrospectionQuery,
  parse,
  printSchema,
} from "graphql";

import { writeFile } from "./fs";

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
export const generateSchema = (url: string): GraphQLSchema => {
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

export const generateTypes = async (url: string, filename: string): Promise<void> => {
  console.log(`Generating Typescript types for subgraph at ${url}`);
  const schema = generateSchema(url);
  const codegenConfig = {
    documents: [],
    config: {},
    filename: "",
    schema: parse(printSchema(schema)),
    plugins: [
      {
        typescript: {
          scalars: {
            BigDecimal: "number",
            BigInt: "number",
            Bytes: "string",
          },
        },
      },
    ],
    pluginMap: {
      typescript: typescriptPlugin,
    },
  };

  const output = await codegen(codegenConfig);
  writeFile(filename, output);
};
