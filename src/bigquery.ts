import { getBigQuerySchema } from "./helpers/bigquerySchema";
import { writeFile } from "./helpers/fs";
import { generateJSONSchema } from "./helpers/jsonSchema";

const writeBigQuerySchema = async (object: string, typesFilePath: string): Promise<void> => {
  const schema = await generateJSONSchema(object, typesFilePath);

  const bqSchema = await getBigQuerySchema(schema);
  writeFile(`./tmp/${object}_schema.json`, bqSchema);
};

// Runs via CLI
if (require.main === module) {
  if (process.argv.length !== 4) {
    throw new Error(`2 arguments are required, but the app received: ${JSON.stringify(process.argv.slice(2))}`);
  }

  writeBigQuerySchema(process.argv[2], process.argv[3]);
}
