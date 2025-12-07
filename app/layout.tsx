import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeWatch — Clip-first movie & TV discovery",
  description: "Watch cinematic clips. Let AI pick what to watch next.",
  icons: {
    icon: "images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{
          background: `radial-gradient(circle at 18% 16%, rgba(43, 73, 173, 0.2), transparent 30%),
                      radial-gradient(circle at 78% 0%, rgba(251, 127, 51, 0.12), transparent 28%),
                      linear-gradient(160deg, hsl(222 47% 6%) 0%, hsl(222 47% 11%) 40%, hsl(222 30% 15%) 100%)`,
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
