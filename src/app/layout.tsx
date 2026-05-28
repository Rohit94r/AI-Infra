import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "ExplainMyCode AI | AI Architecture Intelligence",
  description:
    "AI Architecture Intelligence and Production Readiness Platform for AI-generated software.",
  metadataBase: new URL("https://explainmycode.ai"),
  openGraph: {
    title: "ExplainMyCode AI",
    description:
      "Analyze repositories, detect technical debt, map architecture, and validate production readiness before launch.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
