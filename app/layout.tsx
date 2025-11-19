// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/app/components/JsonLd"; // small component below
const BASE_URL = "https://colossalcodes.vercel.app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "ColossalCodes — Master TypeScript, Rust & Modern Stack",
    template: "%s — ColossalCodes",
  },
  description:
    "ColossalCodes: bite-sized projects, industrial tutorials, and hands-on courses in TypeScript, Rust, DevOps and modern web dev.",
  // icons: { icon: "/large_cc.ico" },
  keywords: [
    "TypeScript tutorial",
    "Rust tutorial",
    "DevOps courses",
    "ColossalCodes",
    "web development",
    "Next.js tutorials",
  ],
  authors: [{ name: "ColossalCodes", url: BASE_URL }],
  category: "Education",
  openGraph: {
    title: "ColossalCodes — Master TypeScript, Rust & Modern Stack",
    description:
      "Bite-sized projects & industrial tutorials for TypeScript, Rust, and DevOps.",
    url: BASE_URL,
    siteName: "ColossalCodes",
    images: [
      {
        url: `${BASE_URL}/public/logo/large_cc.ico`, // create this image in /public/og/
        width: 1200,
        height: 630,
        alt: "ColossalCodes — Master TypeScript, Rust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColossalCodes",
    description:
      "Bite-sized projects & industrial tutorials for TypeScript, Rust, and DevOps.",
    images: [`${BASE_URL}/public/logo/large_cc.ico`],
    site: "@colossalcodes", // optional; use your twitter handle if any
  },
  icons: {
    icon: "/large_cc.ico",
    apple: "/icons/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/manifest.json" }],
  },
  manifest: `${BASE_URL}/manifest.json`,
  themeColor: "#0f1724", // dark-ish
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* performance & preconnect hints */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          href="/fonts/local-font.woff2"
          as="font"
          crossOrigin="anonymous"
        />
        {/* prefetch common critical routes */}
        <link rel="prefetch" href="/page" as="document" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-8 text-neutral-1`}
      >
        <JsonLd baseUrl={BASE_URL} />
        {children}
      </body>
    </html>
  );
}
