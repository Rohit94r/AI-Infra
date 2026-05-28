import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)} data-gsap-reveal>
      <Badge className="border-sky-300/20 bg-sky-300/8 text-sky-200">{eyebrow}</Badge>
      <h2 className="mt-5 max-w-5xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {description ? (
        <p className={cn("mt-5 max-w-3xl text-lg leading-8 text-slate-400", align === "center" && "mx-auto")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
