"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/75 border-b border-border">
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-3.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
              <Image src="/logo.png" alt="VibeWatch logo" width={32} height={32} className="rounded-lg" />
              <span>VibeWatch</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
              <Link href="/#top" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Home
              </Link>
              <Link href="/#clips" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Features
              </Link>
              <Link href="/#ai" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Vibe AI
              </Link>
              <Link href="/#support" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Support
              </Link>
              <Link href="/terms" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="px-3 py-2 rounded-xl hover:text-foreground hover:bg-secondary/60 transition-colors">
                Privacy
              </Link>
            </div>

            {/* Desktop CTA */}
            <Button asChild className="hidden md:inline-flex">
              <Link href="/#download">Download App</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl hover:bg-secondary/60 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
