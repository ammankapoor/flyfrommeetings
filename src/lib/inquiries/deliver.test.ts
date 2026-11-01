import { describe, expect, it } from "vitest";
import { deliveryMode } from "./delivery-mode";

describe("deliveryMode", () => {
  it("uses a local log outside production when no webhook is set", () => {
    expect(deliveryMode({ nodeEnv: "development" })).toBe("local-log");
  });

  it("refuses to pretend an inquiry was sent in production", () => {
    expect(deliveryMode({ nodeEnv: "production" })).toBe("unconfigured");
  });

  it("requires a secret and https for a production webhook", () => {
    expect(
      deliveryMode({ nodeEnv: "production", webhookUrl: "https://hooks.example.com" }),
    ).toBe("missing-secret");
    expect(
      deliveryMode({
        nodeEnv: "production",
        webhookUrl: "http://hooks.example.com",
        webhookSecret: "secret",
      }),
    ).toBe("insecure-webhook");
    expect(
      deliveryMode({
        nodeEnv: "production",
        webhookUrl: "https://hooks.example.com/inquiries",
        webhookSecret: "secret",
      }),
    ).toBe("webhook");
  });
});
