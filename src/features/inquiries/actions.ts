"use server";

import { headers } from "next/headers";
import { getTripBySlug } from "@/content/trips";
import { deliverInquiry } from "@/lib/inquiries/deliver";
import { takeInquirySlot } from "@/lib/inquiries/rate-limit";
import {
  parseInquiry,
  readInquiryForm,
  type InquiryActionState,
} from "@/lib/inquiries/schema";

const successMessage =
  "Inquiry received. This confirmation is a placeholder until a real reply process is confirmed. Nothing has been booked.";

function failure(message: string, fieldErrors: InquiryActionState["fieldErrors"] = {}) {
  return { status: "error" as const, message, fieldErrors };
}

export async function submitInquiry(
  _previous: InquiryActionState,
  formData: FormData,
): Promise<InquiryActionState> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const clientKey =
    forwarded?.split(",")[0]?.trim() || headerList.get("x-real-ip") || "unknown";
  const slot = takeInquirySlot(clientKey);

  if (!slot.allowed) {
    return failure("Please wait a few minutes before sending another inquiry.");
  }

  const parsed = parseInquiry(readInquiryForm(formData));
  if (!parsed.ok) {
    return failure("Check the highlighted fields and try again.", parsed.fieldErrors);
  }

  if (parsed.dropped) {
    return { status: "success", message: successMessage, fieldErrors: {} };
  }

  if (parsed.inquiry.intent === "plan" && parsed.inquiry.tripSlug) {
    if (!getTripBySlug(parsed.inquiry.tripSlug)) {
      return failure("Choose a listed sample trip or clear the trip reference.", {
        tripSlug: ["That trip reference is not in the sample list."],
      });
    }
  }

  try {
    const delivery = await deliverInquiry(parsed.inquiry);
    if (!delivery.ok) {
      return failure(
        "This form is not connected to an inbox yet. Set INQUIRY_WEBHOOK_URL before accepting real inquiries.",
      );
    }

    if (delivery.mode === "local-log") {
      return {
        status: "success",
        message:
          "Saved on this machine for development only. Nothing was emailed, and nothing was booked.",
        fieldErrors: {},
      };
    }

    return { status: "success", message: successMessage, fieldErrors: {} };
  } catch {
    return failure("The inquiry could not be saved. Please try again in a moment.");
  }
}
