"use client";

import { useState } from "react";
import {
  Cloud,
  Code2,
  Database,
  LayoutGrid,
  Sparkles,
  BarChart3,
  Wrench,
} from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2,
  LayoutGrid,
  Cloud,
  Sparkles,
  Database,
  BarChart3,
  Wrench,
};

export function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Technical Skills"
          title="A toolkit across the full stack"
          description="From frontend interfaces to cloud infrastructure, machine learning, and data analytics."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            const isHovered = hovered === group.category;

            return (
              <Reveal key={group.category} delay={Math.min(i * 0.06, 0.3)}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border bg-surface p-5 transition-all duration-300 cursor-default ${
                    isHovered
                      ? "border-primary/50 shadow-xl shadow-primary/8 -translate-y-1"
                      : "border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  }`}
                  onMouseEnter={() => setHovered(group.category)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Gradient shimmer on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(139,92,246,0.03) 50%, rgba(6,182,212,0.04) 100%)",
                    }}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                        isHovered
                          ? "bg-primary/15 text-primary scale-110"
                          : "bg-gradient-to-br from-primary/10 to-accent/10 text-primary"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    {/* Category name */}
                    <h3 className="mt-3 font-display text-sm font-semibold">
                      {group.category}
                    </h3>

                    {/* Description */}
                    <p className="mt-1 font-mono text-[11px] text-muted leading-relaxed">
                      {group.description}
                    </p>

                    {/* Skill chips */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                            isHovered
                              ? "border-primary/20 bg-primary/8 text-primary"
                              : "border-border bg-surface-2 text-muted"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
