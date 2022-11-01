import { getBigQuerySchema } from "./helpers/bigquerySchema";
import { writeFile } from "./helpers/fs";
import { generateJSONSchema } from "./helpers/jsonSchema";
import { generateTypes } from "./helpers/subgraphSchema";

const writeBigQuerySchema = async (object: string): Promise<void> => {
  const typesFilepath = `./tmp/${object}_types.ts`;
  await generateTypes("https://api.studio.thegraph.com/query/28103/token-holders/0.0.40/", typesFilepath);

  const schema = await generateJSONSchema(object, typesFilepath);

  const bqSchema = await getBigQuerySchema(schema);
  writeFile(`./tmp/${object}_schema.json`, bqSchema);
};

// Runs via CLI
if (require.main === module) {
  if (process.argv.length !== 3) {
    throw new Error(`1 arguments is required, but the app received: ${JSON.stringify(process.argv.slice(2))}`);
  }

  writeBigQuerySchema(process.argv[2]);
}
