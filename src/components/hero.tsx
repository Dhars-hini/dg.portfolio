"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";

const TYPING_ROLES = [
  "Software Engineer",
  "Cloud Enthusiast",
  "ML Developer",
  "Full Stack Dev",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const current = TYPING_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1800);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 400);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % TYPING_ROLES.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <span className="font-mono text-accent">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTaglineIndex((i) => (i + 1) % personal.rotatingTaglines.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-10"
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="noise-grid pointer-events-none absolute inset-0 opacity-[0.025] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="section-shell relative z-10 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">

          {/* ── LEFT: Text content ────────────────────────────────────── */}
          <div className="order-2 lg:order-1">

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-muted">{personal.availability}</span>
              <span className="font-mono text-xs text-muted">·</span>
              <MapPin size={11} className="text-muted" />
              <span className="font-mono text-xs text-muted">{personal.location}</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-display text-3xl font-bold leading-[1.07] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-gradient block sm:inline">{personal.name}</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-3 h-8 text-lg font-medium sm:text-xl"
            >
              <TypingText />
            </motion.div>

            {/* Rotating tagline */}
            <div className="mt-2 h-6 overflow-hidden">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-muted"
              >
                {personal.rotatingTaglines[taglineIndex]}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base"
            >
              {personal.status} — building intelligent, scalable software across full‑stack development,
              machine learning, and cloud platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-primary/40 active:scale-[0.98]"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
              <a
                href={personal.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-all hover:border-primary/50 hover:scale-[1.02]"
              >
                <Download size={14} /> Resume
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-text"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {[
                { href: personal.github, icon: Github, label: "GitHub" },
                { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-muted backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
              {/* LeetCode */}
              <a
                href={personal.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 text-muted backdrop-blur-sm transition-all hover:border-primary/50 hover:text-primary hover:scale-110"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
              <div className="flex items-center gap-1.5 rounded-full border border-border bg-surface/60 px-3 py-1.5 backdrop-blur-sm">
                <Sparkles size={11} className="text-accent" />
                <span className="font-mono text-[11px] text-muted">B.Tech CSBS · 2026</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Profile photo ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div className="relative">
              {/* Photo — fully blended into background */}
              <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-[28rem] lg:w-[28rem]"
                style={{
                  WebkitMaskImage: "radial-gradient(ellipse 70% 75% at 50% 45%, black 30%, rgba(0,0,0,0.6) 55%, transparent 75%)",
                  maskImage: "radial-gradient(ellipse 70% 75% at 50% 45%, black 30%, rgba(0,0,0,0.6) 55%, transparent 75%)",
                  isolation: "isolate",
                }}
              >
                <Image
                  src={personal.photo}
                  alt="Dharshini Ganesh — Software Engineer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 448px"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse 85% 90% at 50% 45%, transparent 40%, var(--background) 78%)",
                  }}
                />
              </div>

              {/* Floating badge — Available */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 flex items-center gap-2 rounded-2xl border border-border bg-surface/80 px-3 py-1.5 shadow-lg backdrop-blur-md"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="font-mono text-xs font-medium">Open to Work</span>
              </motion.div>

              {/* Floating badge — CGPA */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 right-0 flex items-center gap-2 rounded-2xl border border-border bg-surface/80 px-3 py-1.5 shadow-lg backdrop-blur-md"
              >
                <span className="font-mono text-xs text-accent">CGPA</span>
                <span className="font-display text-sm font-bold">8.02</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
