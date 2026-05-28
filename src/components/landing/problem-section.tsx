"use client";

import { AlertTriangle, CheckCircle2, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const fastItems = [
  "Prototype launches in days",
  "Features appear from prompts",
  "UI looks polished in the demo",
  "APIs get generated instantly"
];

const debtItems = [
  "Architecture never reviewed",
  "Business rules drift across files",
  "Auth & API boundaries stay weak",
  "SEO, bundles, caching ignored"
];

const riskSignals = [
  "Duplicated business rules",
  "Oversized client components",
  "Generated service drift",
  "Weak auth boundaries",
  "Missing database indexes",
  "No cache ownership",
  "Unclear folder structure",
  "SEO metadata gaps"
];

export function ProblemSection() {
  return (
    <section id="problem" className="relative overflow-hidden bg-[#f7f8f6] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 dot-surface opacity-30" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">The AI Coding Problem</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3b3a50] sm:text-5xl lg:text-6xl">
            AI helped developers ship faster.{" "}
            <span className="text-[#3b3a50]/40">It also created a generation of unmaintainable codebases.</span>
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Fast shipping */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-[#2de29d]/30 bg-[#2de29d]/6 p-6"
          >
            <div className="flex items-center gap-3 text-[#3b3a50]">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#2de29d]">
                <Rocket className="h-4 w-4 text-[#10131b]" />
              </span>
              <h3 className="font-semibold">Fast Shipping</h3>
            </div>
            <div className="mt-5 grid gap-2">
              {fastItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-[#3b3a50]/10 bg-white/70 px-4 py-3 text-sm text-[#3b3a50]/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2de29d]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical debt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border border-red-400/20 bg-red-50/60 p-6"
          >
            <div className="flex items-center gap-3 text-[#3b3a50]">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-red-500">
                <AlertTriangle className="h-4 w-4 text-white" />
              </span>
              <h3 className="font-semibold">Technical Debt</h3>
            </div>
            <div className="mt-5 grid gap-2">
              {debtItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-red-200/60 bg-white/70 px-4 py-3 text-sm text-[#3b3a50]/80">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Risk signals */}
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {riskSignals.map((signal, i) => (
            <motion.div
              key={signal}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="rounded-lg border border-[#3b3a50]/10 bg-white/60 p-4"
            >
              <span className="mb-2 block font-mono text-[10px] text-red-500/80">RISK {String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-[#3b3a50]/70">{signal}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
