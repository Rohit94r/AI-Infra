"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Zap } from "lucide-react";
import { bundleMetrics, perfInsights } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const statusStyle: Record<string, string> = {
  good: "text-[#2de29d] bg-[#2de29d]/10 border-[#2de29d]/30",
  warning: "text-amber-600 bg-amber-50 border-amber-300/40",
  critical: "text-red-600 bg-red-50 border-red-300/40",
};

const impactColor: Record<string, string> = {
  High: "text-red-500 bg-red-50 border-red-200",
  Medium: "text-amber-600 bg-amber-50 border-amber-200",
  Low: "text-sky-600 bg-sky-50 border-sky-200",
};

export function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Performance</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Bundle analysis, rendering, and optimization insights</p>
      </div>

      {/* Summary cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Performance score", value: "74", icon: Zap, note: "-1 this week" },
          { label: "Bundle warnings", value: "3", icon: AlertTriangle, note: "routes over budget" },
          { label: "Optimizations", value: "4", icon: CheckCircle2, note: "available" },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#3b3a50]/55">{card.label}</p>
              <card.icon className="h-4 w-4 text-[#3b3a50]/30" />
            </div>
            <p className="mt-2 text-4xl font-semibold text-[#3b3a50]">{card.value}</p>
            <p className="mt-1 text-xs text-[#3b3a50]/40">{card.note}</p>
          </motion.div>
        ))}
      </div>

      {/* Bundle table */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
        <p className="font-semibold text-[#3b3a50]">Bundle sizes by route</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#3b3a50]/8 text-left text-xs text-[#3b3a50]/45">
                <th className="pb-3 font-medium">Route</th>
                <th className="pb-3 font-medium">Size</th>
                <th className="pb-3 font-medium">Gzip</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3b3a50]/6">
              {bundleMetrics.map((row, i) => (
                <motion.tr
                  key={row.route}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <td className="py-3 font-mono text-xs text-[#3b3a50]">{row.route}</td>
                  <td className="py-3 text-[#3b3a50]/70">{row.size}</td>
                  <td className="py-3 text-[#3b3a50]/70">{row.gzip}</td>
                  <td className="py-3">
                    <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium", statusStyle[row.status])}>
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Optimization insights */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
        <p className="font-semibold text-[#3b3a50]">Optimization opportunities</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {perfInsights.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] p-4"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-medium text-[#3b3a50]">{insight.title}</p>
                <span className={cn("shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium", impactColor[insight.impact])}>
                  {insight.impact}
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-[#3b3a50]/45">
                <span>Effort: {insight.effort}</span>
                <span>·</span>
                <span>{insight.area}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
