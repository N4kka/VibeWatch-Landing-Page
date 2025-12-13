"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
      {open ? (
        <div className="absolute right-0 mt-2 w-48 rounded-xl border border-border bg-background/95 backdrop-blur shadow-2xl z-50">
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
      ) : null}
    </div>
  );
}
