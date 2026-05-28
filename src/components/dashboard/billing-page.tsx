import { Check, CreditCard, Download } from "lucide-react";
import { billingPlans, invoices } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3a50]">Billing</h1>
        <p className="mt-1 text-sm text-[#3b3a50]/55">Manage your subscription and invoices</p>
      </div>

      {/* Current plan banner */}
      <div className="rounded-xl border border-[#2de29d]/30 bg-[#2de29d]/8 p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-[#2de29d]" />
            <div>
              <p className="font-semibold text-[#3b3a50]">Pro plan — $29/month</p>
              <p className="text-sm text-[#3b3a50]/55">Next billing date: Jan 1, 2025</p>
            </div>
          </div>
          <Button variant="secondary" size="sm">Manage</Button>
        </div>
      </div>

      {/* Plan cards */}
      <div className="grid gap-4 lg:grid-cols-3">
        {billingPlans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "rounded-xl border p-5 transition",
              plan.highlighted
                ? "border-[#2de29d]/40 bg-white shadow-[0_0_40px_rgba(45,226,157,0.12)]"
                : "border-[#3b3a50]/10 bg-white/80"
            )}
          >
            {plan.highlighted && (
              <span className="mb-3 inline-block rounded-full border border-[#2de29d]/30 bg-[#2de29d]/12 px-2.5 py-0.5 text-[10px] font-semibold text-[#3b3a50]">
                Current plan
              </span>
            )}
            <p className="font-semibold text-[#3b3a50]">{plan.name}</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-semibold text-[#3b3a50]">{plan.price}</span>
              <span className="mb-1 text-sm text-[#3b3a50]/45">{plan.period}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#3b3a50]/70">
                  <Check className="h-3.5 w-3.5 shrink-0 text-[#2de29d]" />
                  {f}
                </li>
              ))}
            </ul>
            <Button
              className="mt-5 w-full"
              variant={plan.current ? "secondary" : "default"}
              size="sm"
            >
              {plan.current ? "Current plan" : `Upgrade to ${plan.name}`}
            </Button>
          </div>
        ))}
      </div>

      {/* Invoices */}
      <div className="rounded-xl border border-[#3b3a50]/10 bg-white/80 p-5">
        <p className="font-semibold text-[#3b3a50]">Invoice history</p>
        <div className="mt-4 divide-y divide-[#3b3a50]/6">
          {invoices.map((inv) => (
            <div key={inv.id} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-[#3b3a50]">{inv.id}</p>
                <p className="text-xs text-[#3b3a50]/45">{inv.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#3b3a50]">{inv.amount}</span>
                <span className="rounded-full border border-[#2de29d]/30 bg-[#2de29d]/10 px-2 py-0.5 text-[10px] font-medium text-[#2de29d]">
                  {inv.status}
                </span>
                <button className="text-[#3b3a50]/35 hover:text-[#3b3a50]">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
