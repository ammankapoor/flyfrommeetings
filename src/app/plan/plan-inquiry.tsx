"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { getTripBySlug } from "@/content/trips";

export function PlanInquiry() {
  const requested = useSearchParams().get("trip") ?? "";
  const match = requested ? getTripBySlug(requested) : undefined;

  return (
    <InquiryForm intent="plan" tripSlug={match?.slug ?? ""} tripTitle={match?.title} />
  );
}
