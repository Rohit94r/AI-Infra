"use client";

import { motion } from "framer-motion";

const nodes = [
  [8, 22],
  [16, 68],
  [29, 38],
  [42, 18],
  [51, 72],
  [64, 35],
  [78, 20],
  [86, 64],
  [94, 42]
] as const;

const particles = Array.from({ length: 36 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  top: (index * 61) % 100,
  delay: (index % 8) * 0.35,
  duration: 8 + (index % 5)
}));

export function BackgroundSystem() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.12),transparent_28%),linear-gradient(180deg,rgba(2,6,23,0),rgba(2,6,23,0.92))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.065)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,black,transparent_82%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M8 22 C22 10 33 42 42 18 S66 30 78 20 90 24 94 42"
          fill="none"
          stroke="rgba(56,189,248,0.42)"
          strokeWidth="0.16"
          strokeDasharray="1.4 1.8"
          animate={{ strokeDashoffset: [0, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M16 68 C27 52 36 80 51 72 S72 52 86 64"
          fill="none"
          stroke="rgba(168,85,247,0.36)"
          strokeWidth="0.16"
          strokeDasharray="1 1.6"
          animate={{ strokeDashoffset: [0, 10] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M29 38 C42 46 54 18 64 35 S78 66 94 42"
          fill="none"
          stroke="rgba(14,165,233,0.35)"
          strokeWidth="0.14"
          strokeDasharray="0.7 1.2"
          animate={{ strokeDashoffset: [0, -8] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      {nodes.map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-2 w-2 rounded-full border border-sky-200/50 bg-sky-300 shadow-[0_0_22px_rgba(56,189,248,0.75)]"
          style={{ left: `${left}%`, top: `${top}%` }}
          animate={{ scale: [0.85, 1.35, 0.85], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 3.2 + index * 0.15, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-slate-400/50"
          style={{ left: `${particle.left}%`, top: `${particle.top}%` }}
          animate={{ y: [-16, 42], opacity: [0, 0.8, 0] }}
          transition={{ duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0,rgba(255,255,255,0.025)_50%,transparent_100%)] bg-[length:100%_6px] opacity-40" />
    </div>
  );
}
