"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/language-provider";
import { translations } from "@/lib/i18n";

export default function TermsPage() {
  const { t } = useTranslation();
  const terms = t<typeof translations.en.terms>("terms");

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <section className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Hero/Title */}
          <div className="space-y-6">
            <div className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">{terms.hero.eyebrow}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{terms.hero.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-problem">{terms.hero.desc}</p>
            <div className="flex flex-wrap gap-2.5 text-sm">
              {terms.hero.badges.map((badge: string) => (
                <span key={badge} className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Required Items (Highlight) */}
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent-purple/5 backdrop-blur-sm p-6 shadow-xl space-y-4">
            {terms.required.items.map((item: { title: string; body: string[] }) => (
              <div key={item.title} className="p-4 rounded-2xl bg-white/50 dark:bg-black/20 border border-gray-200 dark:border-white/5">
                <div className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.body.map((line: string) => {
                    const privacyUrl = "https://vibewatch.com/privacy";
                    const appleUrl = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

                    if (line.includes(privacyUrl)) {
                      const parts = line.split(privacyUrl);
                      return (
                        <div key={line}>
                          {parts[0]}
                          <Link href="/privacy" className="text-primary hover:underline">
                            {privacyUrl}
                          </Link>
                          {parts[1]}
                        </div>
                      );
                    }

                    if (line.includes(appleUrl)) {
                      const parts = line.split(appleUrl);
                      return (
                        <div key={line}>
                          {parts[0]}
                          <a
                            href={appleUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Apple Standard EULA
                          </a>
                          {parts[1]}
                        </div>
                      );
                    }

                    return <div key={line}>{line}</div>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Detail Cards Section */}
        <section className="py-16 mt-12 border-t border-gray-200 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            {terms.cards.map((card: { title: string; items: string[] }) => (
              <div key={card.title} className="rounded-3xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-6 shadow-lg hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{card.title}</h3>
                <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5 space-y-2 text-sm">
                  {card.items.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}