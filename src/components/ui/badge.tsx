import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-[#3b3a50]/14 bg-white/75 px-3 py-1 text-xs font-medium text-[#3b3a50]/78 backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}
