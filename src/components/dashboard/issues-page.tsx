"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, FileCode2, Lightbulb } from "lucide-react";
import { mockIssues } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const severityColor: Record<string, string> = {
  critical: "border-red-300/50 bg-red-50 text-red-600",
  high: "border-amber-300/40 bg-amber-50 text-amber-700",
  medium: "border-sky-300/40 bg-sky-50 text-sky-700",
  low: "border-emerald-300/40 bg-emerald-50 text-emerald-700",
};

const filters = ["All", "Architecture", "Security", "SEO", "Performance", "Database", "Frontend"];

export function IssuesPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? mockIssues : mockIssues.filter((i) => i.area === active);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Issues</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">{mockIssues.length} open issues across all repositories</p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition",
              active === f
                ? "border-[#2de29d]/40 bg-[#2de29d]/12 text-[#3b3a50]"
                : "border-[#3b3a50]/10 bg-white text-[#3b3a50]/55 hover:border-[#3b3a50]/20 hover:text-[#3b3a50]"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Issue cards */}
      <div className="space-y-3">
        {filtered.map((issue, i) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                <div>
                  <p className="font-semibold text-[#3b3a50]">{issue.title}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <FileCode2 className="h-3 w-3 text-[#3b3a50]/35" />
                    <span className="font-mono text-[10px] text-[#3b3a50]/45">{issue.file}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-[#3b3a50]/10 bg-[#f5f6f4] px-2 py-0.5 text-[10px] text-[#3b3a50]/55">
                  {issue.area}
                </span>
                <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium", severityColor[issue.severity])}>
                  {issue.severity}
                </span>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#3b3a50]/60">{issue.description}</p>

            <div className="mt-3 flex items-start gap-2 rounded-lg bg-[#2de29d]/8 px-3 py-2.5">
              <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2de29d]" />
              <p className="text-xs leading-5 text-[#3b3a50]/70">{issue.recommendation}</p>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#3b3a50]/40">Impact score</span>
                <div className="h-1.5 w-24 rounded-full bg-[#3b3a50]/8">
                  <div
                    className="h-full rounded-full bg-red-400"
                    style={{ width: `${issue.impact}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-[#3b3a50]">{issue.impact}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
