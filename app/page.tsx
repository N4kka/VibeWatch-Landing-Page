"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  Download, 
  Play, 
  Heart, 
  CheckCircle2, 
  Bolt, 
  Info, 
  ChevronDown, 
  EyeOff, 
  Brain, 
  Film, 
  ExternalLink,
  Check,
  Apple,
  ChevronLeft,
  ChevronRight,
  Search as SearchIcon,
  Compass,
  X,
  Menu
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useTranslation } from "@/components/language-provider";

const ICONS = [Play, Compass, Bolt, Heart, Info, SearchIcon];

export default function Home() {
  const { t } = useTranslation();
  const home = t<any>("home");
  const header = t<any>("header");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Construct carousel items from translations + static images/icons
  const carouselItems = home?.showcase?.cards?.map((card: any, i: number) => ({
    ...card,
    src: `/${i + 1}.png`,
    icon: ICONS[i] || Play
  })) || [];

  // Auto-play
  useEffect(() => {
    if (isHovered || carouselItems.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isHovered, carouselItems.length]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;

    if (swipe < -50) {
      nextSlide();
    } else if (swipe > 50) {
      prevSlide();
    }
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);

  // Helper to get item at relative index (circular)
  const getItem = (offset: number) => {
    if (carouselItems.length === 0) return null;
    return carouselItems[(currentIndex + offset + carouselItems.length) % carouselItems.length];
  };

  if (!home) return null; // Or loading state

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 font-sans antialiased overflow-x-hidden selection:bg-primary selection:text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-hero-gradient pointer-events-none"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-1 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-problem font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white max-w-lg lg:max-w-md">
                {home.hero.title.split(",")[0]}<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-white/90">{home.hero.title.split(",")[1] || "options"}</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed font-problem tracking-wide">
                {home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2 justify-center lg:justify-end">
                <Link href="https://testflight.apple.com/join/6xaAaANs" target="_blank" rel="noopener noreferrer">
                  <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transform group">
                    <Download className="text-white w-6 h-6 group-hover:scale-110 transition-transform" />
                    {home.hero.primaryCta}
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-1 relative flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 mt-16 lg:mt-0">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-solution font-extrabold tracking-tight leading-[1.1] text-gray-900 dark:text-white max-w-lg lg:max-w-md">
                {home.hero.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed font-solution">
                {home.hero.subtitle}
              </p>
              
              {/* Hero Phone Mockup */}
              <div className="relative w-[320px] h-[650px] bg-black border-[12px] border-[#1a1a1a] rounded-[3.5rem] shadow-2xl overflow-hidden z-20 ring-1 ring-white/10 group">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center shadow-lg pointer-events-none">
                  <div className="w-full h-full flex items-center justify-end px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1c] border border-[#2a2a2a] opacity-50"></div>
                  </div>
                </div>
                {/* Images inside frame (with padding to fit) */}
                <div className="absolute inset-0 bg-gray-900 flex flex-col overflow-hidden">
                  <img 
                    alt="App Screenshot" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" 
                    src="/stranger_things.png"
                  />
                </div>
              </div>
              
              <div className="hidden absolute top-28 -left-4 lg:-left-12 bg-surface-dark/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl z-30 animate-[bounce_4s_infinite]">
                 {/* Decorative element */}
              </div>
              <Link href="https://www.netflix.com/title/80057281" target="_blank" rel="noopener noreferrer" className="absolute bottom-32 -right-2 lg:-right-8 bg-white text-black p-3.5 rounded-xl shadow-xl z-30 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-300 border border-gray-200 block">
                <div className="flex items-center gap-2">
                  <Film className="text-red-600 w-5 h-5 fill-current" />
                  <div>
                    <p className="text-[10px] font-bold opacity-60 uppercase">Streaming on</p>
                    <p className="text-xs font-bold leading-none">Netflix</p>
                  </div>
                  <ExternalLink className="text-gray-400 w-4 h-4 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-surface-dark border-y border-gray-100 dark:border-white/5" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">{home.whyClips.eyebrow}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">{home.whyClips.title}</h2>
            </div>
            <div className="mt-4 md:mt-0 px-4 py-2 bg-primary/10 rounded-lg border border-primary/20">
              <span className="text-primary text-sm font-medium">{home.whyClips.metric}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-200 dark:bg-surface-dark-lighter rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <EyeOff className="text-gray-600 dark:text-gray-300 group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{home.whyClips.items[0].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {home.whyClips.items[0].desc}
              </p>
            </div>
            <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-200 dark:bg-surface-dark-lighter rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <Brain className="text-gray-600 dark:text-gray-300 group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{home.whyClips.items[1].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {home.whyClips.items[1].desc}
              </p>
            </div>
            <div className="group p-6 rounded-2xl bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-200 dark:bg-surface-dark-lighter rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <CheckCircle2 className="text-gray-600 dark:text-gray-300 group-hover:text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{home.whyClips.items[2].title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {home.whyClips.items[2].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{home.comparison.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{home.comparison.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-red-500/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/5 rounded-bl-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                  <X className="text-red-500 w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{home.comparison.beforeTitle}</h3>
              </div>
              <ul className="space-y-4">
                {home.comparison.beforeItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <X className="text-red-500 w-4 h-4 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-surface-dark border border-primary/30 shadow-lg shadow-primary/5 relative overflow-hidden transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full"></div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="text-primary w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{home.comparison.afterTitle}</h3>
              </div>
              <ul className="space-y-4">
                {home.comparison.afterItems.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium">
                    <CheckCircle2 className="text-primary w-4 h-4 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Carousel Section */}
      <section className="py-24 bg-gradient-to-b from-surface-dark to-background-dark overflow-hidden relative" id="how-it-works">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">{home.showcase.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">{home.showcase.title}</h2>
          
          {/* Carousel */}
          <div className="relative flex flex-col items-center justify-center">
            <div 
              className="relative w-[300px] h-[600px] md:w-[320px] md:h-[640px] perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Phone Frame */}
              <div className="absolute inset-0 border-[12px] border-[#1a1a1a] rounded-[3.5rem] shadow-2xl overflow-hidden z-20 ring-1 ring-white/10 pointer-events-none">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center shadow-lg">
                  <div className="w-full h-full flex items-center justify-end px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#1c1c1c] border border-[#2a2a2a] opacity-50"></div>
                  </div>
                </div>
              </div>

              {/* Slider Content */}
              <div className="absolute inset-3 overflow-hidden rounded-[2.8rem] z-10 bg-gray-900">
                <motion.div
                  className="flex h-full"
                  animate={{ x: `-${currentIndex * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                >
                  {carouselItems.map((item: any, i: number) => (
                    <div key={i} className="min-w-full h-full relative">
                      <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4 mt-8">
              <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white" aria-label="Previous Slide">
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-white/30" />
                <div className="w-16 h-2 rounded-full bg-white/10 overflow-hidden relative">
                  <motion.div 
                    key={currentIndex} 
                    className="absolute inset-y-0 left-0 bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                </div>
                <div className="w-2 h-2 rounded-full bg-white/30" />
              </div>

              <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white" aria-label="Next Slide">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dynamic Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-12 text-left">
            <div className="hidden md:block opacity-50 transform scale-95 transition-all duration-500">
              <h4 className="text-primary font-bold flex items-center gap-2">
                {(() => {
                  const item = getItem(-1);
                  if (!item) return null;
                  const ItemIcon = item.icon;
                  return <ItemIcon className="w-4 h-4 fill-current" />;
                })()}
                {getItem(-1)?.title}
              </h4>
              <p className="text-xs text-gray-400 mt-1">{getItem(-1)?.desc}</p>
            </div>

            <div className="md:col-start-2 text-center md:text-left p-4 bg-surface-dark rounded-xl border border-primary/30 shadow-lg shadow-primary/5 transform scale-100 transition-all duration-500">
              <h4 className="text-primary font-bold flex items-center justify-center md:justify-start gap-2">
                {(() => {
                  const item = getItem(0);
                  if (!item) return null;
                  const ItemIcon = item.icon;
                  return <ItemIcon className="w-4 h-4 fill-current" />;
                })()}
                {getItem(0)?.title}
              </h4>
              <p className="text-xs text-gray-300 mt-1">{getItem(0)?.desc}</p>
            </div>

            <div className="hidden md:block opacity-50 transform scale-95 transition-all duration-500 text-right">
              <h4 className="text-primary font-bold flex items-center justify-end gap-2">
                {getItem(1)?.title}
                {(() => {
                  const item = getItem(1);
                  if (!item) return null;
                  const ItemIcon = item.icon;
                  return <ItemIcon className="w-4 h-4 fill-current" />;
                })()}
              </h4>
              <p className="text-xs text-gray-400 mt-1">{getItem(1)?.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-surface-dark rounded-3xl p-8 border border-gray-200 dark:border-white/5 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{home.ai.leftTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-sm">{home.ai.leftDesc}</p>
              <div className="bg-gray-50 dark:bg-black/40 rounded-2xl p-6 border border-gray-200 dark:border-white/5">
                <div className="flex justify-end mb-4">
                  <div className="bg-surface-dark-lighter dark:bg-surface-dark-lighter text-gray-800 dark:text-gray-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm border border-gray-200 dark:border-white/10 max-w-[80%]">
                    {home.ai.promptOne}
                  </div>
                </div>
                <div className="flex justify-start mb-6">
                  <div className="bg-primary/10 text-primary-hover dark:text-primary px-4 py-3 rounded-2xl rounded-tl-sm text-sm border border-primary/20 max-w-[90%]">
                    {home.ai.aiReplyOne}
                    <br/><br/>
                    {home.ai.aiReplyTwo}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {home.ai.promptChips.map((chip: string) => (
                    <button key={chip} className="text-xs bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary px-3 py-1.5 rounded-full text-gray-500 dark:text-gray-400 transition-colors">{chip}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-surface-dark rounded-3xl p-8 border border-white/5 relative overflow-hidden flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-[80px]"></div>
              <h3 className="text-2xl font-bold text-white mb-4 z-10">{home.ai.rightTitle}</h3>
              <p className="text-gray-400 mb-8 text-sm z-10">{home.ai.rightDesc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-accent-purple/50 transition-colors cursor-pointer group">
                  <div className="h-24 w-full bg-gray-800 rounded-lg mb-3 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/5.png" alt="Neon Alley"/>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="text-white fill-current w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm">{home.ai.cards[0].title}</h4>
                  <p className="text-xs text-gray-500">{home.ai.cards[0].genre} • {home.ai.watchOnLabel} {home.ai.cards[0].platform}</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="h-24 w-full bg-gray-800 rounded-lg mb-3 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/6.png" alt="Golden Hour"/>
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="text-white fill-current w-8 h-8" />
                    </div>
                  </div>
                  <h4 className="text-white font-bold text-sm">{home.ai.cards[1].title}</h4>
                  <p className="text-xs text-gray-500">{home.ai.cards[1].genre} • {home.ai.watchOnLabel} {home.ai.cards[1].platform}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24" id="pricing">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-dark rounded-[2.5rem] p-8 md:p-16 text-center border border-white/5 relative overflow-hidden">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-purple/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10">
              <span className="text-gray-400 font-medium text-sm tracking-widest uppercase mb-4 block">{home.cta.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{home.cta.title}</h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto">{home.cta.subtitle}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
                {/* Free Plan */}
                <div className="bg-background-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors text-left flex flex-col h-full">
                  <div className="mb-auto">
                    <h3 className="text-white font-bold text-xl mb-1">{home.cta.plans[0].name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold text-white">{home.cta.plans[0].price}</span>
                      {home.cta.plans[0].showCurrency !== false && <span className="text-gray-500 text-sm">USD</span>} {/* Assuming USD default unless overwritten by i18n content which has symbols */}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {home.cta.plans[0].perks.map((perk: string) => (
                        <li key={perk} className="flex items-center gap-3 text-sm text-gray-400"><Check className="text-gray-600 text-sm w-4 h-4" /> {perk}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="https://testflight.apple.com/join/6xaAaANs" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">{home.cta.plans[0].primaryCta}</button>
                  </Link>
                </div>
                {/* Pro Plan */}
                <div className="bg-gradient-to-b from-surface-dark-lighter to-background-dark backdrop-blur-sm rounded-2xl p-8 border border-primary/50 shadow-lg shadow-primary/5 text-left flex flex-col h-full relative">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">{home.cta.plans[1].chip}</div>
                  <div className="mb-auto">
                    <h3 className="text-white font-bold text-xl mb-1 text-primary">{header.foundingChip.split(' ')[0]} Member</h3> {/* Rough approximation or use strict key? i18n has 'Founding Member' in pricing cards logic usually. I'll use the title from plans[1] which is "Download now" in en.json? Wait. 
                    Checking i18n again.
                    plans[1] name is "Download now".
                    But visual design had "Founding Member". 
                    Ah, the i18n structure for plans might be slightly different than visual design if I just replaced it.
                    Let's check `home.cta.plans` in i18n.
                    Plan 0: Free.
                    Plan 1: Download now.
                    Wait, the design had "Founding Member" card.
                    If I use `home.cta.plans`, I get "Download now" as title.
                    I should probably override the title to "Founding Member" to match visual or use a specific key if available.
                    Actually, in the `lib/i18n.ts` I wrote, `plans[1].name` is "Download now".
                    I will stick to the text in `i18n` to be safe, or if it looks weird ("Download now" as a plan name?), I'll check if I should use `foundingChip` text.
                    The visual design had "Founding Member" as title.
                    I will use "Founding Member" hardcoded or from a new key? No, I must use translations.
                    I'll use `home.cta.plans[1].name` for now. If it says "Download now", so be it. It acts as a CTA.
                    Wait, "Founding Member" is in `home.header.foundingChip` ("Founding Member $3.99/mo").
                    I'll use `home.cta.plans[1].name`.
                    */}
                    <h3 className="text-white font-bold text-xl mb-1 text-primary">{home.cta.plans[1].name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold text-white">{home.cta.plans[1].price}</span> 
                      {/* Price is empty string in i18n for plan 1! */}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {home.cta.plans[1].perks.map((perk: string) => (
                        <li key={perk} className="flex items-center gap-3 text-sm text-white"><CheckCircle2 className="text-primary text-sm w-4 h-4 fill-current" /> {perk}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="https://testflight.apple.com/join/6xaAaANs" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/25 transition-all transform hover:scale-[1.02]">{home.cta.plans[1].primaryCta}</button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Link href="https://testflight.apple.com/join/6xaAaANs" target="_blank" rel="noopener noreferrer">
                  <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all">
                    <Apple className="w-5 h-5 fill-current" />
                    {home.cta.appStoreCta}
                  </button>
                </Link>
                <Link className="text-gray-400 hover:text-white text-sm font-medium transition-colors" href="#">{home.cta.tryPromptsCta} -{">"}</Link>
              </div>
              <p className="mt-6 text-xs text-gray-600 dark:text-gray-500">
                {home.cta.legalIntro} <br/>
                <Link className="underline hover:text-primary" href="/terms">{home.cta.legalLinks.terms}</Link> • <Link className="underline hover:text-primary" href="/privacy">{home.cta.legalLinks.privacy}</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light dark:bg-background-dark" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">{home.faq.title}</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">{home.faq.subtitle}</p>
          <div className="space-y-4">
            {home.faq.items.map((item: any, i: number) => (
              <details key={i} className="group bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/5 rounded-2xl open:border-primary/50 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer p-6 list-none font-semibold text-gray-900 dark:text-white">
                  <span>{item.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="text-gray-400 group-open:text-primary w-5 h-5" />
                  </span>
                </summary>
                <div className="text-gray-600 dark:text-gray-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}