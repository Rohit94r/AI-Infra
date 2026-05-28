import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/constants/**/*.{ts,tsx}",
    "./src/types/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#020617",
        carbon: "#050816",
        ink: "#0B1120",
        paper: "#E2E8F0",
        muted: "#94A3B8",
        line: "rgba(255,255,255,0.1)",
        violet: "#8B5CF6",
        cyan: "#38BDF8",
        mint: "#34D399",
        pink: "#F472B6",
        danger: "#EF4444"
      },
      fontFamily: {
        sans: ["var(--font-geist)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(56, 189, 248, 0.24)",
        violet: "0 0 52px rgba(139, 92, 246, 0.22)",
        danger: "0 0 42px rgba(239, 68, 68, 0.18)"
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(rgba(232,240,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(232,240,255,.07) 1px, transparent 1px)",
        "grid-dots": "radial-gradient(circle, rgba(232,240,255,.22) 1px, transparent 1px)"
      },
      clipPath: {
        chamfer: "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(-1deg)" },
          "50%": { transform: "translate3d(0, -18px, 0) rotate(1.5deg)" }
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", filter: "drop-shadow(0 0 24px rgba(110, 231, 183, .24))" },
          "50%": { transform: "scale(1.025)", filter: "drop-shadow(0 0 42px rgba(34, 211, 238, .34))" }
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(420%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: ".35", transform: "translateX(-12%)" },
          "50%": { opacity: ".9", transform: "translateX(12%)" }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        breathe: "breathe 5s ease-in-out infinite",
        scan: "scan 4.5s linear infinite",
        marquee: "marquee 26s linear infinite",
        pulseLine: "pulseLine 9s ease-in-out infinite",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out"
      }
    }
  },
  plugins: [tailwindcssAnimate]
};

export default config;
