import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-28 w-full rounded-md border border-[#3b3a50]/14 bg-white/76 px-3 py-3 text-sm text-[#3b3a50] shadow-inner outline-none transition placeholder:text-[#3b3a50]/38 focus:border-[#2de29d]/70 focus:ring-2 focus:ring-[#2de29d]/18 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
