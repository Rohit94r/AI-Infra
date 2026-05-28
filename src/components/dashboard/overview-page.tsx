"use client";

import { motion } from "framer-motion";
import { Activity, AlertTriangle, ArrowRight, GitBranch } from "lucide-react";
import { activityFeed, mockIssues, overviewScores } from "@/data/dashboard";
import { dashboardScores, heatmapCells } from "@/data/platform";
import { cn } from "@/lib/utils";

const severityColor: Record<string, string> = {
  critical: "border-red-300/50 bg-red-50 text-red-600",
  high: "border-amber-300/40 bg-amber-50 text-amber-700",
  medium: "border-sky-300/40 bg-sky-50 text-sky-700",
  low: "border-emerald-300/40 bg-emerald-50 text-emerald-700",
};

export function OverviewPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Overview</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Production readiness for neon-commerce-ai</p>
      </div>

      {/* Score cards */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {overviewScores.map((score, i) => (
          <motion.div
            key={score.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#3b3a50]/55">{score.label}</p>
              <score.icon className="h-4 w-4 text-[#3b3a50]/30" />
            </div>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-4xl font-semibold text-[#3b3a50]">{score.value}</span>
              <span className={cn("mb-1 text-xs font-medium", score.trend.startsWith("+") ? "text-[#2de29d]" : "text-red-500")}>
                {score.trend}
              </span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-[#3b3a50]/8">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: score.color }}
                initial={{ width: 0 }}
                animate={{ width: `${score.value}%` }}
                transition={{ duration: 0.8, delay: i * 0.06 + 0.2 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        {/* Architecture scores detail */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#3b3a50]">Readiness breakdown</p>
            <span className="text-3xl font-semibold text-[#3b3a50]">88</span>
          </div>
          <div className="mt-5 space-y-4">
            {dashboardScores.map((score, i) => (
              <div key={score.label}>
                <div className="flex justify-between text-xs text-[#3b3a50]/55">
                  <span>{score.label}</span>
                  <span>{score.value}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-[#3b3a50]/6">
                  <motion.div
                    className="h-full rounded-full bg-[#2de29d]"
                    initial={{ width: 0 }}
                    animate={{ width: `${score.value}%` }}
                    transition={{ duration: 0.9, delay: i * 0.07 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <p className="font-semibold text-[#3b3a50]">Recent activity</p>
          <div className="mt-4 space-y-3">
            {activityFeed.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2de29d]/15">
                  <Activity className="h-3 w-3 text-[#2de29d]" />
                </span>
                <div>
                  <p className="text-sm text-[#3b3a50]">{item.action}</p>
                  <p className="text-xs text-[#3b3a50]/45">{item.repo} · {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Issues + Heatmap */}
      <div className="grid gap-5 xl:grid-cols-[1fr_280px]">
        {/* Issues */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <p className="font-semibold text-[#3b3a50]">Open issues</p>
            </div>
            <span className="rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">{mockIssues.length}</span>
          </div>
          <div className="mt-4 space-y-2">
            {mockIssues.slice(0, 4).map((issue) => (
              <div key={issue.id} className="flex items-center justify-between gap-3 rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] px-4 py-3">
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-[#3b3a50]">{issue.title}</p>
                  <p className="text-xs text-[#3b3a50]/45">{issue.area} · {issue.file}</p>
                </div>
                <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium", severityColor[issue.severity])}>
                  {issue.severity}
                </span>
              </div>
            ))}
          </div>
          <button className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#2de29d] hover:underline">
            View all issues <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Heatmap */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <div className="flex items-center gap-2">
            <GitBranch className="h-4 w-4 text-[#3b3a50]/40" />
            <p className="font-semibold text-[#3b3a50]">Repo heatmap</p>
          </div>
          <div className="mt-4 grid grid-cols-7 gap-1">
            {heatmapCells.map((v, i) => (
              <span
                key={i}
                className="aspect-square rounded-sm"
                style={{ backgroundColor: `rgba(${v > 80 ? "239,68,68" : v > 58 ? "45,226,157" : "59,58,80"},${0.1 + v / 200})` }}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] text-[#3b3a50]/40">
            <span>Low risk</span>
            <span>High risk</span>
          </div>
        </div>
      </div>
    </div>
  );
}
