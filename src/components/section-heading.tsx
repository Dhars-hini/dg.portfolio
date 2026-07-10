import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-muted leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
