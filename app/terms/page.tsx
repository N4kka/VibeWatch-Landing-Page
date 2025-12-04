import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "VibeWatch — Terms of Use",
  description: "VibeWatch Pro subscriptions and EULA",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-5xl px-6 py-12 md:py-16">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-start py-8">
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Terms of Use & Subscriptions</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">VibeWatch Pro subscriptions and EULA</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              These terms cover how VibeWatch Pro subscriptions work, billing and renewal rules, and the EULA that governs the app. Please read them before purchasing.
            </p>
            <div className="flex flex-wrap gap-2.5 text-sm">
              <span className="px-2.5 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground">Last updated: January 2025</span>
              <span className="px-2.5 py-2 rounded-full border border-border bg-secondary/50 text-muted-foreground">Applies to: VibeWatch iOS app</span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur p-6 shadow-xl">
            <h3 className="text-xl font-semibold mb-4">📱 Auto-Renewable Subscription Information</h3>
            <div className="space-y-3 text-sm">
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="font-semibold mb-1">Subscription Title:</div>
                <div className="text-muted-foreground">VibeWatch Pro (Monthly or Annual)</div>
              </div>
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="font-semibold mb-1">Subscription Lengths:</div>
                <div className="text-muted-foreground">• Monthly: 1 month (renews every 30 days)</div>
                <div className="text-muted-foreground">• Annual: 12 months (renews yearly)</div>
              </div>
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="font-semibold mb-1">Pricing:</div>
                <div className="text-muted-foreground">Founding Member Pro: $3.99/mo or $34.99/year (limited time, locked forever). Standard Pro: $8.99/mo or $69.99/year. Prices displayed in your local currency before purchase.</div>
              </div>
              <div className="p-3 rounded-xl bg-background/50 border border-border">
                <div className="font-semibold mb-1">Required Links:</div>
                <div className="text-muted-foreground">
                  • <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Terms of Use (Apple EULA)</a>
                </div>
                <div className="text-muted-foreground">
                  • <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apple-Required Subscription Details */}
        <section className="py-12 border-t-2 border-primary/30">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-4xl">📋</span>
                Complete Subscription Information (Required by Apple App Store)
              </h2>

              <div className="space-y-6">
                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">1. Subscription Title</h3>
                  <p className="text-lg">VibeWatch Pro</p>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">2. Subscription Length</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• <strong>Monthly Plan:</strong> 1 month duration (automatically renews every 30 days)</li>
                    <li>• <strong>Annual Plan:</strong> 12 months duration (automatically renews every year)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">3. Price of Subscription</h3>
                  <div className="space-y-4 text-lg">
                    <div className="p-4 rounded-xl bg-primary/10 border-2 border-primary/30">
                      <p className="font-bold text-primary mb-2">🔥 Founding Member Pro (Limited Time)</p>
                      <p>• <strong>Monthly:</strong> $3.99 USD/month (locked forever)</p>
                      <p>• <strong>Annual:</strong> $34.99 USD/year (locked forever - save 27%)</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available during promotional launch period (mid-December 2025 to mid-January 2026). Pricing locked for life as long as subscription remains active.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                      <p className="font-bold mb-2">Standard Pro</p>
                      <p>• <strong>Monthly:</strong> $8.99 USD/month</p>
                      <p>• <strong>Annual:</strong> $69.99 USD/year (save 35%)</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Available after Founding Member period ends (mid-January 2026 onwards).
                      </p>
                    </div>
                    <p className="text-muted-foreground text-base mt-3">
                      <em>Note: Exact prices are displayed in your local currency within the app before purchase.
                      Prices may vary by region and are subject to applicable taxes and foreign exchange rates.</em>
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">4. Payment & Renewal Terms</h3>
                  <ul className="space-y-2 text-base text-muted-foreground">
                    <li>• Payment will be charged to your Apple ID account at the confirmation of purchase</li>
                    <li>• Subscription automatically renews unless auto-renew is turned off at least 24 hours before the end of the current period</li>
                    <li>• Account will be charged for renewal within 24 hours prior to the end of the current period</li>
                    <li>• You can manage and cancel subscriptions in your account settings on the App Store after purchase</li>
                    <li>• Any unused portion of a free trial period, if offered, will be forfeited when purchasing a subscription</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-background/60 border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">5. Required Legal Links</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-start gap-3">
                      <span className="font-semibold min-w-[140px]">Privacy Policy:</span>
                      <Link href="/privacy" className="text-primary hover:underline">
                        https://vibewatch.com/privacy
                      </Link>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="font-semibold min-w-[140px]">Terms of Use (EULA):</span>
                      <a
                        href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Apple Standard EULA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscriptions */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Subscriptions</div>
          <h2 className="text-3xl font-bold mb-6">Plans, duration, and trials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Subscription options",
                items: [
                  "Founding Member Pro Monthly — $3.99/month (auto-renews monthly). Limited time launch offer. Rate locked forever as long as subscription remains active.",
                  "Founding Member Pro Annual — $34.99/year (equivalent to $2.92/month). Save 27%. Rate locked forever as long as subscription remains active.",
                  "Standard Pro Monthly — $8.99/month (auto-renews monthly). Available after founding member period ends (mid-January 2026).",
                  "Standard Pro Annual — $69.99/year (equivalent to $5.83/month). Save 35%.",
                  "All prices in USD; App Store converts to your local currency automatically.",
                  "Any free trial converts to the selected plan unless canceled at least 24 hours before the trial ends."
                ]
              },
              {
                title: "Billing & renewal",
                items: ["Payment is charged to your Apple ID at confirmation; Apple shows the price again before you buy.", "Subscriptions renew automatically unless you turn off auto-renew at least 24 hours before the current period ends.", "Renewals are billed to your Apple ID. You can manage or cancel in iOS Settings > Apple ID > Subscriptions."]
              },
              {
                title: "Cancellation & refunds",
                items: ["Cancel anytime in iOS Settings; access continues until the current period ends.", "Refunds are handled by Apple according to App Store policies.", "Deleting the app does not cancel your subscription; you must turn off auto-renew in Settings."]
              },
              {
                title: "Founding Member pricing lock",
                items: [
                  "Founding Members who subscribe during the promotional launch period (first month after launch, mid-December 2025 to mid-January 2026) will retain their discounted pricing for the lifetime of their subscription.",
                  "As long as your subscription remains active (including through auto-renewal), your Founding Member rate will never increase.",
                  "If you cancel and resubscribe later, standard pricing will apply.",
                  "Founding Member pricing is subject to availability and may end at any time without notice.",
                  "This pricing guarantee applies only to the subscription tier you initially selected (Monthly or Annual)."
                ]
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

        {/* Use of service */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Use of service</div>
          <h2 className="text-3xl font-bold mb-6">Rules, responsibilities, and limitations</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Acceptable use",
                items: ["Do not misuse VibeWatch (no abuse, fraud, scraping, or attempts to reverse engineer).", "Community features (comments/reactions) must follow respectful conduct; violations may result in suspension."]
              },
              {
                title: "Content & availability",
                items: ["Clip availability and streaming links depend on partner catalogs and may change.", "Service may be updated or interrupted for maintenance or to comply with platform rules."]
              },
              {
                title: "Your responsibilities",
                items: ["Keep your account credentials secure and let us know about suspicious activity.", "Ensure you have rights to any content you upload (e.g., comments) and that it doesn't infringe others."]
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

        {/* Legal */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Legal</div>
          <h2 className="text-3xl font-bold mb-6">EULA, privacy, and contact</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "EULA",
                content: "VibeWatch uses the Apple Standard EULA. By installing or using the app, you agree to be bound by it.",
                link: { text: "Apple Standard EULA", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/", external: true }
              },
              {
                title: "Privacy",
                content: "Data practices are described in our Privacy Policy, including what we collect, how we use it, and how to request deletion.",
                link: { text: "Privacy Policy", href: "/privacy", external: false }
              },
              {
                title: "Contact",
                items: ["Email startingvibe2025@gmail.com for questions about subscriptions or billing.", "Please include your Apple ID email (do not send passwords) and device/app version for faster help."]
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-5 shadow-lg flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {item.content && (
                  <p className="text-muted-foreground leading-relaxed">
                    {item.content} {item.link && (
                      item.link.external ? (
                        <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{item.link.text}</a>
                      ) : (
                        <Link href={item.link.href} className="text-primary hover:underline">{item.link.text}</Link>
                      )
                    )}
                  </p>
                )}
                {item.items && (
                  <ul className="text-muted-foreground leading-relaxed list-disc pl-5 space-y-2">
                    {item.items.map((text, j) => <li key={j}>{text}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Continue */}
        <section className="py-12">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Continue</div>
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/#download">Download VibeWatch</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/privacy">Read the Privacy Policy</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
