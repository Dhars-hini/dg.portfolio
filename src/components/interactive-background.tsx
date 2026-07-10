"use client";

import { useEffect, useRef } from "react";

// Premium interactive background:
// - Animated aurora gradient blobs
// - Neural network particle canvas (mouse-reactive)
// Kept at 60fps with requestAnimationFrame; paused under prefers-reduced-motion

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface Connection {
  a: number;
  b: number;
}

const PARTICLE_COUNT = 55;
const CONNECTION_DIST = 130;
const MOUSE_REPEL_DIST = 110;
const MOUSE_REPEL_STRENGTH = 0.018;

function initParticles(w: number, h: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 1.8 + 0.8,
    opacity: Math.random() * 0.5 + 0.25,
  }));
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const particles = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const isDark = useRef(true);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.current = initParticles(canvas.width, canvas.height);
    };
    setSize();

    const checkTheme = () => {
      isDark.current = document.documentElement.classList.contains("dark");
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const onResize = () => setSize();
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const dark = isDark.current;
      const primaryColor = dark ? "37,99,235" : "37,99,235";
      const accentColor = dark ? "6,182,212" : "6,182,212";
      const secondaryColor = dark ? "139,92,246" : "139,92,246";

      // ── Move particles ──────────────────────────────────────────────
      const ps = particles.current;
      const mx = mouse.current.x;
      const my = mouse.current.y;

      for (const p of ps) {
        // Mouse repel
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
          p.vx += (dx / dist) * force * MOUSE_REPEL_STRENGTH;
          p.vy += (dy / dist) * force * MOUSE_REPEL_STRENGTH;
        }

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2;
          p.vy = (p.vy / speed) * 1.2;
        }

        // Drift friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0) { p.x = 0; p.vx *= -1; }
        if (p.x > w) { p.x = w; p.vx *= -1; }
        if (p.y < 0) { p.y = 0; p.vy *= -1; }
        if (p.y > h) { p.y = h; p.vy *= -1; }
      }

      // ── Connections ──────────────────────────────────────────────────
      const connections: Connection[] = [];
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DIST) {
            connections.push({ a: i, b: j });
            const alpha = (1 - d / CONNECTION_DIST) * 0.35;
            const grad = ctx.createLinearGradient(ps[i].x, ps[i].y, ps[j].x, ps[j].y);
            grad.addColorStop(0, `rgba(${primaryColor},${alpha})`);
            grad.addColorStop(1, `rgba(${accentColor},${alpha})`);
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      void connections; // suppress unused warning

      // ── Nodes ────────────────────────────────────────────────────────
      ps.forEach((p, i) => {
        const color =
          i % 3 === 0 ? primaryColor : i % 3 === 1 ? accentColor : secondaryColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Aurora gradient blobs — CSS only, no JS overhead */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Top-left purple blob */}
        <div
          className="aurora-blob"
          style={{
            top: "-20%",
            left: "-10%",
            width: "55vw",
            height: "55vw",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 70%)",
            animationDelay: "0s",
          }}
        />
        {/* Top-right blue blob */}
        <div
          className="aurora-blob"
          style={{
            top: "-10%",
            right: "-15%",
            width: "60vw",
            height: "60vw",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 70%)",
            animationDelay: "-7s",
          }}
        />
        {/* Centre cyan blob */}
        <div
          className="aurora-blob"
          style={{
            top: "30%",
            left: "30%",
            width: "50vw",
            height: "50vw",
            background:
              "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
            animationDelay: "-14s",
          }}
        />
        {/* Bottom-left accent blob */}
        <div
          className="aurora-blob"
          style={{
            bottom: "-15%",
            left: "5%",
            width: "45vw",
            height: "45vw",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)",
            animationDelay: "-21s",
          }}
        />
      </div>

      {/* Particle neural network canvas */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ opacity: 0.65 }}
      />
    </>
  );
}
