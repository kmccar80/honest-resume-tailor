import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Honest Resume Tailor | Make your experience stand out", description: "Evidence-based resume tailoring and interview preparation, with human confirmation before any new claim." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
