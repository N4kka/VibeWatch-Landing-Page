import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vibe-watch.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VibeWatch — Clip-first movie & TV discovery",
  description: "Watch cinematic clips. Let AI pick what to watch next.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "VibeWatch — Clip-first movie & TV discovery",
    description: "Watch cinematic clips. Let AI pick what to watch next.",
    images: [
      {
        url: "/logo.png",
        alt: "VibeWatch",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "VibeWatch — Clip-first movie & TV discovery",
    description: "Watch cinematic clips. Let AI pick what to watch next.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
