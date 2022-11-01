import { GENERATED_DIR, SubgraphConfig } from "./constants";
import { getBigQuerySchema } from "./helpers/bigquerySchema";
import { writeFile } from "./helpers/fs";
import { generateJSONSchema } from "./helpers/jsonSchema";
import { getSubgraphConfig, getSubgraphConfigFiles } from "./helpers/subgraphConfig";
import { generateTypes } from "./helpers/subgraphSchema";

const writeSchema = async (configFilePath: string): Promise<void> => {
  const config: SubgraphConfig = getSubgraphConfig(configFilePath);

  const typesFilepath = `${GENERATED_DIR}/${config.object}_types.ts`;
  await generateTypes(config.url, typesFilepath);

  const schema = await generateJSONSchema(config.object, typesFilepath);
  writeFile(`${GENERATED_DIR}/${config.object}.jsonschema`, JSON.stringify(schema, null, 2));

  const bqSchema = await getBigQuerySchema(schema, config.typeOverrides);
  writeFile(`${GENERATED_DIR}/${config.object}_schema.json`, bqSchema);
};

const writeSchemas = async (): Promise<void> => {
  const configFiles = getSubgraphConfigFiles();
  for (let i = 0; i < configFiles.length; i++) {
    await writeSchema(configFiles[i]);
  }
};

// Runs via CLI
if (require.main === module) {
  writeSchemas();
}
