export type Locale = "en" | "it" | "fr" | "es" | "pt";

type Plan = {
  id: string;
  name: string;
  price: string;
  desc: string;
  perks: string[];
  chip?: string;
  primaryCta: string;
  secondaryCta?: string;
  showCurrency?: boolean;
};

type HomeContent = {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    solutionTitle: string;
    solutionSubtitle: string;
    primaryCta: string;
    secondaryCta: string;
    foundingChip: string;
    watchLabel: string;
  };
  whyClips: {
    eyebrow: string;
    title: string;
    metric: string;
    items: { title: string; desc: string }[];
  };
  comparison: {
    title: string;
    subtitle: string;
    beforeTitle: string;
    afterTitle: string;
    beforeItems: string[];
    afterItems: string[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    cards: { title: string; desc: string; alt: string }[];
  };
  clips: {
    eyebrow: string;
    title: string;
    desc: string;
    cards: { title: string; desc: string }[];
  };
  ai: {
    leftTitle: string;
    leftDesc: string;
    promptOne: string;
    aiReplyOne: string;
    aiReplyTwo: string;
    promptChips: string[];
    rightTitle: string;
    rightDesc: string;
    cards: { title: string; genre: string; platform: string }[];
    saveLabel: string;
    watchOnLabel: string;
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { num: string; title: string; desc: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  lovedBy: {
    eyebrow: string;
    quote: string;
    rating: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plans: Plan[];
    appStoreCta: string;
    tryPromptsCta: string;
    legalIntro: string;
    legalLinks: { terms: string; privacy: string; eula: string };
  };
  support: {
    eyebrow: string;
    title: string;
    desc: string;
    cards: {
      title: string;
      desc?: string;
      list?: string[];
    }[];
  };
};

type Translation = {
  languageNames: Record<Locale, string>;
  languagesFlag: Record<Locale, string>;
  header: {
    nav: {
      home: string;
      features: string;
      ai: string;
      how: string;
      support: string;
      pricing: string;
      faq: string;
      terms: string;
      privacy: string;
    };
    download: string;
    downloadNow: string;
    foundingChip: string;
    mobileChip: string;
  };
  stickyCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    tagline: string;
  };
  terms: {
    hero: { eyebrow: string; title: string; desc: string; badges: string[] };
    cards: { title: string; items: string[] }[];
    required: {
      title: string;
      items: { title: string; body: string[] }[];
    };
  };
  privacy: {
    hero: { eyebrow: string; title: string; desc: string; badges: string[] };
    sections: { title: string; body: string[] }[];
    keyPointsTitle: string;
    keyPoints: { text: string; href?: string }[];
    contact: string;
  };
  home: HomeContent;
};

const baseTerms: Translation["terms"] = {
  hero: {
    eyebrow: "Terms of Use & Subscriptions",
    title: "VibeWatch Pro subscriptions and EULA",
    desc: "These terms cover how VibeWatch Pro subscriptions work, billing and renewal rules, and the EULA that governs the app. Please read them before purchasing.",
    badges: ["Last updated: January 2025", "Applies to: VibeWatch iOS app"],
  },
  cards: [
    {
      title: "Subscription options",
      items: [
        "Founding Member Pro Monthly — $3.99/month (auto-renews, limited time, rate locked while active).",
        "Founding Member Pro Annual — $34.99/year (save 27%, rate locked while active).",
        "Standard Pro Monthly — $8.99/month (auto-renews, available after founding period).",
        "Standard Pro Annual — $69.99/year (save 35%).",
        "Prices shown in USD; App Store converts to your local currency.",
        "Trials convert unless canceled 24 hours before period end.",
      ],
    },
    {
      title: "Billing & renewal",
      items: [
        "Charged to your Apple ID at confirmation; Apple shows price before you buy.",
        "Renews automatically unless auto-renew is off 24h before period end.",
        "Manage or cancel in iOS Settings > Apple ID > Subscriptions.",
      ],
    },
    {
      title: "Cancellation & refunds",
      items: [
        "Cancel anytime in iOS Settings; access continues until the current period ends.",
        "Refunds are handled by Apple under App Store policies.",
        "Deleting the app does not cancel; turn off auto-renew in Settings.",
      ],
    },
    {
      title: "Founding Member lock",
      items: [
        "Founding pricing available during launch window; locked while subscription stays active.",
        "Canceling forfeits locked pricing; standard rates apply if you return.",
        "Guarantee applies only to the tier you selected (Monthly or Annual).",
      ],
    },
  ],
  required: {
    title: "Apple-required subscription details",
    items: [
      { title: "Subscription title", body: ["VibeWatch Pro"] },
      { title: "Lengths", body: ["Monthly: 1 month (auto-renew)", "Annual: 12 months (auto-renew)"] },
      {
        title: "Pricing",
        body: [
              "Founding Member Pro: €3,99/mese o €34,99/anno (bloccato se attivo).\n",
              "Standard Pro: €8,99/mese o €69,99/anno.\n",
          "Prices shown in local currency before purchase; may vary by region/tax.",
        ],
      },
      {
        title: "Payment & renewal terms",
        body: [
          "Charged to your Apple ID at purchase confirmation.",
          "Renews unless turned off 24h before period end.",
          "Renewal charged to your Apple ID; manage in App Store settings.",
          "Unused trial time forfeits when purchasing a subscription.",
        ],
      },
      {
        title: "Required links",
        body: ["Privacy Policy: https://vibewatch.com/privacy", "Terms of Use (Apple EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
      },
    ],
  },
};

const basePrivacy: Translation["privacy"] = {
  hero: {
    eyebrow: "Privacy Policy",
    title: "How VibeWatch handles your data",
    desc: "What we collect, why we collect it, and the choices you have. Please review before using VibeWatch.",
    badges: ["Last updated: January 2025", "Applies to: VibeWatch iOS app"],
  },
  sections: [
    {
      title: "Data we collect",
      body: [
        "Account basics: email, device IDs.",
        "Usage: clips viewed, likes/skips, session diagnostics.",
        "Purchases: subscription status from App Store.",
      ],
    },
    {
      title: "Why we collect it",
      body: [
        "Personalize recommendations and improve AI prompts.",
        "Keep your lists and preferences in sync across devices.",
        "Process subscriptions and provide support.",
      ],
    },
    {
      title: "Sharing & retention",
      body: [
        "Vendors for analytics, error monitoring, and payments (e.g., App Store).",
        "We do not sell your personal data.",
        "Data retained while your account remains active or as required by law.",
      ],
    },
    {
      title: "Your choices",
      body: [
        "Request access, correction, or deletion of your data.",
        "Opt out of marketing emails.",
        "Turn off analytics in your device settings where available.",
      ],
    },
    {
      title: "Security",
      body: ["We use encryption in transit, access controls, and regular reviews to protect your data."],
    },
  ],
  keyPointsTitle: "Key Privacy Points",
  keyPoints: [
    { text: "No data selling. We never sell your personal data. Third-party providers only receive what they need to run the service." },
    { text: "You control permissions in-app and in iOS Settings (notifications, analytics, location)." },
    { text: "Request export or deletion anytime via startingvibe2025@gmail.com", href: "mailto:startingvibe2025@gmail.com" },
    { text: "Terms of Use: Apple Standard EULA", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
  ],
  contact: "For privacy questions or requests, email startingvibe2025@gmail.com.",
};
export const translations: Record<Locale, Translation> = {
  en: {
    languageNames: {
      en: "English",
      it: "Italiano",
      fr: "Français",
      es: "Español",
      pt: "Português",
    },
    languagesFlag: {
      en: "🇺🇸",
      it: "🇮🇹",
      fr: "🇫🇷",
      es: "🇪🇸",
      pt: "🇵🇹",
    },
    header: {
      nav: {
        home: "Home",
        features: "Features",
        ai: "Vibe AI",
        how: "How it Works",
        support: "Support",
        pricing: "Pricing",
        faq: "FAQ",
        terms: "Terms of Use",
        privacy: "Privacy",
      },
      download: "Download App",
      downloadNow: "Download now",
      foundingChip: "Founding Member $3.99/mo",
      mobileChip: "Founding $3.99",
    },
    stickyCta: {
      title: "Start discovering today",
      subtitle: "15 free clips daily",
      cta: "Download",
    },
    footer: {
      tagline: "VibeWatch — Clip-first discovery for movies & TV. Crafted with the CineStream design language.",
    },
    terms: baseTerms,
    privacy: basePrivacy,
    home: {
      hero: {
        badge: "AI movie & TV picks, powered by clips",
        title: "Watch a clip, get the right pick in seconds.",
        subtitle:
          "Swipe cinematic clips from trending films and series. Ask Vibe AI to match your vibe—go from scrolling to streaming in under 2 minutes.",
        solutionTitle: "The VibeWatch Solution",
        solutionSubtitle: "From Endless Search to Perfect Match. Discover Films That Truly Match Your Mood, Instantly.",
        primaryCta: "Download free",
        secondaryCta: "See how it works",
        foundingChip: "Founding Member $3.99/mo — lock it in",
        watchLabel: "See VibeWatch in action",
      },
      whyClips: {
        eyebrow: "Why clips first?",
        title: "Feel the vibe before you press play",
        metric: "Avg. under 2 minutes to a solid pick",
        items: [
          { title: "Spoiler-safe clips", desc: "20–30 second scenes that show tone and pacing without revealing twists." },
          { title: "Mood-matched AI", desc: "Describe your vibe—AI curates a tight set so you stop scrolling and start watching." },
          { title: "Decision clarity", desc: "Streaming links, runtime, and social signals right where you need them." },
        ],
      },
      comparison: {
        title: "Stop endless scrolling. Start actually watching.",
        subtitle: "Streaming apps make you hunt for hours. VibeWatch gets you queued up in seconds.",
        beforeTitle: "Without VibeWatch",
        afterTitle: "With VibeWatch",
        beforeItems: [
          "Scroll through Netflix for 30 minutes",
          "Read dozens of generic descriptions",
          "Watch boring trailers that spoil the plot",
          "Still can't decide what to watch",
          "End up rewatching The Office again",
        ],
        afterItems: [
          "Open app → instant clips start playing",
          "Swipe through 30-second scenes",
          "Feel the vibe without spoilers",
          "Ask AI: 'Need a mind-bending thriller'",
          "Watching your new favorite in 2 minutes",
        ],
      },
      showcase: {
        eyebrow: "See it in action",
        title: "Everything you need to discover your next watch",
        cards: [
          { title: "Instant clips", desc: "30-second scenes that give you the vibe fast. No spoilers, just energy.", alt: "Swipeable clip feed" },
          { title: "Smart discovery", desc: "AI-powered feed learns your taste. Personalized clips from cult faves to trending hits.", alt: "Personalized feed based on your mood" },
          { title: "Vibe AI assistant", desc: "Describe your mood in natural language. Get instant recs with preview clips.", alt: "Vibe AI chat interface" },
          { title: "Smart lists", desc: "Save favorites, organize by mood, sync across all devices. Your perfect queue awaits.", alt: "Create custom watchlists" },
          { title: "Full details", desc: "Ratings, cast, streaming platforms, and trailers so you know where to watch.", alt: "Detailed movie information" },
          { title: "What's trending", desc: "See what everyone’s watching right now. Never miss the next big thing.", alt: "Search and trending movies" },
        ],
      },
      clips: {
        eyebrow: "Built for fans",
        title: "Clips that make deciding what to watch effortless",
        desc: "We prefetch a personalized mix of trending, acclaimed, and classic titles, score them against your vibe, and deliver a swipeable feed of clips so you feel a story before you commit to a full watch.",
        cards: [
          { title: "Lightning start", desc: "2 handpicked clips appear in seconds, so you're watching immediately—not waiting for previews or ads." },
          { title: "Diverse feed", desc: "Movies + TV balanced with genre diversity and classics injected to keep your queue fresh." },
          { title: "Engagement aware", desc: "Likes, watch time, and lists tune what you see next. Skip feels? Vibe AI adapts the feed live." },
        ],
      },
      ai: {
        leftTitle: "Ask Vibe AI to find your next watch",
        leftDesc:
          "Describe the vibe (\"cozy heists\", \"optimistic sci-fi\", \"series under 30 min\") and Vibe AI drops a tight list with instant clips. Save to lists or open where it’s streaming.",
        promptOne: "Need a mind-bending mystery under 2 hours.",
        aiReplyOne:
          "I've got 3: Fracture (1h 53) with a tense courtroom twist, Coherence (1h 29) for sci-fi suspense, and The Invitation (1h 40) with slow-burn dread.",
        aiReplyTwo: "Want trailers or quick clips from each?",
        promptChips: ["Prompt: \"Feel-good sports series\"", "Prompt: \"Slow-burn thrillers tonight\""],
        rightTitle: "Ready to watch on your time",
        rightDesc:
          "Save any clip to custom lists, see where it's streaming, and sync across devices. Free: 15 clips daily. Pro: Unlimited clips & AI starting at $3.99/mo (Founding Member rate - limited time!)",
        cards: [
          { title: "Neon Alley", genre: "Cyberpunk", platform: "Prime" },
          { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
        ],
        saveLabel: "Save",
        watchOnLabel: "Watch on",
      },
      how: {
        eyebrow: "How it works",
        title: "Three steps to your next favorite",
        steps: [
          { num: "01", title: "Open Clips", desc: "Tap play and swipe a preloaded stack of today’s best scenes. Instant dopamine, zero decision fatigue." },
          { num: "02", title: "Ask Vibe AI", desc: "Describe your vibe or limits. AI curates titles, serves clips, and adapts recs in real time." },
          { num: "03", title: "Save & stream", desc: "Add favorites to lists, share with friends, and jump to where it’s streaming. Pro from $3.99/mo (Founding Member rate - limited time!)." },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about VibeWatch",
        items: [
          {
            q: "Is VibeWatch really free?",
            a: "Yes! Free users get 15 clips daily and basic Vibe AI recommendations. Upgrade to Founding Member Pro ($3.99/mo or $34.99/year) or Standard Pro ($8.99/mo or $69.99/year) for unlimited clips, advanced AI, and ad-free experience.",
          },
          {
            q: "Do I need subscriptions to watch?",
            a: "VibeWatch shows you clips and tells you where to stream. You'll need subscriptions to Netflix, Prime, etc. to watch full content, but discovery is free.",
          },
          {
            q: "How does Vibe AI work?",
            a: "Vibe AI learns from your interactions—likes, skips, watch time—and matches your mood to our database of titles. Describe what you want in natural language and get instant results.",
          },
          {
            q: "Are the clips spoiler-free?",
            a: "Absolutely. We carefully select 20-30 second scenes that capture the vibe without revealing plot twists or endings.",
          },
          {
            q: "Can I use it on multiple devices?",
            a: "Yes! Your lists, preferences, and watch history sync across iPhone, iPad, and all devices where you're signed in.",
          },
          {
            q: "What's included in Pro?",
            a: "Pro unlocks unlimited daily clips, unlimited AI requests, priority support, early access to new features, and an ad-free experience. Founding Member: $3.99/mo or $34.99/year. Standard: $8.99/mo or $69.99/year.",
          },
          {
            q: "What's the Founding Member plan?",
            a: "Founding Members get lifetime access to Pro features at launch pricing—$3.99/mo or $34.99/year—locked in forever, even when prices increase to standard rates. Available for the first month after launch (mid-Dec to mid-Jan). Lock in your rate now!",
          },
        ],
      },
      lovedBy: {
        eyebrow: "Loved by streamers",
        quote: "“VibeWatch gets me watching in minutes, not scrolling for hours.”",
        rating: "Rated 4.8/5 by early members",
      },
      cta: {
        eyebrow: "Get VibeWatch",
        title: "Turn scrolling into your next watch night.",
        subtitle:
          "Download now to browse 15 free clips a day, unlock Vibe AI, and find what fits your vibe. Your lists stay in sync—everywhere you watch.",
        plans: [
          {
            id: "free",
            name: "Free",
            price: "$0",
            desc: "15 clips daily + basic Vibe AI",
            perks: ["Sync lists across devices", "Spoiler-safe clips", "Where to watch links"],
            primaryCta: "Start free",
          },
          {
            id: "download",
            name: "Download now",
            price: "",
            desc: "Get VibeWatch on the App Store in one tap.",
            perks: ["Instant install on iOS", "Sync lists & preferences", "Includes free tier + Pro upgrade"],
            chip: "Best value",
            primaryCta: "Download the app",
            showCurrency: false,
          },
        ],
        appStoreCta: "Download on the App Store",
        tryPromptsCta: "Try Vibe AI prompts",
        legalIntro: "VibeWatch Pro subscription information:",
        legalLinks: {
          terms: "Terms of Use & Subscription Details",
          privacy: "Privacy Policy",
          eula: "Apple EULA",
        },
      },
      support: {
        eyebrow: "Support",
        title: "Need help with VibeWatch?",
        desc: "We're here if you run into an issue, have a billing question, or want to share feedback about the clip feed or Vibe AI.",
        cards: [
          {
            title: "Contact support",
            desc: "Email us at startingvibe2025@gmail.com. Include your device, app version, and a short description so we can help fast.",
          },
          {
            title: "What we can help with",
            list: [
              "Account access, sign-in, or verification problems",
              "Billing and subscriptions (RevenueCat / App Store)",
              "Reporting bugs, broken clips, or content concerns",
              "Data export or deletion requests",
            ],
          },
          {
            title: "Response time",
            desc: "We usually reply within one business day. Urgent playback or paywall issues are prioritized.",
          },
          {
            title: "Legal & policies",
            desc: "Review the details that keep your subscription and data transparent.",
            list: [
              "Terms of Use / EULA — subscription terms, billing, and renewal rules.",
              "Privacy Policy — what we collect, why, and how to request deletion.",
            ],
          },
        ],
      },
    },
  },
  it: {
    languageNames: {
      en: "English",
      it: "Italiano",
      fr: "Français",
      es: "Español",
      pt: "Português",
    },
    languagesFlag: {
      en: "🇺🇸",
      it: "🇮🇹",
      fr: "🇫🇷",
      es: "🇪🇸",
      pt: "🇵🇹",
    },
    header: {
      nav: {
        home: "Home",
        features: "Funzionalità",
        ai: "Vibe AI",
        how: "Come funziona",
        support: "Supporto",
        pricing: "Prezzi",
        faq: "FAQ",
        terms: "Termini d'uso",
        privacy: "Privacy",
      },
      download: "Scarica l\'app",
      downloadNow: "Scarica ora",
      foundingChip: "Founding Member 3,99$/mese",
      mobileChip: "Founding 3,99$",
    },
    stickyCta: {
      title: "Inizia a scoprire oggi",
      subtitle: "15 clip gratis al giorno",
      cta: "Scarica",
    },
    footer: {
      tagline: "VibeWatch — Scoperta tramite clip per film e TV. Creato con il linguaggio di design CineStream.",
    },
    terms: {
      hero: {
        eyebrow: "Termini d'uso e abbonamenti",
        title: "Abbonamenti VibeWatch Pro e EULA",
        desc: "Questi termini spiegano come funzionano gli abbonamenti VibeWatch Pro, le regole di fatturazione e rinnovo e l'EULA che governa l'app. Leggili prima di acquistare.",
        badges: ["Ultimo aggiornamento: Gennaio 2025", "Applicabile a: app iOS VibeWatch"],
      },
      cards: [
        {
          title: "Opzioni di abbonamento",
          items: [
            "Founding Member Pro Mensile — 3,99€/mese (rinnovo automatico, tempo limitato, prezzo bloccato se attivo).",
            "Founding Member Pro Annuale — 34,99€/anno (risparmi il 27%, prezzo bloccato se attivo).",
            "Standard Pro Mensile — 8,99€/mese (rinnovo automatico, disponibile dopo il periodo founding).",
            "Standard Pro Annuale — 69,99€/anno (risparmi il 35%).",
            "Prezzi mostrati in valuta locale; l'App Store converte nella tua valuta.",
            "Le prove si convertono a meno che non vengano annullate 24 ore prima della fine del periodo.",
          ],
        },
        {
          title: "Fatturazione e rinnovo",
          items: [
            "Addebitato sul tuo ID Apple alla conferma; Apple mostra il prezzo prima dell'acquisto.",
            "Si rinnova automaticamente a meno che il rinnovo automatico non venga disattivato 24 ore prima della fine del periodo.",
            "Gestisci o annulla in Impostazioni iOS > ID Apple > Abbonamenti.",
          ],
        },
        {
          title: "Cancellazione e rimborsi",
          items: [
            "Annulla in qualsiasi momento nelle Impostazioni iOS; l'accesso continua fino alla fine del periodo corrente.",
            "I rimborsi sono gestiti da Apple secondo le politiche dell'App Store.",
            "L'eliminazione dell'app non annulla l'abbonamento; disattiva il rinnovo automatico nelle Impostazioni.",
          ],
        },
        {
          title: "Blocco Prezzo Founding",
          items: [
            "Prezzo Founding disponibile durante il periodo di lancio; bloccato finché l'abbonamento rimane attivo.",
            "La cancellazione fa perdere il prezzo bloccato; si applicheranno le tariffe standard se ritorni.",
            "La garanzia si applica solo al livello selezionato (Mensile o Annuale)."
          ],
        },
      ],
      required: {
        title: "Dettagli abbonamento richiesti da Apple",
        items: [
          { title: "Titolo abbonamento", body: ["VibeWatch Pro"] },
          { title: "Durata", body: ["Mensile: 1 mese (rinnovo automatico)", "Annuale: 12 mesi (rinnovo automatico)"] },
          {
            title: "Prezzi",
            body: [
              "Founding Member Pro: 3,99€/mese o 34,99€/anno (bloccato se attivo).\n",
              "Standard Pro: 8,99€/mese o 69,99€/anno.\n",
              "Prezzi mostrati in valuta locale prima dell'acquisto; possono variare per regione/tasse.",
            ],
          },
          {
            title: "Termini di pagamento e rinnovo",
            body: [
              "Addebitato sul tuo ID Apple alla conferma dell'acquisto.",
              "Si rinnova a meno che non venga disattivato 24 ore prima della fine del periodo.",
              "Rinnovo addebitato sul tuo ID Apple; gestisci nelle impostazioni dell'App Store.",
              "Il periodo di prova inutilizzato viene perso all'acquisto di un abbonamento.",
            ],
          },
          {
            title: "Link richiesti",
            body: ["Privacy Policy: https://vibewatch.com/privacy", "Termini d'uso (Apple EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"]
          },
        ],
      },
    },
    privacy: {
      hero: {
        eyebrow: "Privacy Policy",
        title: "Come VibeWatch gestisce i tuoi dati",
        desc: "Cosa raccogliamo, perché lo raccogliamo e le tue scelte. Leggi prima di usare VibeWatch.",
        badges: ["Ultimo aggiornamento: Gennaio 2025", "Applicabile a: app iOS VibeWatch"],
      },
      sections: [
        {
          title: "Dati che raccogliamo",
          body: [
            "Dati account: email, ID dispositivo.",
            "Utilizzo: clip visualizzate, mi piace/salti, diagnostica sessione.",
            "Acquisti: stato abbonamento da App Store.",
          ],
        },
        {
          title: "Perché li raccogliamo",
          body: [
            "Personalizzare raccomandazioni e migliorare i prompt AI.",
            "Mantenere liste e preferenze sincronizzate tra dispositivi.",
            "Elaborare abbonamenti e fornire supporto.",
          ],
        },
        {
          title: "Condivisione e conservazione",
          body: [
            "Fornitori per analisi, monitoraggio errori e pagamenti (es. App Store).",
            "Non vendiamo i tuoi dati personali.",
            "Dati conservati finché l'account rimane attivo o come richiesto dalla legge.",
          ],
        },
        {
          title: "Le tue scelte",
          body: [
            "Richiedi accesso, correzione o cancellazione dei tuoi dati.",
            "Disiscriviti dalle email di marketing.",
            "Disattiva le analisi nelle impostazioni del dispositivo se disponibile.",
          ],
        },
        {
          title: "Sicurezza",
          body: ["Usiamo crittografia in transito, controlli di accesso e revisioni regolari per proteggere i tuoi dati."],
        },
      ],
      keyPointsTitle: "Punti chiave sulla privacy",
      keyPoints: [
        { text: "Nessuna vendita di dati. Non vendiamo mai i tuoi dati personali. I fornitori di terze parti ricevono solo ciò che serve per il servizio." },
        { text: "Tu controlli le autorizzazioni nell'app e nelle Impostazioni iOS (notifiche, analisi, posizione)." },
        { text: "Richiedi esportazione o cancellazione in qualsiasi momento via startingvibe2025@gmail.com", href: "mailto:startingvibe2025@gmail.com" },
        { text: "Termini d'uso: EULA Standard Apple", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      ],
      contact: "Per domande sulla privacy o richieste, scrivi a startingvibe2025@gmail.com.",
    },
    home: {
      hero: {
        badge: "Consigli film & serie con AI, basati su clip",
        title: "Guarda una clip, trova il titolo giusto in pochi secondi.",
        subtitle:
          "Scorri clip cinematografiche da film e serie di tendenza. Chiedi a Vibe AI di abbinare il tuo mood: dallo scroll allo streaming in meno di 2 minuti.",
        solutionTitle: "La Soluzione VibeWatch",
        solutionSubtitle: "Dalla ricerca infinita al match perfetto. Scopri film che rispecchiano davvero il tuo mood, all'istante.",
        primaryCta: "Scarica gratis",
        secondaryCta: "Scopri come funziona",
        foundingChip: "Founding Member 3,99$/mese — blocca ora",
        watchLabel: "Guarda VibeWatch in azione",
      },
      whyClips: {
        eyebrow: "Perché partire dalle clip?",
        title: "Senti il mood prima di premere play",
        metric: "In media meno di 2 minuti per scegliere",
        items: [
          { title: "Clip senza spoiler", desc: "Scene da 20–30 secondi che mostrano tono e ritmo senza svelare colpi di scena." },
          { title: "AI che segue il tuo mood", desc: "Descrivi il tuo mood: l'AI cura una selezione corta così smetti di scrollare e inizi a guardare." },
          { title: "Decisioni chiare", desc: "Link streaming, durata e segnali social proprio dove ti servono." },
        ],
      },
      comparison: {
        title: "Basta scroll infinito. Inizia davvero a guardare.",
        subtitle: "Le app di streaming ti fanno cercare per ore. VibeWatch ti mette in play in pochi secondi.",
        beforeTitle: "Senza VibeWatch",
        afterTitle: "Con VibeWatch",
        beforeItems: [
          "30 minuti a scorrere Netflix",
          "Decine di descrizioni generiche",
          "Trailer noiosi che spoilerano",
          "Ancora indeciso su cosa guardare",
          "Finisci per rivedere The Office",
        ],
        afterItems: [
          "Apri l'app → clip istantanee",
          "Swipe tra scene da 30 secondi",
          "Percepisci il mood senza spoiler",
          "Chiedi all'AI: \"Voglio un thriller mind‑bending\"",
          "Stai guardando qualcosa di nuovo in 2 minuti",
        ],
      },
      showcase: {
        eyebrow: "Guardala in azione",
        title: "Tutto ciò che ti serve per scoprire cosa guardare",
        cards: [
          { title: "Clip istantanee", desc: "Scene da 30 secondi che danno il mood al volo. Zero spoiler, solo vibe.", alt: "Feed di clip da scorrere" },
          { title: "Scoperta smart", desc: "Il feed AI impara i tuoi gusti. Clip personalizzate, dai cult ai trend.", alt: "Feed personalizzato in base al mood" },
          { title: "Assistant Vibe AI", desc: "Descrivi il mood. Consigli immediati con clip di anteprima.", alt: "Interfaccia chat Vibe AI" },
          { title: "Liste smart", desc: "Salva preferiti, organizza per mood, sincronizza su tutti i dispositivi.", alt: "Crea watchlist personalizzate" },
          { title: "Dettagli completi", desc: "Valutazioni, cast, piattaforme e trailer per sapere dove guardare.", alt: "Informazioni dettagliate sul film" },
          { title: "Cosa è di tendenza", desc: "Vedi cosa tutti stanno guardando ora. Non perdere il prossimo hype.", alt: "Ricerca e titoli di tendenza" },
        ],
      },
      clips: {
        eyebrow: "Pensato per i fan",
        title: "Clip che rendono facile decidere cosa guardare",
        desc: "Pre-carichiamo un mix personalizzato di titoli di tendenza, cult e classici, li valutiamo sul tuo mood e serviamo un feed di clip da sfiorare così senti la storia prima di iniziare.",
        cards: [
          { title: "Partenza lampo", desc: "2 clip selezionate compaiono in pochi secondi: stai già guardando, non aspettando spot o trailer." },
          { title: "Feed vario", desc: "Film + serie bilanciati con generi diversi e classici per tenere fresca la tua lista." },
          { title: "Adattivo all'engagement", desc: "Like, tempo di visione e liste regolano cosa vedi dopo. Salti? Vibe AI adatta il feed in tempo reale." },
        ],
      },
      ai: {
        leftTitle: "Chiedi a Vibe AI il prossimo titolo",
        leftDesc:
          "Descrivi il mood (\"heist cozy\", \"sci‑fi ottimista\", \"serie sotto i 30 min\") e Vibe AI restituisce una selezione breve con clip che puoi vedere subito. Salva nelle liste o apri sulla tua piattaforma.",
        promptOne: "Serve un mistero mind-bending sotto le 2 ore.",
        aiReplyOne:
          "Ne ho 3: Fracture (1h 53) con un twist in tribunale, Coherence (1h 29) per suspense sci‑fi, e The Invitation (1h 40) per una tensione lenta.",
        aiReplyTwo: "Vuoi trailer o clip rapide per ciascuno?",
        promptChips: ["Prompt: \"Serie sportive feel-good\"", "Prompt: \"Thrillers de ritmo lento hoje\""],
        rightTitle: "Pronto a guardare quando vuoi",
        rightDesc:
          "Salva qualsiasi clipe em listas, veja onde está disponível e sincronize dispositivos. Grátis: 15 clipes diários. Pro: Clipes e IA ilimitados a partir de 3,99$/mese (tariffa Founding Member - tempo limitato!)",
        cards: [
          { title: "Vicolo Neon", genre: "Cyberpunk", platform: "Prime" },
          { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
        ],
        saveLabel: "Salva",
        watchOnLabel: "Guarda su",
      },
      how: {
        eyebrow: "Come funziona",
        title: "Tre passi per il tuo nuovo preferito",
        steps: [
          { num: "01", title: "Apri la tab Clips", desc: "Premi play e scorri una selezione pre-caricata delle migliori scene del giorno. Dopamina istantanea, zero indecisione." },
          { num: "02", title: "Chiedi a Vibe AI", desc: "Descrivi mood o vincoli. L'AI cura i titoli, mostra clip e aggiorna le raccomandazioni in tempo reale." },
          { num: "03", title: "Salva e guarda", desc: "Aggiungi ai preferiti, condividi e apri dove è in streaming. Passa a Pro da 3,99$/mese (tariffa Founding Member - tempo limitato!)." },
        ],
      },
      faq: {
        title: "Domande frequenti",
        subtitle: "Tutto ciò che devi sapere su VibeWatch",
        items: [
          {
            q: "VibeWatch è davvero gratis?",
            a: "Sì! Gli utenti Free hanno 15 clip al giorno e Vibe AI base. Passa a Founding Member Pro (3,99$/mese o 34,99$/anno) o Standard Pro (8,99$/mese o 69,99$/anno) per clip e AI illimitati e nessuna pubblicità.",
          },
          {
            q: "Servono abbonamenti per guardare?",
            a: "VibeWatch ti mostra clip e dove guardare. Per il contenuto completo servono abbonamenti a Netflix, Prime, ecc., ma la scoperta è gratis.",
          },
          {
            q: "Come funziona Vibe AI?",
            a: "Vibe AI impara dalle tue interazioni—like, skip, tempo di visione—e abbina il tuo mood al nostro catalogo. Descrivi cosa vuoi in linguaggio naturale e ottieni risultati immediati.",
          },
          {
            q: "Le clip sono senza spoiler?",
            a: "Assolutamente. Selezioniamo scene da 20-30 secondi che catturano il vibe senza rivelare colpi di scena.",
          },
          {
            q: "Posso usarla su più dispositivi?",
            a: "Sì! Liste, preferenze e cronologia si sincronizzano su iPhone, iPad e tutti i dispositivi su cui accedi.",
          },
          {
            q: "Cosa include Pro?",
            a: "Pro sblocca clip giornaliere illimitate, richieste AI illimitate, supporto prioritario, accesso anticipato alle novità e nessuna pubblicità. Founding Member: 3,99$/mese o 34,99$/anno. Standard: 8,99$/mese o 69,99$/anno.",
          },
          {
            q: "Cos'è il piano Founding Member?",
            a: "I Founding Member ottengono accesso a vita alle funzioni Pro a prezzo di lancio—3,99$/mese o 34,99$/anno—bloccato per sempre anche se il prezzo aumenta. Disponibile nel primo mese dal lancio (metà dic - metà gen). Blocca subito la tariffa!",
          },
        ],
      },
      lovedBy: {
        eyebrow: "Amato dagli streamer",
        quote: "“VibeWatch mi fa iniziare in minuti, non dopo ore di scroll.”",
        rating: "Valutato 4,8/5 dai primi membri",
      },
      cta: {
        eyebrow: "Scarica VibeWatch",
        title: "Trasforma lo scroll nella tua prossima serata cinema.",
        subtitle:
          "Scarica ora per 15 clip gratuite al giorno, sbloccare Vibe AI e trovare ciò che si adatta al tuo mood. Le tue liste restano sincronizzate ovunque guardi.",
        plans: [
          {
            id: "free",
            name: "Free",
            price: "€0",
            desc: "15 clip al giorno + Vibe AI base",
            perks: ["Sincronizza liste tra dispositivi", "Clip senza spoiler", "Link su dove guardare"],
            primaryCta: "Inizia gratis",
          },
          {
            id: "download",
            name: "Scarica ora",
            price: "",
            desc: "Ottieni VibeWatch sull'App Store con un tap.",
            perks: ["Installazione immediata su iOS", "Sincronizza liste e preferenze", "Include piano gratuito + upgrade Pro"],
            chip: "Consigliato",
            primaryCta: "Scarica l'app",
            showCurrency: false,
          },
        ],
        appStoreCta: "Scarica su App Store",
        tryPromptsCta: "Prova i prompt Vibe AI",
        legalIntro: "Informazioni sull'abbonamento VibeWatch Pro:",
        legalLinks: {
          terms: "Termini d'uso e dettagli abbonamento",
          privacy: "Privacy Policy",
          eula: "EULA Apple",
        },
      },
      support: {
        eyebrow: "Supporto",
        title: "Serve aiuto con VibeWatch?",
        desc: "Siamo qui se incontri problemi, hai domande di fatturazione o vuoi inviare feedback sul feed di clip o Vibe AI.",
        cards: [
          {
            title: "Contatta il supporto",
            desc: "Scrivici a startingvibe2025@gmail.com. Inserisci dispositivo, versione app e una breve descrizione per aiutarti velocemente.",
          },
          {
            title: "Possiamo aiutare con",
            list: [
              "Accesso account, login o verifica",
              "Fatturazione e abbonamenti (RevenueCat / App Store)",
              "Segnalazione bug, clip difettose o contenuti",
              "Richieste di esportazione o cancellazione dati",
            ],
          },
          {
            title: "Tempi di risposta",
            desc: "Di solito rispondiamo entro un giorno lavorativo. I problemi urgenti di riproduzione o paywall sono prioritari.",
          },
          {
            title: "Legale e policy",
            desc: "Rivedi i dettagli che tengono trasparenti abbonamento e dati.",
            list: [
              "Termini d'uso / EULA — termini di abbonamento, fatturazione e rinnovo.",
              "Privacy Policy — cosa raccogliamo, perché e come richiedere la cancellazione.",
            ],
          },
        ],
      },
    },
  },
  fr: {
    languageNames: {
      en: "English",
      it: "Italiano",
      fr: "Français",
      es: "Español",
      pt: "Português",
    },
    languagesFlag: {
      en: "🇺🇸",
      it: "🇮🇹",
      fr: "🇫🇷",
      es: "🇪🇸",
      pt: "🇵🇹",
    },
    header: {
      nav: {
        home: "Accueil",
        features: "Fonctionnalités",
        ai: "Vibe AI",
        how: "Comment ça marche",
        support: "Support",
        pricing: "Tarifs",
        faq: "FAQ",
        terms: "Conditions d\'utilisation",
        privacy: "Confidentialité",
      },
      download: "Télécharger l\'app",
      downloadNow: "Télécharger maintenant",
      foundingChip: "Founding Member 3,99$/mois",
      mobileChip: "Founding 3,99$",
    },
    stickyCta: {
      title: "Commence à découvrir dès aujourd\'hui",
      subtitle: "15 clips gratuits par jour",
      cta: "Télécharger",
    },
    footer: {
      tagline: "VibeWatch — Découverte par clips pour films et séries. Conçu avec le langage design CineStream.",
    },
    terms: {
      hero: {
        eyebrow: "Conditions d\'utilisation et abonnements",
        title: "Abonnements VibeWatch Pro et EULA",
        desc: "Comment fonctionnent les abonnements Pro, la facturation/le renouvellement et l’EULA de l’app. À lire avant d’acheter.",
        badges: ["Dernière mise à jour : janvier 2025", "S’applique à : app iOS VibeWatch"],
      },
      cards: [
        {
          title: "Options d\'abonnement",
          items: [
            "Founding Member Pro Mensuel — 3,99$/mois (renouvellement auto, limité, prix bloqué tant qu’actif).",
            "Founding Member Pro Annuel — 34,99$/an (économie 27%, prix bloqué tant qu’actif).",
            "Standard Pro Mensuel — 8,99$/mois (auto-renouvelé après la période founding).",
            "Standard Pro Annuel — 69,99$/an (économie 35%).",
            "Prix affichés en USD; l’App Store convertit dans ta devise.",
            "Les essais se convertissent sauf annulation 24h avant la fin.",
          ],
        },
        {
          title: "Facturation et renouvellement",
          items: [
            "Prélevé sur ton Apple ID à l’achat; Apple affiche le prix avant.",
            "Renouvellement automatique sauf si tu désactives 24h avant la fin de période.",
            "Gérer/annuler dans Réglages iOS > Identifiant Apple > Abonnements.",
          ],
        },
        {
          title: "Annulation et remboursements",
          items: [
            "Annule à tout moment dans les Réglages; accès jusqu’à la fin de période.",
            "Remboursements gérés par Apple selon les règles App Store.",
            "Supprimer l’app ne résilie pas; désactive le renouvellement auto dans les réglages.",
          ],
        },
        {
          title: "Prix Founding bloqué",
          items: [
            "Tarif founding disponible au lancement; bloqué tant que l’abonnement reste actif.",
            "Annuler fait perdre le tarif bloqué; au retour, tarifs standard.",
            "S’applique uniquement au plan choisi (Mensuel ou Annuel).",
          ],
        },
      ],
      required: {
        title: "Détails d\'abonnement requis par Apple",
        items: [
          { title: "Titre de l\'abonnement", body: ["VibeWatch Pro"] },
          { title: "Durées", body: ["Mensuel : 1 mois (auto-renouvelé)", "Annuel : 12 mois (auto-renouvelé)"] },
          {
            title: "Tarifs",
            body: [
              "Founding Member Pro : 3,99$/mois ou 34,99$/an (bloqué si actif).\n",
              "Standard Pro : 8,99$/mois ou 69,99$/an.\n",
              "Prix affichés en devise locale avant achat; peuvent varier selon région/taxes.",
            ],
          },
          {
            title: "Paiement et renouvellement",
            body: [
              "Prélevé sur l’Apple ID à l’achat.",
              "Renouvelle sauf désactivation 24h avant la fin de période.",
              "Renouvellement facturé à l’Apple ID; gère-le dans les réglages App Store.",
              "Toute période d’essai restante est perdue lors de l’achat d’un abonnement.",
            ],
          },
          {
            title: "Liens requis",
            body: [
              "Politique de confidentialité : https://vibewatch.com/privacy",
              "Conditions d\'utilisation (Apple EULA) : https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
            ],
          },
        ],
      },
    },
    privacy: {
      hero: {
        eyebrow: "Politique de confidentialité",
        title: "Comment VibeWatch gère tes données",
        desc: "Ce que nous collectons, pourquoi et tes choix. À lire avant d’utiliser VibeWatch.",
        badges: ["Dernière mise à jour : janvier 2025", "S’applique à : app iOS VibeWatch"],
      },
      sections: [
        {
          title: "Données collectées",
          body: [
            "Base compte : email, IDs d’appareil.",
            "Usage : clips vus, likes/skips, diagnostics de session.",
            "Achats : statut d’abonnement via l’App Store.",
          ],
        },
        {
          title: "Pourquoi",
          body: [
            "Personnaliser les recos et améliorer les prompts AI.",
            "Garder listes/préférences synchronisées entre appareils.",
            "Gérer les abonnements et le support.",
          ],
        },
        {
          title: "Partage et conservation",
          body: [
            "Prestataires pour analytics, erreurs, paiements (ex. App Store).",
            "Nous ne vendons pas tes données.",
            "Données conservées tant que le compte est actif ou requis par la loi.",
          ],
        },
        {
          title: "Tes choix",
          body: [
            "Demander accès, correction ou suppression des données.",
            "Se désabonner des emails marketing.",
            "Désactiver les analytics dans les réglages d’appareil si dispo.",
          ],
        },
        {
          title: "Sécurité",
          body: ["Chiffrement en transit, contrôles d'accès, revues régulières pour protéger les données."],
        },
      ],
      keyPointsTitle: "Points clés de confidentialité",
      keyPoints: [
        { text: "Pas de vente de données. Nous ne vendons jamais tes données personnelles. Les fournisseurs tiers ne reçoivent que ce qui est nécessaire au service." },
        { text: "Tu contrôles les permissions dans l'app et dans les Réglages iOS (notifications, analytics, localisation)." },
        { text: "Demande l'export ou la suppression à tout moment via startingvibe2025@gmail.com", href: "mailto:startingvibe2025@gmail.com" },
        { text: "Conditions d'utilisation : EULA standard Apple", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      ],
      contact: "Pour les questions de confidentialité, écris à startingvibe2025@gmail.com.",
    },
    home: {
      hero: {
        badge: "Reco films & séries par IA, via des clips",
        title: "Regarde un clip, trouve le bon titre en secondes.",
        subtitle:
          "Fais défiler des clips ciné de films et séries tendance. Demande à Vibe AI selon ton mood — du scroll au streaming en moins de 2 minutes.",
        solutionTitle: "La Solution VibeWatch",
        solutionSubtitle: "De la recherche sans fin au match parfait. Découvrez des films qui correspondent vraiment à votre humeur, instantanément.",
        primaryCta: "Télécharger gratuitement",
        secondaryCta: "Voir comment ça marche",
        foundingChip: "Founding Member 3,99$/mois — bloque le prix",
        watchLabel: "Découvre VibeWatch en action",
      },
      whyClips: {
        eyebrow: "Pourquoi commencer par des clips ?",
        title: "Ressens l'ambiance avant de lancer",
        metric: "Moins de 2 minutes en moyenne pour choisir",
        items: [
          { title: "Clips sans spoilers", desc: "Scènes de 20–30 secondes qui montrent le ton et le rythme sans révéler l'intrigue." },
          { title: "IA adaptée à ton mood", desc: "Décris ton mood : l'IA compose une sélection courte pour arrêter le scroll et commencer à regarder." },
          { title: "Choix éclairés", desc: "Liens streaming, durée et signaux sociaux exactement où tu en as besoin." },
        ],
      },
      comparison: {
        title: "Finis le scroll infini. Commence vraiment à regarder.",
        subtitle: "Les apps de streaming te font chercher des heures. VibeWatch te lance en quelques secondes.",
        beforeTitle: "Sans VibeWatch",
        afterTitle: "Avec VibeWatch",
        beforeItems: [
          "30 minutes à faire défiler Netflix",
          "Des dizaines de descriptions génériques",
          "Bandes-annonces ennuyeuses qui spoilent",
          "Toujours indécis sur quoi regarder",
          "Tu finis par revoir The Office",
        ],
        afterItems: [
          "Ouvre l'app → clips instantanés",
          "Swipe dans des scènes de 30 secondes",
          "Ressens l'ambiance sans spoilers",
          'Demande à l\'IA : "Un thriller mind-bending"',
          "En train de regarder un nouveau titre en 2 minutes",
        ],
      },
      showcase: {
        eyebrow: "Voir en action",
        title: "Tout pour trouver ton prochain film ou série",
        cards: [
          { title: "Clips instantanés", desc: "Scènes de 30 secondes qui capturent l'essentiel. Pas de spoiler, juste le vibe.", alt: "Flux de clips à faire défiler" },
          { title: "Découverte intelligente", desc: "Le feed IA apprend tes goûts. Clips personnalisés des classiques aux tendances.", alt: "Flux personnalisé selon ton mood" },
          { title: "Assistant Vibe AI", desc: "Décris ton mood. Recommandations instantanées avec clips d'aperçu.", alt: "Interface de chat Vibe AI" },
          { title: "Listes intelligentes", desc: "Sauvegarde, organise par mood, synchronise sur tous tes appareils.", alt: "Créer des listes de lecture" },
          { title: "Détails complets", desc: "Notes, casting, plateformes, bandes-annonces. Tout pour décider.", alt: "Informations détaillées du film" },
          { title: "Tendances", desc: "Ce que tout le monde regarde maintenant. Ne rate pas le prochain hit.", alt: "Recherche et titres tendances" },
        ],
      },
      clips: {
        eyebrow: "Pour les fans",
        title: "Des clips qui facilitent le choix",
        desc: "Nous préchargeons un mix personnalisé de titres tendance, cultes et classiques, nous les scorons selon ton mood et livrons un flux de clips à swiper pour sentir l'histoire avant de t'engager.",
        cards: [
          { title: "Démarrage éclair", desc: "2 clips triés apparaissent en quelques secondes : tu regardes déjà, sans attendre pubs ou trailers." },
          { title: "Flux varié", desc: "Films + séries équilibrés avec diversité de genres et classiques pour rafraîchir ta liste." },
          { title: "Adapté à l'engagement", desc: "Likes, temps de visionnage et listes ajustent ce que tu vois ensuite. Tu skips ? Vibe AI adapte le flux en direct." },
        ],
      },
      ai: {
        leftTitle: "Demande à Vibe AI ton prochain titre",
        leftDesc:
          'Décris le mood ("casse cozy", "sci‑fi optimiste", "série < 30 min") et Vibe AI renvoie une sélection serrée avec clips immédiats. Enregistre ou ouvre sur ta plateforme.',
        promptOne: "Besoin d'un mystère mind-bending sous 2 heures.",
        aiReplyOne:
          "J'en ai 3 : Fracture (1h53) avec un twist au tribunal, Coherence (1h29) pour du suspense sci‑fi, e The Invitation (1h40) pour une tension lente.",
        aiReplyTwo: "Tu veux des bandes-annonces ou des clips rapides ?",
        promptChips: ['Prompt : "Séries sport feel-good"', 'Prompt : "Thrillers à combustion lente ce soir"'],
        rightTitle: "Prêt à regarder à ton rythme",
        rightDesc:
          "Sauvegarde n'importe quelle clip, vois où c'est disponible, synchronise tes appareils. Gratuit : 15 clips/jour. Pro : Clips et IA illimités dès 3,99$/mois (tarif Founding Member - temps limité !)",
        cards: [
          { title: "Ruelle Néon", genre: "Cyberpunk", platform: "Prime" },
          { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
        ],
        saveLabel: "Enregistrer",
        watchOnLabel: "Regarder sur",
      },
      how: {
        eyebrow: "Comment ça marche",
        title: "Trois étapes vers ton prochain favori",
        steps: [
          { num: "01", title: "Ouvre l'onglet Clips", desc: "Appuie sur play et swipe une pile préchargée des meilleures scènes du jour. Dopamina instantanée, zéro hésitation." },
          { num: "02", title: "Demande à Vibe AI", desc: "Décris mood ou contraintes. L'IA sélectionne les titres, diffuse des clips et ajuste les reco en temps réel." },
          { num: "03", title: "Sauvegarde et regarde", desc: "Ajoute aux listes, partage, ouvre où c'est en streaming. Passe en Pro dès 3,99$/mois (tarif Founding Member - temps limité !)." },
        ],
      },
      faq: {
        title: "FAQ",
        subtitle: "Tout ce qu'il faut savoir sur VibeWatch",
        items: [
          {
            q: "VibeWatch est vraiment gratuit ?",
            a: "Oui ! Les utilisateurs Free ont 15 clips/jour et Vibe AI basique. Passe en Founding Member Pro (3,99$/mois ou 34,99$/an) ou Standard Pro (8,99$/mois ou 69,99$/an) pour clips illimités, IA avancée et sans pub.",
          },
          {
            q: "Faut-il des abonnements pour regarder ?",
            a: "VibeWatch montre des clips et où regarder. Il faut des abonnements Netflix, Prime, etc. pour le contenu complet, mais la découverte est gratuite.",
          },
          {
            q: "Comment fonctionne Vibe AI ?",
            a: "Vibe AI apprend de tes interactions—likes, skips, temps de visionnage—et aligne ton mood sur notre base de titres. Décris ce que tu veux en langage naturel et obtiens des résultats immédiats.",
          },
          {
            q: "Les clips sont-ils sans spoiler ?",
            a: "Absolument. Nous sélectionnons des scènes de 20-30 secondes qui capturent le vibe sans révéler la fin.",
          },
          {
            q: "Puis-je l'utiliser sur plusieurs appareils ?",
            a: "Oui ! Tes listes, préférences et historique se synchronisent sur iPhone, iPad et tous les appareils connectés.",
          },
          {
            q: "Que comprend Pro ?",
            a: "Pro débloque clips illimités, requêtes IA illimitées, support prioritaire, accès anticipé aux nouveautés et expérience sans pub. Founding Member : 3,99$/mois ou 34,99$/an. Standard : 8,99$/mois ou 69,99$/an.",
          },
          {
            q: "Qu'est-ce que le plan Founding Member ?",
            a: "Les Founding Members gardent l'accès à vie aux fonctionnalités Pro au tarif de lancement—3,99$/mois ou 34,99$/an—bloqué à vie même si le prix augmente. Disponible le premier mois après lancement (mi-déc à mi-janv). Bloque ton tarif maintenant !",
          },
        ],
      },
      lovedBy: {
        eyebrow: "Adoré des streamers",
        quote: "“VibeWatch me lance en minutes, pas après des heures de scroll.”",
        rating: "Note de 4,8/5 par les premiers membres",
      },
      cta: {
        eyebrow: "Télécharge VibeWatch",
        title: "Transforme le scroll en soirée visionnage.",
        subtitle:
          "Télécharge maintenant pour 15 clips gratuits/jour, débloquer Vibe AI et trouver ce qui correspond à ton mood. Tes listes restent synchronisées partout.",
        plans: [
          {
            id: "free",
            name: "Free",
            price: "0€",
            desc: "15 clips par jour + Vibe AI basique",
            perks: ["Synchronisation des listes", "Clips sans spoiler", "Liens vers les plateformes"],
            primaryCta: "Commencer gratuitement",
          },
          {
            id: "download",
            name: "Télécharger maintenant",
            price: "",
            desc: "Installe VibeWatch sur l’App Store en un tap.",
            perks: ["Installation immédiate sur iOS", "Sync listes et préférences", "Inclut le plan gratuit + upgrade Pro"],
            chip: "Recommandé",
            primaryCta: "Télécharger l’app",
            showCurrency: false,
          },
        ],
        appStoreCta: "Télécharger sur l'App Store",
        tryPromptsCta: "Essayer les prompts Vibe AI",
        legalIntro: "Infos sur l'abonnement VibeWatch Pro :",
        legalLinks: {
          terms: "Conditions d'utilisation et abonnement",
          privacy: "Politique de confidentialité",
          eula: "EULA Apple",
        },
      },
      support: {
        eyebrow: "Support",
        title: "Besoin d'aide avec VibeWatch ?",
        desc: "Nous sommes là si tu rencontres un problème, une question de facturation ou des retours sur le feed ou Vibe AI.",
        cards: [
          {
            title: "Contacter le support",
            desc: "Écris-nous à startingvibe2025@gmail.com. Indique appareil, version de l'app et une courte description pour une aide rapide.",
          },
          {
            title: "Ce que nous couvrons",
            list: [
              "Accès compte, connexion ou vérification",
              "Facturation et abonnements (RevenueCat / App Store)",
              "Signalement de bugs, clips cassés ou soucis de contenu",
              "Demandes d'export ou suppression de données",
            ],
          },
          {
            title: "Délai de réponse",
            desc: "Nous répondons généralement sous un jour ouvré. Les soucis urgents de lecture ou paywall sont prioritaires.",
          },
          {
            title: "Légal & politiques",
            desc: "Consulte les détails qui gardent ton abonnement et tes données transparents.",
            list: [
              "Conditions d'utilisation / EULA — conditions d'abonnement, facturation, renouvellement.",
              "Politique de confidentialité — ce que nous collectons, pourquoi, et comment demander la suppression.",
            ],
          },
        ],
      },
    },
  },
  es: {
    languageNames: {
      en: "English",
      it: "Italiano",
      fr: "Français",
      es: "Español",
      pt: "Português",
    },
    languagesFlag: {
      en: "🇺🇸",
      it: "🇮🇹",
      fr: "🇫🇷",
      es: "🇪🇸",
      pt: "🇵🇹",
    },
    header: {
      nav: {
        home: "Inicio",
        features: "Funciones",
        ai: "Vibe AI",
        how: "Cómo funciona",
        support: "Soporte",
        pricing: "Precios",
        faq: "FAQ",
        terms: "Términos de uso",
        privacy: "Privacidad",
      },
      download: "Descargar app",
      downloadNow: "Descargar ahora",
      foundingChip: "Founding Member 3,99$/mes",
      mobileChip: "Founding 3,99$",
    },
    stickyCta: {
      title: "Empieza a descubrir hoy",
      subtitle: "15 clips gratis al día",
      cta: "Descargar",
    },
    footer: {
      tagline: "VibeWatch — Descubrimiento con clips para cine y TV. Creado con el lenguaje de diseño CineStream.",
    },
    terms: {
      hero: {
        eyebrow: "Términos de uso y suscripciones",
        title: "Abonos VibeWatch Pro y EULA",
        desc: "Cómo funcionan los abonos Pro, reglas de facturación/renovación y el EULA de la app. Léelos antes de comprar.",
        badges: ["Última actualización: enero 2025", "Aplica a: app iOS VibeWatch"],
      },
      cards: [
        {
          title: "Opciones de suscripción",
          items: [
            "Founding Member Pro Mensual — $3.99/mes (auto-renueva, tiempo limitado, tarifa fija mientras esté activo).",
            "Founding Member Pro Anual — $34.99/año (ahorra 27%, tarifa fija mientras esté activo).",
            "Standard Pro Mensual — $8.99/mes (auto-renueva tras el periodo founding).",
            "Standard Pro Anual — $69.99/año (ahorra 35%).",
            "Precios en USD; App Store convierte a tu moneda local.",
            "Las pruebas se convierten salvo cancelación 24h antes de terminar.",
          ],
        },
        {
          title: "Facturación y renovación",
          items: [
            "Cargo a tu Apple ID al confirmar; Apple muestra el precio antes de comprar.",
            "Renueva automáticamente salvo desactivar auto-renovación 24h antes del fin del periodo.",
            "Gestiona o cancela en Ajustes iOS > ID de Apple > Suscripciones.",
          ],
        },
        {
          title: "Cancelación y reembolsos",
          items: [
            "Cancela en Ajustes iOS; acceso hasta fin del periodo actual.",
            "Reembolsos gestionados por Apple según sus políticas.",
            "Borrar la app no cancela; desactiva la auto-renovación en Ajustes.",
          ],
        },
        {
          title: "Tarifa Founding fija",
          items: [
            "Tarifa founding disponible en el lanzamiento; fija mientras la suscripción siga activa.",
            "Al cancelar pierdes la tarifa fija; al volver aplican precios estándar.",
            "Aplica solo al plan elegido (Mensual o Anual).",
          ],
        },
      ],
      required: {
        title: "Detalles de suscripción requeridos por Apple",
        items: [
          { title: "Título de la suscripción", body: ["VibeWatch Pro"] },
          { title: "Duraciones", body: ["Mensual: 1 mes (auto-renueva)", "Anual: 12 meses (auto-renueva)"] },
          {
            title: "Precios",
            body: [
              "Founding Member Pro: $3.99/mes o $34.99/año (fijo mientras esté activo).\n",
              "Standard Pro: $8.99/mes o $69.99/año.\n",
              "Precios en moneda local antes de comprar; pueden variar por región/impuestos.",
            ],
          },
          {
            title: "Pago y renovación",
            body: [
              "Cargo a tu Apple ID al confirmar la compra.",
              "Renueva salvo desactivar 24h antes del fin de periodo.",
              "Renovación cargada a tu Apple ID; gestiona en ajustes de App Store.",
              "El tiempo de prueba restante se pierde al comprar una suscripción.",
            ],
          },
          {
            title: "Enlaces requeridos",
            body: ["Política de privacidad: https://vibewatch.com/privacy", "Términos de uso (Apple EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
          },
        ],
      },
    },
    privacy: {
      hero: {
        eyebrow: "Política de privacidad",
        title: "Cómo VibeWatch gestiona tus datos",
        desc: "Qué recopilamos, por qué y tus opciones. Léelo antes de usar VibeWatch.",
        badges: ["Última actualización: enero 2025", "Aplica a: app iOS VibeWatch"],
      },
      sections: [
        {
          title: "Datos que recopilamos",
          body: [
            "Datos básicos: email, IDs de dispositivo.",
            "Uso: clips vistos, likes/skips, diagnósticos de sesión.",
            "Compras: estado de suscripción desde App Store.",
          ],
        },
        {
          title: "Por qué los recopilamos",
          body: [
            "Personalizar recomendaciones y mejorar los prompts de IA.",
            "Mantener listas y preferencias sincronizadas entre dispositivos.",
            "Procesar suscripciones y dar soporte.",
          ],
        },
        {
          title: "Compartir y retención",
          body: [
            "Proveedores para analytics, errores y pagos (ej. App Store).",
            "No vendemos tus datos personales.",
            "Datos retenidos mientras la cuenta esté activa o según ley.",
          ],
        },
        {
          title: "Tus elecciones",
          body: [
            "Solicitar acceso, corrección o eliminación de datos.",
            "Darse de baja de emails de marketing.",
            "Desactivar analytics en los ajustes del dispositivo si aplica.",
          ],
        },
        {
          title: "Seguridad",
          body: ["Cifrado en tránsito, controles de acceso y revisiones regulares para proteger tus datos."],
        },
      ],
      keyPointsTitle: "Puntos clave de privacidad",
      keyPoints: [
        { text: "Sin venta de datos. Nunca vendemos tus datos personales. Los proveedores terceros solo reciben lo necesario para el servicio." },
        { text: "Tú controlas los permisos en la app y en Ajustes de iOS (notificaciones, analytics, ubicación)." },
        { text: "Solicita exportar o eliminar en cualquier momento vía startingvibe2025@gmail.com", href: "mailto:startingvibe2025@gmail.com" },
        { text: "Términos de uso: EULA estándar de Apple", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      ],
      contact: "Para dudas de privacidad, escribe a startingvibe2025@gmail.com.",
    },
    home: {
      hero: {
        badge: "Recomendaciones de cine y TV por IA, vía clips",
        title: "Mira un clip, consigue el título correcto en segundos.",
        subtitle:
          "Desplázate por clips de películas y series en tendencia. Pídele a Vibe AI que combine tu mood: del scroll al streaming en menos de 2 minutos.",
        solutionTitle: "La Solución VibeWatch",
        solutionSubtitle: "De la búsqueda interminable al match perfecto. Descubre películas que realmente coinciden con tu estado de ánimo, al instante.",
        primaryCta: "Descargar gratis",
        secondaryCta: "Ver cómo funciona",
        foundingChip: "Founding Member 3,99$/mes — bloquea el precio",
        watchLabel: "Mira VibeWatch en acción",
      },
      whyClips: {
        eyebrow: "¿Por qué empezar con clips?",
        title: "Siente el vibe antes de darle play",
        metric: "Menos de 2 minutos de media para elegir",
        items: [
          { title: "Clips sin spoilers", desc: "Escenas de 20–30 segundos que muestran tono y ritmo sin revelar giros." },
          { title: "IA según tu mood", desc: "Describe tu mood: la IA arma una selección corta para dejar el scroll y empezar a ver." },
          { title: "Decisiones claras", desc: "Enlaces de streaming, duración y señales sociales justo donde los necesitas." },
        ],
      },
      comparison: {
        title: "Basta de scroll infinito. Empieza a ver.",
        subtitle: "El streaming tradicional te hace buscar horas. VibeWatch te pone a ver en segundos.",
        beforeTitle: "Sin VibeWatch",
        afterTitle: "Con VibeWatch",
        beforeItems: [
          "30 minutos desplazándote en Netflix",
          "Decenas de descripciones genéricas",
          "Tráilers aburridos que hacen spoiler",
          "Aún sin decidir qué ver",
          "Terminas viendo The Office otra vez",
        ],
        afterItems: [
          "Abre la app → clips al instante",
          "Desliza por escenas de 30 segundos",
          "Siente el vibe sin spoilers",
          'Pide a la IA: "Quiero un thriller mind-bending"',
          "Viendo algo nuevo en 2 minutos",
        ],
      },
      showcase: {
        eyebrow: "Ver en acción",
        title: "Todo lo que necesitas para tu siguiente maratón",
        cards: [
          { title: "Clips instantáneos", desc: "Escenas de 30 segundos que capturan la esencia. Sin spoilers, solo vibe.", alt: "Feed de clips deslizable" },
          { title: "Descubrimiento smart", desc: "El feed con IA aprende tus gustos. Clips personalizados, de clásicos a tendencias.", alt: "Feed personalizado según tu mood" },
          { title: "Asistente Vibe AI", desc: "Describe tu mood. Recibe recomendaciones al instante con clips previos.", alt: "Interfaz de chat Vibe AI" },
          { title: "Listas inteligentes", desc: "Guarda favoritos, organiza por mood, sincroniza en todos tus dispositivos.", alt: "Crear listas personalizadas" },
          { title: "Detalles completos", desc: "Valoraciones, reparto, plataformas, tráilers. Todo para decidir.", alt: "Información detallada de la película" },
          { title: "Tendencias", desc: "Lo que todos ven ahora. No te pierdas el próximo éxito.", alt: "Búsqueda y títulos en tendencia" },
        ],
      },
      clips: {
        eyebrow: "Hecho para fans",
        title: "Clips que facilitan decidir qué ver",
        desc: "Precargamos una mezcla personalizada de títulos en tendencia, aclamados y clásicos, los puntuamos según tu mood y entregamos un feed de clips deslizable para que sientas la historia antes de verla.",
        cards: [
          { title: "Inicio veloz", desc: "2 clips seleccionados aparecen en segundos: ya estás viendo, sin esperar anuncios ni tráilers." },
          { title: "Feed diverso", desc: "Películas + series equilibradas con variedad de géneros y clásicos para refrescar tu lista." },
          { title: "Según tu engagement", desc: "Likes, tiempo de visualización y listas ajustan lo que sigue. ¿Saltas? Vibe AI adapta el feed al momento." },
        ],
      },
      ai: {
        leftTitle: "Pide a Vibe AI tu próximo título",
        leftDesc:
          'Describe el mood ("atracos cozy", "sci‑fi optimista", "série < 30 min") y Vibe AI devuelve una selección breve con clips al instante. Guarda en listas o abre en tu plataforma.',
        promptOne: "Busco un misterio mind-bending de menos de 2 horas.",
        aiReplyOne:
          "Tengo 3: Fracture (1h53) con giro judicial, Coherence (1h29) para suspenso sci‑fi, y The Invitation (1h40) para tensión lenta.",
        aiReplyTwo: "¿Quieres tráilers o clips rápidos de cada una?",
        promptChips: ['Prompt: "Series deportivas feel-good"', 'Prompt: "Thrillers de cocción lenta esta noche"'],
        rightTitle: "Listo para ver cuando quieras",
        rightDesc:
          "Guarda cualquier clip en listas, mira dónde se transmite y sincroniza tus dispositivos. Gratis: 15 clips diarios. Pro: Clips e IA ilimitados desde 3,99$/mes (tarifa Founding Member - tiempo limitado).",
        cards: [
          { title: "Callejón Neón", genre: "Cyberpunk", platform: "Prime" },
          { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
        ],
        saveLabel: "Guardar",
        watchOnLabel: "Ver en",
      },
      how: {
        eyebrow: "Cómo funciona",
        title: "Tres pasos a tu próximo favorito",
        steps: [
          { num: "01", title: "Abre la pestaña Clips", desc: "Pulsa play y desliza una pila precargada con las mejores escenas del día. Dopamina al instante, cero dudas." },
          { num: "02", title: "Pide a Vibe AI", desc: "Describe mood o restricciones. La IA cura títulos, muestra clips y ajusta las recomendaciones en tiempo real." },
          { num: "03", title: "Guarda y ve", desc: "Añade favoritos, comparte, abre donde se transmite. Pasa a Pro desde 3,99$/mes (tarifa Founding Member - tiempo limitad o)." },
        ],
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Todo lo que debes saber de VibeWatch",
        items: [
          {
            q: "¿VibeWatch es realmente gratis?",
            a: "¡Sí! Los usuarios Free tienen 15 clips diarios y Vibe AI básico. Pasa a Founding Member Pro (3,99$/mes o 34,99$/año) o Standard Pro (8,99$/mes o 69,99$/año) para clips y IA ilimitados sin anuncios.",
          },
          {
            q: "¿Necesito suscripciones para ver?",
            a: "VibeWatch te muestra clips y dónde ver. Para el contenido completo necesitas suscripciones a Netflix, Prime, etc., pero la parte de descubrimiento es gratis.",
          },
          {
            q: "¿Cómo funciona Vibe AI?",
            a: "Vibe AI aprende de tus interacciones—likes, skips, tiempo de visualización—y ajusta tu mood a nuestra base de títulos. Describe lo que quieres en lenguaje natural y obtén resultados al instante.",
          },
          {
            q: "¿Los clips tienen spoilers?",
            a: "Para nada. Seleccionamos escenas de 20-30 segundos que muestran el vibe sin revelar giros.",
          },
          {
            q: "¿Puedo usarla en varios dispositivos?",
            a: "Sí. Tus listas, preferencias e historial se sincronizan en iPhone, iPad y todos tus dispositivos conectados.",
          },
          {
            q: "¿Qué incluye Pro?",
            a: "Pro desbloquea clips diarios ilimitados, peticiones IA ilimitadas, soporte prioritario, acceso temprano a nuevas funciones y experiencia sin anuncios. Founding Member: 3,99$/mes o 34,99$/año. Standard: 8,99$/mes o 69,99$/año.",
          },
          {
            q: "¿Qué es el plan Founding Member?",
            a: "Los Founding Members obtienen acceso de por vida a funciones Pro al precio de lanzamiento—3,99$/mes o 34,99$/año—bloqueado para siempre incluso si sube. Disponible el primer mes tras el lanzamiento (mediados de dic. a mediados de ene.). ¡Bloquea tu tarifa!",
          },
        ],
      },
      lovedBy: {
        eyebrow: "Amado por los streamers",
        quote: "“VibeWatch me hace ver en minutos, no después de horas de scroll.”",
        rating: "Calificación 4.8/5 de los primeros miembros",
      },
      cta: {
        eyebrow: "Descarga VibeWatch",
        title: "Convierte el scroll en tu próxima noche de cine.",
        subtitle:
          "Descarga ahora para 15 clips gratis al día, desbloquear Vibe AI y encontrar lo que encaja con tu mood. Tus listas siguen sincronizadas donde veas.",
        plans: [
          {
            id: "free",
            name: "Free",
            price: "0 €",
            desc: "15 clips al día + Vibe AI básico",
            perks: ["Sincroniza listas en dispositivos", "Clips sin spoilers", "Enlaces de dónde ver"],
            primaryCta: "Empezar gratis",
          },
          {
            id: "download",
            name: "Descargar ahora",
            price: "",
            desc: "Consigue VibeWatch en App Store con un tap.",
            perks: ["Instalación inmediata en iOS", "Sincroniza listas y preferencias", "Inclui plano gratis + upgrade Pro"],
            chip: "Recomendado",
            primaryCta: "Descargar la app",
            showCurrency: false,
          },
        ],
        appStoreCta: "Descargar en App Store",
        tryPromptsCta: "Probar prompts de Vibe AI",
        legalIntro: "Información de suscripción VibeWatch Pro:",
        legalLinks: {
          terms: "Términos de uso y suscripción",
          privacy: "Política de privacidad",
          eula: "EULA de Apple",
        },
      },
      support: {
        eyebrow: "Soporte",
        title: "¿Necesitas ayuda con VibeWatch?",
        desc: "Estamos aquí si tienes un problema, una pregunta de facturación o feedback sobre el feed de clips o Vibe AI.",
        cards: [
          {
            title: "Contactar soporte",
            desc: "Escríbenos a startingvibe2025@gmail.com. Incluye dispositivo, versión de la app y una breve descripción para ayudarte rápido.",
          },
          {
            title: "Podemos ayudar con",
            list: [
              "Acceso a la cuenta, inicio de sesión o verificación",
              "Facturación y suscripciones (RevenueCat / App Store)",
              "Reportar bugs, clips rotos o contenido",
              "Solicitudes de exportación o borrado de datos",
            ],
          },
          {
            title: "Tiempo de respuesta",
            desc: "Normalmente respondemos en un día laboral. Problemas urgentes de reproducción o paywall son prioridad.",
          },
          {
            title: "Legal y políticas",
            desc: "Revisa los detalles que mantienen transparente tu suscripción y datos.",
            list: [
              "Términos de uso / EULA — términos de suscripción, facturación y renovación.",
              "Política de privacidad — qué recopilamos, por qué y cómo pedir eliminación.",
            ],
          },
        ],
      },
    },
  },
  pt: {
    languageNames: {
      en: "English",
      it: "Italiano",
      fr: "Français",
      es: "Español",
      pt: "Português",
    },
    languagesFlag: {
      en: "🇺🇸",
      it: "🇮🇹",
      fr: "🇫🇷",
      es: "🇪🇸",
      pt: "🇵🇹",
    },
    header: {
      nav: {
        home: "Início",
        features: "Recursos",
        ai: "Vibe AI",
        how: "Como funciona",
        support: "Suporte",
        pricing: "Preços",
        faq: "FAQ",
        terms: "Termos de uso",
        privacy: "Privacidade",
      },
      download: "Baixar app",
      downloadNow: "Baixar agora",
      foundingChip: "Founding Member US$3,99/mês",
      mobileChip: "Founding 3,99$",
    },
    stickyCta: {
      title: "Comece a descobrir hoje",
      subtitle: "15 clipes grátis por dia",
      cta: "Baixar",
    },
    footer: {
      tagline: "VibeWatch — Descoberta via clipes para filmes e séries. Criado com a linguagem de design CineStream.",
    },
    terms: {
      hero: {
        eyebrow: "Termos de uso e assinaturas",
        title: "Assinaturas VibeWatch Pro e EULA",
        desc: "Como funcionam as assinaturas Pro, regras de cobrança/renovação e a EULA do app. Leia antes de comprar.",
        badges: ["Última atualização: janeiro 2025", "Aplica-se: app iOS VibeWatch"],
      },
      cards: [
        {
          title: "Opções de assinatura",
          items: [
            "Founding Member Pro Mensal — US$3,99/mês (renova automático, tempo limitado, preço fixo se ativo).",
            "Founding Member Pro Anual — US$34,99/ano (economia de 27%, preço fixo se ativo).",
            "Standard Pro Mensal — US$8,99/mês (renova auto após período founding).",
            "Standard Pro Anual — US$69,99/ano (economia de 35%).",
            "Preços em USD; App Store converte para moeda local.",
            "Períodos de teste convertem salvo cancelamento 24h antes do fim.",
          ],
        },
        {
          title: "Cobrança e renovação",
          items: [
            "Cobrança no seu Apple ID na compra; Apple mostra o preço antes.",
            "Renova automaticamente salvo desativar auto-renovação 24h antes do fim do período.",
            "Gerencie/cancele em Ajustes iOS > ID Apple > Assinaturas.",
          ],
        },
        {
          title: "Cancelamento e reembolso",
          items: [
            "Cancele a qualquer momento nos Ajustes; acesso até o fim do período atual.",
            "Reembolsos são tratados pela Apple conforme as políticas do App Store.",
            "Excluir o app não cancela; desative a auto-renovação nos Ajustes.",
          ],
        },
        {
          title: "Preço founding bloqueado",
          items: [
            "Preço founding disponível no lançamento; bloqueado enquanto a assinatura estiver ativa.",
            "Se cancelar, perde o preço fixo; ao voltar, aplicam-se preços padrão.",
            "Aplica apenas ao plano escolhido (Mensal ou Anual).",
          ],
        },
      ],
      required: {
        title: "Detalhes de assinatura exigidos pela Apple",
        items: [
          { title: "Título da assinatura", body: ["VibeWatch Pro"] },
          { title: "Durações", body: ["Mensal: 1 mês (auto-renova)", "Anual: 12 meses (auto-renova)"] },
          {
            title: "Preços",
            body: [
              "Founding Member Pro: US$3,99/mês ou US$34,99/ano (fixo enquanto ativo).\n",
              "Standard Pro: US$8,99/mês ou US$69,99/ano.\n",
              "Preços em moeda local antes da compra; podem variar por região/impostos.",
            ],
          },
          {
            title: "Pagamento e renovação",
            body: [
              "Cobrança no Apple ID na confirmação da compra.",
              "Renova salvo desativar 24h antes do fim do período.",
              "Renovação cobrada no Apple ID; gerencie nas configurações da App Store.",
              "Tempo de teste restante é perdido ao comprar uma assinatura.",
            ],
          },
          {
            title: "Links exigidos",
            body: ["Política de Privacidade: https://vibewatch.com/privacy", "Termos de uso (Apple EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"],
          },
        ],
      },
    },
    privacy: {
      hero: {
        eyebrow: "Política de privacidade",
        title: "Como o VibeWatch trata seus dados",
        desc: "O que coletamos, por quê e suas escolhas. Leia antes de usar o VibeWatch.",
        badges: ["Última atualização: janeiro 2025", "Aplica-se: app iOS VibeWatch"],
      },
      sections: [
        {
          title: "Dados que coletamos",
          body: [
            "Dados básicos: email, IDs de dispositivo.",
            "Uso: clipes vistos, likes/skips, diagnósticos de sessão.",
            "Compras: status de assinatura via App Store.",
          ],
        },
        {
          title: "Por que coletamos",
          body: [
            "Personalizar recomendações e melhorar prompts de IA.",
            "Manter listas e preferências sincronizadas entre dispositivos.",
            "Processar assinaturas e oferecer suporte.",
          ],
        },
        {
          title: "Compartilhamento e retenção",
          body: [
            "Fornecedores para analytics, erros e pagamentos (ex.: App Store).",
            "Não vendemos seus dados pessoais.",
            "Dados mantidos enquanto a conta estiver ativa ou conforme exigido por lei.",
          ],
        },
        {
          title: "Suas escolhas",
          body: [
            "Solicitar acesso, correção ou exclusão dos dados.",
            "Desativar emails de marketing.",
            "Desligar analytics nas configurações do dispositivo, se disponível.",
          ],
        },
        {
          title: "Segurança",
          body: ["Criptografia em trânsito, controles de acesso e revisões regulares para proteger seus dados."],
        },
      ],
      keyPointsTitle: "Pontos-chave de privacidade",
      keyPoints: [
        { text: "Sem venda de dados. Nunca vendemos seus dados pessoais. Fornecedores terceiros só recebem o necessário para o serviço." },
        { text: "Você controla as permissões no app e nos Ajustes do iOS (notificações, analytics, localização)." },
        { text: "Solicite exportação ou exclusão a qualquer momento via startingvibe2025@gmail.com", href: "mailto:startingvibe2025@gmail.com" },
        { text: "Termos de uso: EULA padrão da Apple", href: "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" },
      ],
      contact: "Para dúvidas de privacidade, escreva para startingvibe2025@gmail.com.",
    },
    home: {
      hero: {
        badge: "Recomendações de filmes e séries por IA, via clipes",
        title: "Veja um clipe e ache o título certo em segundos.",
        subtitle:
          "Role por clipes de filmes e séries em alta. Peça ao Vibe AI para combinar com seu mood: do scroll ao streaming em menos de 2 minutos.",
        solutionTitle: "A Solução VibeWatch",
        solutionSubtitle: "Da busca infinita ao match perfeito. Descubra filmes que realmente combinam com seu humor, instantaneamente.",
        primaryCta: "Baixar grátis",
        secondaryCta: "Veja como funciona",
        foundingChip: "Founding Member US$3,99/mês — bloqueie agora",
        watchLabel: "Veja o VibeWatch em ação",
      },
      whyClips: {
        eyebrow: "Por que começar com clipes?",
        title: "Sinta o clima antes de dar play",
        metric: "Menos de 2 minutos em média para escolher",
        items: [
          { title: "Clipes sem spoiler", desc: "Cenas de 20–30 segundos que mostram tom e ritmo sem revelar reviravoltas." },
          { title: "IA que segue seu mood", desc: "Descreva seu mood: a IA monta uma seleção curta para parar o scroll e começar a assistir." },
          { title: "Decisão clara", desc: "Links de streaming, duração e sinais sociais exatamente onde você precisa." },
        ],
      },
      comparison: {
        title: "Chega de scroll infinito. Comece a assistir.",
        subtitle: "O streaming tradicional faz você procurar por horas. VibeWatch coloca você assistindo em segundos.",
        beforeTitle: "Sem VibeWatch",
        afterTitle: "Com VibeWatch",
        beforeItems: [
          "30 minutos rolando a Netflix",
          "Dezenas de descrições genéricas",
          "Trailers chatos que dão spoiler",
          "Ainda sem decidir o que ver",
          "Acaba reassistindo The Office",
        ],
        afterItems: [
          "Abra o app → clipes instantâneos",
          "Deslize por cenas de 30 segundos",
          "Sinta o clima sem spoilers",
          'Peça à IA: "Quero um thriller mind-bending"',
          "Assistindo algo novo em 2 minutos",
        ],
      },
      showcase: {
        eyebrow: "Veja em ação",
        title: "Tudo que você precisa para o próximo play",
        cards: [
          { title: "Clipes instantâneos", desc: "Cenas de 30 segundos que capturam a essência. Sem spoilers, só vibe.", alt: "Feed de clipes para deslizar" },
          { title: "Descoberta inteligente", desc: "O feed com IA aprende seu gosto. Clipes personalizados de clássicos a tendências.", alt: "Feed personalizado conforme o humor" },
          { title: "Assistente Vibe AI", desc: "Descreva seu humor. Receba recomendações instantâneas com clipes de prévia.", alt: "Interface de chat Vibe AI" },
          { title: "Listas inteligentes", desc: "Salve favoritos, organize por mood, sincronize em todos os dispositivos.", alt: "Criar listas personalizadas" },
          { title: "Detalhes completos", desc: "Notas, elenco, plataformas, trailers. Tudo para decidir.", alt: "Informações detalhadas do filme" },
          { title: "Em alta", desc: "Veja o que todos assistem agora. Não perca o próximo hit.", alt: "Busca e títulos em alta" },
        ],
      },
      clips: {
        eyebrow: "Feito para fãs",
        title: "Clipes que facilitam decidir o que assistir",
        desc: "Pré-carregamos um mix personalizado de títulos em alta, aclamados e clássicos, pontuamos com seu mood e entregamos um feed de clipes para você sentir a história antes de verla.",
        cards: [
          { title: "Démarrage éclair", desc: "2 clips selecionados aparecem em segundos: você já está assistindo, sem esperar anúncios ou trailers." },
          { title: "Feed diverso", desc: "Filmes + séries equilibrados com diversidade de gêneros e clássicos para manter a fila fresca." },
          { title: "Adaptado à interação", desc: "Likes, tempo de visualização e listas ajustam o que vem depois. Pulou? Vibe AI adapta o feed ao vivo." },
        ],
      },
      ai: {
        leftTitle: "Peça ao Vibe AI o próximo título",
        leftDesc:
          'Descreva o mood ("assaltos aconchegantes", "sci‑fi otimista", "série < 30 min") e o Vibe AI retorna uma seleção curta com clipes imediatos. Salve em listas ou abra na sua plataforma.',
        promptOne: "Quero um mistério mind-bending de menos de 2 horas.",
        aiReplyOne:
          "Tenho 3: Fracture (1h53) com um twist no tribunal, Coherence (1h29) para suspense sci‑fi, e The Invitation (1h40) para tensão lenta.",
        aiReplyTwo: "Quer trailers ou clipes rápidos de cada um?",
        promptChips: ['Prompt: "Séries esportivas feel-good"', 'Prompt: "Thrillers de ritmo lento hoje"'],
        rightTitle: "Pronto para assistir na sua hora",
        rightDesc:
          "Salve qualquer clipe em listas, veja onde está disponível e sincronize dispositivos. Grátis: 15 clipes diários. Pro: Clipes e IA ilimitados a partir de US$3,99/mês (tarifa Founding Member - tempo limitado!).",
        cards: [
          { title: "Beco Neon", genre: "Cyberpunk", platform: "Prime" },
          { title: "Golden Hour", genre: "Feel-good", platform: "Netflix" },
        ],
        saveLabel: "Salvar",
        watchOnLabel: "Assistir em",
      },
      how: {
        eyebrow: "Como funciona",
        title: "Três passos para seu próximo favorito",
        steps: [
          { num: "01", title: "Abra a aba Clips", desc: "Dê play e deslize uma pilha pré-carregada das melhores cenas do dia. Dopamina instantânea, zero indecisão." },
          { num: "02", title: "Peça ao Vibe AI", desc: "Descreva humor ou restrições. A IA seleciona títulos, mostra clipes e ajusta as recomendações em tempo real." },
          { num: "03", title: "Salve e assista", desc: "Adicione aos favoritos, compartilhe e abra onde está em streaming. Vá para o Pro a partir de US$3,99/mês (tarifa Founding Member - tempo limitado!)." },
        ],
      },
      faq: {
        title: "Perguntas frequentes",
        subtitle: "Tudo o que você precisa saber sobre o VibeWatch",
        items: [
          {
            q: "VibeWatch é realmente grátis?",
            a: "Sim! Usuários Free têm 15 clipes por dia e Vibe AI básico. Vá para Founding Member Pro (US$3,99/mês ou US$34,99/ano) ou Standard Pro (US$8,99/mês ou US$69,99/ano) para clipes e IA ilimitados sem anúncios.",
          },
          {
            q: "Preciso de assinaturas para assistir?",
            a: "VibeWatch mostra clipes e onde assistir. Para o conteúdo completo você precisa de assinaturas Netflix, Prime etc., mas a descoberta é grátis.",
          },
          {
            q: "Como funciona o Vibe AI?",
            a: "O Vibe AI aprende com suas interações—likes, skips, tempo de tela—e combina seu mood ao nosso catálogo. Descreva o que quer em linguagem natural e receba resultados imediatos.",
          },
          {
            q: "Os clipes têm spoilers?",
            a: "Não. Selecionamos cenas de 20-30 segundos que mostram o vibe sem revelar reviravoltas.",
          },
          {
            q: "Posso usar em vários dispositivos?",
            a: "Sim! Listas, preferências e histórico sincronizam no iPhone, iPad e em todos os dispositivos logados.",
          },
          {
            q: "O que inclui o Pro?",
            a: "Pro desbloqueia clipes diários ilimitados, pedidos de IA ilimitados, suporte prioritário, acesso antecipado a novidades e experiência sem anúncios. Founding Member: US$3,99/mês ou US$34,99/ano. Standard: US$8,99/mês ou US$69,99/ano.",
          },
          {
            q: "O que é o plano Founding Member?",
            a: "Founding Members têm acesso vitalício às funções Pro pelo preço de lançamento—US$3,99/mês ou US$34,99/ano—bloqueado para sempre, mesmo se subir. Disponível no primeiro mês pós-lançamento (meados de dez a meados de jan). Bloqueie agora!",
          },
        ],
      },
      lovedBy: {
        eyebrow: "Amado por quem faz streaming",
        quote: "“VibeWatch me coloca assistindo em minutos, não depois de horas de scroll.”",
        rating: "Nota 4,8/5 pelos primeiros membros",
      },
      cta: {
        eyebrow: "Baixe o VibeWatch",
        title: "Transforme o scroll na próxima noite de filmes.",
        subtitle:
          "Baixe agora para 15 clipes grátis por dia, desbloquear o Vibe AI e achar o que combina com seu mood. Suas listas ficam sincronizadas em todos os lugares.",
        plans: [
          {
            id: "free",
            name: "Free",
            price: "R$0",
            desc: "15 clipes por dia + Vibe AI básico",
            perks: ["Sincronize listas entre dispositivos", "Clipes sem spoiler", "Links de onde assistir"],
            primaryCta: "Começar grátis",
          },
          {
            id: "download",
            name: "Baixar agora",
            price: "",
            desc: "Pegue o VibeWatch na App Store em um toque.",
            perks: ["Instalação imediata no iOS", "Sincronize listas e preferências", "Inclui plano grátis + upgrade Pro"],
            chip: "Recomendado",
            primaryCta: "Baixar o app",
            showCurrency: false,
          },
        ],
        appStoreCta: "Baixar na App Store",
        tryPromptsCta: "Testar prompts do Vibe AI",
        legalIntro: "Informações da assinatura VibeWatch Pro:",
        legalLinks: {
          terms: "Termos de uso e assinatura",
          privacy: "Política de privacidade",
          eula: "EULA Apple",
        },
      },
      support: {
        eyebrow: "Suporte",
        title: "Precisa de ajuda com o VibeWatch?",
        desc: "Estamos aqui se você tiver problemas, dúvidas de cobrança ou feedback sobre o feed de clipes ou Vibe AI.",
        cards: [
          {
            title: "Fale com o suporte",
            desc: "Envie e-mail para startingvibe2025@gmail.com. Inclua dispositivo, versão do app e uma breve descrição para ajudarmos rápido.",
          },
          {
            title: "Podemos ajudar em",
            list: [
              "Acesso à conta, login ou verificação",
              "Cobrança e assinaturas (RevenueCat / App Store)",
              "Reportar bugs, clipes quebrados ou conteúdo",
              "Solicitações de exportação ou exclusão de dados",
            ],
          },
          {
            title: "Tempo de resposta",
            desc: "Normalmente respondemos em um dia útil. Problemas urgentes de reprodução ou paywall têm prioridade.",
          },
          {
            title: "Jurídico e políticas",
            desc: "Revise os detalhes que mantêm sua assinatura e dados transparentes.",
            list: [
              "Termos de uso / EULA — termos de assinatura, cobrança e renovação.",
              "Política de privacidade — o que coletamos, por quê e como pedir exclusão.",
            ],
          },
        ],
      },
    },
  },
};