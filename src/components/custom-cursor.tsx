"use client";

import { useEffect, useRef, useState } from "react";

// Premium custom cursor:
// - Outer ring follows with spring lag (trail feel)
// - Inner dot snaps instantly
// - Expands on hover over interactive elements
// - Disabled on touch/mobile devices
// Reads pointer type — falls back to default if touch-primary

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [clicked, setClicked] = useState(false);

  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show on fine-pointer (mouse) devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setVisible(true);
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.closest("a, button, [role='button'], input, textarea, select, label, [tabindex]");
      setExpanded(!!interactive);
    };

    const onDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onEnter, { passive: true });
    window.addEventListener("mousedown", onDown);

    if (prefersReduced) {
      return () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseover", onEnter);
        window.removeEventListener("mousedown", onDown);
        document.body.style.cursor = "";
      };
    }

    // Spring-follow loop for outer ring
    const LERP = 0.12;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * LERP;
      ring.current.y += (pos.current.y - ring.current.y) * LERP;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mousedown", onDown);
      document.body.style.cursor = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — spring lag gives the scroll-trail feel */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="cursor-ring"
        style={{
          width: expanded ? 44 : clicked ? 28 : 32,
          height: expanded ? 44 : clicked ? 28 : 32,
          opacity: expanded ? 0.5 : 0.7,
          borderColor: expanded ? "var(--accent)" : "var(--primary)",
          marginLeft: expanded ? -6 : 0,
          marginTop: expanded ? -6 : 0,
        }}
      />
      {/* Inner dot — instant snap */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="cursor-dot"
        style={{
          transform: "translate(-9999px, -9999px)",
          background: expanded ? "var(--accent)" : "var(--primary)",
          width: clicked ? 6 : 8,
          height: clicked ? 6 : 8,
        }}
      />
    </>
  );
}
