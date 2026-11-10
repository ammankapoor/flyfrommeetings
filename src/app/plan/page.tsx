import type { Metadata } from "next";
import { Suspense } from "react";
import { PlanInquiry } from "@/app/plan/plan-inquiry";
import { Container } from "@/components/site/container";
import { PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "Plan",
  description:
    "Send a trip-planning inquiry. This form does not check availability or take payment.",
};

export default function PlanPage() {
  return (
    <Container className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <PageIntro eyebrow="Plan" title="Tell us the trip you have in mind.">
        <p>
          This inquiry does not reserve rooms, hold space, or charge a card. Sending it
          opens an email to the studio.
        </p>
      </PageIntro>
      <div className="border border-line bg-sand p-5 sm:p-8">
        <Suspense>
          <PlanInquiry />
        </Suspense>
      </div>
    </Container>
  );
}
