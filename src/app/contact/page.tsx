import type { Metadata } from "next";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Container } from "@/components/site/container";
import { PageIntro } from "@/components/site/page-intro";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Email flyFromMeetings at ${site.email}.`,
};

export default function ContactPage() {
  return (
    <Container className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <PageIntro eyebrow="Contact us" title="Write to us.">
          <p>
            Email is the best way to reach the studio. Phone and location are not listed
            yet.
          </p>
        </PageIntro>
        <dl className="mt-10 space-y-4 text-sm">
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="text-lg font-semibold">
              <a href={`mailto:${site.email}`} className="underline">
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">Instagram</dt>
            <dd className="text-lg font-semibold">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                @flyfrommeetings
              </a>
            </dd>
          </div>
        </dl>
      </div>
      <div className="border border-line bg-sand p-5 sm:p-8">
        <h2 className="font-display text-3xl">Send a note</h2>
        <div className="mt-6">
          <InquiryForm intent="contact" />
        </div>
      </div>
    </Container>
  );
}
