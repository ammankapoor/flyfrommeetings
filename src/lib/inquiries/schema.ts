import { z } from "zod";

const name = z
  .string()
  .trim()
  .min(2, "Enter your name.")
  .max(80, "Use 80 characters or fewer.");
const email = z
  .email("Enter a valid email address.")
  .max(160, "Use 160 characters or fewer.");
const phone = z
  .string()
  .trim()
  .max(40, "Use 40 characters or fewer.")
  .refine(
    (value) => value.length === 0 || value.length >= 7,
    "Enter a phone number with at least 7 characters.",
  );
const consent = z.string().refine((value) => value === "yes", {
  error: "Please confirm we may reply about this inquiry.",
});

const contactSchema = z.object({
  intent: z.literal("contact"),
  name,
  email,
  phone,
  consent,
  message: z
    .string()
    .trim()
    .min(10, "Write at least a short message.")
    .max(4000, "Use 4000 characters or fewer."),
});

const planSchema = z.object({
  intent: z.literal("plan"),
  name,
  email,
  phone,
  consent,
  tripSlug: z.string().trim().max(80, "That trip reference is too long."),
  travelers: z
    .string()
    .trim()
    .min(1, "Tell us who is traveling.")
    .max(80, "Use 80 characters or fewer."),
  timing: z
    .string()
    .trim()
    .min(2, "Share a rough timing.")
    .max(120, "Use 120 characters or fewer."),
  notes: z
    .string()
    .trim()
    .min(10, "Add a few details about the trip.")
    .max(4000, "Use 4000 characters or fewer."),
});

export const inquirySchema = z.discriminatedUnion("intent", [
  contactSchema,
  planSchema,
]);

export type Inquiry = z.infer<typeof inquirySchema>;

export type InquiryActionState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Record<string, string[]>;
};

export const initialInquiryState: InquiryActionState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export type InquiryFormInput = {
  intent: string;
  name: string;
  email: string;
  phone: string;
  consent: string;
  companyWebsite: string;
  message: string;
  tripSlug: string;
  travelers: string;
  timing: string;
  notes: string;
};

export function readInquiryForm(formData: FormData): InquiryFormInput {
  const read = (key: string) => {
    const value = formData.get(key);
    return typeof value === "string" ? value : "";
  };

  return {
    intent: read("intent"),
    name: read("name"),
    email: read("email"),
    phone: read("phone"),
    consent: read("consent"),
    companyWebsite: read("companyWebsite"),
    message: read("message"),
    tripSlug: read("tripSlug"),
    travelers: read("travelers"),
    timing: read("timing"),
    notes: read("notes"),
  };
}

export function fieldErrorsFrom(error: z.ZodError) {
  const fieldErrors: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key !== "string") continue;
    fieldErrors[key] ??= [];
    fieldErrors[key].push(issue.message);
  }
  return fieldErrors;
}

export function parseInquiry(input: InquiryFormInput) {
  if (input.companyWebsite.trim()) {
    return { ok: true as const, dropped: true as const };
  }

  const parsed = inquirySchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false as const,
      fieldErrors: fieldErrorsFrom(parsed.error),
    };
  }

  return { ok: true as const, dropped: false as const, inquiry: parsed.data };
}
