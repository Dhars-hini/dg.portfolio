import { Award, ShieldCheck, ExternalLink, Trophy } from "lucide-react";
import { achievements, certifications } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const badgeColors: Record<string, string> = {
  elite: "from-amber-500/20 to-yellow-500/10 border-amber-500/20 text-amber-400",
  ambassador: "from-purple-600/20 to-violet-500/10 border-purple-500/20 text-purple-400",
  certified: "from-blue-600/20 to-cyan-500/10 border-blue-500/20 text-blue-400",
  security: "from-cyan-500/20 to-teal-500/10 border-cyan-500/20 text-cyan-400",
  cloud: "from-orange-500/20 to-amber-500/10 border-orange-500/20 text-orange-400",
};

const badgeIcons: Record<string, string> = {
  elite: "⭐",
  ambassador: "🏅",
  certified: "✅",
  security: "🔒",
  cloud: "☁️",
};

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Certifications & Achievements"
          title="Continuous learning in action"
          description="Industry certifications and academic recognition earned alongside the B.Tech programme."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">

          {/* ── Certifications grid ──────────────────────────────────── */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-widest text-muted">
              Certifications
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((cert, i) => {
                const colorClass =
                  badgeColors[cert.badge] ??
                  "from-primary/15 to-secondary/10 border-primary/20 text-primary";
                const icon = badgeIcons[cert.badge] ?? "📜";

                return (
                  <Reveal key={cert.name} delay={Math.min(i * 0.05, 0.25)}>
                    <div
                      className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg ${colorClass}`}
                    >
                      {/* Badge icon */}
                      <div className="text-2xl">{icon}</div>

                      <div className="mt-2">
                        <p className="text-sm font-semibold leading-snug">{cert.name}</p>
                        <p className="mt-1 font-mono text-[11px] text-muted">
                          {cert.organization}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="font-mono text-[10px] text-muted">{cert.year}</span>
                          <ExternalLink
                            size={12}
                            className="text-muted opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* ── Achievements panel ───────────────────────────────────── */}
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-accent" />
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  Achievements
                </p>
              </div>

              <ul className="mt-5 space-y-4">
                {achievements.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <ShieldCheck size={13} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-0.5 font-mono text-[11px] leading-relaxed text-muted">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
