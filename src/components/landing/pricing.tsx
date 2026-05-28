import Link from "next/link";
import { Check } from "lucide-react";
import { pricingPlans } from "@/data/platform";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden border-b border-[#3b3a50]/10 bg-[#f7f8f6] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 plus-surface opacity-35" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[#3b3a50]/50">Pricing</p>
          <h2 className="mt-4 text-4xl font-semibold text-[#3b3a50] sm:text-5xl">
            Choose your validation layer.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={cn(
                "relative rounded-xl border bg-white/80 p-6 transition duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-[#2de29d]/50 shadow-[0_0_60px_rgba(45,226,157,0.18),inset_0_0_0_1px_rgba(45,226,157,0.12)]"
                  : "border-[#3b3a50]/10 hover:border-[#3b3a50]/20"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-[#2de29d]/40 bg-[#2de29d]/15 px-3 py-0.5 text-xs font-semibold text-[#3b3a50]">
                  Most Popular
                </span>
              )}
              <p className="text-base font-semibold text-[#3b3a50]">{plan.name}</p>
              <div className="mt-4 flex items-end gap-1.5">
                <span className="text-5xl font-semibold text-[#3b3a50]">{plan.price}</span>
                <span className="mb-1.5 text-sm text-[#3b3a50]/45">/ month</span>
              </div>
              <p className="mt-4 min-h-12 text-sm leading-6 text-[#3b3a50]/55">{plan.description}</p>
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-[#3b3a50]/75">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#2de29d]" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full" variant={plan.highlighted ? "default" : "secondary"} asChild>
                <Link href="/dashboard">{plan.cta}</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
