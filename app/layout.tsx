import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "claude-md-coach — Your CLAUDE.md is lying to you",
  description:
    "An ambient coach for Claude Code that finds dead rules, mines your corrections, and rewrites your CLAUDE.md smarter — using your own session history. No API key. Free forever.",
  metadataBase: new URL("https://claudemdcoach.com"),
  openGraph: {
    title: "claude-md-coach",
    description:
      "Your CLAUDE.md rots silently. This is the tool that watches your Claude Code sessions and fixes it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
