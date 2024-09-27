import { execSync } from "child_process";
import path from "path";

import { GENERATED_DIR, SubgraphConfig } from "./constants";
import { getBigQuerySchema } from "./helpers/bigquerySchema";
import { writeFile } from "./helpers/fs";
import { generateJSONSchema } from "./helpers/jsonSchema";
import { getSubgraphConfig, getSubgraphConfigFiles, getSubgraphUrl } from "./helpers/subgraphConfig";
import { generateTypes } from "./helpers/subgraphSchema";

const writeSchema = async (configFilePath: string): Promise<void> => {
  const config: SubgraphConfig = getSubgraphConfig(configFilePath);

  const subgraphDir = `${GENERATED_DIR}/${config.subgraphName}/${config.deploymentId}`;
  const typesFilepath = `${subgraphDir}/${config.object}_types.ts`;
  await generateTypes(getSubgraphUrl(config), typesFilepath);

  if (config.patchFile) {
    const configFileDir = path.parse(configFilePath).dir;
    const patchFilePath = `${configFileDir}/${config.patchFile}`;
    console.log(`Applying patch file ${patchFilePath}`);
    execSync(`patch --no-backup-if-mismatch -p1 < ${patchFilePath}`);
  }

  const schema = await generateJSONSchema(config.object, typesFilepath);
  writeFile(`${subgraphDir}/${config.object}.jsonschema`, JSON.stringify(schema, null, 2));

  const bqSchema = await getBigQuerySchema(schema, config.typeOverrides);
  writeFile(`${subgraphDir}/${config.object}_schema.json`, bqSchema);
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
