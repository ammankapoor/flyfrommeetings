export function MediaFrame({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div
        aria-hidden="true"
        className="relative flex aspect-[4/5] items-end overflow-hidden bg-pine p-6 text-paper sm:aspect-[5/6]"
      >
        <div className="absolute inset-x-8 top-8 h-px bg-brass" />
        <div className="absolute top-12 right-8 left-8 flex items-center gap-3 text-[0.7rem] tracking-[0.22em] uppercase">
          <span className="h-2 w-2 rounded-full bg-clay" />
          Image placeholder
        </div>
        <p className="max-w-[14rem] font-display text-4xl leading-none">{label}</p>
      </div>
      <figcaption className="sr-only">
        {label}. No photograph is available yet.
      </figcaption>
    </figure>
  );
}
