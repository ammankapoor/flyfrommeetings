export type DeliveryMode =
  "webhook" | "local-log" | "missing-secret" | "insecure-webhook" | "unconfigured";

type DeliveryEnv = {
  webhookUrl?: string;
  webhookSecret?: string;
  nodeEnv?: string;
};

export function deliveryMode(env: DeliveryEnv): DeliveryMode {
  const webhookUrl = env.webhookUrl?.trim() ?? "";
  if (webhookUrl) {
    if (!env.webhookSecret?.trim()) return "missing-secret";
    if (env.nodeEnv === "production" && !webhookUrl.startsWith("https://")) {
      return "insecure-webhook";
    }
    return "webhook";
  }

  if (env.nodeEnv === "production") return "unconfigured";
  return "local-log";
}
