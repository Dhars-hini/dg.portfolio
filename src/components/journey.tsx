"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { journey } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Journey() {
  const [activeId, setActiveId] = useState<string | null>(journey[0]?.id ?? null);

  return (
    <section id="journey" className="py-24 md:py-32 bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="My Story"
          title="From a childhood dream to software engineering"
          description="Seven milestones that shaped who I am — told honestly, not as a resume line."
        />

        <div className="mx-auto max-w-2xl">
          <ol className="relative space-y-3">
            {/* Vertical connecting line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-transparent"
            />

            {journey.map((stage, i) => {
              const isActive = activeId === stage.id;
              return (
                <Reveal key={stage.id} delay={Math.min(i * 0.05, 0.25)} y={14}>
                  <li className="relative pl-16">
                    {/* Step indicator */}
                    <div
                      className={`absolute left-0 top-3 flex h-12 w-12 items-center justify-center rounded-2xl border text-xl transition-all duration-300 ${
                        isActive
                          ? "border-primary/50 bg-primary/10 shadow-lg shadow-primary/10"
                          : "border-border bg-surface"
                      }`}
                    >
                      {stage.icon}
                    </div>

                    {/* Card */}
                    <button
                      type="button"
                      onClick={() => setActiveId(isActive ? null : stage.id)}
                      aria-expanded={isActive}
                      className={`w-full rounded-2xl border px-5 py-4 text-left transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-primary/30 bg-surface shadow-md shadow-primary/5"
                          : "border-border bg-surface/60 hover:border-border hover:bg-surface"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
                            Step {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="mt-0.5 font-display text-base font-semibold">
                            {stage.title}
                          </h3>
                        </div>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 text-muted transition-transform duration-300 ${
                            isActive ? "rotate-180 text-accent" : ""
                          }`}
                        />
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-3 text-sm leading-relaxed text-muted border-t border-border pt-3">
                              {stage.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
