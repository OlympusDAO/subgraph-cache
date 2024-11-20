import { LoggingWinston } from "@google-cloud/logging-winston";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "debug", // We still want these logged
  transports: [new LoggingWinston()],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}

const throwError = (message: string): never => {
  logger.error(message);
  throw new Error(message);
};

export { logger, throwError };
