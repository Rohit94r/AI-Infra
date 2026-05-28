"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Bot, Send, UserRound } from "lucide-react";
import { chatPrompts } from "@/data/platform";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Message = {
  role: "assistant" | "user";
  content: string;
};

const cannedAnswers: Record<string, string> = {
  "How does authentication work?":
    "Authentication is treated as a system boundary. ExplainMyCode AI maps middleware, route guards, session access, policy helpers, and duplicated checks so teams can centralize authorization before launch.",
  "Which components are too large?":
    "The analyzer flags client components that own too much data fetching, charting, graph rendering, and state. The first fix is usually lazy loading heavy visualization surfaces.",
  "Why is this route slow?":
    "Slow routes are traced through API calls, database access, cache misses, synchronous imports, and bundle hydration pressure. The platform turns that path into a production fix plan.",
  "What hurts SEO performance?":
    "Common SEO risks include missing metadata, weak canonical coverage, client-only content, no structured data, and oversized bundles that delay meaningful render.",
  "Where is duplicate business logic?":
    "Duplicate logic usually appears in auth checks, pricing rules, workspace policies, and generated service helpers. The graph marks repeated behavior across files.",
  "What should be refactored first?":
    "Start with high-impact boundaries: centralize auth policy, move expensive repo work out of request paths, lazy-load graph code, and repair metadata coverage."
};

export function RepoChatSection() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Ask me about auth, oversized components, slow routes, SEO, duplicate logic, or the first refactor to make this repository production ready."
    }
  ]);

  function ask(prompt: string) {
    setInput("");
    setMessages((current) => [
      ...current,
      { role: "user", content: prompt },
      { role: "assistant", content: cannedAnswers[prompt] ?? cannedAnswers["What should be refactored first?"] }
    ]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;
    ask(prompt);
  }

  return (
    <section id="repo-chat" className="relative overflow-hidden bg-[#0B1120] px-4 py-28 lg:px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.12),transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Repo Chat"
          title="Ask questions only your architecture should answer."
          description="This is a repo-aware product surface, not a generic AI chatbot. Every response is framed around architecture, production readiness, and codebase-specific risk."
        />
        <div className="rounded-lg border border-white/10 bg-slate-950/72 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="border-b border-white/10 p-5">
            <p className="text-sm font-semibold text-white">AI repo architect</p>
            <p className="mt-1 text-sm text-slate-500">Context loaded across routes, API, auth, SEO, and generated code patterns.</p>
          </div>
          <div className="min-h-[360px] space-y-4 p-5">
            {messages.slice(-6).map((message, index) => (
              <div key={`${message.role}-${index}`} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/6 text-slate-300">
                  {message.role === "assistant" ? <Bot className="h-4 w-4 text-sky-200" /> : <UserRound className="h-4 w-4" />}
                </span>
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 text-sm leading-7 text-slate-300">
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={submit} className="border-t border-white/10 p-4">
            <Textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask: What should be refactored first?"
            />
            <div className="mt-3 flex justify-end">
              <Button type="submit">
                Send
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
        <div className="lg:col-start-2">
          <div className="grid gap-3 sm:grid-cols-2">
            {chatPrompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => ask(prompt)}
                className="group rounded-lg border border-white/10 bg-white/[0.045] p-4 text-left text-sm text-slate-300 transition hover:border-sky-300/35 hover:bg-sky-300/8"
              >
                <span>{prompt}</span>
                <ArrowRight className="mt-4 h-4 w-4 text-sky-200 transition group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
