"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const tabs = ["Workspace", "Appearance", "Notifications", "Scan", "Repositories"];

export function SettingsPage() {
  const [tab, setTab] = useState("Workspace");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Settings</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Manage workspace and preferences</p>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 rounded-xl border border-[#3b3a50]/10 bg-[#f5f6f4] p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition",
              tab === t ? "bg-white text-[#3b3a50] shadow-sm" : "text-[#3b3a50]/50 hover:text-[#3b3a50]"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-6">
        {tab === "Workspace" && (
          <div className="space-y-5 max-w-lg">
            <h2 className="font-semibold text-[#3b3a50]">Workspace settings</h2>
            {[
              { label: "Workspace name", value: "My Workspace" },
              { label: "Slug", value: "my-workspace" },
              { label: "Owner email", value: "rohit@example.com" },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-1.5 block text-sm font-medium text-[#3b3a50]">{field.label}</label>
                <Input defaultValue={field.value} />
              </div>
            ))}
            <Button size="sm">Save changes</Button>
          </div>
        )}

        {tab === "Appearance" && (
          <div className="space-y-5 max-w-lg">
            <h2 className="font-semibold text-[#3b3a50]">Appearance</h2>
            <div>
              <p className="mb-3 text-sm font-medium text-[#3b3a50]">Theme</p>
              <div className="flex gap-3">
                {["Light", "Dark", "System"].map((t) => (
                  <button
                    key={t}
                    className={cn(
                      "rounded-lg border px-4 py-2 text-sm transition",
                      t === "Light"
                        ? "border-[#2de29d]/40 bg-[#2de29d]/10 text-[#3b3a50]"
                        : "border-[#3b3a50]/10 text-[#3b3a50]/55 hover:border-[#3b3a50]/20"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "Notifications" && (
          <div className="space-y-4 max-w-lg">
            <h2 className="font-semibold text-[#3b3a50]">Notifications</h2>
            {[
              "Scan completed",
              "New critical issue detected",
              "Security alert",
              "Weekly readiness report",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] px-4 py-3">
                <p className="text-sm text-[#3b3a50]">{item}</p>
                <div className="h-5 w-9 rounded-full bg-[#2de29d] relative cursor-pointer">
                  <div className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "Scan" && (
          <div className="space-y-5 max-w-lg">
            <h2 className="font-semibold text-[#3b3a50]">Scan preferences</h2>
            {[
              { label: "Max files per scan", value: "150" },
              { label: "Default branch", value: "main" },
              { label: "Scan schedule", value: "On push" },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-1.5 block text-sm font-medium text-[#3b3a50]">{field.label}</label>
                <Input defaultValue={field.value} />
              </div>
            ))}
            <Button size="sm">Save preferences</Button>
          </div>
        )}

        {tab === "Repositories" && (
          <div className="space-y-4 max-w-lg">
            <h2 className="font-semibold text-[#3b3a50]">Repository preferences</h2>
            {["Auto-scan on import", "Include test files", "Scan node_modules", "Generate README on scan"].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-[#3b3a50]/8 bg-[#f5f6f4] px-4 py-3">
                <p className="text-sm text-[#3b3a50]">{item}</p>
                <div className={cn("h-5 w-9 rounded-full relative cursor-pointer", item.includes("Auto") || item.includes("README") ? "bg-[#2de29d]" : "bg-[#3b3a50]/15")}>
                  <div className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-all", item.includes("Auto") || item.includes("README") ? "right-0.5" : "left-0.5")} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
