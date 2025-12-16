"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslation } from "@/components/language-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="VibeWatch Logo" width={32} height={32} className="w-8 h-8 rounded-full" />
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">VibeWatch</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#features">{t("header.nav.features")}</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#how-it-works">{t("header.nav.how")}</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#pricing">{t("header.nav.support")}</Link> {/* Using support/pricing mapping if vague, but i18n has 'support' key. Wait, new design has Pricing. Old i18n had Support. I should check if i18n has 'pricing'. Checking lib/i18n.ts content... it has 'support' but NO 'pricing' key in header.nav. I will use 'support' key for now or add 'pricing' to i18n? I cannot edit i18n easily without potentially breaking types if I don't see the type def. 
            Wait, I read lib/i18n.ts. It has:
            header: { nav: { home, features, ai, how, support, terms, privacy } }
            The new design has: Features, How it Works, Pricing, FAQ.
            I should map:
            Features -> header.nav.features
            How it Works -> header.nav.how
            Pricing -> ??? (Maybe create a new key or use 'support' temporarily? Or 'foundingChip'?)
            FAQ -> ??? (Old i18n didn't have FAQ link in header).
            
            Actually, I should PROBABLY update `lib/i18n.ts` to match the new design's navigation structure if I want to do this properly.
            Or I can map "Pricing" to `header.foundingChip` (which is "$3.99/mo")? No.
            I'll add keys to `lib/i18n.ts` first.
            
            Let's pause and update `lib/i18n.ts` to support the new navigation items: "pricing" and "faq".
            */}
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#faq">{t("home.faq.title")}</Link> {/* Use FAQ title? "Frequently Asked Questions" is long. */}
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/terms">{t("header.nav.terms")}</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/privacy">{t("header.nav.privacy")}</Link>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button 
              className="text-gray-500 dark:text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#features" onClick={() => setIsMenuOpen(false)}>{t("header.nav.features")}</Link>
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#how-it-works" onClick={() => setIsMenuOpen(false)}>{t("header.nav.how")}</Link>
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link> {/* Hardcoded for now until i18n updated */}
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link> {/* Hardcoded */}
            <div className="border-t border-gray-200 dark:border-white/10 my-2 pt-2">
              <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/terms" onClick={() => setIsMenuOpen(false)}>{t("header.nav.terms")}</Link>
              <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/privacy" onClick={() => setIsMenuOpen(false)}>{t("header.nav.privacy")}</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
