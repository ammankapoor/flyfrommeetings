import type { Metadata } from "next";
import { Container } from "@/components/site/container";
import { PageIntro } from "@/components/site/page-intro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Placeholder about page for flyFromMeetings. Founder names and biography are not confirmed.",
};

const founders = [
  {
    role: "[Role to be confirmed]",
    name: "[Founder name]",
    bio: "[Placeholder biography. Do not invent a personal story, credential, or location.]",
  },
  {
    role: "[Role to be confirmed]",
    name: "[Founder name]",
    bio: "[Placeholder biography. Do not invent a personal story, credential, or location.]",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-16">
      <PageIntro eyebrow="About us" title="The studio, once the facts are in.">
        <p>
          This page is ready for a confirmed story. It does not describe real people,
          licenses, awards, or a year the business started.
        </p>
      </PageIntro>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {founders.map((founder, index) => (
          <article key={index} className="border border-line bg-white p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-clay-deep uppercase">
              {founder.role}
            </p>
            <h2 className="mt-3 font-display text-4xl">{founder.name}</h2>
            <p className="mt-4 leading-relaxed text-muted">{founder.bio}</p>
          </article>
        ))}
      </div>
      <section className="mt-14 max-w-3xl" aria-labelledby="approach-heading">
        <h2 id="approach-heading" className="font-display text-3xl">
          What to replace here
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
          <li>Legal name and where the business is registered.</li>
          <li>Seller-of-travel or other license numbers, if any apply.</li>
          <li>A short biography written from confirmed interviews.</li>
          <li>Photos the studio has rights to use, with descriptive alt text.</li>
        </ul>
      </section>
    </Container>
  );
}
