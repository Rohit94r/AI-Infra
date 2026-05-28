"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert, ShieldCheck, XCircle } from "lucide-react";
import { authChecks, securityAlerts } from "@/data/dashboard";
import { cn } from "@/lib/utils";

const severityColor: Record<string, string> = {
  critical: "border-red-300/50 bg-red-50 text-red-600",
  high: "border-amber-300/40 bg-amber-50 text-amber-700",
  medium: "border-sky-300/40 bg-sky-50 text-sky-700",
};

export function SecurityPage() {
  const open = securityAlerts.filter((a) => a.status === "open");
  const resolved = securityAlerts.filter((a) => a.status === "resolved");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Security</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Auth review, risk indicators, and security posture</p>
      </div>

      {/* Score + summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Security score", value: "81", icon: ShieldCheck, color: "text-[#2de29d]" },
          { label: "Open alerts", value: String(open.length), icon: ShieldAlert, color: "text-red-500" },
          { label: "Resolved", value: String(resolved.length), icon: CheckCircle2, color: "text-sky-500" },
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
              <card.icon className={cn("h-5 w-5", card.color)} />
            </div>
            <p className="mt-2 text-4xl font-semibold text-[#3b3a50]">{card.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_320px]">
        {/* Alerts */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <p className="font-semibold text-[#3b3a50]">Security alerts</p>
          <div className="mt-4 space-y-3">
            {securityAlerts.map((alert, i) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center justify-between gap-3 rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  {alert.status === "resolved"
                    ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2de29d]" />
                    : <ShieldAlert className="h-4 w-4 shrink-0 text-red-400" />}
                  <div>
                    <p className="text-sm font-medium text-[#3b3a50]">{alert.title}</p>
                    <p className="text-xs text-[#3b3a50]/40">{alert.area}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {alert.status !== "resolved" && (
                    <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium", severityColor[alert.severity])}>
                      {alert.severity}
                    </span>
                  )}
                  <span className={cn("text-xs font-medium", alert.status === "resolved" ? "text-[#2de29d]" : "text-red-500")}>
                    {alert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Auth checklist */}
        <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
          <p className="font-semibold text-[#3b3a50]">Auth checklist</p>
          <div className="mt-4 space-y-2.5">
            {authChecks.map((check, i) => (
              <div key={i} className="flex items-center gap-3">
                {check.pass
                  ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2de29d]" />
                  : <XCircle className="h-4 w-4 shrink-0 text-red-400" />}
                <p className={cn("text-sm", check.pass ? "text-[#3b3a50]" : "text-[#3b3a50]/55")}>{check.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
