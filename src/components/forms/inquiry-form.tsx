"use client";

import { useId } from "react";
import { site } from "@/config/site";

type InquiryFormProps = {
  intent: "contact" | "plan";
  tripSlug?: string;
  tripTitle?: string;
};

export function InquiryForm({ intent, tripSlug = "", tripTitle }: InquiryFormProps) {
  const errorId = useId();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (String(data.get("companyWebsite") || "").trim()) return;

    const lines = [
      `Name: ${String(data.get("name") || "")}`,
      `Email: ${String(data.get("email") || "")}`,
      `Phone: ${String(data.get("phone") || "")}`,
    ];
    if (intent === "plan") {
      lines.push(
        `Trip: ${tripTitle || tripSlug || ""}`,
        `Who is traveling: ${String(data.get("travelers") || "")}`,
        `When: ${String(data.get("timing") || "")}`,
        `Notes: ${String(data.get("notes") || "")}`,
      );
    } else {
      lines.push(`Message: ${String(data.get("message") || "")}`);
    }

    const subject = intent === "plan" ? "Trip planning inquiry" : "Website inquiry";
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <input type="hidden" name="intent" value={intent} />
      {intent === "plan" ? (
        <input type="hidden" name="tripSlug" value={tripSlug} />
      ) : null}
      <div
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {tripTitle ? (
        <p className="border border-line bg-white px-4 py-3 text-sm">
          About this sample: {tripTitle}
        </p>
      ) : null}

      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" />

      {intent === "plan" ? (
        <>
          <Field label="Who is traveling" name="travelers" required />
          <Field label="When you would like to travel" name="timing" required />
          <Field
            label="What you want the trip to feel like"
            name="notes"
            as="textarea"
            required
          />
        </>
      ) : (
        <Field label="Message" name="message" as="textarea" required />
      )}

      <label className="flex items-start gap-3 text-sm leading-relaxed">
        <input
          className="mt-1"
          type="checkbox"
          name="consent"
          value="yes"
          required
          aria-describedby={errorId}
        />
        <span id={errorId}>
          I understand this opens an email and does not reserve or purchase a trip.
        </span>
      </label>

      <button
        type="submit"
        className="w-fit bg-clay-deep px-5 py-3 text-sm font-semibold text-paper"
      >
        Send inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  as = "input",
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  error?: string;
  as?: "input" | "textarea";
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const errorId = `${name}-error`;
  const shared = {
    id: name,
    name,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className:
      "mt-2 w-full border border-line bg-white px-3 py-3 text-ink outline-none",
  };

  return (
    <div>
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea {...shared} rows={6} />
      ) : (
        <input {...shared} type={type} />
      )}
      {error ? (
        <p id={errorId} className="mt-2 text-sm text-clay-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
