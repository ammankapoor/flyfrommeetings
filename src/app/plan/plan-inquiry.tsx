"use client";

import { useEffect, useState } from "react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { getTripBySlug } from "@/content/trips";

export function PlanInquiry() {
  const [trip, setTrip] = useState<{ slug: string; title: string } | undefined>();

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("trip") ?? "";
    const match = requested ? getTripBySlug(requested) : undefined;
    setTrip(match ? { slug: match.slug, title: match.title } : undefined);
  }, []);

  return (
    <InquiryForm intent="plan" tripSlug={trip?.slug ?? ""} tripTitle={trip?.title} />
  );
}
