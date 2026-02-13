import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SeoVsGeoSection from '../components/SeoVsGeoSection'

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
    name: 'The Visibility Shift – GEO Discovery Audit',
    description:
      'Werden Sie in KI-Antworten erwähnt? Mit unserem GEO Discovery Audit finden Sie es heraus. Für SaaS & E-Commerce im DACH-Raum.',
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
    serviceType: 'GEO Discovery Audit',
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
          text: 'SEO optimiert für Google-Rankings – Sie erscheinen in den Suchergebnissen. GEO optimiert für KI-Zitierungen – Sie werden in der Antwort selbst erwähnt. Die Faktoren unterscheiden sich: Bei SEO zählen Keywords und Backlinks stark. Bei GEO sind Brand Authority, strukturierte Daten und Zitierfähigkeit des Contents entscheidender. Vergleich: Ziel: SEO = Rankings, GEO = KI-Zitierung. Metrik: SEO = CTR/Keywords, GEO = AMCR/SOVAR. Stärkster Faktor: SEO = Content + Backlinks, GEO = Brand Authority + externe Signale. Erwähnungen: SEO = nur mit Link, GEO = auch ohne Link. Bewertungsportale: SEO = sekundär, GEO = Vertrauenssignal.',
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
        name: 'Was ist die AMCR – AI Mention Coverage Rate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Die AMCR (AI Mention Coverage Rate) misst den Anteil der relevanten Fragen, bei denen Ihre Marke in KI-Antworten erwähnt wird. Sie ist die zentrale Metrik zur Messung der KI-Sichtbarkeit und bildet die Grundlage für jedes GEO-Audit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist SOVAR – Share of Voice in AI Responses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SOVAR (Share of Voice in AI Responses) zeigt Ihren Anteil an allen Markenerwähnungen in KI-Antworten im Vergleich zu Wettbewerbern. Die Metrik macht sichtbar, wie dominant Ihre Marke im KI-Kontext ist – und wo die Konkurrenz stärker vertreten ist.',
        },
      },
    ],
  },
}

const faqItems = [
  {
    q: 'Was ist GEO – Generative Engine Optimization?',
    a: 'GEO (Generative Engine Optimization) ist die systematische Optimierung von Websites und Inhalten für KI-gestützte Suchsysteme wie ChatGPT, Perplexity und Google AI Overviews. Ziel ist es, dass Ihre Marke in KI-generierten Antworten zitiert und empfohlen wird. Anders als bei SEO geht es nicht um Rankings, sondern um Zitierfähigkeit.',
  },
  {
    q: 'Was ist der Unterschied zwischen SEO und GEO?',
    a: 'SEO optimiert für Google-Rankings – Sie erscheinen in den Suchergebnissen. GEO optimiert für KI-Zitierungen – Sie werden in der Antwort selbst erwähnt. Die Faktoren unterscheiden sich: Bei SEO zählen Keywords und Backlinks stark. Bei GEO sind Brand Authority, strukturierte Daten und Zitierfähigkeit des Contents entscheidender.',
    table: true,
  },
  {
    q: 'Wie misst man KI-Sichtbarkeit?',
    a: 'KI-Sichtbarkeit wird über systematische Tests gemessen. Zwei zentrale Metriken sind AMCR (AI Mention Coverage Rate) – der Anteil der relevanten Fragen, bei denen Ihre Marke erwähnt wird – und SOVAR (Share of Voice in AI Responses) – Ihr Anteil an allen Markenerwähnungen im Vergleich zu Wettbewerbern.',
  },
  {
    q: 'Was ist die AMCR – AI Mention Coverage Rate?',
    a: 'Die AMCR (AI Mention Coverage Rate) misst den Anteil der relevanten Fragen, bei denen Ihre Marke in KI-Antworten erwähnt wird. Sie ist die zentrale Metrik zur Messung der KI-Sichtbarkeit und bildet die Grundlage für jedes GEO-Audit.',
    dl: true,
    dtText: 'AMCR – AI Mention Coverage Rate',
    ddText: 'Der Anteil der relevanten Fragen, bei denen Ihre Marke in KI-Antworten erwähnt wird. Zentrale Metrik zur Messung der KI-Sichtbarkeit.',
  },
  {
    q: 'Was ist SOVAR – Share of Voice in AI Responses?',
    a: 'SOVAR (Share of Voice in AI Responses) zeigt Ihren Anteil an allen Markenerwähnungen in KI-Antworten im Vergleich zu Wettbewerbern. Die Metrik macht sichtbar, wie dominant Ihre Marke im KI-Kontext ist – und wo die Konkurrenz stärker vertreten ist.',
    dl: true,
    dtText: 'SOVAR – Share of Voice in AI Responses',
    ddText: 'Ihr Anteil an allen Markenerwähnungen in KI-Antworten im Vergleich zu Wettbewerbern. Zeigt, wie dominant Ihre Marke im KI-Kontext ist.',
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
    q: 'Was ist der GEO Pulse?',
    a: 'Der GEO Pulse ist unser Folgeprodukt nach dem initialen Audit. Für €1.500 pro Quartal erhalten Sie eine regelmäßige AMCR-Messung, Wettbewerber-Monitoring und neue priorisierte Empfehlungen. So bleiben Sie auf dem Laufenden, wenn sich die KI-Landschaft verändert.',
  },
]

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeModal, setActiveModal] = useState(null) // 'blindspot' | 'angebot' | 'karriere' | null

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeModal])

  // Load Tally embed script for dynamic height
  useEffect(() => {
    if (document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  const openBlindspotForm = () => setActiveModal('blindspot')
  const openAngebotForm = () => setActiveModal('angebot')
  const openKarriereModal = () => setActiveModal('karriere')
  const closeModal = () => setActiveModal(null)

  useEffect(() => {
    // Inject page-specific Schema.org JSON-LD
    const schemas = [schemaData.organization, schemaData.webPage, schemaData.services, schemaData.faqPage]
    const scripts = []

    schemas.forEach((schema, index) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(schema)
      script.id = `home-schema-${index}`
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

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-[#e2e8f0] overflow-hidden relative">
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
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-16 py-4 transition-all duration-300 ${scrolled ? 'bg-[#0a1a1f]/90 backdrop-blur-lg border-b border-[#a07c3a]/10 shadow-lg shadow-black/20' : 'bg-transparent border-b border-transparent'}`}>
        <div className="flex items-center gap-3.5">
          {/* Logo */}
          <svg width="36" height="36" viewBox="0 0 100 100" className="flex-shrink-0">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#a07c3a" strokeWidth="4" opacity="0.4" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#a07c3a" strokeWidth="4" />
            <circle cx="50" cy="50" r="16" fill="#a07c3a" />
            <circle cx="78" cy="22" r="8" fill="#a07c3a" />
          </svg>
          <span className="text-sm font-semibold tracking-tight text-[#e2e8f0]">The Visibility Shift</span>
        </div>
        <div className="flex gap-9 text-sm">
          <a href="#audit" className="nav-link">Audit</a>
          <a href="#ablauf" className="nav-link">Ablauf</a>
          <a href="#pakete" className="nav-link">Pakete</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </div>
        <a href="https://cal.meetergo.com/alexanderneitzel/15-min-meeting-alexanderneitzel" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2.5 text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
          Erstgespräch vereinbaren
        </a>
      </nav>


      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="px-6 md:px-16 pt-28 pb-20 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div>
            <p className="slide-in-left delay-1 text-xs text-[#a07c3a] tracking-widest uppercase mb-6">
              von unsichtbar zu zitiert
            </p>

            <h1 className="slide-in-left delay-2 text-5xl font-bold leading-tight mb-6 text-[#e2e8f0]">
              Ihre Kunden fragen ChatGPT.{' '}
              <span className="text-[#a07c3a]">Werden Sie empfohlen?</span>
            </h1>

            <p className="slide-in-left delay-3 text-lg text-[#7a9a9e] leading-relaxed mb-10">
              GEO für Ihre Sichtbarkeit in der KI-Welt. Erfahren Sie, warum Wettbewerber in AI-Antworten auftauchen –
              und Sie nicht.
            </p>

            <div className="slide-in-left delay-4 flex gap-6 flex-wrap">
              <div className="flex flex-col items-center w-72">
                <a href="https://cal.meetergo.com/alexanderneitzel/15-min-meeting-alexanderneitzel" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center whitespace-nowrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Erstgespräch vereinbaren
                </a>
                <p className="micro-copy mt-2.5 text-center">15 min · Pains & Ziele besprechen</p>
              </div>
              <div className="flex flex-col items-center w-72">
                <button onClick={openBlindspotForm} className="btn-secondary w-full justify-center whitespace-nowrap">
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
                </button>
                <p className="micro-copy mt-2.5 text-center">3 Findings in 48h · per Gespräch</p>
              </div>
            </div>
          </div>

          {/* Hero Visual - Dashboard Preview */}
          <div className="slide-in-right delay-3 relative">
            <div className="card glow bg-[#0f2a32]/80 p-6">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#a07c3a]/10">
                <div className="w-3 h-3 rounded-full bg-[#a07c3a]/30" />
                <div className="w-3 h-3 rounded-full bg-[#a07c3a]/30" />
                <div className="w-3 h-3 rounded-full bg-[#a07c3a]/30" />
                <span className="ml-auto text-xs text-[#7a9a9e]">GEO Dashboard</span>
              </div>

              {/* Mini Stats with Tooltips */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  {
                    label: 'AMCR',
                    value: '34%',
                    suffix: null,
                    tooltip: 'AI Mention Coverage Rate – Der Anteil der relevanten Fragen, bei denen Ihre Marke in KI-Antworten erwähnt wird.',
                  },
                  {
                    label: 'SOVAR',
                    value: '28%',
                    suffix: null,
                    tooltip: 'Share of Voice in AI Responses – Ihr Anteil an allen Markenerwähnungen im Vergleich zu Wettbewerbern.',
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
                    className="bg-[#0a1a1f]/50 p-3.5 rounded-lg border border-[#a07c3a]/10 flex flex-col justify-center min-h-[70px]"
                  >
                    <p className="text-xs text-[#7a9a9e] mb-1 whitespace-nowrap border-b border-dashed border-[#a07c3a]/30 pb-1 inline-block">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-[#e2e8f0] whitespace-nowrap">
                      {stat.value}
                      {stat.suffix && <span className="text-xs font-normal text-[#7a9a9e]">{stat.suffix}</span>}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#5a7a7e] italic text-center -mt-2 mb-4">Beispielwerte – Ihre Daten ermitteln wir im Audit</p>

              {/* Mini Chart */}
              <div className="bg-[#0a1a1f]/50 p-5 rounded-lg border border-[#a07c3a]/10">
                <p className="text-xs text-[#7a9a9e] mb-4">AI Visibility Trend</p>
                <div className="flex items-end gap-3 h-20">
                  {[30, 35, 28, 42, 38, 55, 48, 62, 58, 72, 68, 85].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm transition-all ${
                        i >= 9 ? 'bg-gradient-to-t from-[#a07c3a] to-[#a07c3a]' : 'bg-[#a07c3a]/20'
                      }`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating notification */}
            <div className="absolute bottom-[-30px] left-[-40px] bg-[#0f2a32] border border-[#a07c3a]/30 rounded-lg px-4 py-3.5 flex items-center gap-3 shadow-2xl animate-float">
              <div className="w-9 h-9 bg-gradient-to-br from-[#a07c3a] to-[#a07c3a] rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a1a1f" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#e2e8f0]">ChatGPT Mention</p>
                <p className="text-xs text-[#7a9a9e]">Ihre Marke wurde zitiert</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="animate-in delay-4 flex gap-16 mt-24 pt-12 border-t border-[#a07c3a]/10 justify-center">
          {[
            { value: '2 Wochen', label: 'Analyse-Dauer' },
            { value: '2 Phasen', label: 'Discovery Audit + Strategic Roadmap' },
            { value: '5 Bereiche', label: 'GAP-Analyse' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <p className="stat-number text-5xl font-bold text-[#a07c3a]">{item.value}</p>
              <p className="text-sm text-[#7a9a9e] mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== SECTION 2: PROBLEM ==================== */}
      <section aria-label="Das Problem" className="px-6 md:px-16 py-24 bg-[#0f2a32]/40 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-16">
            <span className="section-label" aria-hidden="true">Das Problem</span>
            <h2 className="text-4xl font-semibold mt-4 text-[#e2e8f0]">Kennen Sie diese Situation?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Unsichtbar bei KI-Anfragen',
                text: 'Sie fragen ChatGPT „Welches [Produkt] ist empfehlenswert?" – drei Marken werden genannt. Ihre nicht. Dabei haben Sie das bessere Produkt.',
              },
              {
                title: 'Andere Spielregeln',
                text: '37 % der Verbraucher starten Suchen bereits mit KI statt Google (Search Engine Land, Jan 2026). Bei KI-Systemen gelten andere Spielregeln – und ohne Analyse optimieren Sie ins Blaue.',
              },
              {
                title: 'Wo anfangen?',
                text: 'Alle reden von KI-Sichtbarkeit. Aber niemand sagt Ihnen, welche Maßnahme für Ihr Unternehmen den größten Hebel hat.',
              },
            ].map((scenario, i) => (
              <div key={i} className={`scenario-card animate-in delay-${i + 2}`}>
                <h3 className="text-lg font-semibold mb-3 text-[#e2e8f0]">{scenario.title}</h3>
                <p className="text-sm text-[#7a9a9e] leading-relaxed">{scenario.text}</p>
              </div>
            ))}
          </div>

          {/* Transition to solution */}
          <div className="animate-in delay-4 bg-[#a07c3a]/10 border border-[#a07c3a]/15 rounded-xl p-12 text-center">
            <p className="text-lg text-[#e2e8f0] leading-relaxed max-w-3xl mx-auto">
              Unser <strong className="text-[#a07c3a] font-bold">GEO Discovery Audit</strong> gibt Ihnen Klarheit:
              Technische Analyse, GAP-Analyse in 5 Kernbereichen – von Schema über Content und E-E-A-T bis zu
              externen Signalen – und direkter Vergleich mit Wettbewerbern.{' '}
              <strong className="text-[#a07c3a] font-bold">Keine Vermutungen – Daten.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION: SEO vs. GEO ==================== */}
      <SeoVsGeoSection />

      {/* ==================== SECTION DIVIDER ==================== */}
      <div className="relative z-10 max-w-5xl mx-auto px-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#a07c3a]/30 to-transparent" />
      </div>

      {/* ==================== SECTION 3: LÖSUNG ==================== */}
      <section id="audit" aria-label="Die Lösung" className="px-6 md:px-16 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-8">
            <span className="section-label" aria-hidden="true">Die Lösung</span>
            <h2 className="text-4xl font-semibold mt-4 text-[#e2e8f0]">
              Das Discovery Audit: <span className="text-[#a07c3a]">Klarheit in 2 Wochen</span>
            </h2>
            <p className="text-lg text-[#7a9a9e] leading-relaxed mt-5 max-w-2xl mx-auto">
              Sie wollen nicht raten. Sie wollen wissen: Wo stehen wir? Was müssen wir tun? Was bringt am meisten?
            </p>
          </div>

          {/* Deliverables as Bento Grid */}
          <div className="mb-12">
            <h3 className="slide-in-left text-xl font-semibold text-[#a07c3a] mb-8 text-center">
              Nach dem Audit haben Sie:
            </h3>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-5">
              {/* Large Card - Left - AMCR & SOVAR */}
              <div className="animate-in delay-1 row-span-2 bg-gradient-to-br from-[#0a1a1f] to-[#0f2a32] border border-[#a07c3a]/20 rounded-2xl p-8 flex flex-col justify-between min-h-96 relative overflow-hidden">
                <div className="absolute bottom-[-50px] left-[-50px] w-48 h-48 rounded-full bg-[#a07c3a]/15 opacity-40" />
                <div className="absolute top-[-30px] right-[-30px] w-36 h-36 rounded-full bg-[#a07c3a]/10 opacity-30" />

                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold text-[#e2e8f0] leading-tight mb-4">AMCR & SOVAR Baseline</h4>
                  <p className="text-sm text-[#7a9a9e] leading-relaxed">
                    Ihre erste Messung der KI-Sichtbarkeit – die Grundlage für alle weiteren Optimierungen. Sie
                    erfahren, bei wie vielen relevanten Fragen Ihre Marke erwähnt wird und wie Sie im Vergleich zu
                    Wettbewerbern abschneiden.
                  </p>
                </div>

                {/* Visual Element - Mini Dashboard */}
                <div className="relative z-10 bg-[#0f2a32]/60 rounded-lg p-5 border border-[#a07c3a]/10">
                  <div className="flex gap-4">
                    <div className="flex-1 text-center">
                      <p className="text-2xl font-bold text-[#a07c3a]">34%</p>
                      <p className="text-xs text-[#7a9a9e]">AMCR</p>
                    </div>
                    <div className="w-px bg-[#a07c3a]/20" />
                    <div className="flex-1 text-center">
                      <p className="text-2xl font-bold text-[#a07c3a]">28%</p>
                      <p className="text-xs text-[#7a9a9e]">SOVAR</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#5a7a7e] italic text-center mt-3">Beispielwerte</p>
                </div>
              </div>

              {/* Medium Card - Top Middle - Technische Prüfung */}
              <div className="animate-in delay-2 bg-[#0f2a32]/50 border border-[#a07c3a]/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-3">Technische Prüfung</h4>
                <p className="text-sm text-[#7a9a9e] leading-relaxed mb-5">
                  Schema-Markup, robots.txt, Crawlbarkeit für KI-Bots – ohne solide technische Basis funktioniert GEO
                  nicht.
                </p>
                {/* Visual - Tech Stack */}
                <div className="flex gap-2 mt-auto">
                  {['schema.org', 'robots.txt', 'Pillar Pages'].map((tag, i) => (
                    <span key={i} className="text-xs text-[#a07c3a] bg-[#a07c3a]/10 px-2.5 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Small Card - Top Right - AI Readiness Score */}
              <div className="animate-in delay-3 bg-[#0f2a32]/50 border border-[#a07c3a]/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-3">AI Readiness Score</h4>
                <p className="text-sm text-[#7a9a9e] leading-relaxed">
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
                      <span className="text-xl font-bold text-[#e2e8f0]">44</span>
                      <span className="text-xs text-[#7a9a9e]">/100</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#7a9a9e] italic">Beispielwert</p>
                </div>
              </div>

              {/* Medium Card - Bottom Middle - Wettbewerber-Vergleich */}
              <div className="animate-in delay-4 bg-[#0f2a32]/50 border border-[#a07c3a]/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-3">Wettbewerber-Vergleich</h4>
                <p className="text-sm text-[#7a9a9e] leading-relaxed mb-4">
                  Direkter Vergleich mit Ihren Top-Konkurrenten. Wo stehen Sie? Wo liegen die Lücken?
                </p>
                {/* Visual - Comparison Bars */}
                <div className="mt-auto flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#7a9a9e] w-12">Sie</span>
                    <div className="flex-1 h-2 bg-[#a07c3a]/20 rounded overflow-hidden">
                      <div className="w-[35%] h-full bg-[#a07c3a]/60 rounded" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#7a9a9e] w-12">Markt</span>
                    <div className="flex-1 h-2 bg-[#a07c3a]/20 rounded overflow-hidden">
                      <div className="w-[65%] h-full bg-gradient-to-r from-[#a07c3a] to-[#a07c3a] rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card - Bottom Right - Priorisierte Roadmap */}
              <div className="animate-in delay-5 bg-[#0f2a32]/50 border border-[#a07c3a]/15 rounded-2xl p-7 flex flex-col">
                <h4 className="text-lg font-semibold text-[#e2e8f0] mb-3">Priorisierte Roadmap</h4>
                <p className="text-sm text-[#7a9a9e] leading-relaxed mb-4">
                  Maßnahmen mit dem größten Hebel – sortiert nach Impact und Aufwand.
                </p>
                {/* Visual - Priority List */}
                <div className="mt-auto">
                  <span className="text-sm text-[#a07c3a] font-medium">✓ Quick Wins zuerst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: ABLAUF (Vertical Timeline) ==================== */}
      <section id="ablauf" aria-label="Der Prozess" className="px-6 md:px-16 py-24 bg-[#0f2a32]/40 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="slide-in-left text-center mb-16">
            <span className="section-label" aria-hidden="true">Der Prozess</span>
            <h2 className="text-4xl font-semibold mt-4 mb-4 text-[#e2e8f0]">So läuft das Audit ab</h2>
            <p className="text-lg text-[#7a9a9e] max-w-2xl mx-auto">
              Das gesamte Audit dauert 2 Wochen – Ihr Aufwand in dieser Zeit: ca. 1-2 Stunden für Kick-off und
              Abschluss-Meeting. Den Rest übernehmen wir.
            </p>
          </div>

          {/* Vertical Timeline - Left aligned */}
          <div className="relative pl-16">
            {/* Gold vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#a07c3a] z-0" />

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
                  <div className="absolute -left-16 top-0 w-10 h-10 bg-[#a07c3a] rounded-full flex items-center justify-center font-bold text-base text-[#0a1a1f] shadow-lg shadow-[#a07c3a]/40">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-baseline gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#e2e8f0]">{item.title}</h3>
                      <span className="text-xs text-[#a07c3a] bg-[#a07c3a]/10 px-2.5 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-base text-[#7a9a9e] leading-relaxed mb-2">{item.text}</p>
                    <p className="text-sm text-[#7a9a9e] leading-relaxed">
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

      {/* ==================== SECTION 5: INVESTITION ==================== */}
      <section id="pakete" aria-label="Investition" className="px-6 md:px-16 py-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="slide-in-left text-center mb-14">
            <span className="section-label" aria-hidden="true">Investition</span>
            <h2 className="text-4xl font-bold mt-4 text-[#e2e8f0]">Unsere Pakete</h2>
          </div>

          {/* 3 Produkt-Kacheln */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* ── CORE ── */}
            <div className="animate-in delay-1 relative bg-[#0f2a32]/60 backdrop-blur-sm border border-[#a07c3a]/35 rounded-xl px-7 pt-9 pb-8 flex flex-col transition-all duration-300 hover:border-[#a07c3a]/50" style={{ boxShadow: '0 0 40px rgba(160, 124, 58, 0.10), 0 0 80px rgba(160, 124, 58, 0.04)' }}>
              <div className="absolute -top-3 left-7">
                <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded text-[#0a1a1f]" style={{ background: 'linear-gradient(135deg, #8a6a30 0%, #a07c3a 100%)' }}>Empfohlen</span>
              </div>

              {/* Card Top - fixed height for alignment */}
              <div className="min-h-[148px] flex flex-col">
                <h3 className="text-[26px] font-bold text-[#a07c3a] mb-3">Core</h3>
                <p className="text-sm text-[#7a9a9e] leading-relaxed flex-1">
                  <strong className="text-[#e2e8f0] font-semibold">Ideal für</strong> Unternehmen, die wissen wollen: Werden wir erwähnt? Wo stehen wir? Was sind die größten Hebel?
                </p>
              </div>

              <div className="w-full h-px my-5" style={{ background: 'rgba(160, 124, 58, 0.18)' }} />

              {/* Features */}
              <ul className="flex flex-col gap-0 mb-7 flex-1">
                {[
                  { bold: 'Discovery Audit', text: ' – Technische Prüfung, Website-Analyse, AI-Mention-Baseline' },
                  { bold: 'Wettbewerbsanalyse', text: ' – Direkter Vergleich Ihrer KI-Sichtbarkeit' },
                  { bold: 'Strategische Roadmap', text: ' – Gap-Analyse, priorisierte Maßnahmen' },
                  { bold: 'Abschlussmeeting', text: ' – Präsentation, Q&A, Dokumentation' },
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 py-1.5 text-[13px] text-[#7a9a9e] leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#a07c3a]/8 border border-[#a07c3a]/20 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span><strong className="text-[#e2e8f0] font-semibold">{feat.bold}</strong>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <button onClick={openAngebotForm} className="block w-full text-center py-3.5 text-sm font-semibold rounded-lg text-[#0a1a1f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(160,124,58,0.3)] cursor-pointer" style={{ background: 'linear-gradient(135deg, #8a6a30 0%, #a07c3a 100%)' }}>
                Unverbindliches Angebot einholen
              </button>
            </div>

            {/* ── REPUTATION ── */}
            <div className="animate-in delay-2 bg-[#0f2a32]/60 backdrop-blur-sm border border-[#a07c3a]/35 rounded-xl px-7 pt-9 pb-8 flex flex-col transition-all duration-300 hover:border-[#a07c3a]/50" style={{ boxShadow: '0 0 40px rgba(160, 124, 58, 0.10), 0 0 80px rgba(160, 124, 58, 0.04)' }}>

              <div className="min-h-[148px] flex flex-col">
                <h3 className="text-[26px] font-bold text-[#a07c3a] mb-3">Reputation</h3>
                <p className="text-sm text-[#7a9a9e] leading-relaxed flex-1">
                  <strong className="text-[#e2e8f0] font-semibold">Ideal für</strong> Unternehmen, die zusätzlich wissen wollen: <strong className="text-[#e2e8f0] font-semibold">Wie</strong> spricht KI über uns? Positiv, neutral, kritisch?
                </p>
              </div>

              <div className="w-full h-px my-5" style={{ background: 'rgba(160, 124, 58, 0.18)' }} />

              <span className="inline-block text-xs text-[#a07c3a] font-medium border border-[#a07c3a]/20 bg-[#a07c3a]/6 px-3.5 py-1.5 rounded mb-5">Alles aus Core, zusätzlich:</span>

              <ul className="flex flex-col gap-0 mb-7 flex-1">
                {[
                  { bold: 'Sentiment-Analyse', text: ' – Wie KI über Ihre Marke spricht' },
                  { bold: 'Tonalität-Bewertung', text: ' – Positiv, neutral oder kritisch?' },
                  { bold: 'Reputationsrisiken', text: ' – Kritische Darstellungen identifiziert' },
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 py-1.5 text-[13px] text-[#7a9a9e] leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#a07c3a]/8 border border-[#a07c3a]/20 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span><strong className="text-[#e2e8f0] font-semibold">{feat.bold}</strong>{feat.text}</span>
                  </li>
                ))}
              </ul>

              <button onClick={openAngebotForm} className="block w-full text-center py-3.5 text-sm font-semibold rounded-lg text-[#0a1a1f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(160,124,58,0.3)] cursor-pointer" style={{ background: 'linear-gradient(135deg, #8a6a30 0%, #a07c3a 100%)' }}>
                Unverbindliches Angebot einholen
              </button>
            </div>

            {/* ── GEO PULSE ── */}
            <div className="animate-in delay-3 bg-[#0f2a32]/60 backdrop-blur-sm border border-[#a07c3a]/35 rounded-xl px-7 pt-9 pb-8 flex flex-col transition-all duration-300 hover:border-[#a07c3a]/50" style={{ boxShadow: '0 0 40px rgba(160, 124, 58, 0.10), 0 0 80px rgba(160, 124, 58, 0.04)' }}>

              <div className="min-h-[148px] flex flex-col">
                <h3 className="text-[26px] font-bold text-[#a07c3a] mb-3">GEO Pulse</h3>
                <p className="text-sm text-[#7a9a9e] leading-relaxed flex-1">
                  KI-Sichtbarkeit verändert sich. Mit dem Pulse Check behalten Sie den Überblick – quartalsweise.
                </p>
              </div>

              <div className="w-full h-px my-5" style={{ background: 'rgba(160, 124, 58, 0.18)' }} />

              <p className="text-xs text-[#5a7a7e] italic mb-5">Folgeprodukt nach abgeschlossenem Core oder Reputation Audit</p>

              <ul className="flex flex-col gap-0 mb-7 flex-1">
                {[
                  { bold: 'AI-Mention-Baseline', text: ' – Wiederholung der Messung, Veränderungen sichtbar' },
                  { bold: 'Wettbewerber-Monitoring', text: ' – Wie entwickelt sich Ihre Konkurrenz?' },
                  { bold: 'Priorisierte Empfehlungen', text: ' – Neue Maßnahmen basierend auf aktuellen Daten' },
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 py-1.5 text-[13px] text-[#7a9a9e] leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#a07c3a]/8 border border-[#a07c3a]/20 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span><strong className="text-[#e2e8f0] font-semibold">{feat.bold}</strong>{feat.text}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Hinweis für internationale Märkte */}
          <div className="animate-in delay-4 mt-12 bg-[#a07c3a]/3 border border-[#a07c3a]/35 rounded-xl p-5 text-center" style={{ boxShadow: '0 0 40px rgba(160, 124, 58, 0.10), 0 0 80px rgba(160, 124, 58, 0.04)' }}>
            <p className="text-sm text-[#7a9a9e] leading-relaxed">
              <strong className="text-[#a07c3a] font-semibold">Internationale Märkte:</strong> Bei mehreren Märkten oder Sprachen ist für jeden Markt ein separates Audit notwendig. Im Erstgespräch besprechen wir, was für Ihre Situation sinnvoll ist.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 6: BLINDSPOT CHECK ==================== */}
      <section aria-label="Blindspot Check" className="px-6 md:px-16 py-24 bg-[#0f2a32]/40 relative z-10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-[10%] right-[5%] w-96 h-96 rounded-full bg-[#a07c3a]/5 pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label" aria-hidden="true">Kostenlos</span>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left Column - Headline & Description */}
            <div className="slide-in-left">
              <h2 className="text-4xl font-semibold mb-6 text-[#e2e8f0] leading-tight">
                Zu abstrakt? Starten Sie mit dem kostenlosen{' '}
                <span className="text-[#a07c3a]">Blindspot Check</span>.
              </h2>
              <p className="text-lg text-[#7a9a9e] leading-relaxed mb-8">
                Wir prüfen Ihre Website, zeigen Ihnen in einem persönlichen Video, wo Sie in KI-Antworten stehen - und
                wie wir bei Ihrem Audit konkret weitermachen würden.
              </p>

              <button onClick={openBlindspotForm} className="btn-primary text-base px-9 py-4 cursor-pointer">
                Kostenloser Blindspot-Check
              </button>
              <p className="micro-copy mt-4">Kostenlos · Keine Verpflichtung · Ergebnis in 48h</p>
            </div>

            {/* Right Column - Was Sie bekommen */}
            <div className="slide-in-right">
              <h3 className="text-lg font-semibold text-[#a07c3a] mb-7">Was Sie bekommen:</h3>

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
                    className={`animate-in delay-${i + 1} flex items-start gap-4 bg-[#0f2a32]/50 border border-[#a07c3a]/15 rounded-lg p-5 transition-all`}
                  >
                    <div className="w-11 h-11 bg-[#a07c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm text-[#e2e8f0] leading-relaxed pt-2.5">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: ÜBER UNS ==================== */}
      <section className="px-6 md:px-16 py-24 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label" aria-hidden="true">Das Team</span>
            <h2 className="slide-in-left text-4xl font-semibold mt-4 text-[#e2e8f0]">
              Wer steckt hinter <span className="text-[#a07c3a]">The Visibility Shift</span>?
            </h2>
          </div>

          <div className="card p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {/* Zwei Fotos nebeneinander */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-5">
                  {/* Foto 1 - Yasmin */}
                  <div className="flex-1">
                    <img src="/yasmin-neitzel-senior-geo-auditor-thevisibilityshift.webp" alt="Yasmin Neitzel – Senior GEO Auditor bei The Visibility Shift" className="w-full aspect-square object-cover rounded-xl border border-[#a07c3a]/20 mb-3" loading="lazy" width="200" height="200" />
                    <p className="text-sm font-semibold text-[#e2e8f0] text-center mb-2">Yasmin</p>
                    <div className="flex justify-center">
                      <a
                        href="https://linkedin.com/in/yasmin-neitzel-62b19a105"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#a07c3a]/10 border border-[#a07c3a]/20 rounded flex items-center justify-center"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#a07c3a">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Foto 2 - Alex */}
                  <div className="flex-1">
                    <img src="/alexander-neitzel-geo-llmo-consultant-thevisibilityshift.webp" alt="Alexander Neitzel – GEO & LLMO Consultant bei The Visibility Shift" className="w-full aspect-square object-cover rounded-xl border border-[#a07c3a]/20 mb-3" loading="lazy" width="200" height="200" />
                    <p className="text-sm font-semibold text-[#e2e8f0] text-center mb-2">Alexander</p>
                    <div className="flex justify-center">
                      <a
                        href="https://linkedin.com/in/alexander-neitzel-64741a35b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-[#a07c3a]/10 border border-[#a07c3a]/20 rounded flex items-center justify-center"
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
                <p className="text-lg text-[#e2e8f0] leading-relaxed mb-6">
                  Wir sind <strong>Yasmin</strong> und <strong>Alexander</strong> – und wir bringen Struktur in ein Thema, das
                  gerade noch wenige wirklich verstehen.
                </p>
                <p className="text-base text-[#7a9a9e] leading-relaxed mb-6">
                  <span className="text-[#a07c3a] font-semibold">Unser Hintergrund:</span> Audits. Nicht
                  Marketing-Audits, sondern IATF 16949, ISO 9001 und VDA 6.3 – Prozesse, bei denen Systematik keine Option ist,
                  sondern Voraussetzung. Alexander bringt <strong className="text-[#e2e8f0]">14 Jahre Erfahrung als Qualitätsmanagement-Beauftragter</strong> und <strong className="text-[#e2e8f0]">8 Jahre IATF-Auditerfahrung</strong> bei der Mercedes-Benz Group AG mit – inklusive Prozessmanagement mit über 250 dokumentierten Prozessen im Batteriebau. Yasmin bereitete bei der Mercedes-Benz Group federführend <strong className="text-[#e2e8f0]">über 20 VDA 6.3-Audits</strong> vor und leitete abteilungsübergreifende Projekte im sechsstelligen Bereich. Heute überträgt sie diese <strong className="text-[#e2e8f0]">Methodik auf AI-Sichtbarkeit</strong> – unsere GEO-Audits folgen derselben Logik: analysieren, priorisieren, umsetzen, nachverfolgen.
                </p>
                <p className="text-base text-[#7a9a9e] leading-relaxed mb-6">
                  <span className="text-[#a07c3a] font-semibold">GEO ist ein neues Feld.</span> Unser Ansatz: testen,
                  messen, lernen. Das Ergebnis: eigene Metriken, dokumentierte Prozesse, eine Methodik, die funktioniert.
                </p>
                <p className="text-base text-[#7a9a9e] leading-relaxed mb-8">
                  Für Sie bedeutet das: keine vagen Empfehlungen, sondern nachvollziehbare Analyse und priorisierte
                  Maßnahmen.
                </p>
                <div className="border-l-4 border-[#a07c3a] pl-5">
                  <p className="text-sm text-[#a07c3a] font-bold">
                    „Kein Buzzword-Bingo. Daten, Systematik und ein klarer Plan."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 8: FAQ ==================== */}
      <section id="faq" aria-label="Fragen und Antworten" className="px-6 md:px-16 py-24 bg-[#0f2a32]/40 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="section-label" aria-hidden="true">Wissen</span>
            <h2 className="slide-in-left text-4xl font-semibold mt-4 text-[#e2e8f0]">Fragen & Antworten zu GEO</h2>
          </div>

          {faqItems.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question cursor-pointer w-full text-left bg-transparent border-none p-0"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-base font-medium text-[#e2e8f0] pr-4">{faq.q}</span>
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
              </button>
              <div id={`faq-answer-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={`faq-answer ${openFaq === i ? 'open' : ''}`}>
                <p className="text-sm text-[#7a9a9e] leading-relaxed">{faq.a}</p>
                {faq.table && (
                  <table className="w-full mt-4 text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#a07c3a]/20">
                        <th className="text-left py-2 pr-4 text-[#7a9a9e] font-medium">Kriterium</th>
                        <th className="text-left py-2 pr-4 text-[#7a9a9e] font-medium">SEO</th>
                        <th className="text-left py-2 text-[#a07c3a] font-medium">GEO</th>
                      </tr>
                    </thead>
                    <tbody className="text-[#7a9a9e]">
                      <tr className="border-b border-[#a07c3a]/10">
                        <td className="py-2 pr-4 text-[#e2e8f0]">Ziel</td>
                        <td className="py-2 pr-4">Rankings in Suchergebnissen</td>
                        <td className="py-2">Zitierung in KI-Antworten</td>
                      </tr>
                      <tr className="border-b border-[#a07c3a]/10">
                        <td className="py-2 pr-4 text-[#e2e8f0]">Zentrale Metrik</td>
                        <td className="py-2 pr-4">CTR, Keyword-Rankings</td>
                        <td className="py-2">AMCR, SOVAR</td>
                      </tr>
                      <tr className="border-b border-[#a07c3a]/10">
                        <td className="py-2 pr-4 text-[#e2e8f0]">Stärkster Faktor</td>
                        <td className="py-2 pr-4">Content + Backlinks</td>
                        <td className="py-2">Brand Authority + externe Signale</td>
                      </tr>
                      <tr className="border-b border-[#a07c3a]/10">
                        <td className="py-2 pr-4 text-[#e2e8f0]">Erwähnungen</td>
                        <td className="py-2 pr-4">Nur mit Link relevant</td>
                        <td className="py-2">Auch ohne Link relevant</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4 text-[#e2e8f0]">Bewertungsportale</td>
                        <td className="py-2 pr-4">Sekundär für Rankings</td>
                        <td className="py-2">Vertrauenssignal für KI-Empfehlungen</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {faq.dl && (
                  <dl className="mt-4 bg-[#0f2a32]/40 border border-[#a07c3a]/10 rounded-lg p-4">
                    <dt className="text-sm font-bold text-[#a07c3a] mb-1">{faq.dtText}</dt>
                    <dd className="text-sm text-[#7a9a9e] leading-relaxed m-0">{faq.ddText}</dd>
                  </dl>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="px-6 md:px-16 py-24 bg-gradient-to-r from-[#a07c3a]/10 to-[#0a1a1f]/95 border-t border-[#a07c3a]/15 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-5xl font-semibold mb-10 text-[#e2e8f0]">
            Bereit für den <span className="text-[#a07c3a]">Visibility Shift</span>?
          </h2>
          <a href="https://cal.meetergo.com/alexanderneitzel/15-min-meeting-alexanderneitzel" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-9 py-4 inline-flex items-center gap-4">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Erstgespräch vereinbaren
          </a>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="px-6 md:px-16 py-12 border-t border-[#a07c3a]/10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3.5">
              <svg width="32" height="32" viewBox="0 0 100 100" className="flex-shrink-0">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#a07c3a" strokeWidth="4" opacity="0.4" />
                <circle cx="50" cy="50" r="32" fill="none" stroke="#a07c3a" strokeWidth="4" />
                <circle cx="50" cy="50" r="16" fill="#a07c3a" />
                <circle cx="78" cy="22" r="8" fill="#a07c3a" />
              </svg>
              <span className="text-sm font-semibold text-[#e2e8f0]">The Visibility Shift</span>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to="/impressum" className="nav-link">Impressum</Link>
              <Link to="/datenschutz" className="nav-link">Datenschutz</Link>
              <Link to="/cookies" className="nav-link">Cookies</Link>
              <a href="https://www.linkedin.com/company/thevisibilityshift" className="nav-link">LinkedIn</a>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-[#a07c3a]/10">
            <p className="text-xs text-[#5a7a7e]">© 2026 NEELTIZ Consulting - FZCO. Alle Rechte vorbehalten.</p>
            <button onClick={openKarriereModal} className="text-xs text-[#a07c3a] hover:text-amber-600 flex items-center gap-1.5 cursor-pointer bg-transparent border-none">
              Wir stellen ein →
            </button>
          </div>
        </div>
      </footer>

      {/* ==================== FORM MODALS (Tally) ==================== */}
      {(activeModal === 'blindspot' || activeModal === 'angebot') && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeModal === 'blindspot' ? 'Blindspot-Check Formular' : 'Angebot anfordern'}
            className="relative w-full max-w-xl rounded-2xl border border-[#a07c3a]/25 flex flex-col"
            style={{ background: 'linear-gradient(180deg, #0f2a32 0%, #0a1a1f 100%)', maxHeight: '92vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Formular schließen"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#a07c3a]/10 border border-[#a07c3a]/20 text-[#7a9a9e] hover:text-[#e2e8f0] hover:bg-[#a07c3a]/20 transition-all cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Scrollable Tally Form Embed */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-2xl relative">
              <iframe
                src={activeModal === 'blindspot'
                  ? 'https://tally.so/embed/dWxKAr?alignLeft=1&transparentBackground=1&dynamicHeight=1'
                  : 'https://tally.so/embed/eqeKjo?alignLeft=1&transparentBackground=1&dynamicHeight=1'}
                width="100%"
                frameBorder="0"
                title={activeModal === 'blindspot' ? 'Blindspot-Check Formular' : 'Angebot Formular'}
                style={{ border: 'none', height: activeModal === 'blindspot' ? '820px' : '1000px' }}
              />
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-3 border-t border-[#a07c3a]/10 text-center flex-shrink-0">
              <p className="text-xs text-[#5a7a7e]">
                {activeModal === 'blindspot'
                  ? 'Kostenlos · Keine Verpflichtung · Ergebnis in 48h'
                  : 'Kostenlos · Unverbindlich · Antwort in 48h'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== KARRIERE MODAL ==================== */}
      {activeModal === 'karriere' && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)' }}
          onClick={closeModal}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Karriere bei The Visibility Shift"
            className="relative w-full max-w-lg rounded-2xl border border-[#a07c3a]/25 flex flex-col"
            style={{ background: 'linear-gradient(180deg, #0f2a32 0%, #0a1a1f 100%)', maxHeight: '92vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#a07c3a]/10 border border-[#a07c3a]/20 text-[#7a9a9e] hover:text-[#e2e8f0] hover:bg-[#a07c3a]/20 transition-all cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-10 pt-10 pb-8">
              {/* Header */}
              <p className="text-xs text-[#a07c3a] tracking-widest uppercase mb-4">Karriere</p>
              <h2 className="text-3xl font-bold text-[#e2e8f0] leading-tight mb-2">
                Neues Feld. Kleines Team.<br />Echte Verantwortung.
              </h2>
              <p className="text-sm text-[#7a9a9e] mb-8">GEO ist neu – und wir bauen es gerade auf.</p>

              {/* Was wir bieten */}
              <h3 className="text-xs text-[#a07c3a] tracking-widest uppercase mb-4">Was wir bieten</h3>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { title: 'AI Visibility von Anfang an', text: 'Du arbeitest an einem Thema, das gerade erst entsteht – mit echtem Gestaltungsspielraum.' },
                  { title: 'Direkter Impact', text: 'Kleine Teamgröße = Deine Arbeit zählt sofort. Kein Overhead, keine Politik.' },
                  { title: 'Remote & flexibel', text: 'Arbeite von überall. Ergebnisse zählen, nicht Anwesenheit.' },
                  { title: 'Lernkurve statt Stillstand', text: 'Du wirst nicht verwaltet – du lernst mit, gestaltest mit, wächst mit.' },
                  { title: 'Ehrliche Kommunikation', text: 'Feedback ist direkt, fair und konstruktiv. Immer.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#0a1a1f]/50 border border-[#a07c3a]/10 rounded-lg px-4 py-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#a07c3a]/10 border border-[#a07c3a]/20 flex items-center justify-center mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#a07c3a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#e2e8f0]">{item.title}</p>
                      <p className="text-xs text-[#7a9a9e] leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wen wir suchen */}
              <h3 className="text-xs text-[#a07c3a] tracking-widest uppercase mb-4">Wen wir suchen</h3>
              <div className="bg-[#a07c3a]/8 border border-[#a07c3a]/15 rounded-lg px-5 py-4 mb-8">
                <p className="text-base font-semibold text-[#e2e8f0] mb-2">Co-Consultant AI Visibility</p>
                <p className="text-sm text-[#7a9a9e] leading-relaxed">
                  Du hast Erfahrung in SEO, Content oder Digital Marketing und willst in ein neues Feld einsteigen?
                  Du denkst analytisch, arbeitest eigenständig und hast Lust, GEO von Grund auf mitzugestalten?
                  Dann melde dich.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a
                  href="mailto:karriere@the-visibility-shift.com"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg text-sm font-semibold text-[#0a1a1f] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(160,124,58,0.3)]"
                  style={{ background: 'linear-gradient(135deg, #8a6a30 0%, #a07c3a 100%)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M22 4L12 13L2 4" />
                  </svg>
                  karriere@the-visibility-shift.com
                </a>
                <p className="text-xs text-[#5a7a7e] mt-3">Kein Anschreiben nötig – erzähl einfach, was dich antreibt.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
