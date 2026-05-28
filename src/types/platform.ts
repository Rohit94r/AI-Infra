import type { LucideIcon } from "lucide-react";

export type FeatureCard = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type ScoreMetric = {
  label: string;
  value: number;
  detail: string;
};

export type Issue = {
  title: string;
  area: string;
  severity: "critical" | "high" | "medium" | "low";
};
