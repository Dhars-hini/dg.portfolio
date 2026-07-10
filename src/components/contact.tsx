"use client";

import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Copy,
  Check,
  Download,
} from "lucide-react";
import { personal } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      subject: String(form.get("subject") || "").trim(),
      message: String(form.get("message") || "").trim(),
      company: String(form.get("company") || ""), // honeypot
    };

    const nextErrors: Record<string, string> = {};
    if (!payload.name) nextErrors.name = "Name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email))
      nextErrors.email = "Enter a valid email address.";
    if (!payload.message || payload.message.length < 10)
      nextErrors.message = "Message should be at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Open to software engineering, AI, and cloud-focused roles. Always happy to talk."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">

          {/* ── LEFT: Contact info ────────────────────────────────────── */}
          <Reveal>
            <div className="space-y-4">
              {/* Email with copy */}
              <div className="flex items-center justify-between rounded-2xl border border-border bg-surface px-4 py-3 transition-colors hover:border-primary/30">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-sm transition-colors hover:text-primary"
                >
                  <Mail size={16} className="shrink-0 text-muted" />
                  {personal.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="text-muted transition-colors hover:text-text cursor-pointer"
                >
                  {copied ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted">
                <MapPin size={16} className="shrink-0" />
                {personal.location}
              </div>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-text"
                >
                  <Github size={15} className="shrink-0" />
                  GitHub
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-text"
                >
                  <Linkedin size={15} className="shrink-0" />
                  LinkedIn
                </a>
                <a
                  href={personal.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition-all hover:border-primary/30 hover:text-text col-span-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                  LeetCode
                </a>
              </div>

              {/* Resume download */}
              <a
                href={personal.resumeUrl}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/40"
              >
                <Download size={15} />
                Download Resume
              </a>

              {/* Availability note */}
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-sm text-emerald-400">Currently open to opportunities</span>
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT: Contact form ───────────────────────────────────── */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                  {errors.name && (
                    <p className="mt-1 font-mono text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                  {errors.email && (
                    <p className="mt-1 font-mono text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  maxLength={120}
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-widest text-muted">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2000}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted/50 focus:border-primary focus:ring-1 focus:ring-primary/20"
                />
                {errors.message && (
                  <p className="mt-1 font-mono text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:scale-[1.02] hover:shadow-primary/40 disabled:opacity-60 cursor-pointer"
              >
                {status === "loading" && <Loader2 size={15} className="animate-spin" />}
                {status === "loading" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/8 p-3 text-sm text-emerald-400">
                  <CheckCircle2 size={15} />
                  Thank you for reaching out! I&apos;ll get back to you as soon as possible.
                </div>
              )}
              {status === "error" && (
                <p className="rounded-xl border border-red-500/20 bg-red-500/8 p-3 font-mono text-xs text-red-400">
                  Something went wrong. Please email {personal.email} directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
