"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, RefreshCw, Terminal, TriangleAlert } from "lucide-react";
import { scanSteps } from "@/data/dashboard";
import { Button } from "@/components/ui/button";

export function ScanPage() {
  const [running, setRunning] = useState(false);
  const [visible, setVisible] = useState(0);
  const [score, setScore] = useState(0);

  function startScan() {
    setRunning(true);
    setVisible(0);
    setScore(0);
  }

  useEffect(() => {
    if (!running) return;
    if (visible < scanSteps.length) {
      const t = setTimeout(() => setVisible((v) => v + 1), 420);
      return () => clearTimeout(t);
    } else {
      setRunning(false);
      const targets = [0, 42, 68, 81, 88];
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setScore(targets[i]);
        if (i >= targets.length - 1) clearInterval(interval);
      }, 300);
    }
  }, [running, visible]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3a50]">Scan</h1>
          <p className="mt-1 text-sm text-[#3b3a50]/55">Run a full production readiness scan</p>
        </div>
        <Button onClick={startScan} disabled={running}>
          <RefreshCw className={`h-4 w-4 ${running ? "animate-spin" : ""}`} />
          {running ? "Scanning…" : "Run scan"}
        </Button>
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
            explainmycode scan --repo neon-commerce-ai
          </div>
          {running && (
            <span className="flex items-center gap-1.5 text-xs text-[#2de29d]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2de29d]" />
              running
            </span>
          )}
        </div>

        <div className="space-y-2.5 p-5 font-mono text-sm">
          <p className="text-white/40">$ explainmycode scan --production-readiness --graph --security</p>

          {scanSteps.slice(0, visible).map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between rounded-md border border-white/8 bg-white/5 px-4 py-2.5"
            >
              <span className="flex items-center gap-3 text-white/80">
                {step.status === "done"
                  ? <Check className="h-3.5 w-3.5 text-[#2de29d]" />
                  : <TriangleAlert className="h-3.5 w-3.5 text-amber-400" />}
                {step.label}
              </span>
              <span className={step.status === "done" ? "text-[#2de29d]" : "text-amber-400"}>
                {step.status}
              </span>
            </motion.div>
          ))}

          {visible > 0 && (
            <div className="pt-2">
              <div className="mb-1.5 flex justify-between text-xs text-white/40">
                <span>Production readiness</span>
                <motion.span
                  key={score}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#2de29d]"
                >
                  {score}%
                </motion.span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-[#2de29d]"
                  animate={{ width: `${score}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}

          {!running && visible === scanSteps.length && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="pt-1 text-[#2de29d]"
            >
              analysis.complete — score: {score}<span className="animate-cursor">_</span>
            </motion.p>
          )}

          {visible === 0 && !running && (
            <p className="text-white/30">Press "Run scan" to start analysis<span className="animate-cursor">_</span></p>
          )}
        </div>
      </div>
    </div>
  );
}
