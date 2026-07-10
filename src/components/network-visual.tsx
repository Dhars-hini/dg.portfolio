"use client";

import { motion } from "framer-motion";

// Signature visual: a constellation of nodes connected by lines, with a
// slow ambient pulse — representing the AI / cloud / data theme without
// resorting to a literal globe or stock illustration.

const nodes = [
  { id: "n1", x: 60, y: 80, r: 5 },
  { id: "n2", x: 220, y: 40, r: 7 },
  { id: "n3", x: 340, y: 130, r: 4 },
  { id: "n4", x: 140, y: 200, r: 6 },
  { id: "n5", x: 300, y: 260, r: 5 },
  { id: "n6", x: 70, y: 300, r: 4 },
  { id: "n7", x: 230, y: 330, r: 8 },
  { id: "n8", x: 380, y: 60, r: 4 },
];

const edges: [string, string][] = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n2", "n4"],
  ["n4", "n5"],
  ["n4", "n6"],
  ["n5", "n7"],
  ["n6", "n7"],
  ["n3", "n8"],
  ["n2", "n8"],
  ["n5", "n3"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function NetworkVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[440px] mx-auto">
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--primary), var(--secondary) 45%, transparent 70%)",
        }}
      />
      <svg
        viewBox="0 0 440 440"
        className="relative h-full w-full"
        role="img"
        aria-label="Animated network graph representing AI and cloud systems"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <g transform="translate(10,10)">
          {edges.map(([a, b], i) => {
            const from = findNode(a);
            const to = findNode(b);
            return (
              <motion.line
                key={`${a}-${b}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#edgeGradient)"
                strokeWidth={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.08, ease: "easeOut" }}
              />
            );
          })}

          {nodes.map((node, i) => (
            <motion.circle
              key={node.id}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--primary)" : "var(--secondary)"}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.15, 1],
                opacity: 1,
                y: [0, -6, 0],
              }}
              transition={{
                scale: { duration: 0.5, delay: i * 0.08 },
                opacity: { duration: 0.5, delay: i * 0.08 },
                y: {
                  duration: 4 + i * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                },
              }}
              style={{ transformOrigin: `${node.x}px ${node.y}px` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
