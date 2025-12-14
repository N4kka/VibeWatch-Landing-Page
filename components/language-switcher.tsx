"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { createPortal } from "react-dom";
import { useTranslation } from "@/components/language-provider";

const LANGUAGES: { code: "en" | "it" | "fr" | "es" | "pt" }[] = [
  { code: "en" },
  { code: "it" },
  { code: "fr" },
  { code: "es" },
  { code: "pt" },
];

export function LanguageSwitcher() {
  const { locale, setLocale, flags, languageNames } = useTranslation();
  const [open, setOpen] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      setPortalRoot(document.body);
    }
  }, []);

  return (
    <div className="relative">
      <button
        aria-label="Change language"
        className="relative w-10 h-10 rounded-full border border-border bg-background/80 shadow-sm flex items-center justify-center hover:border-primary/50 transition-colors"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="text-lg leading-none">{flags[locale]}</span>
        <ChevronDown className={`w-3 h-3 absolute right-1 bottom-1 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && portalRoot
        ? createPortal(
            <div className="fixed inset-0 z-[999]" onClick={() => setOpen(false)}>
              <div className="absolute right-4 top-[72px] w-48 rounded-xl border border-border bg-background/98 backdrop-blur shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <ul className="py-2 text-sm">
                  {LANGUAGES.map(({ code }) => (
                    <li key={code}>
                      <button
                        className="w-full px-3 py-2.5 text-left hover:bg-secondary/70 rounded-lg flex items-center gap-2"
                        onClick={() => {
                          setLocale(code);
                          setOpen(false);
                        }}
                      >
                        <span className="text-lg">{flags[code]}</span>
                        <span className="font-medium">{languageNames[code]}</span>
                        {code === locale ? <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/15 border border-primary/30 text-primary">Now</span> : null}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            portalRoot
          )
        : null}
    </div>
  );
}
