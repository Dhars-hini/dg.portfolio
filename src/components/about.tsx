import { Download, GraduationCap, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { aboutMe, education, personal } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the projects"
          description="A software engineer in the making — driven by curiosity, shaped by challenges."
        />

        <div className="grid gap-10 md:grid-cols-[280px_1fr] lg:gap-20">

          {/* ── LEFT: Photo + quick facts ─────────────────────────────── */}
          <Reveal>
            <div className="flex flex-col items-center gap-6 md:items-start">
              {/* Quick facts grid */}
              <div className="grid w-full grid-cols-2 gap-2.5">
                {aboutMe.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-border bg-surface px-3 py-2.5 transition-colors hover:border-primary/30"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{fact.value}</p>
                  </div>
                ))}
              </div>

              {/* Inline contact shortcuts */}
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={15} />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github size={15} />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </a>
                <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <MapPin size={11} /> {personal.location}
                </span>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Bio + education + objective ───────────────────── */}
          <div className="space-y-6">
            <Reveal>
              <div className="space-y-4 leading-relaxed">
                {aboutMe.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-lg font-medium text-text"
                        : "text-muted"
                    }
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Education card */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/30">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={17} />
                  </div>
                  <div>
                    <p className="font-semibold">{education.degree}</p>
                    <p className="mt-0.5 text-sm text-muted">
                      {education.institution}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{education.note}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
                        {education.duration}
                      </span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                        CGPA {education.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Career objective */}
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-border bg-surface-2 p-5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  Career Objective
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {aboutMe.careerObjective}
                </p>
              </div>
            </Reveal>

            {/* Resume download */}
            <Reveal delay={0.2}>
              <a
                href={personal.resumeUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:scale-[1.03] hover:shadow-primary/40"
              >
                <Download size={14} />
                Download Resume
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
