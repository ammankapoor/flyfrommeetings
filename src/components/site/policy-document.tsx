import { FilmFooter } from "@/components/site/film-footer";
import { site } from "@/config/site";
import type { PolicyDocument as Policy } from "@/content/policies";

const whatsapp = "https://wa.me/919990766054";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(official WhatsApp or email|official WhatsApp)/g);
  return parts.map((part, index) => {
    if (part === "official WhatsApp or email") {
      return (
        <span key={index}>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-2"
          >
            official WhatsApp
          </a>
          {" or "}
          <a
            href={`mailto:${site.email}`}
            className="text-black underline underline-offset-2"
          >
            email
          </a>
        </span>
      );
    }
    if (part === "official WhatsApp") {
      return (
        <a
          key={index}
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline underline-offset-2"
        >
          official WhatsApp
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function PolicyDocument({ policy }: { policy: Policy }) {
  return (
    <div className="min-h-svh bg-[#ffffff] text-black">
      <article className="mx-auto w-full max-w-3xl px-6 pt-32 pb-16">
        <p className="text-xs font-semibold tracking-[0.2em] text-black uppercase">
          {policy.eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.95] font-light tracking-[-0.03em] text-black italic">
          {policy.title}
        </h1>
        {policy.intro ? (
          <p className="mt-6 text-lg leading-relaxed text-black">{policy.intro}</p>
        ) : null}
        {policy.updated ? (
          <p className="mt-4 text-sm tracking-wide text-black">{policy.updated}</p>
        ) : null}

        <div className="mt-10 space-y-4">
          {policy.sections.map((section, index) => (
            <section
              key={section.title}
              className="rounded-3xl border border-black/10 bg-[#ffffff] px-5 py-6 text-black sm:px-7"
            >
              <h2 className="flex items-baseline gap-3 font-display text-2xl font-light tracking-tight text-black italic sm:text-3xl">
                <span className="text-base font-semibold tracking-[0.14em] text-black not-italic">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              {section.list ? (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-black">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-black"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {section.table ? (
                <div className="mt-5 space-y-3">
                  {section.table.rows.map((row) => (
                    <div
                      key={row.when}
                      className="rounded-2xl border border-black/10 bg-[#ffffff] px-4 py-4 text-black"
                    >
                      <p className="text-xs font-semibold tracking-[0.16em] text-black uppercase">
                        {row.when}
                      </p>
                      <p className="mt-2 text-sm font-semibold">{row.amount}</p>
                      <p className="mt-2 text-sm leading-relaxed">{row.schedule}</p>
                    </div>
                  ))}
                </div>
              ) : null}
              {section.facts ? (
                <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                  {section.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-black/10 bg-[#ffffff] px-4 py-3 text-black"
                    >
                      <dt className="text-xs font-semibold tracking-[0.16em] text-black uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-base font-semibold tracking-wide">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-black">
                  <RichText text={paragraph} />
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
      <FilmFooter />
    </div>
  );
}
