"use client";

import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { navLinks, personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Subtle gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(37,99,235,0.06), transparent)",
        }}
      />

      <div className="section-shell relative py-10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">

          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary via-secondary to-accent text-xs font-bold text-white">
                DG
              </span>
              <span className="font-display font-semibold">{personal.name}</span>
            </div>
            <p className="mt-1 font-mono text-xs text-muted max-w-xs">
              {personal.tagline}
            </p>
          </div>

          {/* Quick links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social + top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
            >
              <Github size={15} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
            >
              <Mail size={15} />
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-all hover:border-primary/50 hover:text-primary"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col items-center gap-1 border-t border-border pt-6 text-center sm:flex-row sm:justify-between">
          <p className="font-mono text-[11px] text-muted">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-mono text-[11px] text-muted">
            Built with{" "}
            <Heart size={11} className="text-red-400 fill-red-400" />
            {" "}using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
