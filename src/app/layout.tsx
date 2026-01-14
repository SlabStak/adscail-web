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
  title: "AdScail - AI-Powered Ad Campaign Generator",
  description: "Create execution-ready campaigns with strategy, video scripts, ad copy, targeting, and funnel mapping in minutes.",
  keywords: ["advertising", "AI", "campaigns", "marketing", "video scripts", "ad copy"],
  openGraph: {
    title: "AdScail - AI-Powered Ad Campaign Generator",
    description: "Create execution-ready campaigns with strategy, video scripts, ad copy, targeting, and funnel mapping in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
