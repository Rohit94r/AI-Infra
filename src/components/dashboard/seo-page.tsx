"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, XCircle } from "lucide-react";
import { seoPages } from "@/data/dashboard";
import { cn } from "@/lib/utils";

export function SeoPage() {
  const avgScore = Math.round(seoPages.reduce((s, p) => s + p.score, 0) / seoPages.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">SEO</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Metadata validation, indexing, and structured data</p>
      </div>

      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Average SEO score", value: String(avgScore) },
          { label: "Pages with OG tags", value: String(seoPages.filter((p) => p.hasOg).length) + "/" + seoPages.length },
          { label: "Pages with schema", value: String(seoPages.filter((p) => p.hasSchema).length) + "/" + seoPages.length },
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
              <Globe2 className="h-4 w-4 text-[#3b3a50]/25" />
            </div>
            <p className="mt-2 text-4xl font-semibold text-[#3b3a50]">{card.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Page table */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
        <p className="font-semibold text-[#3b3a50]">Page-level SEO analysis</p>
        <div className="mt-4 space-y-2">
          {seoPages.map((page, i) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-sm text-[#3b3a50]">{page.path}</p>
                  <p className="text-xs text-[#3b3a50]/45">{page.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  {/* Checks */}
                  <div className="flex items-center gap-2 text-xs text-[#3b3a50]/50">
                    {[
                      { label: "OG", pass: page.hasOg },
                      { label: "Canonical", pass: page.hasCanonical },
                      { label: "Schema", pass: page.hasSchema },
                    ].map((check) => (
                      <span key={check.label} className="flex items-center gap-1">
                        {check.pass
                          ? <CheckCircle2 className="h-3 w-3 text-[#2de29d]" />
                          : <XCircle className="h-3 w-3 text-red-400" />}
                        {check.label}
                      </span>
                    ))}
                  </div>
                  {/* Score */}
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-20 rounded-full bg-[#3b3a50]/8">
                      <div
                        className={cn("h-full rounded-full", page.score >= 80 ? "bg-[#2de29d]" : page.score >= 60 ? "bg-amber-400" : "bg-red-400")}
                        style={{ width: `${page.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[#3b3a50]">{page.score}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* OG Preview */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
        <p className="font-semibold text-[#3b3a50]">OpenGraph preview</p>
        <div className="mt-4 max-w-sm rounded-xl border border-[#3b3a50]/12 bg-[#f5f6f4] overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-[#2de29d]/20 to-[#3b3a50]/10 flex items-center justify-center">
            <Globe2 className="h-10 w-10 text-[#3b3a50]/20" />
          </div>
          <div className="p-3">
            <p className="text-xs text-[#3b3a50]/40">explainmycode.ai</p>
            <p className="mt-0.5 text-sm font-semibold text-[#3b3a50]">ExplainMyCode AI | AI Architecture Intelligence</p>
            <p className="mt-1 text-xs text-[#3b3a50]/55 line-clamp-2">Analyze repositories, detect technical debt, and validate production readiness.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
