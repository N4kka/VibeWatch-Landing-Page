import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "VibeWatch — Privacy Policy",
  description: "How VibeWatch handles your data",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-start py-8">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Privacy Policy</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">How VibeWatch handles your data</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We collect only what is needed to personalize your clip feed, deliver AI recommendations, and sync lists across devices. Below is a concise summary of the data we collect, why we use it, and how you can manage or delete it.
            </p>
            <div className="flex flex-wrap gap-2.5 text-sm">
              <span className="px-2.5 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground">Last updated: January 2025</span>
              <span className="px-2.5 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground">
                Contact: <a href="mailto:startingvibe2025@gmail.com" className="text-primary hover:underline">startingvibe2025@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">🔒 Key Privacy Points</h3>
            <ul className="text-muted-foreground leading-relaxed space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>No data selling.</strong> We never sell your personal data. Third-party providers only receive what they need to run the service.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>You control permissions</strong> in-app and in iOS Settings (notifications, analytics, location).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Request export or deletion</strong> anytime via <a href="mailto:startingvibe2025@gmail.com" className="text-primary hover:underline">startingvibe2025@gmail.com</a></span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span><strong>Terms of Use:</strong> <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Standard EULA</a></span>
              </li>
            </ul>
          </div>
        </section>

        {/* Apple-Required Legal Links */}
        <section className="py-12 border-t-2 border-primary/30">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">📱</span>
                Important Legal Documents for App Store Compliance
              </h2>

              <div className="space-y-5">
                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Privacy Policy (This Page)</h3>
                  <p className="text-muted-foreground mb-2">
                    You are currently viewing our complete Privacy Policy, which explains:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>What data we collect and why</li>
                    <li>How we use and protect your information</li>
                    <li>Your rights and how to manage your data</li>
                    <li>How to request data export or deletion</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Link:</strong> <span className="text-primary">https://vibewatch.com/privacy</span>
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Terms of Use / EULA</h3>
                  <p className="text-muted-foreground mb-3">
                    VibeWatch uses the Apple Standard End User License Agreement (EULA), which governs your use of the app and includes important subscription terms.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div>
                      <strong>Apple Standard EULA:</strong>{" "}
                      <a
                        href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View Apple&apos;s EULA
                      </a>
                    </div>
                    <div>
                      <strong>Subscription Details:</strong>{" "}
                      <Link href="/terms" className="text-primary hover:underline">
                        View our complete Terms of Use and subscription information
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Contact for Privacy Requests</h3>
                  <p className="text-muted-foreground mb-2">
                    For any privacy-related questions, data access requests, or deletion requests:
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:startingvibe2025@gmail.com" className="text-primary hover:underline">
                      startingvibe2025@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Please include your account email and a description of your request. We typically respond within 1-2 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we collect */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">What we collect</div>
          <h2 className="text-3xl font-bold mb-6">Information necessary to run VibeWatch</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Account & identity",
                items: ["Email, username, optional avatar; authentication tokens (Supabase auth).", "Sign in with Apple details when you choose that option."]
              },
              {
                title: "App activity",
                items: ["Clips you view, skip, like, save; lists you create; comments/reactions.", "Search terms, AI prompts, streaming platform preferences."]
              },
              {
                title: "Device & technical",
                items: ["Device type, OS version, language, country (for availability checks).", "Crash logs and push notification token."]
              },
              {
                title: "Purchases & support",
                items: ["Product identifiers, receipts, entitlement status via Apple/RevenueCat (never full card details).", "Support messages sent to startingvibe2025@gmail.com."]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                  {item.items.map((text, j) => <li key={j}>{text}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* How we use it */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">How we use it</div>
          <h2 className="text-3xl font-bold mb-6">Purpose-driven processing</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: "Run core features",
                items: ["Authenticate you, sync lists and comments, and deliver personalized clip feeds.", "Show where titles are streaming, keep your preferences in sync, and prevent abuse."]
              },
              {
                title: "AI recommendations",
                items: ["Prompts and minimal context are sent to our AI provider (Cerebras) to generate suggestions.", "Requests are logged to maintain quality and prevent misuse."]
              },
              {
                title: "Payments & access",
                items: ["Verify App Store purchases and manage Pro entitlements with RevenueCat.", "We rely on Apple for billing; refunds are handled by Apple."]
              },
              {
                title: "Quality & reliability",
                items: ["Optional analytics (Firebase when available) for performance and crash diagnostics.", "Notifications you opt into (new clips, reminders); you can disable them anytime."]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg min-h-[200px] flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                  {item.items.map((text, j) => <li key={j}>{text}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sharing & retention */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Sharing & retention</div>
          <h2 className="text-3xl font-bold mb-6">Where data lives and how long we keep it</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Storage & processors",
                items: ["Supabase for user data and lists.", "RevenueCat for entitlements; Apple for payments.", "Firebase (when available) for analytics; TMDB/Watchmode for availability data."]
              },
              {
                title: "Retention",
                items: ["Data is kept while you maintain an account.", "Requests for export or deletion are honored at startingvibe2025@gmail.com."]
              },
              {
                title: "Commitments",
                items: ["We do not sell personal data.", "Providers only receive what's required to deliver the service.", "VibeWatch is intended for users 13+."]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                  {item.items.map((text, j) => <li key={j}>{text}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Your controls */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Your controls</div>
          <h2 className="text-3xl font-bold mb-6">Manage permissions and requests</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Permissions",
                items: ["Notifications can be turned off in iOS Settings > Notifications.", "Analytics (when prompted) is optional; you can opt out in settings."]
              },
              {
                title: "Access, export, delete",
                items: ["Email startingvibe2025@gmail.com to access, export, or delete your data.", "We'll verify your request via your account email and respond promptly."]
              },
              {
                title: "Changes to this policy",
                items: ["Updates are posted on this page with a new \"Last updated\" date.", "Material changes may also be noted in-app."]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                  {item.items.map((text, j) => <li key={j}>{text}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Contact</div>
          <h2 className="text-3xl font-bold mb-4">Questions or requests?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Reach us anytime at <a href="mailto:startingvibe2025@gmail.com" className="text-primary hover:underline">startingvibe2025@gmail.com</a>. Include your device, app version, and a short description so we can help quickly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary">
              <Link href="/#support">Back to Support</Link>
            </Button>
            <Button asChild>
              <Link href="/#download">Download VibeWatch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
