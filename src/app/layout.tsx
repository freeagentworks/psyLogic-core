import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VoidBackground from "@/components/3d/VoidBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: "PsyLogic Core | 深層心理への旅",
    template: "%s | PsyLogic Core"
  },
  description: "ビッグファイブとアタッチメント理論に基づく、高精度かつ没入型の深層心理分析システム。恋愛やビジネスにおけるあなたの真の特性を3D空間で可視化します。",
  keywords: ["心理テスト", "ビッグファイブ", "性格診断", "恋愛診断", "自己分析", "PsyLogic", "Big Five"],
  authors: [{ name: "PsyLogic Team" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://psylogic-core.vercel.app",
    title: "PsyLogic Core | 深層心理への旅",
    description: "ビッグファイブとアタッチメント理論に基づく、高精度かつ没入型の深層心理分析システム。",
    siteName: "PsyLogic Core",
    // images will be automatically picked up from opengraph-image.jpg
  },
  twitter: {
    card: "summary_large_image",
    title: "PsyLogic Core | 深層心理への旅",
    description: "ビッグファイブとアタッチメント理論に基づく、高精度かつ没入型の深層心理分析システム。",
    // images will be automatically picked up from opengraph-image.jpg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white min-h-screen`}
      >
        <VoidBackground />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
