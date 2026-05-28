"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Bot, Send, UserRound } from "lucide-react";
import { chatConversations, chatSuggestions } from "@/data/dashboard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "assistant"; content: string };

const canned: Record<string, string> = {
  "How does authentication work?": "Authentication flows through Better Auth OAuth callbacks → normalized User/Account/Session records in Postgres via Prisma → workspace membership checks on every protected route. The main risk is five route handlers duplicating the membership check with slight variations. Centralizing into a single `requireWorkspaceMember(req)` policy helper removes the drift.",
  "Which components are too large?": "The dashboard shell (`features/dashboard/dashboard-shell.tsx`) owns navigation, keyboard state, billing badges, and the project switcher — all in one file. The architecture graph page also pulls the full Recharts bundle into the client. Both should be split into focused islands.",
  "What hurts SEO performance?": "Product pages at `/product/[slug]` are missing `generateMetadata`, OpenGraph tags, canonical URLs, and JSON-LD structured data. The dashboard routes are also indexed by default — add `noindex` to all `/dashboard/*` paths.",
  "Which APIs are expensive?": "The `/api/analyze` route runs repository parsing synchronously inside the request path. For repos over 200 files this blocks for 3–8 seconds. Move to a queue-backed worker and return a job ID immediately.",
  "What should be refactored first?": "Priority order: (1) centralize auth policy helper, (2) add compound index on ChatMessage(projectId, createdAt), (3) lazy-load architecture graph, (4) add rate limiting to public API routes, (5) fix product page metadata.",
  "Where is duplicate business logic?": "Workspace membership checks appear in five separate route handlers. Pricing rule calculations are duplicated across the billing module and the checkout flow. Both should be extracted into shared service helpers.",
};

export function ChatPage() {
  const [activeConv, setActiveConv] = useState("conv-1");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Ask me about auth, oversized components, slow routes, SEO gaps, duplicate logic, or what to refactor first. I have full context of the neon-commerce-ai repository." },
  ]);

  function ask(prompt: string) {
    setInput("");
    const answer = canned[prompt] ?? "I can analyze that pattern across the repository. Based on the architecture graph, the most likely cause is boundary drift between the service layer and route handlers. I'd recommend extracting a shared policy module and running a dependency audit.";
    setMessages((m) => [...m, { role: "user", content: prompt }, { role: "assistant", content: answer }]);
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (input.trim()) ask(input.trim());
  }

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-5 overflow-hidden">
      {/* Conversation sidebar */}
      <aside className="hidden w-56 shrink-0 flex-col gap-2 lg:flex">
        <p className="px-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#3b3a50]/40">Conversations</p>
        {chatConversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => setActiveConv(conv.id)}
            className={cn(
              "rounded-lg border px-3 py-2.5 text-left transition",
              activeConv === conv.id
                ? "border-[#2de29d]/30 bg-[#2de29d]/10 text-[#3b3a50]"
                : "border-[#3b3a50]/8 bg-white/60 text-[#3b3a50]/60 hover:border-[#3b3a50]/16 hover:text-[#3b3a50]"
            )}
          >
            <p className="text-sm font-medium line-clamp-1">{conv.title}</p>
            <p className="mt-0.5 text-[10px] text-[#3b3a50]/35">{conv.time}</p>
          </button>
        ))}
      </aside>

      {/* Chat area */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-[#3b3a50]/10 bg-white/80">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-[#3b3a50]/8 px-5 py-3.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#2de29d]/15">
            <Bot className="h-4 w-4 text-[#2de29d]" />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#3b3a50]">AI repo architect</p>
            <p className="text-xs text-[#3b3a50]/45">Context: neon-commerce-ai · routes, APIs, auth, SEO, dependencies</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {messages.map((msg, i) => (
            <div key={i} className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
              <span className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border",
                msg.role === "assistant"
                  ? "border-[#2de29d]/30 bg-[#2de29d]/10 text-[#2de29d]"
                  : "border-[#3b3a50]/12 bg-[#f5f6f4] text-[#3b3a50]"
              )}>
                {msg.role === "assistant" ? <Bot className="h-4 w-4" /> : <UserRound className="h-4 w-4" />}
              </span>
              <div className={cn(
                "max-w-[80%] rounded-xl border px-4 py-3 text-sm leading-6",
                msg.role === "assistant"
                  ? "border-[#3b3a50]/8 bg-[#f5f6f4] text-[#3b3a50]"
                  : "border-[#2de29d]/30 bg-[#2de29d]/10 text-[#3b3a50]"
              )}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        {/* Suggestions */}
        <div className="border-t border-[#3b3a50]/8 px-5 py-3">
          <div className="flex flex-wrap gap-2">
            {chatSuggestions.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => ask(s)}
                className="flex items-center gap-1.5 rounded-full border border-[#3b3a50]/10 bg-[#f5f6f4] px-3 py-1.5 text-xs text-[#3b3a50]/65 transition hover:border-[#2de29d]/40 hover:text-[#3b3a50]"
              >
                {s}
                <ArrowRight className="h-3 w-3" />
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form onSubmit={submit} className="border-t border-[#3b3a50]/8 p-4">
          <div className="flex gap-3">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about architecture, security, SEO, or refactoring…"
              className="min-h-[44px] resize-none"
              rows={1}
            />
            <Button type="submit" size="sm" className="shrink-0 self-end">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
