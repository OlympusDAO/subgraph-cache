import { PubSub, v1 } from "@google-cloud/pubsub";

import { getISO8601DateString } from "./date";

export const sendPubSubMessage = async (pubSubTopic: string, startDate: Date, finishDate: Date): Promise<void> => {
  const client = new PubSub();
  const messageContent = { startDate: getISO8601DateString(startDate), finishDate: getISO8601DateString(finishDate) };
  const messageId = await client.topic(pubSubTopic).publishMessage({
    json: messageContent,
  });
  console.log(
    `Published message with id ${messageId} on PubSub topic ${pubSubTopic}: ${JSON.stringify(messageContent)}`,
  );
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
        throw new Error(
          `getLatestFinishDate: unsure how to handle message data of type ${typeof rawData}, contents: ${rawData}`,
        );
      }

      const dataObject = JSON.parse(rawData.toString());
      if (!dataObject.finishDate) {
        console.log(
          `getLatestFinishDate: did not find finishDate on message. Skipping.\nMessage: ${JSON.stringify(dataObject)}`,
        );
        return;
      }

      const messageFinishDate = new Date(dataObject.finishDate);
      if (!latestFinishDate || latestFinishDate < messageFinishDate) {
        console.log(`getLatestFinishDate: Setting latestFinishDate to ${dataObject.finishDate}`);
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
