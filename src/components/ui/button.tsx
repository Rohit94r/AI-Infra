import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2de29d]/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "clip-chamfer bg-[#2de29d] px-6 py-3 text-[#10131b] shadow-[0_18px_36px_rgba(45,226,157,0.22)] hover:-translate-y-0.5 hover:bg-[#38efaa]",
        secondary:
          "clip-chamfer bg-[#3b3a50] px-6 py-3 text-[#f5f6f4] shadow-[0_18px_36px_rgba(59,58,80,0.16)] hover:-translate-y-0.5 hover:bg-[#302f43]",
        ghost:
          "rounded-md px-3 py-2 text-[#3b3a50]/70 hover:bg-[#3b3a50]/5 hover:text-[#3b3a50]",
        destructive:
          "clip-chamfer bg-red-500 px-6 py-3 text-white hover:bg-red-600",
        icon:
          "h-10 w-10 rounded-md border border-[#3b3a50]/12 bg-white p-0 text-[#3b3a50]/80 hover:border-[#2de29d]/60 hover:bg-[#2de29d]/10"
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10 p-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          "overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/24 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full"
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
