import { SubgraphConfig } from "./constants";
import { getBigQuerySchema } from "./helpers/bigquerySchema";
import { writeFile } from "./helpers/fs";
import { generateJSONSchema } from "./helpers/jsonSchema";
import { getSubgraphConfig } from "./helpers/subgraphConfig";
import { generateTypes } from "./helpers/subgraphSchema";

const writeBigQuerySchema = async (configFilePath: string): Promise<void> => {
  const config: SubgraphConfig = getSubgraphConfig(configFilePath);

  const typesFilepath = `./tmp/${config.object}_types.ts`;
  await generateTypes(config.url, typesFilepath);

  const schema = await generateJSONSchema(config.object, typesFilepath);

  const bqSchema = await getBigQuerySchema(schema);
  writeFile(`./tmp/${config.object}_schema.json`, bqSchema);
};

// Runs via CLI
if (require.main === module) {
  if (process.argv.length !== 3) {
    throw new Error(`1 arguments is required, but the app received: ${JSON.stringify(process.argv.slice(2))}`);
  }

  writeBigQuerySchema(process.argv[2]);
}
