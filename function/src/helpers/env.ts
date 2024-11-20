import { throwError } from "./logging";

export const getEnv = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throwError(`${key} is not set`);
  }

  return value as string;
};

export const getEnvNullable = (key: string): string | undefined => {
  return process.env[key] as string | undefined;
};
