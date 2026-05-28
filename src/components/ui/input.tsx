import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md border border-[#3b3a50]/14 bg-white/76 px-3 py-2 text-sm text-[#3b3a50] shadow-inner outline-none transition placeholder:text-[#3b3a50]/38 focus:border-[#2de29d]/70 focus:ring-2 focus:ring-[#2de29d]/18 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
