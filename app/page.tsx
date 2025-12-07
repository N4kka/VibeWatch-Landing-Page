import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { Play, Sparkles, Heart, TrendingUp, Clock, Users, CheckCircle2, X as XIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl px-4 md:px-6 py-8 md:py-12">
        {/* Video Hero Section */}
        <section id="top" className="py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-full bg-secondary/60 text-muted-foreground text-sm border border-border mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                Clip-first movie & TV discovery
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
                Watch clips. Let AI pick what's next.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Scroll through cinematic clips from trending films and series. Ask Vibe AI to match your mood.
                Find your next binge in under 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="#download" className="flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Download Free
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href="#how">See How it Works</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="relative rounded-2xl border border-border bg-gradient-to-b from-secondary/50 to-secondary/20 p-3 md:p-5 shadow-2xl backdrop-blur overflow-hidden max-w-sm w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 blur-xl" />
                <div className="relative z-10">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Watch the app in action</div>
                  <video
                    className="w-full rounded-xl shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="images/1.png"
                  >
                    <source src="/app-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section id="comparison" className="py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Stop endless scrolling. Start watching.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Traditional streaming makes you hunt for hours. VibeWatch gets you watching in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Before */}
            <div className="rounded-2xl border-2 border-destructive/50 bg-card/20 backdrop-blur p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-destructive/20 border border-destructive/50">
                  <XIcon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Without VibeWatch</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Scroll through Netflix for 30 minutes",
                  "Read dozens of generic descriptions",
                  "Watch boring trailers that spoil the plot",
                  "Still can't decide what to watch",
                  "End up rewatching The Office again"
                ].map((item, i) => (
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
                <h3 className="text-xl md:text-2xl font-bold">With VibeWatch</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Open app → instant clips start playing",
                  "Swipe through 30-second scenes",
                  "Feel the vibe without spoilers",
                  "Ask AI: 'Need a mind-bending thriller'",
                  "Watching your new favorite in 2 minutes"
                ].map((item, i) => (
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
        <section id="features-showcase" className="py-12 md:py-16">
          <div className="text-center mb-12">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">See it in action</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything you need to discover your next watch</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Screenshot 1 - Discovery */}
            <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/1.png"
                  alt="Personalized feed based on your mood"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Smart Discovery</h3>
              </div>
              <p className="text-muted-foreground">
                AI-powered feed learns your taste. Get personalized clips from classics to trending hits.
              </p>
            </div>

            {/* Screenshot 2 - Clips */}
            <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/2.png"
                  alt="Swipeable clip feed"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Play className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Instant Clips</h3>
              </div>
              <p className="text-muted-foreground">
                30-second scenes that capture the essence. No spoilers, just pure vibe.
              </p>
            </div>

            {/* Screenshot 3 - Watchlist */}
            <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/3.png"
                  alt="Create custom watchlists"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Smart Lists</h3>
              </div>
              <p className="text-muted-foreground">
                Save favorites, organize by mood, sync across all devices. Your perfect queue awaits.
              </p>
            </div>

            {/* Screenshot 4 - Details */}
            <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/4.png"
                  alt="Detailed movie information"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Full Details</h3>
              </div>
              <p className="text-muted-foreground">
                Ratings, cast, streaming platforms, trailers. Everything you need to decide.
              </p>
            </div>

            {/* Screenshot 5 - Search */}
            <div className="group rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <Image
                  src="/5.png"
                  alt="Search and trending movies"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">What's Trending</h3>
              </div>
              <p className="text-muted-foreground">
                See what everyone's watching right now. Never miss the next big thing.
              </p>
            </div>

            {/* Feature Card - Vibe AI */}
            <div className="group rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 backdrop-blur p-5 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
              <div className="flex items-center justify-center h-[300px] mb-4 rounded-xl bg-gradient-to-br from-primary/30 to-blue-500/30">
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold">Ask Vibe AI</div>
                  <div className="text-sm text-muted-foreground mt-2 px-4">
                    "Cozy mysteries under 2 hours"
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Vibe AI Assistant</h3>
              </div>
              <p className="text-muted-foreground">
                Describe your mood in natural language. Get instant recommendations with preview clips.
              </p>
            </div>
          </div>
        </section>

        {/* Clips Section */}
        <section id="clips" className="py-12 md:py-16">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Built for fans</div>
          <h2 className="text-3xl font-bold mb-3">Clips that make deciding what to watch effortless</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
            We prefetch a personalized mix of trending, acclaimed, and classic titles, score them against your vibe,
            and deliver a swipeable feed of clips so you feel a story before you commit to a full watch.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Lightning start", desc: "2 handpicked clips appear in seconds, so you're watching immediately—not waiting for previews or ads." },
              { title: "Diverse feed", desc: "Movies + TV balanced with genre diversity and classics injected to keep your queue fresh." },
              { title: "Engagement aware", desc: "Likes, watch time, and lists tune what you see next. Skip feels? Vibe AI adapts the feed live." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[180px] flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Section */}
        <section id="ai" className="py-12 md:py-16 grid md:grid-cols-2 gap-5 md:gap-6">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-5 md:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 mix-blend-screen opacity-60" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Ask Vibe AI to find your next watch</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Describe the mood ("cozy heists", "optimistic sci‑fi", "series under 30 min") and Vibe AI returns a tight list with clips you can
                preview instantly. Save to lists or open on your streaming platform.
              </p>
              <div className="rounded-2xl border border-border bg-secondary/30 p-4 grid gap-2.5">
                <div className="px-3.5 py-3 rounded-xl bg-primary/15 border border-primary/35 leading-snug">
                  "Need a mind-bending mystery under 2 hours."
                </div>
                <div className="px-3.5 py-3 rounded-xl bg-secondary/80 border border-border leading-snug">
                  I've got 3: <strong>Fracture</strong> (1h 53) with a tense courtroom twist, <strong>Coherence</strong> (1h 29) for sci‑fi suspense, and <strong>The Invitation</strong> (1h 40) with slow-burn dread.
                </div>
                <div className="px-3.5 py-3 rounded-xl bg-secondary/80 border border-border leading-snug">
                  Want trailers or quick clips from each?
                </div>
                <div className="flex flex-wrap gap-2.5 mt-1">
                  <span className="px-2.5 py-2 rounded-lg bg-secondary/60 border border-border text-xs text-muted-foreground">
                    Prompt: "Feel-good sports series"
                  </span>
                  <span className="px-2.5 py-2 rounded-lg bg-secondary/60 border border-border text-xs text-muted-foreground">
                    Prompt: "Slow-burn thrillers tonight"
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/20 p-5 md:p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 mix-blend-screen opacity-60" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Ready to watch on your time</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Save any clip to custom lists, see where it's streaming, and sync across devices. Free: 15 clips daily. Pro: Unlimited clips & AI starting at <span className="text-primary font-semibold">$3.99/mo</span> (Founding Member rate - limited time!)
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Neon Alley", genre: "Cyberpunk", platform: "Prime" },
                  { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
                ].map((clip, i) => (
                  <div key={i} className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/30 via-transparent to-blue-400/30 p-3.5 min-h-[140px] flex flex-col justify-between shadow-lg">
                    <div>
                      <h4 className="font-semibold mb-2">{clip.title}</h4>
                      <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                        <span>{clip.genre}</span>
                        <span>Watch on: {clip.platform}</span>
                      </div>
                    </div>
                    <div className="absolute right-3 bottom-3 px-2.5 py-1.5 rounded-full bg-background/85 border border-border text-xs font-semibold">
                      ➕ Save
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section id="how" className="py-12 md:py-16">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">How it works</div>
          <h2 className="text-3xl font-bold mb-8">Three steps to your next favorite</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-12">
            {[
              { num: "01", title: "Open to the Clips tab", desc: "Hit play and swipe through a preloaded stack of the day's best scenes. Instant dopamine, no decisions required." },
              { num: "02", title: "Ask Vibe AI", desc: "Describe your mood or constraints. AI curates titles, serves clips, and adjusts future recommendations in real time." },
              { num: "03", title: "Save & stream", desc: "Add favorites to lists, share with friends, and jump to where it's streaming. Upgrade to Pro starting at $3.99/mo (Founding Member rate - limited time!)." },
            ].map((step, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about VibeWatch
            </p>
          </div>

          <div className="grid gap-5 max-w-3xl mx-auto">
            {[
              {
                q: "Is VibeWatch really free?",
                a: "Yes! Free users get 15 clips daily and basic Vibe AI recommendations. Upgrade to Founding Member Pro ($3.99/mo or $34.99/year) or Standard Pro ($8.99/mo or $69.99/year) for unlimited clips, advanced AI, and ad-free experience."
              },
              {
                q: "Do I need subscriptions to watch?",
                a: "VibeWatch shows you clips and tells you where to stream. You'll need subscriptions to Netflix, Prime, etc. to watch full content, but discovery is free."
              },
              {
                q: "How does Vibe AI work?",
                a: "Vibe AI learns from your interactions—likes, skips, watch time—and matches your mood to our database of titles. Describe what you want in natural language and get instant results."
              },
              {
                q: "Are the clips spoiler-free?",
                a: "Absolutely. We carefully select 20-30 second scenes that capture the vibe without revealing plot twists or endings."
              },
              {
                q: "Can I use it on multiple devices?",
                a: "Yes! Your lists, preferences, and watch history sync across iPhone, iPad, and all devices where you're signed in."
              },
              {
                q: "What's included in Pro?",
                a: "Pro unlocks unlimited daily clips, unlimited AI requests, priority support, early access to new features, and an ad-free experience. Founding Member: $3.99/mo or $34.99/year (locked forever). Standard: $8.99/mo or $69.99/year."
              },
              {
                q: "What's the Founding Member plan?",
                a: "Founding Members get lifetime access to Pro features at launch pricing—$3.99/mo or $34.99/year—locked in forever, even when prices increase to standard rates. Available for the first month after launch (mid-Dec to mid-Jan). Lock in your rate now!"
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-12 md:py-16 text-center rounded-2xl border border-border bg-gradient-to-br from-secondary/40 to-secondary/20 px-6 md:px-8 py-10 md:py-16 shadow-2xl mt-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Get VibeWatch</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Turn scrolling into your next watch night.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            Download now to browse 15 free clips a day, unlock Vibe AI, and find what fits your vibe. Your lists stay in sync—everywhere you watch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#" className="flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Download on the App Store
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <Link href="#ai">Try Vibe AI prompts</Link>
            </Button>
          </div>

          {/* Legal Links for App Store */}
          <div className="mt-6 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p className="mb-2">VibeWatch Pro subscription information:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Use & Subscription Details
              </Link>
              <span>•</span>
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              <span>•</span>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Apple EULA
              </a>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-12 md:py-16">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Support</div>
          <h2 className="text-3xl font-bold mb-3">Need help with VibeWatch?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
            We're here if you run into an issue, have a billing question, or want to share feedback about the clip feed or Vibe AI.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">Contact support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Email us at <a href="mailto:startingvibe2025@gmail.com" className="text-primary hover:underline">startingvibe2025@gmail.com</a>. Include your device, app version, and a short description so we can help fast.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">What we can help with</h3>
              <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                <li>Account access, sign-in, or verification problems</li>
                <li>Billing and subscriptions (RevenueCat / App Store)</li>
                <li>Reporting bugs, broken clips, or content concerns</li>
                <li>Data export or deletion requests</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">Response time</h3>
              <p className="text-muted-foreground leading-relaxed">
                We usually reply within one business day. Urgent playback or paywall issues are prioritized.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
              <h3 className="text-xl font-semibold">Legal & policies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Review the details that keep your subscription and data transparent.
              </p>
              <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                <li><Link href="/terms" className="text-primary hover:underline">Terms of Use / EULA</Link> — subscription terms, billing, and renewal rules.</li>
                <li><Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> — what we collect, why, and how to request deletion.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
