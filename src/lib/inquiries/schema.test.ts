import { describe, expect, it } from "vitest";
import { parseInquiry, type InquiryFormInput } from "./schema";

function input(overrides: Partial<InquiryFormInput> = {}): InquiryFormInput {
  return {
    intent: "contact",
    name: "Ada Planner",
    email: "ada@example.com",
    phone: "",
    consent: "yes",
    companyWebsite: "",
    message: "We would like help shaping a future trip.",
    tripSlug: "",
    travelers: "",
    timing: "",
    notes: "",
    ...overrides,
  };
}

describe("parseInquiry", () => {
  it("accepts a contact inquiry", () => {
    const result = parseInquiry(input());
    expect(result.ok).toBe(true);
    if (result.ok && !result.dropped) {
      expect(result.inquiry.intent).toBe("contact");
    }
  });

  it("rejects an invalid email and missing consent", () => {
    const result = parseInquiry(input({ email: "not-an-email", consent: "" }));
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.email?.[0]).toMatch(/email/i);
      expect(result.fieldErrors.consent?.[0]).toMatch(/confirm/i);
    }
  });

  it("drops honeypot submissions before validation", () => {
    const result = parseInquiry(
      input({ companyWebsite: "https://spam.example", email: "" }),
    );
    expect(result).toEqual({ ok: true, dropped: true });
  });

  it("requires planning details for a plan inquiry", () => {
    const result = parseInquiry(
      input({ intent: "plan", travelers: "", timing: "", notes: "" }),
    );
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fieldErrors.travelers).toBeDefined();
      expect(result.fieldErrors.timing).toBeDefined();
      expect(result.fieldErrors.notes).toBeDefined();
    }
  });
});
