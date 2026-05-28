"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, GitBranch, Plus, Star, Upload, X } from "lucide-react";
import { mockRepos } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const statusStyle: Record<string, string> = {
  completed: "text-[#2de29d] bg-[#2de29d]/10 border-[#2de29d]/30",
  warning: "text-amber-600 bg-amber-50 border-amber-300/40",
  scanning: "text-sky-600 bg-sky-50 border-sky-300/40",
};

export function RepositoriesPage() {
  const [showImport, setShowImport] = useState(false);
  const [tab, setTab] = useState<"github" | "zip">("github");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3a50]">Repositories</h1>
          <p className="mt-1 text-sm text-[#3b3a50]/55">{mockRepos.length} repositories connected</p>
        </div>
        <Button size="sm" onClick={() => setShowImport(true)}>
          <Plus className="h-4 w-4" />
          Import repo
        </Button>
      </div>

      {/* Repo cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockRepos.map((repo, i) => (
          <motion.div
            key={repo.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className="group rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5 transition hover:border-[#2de29d]/40 hover:shadow-[0_4px_24px_rgba(45,226,157,0.1)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#3b3a50]/8">
                  <GitBranch className="h-4 w-4 text-[#3b3a50]/60" />
                </span>
                <div>
                  <p className="font-semibold text-[#3b3a50]">{repo.name}</p>
                  <p className="font-mono text-[10px] text-[#3b3a50]/40">{repo.branch}</p>
                </div>
              </div>
              <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium", statusStyle[repo.status])}>
                {repo.status}
              </span>
            </div>

            <p className="mt-3 text-sm leading-5 text-[#3b3a50]/55 line-clamp-2">{repo.description}</p>

            {/* Score bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-[#3b3a50]/45">
                <span>Readiness</span>
                <span className="font-medium text-[#3b3a50]">{repo.score}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-[#3b3a50]/8">
                <div
                  className="h-full rounded-full bg-[#2de29d] transition-all"
                  style={{ width: `${repo.score}%` }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#3b3a50]/45">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3 text-red-400" />
                  {repo.issues} issues
                </span>
                <span>{repo.files.toLocaleString()} files</span>
                {repo.stars > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stars}
                  </span>
                )}
              </div>
              <span>Scanned {repo.lastScan}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Import modal */}
      {showImport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowImport(false)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md rounded-xl border border-[#3b3a50]/14 bg-white p-6 shadow-[0_24px_80px_rgba(59,58,80,0.18)]"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[#3b3a50]">Import repository</h2>
              <button onClick={() => setShowImport(false)} className="text-[#3b3a50]/40 hover:text-[#3b3a50]">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-4 flex rounded-lg border border-[#3b3a50]/10 bg-[#f5f6f4] p-1">
              {(["github", "zip"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "flex-1 rounded-md py-2 text-sm font-medium transition",
                    tab === t ? "bg-white text-[#3b3a50] shadow-sm" : "text-[#3b3a50]/50"
                  )}
                >
                  {t === "github" ? "GitHub URL" : "ZIP Upload"}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {tab === "github" ? (
                <div className="space-y-3">
                  <Input placeholder="https://github.com/owner/repo" />
                  <Input placeholder="Branch (default: main)" />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-[#3b3a50]/14 bg-[#f5f6f4] py-10">
                  <Upload className="h-8 w-8 text-[#3b3a50]/30" />
                  <p className="mt-3 text-sm text-[#3b3a50]/55">Drop your ZIP file here</p>
                  <p className="text-xs text-[#3b3a50]/35">or click to browse</p>
                </div>
              )}
            </div>

            <div className="mt-5 flex gap-3">
              <Button className="flex-1">
                <CheckCircle2 className="h-4 w-4" />
                Start scan
              </Button>
              <Button variant="secondary" onClick={() => setShowImport(false)}>Cancel</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
