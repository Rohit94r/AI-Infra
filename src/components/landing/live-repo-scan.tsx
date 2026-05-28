"use client";

import { useEffect, useState } from "react";
import { Check, Terminal, TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";
import { terminalLines } from "@/data/platform";

export function LiveRepoScan() {
  const [score, setScore] = useState(62);

  useEffect(() => {
    const targets = [62, 74, 81, 88];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % targets.length;
      setScore(targets[i]);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="live-scan" className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#eef1ef] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 plus-surface opacity-50" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Left */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">Live Repo Scan</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3b3a50] sm:text-5xl">
            A scanner that feels like an AI operating system.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#3b3a50]/60">
            Terminal-style analysis that indexes routes, maps architecture, checks security, detects SEO issues, and finds duplicate logic.
          </p>

          {/* Animated score */}
          <div className="mt-8 inline-flex items-end gap-3 rounded-xl border border-[#2de29d]/40 bg-[#2de29d]/10 px-6 py-4">
            <motion.span
              key={score}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-semibold leading-none text-[#3b3a50]"
            >
              {score}
            </motion.span>
            <span className="mb-1 text-sm text-[#2de29d] font-medium">production score</span>
          </div>
        </div>

        {/* Terminal */}
        <div className="rounded-xl border border-[#3b3a50]/14 bg-[#3b3a50] shadow-[0_24px_80px_rgba(59,58,80,0.18)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2de29d]/80" />
            </div>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Terminal className="h-3.5 w-3.5 text-[#2de29d]" />
              repo-scan://neon-commerce-ai
            </div>
            <span className="flex items-center gap-1.5 text-xs text-[#2de29d]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2de29d]" />
              running
            </span>
          </div>

          <div className="space-y-3 p-5 font-mono text-sm">
            <p className="text-white/40">$ explainmycode scan --production-readiness --graph</p>

            {terminalLines.map((line, i) => (
              <motion.div
                key={line.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="flex items-center justify-between gap-4 rounded-md border border-white/8 bg-white/6 px-4 py-2.5"
              >
                <span className="flex items-center gap-3 text-white/80">
                  {line.status === "completed"
                    ? <Check className="h-3.5 w-3.5 text-[#2de29d]" />
                    : <TriangleAlert className="h-3.5 w-3.5 text-red-300" />}
                  {line.label}
                </span>
                <span className={line.status === "completed" ? "text-[#2de29d]" : "text-red-300"}>
                  {line.status}
                </span>
              </motion.div>
            ))}

            {/* Progress bar */}
            <div className="pt-2">
              <div className="mb-1.5 flex justify-between text-xs text-white/40">
                <span>Production readiness model</span>
                <span className="text-[#2de29d]">{score}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#2de29d]"
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>

            <p className="text-[#2de29d]">
              analysis.complete<span className="animate-cursor">_</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
