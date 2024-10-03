import { PubSub, v1 } from "@google-cloud/pubsub";

import { getISO8601DateString } from "./date";
import { logger, throwError } from "./logging";

export const sendPubSubMessage = async (pubSubTopic: string, startDate: Date, finishDate: Date): Promise<void> => {
  const client = new PubSub();
  const messageContent = { startDate: getISO8601DateString(startDate), finishDate: getISO8601DateString(finishDate) };
  logger.info(`Publishing message on PubSub topic ${pubSubTopic}: ${JSON.stringify(messageContent)}`);
  const messageId = await client.topic(pubSubTopic).publishMessage({
    json: messageContent,
  });
  logger.info(`Published message with id ${messageId} on PubSub topic ${pubSubTopic}`);
};

export const getLatestFinishDate = async (subscriptionName: string): Promise<Date | null> => {
  const subscriptionClient = new v1.SubscriberClient();
  const [response] = await subscriptionClient.pull({ subscription: subscriptionName, maxMessages: 10 });
  const ackIds: string[] = [];
  let latestFinishDate: Date | null = null;

  // Find the latest finish date in all of the pulled messages
  if (response.receivedMessages) {
    response.receivedMessages.forEach(message => {
      if (!message.message) return;

      const rawData = message.message.data;
      if (!rawData) return;

      // We expect it to be a Uint8Array
      if (typeof rawData !== "object") {
        throwError(
          `getLatestFinishDate: unsure how to handle message data of type ${typeof rawData}, contents: ${rawData}`,
        );
      }

      const dataObject = JSON.parse(rawData.toString());
      if (!dataObject.finishDate) {
        logger.info(
          `getLatestFinishDate: did not find finishDate on message. Skipping.\nMessage: ${JSON.stringify(dataObject)}`,
        );
        return;
      }

      const messageFinishDate = new Date(dataObject.finishDate);
      if (!latestFinishDate || latestFinishDate < messageFinishDate) {
        logger.info(`getLatestFinishDate: Setting latestFinishDate to ${dataObject.finishDate}`);
        latestFinishDate = messageFinishDate;
      }

      if (!message.ackId) return;

      ackIds.push(message.ackId);
    });
  }

  // Send the acknowledgement
  if (ackIds.length > 0) {
    await subscriptionClient.acknowledge({ subscription: subscriptionName, ackIds: ackIds });
  }

  return latestFinishDate;
};
