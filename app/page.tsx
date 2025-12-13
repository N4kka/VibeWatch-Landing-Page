"use client";

/* eslint react/no-unescaped-entities: "off" */
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { Play, Sparkles, Heart, TrendingUp, Clock, CheckCircle2, X as XIcon, DiamondIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/components/language-provider";
import { translations } from "@/lib/i18n";

export default function Home() {
  const { t } = useTranslation();
  const home = t<typeof translations.en.home>("home");
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [isCarouselHovered, setIsCarouselHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const showcaseTotal = home.showcase.cards.length;

  const goPrev = () => setActiveShowcase((prev) => (prev - 1 + showcaseTotal) % showcaseTotal);
  const goNext = () => setActiveShowcase((prev) => (prev + 1) % showcaseTotal);

  useEffect(() => {
    if (isCarouselHovered) return;
    const id = setInterval(() => setActiveShowcase((prev) => (prev + 1) % showcaseTotal), 5000);
    return () => clearInterval(id);
  }, [isCarouselHovered, showcaseTotal]);

  useEffect(() => {
    setProgressKey((k) => k + 1);
  }, [activeShowcase]);

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        {/* Video Hero Section */}
        <section id="top" className="py-8 md:py-12 scroll-mt-24">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-secondary/50 via-secondary/20 to-blue-500/10 p-6 md:p-10 shadow-2xl">
            <div className="absolute inset-0 clip-wall opacity-60" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,127,51,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.06),transparent_40%)] blur-3xl" aria-hidden />
            <div className="absolute inset-0 hero-noise opacity-50 mix-blend-overlay" aria-hidden />
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-full bg-secondary/70 text-muted-foreground text-sm border border-border backdrop-blur">
                  <Sparkles className="w-4 h-4 text-primary" />
                  {home.hero.badge}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                  {home.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {home.hero.subtitle}
                </p>
                <div className="relative max-w-2xl mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-background/70 border border-border shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm" aria-hidden />
                  <div className="relative flex flex-col sm:flex-row items-center gap-3 px-4 py-3">
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <Link href="#download" className="flex items-center justify-center gap-2">
                        <Play className="w-5 h-5" />
                        {home.hero.primaryCta}
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                      <Link href="#how">{home.hero.secondaryCta}</Link>
                    </Button>
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary">
                      {home.hero.foundingChip}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="order-1 lg:order-2 flex items-center justify-center">
                <div className="relative rounded-2xl border border-border bg-gradient-to-b from-secondary/60 to-secondary/20 p-3 md:p-5 shadow-2xl backdrop-blur overflow-hidden max-w-sm w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 blur-xl" />
                  <div className="relative z-10">
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.hero.watchLabel}</div>
                    <video
                      className="w-full rounded-xl shadow-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/1.png"
                    >
                      <source src="/vibewatch_trailer.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Clips First */}
        <section id="why-clips" className="py-10 md:py-14 scroll-mt-24">
          <div className="rounded-3xl border border-border bg-card/40 backdrop-blur px-6 md:px-8 py-8 md:py-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.whyClips.eyebrow}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{home.whyClips.title}</h2>
              </div>
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-sm font-semibold text-primary">
                {home.whyClips.metric}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {home.whyClips.items.map((item, i) => (
                <div key={item.title} className="rounded-2xl border border-border bg-secondary/40 p-5 shadow-lg hover:-translate-y-1 transition-transform motion-reduce:transform-none">
                  <div className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-primary/15 border border-primary/35 text-sm font-semibold text-primary mb-3">
                    {`0${i + 1}`}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section id="comparison" className="py-12 md:py-16 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{home.comparison.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{home.comparison.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Before */}
            <div className="rounded-2xl border-2 border-destructive/50 bg-card/20 backdrop-blur p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-destructive/20 border border-destructive/50">
                  <XIcon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{home.comparison.beforeTitle}</h3>
              </div>
              <ul className="space-y-4">
                {home.comparison.beforeItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <XIcon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/20 border border-primary/50">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{home.comparison.afterTitle}</h3>
              </div>
              <ul className="space-y-4">
                {home.comparison.afterItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* App Screenshots Showcase */}
        <section id="features-showcase" className="py-12 md:py-16 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.showcase.eyebrow}</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{home.showcase.title}</h2>
          </div>

          <div className="relative px-2 md:px-6">
            <div className="absolute inset-y-6 left-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10 rounded-l-3xl" aria-hidden />
            <div className="absolute inset-y-6 right-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10 rounded-r-3xl" aria-hidden />

            <div
              className="relative min-h-[900px] md:min-h-[980px] overflow-hidden flex items-center justify-center pt-6 pb-16"
              onMouseEnter={() => setIsCarouselHovered(true)}
              onMouseLeave={() => setIsCarouselHovered(false)}
              onTouchStart={(e) => {
                const start = e.changedTouches?.[0]?.clientX;
                if (start !== undefined) setTouchStartX(start);
                setIsCarouselHovered(true);
              }}
              onTouchEnd={(e) => {
                const end = e.changedTouches?.[0]?.clientX;
                if (touchStartX !== null && end !== undefined) {
                  const delta = end - touchStartX;
                  if (Math.abs(delta) > 40) {
                    if (delta > 0) {
                      goPrev();
                    } else {
                      goNext();
                    }
                  }
                }
                setTouchStartX(null);
                setIsCarouselHovered(false);
              }}
            >
              {home.showcase.cards.map((card, idx) => {
                const icon =
                  idx === 0 ? <Play className="w-5 h-5 text-primary" /> : idx === 1 ? <DiamondIcon className="w-5 h-5 text-primary" /> : idx === 2 ? <Sparkles className="w-5 h-5 text-primary" /> : idx === 3 ? <Heart className="w-5 h-5 text-primary" /> : idx === 4 ? <Clock className="w-5 h-5 text-primary" /> : <TrendingUp className="w-5 h-5 text-primary" />;
                const imageSrc = `/${idx + 1}.png`;
                const offset = (idx - activeShowcase + showcaseTotal) % showcaseTotal;
                const isCenter = offset === 0;
                const isPrev = offset === showcaseTotal - 1;
                const isNext = offset === 1;
                const hidden = !isCenter && !isPrev && !isNext;

                return (
                  <div
                    key={card.title}
                    className={`absolute transition-all duration-500 ease-out will-change-transform ${
                      hidden ? "opacity-0 scale-75 pointer-events-none" : "opacity-100"
                    } ${isCenter ? "z-20" : "z-10"} ${
                      isPrev ? "-translate-x-[55%]" : isNext ? "translate-x-[55%]" : "translate-x-0"
                    }`}
                    style={{ width: "min(400px, 92vw)" }}
                    aria-hidden={hidden && !isCenter}
                  >
                    <div
                      className={`group rounded-2xl border ${
                        isCenter ? "border-2 border-primary/60 bg-gradient-to-br from-primary/15 via-background/80 to-blue-500/20" : "border-border bg-card/40"
                      } backdrop-blur p-5 shadow-2xl transition-all duration-500 ${
                        isCenter ? "scale-100 blur-0" : "scale-95 blur-[1px] opacity-80"
                      }`}
                    >
                      <div className="relative mb-4 rounded-xl overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={card.alt}
                          width={400}
                          height={800}
                          className="w-full h-auto transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01] motion-reduce:transform-none"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        {icon}
                        <h3 className="text-xl font-semibold">{card.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-center gap-3 mt-6">
              <Button variant="secondary" size="icon" className="rounded-full h-11 w-11" onClick={goPrev} aria-label="Previous screenshot">
                <ChevronLeft className="w-5 h-5" />
              </Button>
            <div className="flex items-center gap-2">
              {[
                { idx: (activeShowcase - 1 + showcaseTotal) % showcaseTotal, label: "Previous slide" },
                { idx: activeShowcase, label: "Current slide", isCurrent: true },
                { idx: (activeShowcase + 1) % showcaseTotal, label: "Next slide" },
              ].map((item, order) => (
                <button
                  key={`${item.idx}-${order}`}
                  aria-label={`${item.label} ${item.idx + 1}`}
                  onClick={() => setActiveShowcase(item.idx)}
                  className={`h-2.5 rounded-full transition-all overflow-hidden ${
                    item.isCurrent ? "w-8 bg-border" : "w-3 bg-border hover:bg-border"
                  }`}
                >
                  <span
                    key={item.isCurrent ? `progress-${progressKey}` : `idle-${item.idx}`}
                    className={`block h-full ${item.isCurrent ? "bg-primary carousel-progress" : "bg-border"} ${
                      item.isCurrent && isCarouselHovered ? "carousel-progress-paused" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
              <Button variant="secondary" size="icon" className="rounded-full h-11 w-11" onClick={goNext} aria-label="Next screenshot">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Clips Section */}
        <section id="clips" className="py-12 md:py-16 scroll-mt-24">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.clips.eyebrow}</div>
          <h2 className="text-3xl font-bold mb-3">{home.clips.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">{home.clips.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {home.clips.cards.map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[180px] flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Section */}
        <section id="ai" className="py-12 md:py-16 grid md:grid-cols-2 gap-5 md:gap-6 scroll-mt-24">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-5 md:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 mix-blend-screen opacity-60" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">{home.ai.leftTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{home.ai.leftDesc}</p>
              <div className="rounded-2xl border border-border bg-secondary/30 p-4 grid gap-2.5">
                <div className="px-3.5 py-3 rounded-xl bg-primary/15 border border-primary/35 leading-snug">
                  {home.ai.promptOne}
                </div>
                <div className="px-3.5 py-3 rounded-xl bg-secondary/80 border border-border leading-snug">
                  {home.ai.aiReplyOne}
                </div>
                <div className="px-3.5 py-3 rounded-xl bg-secondary/80 border border-border leading-snug">
                  {home.ai.aiReplyTwo}
                </div>
                <div className="flex flex-wrap gap-2.5 mt-1">
                  {home.ai.promptChips.map((chip) => (
                    <span key={chip} className="px-2.5 py-2 rounded-lg bg-secondary/60 border border-border text-xs text-muted-foreground">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-5 md:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 mix-blend-screen opacity-60" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">{home.ai.rightTitle}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{home.ai.rightDesc}</p>
              <div className="grid grid-cols-2 gap-3">
                {home.ai.cards.map((clip, i) => (
                  <div key={i} className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/30 via-transparent to-blue-400/30 p-3.5 min-h-[140px] flex flex-col justify-between shadow-lg">
                    <div>
                      <h4 className="font-semibold mb-2">{clip.title}</h4>
                      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                        <span>{clip.genre}</span>
                        <span>
                          {home.ai.watchOnLabel}: {clip.platform}
                        </span>
                      </div>
                    </div>
                    <div className="absolute right-3 bottom-3 px-2.5 py-1.5 rounded-full bg-background/85 border border-border text-xs font-semibold">
                      ➕ {home.ai.saveLabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how" className="py-12 md:py-16 scroll-mt-24">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.how.eyebrow}</div>
          <h2 className="text-3xl font-bold mb-8">{home.how.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12">
            {home.how.steps.map((step, i) => (
              <div key={i} className="rounded-2xl border border-border bg-secondary/30 backdrop-blur p-5 md:p-6 shadow-lg min-h-[180px] flex flex-col gap-2">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary/20 border border-primary/50 text-foreground font-bold">
                  {step.num}
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{home.faq.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{home.faq.subtitle}</p>
          </div>

          <div className="grid gap-5 max-w-3xl mx-auto">
            {home.faq.items.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Loved By Strip */}
        <section id="loved-by" className="py-10 md:py-12">
          <div className="rounded-2xl border border-border bg-gradient-to-r from-primary/10 via-secondary/40 to-blue-500/10 px-6 md:px-8 py-6 md:py-8 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-left">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.lovedBy.eyebrow}</div>
                <h3 className="text-2xl font-bold">{home.lovedBy.quote}</h3>
              </div>
              <div className="flex items-center gap-3">
                {["AV", "LM", "JR", "TK"].map((initials, i) => (
                  <div
                    key={initials}
                    className="relative w-12 h-12 rounded-full bg-secondary/80 border border-border shadow-lg flex items-center justify-center text-sm font-semibold"
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 to-blue-500/40 opacity-70 blur-[6px]" aria-hidden />
                    <span className="relative z-10">{initials}</span>
                  </div>
                ))}
                <div className="px-3 py-1.5 rounded-full bg-background/70 border border-border text-xs font-semibold">
                  {home.lovedBy.rating}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-12 md:py-16 text-center rounded-2xl border border-border bg-gradient-to-br from-secondary/40 to-secondary/20 px-6 md:px-8 py-10 md:py-16 shadow-2xl mt-12 scroll-mt-24">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">{home.cta.eyebrow}</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{home.cta.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">{home.cta.subtitle}</p>
          <div className="grid gap-6 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {home.cta.plans.map((plan, idx) => (
                <label
                  key={plan.id}
                  className="relative flex flex-col gap-4 rounded-2xl border bg-background/80 backdrop-blur px-5 py-5 text-left shadow-xl cursor-pointer transition-transform hover:-translate-y-1 motion-reduce:transform-none"
                >
                  <input
                    type="radio"
                    name="plan"
                    defaultChecked={idx === 1}
                    className="sr-only peer"
                    aria-label={`${plan.name} plan`}
                  />
                  <div className={`absolute inset-0 rounded-2xl border peer-checked:border-primary/70 ${plan.id === "founding" ? "border-primary/50" : "border-border"} transition-colors`} aria-hidden />
                  <div className="relative flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{plan.name}</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-sm text-muted-foreground">USD</span>
                      </div>
                      <p className="text-muted-foreground mt-1">{plan.desc}</p>
                    </div>
                    {plan.chip ? (
                      <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/40 text-xs font-semibold text-primary">
                        {plan.chip}
                      </span>
                    ) : null}
                  </div>
                  <ul className="relative grid gap-2 text-sm text-muted-foreground">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="relative">
                    <Button asChild size="lg" variant={plan.id === "founding" ? "default" : "secondary"} className="w-full">
                      <Link href="#download">{plan.primaryCta}</Link>
                    </Button>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="#" className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  {home.cta.appStoreCta}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="#ai">{home.cta.tryPromptsCta}</Link>
              </Button>
            </div>
          </div>

          {/* Legal Links for App Store */}
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p className="mb-2">{home.cta.legalIntro}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-primary hover:underline">
                {home.cta.legalLinks.terms}
              </Link>
              <span>•</span>
              <Link href="/privacy" className="text-primary hover:underline">
                {home.cta.legalLinks.privacy}
              </Link>
              <span>•</span>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {home.cta.legalLinks.eula}
              </a>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-12 md:py-16 scroll-mt-24">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{home.support.eyebrow}</div>
          <h2 className="text-3xl font-bold mb-3">{home.support.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">{home.support.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {home.support.cards.map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                {card.desc ? <p className="text-muted-foreground leading-relaxed">{card.desc}</p> : null}
                {card.list ? (
                  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    {card.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
