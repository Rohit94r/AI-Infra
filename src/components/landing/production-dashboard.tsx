"use client";

import { BrainCircuit, Gauge, GitBranch, Lightbulb, ScanLine, TriangleAlert } from "lucide-react";
import { motion } from "framer-motion";
import { dashboardScores, graphNodes, heatmapCells, issueFeed } from "@/data/platform";
import { cn } from "@/lib/utils";

const severityColor: Record<string, string> = {
  critical: "border-red-300/50 bg-red-50 text-red-600",
  high: "border-amber-300/50 bg-amber-50 text-amber-700",
  medium: "border-sky-300/40 bg-sky-50 text-sky-700",
  low: "border-emerald-300/40 bg-emerald-50 text-emerald-700"
};

export function ProductionDashboard() {
  return (
    <section id="readiness" className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#eef1ef] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 plus-surface opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">Production Readiness</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#3b3a50] sm:text-5xl">
            One control room for architecture, security, and scale.
          </h2>
        </div>

        {/* Dashboard shell */}
        <div className="overflow-hidden rounded-xl border border-[#3b3a50]/14 bg-white/80 shadow-[0_24px_80px_rgba(59,58,80,0.12)] backdrop-blur-xl">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-[#3b3a50]/10 px-5 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2de29d]/15 text-[#2de29d]">
                <Gauge className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#3b3a50]">neon-commerce-ai</p>
                <p className="text-xs text-[#3b3a50]/45">main · 1,248 files indexed</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5 rounded-full border border-[#2de29d]/30 bg-[#2de29d]/10 px-3 py-1 text-xs font-medium text-[#2de29d]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2de29d]" />
              Live analysis
            </span>
          </div>

          <div className="grid lg:grid-cols-[200px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-[#3b3a50]/10 p-3 lg:border-b-0 lg:border-r">
              {["Readiness", "Issues", "Graph", "Heatmap", "AI Suggestions", "Repo Chat"].map((item, i) => (
                <div
                  key={item}
                  className={cn(
                    "mb-1 flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm",
                    i === 0
                      ? "border border-[#2de29d]/30 bg-[#2de29d]/10 text-[#3b3a50] font-medium"
                      : "text-[#3b3a50]/50 hover:text-[#3b3a50]"
                  )}
                >
                  <ScanLine className="h-3.5 w-3.5" />
                  {item}
                </div>
              ))}
            </aside>

            {/* Main */}
            <div className="grid gap-3 p-4 xl:grid-cols-3">
              {/* Score */}
              <div className="rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-5 xl:row-span-2">
                <p className="text-xs text-[#3b3a50]/45">Architecture Score</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-7xl font-semibold leading-none text-[#3b3a50]">88</span>
                  <span className="mb-2 text-xs font-medium text-[#2de29d]">healthy</span>
                </div>
                <div className="mt-6 space-y-3.5">
                  {dashboardScores.map((score, i) => (
                    <div key={score.label}>
                      <div className="flex justify-between text-xs text-[#3b3a50]/50">
                        <span>{score.label}</span>
                        <span>{score.value}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-[#3b3a50]/8">
                        <motion.div
                          className="h-full rounded-full bg-[#2de29d]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${score.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Graph */}
              <div className="relative min-h-64 overflow-hidden rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-4 xl:col-span-2">
                <p className="text-xs font-semibold text-[#3b3a50]">Repo Intelligence Graph</p>
                <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M8 48 C24 12 42 62 54 25 S76 41 88 26"
                    fill="none" stroke="rgba(45,226,157,0.6)" strokeWidth="0.4"
                    animate={{ strokeDashoffset: [0, -12] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    strokeDasharray="1.5 2"
                  />
                  <motion.path
                    d="M28 25 C38 78 61 18 80 74"
                    fill="none" stroke="rgba(59,58,80,0.3)" strokeWidth="0.35"
                    animate={{ strokeDashoffset: [0, 10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    strokeDasharray="1 1.5"
                  />
                </svg>
                {graphNodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className="absolute rounded-md border border-[#3b3a50]/14 bg-white px-2.5 py-1.5 text-xs text-[#3b3a50] shadow-sm"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4 + node.x * 0.02, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {node.label}
                  </motion.div>
                ))}
              </div>

              {/* Heatmap */}
              <div className="rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-4">
                <p className="text-xs font-semibold text-[#3b3a50]">Repo Heatmap</p>
                <div className="mt-3 grid grid-cols-7 gap-1">
                  {heatmapCells.map((v, i) => (
                    <motion.span
                      key={i}
                      className="aspect-square rounded-sm"
                      style={{ backgroundColor: `rgba(${v > 80 ? "239,68,68" : v > 58 ? "45,226,157" : "59,58,80"},${0.12 + v / 200})` }}
                      animate={{ opacity: v > 75 ? [0.6, 1, 0.6] : 1 }}
                      transition={{ duration: 2 + (i % 4), repeat: Infinity }}
                    />
                  ))}
                </div>
              </div>

              {/* Issues */}
              <div className="rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-4">
                <div className="flex items-center gap-2 text-[#3b3a50]">
                  <TriangleAlert className="h-4 w-4 text-red-500" />
                  <p className="text-xs font-semibold">Issue Feed</p>
                </div>
                <div className="mt-3 space-y-2">
                  {issueFeed.slice(0, 3).map((issue) => (
                    <div key={issue.title} className="flex items-center justify-between gap-2 rounded-md border border-[#3b3a50]/8 bg-white px-3 py-2">
                      <p className="text-xs text-[#3b3a50]/70 line-clamp-1">{issue.title}</p>
                      <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-[10px]", severityColor[issue.severity])}>
                        {issue.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI suggestions */}
              <div className="rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-4">
                <div className="flex items-center gap-2 text-[#3b3a50]">
                  <BrainCircuit className="h-4 w-4 text-[#2de29d]" />
                  <p className="text-xs font-semibold">AI Suggestions</p>
                </div>
                <div className="mt-3 space-y-2">
                  {["Stabilize API boundaries", "Reduce bundle pressure", "Repair SEO coverage"].map((s) => (
                    <div key={s} className="flex items-center gap-2 rounded-md border border-[#3b3a50]/8 bg-white px-3 py-2">
                      <Lightbulb className="h-3 w-3 shrink-0 text-[#2de29d]" />
                      <p className="text-xs text-[#3b3a50]/65">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dependency */}
              <div className="rounded-lg border border-[#3b3a50]/10 bg-[#f7f8f6] p-4 xl:col-span-2">
                <div className="flex items-center gap-2 text-[#3b3a50]">
                  <GitBranch className="h-4 w-4 text-[#3b3a50]/60" />
                  <p className="text-xs font-semibold">Dependency Graph</p>
                </div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {["routes → services", "auth → policies", "billing → database", "seo → app router"].map((edge) => (
                    <div key={edge} className="rounded-md border border-[#3b3a50]/8 bg-white px-3 py-2 font-mono text-xs text-[#3b3a50]/55">
                      {edge}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
