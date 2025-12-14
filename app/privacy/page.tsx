"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/language-provider";
import { translations } from "@/lib/i18n";

export default function PrivacyPage() {
  const { t } = useTranslation();
  const privacy = t<typeof translations.en.privacy>("privacy");

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <section className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Hero */}
          <div className="space-y-6">
            <div className="text-sm text-primary font-semibold tracking-wider uppercase mb-2">{privacy.hero.eyebrow}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">{privacy.hero.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-problem">{privacy.hero.desc}</p>
            <div className="flex flex-wrap gap-2.5 text-sm">
              {privacy.hero.badges.map((badge: string) => (
                <span key={badge} className="px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Key Points */}
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent-purple/5 backdrop-blur-sm p-6 shadow-xl">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span>🔒</span> {privacy.keyPointsTitle}
            </h3>
            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
              {privacy.keyPoints.map((point: { text: string; href?: string }, idx: number) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    {point.href ? (
                      <a 
                        href={point.href} 
                        target={point.href.startsWith("mailto:") ? undefined : "_blank"} 
                        rel={point.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} 
                        className="text-primary hover:text-primary-hover underline decoration-primary/30 underline-offset-2 transition-colors"
                      >
                        {point.text}
                      </a>
                    ) : (
                      point.text
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="py-16 mt-12 border-t border-gray-200 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-6">
            {privacy.sections.map((section: { title: string; body: string[] }) => (
              <div key={section.title} className="rounded-3xl border border-gray-200 dark:border-white/5 bg-white dark:bg-surface-dark p-6 shadow-lg hover:border-primary/30 transition-colors flex flex-col gap-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                <ul className="text-gray-600 dark:text-gray-400 leading-relaxed list-disc pl-5 space-y-2 text-sm">
                  {section.body.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="py-8 border-t border-gray-200 dark:border-white/10 text-center md:text-left">
          <p className="text-gray-600 dark:text-gray-400">
            {privacy.contact}{" "}
            <Link href="mailto:startingvibe2025@gmail.com" className="text-primary hover:text-primary-hover font-medium underline decoration-primary/30 underline-offset-2 transition-colors">
              startingvibe2025@gmail.com
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}