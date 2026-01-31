'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';

const schemaData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Visibility Shift',
    alternateName: 'NEELTIZ Consulting - FZCO',
    url: 'https://the-visibility-shift.com',
    logo: 'https://the-visibility-shift.com/logo.png',
    description:
      'GEO & LLMO Consulting – Wir machen Ihre Marke sichtbar in KI-Antworten von ChatGPT, Perplexity und Google AI Overviews.',
    foundingDate: '2024',
    areaServed: ['DE', 'AT', 'CH'],
    serviceType: ['GEO Consulting', 'LLMO Consulting', 'AI Visibility Audit'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['German', 'English'],
    },
    sameAs: ['https://www.linkedin.com/company/thevisibilityshift'],
  },
  webPage: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'The Visibility Shift – GEO Strategic Audit',
    description:
      'Werden Sie in KI-Antworten erwähnt? Mit unserem GEO Strategic Audit finden Sie es heraus. Für SaaS & E-Commerce im DACH-Raum.',
    url: 'https://the-visibility-shift.com',
    inLanguage: 'de-DE',
    isPartOf: {
      '@type': 'WebSite',
      name: 'The Visibility Shift',
      url: 'https://the-visibility-shift.com',
    },
  },
  services: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'GEO Strategic Audit',
    provider: {
      '@type': 'Organization',
      name: 'The Visibility Shift',
    },
    description:
      'Systematische Analyse Ihrer KI-Sichtbarkeit mit AI-Mention-Tests, technischer Prüfung, Wettbewerbervergleich und priorisierter Roadmap.',
    areaServed: ['DE', 'AT', 'CH'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GEO Audit Pakete',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'GEO Audit Core',
          description:
            '30 AI-Mention-Prompts, technische Analyse, Website-Analyse, Wettbewerbervergleich, Gap-Analyse, priorisierte Roadmap',
          price: '6500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'GEO Audit Reputation',
          description:
            '30 AI-Mention-Prompts + 10 Sentiment-Prompts für Reputationsanalyse, technische Analyse, Website-Analyse, Wettbewerbervergleich, Gap-Analyse, priorisierte Roadmap',
          price: '7500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          name: 'GEO Pulse',
          description: 'Quartalsweise AMCR-Messung, Wettbewerber-Monitoring, neue priorisierte Empfehlungen',
          price: '1500',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1500',
            priceCurrency: 'EUR',
            billingDuration: 'P3M',
          },
        },
      ],
    },
  },
  faqPage: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was ist GEO – Generative Engine Optimization?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GEO (Generative Engine Optimization) ist die systematische Optimierung von Websites und Inhalten für KI-gestützte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Ziel ist es, dass Ihre Marke in KI-generierten Antworten zitiert und empfohlen wird. Anders als bei SEO geht es nicht um Rankings, sondern um Zitierfähigkeit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der Unterschied zwischen SEO und GEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO optimiert für Google-Rankings – Sie erscheinen in den Suchergebnissen. GEO optimiert für KI-Zitierungen – Sie werden in der Antwort selbst erwähnt. Die Faktoren unterscheiden sich: Bei SEO zählen Keywords und Backlinks stark. Bei GEO sind Brand Authority, strukturierte Daten und Zitierfähigkeit des Contents entscheidender.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie misst man KI-Sichtbarkeit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'KI-Sichtbarkeit wird über systematische Tests gemessen. Zwei zentrale Metriken sind AMCR (AI Mention Coverage Rate) – der Anteil der relevanten Fragen, bei denen Ihre Marke erwähnt wird – und SOVAR (Share of Voice in AI Responses) – Ihr Anteil an allen Markenerwähnungen im Vergleich zu Wettbewerbern.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Faktoren beeinflussen, ob eine Marke in KI-Antworten erscheint?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nach aktuellem Wissensstand spielen vier Bereiche eine Rolle: Brand Authority, Content-Qualität, technische Voraussetzungen (Schema-Markup, Crawlbarkeit) und externe Signale (Erwähnungen, Bewertungen, Backlinks).',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie läuft ein GEO-Audit ab?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ein GEO-Audit besteht aus zwei Phasen über 2 Wochen. Phase 1 (Discovery Audit): Technische Prüfung, Website-Analyse, Messung der KI-Sichtbarkeit inkl. Wettbewerbervergleich. Phase 2 (Strategic Roadmap): GAP-Analyse in 5 Kernbereichen und priorisierte Maßnahmen. Ihr Aufwand: ca. 1-2 Stunden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Wie schnell wirken GEO-Maßnahmen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das hängt von der Maßnahme ab. Technische Optimierungen wie Schema-Markup können innerhalb von Wochen wirken. Content-Anpassungen brauchen 4-12 Wochen. Brand-Aufbau ist langfristig (6-12 Monate). Die Roadmap priorisiert nach Impact und Umsetzungsgeschwindigkeit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kann man GEO-Maßnahmen selbst umsetzen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, GEO-Maßnahmen lassen sich intern oder mit einer Agentur umsetzen. Voraussetzung ist ein klarer Plan mit priorisierten Handlungsempfehlungen. Eine GEO-Roadmap sollte jede Maßnahme nach Impact und Aufwand einordnen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was passiert nach dem GEO-Audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sie haben eine priorisierte Roadmap und können direkt mit der Umsetzung starten. Für die laufende Überwachung bieten wir den Pulse Check an: quartalsweise AMCR-Messung, Wettbewerber-Monitoring und neue priorisierte Empfehlungen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Für wen ist ein GEO-Audit geeignet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das GEO-Audit richtet sich an SaaS- und E-Commerce-Unternehmen, die bereits SEO beherrschen, aber bei KI-Sichtbarkeit noch im Dunkeln tappen. Ideal für Unternehmen, die proaktiv handeln wollen, bevor der Markt sich komplett verändert.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was kostet ein GEO-Audit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das Core-Paket kostet €6.500 und umfasst 30 AI-Mention-Tests. Das Reputation-Paket kostet €7.500 und enthält zusätzlich 10 Sentiment-Prompts für eine Reputationsanalyse. Beide Pakete beinhalten alle Audit-Leistungen inklusive Kick-off, Analyse und Abschluss-Meeting.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist der GEO Pulse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Der GEO Pulse ist unser Folgeprodukt nach dem initialen Audit. Für €1.500 pro Quartal erhalten Sie eine regelmäßige AMCR-Messung, Wettbewerber-Monitoring und neue priorisierte Empfehlungen. So bleiben Sie auf dem Laufenden, wenn sich die KI-Landschaft verändert.',
        },
      },
    ],
  },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Was ist GEO – Generative Engine Optimization?',
      a: 'GEO (Generative Engine Optimization) ist die systematische Optimierung von Websites und Inhalten für KI-gestützte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Ziel ist es, dass Ihre Marke in KI-generierten Antworten zitiert und empfohlen wird. Anders als bei SEO geht es nicht um Rankings, sondern um Zitierfähigkeit.',
    },
    {
      q: 'Was ist der Unterschied zwischen SEO und GEO?',
      a: 'SEO optimiert für Google-Rankings – Sie erscheinen in den Suchergebnissen. GEO optimiert für KI-Zitierungen – Sie werden in der Antwort selbst erwähnt. Die Faktoren unterscheiden sich: Bei SEO zählen Keywords und Backlinks stark. Bei GEO sind Brand Authority, strukturierte Daten und Zitierfähigkeit des Contents entscheidender.',
    },
    {
      q: 'Wie misst man KI-Sichtbarkeit?',
      a: 'KI-Sichtbarkeit wird über systematische Tests gemessen. Zwei zentrale Metriken sind AMCR (AI Mention Coverage Rate) – der Anteil der relevanten Fragen, bei denen Ihre Marke erwähnt wird – und SOVAR (Share of Voice in AI Responses) – Ihr Anteil an allen Markenerwähnungen im Vergleich zu Wettbewerbern.',
    },
    {
      q: 'Welche Faktoren beeinflussen, ob eine Marke in KI-Antworten erscheint?',
      a: 'Nach aktuellem Wissensstand spielen vier Bereiche eine Rolle: Brand Authority, Content-Qualität, technische Voraussetzungen (Schema-Markup, Crawlbarkeit) und externe Signale (Erwähnungen, Bewertungen, Backlinks).',
    },
    {
      q: 'Wie läuft ein GEO-Audit ab?',
      a: 'Ein GEO-Audit besteht aus zwei Phasen über 2 Wochen. Phase 1 (Discovery Audit): Technische Prüfung, Website-Analyse, Messung der KI-Sichtbarkeit inkl. Wettbewerbervergleich. Phase 2 (Strategic Roadmap): GAP-Analyse in 5 Kernbereichen und priorisierte Maßnahmen. Ihr Aufwand: ca. 1-2 Stunden.',
    },
    {
      q: 'Wie schnell wirken GEO-Maßnahmen?',
      a: 'Das hängt von der Maßnahme ab. Technische Optimierungen wie Schema-Markup können innerhalb von Wochen wirken. Content-Anpassungen brauchen 4-12 Wochen. Brand-Aufbau ist langfristig (6-12 Monate). Die Roadmap priorisiert nach Impact und Umsetzungsgeschwindigkeit.',
    },
    {
      q: 'Kann man GEO-Maßnahmen selbst umsetzen?',
      a: 'Ja, GEO-Maßnahmen lassen sich intern oder mit einer Agentur umsetzen. Voraussetzung ist ein klarer Plan mit priorisierten Handlungsempfehlungen. Eine GEO-Roadmap sollte jede Maßnahme nach Impact und Aufwand einordnen.',
    },
    {
      q: 'Was passiert nach dem GEO-Audit?',
      a: 'Sie haben eine priorisierte Roadmap und können direkt mit der Umsetzung starten. Für die laufende Überwachung bieten wir den Pulse Check an: quartalsweise AMCR-Messung, Wettbewerber-Monitoring und neue priorisierte Empfehlungen.',
    },
    {
      q: 'Für wen ist ein GEO-Audit geeignet?',
      a: 'Das GEO-Audit richtet sich an SaaS- und E-Commerce-Unternehmen, die bereits SEO beherrschen, aber bei KI-Sichtbarkeit noch im Dunkeln tappen. Ideal für Unternehmen, die proaktiv handeln wollen, bevor der Markt sich komplett verändert.',
    },
    {
      q: 'Was kostet ein GEO-Audit?',
      a: 'Das Core-Paket kostet €6.500 und umfasst 30 AI-Mention-Tests. Das Reputation-Paket kostet €7.500 und enthält zusätzlich 10 Sentiment-Prompts für eine Reputationsanalyse. Beide Pakete beinhalten alle Audit-Leistungen inklusive Kick-off, Analyse und Abschluss-Meeting.',
    },
    {
      q: 'Was ist der GEO Pulse?',
      a: 'Der GEO Pulse ist unser Folgeprodukt nach dem initialen Audit. Für €1.500 pro Quartal erhalten Sie eine regelmäßige AMCR-Messung, Wettbewerber-Monitoring und neue priorisierte Empfehlungen. So bleiben Sie auf dem Laufenden, wenn sich die KI-Landschaft verändert.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200 overflow-hidden relative">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.services) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData.faqPage) }}
      />

      {/* Subtle grid overlay */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(160, 124, 58, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 124, 58, 0.012) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative floating elements */}
      <div className="fixed top-[15%] right-[10%] w-80 h-80 rounded-full pointer-events-none z-0 opacity-20" />

      {/* ==================== STICKY NAVIGATION ==================== */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-16 py-4 bg-slate-950/95 backdrop-blur-lg border-b border-amber-900/10">
        <div className="flex items-center gap-3.5">
          {/* Logo */}
          <svg width="36" height="36" viewBox="0 0 100 100" className="flex-shrink-0">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#a07c3a" strokeWidth="4" opacity="0.4" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#a07c3a" strokeWidth="4" />
            <circle cx="50" cy="50" r="16" fill="#a07c3a" />
            <circle cx="78" cy="22" r="8" fill="#a07c3a" />
          </svg>
          <span className="text-sm font-semibold tracking-tight text-slate-200">The Visibility Shift</span>
        </div>
        <div className="flex gap-9 text-sm">
          <a href="#audit" className="nav-link">
            Audit
          </a>
          <a href="#ablauf" className="nav-link">
            Ablauf
          </a>
          <a href="#pakete" className="nav-link">
            Pakete
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </div>
        <a href="#" className="btn-primary px-5 py-2.5 text-sm">
          Kick-off Call
        </a>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-20" />

      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="px-16 py-20 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div>
            <p className="slide-in-left delay-1 font-space-mono text-xs text-amber-700 tracking-widest uppercase mb-6">
              von unsichtbar zu zitiert
            </p>

            <h1 className="slide-in-left delay-2 text-5xl font-bold leading-tight mb-6 text-slate-200">
              Ihre Kunden fragen ChatGPT.{' '}
              <span className="text-amber-700">Werden Sie empfohlen?</span>
            </h1>

            <p className="slide-in-left delay-3 text-lg text-slate-400 leading-relaxed mb-10">
              GEO für Ihre Sichtbarkeit in der KI-Welt. Erfahren Sie, warum Wettbewerber in AI-Antworten auftauchen –
              und Sie nicht.
            </p>

            <div className="slide-in-left delay-4 flex gap-6 flex-wrap">
              <div className="flex flex-col items-start w-72">
                <a href="#" className="btn-primary w-full justify-center whitespace-nowrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Kick-off Call vereinbaren
                </a>
                <p className="micro-copy mt-2.5">30 Min · Ziele klären · direkt loslegen</p>
              </div>
              <div className="flex flex-col items-start w-72">
                <a href="#" className="btn-secondary w-full justify-center whitespace-nowrap">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    stroke="#a07c3a"
                    strokeWidth="2.5"
                    fill="none"
                    className="flex-shrink-0"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Kostenloser Blindspot-Check
                </a>
                <p className="micro-copy mt-2.5">3 Findings in 48h · per Video</p>
              </div>
            </div>
          </div>

          {/* Hero Visual - Dashboard Preview */}
          <div className="slide-in-right delay-3 relative">
            <div className="card glow bg-slate-800/80 p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-amber-900/10">
                <div className="w-3 h-3 rounded-full bg-amber-900/30" />
                <div className="w-3 h-3 rounded-full bg-amber-900/30" />
                <div className="w-3 h-3 rounded-full bg-amber-900/30" />
                <span className="ml-auto font-space-mono text-xs text-slate-500">GEO Dashboard</span>
              </div>

              {/* Mini Stats with Tooltips */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  {
                    label: 'AMCR',
                    value: '34%',
                    suffix: null,
                    tooltip:
                      'AI Mention Coverage Rate – Der Anteil der relevanten Fragen, bei denen Ihre Marke in KI-Antworten erwähnt wird.',
                  },
                  {
                    label: 'SOVAR',
                    value: '28%',
                    suffix: null,
                    tooltip:
                      'Share of Voice in AI Responses – Ihr Anteil an allen Markenerwähnungen im Vergleich zu Wettbewerbern.',
                  },
                  {
                    label: 'AI Readiness',
                    value: '44',
                    suffix: '/100',
                    tooltip: null,
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-slate-900/50 p-3.5 rounded-lg border border-amber-900/10 flex flex-col justify-center min-h-[70px]"
                  >
                    <p className="text-xs text-slate-500 font-space-mono mb-1 whitespace-nowrap border-b border-dashed border-amber-900/30 pb-1 inline-block">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-slate-200 whitespace-nowrap">
                      {stat.value}
                      {stat.suffix && <span className="text-xs font-normal text-slate-500">{stat.suffix}</span>}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini Chart */}
              <div className="bg-slate-900/50 p-5 rounded-lg border border-amber-900/10">
                <p className="text-xs text-slate-400 mb-4">AI Visibility Trend</p>
                <div className="flex items-end gap-3 h-20">
                  {[30, 35, 28, 42, 38, 55, 48, 62, 58, 72, 68, 85].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm transition-all ${
                        i >= 9 ? 'bg-gradient-to-t from-amber-700 to-amber-600' : 'bg-amber-900/20'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute bottom-[-30px] left-[-40px] bg-slate-800 border border-amber-900/30 rounded-lg px-4.5 py-3.5 flex items-center gap-3 shadow-2xl animate-float">
              <div className="w-9 h-9 bg-gradient-to-br from-amber-700 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a1a1f" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">ChatGPT Mention</p>
                <p className="text-xs text-slate-500">Ihre Marke wurde zitiert</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="animate-in delay-4 flex gap-16 mt-24 pt-12 border-t border-amber-900/10 justify-center">
          {[
            { value: '2 Wochen', label: 'Audit-Dauer' },
            { value: '2 Phasen', label: 'Discovery + Roadmap' },
            { value: '5 Bereiche', label: 'GAP-Analyse' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="stat-number text-5xl font-bold text-amber-700">{item.value}</p>
              <p className="text-sm text-slate-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 2: PROBLEM ==================== */}
      <section className="px-16 py-24 bg-slate-800/20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-16">
            <span className="section-label">Das Problem</span>
            <h2 className="text-4xl font-semibold mt-4 text-slate-200">Kennen Sie diese Situation?</h2>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Unsichtbar bei KI-Anfragen',
                text: 'Sie fragen ChatGPT „Welches [Produkt] ist empfehlenswert?" – drei Marken werden genannt. Ihre nicht. Dabei haben Sie das bessere Produkt.',
              },
              {
                title: 'Andere Spielregeln',
                text: 'Bei Google kennen Sie die Spielregeln. Bei KI-Systemen gelten andere – und ohne Analyse optimieren Sie ins Blaue.',
              },
              {
                title: 'Wo anfangen?',
                text: 'Alle reden von KI-Sichtbarkeit. Aber niemand sagt Ihnen, welche Maßnahme für Ihr Unternehmen den größten Hebel hat.',
              },
            ].map((scenario, i) => (
              <div key={i} className={`scenario-card animate-in delay-${i + 2}`}>
                <h3 className="text-lg font-semibold mb-3 text-slate-200">{scenario.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{scenario.text}</p>
              </div>
            ))}
          </div>

          {/* Transition to solution */}
          <div className="animate-in delay-4 bg-amber-900/10 border border-amber-900/15 rounded-xl p-12 text-center">
            <p className="text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
              Unser <strong className="text-amber-700 font-bold">GEO Strategic Audit</strong> gibt Ihnen Klarheit:
              Technische Analyse, GAP-Analyse in 5 Kernbereichen – von Schema über Content und E-E-A-T bis zu
              externen Signalen – und direkter Vergleich mit Wettbewerbern.{' '}
              <strong className="text-amber-700 font-bold">Keine Vermutungen – Daten.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: LÖSUNG ==================== */}
      <section id="audit" className="px-16 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-8">
            <span className="section-label">Die Lösung</span>
            <h2 className="text-4xl font-semibold mt-4 text-slate-200">
              Das GEO Strategic Audit: <span className="text-amber-700">Klarheit in 2 Wochen</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mt-5 max-w-2xl mx-auto">
              Sie wollen nicht raten. Sie wollen wissen: Wo stehen wir? Was müssen wir tun? Was bringt am meisten?
            </p>
          </div>

          {/* Deliverables as Bento Grid */}
          <div className="mb-12">
            <h3 className="slide-in-left text-xl font-semibold text-amber-700 mb-8 text-center">
              Nach dem Audit haben Sie:
            </h3>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-3 auto-rows-max gap-5">
              {/* Large Card - Left - AMCR & SOVAR */}
              <div className="animate-in delay-1 row-span-2 bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-900/20 rounded-2xl p-8 flex flex-col justify-between min-h-96 relative overflow-hidden">
                <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 rounded-full bg-amber-900/15 opacity-40" />
                <div className="absolute top-[-30px] right-[-30px] w-36 h-36 rounded-full bg-amber-700/10 opacity-30" />

                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold text-slate-200 leading-tight mb-4">AMCR & SOVAR Baseline</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Ihre erste Messung der KI-Sichtbarkeit – die Grundlage für alle weiteren Optimierungen. Sie
                    erfahren, bei wie vielen relevanten Fragen Ihre Marke erwähnt wird und wie Sie im Vergleich zu
                    Wettbewerbern abschneiden.
                  </p>
                </div>

                {/* Visual Element - Mini Dashboard */}
                <div className="relative z-10 bg-slate-800/60 rounded-lg p-5 border border-amber-900/10">
                  <div className="flex gap-4">
                    <div className="flex-1 text-center">
                      <p className="text-2xl font-bold text-amber-700">34%</p>
                      <p className="text-xs text-slate-500 font-space-mono">AMCR</p>
                    </div>
                    <div className="w-px bg-amber-900/20" />
                    <div className="flex-1 text-center">
                      <p className="text-2xl font-bold text-amber-700">28%</p>
                      <p className="text-xs text-slate-500 font-space-mono">SOVAR</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium Card - Top Middle - Technische Prüfung */}
              <div className="animate-in delay-2 bg-slate-800/50 border border-amber-900/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Technische Prüfung</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  Schema-Markup, robots.txt, Crawlbarkeit für KI-Bots – ohne solide technische Basis funktioniert GEO
                  nicht.
                </p>
                {/* Visual - Tech Stack */}
                <div className="flex gap-2 mt-auto">
                  {['schema.org', 'robots.txt', 'Pillar Pages'].map((tag, i) => (
                    <span key={i} className="text-xs text-amber-700 bg-amber-900/10 px-2.5 py-1 rounded font-space-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Small Card - Top Right - AI Readiness Score */}
              <div className="animate-in delay-3 bg-slate-800/50 border border-amber-900/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-slate-200 mb-3">AI Readiness Score</h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Wie gut ist Ihre Website für KI-Sichtbarkeit vorbereitet?
                </p>
                {/* Visual - Score Display */}
                <div className="mt-auto flex flex-col items-center gap-2 pt-4">
                  <div className="relative">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(160, 124, 58, 0.2)" strokeWidth="6" />
                      <circle
                        cx="40"
                        cy="40"
                        r="34"
                        fill="none"
                        stroke="#a07c3a"
                        strokeWidth="6"
                        strokeDasharray="213.6"
                        strokeDashoffset="120"
                        strokeLinecap="round"
                        transform="rotate(-90 40 40)"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-xl font-bold text-slate-200">44</span>
                      <span className="text-xs text-slate-500">/100</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 italic">Beispielwert</p>
                </div>
              </div>

              {/* Medium Card - Bottom Middle - Wettbewerber-Vergleich */}
              <div className="animate-in delay-4 bg-slate-800/50 border border-amber-900/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Wettbewerber-Vergleich</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Direkter Vergleich mit Ihren Top-Konkurrenten. Wo stehen Sie? Wo liegen die Lücken?
                </p>
                {/* Visual - Comparison Bars */}
                <div className="mt-auto flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 w-12">Sie</span>
                    <div className="flex-1 h-2 bg-amber-900/20 rounded overflow-hidden">
                      <div className="w-[35%] h-full bg-amber-900/60 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 w-12">Markt</span>
                    <div className="flex-1 h-2 bg-amber-900/20 rounded overflow-hidden">
                      <div className="w-[65%] h-full bg-gradient-to-r from-amber-700 to-amber-600 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Wide Card - Bottom Right - Priorisierte Roadmap */}
              <div className="animate-in delay-5 col-span-2 bg-gradient-to-br from-amber-900/10 to-slate-800/60 border border-amber-900/25 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-slate-200 mb-3">Priorisierte Roadmap</h4>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Maßnahmen mit dem größten Hebel – sortiert nach Impact und Aufwand.
                </p>
                {/* Visual - Priority List */}
                <div className="mt-auto">
                  <div className="inline-block bg-amber-900/15 border border-amber-900/30 rounded-lg px-4 py-2.5">
                    <span className="text-sm text-amber-700 font-medium">→ Quick Wins zuerst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: ABLAUF (Vertical Timeline) ==================== */}
      <section id="ablauf" className="px-16 py-24 bg-slate-800/20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="slide-in-left text-center mb-16">
            <span className="section-label">Der Prozess</span>
            <h2 className="text-4xl font-semibold mt-4 mb-4 text-slate-200">So läuft das Audit ab</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Das gesamte Audit dauert 2 Wochen – Ihr Aufwand in dieser Zeit: ca. 1-2 Stunden für Kick-off und
              Abschluss-Meeting. Den Rest übernehmen wir.
            </p>
          </div>

          {/* Vertical Timeline - Left aligned */}
          <div className="relative pl-16">
            {/* Gold vertical line */}
            <div className="absolute left-4.75 top-0 bottom-0 w-0.5 bg-amber-700 z-0" />

            {/* Steps */}
            <div className="flex flex-col gap-12">
              {[
                {
                  step: '1',
                  title: 'Kick-off Call',
                  text: 'Ziele, Zielgruppe, Wettbewerber definieren.',
                  duration: '30 Min',
                  details:
                    'Im Kick-off Call klären wir gemeinsam: Welche Ziele haben Sie? Wer ist Ihre Zielgruppe? Welche Wettbewerber sind relevant? Passt der Fit, starten wir direkt mit Phase 1.\nKein Vertriebsgespräch – wir legen sofort los.',
                },
                {
                  step: '2',
                  title: 'Discovery Audit',
                  text: 'Technische Prüfung, AI-Mention-Tests, Wettbewerbervergleich.',
                  duration: 'Woche 1',
                  details:
                    'Wir analysieren Ihre technische Infrastruktur, den Aufbau Ihrer Website und führen systematische AI-Mention-Tests auf ChatGPT, Perplexity und Google AI Overviews durch und vergleichen Ihre Sichtbarkeit mit der Ihrer Wettbewerber.',
                },
                {
                  step: '3',
                  title: 'Strategic Roadmap',
                  text: 'GAP-Analyse in 5 Bereichen, priorisierte Maßnahmen.',
                  duration: 'Woche 2',
                  details:
                    'Basierend auf den Discovery-Daten erstellen wir eine GAP-Analyse in 5 Kernbereichen: Brand Authority, Content-Qualität, technische Basis, externe Signale und E-E-A-T. Jede Maßnahme wird nach Impact und Aufwand priorisiert.',
                },
                {
                  step: '4',
                  title: 'Abschluss-Meeting',
                  text: 'Präsentation der Ergebnisse und klarer Plan.',
                  duration: '60 Min',
                  details:
                    'Im Abschluss-Meeting präsentieren wir alle Ergebnisse, beantworten Ihre Fragen und übergeben Ihnen die vollständige Dokumentation. Sie gehen mit einer klaren, priorisierten Roadmap – bereit für die Umsetzung.',
                },
              ].map((item, i) => (
                <div key={i} className={`animate-in delay-${i + 1} relative z-10`}>
                  {/* Step Number Circle - positioned on the line */}
                  <div className="absolute -left-16 top-0 w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center font-bold text-base text-slate-950 shadow-lg shadow-amber-700/40">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-slate-200">{item.title}</h3>
                      <span className="font-space-mono text-xs text-amber-700 bg-amber-900/10 px-2.5 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-base text-slate-400 leading-relaxed mb-2">{item.text}</p>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.details.split('\n').map((line, li) => (
                        <span key={li}>
                          {line}
                          {li < item.details.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: PAKETE & PREISE ==================== */}
      <section id="pakete" className="px-16 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-12">
            <span className="section-label">Investition</span>
            <h2 className="text-4xl font-semibold mt-4 text-slate-200">Unsere Pakete</h2>
          </div>

          {/* Jedes Audit-Paket enthält - Kurzform */}
          <div className="animate-in delay-1 bg-slate-800/50 border border-amber-900/15 rounded-xl p-8 mb-12">
            <h3 className="text-lg font-semibold text-amber-700 mb-6">Jedes Audit-Paket enthält:</h3>
            <div className="grid grid-cols-4 gap-6">
              {[
                'Kick-off Call',
                'Technische Analyse',
                'Website-Analyse',
                'AI-Mention-Baseline',
                'Wettbewerbervergleich',
                'Gap-Analyse',
                'Priorisierte Roadmap',
                'Abschluss-Meeting',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Der Unterschied */}
          <div className="animate-in delay-2 mb-6">
            <h3 className="text-lg font-semibold text-amber-700 mb-6 text-center">Der Unterschied:</h3>
          </div>

          {/* 3 Pakete nebeneinander: Core, Reputation, GEO Pulse */}
          <div className="animate-in delay-2 mb-12">
            <div className="grid grid-cols-3 gap-6">
              {/* Core - EMPFOHLEN */}
              <div className="package-card featured relative">
                <span className="featured-badge">EMPFOHLEN</span>
                <p className="font-space-mono text-xs text-slate-500 mb-2 tracking-wide uppercase">Core</p>

                <p className="text-5xl font-bold mb-4 text-slate-200">€6.500</p>

                <div className="bg-amber-900/10 px-3.5 py-2.5 rounded-lg mb-4 inline-block">
                  <p className="text-xs text-amber-700 font-medium">30 Prompts</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  <span className="text-slate-200 font-medium">Ideal für:</span> Unternehmen, die wissen wollen:
                  Werden wir erwähnt? Wo stehen wir vs. Wettbewerber? Was sind die größten Hebel?
                </p>

                <a href="#" className="btn-primary w-full justify-center mt-auto">
                  Paket wählen
                </a>
              </div>

              {/* Reputation */}
              <div className="package-card">
                <p className="font-space-mono text-xs text-slate-500 mb-2 tracking-wide uppercase">Reputation</p>

                <p className="text-5xl font-bold mb-4 text-slate-200">€7.500</p>

                <div className="bg-amber-900/10 px-3.5 py-2.5 rounded-lg mb-4 inline-block">
                  <p className="text-xs text-amber-700 font-medium">30 + 10 Sentiment-Prompts</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  <span className="text-slate-200 font-medium">Ideal für:</span> Unternehmen, die zusätzlich wissen
                  wollen: Wie spricht KI über uns? Positiv, neutral, kritisch?
                </p>

                <a href="#" className="btn-secondary w-full justify-center mt-auto">
                  Paket wählen
                </a>
              </div>

              {/* GEO Pulse */}
              <div className="package-card bg-gradient-to-br from-amber-900/10 to-slate-800/60">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <p className="font-space-mono text-xs text-slate-500 tracking-wide uppercase">GEO Pulse</p>
                </div>

                <p className="text-5xl font-bold mb-4 text-slate-200">
                  €1.500<span className="text-base text-slate-400 font-normal">/Quartal</span>
                </p>

                <div className="bg-amber-900/10 px-3.5 py-2.5 rounded-lg mb-4 inline-block">
                  <p className="text-xs text-amber-700 font-medium">Folgeprodukt</p>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  KI-Sichtbarkeit verändert sich. Mit dem Pulse Check behalten Sie den Überblick – quartalsweise.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {['AMCR-Messung', 'Monitoring', 'Empfehlungen'].map((item, i) => (
                    <span key={i} className="text-xs text-slate-200 bg-amber-900/15 px-2 py-1 rounded">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-slate-500 mb-6">Nach abgeschlossenem Core oder Reputation Audit</p>

                <a href="#" className="btn-secondary w-full justify-center mt-auto">
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>

          {/* Hinweis */}
          <div className="animate-in delay-3 bg-amber-900/10 border border-amber-900/15 rounded-lg p-7 text-center">
            <p className="text-sm text-slate-400 leading-relaxed">
              <span className="text-amber-700">Hinweis:</span> Bei mehreren Märkten oder Sprachen ist für jeden Markt ein
              separates Audit notwendig. Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: BLINDSPOT CHECK ==================== */}
      <section className="px-16 py-24 bg-slate-800/20 relative z-10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full bg-amber-900/5 pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Kostenlos</span>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-20 items-center">
            {/* Left Column - Headline & Description */}
            <div className="slide-in-left">
              <h2 className="text-4xl font-semibold mb-6 text-slate-200 leading-tight">
                Zu abstrakt? Starten Sie mit dem kostenlosen{' '}
                <span className="text-amber-700">Blindspot Check</span>.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Wir prüfen Ihre Website, zeigen Ihnen in einem persönlichen Video, wo Sie in KI-Antworten stehen - und
                wie wir bei Ihrem Audit konkret weitermachen würden.
              </p>

              <a href="#" className="btn-primary text-base px-9 py-4.5">
                Kostenloser Blindspot-Check
              </a>
              <p className="micro-copy mt-4">Kostenlos · Keine Verpflichtung · Ergebnis in 48h</p>
            </div>

            {/* Right Column - Was Sie bekommen */}
            <div className="slide-in-right">
              <h3 className="text-lg font-semibold text-amber-700 mb-7">Was Sie bekommen:</h3>

              <div className="flex flex-col gap-5">
                {[
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    ),
                    text: 'Können KI-Systeme Ihre Website überhaupt lesen?',
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    ),
                    text: 'Versteht ChatGPT, worum es auf Ihrer Website geht?',
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="1.5">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                      </svg>
                    ),
                    text: 'Werden Sie bei typischen Kundenfragen erwähnt?',
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="1.5">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                    ),
                    text: 'Persönliches Video mit Ihren 3 wichtigsten Findings',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`animate-in delay-${i + 1} flex items-start gap-4 bg-slate-800/50 border border-amber-900/15 rounded-lg p-5 transition-all`}
                  >
                    <div className="w-11 h-11 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed pt-2.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: ÜBER UNS ==================== */}
      <section className="px-16 py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Das Team</span>
            <h2 className="slide-in-left text-4xl font-semibold mt-4 text-slate-200">
              Wer steckt hinter <span className="text-amber-700">The Visibility Shift</span>?
            </h2>
          </div>

          <div className="card p-12">
            <div className="grid grid-cols-3 gap-12 items-start">
              {/* Zwei Foto-Platzhalter nebeneinander */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-5">
                  {/* Foto 1 - Yasmin */}
                  <div className="flex-1">
                    <div className="w-full aspect-square bg-slate-800/80 rounded-xl border border-amber-900/20 flex items-center justify-center mb-3">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a7a7e" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-200 text-center mb-2">Yasmin</p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="w-8 h-8 bg-amber-900/10 border border-amber-900/20 rounded flex items-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#a07c3a">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Foto 2 - Alex */}
                  <div className="flex-1">
                    <div className="w-full aspect-square bg-slate-800/80 rounded-xl border border-amber-900/20 flex items-center justify-center mb-3">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#5a7a7e" strokeWidth="1.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="text-sm font-semibold text-slate-200 text-center mb-2">Alex</p>
                    <div className="flex justify-center">
                      <a
                        href="#"
                        className="w-8 h-8 bg-amber-900/10 border border-amber-900/20 rounded flex items-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#a07c3a">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-lg text-slate-200 leading-relaxed mb-6">
                  Wir sind <strong>Yasmin</strong> und <strong>Alex</strong> – und wir bringen Struktur in ein Thema, das
                  gerade noch wenige wirklich verstehen.
                </p>
                <p className="text-base text-slate-400 leading-relaxed mb-6">
                  <span className="text-amber-700 font-semibold">Unser Hintergrund:</span> Audits. Nicht
                  Marketing-Audits, sondern IATF, ISO und VDA 6.3 – Prozesse, bei denen Systematik keine Option ist,
                  sondern Voraussetzung.
                </p>
                <p className="text-base text-slate-400 leading-relaxed mb-6">
                  <span className="text-amber-700 font-semibold">GEO ist ein neues Feld.</span> Unser Ansatz: testen,
                  messen, lernen. Das Ergebnis: eigene Metriken, dokumentierte Prozesse, eine Methodik, die funktioniert.
                </p>
                <p className="text-base text-slate-400 leading-relaxed mb-8">
                  Für Sie bedeutet das: keine vagen Empfehlungen, sondern nachvollziehbare Analyse und priorisierte
                  Maßnahmen.
                </p>
                <div className="border-l-4 border-amber-700 pl-5">
                  <p className="text-sm text-amber-700 font-bold">
                    „Kein Buzzword-Bingo. Daten, Systematik und ein klarer Plan."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: FAQ ==================== */}
      <section id="faq" className="px-16 py-24 bg-slate-800/20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label">Wissen</span>
            <h2 className="slide-in-left text-4xl font-semibold mt-4 text-slate-200">Fragen & Antworten zu GEO</h2>
          </div>

          {faqItems.map((faq, i) => (
            <div key={i} className="faq-item">
              <div
                className="faq-question cursor-pointer"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-base font-medium text-slate-200 pr-4">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a07c3a"
                  strokeWidth="2"
                  style={{
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
              <div className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="px-16 py-24 bg-gradient-to-r from-amber-900/10 to-slate-950/95 border-t border-amber-900/15 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-semibold mb-10 text-slate-200">
            Bereit für den <span className="text-amber-700">Visibility Shift</span>?
          </h2>
          <a href="#" className="btn-primary text-base px-9 py-4.5 inline-flex items-center gap-4.5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Kick-off Call vereinbaren
          </a>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-16 py-12 border-t border-amber-900/10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3.5">
              <svg width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#a07c3a" strokeWidth="4" opacity="0.4" />
                <circle cx="50" cy="50" r="32" fill="none" stroke="#a07c3a" strokeWidth="4" />
                <circle cx="50" cy="50" r="16" fill="#a07c3a" />
                <circle cx="78" cy="22" r="8" fill="#a07c3a" />
              </svg>
              <span className="text-sm font-semibold text-slate-200">The Visibility Shift</span>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="/impressum" className="nav-link">
                Impressum
              </a>
              <a href="/datenschutz" className="nav-link">
                Datenschutz
              </a>
              <a href="/cookies" className="nav-link">
                Cookies
              </a>
              <a href="https://www.linkedin.com/company/thevisibilityshift" className="nav-link">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-amber-900/10">
            <p className="text-xs text-slate-600">© 2026 NEELTIZ Consulting - FZCO. Alle Rechte vorbehalten.</p>
            <a href="#" className="text-xs text-amber-700 hover:text-amber-600 flex items-center gap-1.5">
              Wir stellen ein →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
