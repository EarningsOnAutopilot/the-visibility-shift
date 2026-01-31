import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://the-visibility-shift.com'),
  title: {
    default: "GEO Strategic Audit | The Visibility Shift – KI-Sichtbarkeit für DACH",
    template: "%s | The Visibility Shift"
  },
  description: "Werden Sie in ChatGPT, Perplexity & Google AI zitiert? GEO Strategic Audit für SaaS & E-Commerce im DACH-Raum. AMCR-Messung, Wettbewerbervergleich & priorisierte Roadmap.",
  keywords: ["GEO", "Generative Engine Optimization", "LLMO", "KI-Sichtbarkeit", "ChatGPT", "Perplexity", "Google AI Overview", "DACH", "SaaS", "E-Commerce"],
  authors: [{ name: "Alexander Neitzel", url: "https://linkedin.com/in/alexanderneitzel" }],
  creator: "The Visibility Shift",
  publisher: "NEELTIZ CONSULTING - FZCO",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://the-visibility-shift.com",
    siteName: "The Visibility Shift",
    title: "The Visibility Shift – GEO Strategic Audit für KI-Sichtbarkeit",
    description: "Erfahren Sie, warum Wettbewerber in AI-Antworten auftauchen – und Sie nicht. GEO Audit mit AMCR-Messung für DACH-Unternehmen.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "The Visibility Shift – GEO Strategic Audit" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Visibility Shift – GEO Strategic Audit",
    description: "KI-Sichtbarkeit für DACH-Unternehmen. Werden Sie in ChatGPT, Perplexity & Google AI zitiert?",
    images: ["/twitter-card.png"],
  },

  alternates: {
    canonical: "https://the-visibility-shift.com",
    languages: {
      'de-DE': 'https://the-visibility-shift.com',
      'de-AT': 'https://the-visibility-shift.com',
      'de-CH': 'https://the-visibility-shift.com',
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// Schema.org Structured Data
const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Visibility Shift",
  "alternateName": "NEELTIZ CONSULTING - FZCO",
  "url": "https://the-visibility-shift.com",
  "logo": "https://the-visibility-shift.com/logo.png",
  "description": "GEO & LLMO Consulting – Wir machen Ihre Marke sichtbar in KI-Antworten von ChatGPT, Perplexity und Google AI Overviews.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Alexander Neitzel",
    "jobTitle": "AI Visibility Strategist | GEO Consultant",
    "url": "https://linkedin.com/in/alexanderneitzel"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Building A1, Dubai Digital Park, Dubai Silicon Oasis",
    "addressLocality": "Dubai",
    "postalCode": "342001",
    "addressCountry": "AE"
  },
  "areaServed": [
    { "@type": "Country", "name": "Germany" },
    { "@type": "Country", "name": "Austria" },
    { "@type": "Country", "name": "Switzerland" }
  ],
  "knowsAbout": [
    "Generative Engine Optimization", "AI Search Visibility", "Large Language Model Optimization",
    "LLMO", "Schema Markup Strategy", "E-E-A-T Optimization", "AMCR", "SOVAR"
  ],
  "sameAs": ["https://linkedin.com/company/thevisibilityshift"],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "info@the-visibility-shift.com",
    "availableLanguage": ["German", "English"]
  }
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Visibility Shift",
  "url": "https://the-visibility-shift.com",
  "description": "GEO Strategic Audit – Werden Sie in KI-Antworten erwähnt?",
  "inLanguage": "de-DE",
  "publisher": { "@type": "Organization", "name": "The Visibility Shift" }
};

const schemaProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Visibility Shift – GEO Consulting",
  "description": "Strategische Beratung für Generative Engine Optimization (GEO) und LLMO",
  "url": "https://the-visibility-shift.com",
  "priceRange": "€€€",
  "areaServed": ["DE", "AT", "CH"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "GEO Consulting Services",
    "itemListElement": [
      { "@type": "Offer", "name": "GEO Audit Core", "price": "6500", "priceCurrency": "EUR" },
      { "@type": "Offer", "name": "GEO Audit Reputation", "price": "7500", "priceCurrency": "EUR" },
      { "@type": "Offer", "name": "GEO Pulse", "price": "1500", "priceCurrency": "EUR" }
    ]
  }
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Neitzel",
  "jobTitle": "AI Visibility Strategist | GEO Consultant",
  "worksFor": { "@type": "Organization", "name": "The Visibility Shift" },
  "knowsAbout": ["Generative Engine Optimization", "LLMO", "Schema Markup Strategy"],
  "alumniOf": { "@type": "Organization", "name": "Mercedes-Benz Energy" },
  "sameAs": ["https://linkedin.com/in/alexanderneitzel"]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfessionalService) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
