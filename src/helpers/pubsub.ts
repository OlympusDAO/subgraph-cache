import { PubSub } from "@google-cloud/pubsub";

import { getISO8601DateString } from "./date";

export const sendPubSubMessage = async (pubSubTopic: string, startDate: Date): Promise<void> => {
  const client = new PubSub();
  const messageId = await client
    .topic(pubSubTopic)
    .publishMessage({ json: { startDate: getISO8601DateString(startDate) } });
  console.log(`Published message with id ${messageId} on PubSub topic ${pubSubTopic}`);
};
