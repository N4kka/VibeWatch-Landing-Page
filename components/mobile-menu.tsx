"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 md:hidden"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-background/98 backdrop-blur-xl border-l border-border z-50 md:hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <span className="font-bold text-xl">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl hover:bg-secondary/60 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-2">
                  <Link
                    href="/#top"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-lg font-medium"
                  >
                    {t("header.nav.home")}
                  </Link>
                  <Link
                    href="/#clips"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-lg font-medium"
                  >
                    {t("header.nav.features")}
                  </Link>
                  <Link
                    href="/#ai"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-lg font-medium"
                  >
                    {t("header.nav.ai")}
                  </Link>
                  <Link
                    href="/#how"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-lg font-medium"
                  >
                    {t("header.nav.how")}
                  </Link>
                  <Link
                    href="/#support"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-lg font-medium"
                  >
                    {t("header.nav.support")}
                  </Link>

                  <div className="h-px bg-border my-4" />

                  <Link
                    href="/terms"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-base text-muted-foreground"
                  >
                    {t("header.nav.terms")}
                  </Link>
                  <Link
                    href="/privacy"
                    onClick={onClose}
                    className="px-5 py-4 rounded-xl hover:bg-secondary/60 transition-colors text-base text-muted-foreground"
                  >
                    {t("header.nav.privacy")}
                  </Link>
                </div>
              </nav>

              {/* CTA Button */}
              <div className="p-6 border-t border-border">
                <Button asChild size="lg" className="w-full">
                  <Link href="/#download" onClick={onClose}>
                    {t("home.cta.appStoreCta")}
                  </Link>
                </Button>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs text-muted-foreground">{t("header.foundingChip")}</span>
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
