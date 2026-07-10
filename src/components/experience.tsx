import Image from "next/image";
import { Briefcase, Calendar, CheckCircle2, Github } from "lucide-react";
import { internships } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const companyColors: Record<string, string> = {
  "Cube AI": "from-blue-600/20 to-purple-600/10",
  "Zscaler": "from-cyan-500/20 to-blue-600/10",
};

// Real logo for Cube AI; inline SVG icon for Zscaler
function CompanyLogo({ company }: { company: string }) {
  if (company === "Cube AI") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          src="/assets/cubeailogo.png"
          alt="Cube AI logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    );
  }

  if (company === "Zscaler") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          src="/assets/zscalerlogo.png"
          alt="Zscaler logo"
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback initials
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface font-display text-sm font-bold text-primary">
      {company.slice(0, 2)}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Internships"
          description="Hands-on industry exposure across full-stack development and cloud security."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {internships.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.1}>
              <div className="group h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">

                {/* Company header strip */}
                <div
                  className={`flex items-center gap-4 bg-gradient-to-r p-5 ${
                    companyColors[role.company] ?? "from-primary/10 to-secondary/5"
                  }`}
                >
                  {/* Company logo */}
                  <CompanyLogo company={role.company} />
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold">{role.company}</h3>
                    <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <Briefcase size={11} /> {role.role}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                        <Calendar size={11} /> {role.period}
                      </span>
                      <span className="rounded-full border border-border bg-surface/80 px-2 py-0.5 font-mono text-[10px] text-muted">
                        {role.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  {/* Summary */}
                  <p className="text-sm leading-relaxed text-muted">{role.summary}</p>

                  {/* Achievements */}
                  <div className="mt-4">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-2">
                      Key Achievements
                    </p>
                    <ul className="space-y-2">
                      {role.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2.5 text-sm text-muted">
                          <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {role.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {role.githubUrl && (
                      <a
                        href={role.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
                        aria-label={`${role.company} GitHub repo`}
                      >
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>


      </div>
    </section>
  );
}
