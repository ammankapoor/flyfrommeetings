import "server-only";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { deliveryMode } from "@/lib/inquiries/delivery-mode";
import type { Inquiry } from "@/lib/inquiries/schema";

export async function deliverInquiry(inquiry: Inquiry) {
  const mode = deliveryMode({
    webhookUrl: process.env.INQUIRY_WEBHOOK_URL,
    webhookSecret: process.env.INQUIRY_WEBHOOK_SECRET,
    nodeEnv: process.env.NODE_ENV,
  });

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL?.trim();
  const webhookSecret = process.env.INQUIRY_WEBHOOK_SECRET?.trim();

  if (mode === "webhook") {
    if (!webhookUrl || !webhookSecret) {
      return { ok: false as const, mode: "missing-secret" as const };
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${webhookSecret}`,
      },
      body: JSON.stringify({ inquiry }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
    });

    if (!response.ok) return { ok: false as const, mode };
    return { ok: true as const, mode };
  }

  if (mode === "local-log") {
    const directory = path.join(process.cwd(), ".data");
    await mkdir(directory, { recursive: true });
    await appendFile(
      path.join(directory, "inquiries.ndjson"),
      `${JSON.stringify({ inquiry, savedAt: new Date().toISOString() })}\n`,
      "utf8",
    );
    return { ok: true as const, mode };
  }

  return { ok: false as const, mode };
}
