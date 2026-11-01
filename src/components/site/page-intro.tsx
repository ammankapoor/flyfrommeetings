export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-deep">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.02] tracking-tight text-balance text-ink sm:text-6xl">
        {title}
      </h1>
      <div className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {children}
      </div>
    </header>
  );
}
