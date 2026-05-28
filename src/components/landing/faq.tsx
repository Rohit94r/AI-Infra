"use client";

import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/platform";
import { SectionHeading } from "@/components/shared/section-heading";

export function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-[#020617] px-4 py-28 lg:px-6">
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Architecture intelligence questions, answered."
          description="Everything here is frontend-only mock content, shaped around the future product workflows."
          align="center"
        />
        <div className="mt-12 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.045]">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group p-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-400">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
