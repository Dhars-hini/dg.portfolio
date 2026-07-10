"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Lightbulb } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

// Project banner — real screenshot
function ProjectBanner({ name, id }: { name: string; id: string }) {
  const screenshots: Record<string, string> = {
    smartspin: "/assets/smartspin.png",
    "ev-charging": "/assets/ev-charging.png",
    "blood-bank": "/assets/blood-bank.png",
    "file-uploader": "/assets/file-uploader.png",
    "music-uploader": "/assets/music-uploader.png",
  };

  const src = screenshots[id];

  return (
    <div className="relative aspect-[16/8] w-full overflow-hidden bg-surface-2">
      {src ? (
        <Image
          src={src}
          alt={`${name} screenshot`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="font-display text-5xl font-bold text-border select-none">
            {name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
          </span>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface/80 to-transparent" />
    </div>
  );
}

function ProjectCard({
  project,
  isExpanded,
  onToggle,
}: {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-surface transition-all duration-300 ${
        isExpanded
          ? "border-primary/40 shadow-xl shadow-primary/8"
          : "border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
      }`}
    >
      {/* Banner */}
      <ProjectBanner name={project.name} id={project.id} />

      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-base font-semibold leading-snug">
            {project.name}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
              project.status === "Completed"
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-amber-500/10 text-amber-400"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Summary */}
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        {/* Problem statement — expandable */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-xl border border-border bg-surface-2 p-4">
                <div className="flex items-center gap-2 text-accent">
                  <Lightbulb size={13} />
                  <span className="font-mono text-[11px] uppercase tracking-wide">
                    Problem
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.problem}
                </p>
              </div>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
              >
                <Github size={14} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-text"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-accent cursor-pointer"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Less" : "Details"}
            <ChevronDown
              size={13}
              className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="py-14 md:py-20 bg-surface/30">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Real projects built to solve real problems — spanning machine learning, full-stack development, and applied AI."
        />

        {/* Row 1 — 3 cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <Reveal key={project.id} delay={Math.min(i * 0.05, 0.25)}>
              <ProjectCard
                project={project}
                isExpanded={expanded === project.id}
                onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
              />
            </Reveal>
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="hidden md:block" />
          {projects.slice(3, 5).map((project, i) => (
            <Reveal key={project.id} delay={Math.min((i + 3) * 0.05, 0.25)}>
              <ProjectCard
                project={project}
                isExpanded={expanded === project.id}
                onToggle={() => setExpanded(expanded === project.id ? null : project.id)}
              />
            </Reveal>
          ))}
          <div className="hidden md:block" />
        </div>
      </div>
    </section>
  );
}
