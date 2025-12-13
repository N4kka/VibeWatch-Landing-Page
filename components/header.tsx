"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "@/components/language-provider";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("top");
  const { t } = useTranslation();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { href: "/#top", label: t("header.nav.home"), id: "top" },
    { href: "/#clips", label: t("header.nav.features"), id: "clips" },
    { href: "/#ai", label: t("header.nav.ai"), id: "ai" },
    { href: "/#how", label: t("header.nav.how"), id: "how" },
    { href: "/#support", label: t("header.nav.support"), id: "support" },
  ];

  const highlightClass = (id: string) =>
    [
      "px-3 py-2 rounded-xl transition-colors",
      activeSection === id
        ? "bg-primary/15 text-foreground border border-primary/40 shadow-sm"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
    ].join(" ");

  // Lightweight scroll-spy to highlight nav items
  useEffect(() => {
    if (!isHome) {
      if (pathname.startsWith("/privacy")) {
        setActiveSection("privacy");
      } else if (pathname.startsWith("/terms")) {
        setActiveSection("terms");
      } else {
        setActiveSection("");
      }
      return;
    }
    const ids = ["top", "clips", "ai", "how", "support", "download"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome, pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/75 border-b border-border supports-[backdrop-filter]:bg-background/65">
        <nav className="container mx-auto max-w-7xl px-4 md:px-6 py-3.5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight">
              <Image src="/logo.png" alt="VibeWatch logo" width={32} height={32} className="rounded-lg" />
              <span>VibeWatch</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3 text-sm text-muted-foreground">
              {navLinks.map((item) => (
                <Link key={item.id} href={item.href} className={highlightClass(item.id)}>
                  {item.label}
                </Link>
              ))}
              <Link href="/terms" className={highlightClass("terms")}>
                {t("header.nav.terms")}
              </Link>
              <Link href="/privacy" className={highlightClass("privacy")}>
                {t("header.nav.privacy")}
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="px-3 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
                {t("header.foundingChip")}
              </div>
              <Button asChild>
                <Link href="/#download">{t("header.download")}</Link>
              </Button>
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-xl hover:bg-secondary/60 transition-colors flex items-center gap-2"
              aria-label="Open menu"
            >
              <span className="px-3 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-[11px] font-semibold text-primary">
                {t("header.mobileChip")}
              </span>
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
