import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

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
}

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Visibility Shift",
  "url": "https://the-visibility-shift.com",
  "description": "GEO Discovery Audit – Werden Sie in KI-Antworten erwähnt?",
  "inLanguage": "de-DE",
  "publisher": { "@type": "Organization", "name": "The Visibility Shift" }
}

const schemaProfessionalService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "The Visibility Shift – GEO Consulting",
  "description": "Strategische Beratung für Generative Engine Optimization (GEO) und LLMO",
  "url": "https://the-visibility-shift.com",
  "priceRange": "$$$",
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
}

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alexander Neitzel",
  "jobTitle": "AI Visibility Strategist | GEO Consultant",
  "worksFor": { "@type": "Organization", "name": "The Visibility Shift" },
  "knowsAbout": ["Generative Engine Optimization", "LLMO", "Schema Markup Strategy", "IATF 16949", "ISO 9001", "Prozessaudit", "Qualitätsmanagement"],
  "alumniOf": { "@type": "Organization", "name": "Mercedes-Benz Group AG" },
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "14 Jahre Qualitätsmanagement-Beauftragter (QMB)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "8 Jahre IATF 16949 Auditerfahrung" }
  ],
  "sameAs": ["https://linkedin.com/in/alexander-neitzel-64741a35b"]
}

const schemaPersonYasmin = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yasmin Neitzel",
  "jobTitle": "Senior GEO Auditor",
  "worksFor": { "@type": "Organization", "name": "The Visibility Shift" },
  "alumniOf": { "@type": "Organization", "name": "Accumotive GmbH & Co. KG (Mercedes-Benz Group)" },
  "knowsAbout": ["Generative Engine Optimization", "AI Visibility Audit", "GEO Audit", "Projektmanagement", "VDA 6.3", "Qualitätssteuerung", "Prüfplanung", "FMEA", "Aktionsmanagement"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Federführende Vorbereitung von 20+ VDA 6.3 Audits" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "experience", "name": "Aktionsmanagerin Qualitätssteuerung – Accumotive (Mercedes-Benz Group)" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "experience", "name": "Qualitäts- und Prüfplanerin – Accumotive (Mercedes-Benz Group)" }
  ],
  "sameAs": ["https://linkedin.com/in/yasmin-neitzel-62b19a105"]
}

const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So läuft ein GEO Discovery Audit ab",
  "description": "Das GEO Discovery Audit dauert 2 Wochen. Ihr Aufwand: ca. 1-2 Stunden für Kick-off und Abschluss-Meeting.",
  "totalTime": "P14D",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Kick-off Call",
      "text": "Ziele, Zielgruppe und Wettbewerber definieren. Gemeinsam klären: Welche Ziele haben Sie? Wer ist Ihre Zielgruppe? Welche Wettbewerber sind relevant?",
      "url": "https://the-visibility-shift.com/#ablauf"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discovery Audit",
      "text": "Technische Prüfung, AI-Mention-Tests auf ChatGPT, Perplexity und Google AI Overviews, sowie Wettbewerbervergleich der KI-Sichtbarkeit.",
      "url": "https://the-visibility-shift.com/#ablauf"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Strategic Roadmap",
      "text": "GAP-Analyse in 5 Kernbereichen: Brand Authority, Content-Qualität, technische Basis, externe Signale und E-E-A-T. Jede Maßnahme wird nach Impact und Aufwand priorisiert.",
      "url": "https://the-visibility-shift.com/#ablauf"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Abschluss-Meeting",
      "text": "Präsentation aller Ergebnisse, Q&A und Übergabe der vollständigen Dokumentation mit klarer, priorisierter Roadmap.",
      "url": "https://the-visibility-shift.com/#ablauf"
    }
  ]
}

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://the-visibility-shift.com/" },
    { "@type": "ListItem", "position": 2, "name": "Impressum", "item": "https://the-visibility-shift.com/impressum" },
    { "@type": "ListItem", "position": 3, "name": "Datenschutz", "item": "https://the-visibility-shift.com/datenschutz" },
    { "@type": "ListItem", "position": 4, "name": "Cookies", "item": "https://the-visibility-shift.com/cookies" }
  ]
}

function Layout() {
  useEffect(() => {
    // Inject Schema.org JSON-LD scripts
    const schemas = [schemaOrganization, schemaWebSite, schemaProfessionalService, schemaPerson, schemaPersonYasmin, schemaHowTo, schemaBreadcrumb]
    const scripts = []

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `schema-${index}`
      document.head.appendChild(script)
      scripts.push(script)
    })

    return () => {
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  return <Outlet />
}

export default Layout
