import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { site } from "@/config/site";

const whatsapp = "https://wa.me/919990766054";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.4 1.02-.4.13 0 .24 0 .35.01.3.01.46-.1.72.55.27.68.92 2.35 1 2.52.08.17.14.37.03.58-.1.22-.16.35-.31.54-.16.19-.33.42-.47.56-.16.16-.32.33-.14.64.19.31.83 1.37 1.78 2.22 1.23 1.09 2.26 1.43 2.58 1.59.32.16.5.13.69-.08.19-.21.78-.9.99-1.21.21-.31.42-.26.7-.15.28.1 1.79.84 2.1.99.3.16.51.23.58.36.08.13.08.76-.16 1.44Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2.7 6.4 4.4a.7.7 0 0 0 .8 0l6.4-4.4a.8.8 0 0 0-1.1-1.1L12 10.2 6.3 6.1a.8.8 0 0 0-1.1 1.1Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 1.8H8A3.2 3.2 0 0 0 4.8 8v8A3.2 3.2 0 0 0 8 19.2h8a3.2 3.2 0 0 0 3.2-3.2V8A3.2 3.2 0 0 0 16 4.8ZM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm4.35-2.55a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"
      />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-[#c4a056]" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({
  href,
  external,
  icon,
  title,
  detail,
}: {
  href?: string;
  external?: boolean;
  icon: ReactNode;
  title: string;
  detail: string;
}) {
  const className =
    "flex items-center gap-3 rounded-2xl border border-[#e0b85c]/30 bg-[#f3eee4] px-4 py-4 text-[#10243a] no-underline";
  const body = (
    <>
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#e0b85c] text-[#10243a]">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold">{title}</span>
        <span className="mt-0.5 block text-sm leading-snug text-[#10243a]/70">{detail}</span>
      </span>
      <Chevron />
    </>
  );

  if (!href) {
    return <div className={className}>{body}</div>;
  }

  if (external || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href as Route} className={className}>
      {body}
    </Link>
  );
}

export function GetInTouch() {
  return (
    <section id="contact" className="scroll-mt-28 bg-[#0c2744] px-6 pt-10 pb-14 text-[#f3eee4]">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="font-display text-[clamp(2.6rem,6vw,4.2rem)] leading-[0.95] font-light tracking-[-0.03em] italic">
          Get in <span className="text-[#e0b85c]">Touch</span>
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#f3eee4]/75 sm:text-lg">
          Have a question, collaboration idea or general enquiry? We&apos;d love to hear from you.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card
            href={whatsapp}
            external
            icon={<WhatsAppIcon />}
            title="Chat on WhatsApp"
            detail="For general questions and quick assistance"
          />
          <Card
            href={`mailto:${site.email}`}
            icon={<MailIcon />}
            title="Email Us"
            detail="For collaborations, business enquiries and support"
          />
          <Card
            href={site.instagram}
            external
            icon={<InstagramIcon />}
            title="Follow Our Journey"
            detail="Connect with us on Instagram"
          />
        </div>
      </div>
    </section>
  );
}
