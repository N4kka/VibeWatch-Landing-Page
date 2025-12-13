"use client";

import { useTranslation } from "@/components/language-provider";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="container mx-auto max-w-7xl px-6 mt-12 pt-4 border-t border-border text-center text-sm text-muted-foreground">
      <p>{t("footer.tagline")}</p>
    </footer>
  );
}
