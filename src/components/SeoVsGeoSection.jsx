import { useEffect, useRef, useState } from 'react'

const differences = [
  {
    number: '01',
    title: 'Neuer Kanal, andere Messung',
    text: 'ChatGPT, Perplexity und Google AI Overviews sind neue Oberflächen, über die echte Kaufentscheidungen laufen. SEO misst Rankings und Traffic. GEO misst, ob und wie Sie in AI-Antworten vorkommen.',
    seo: '„Wir haben starke Zahlen: 28% CTR & 40% organischer Traffic."',
    geo: '„Wir werden in 4 von 10 relevanten AI-Antworten empfohlen — der Wettbewerber in 9 von 10."',
  },
  {
    number: '02',
    title: 'Andere Gewichtung der Faktoren',
    text: 'SEO gewichtet Content und Backlinks stark. Bei AI-Sichtbarkeit verschiebt sich das Gewicht: Markenautorität und externe Signale dominieren — Content-Qualität allein reicht nicht.',
    seo: 'Erwähnung zählt nur mit Link (DR, Anchor Text)',
    geo: 'Erwähnung zählt auch ohne Link (Kontext, Häufigkeit, Quelle)',
  },
  {
    number: '03',
    title: 'Signale, die SEO nicht erfasst',
    text: 'Bewertungsportale, Retail-Präsenz, Branchenverzeichnisse, unverlinkte Erwähnungen — für SEO-Rankings sekundär. Für AI-Systeme sind es Vertrauenssignale, die Empfehlungen steuern.',
    seo: 'Trustpilot-Bewertungen haben keinen Einfluss auf den Rankingfaktor.',
    geo: 'Tausende Trustpilot-Bewertungen = Wissenskonsens, den AI-Systeme als Signal nutzen.',
  },
]

const leverageFactors = [
  {
    name: 'Markenautorität & externe Signale',
    influence: 'Stärkster Faktor',
    influenceClass: 'text-[#a07c3a]',
    seoWidth: 30,
    geoWidth: 70,
    qualifier: 'Teilweise von SEO abgedeckt',
    qualifierText: '— Backlinks erzeugen auch Erwähnungen, PR stärkt Brand und liefert Links. Aber unverlinkte Mentions, Bewertungsvolumen, Retail-Präsenz, Co-Citations sind kein SEO-Scope.',
  },
  {
    name: 'Content-Qualität',
    influence: 'Wichtig',
    influenceClass: 'text-[#e2e8f0]',
    seoWidth: 72,
    geoWidth: 28,
    qualifier: 'Größtenteils von SEO abgedeckt',
    qualifierText: '— Guter Content ist guter Content. AI-Optimierung ergänzt: Zitierfähigkeit (können AI-Systeme das extrahieren?), Answer-First-Strukturierung, quantifizierbare Claims statt vager Aussagen.',
  },
  {
    name: 'Technik / Schema',
    influence: 'Grundlage',
    influenceClass: 'text-[#5a7a7e]',
    seoWidth: 92,
    geoWidth: 8,
    qualifier: 'Fast vollständig von SEO abgedeckt',
    qualifierText: '— Schema, Crawlability und technische Grundlagen sind klassisches SEO-Handwerk. Notwendig, aber in unseren Audits kein entscheidender Differenzierungsfaktor für AI-Sichtbarkeit.',
  },
]

export default function SeoVsGeoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const leverageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (leverageRef.current) {
      observer.observe(leverageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="SEO vs. GEO Vergleich" className="relative z-10 py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Section Header - Centered */}
        <div className="text-center mb-12">
          <span className="section-label" aria-hidden="true">Klartext</span>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#e2e8f0] mt-4">
            SEO und GEO nutzen die gleichen Werkzeuge.<br />
            <span className="text-[#a07c3a]">Der Unterschied liegt woanders.</span>
          </h2>
          <p className="text-lg leading-relaxed text-[#7a9a9e] mt-5 max-w-2xl mx-auto">
            Backlinks, E-E-A-T, Schema Markup, Entitätsaufbau — das sind keine GEO-Erfindungen.
            Wer behauptet, GEO sei etwas komplett Neues, macht sich unglaubwürdig.
            Die Wahrheit ist ehrlicher — und für Ihr Geschäft relevanter, denn AI Overviews reduzieren bereits organische Klicks um 58&nbsp;%{' '}
            <a href="https://ahrefs.com/blog/ai-overviews-study/" target="_blank" rel="noopener noreferrer" className="text-[#a07c3a] underline underline-offset-2 decoration-[#a07c3a]/40 hover:decoration-[#a07c3a] text-sm">(Ahrefs, Feb&nbsp;2026)</a>.
          </p>
        </div>

        {/* Honest Box - Full width matching tiles below */}
        <div className="bg-[#0f2a32] border-l-4 border-[#a07c3a] rounded-r-xl py-8 px-9 mb-16">
          <p className="text-[17px] leading-relaxed text-[#7a9a9e]">
            <strong className="text-[#a07c3a] font-semibold">Die ehrliche Einordnung:</strong> Ein Großteil der operativen Arbeit überschneidet sich.{' '}
            <span className="whitespace-nowrap">E-E-A-T</span> aufbauen, guten Content erstellen, Erwähnungen generieren, Schema implementieren —
            das brauchen Sie für SEO und für AI-Sichtbarkeit. Der Unterschied liegt in dem,
            was darüber hinausgeht, in einer anderen Gewichtung der Faktoren — und in einer Frage, die SEO nicht stellt.
          </p>
        </div>

        {/* Three Differences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differences.map((diff, i) => (
            <div
              key={i}
              className="group p-9 rounded-2xl border border-[#a07c3a]/15 bg-[#0f2a32] transition-all duration-300 relative overflow-hidden hover:border-[#a07c3a] hover:shadow-[0_8px_32px_rgba(160,124,58,0.08)] hover:-translate-y-0.5"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#a07c3a] to-[#a07c3a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-[13px] font-bold text-[#a07c3a] tracking-wide mb-4">
                {diff.number}
              </div>
              <h3 className="text-xl font-semibold text-[#e2e8f0] mb-4 leading-tight">
                {diff.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#7a9a9e] mb-5">
                {diff.text}
              </p>

              {/* Example Box */}
              <div className="bg-[#0a1a1f] rounded-lg p-5">
                <div className="flex gap-2.5 items-start mb-2.5">
                  <span className="flex-shrink-0 text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-[#1a3d47] text-[#7a9a9e]">
                    SEO
                  </span>
                  <span className="text-sm leading-snug text-[#7a9a9e]">{diff.seo}</span>
                </div>
                <div className="flex gap-2.5 items-start">
                  <span className="flex-shrink-0 text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-[#a07c3a] text-[#0a1a1f]">
                    GEO
                  </span>
                  <span className="text-sm leading-snug text-[#7a9a9e]">{diff.geo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leverage Section */}
        <div ref={leverageRef} className="mb-20">
          <div className="mb-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-[28px] font-bold text-[#e2e8f0] leading-tight mb-1.5">
              Wo SEO aufhört, beginnt der größte Hebel
            </h3>
            <p className="text-[17px] text-[#5a7a7e] leading-snug mb-5 italic">
              Was AI-Empfehlungen am stärksten beeinflusst, liegt am weitesten außerhalb von SEO.
            </p>
            <p className="text-base leading-relaxed text-[#7a9a9e]">
              Drei Faktoren beeinflussen, ob Ihre Marke in AI-Antworten empfohlen wird.
              Unsere Audits zeigen ein konsistentes Muster: Je stärker der Einfluss eines Faktors,
              desto weniger deckt klassisches SEO davon ab.
            </p>
          </div>

          {/* Leverage Grid with Legend */}
          <div className="flex flex-col gap-7 max-w-3xl mx-auto">
            {leverageFactors.map((factor, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-6">
                {/* Left: Factor Info */}
                <div className="flex flex-row md:flex-col justify-between md:justify-start gap-1.5 pt-1">
                  <span className="text-[15px] font-semibold text-[#e2e8f0] leading-tight">
                    {factor.name}
                  </span>
                  <span className="text-xs leading-none">
                    <span className="font-medium text-[#5a7a7e]">Einfluss: </span>
                    <span className={`font-bold ${factor.influenceClass}`}>{factor.influence}</span>
                  </span>
                </div>

                {/* Right: Bar + Qualifier */}
                <div className="flex flex-col">
                  <div className="h-9 bg-[#0a1a1f] rounded-lg overflow-hidden flex">
                    <div
                      className="h-full bg-[#1a3d47] flex items-center justify-center transition-all duration-[1200ms] ease-out"
                      style={{ width: isVisible ? `${factor.seoWidth}%` : '0%' }}
                    >
                      <span className="text-[11px] font-semibold text-[#7a9a9e] whitespace-nowrap">
                        SEO
                      </span>
                    </div>
                    <div
                      className="h-full bg-gradient-to-r from-[#a07c3a] to-[#a07c3a] flex items-center justify-center transition-all duration-[1200ms] ease-out delay-300"
                      style={{ width: isVisible ? `${factor.geoWidth}%` : '0%' }}
                    >
                      <span className="text-[11px] font-semibold text-[#0a1a1f] whitespace-nowrap">
                        {factor.geoWidth > 15 ? 'AI-Sichtbarkeit' : 'AI'}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 px-1">
                    <span className="text-[13px] text-[#5a7a7e] leading-snug">
                      <strong className="text-[#7a9a9e] font-semibold">{factor.qualifier}</strong>
                      {' '}{factor.qualifierText}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Legend - flush bottom, aligned with bars */}
            <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-6">
              <div />
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-[13px] text-[#5a7a7e]">
                  <div className="w-3 h-3 rounded-sm bg-[#1a3d47] flex-shrink-0" />
                  <span>Von SEO abgedeckt</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-[#5a7a7e]">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-[#a07c3a] to-[#a07c3a] flex-shrink-0" />
                  <span>Nur über AI-Sichtbarkeit erreichbar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Box */}
          <div className="mt-9 bg-[#0f2a32] border-l-4 border-[#a07c3a] rounded-r-xl py-6 px-7 max-w-3xl mx-auto">
            <p className="text-[15px] leading-relaxed text-[#7a9a9e]">
              <strong className="text-[#a07c3a] font-semibold">Das Muster:</strong> SEO investiert am meisten in Content und Backlinks.
              Aber AI-Sichtbarkeit wird vor allem durch Markenautorität und externe Signale entschieden —
              Faktoren, die klassisches SEO kaum adressiert.
            </p>
            <p className="mt-3 text-[13px] text-[#5a7a7e] italic">
              Basierend auf unserer Audit-Praxis. Die Rangfolge ist konsistent — die genaue Gewichtung variiert nach Branche und Plattform.
            </p>
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="text-center max-w-[680px] mx-auto">
          <h3 className="text-xl md:text-2xl lg:text-[28px] font-bold text-[#e2e8f0] mb-5 leading-tight">
            SEO beantwortet: „Wie ranken wir besser?"<br />
            GEO beantwortet: „Warum empfehlen AI-Systeme den Wettbewerber — und nicht uns?"
          </h3>
          <p className="text-[17px] leading-relaxed text-[#7a9a9e] mb-9">
            Beide Fragen sind berechtigt. Beide brauchen teilweise dieselben Grundlagen.
            Aber die zweite Frage erfordert eine Analyse, die über klassisches SEO hinausgeht —
            andere Metriken, andere Gewichtung, andere Signale.
          </p>
          <a
            href="https://cal.meetergo.com/alexanderneitzel/15-min-meeting-alexanderneitzel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-br from-[#a07c3a] to-[#a07c3a] text-[#0a1a1f] text-[15px] font-semibold rounded-xl transition-all duration-300 hover:bg-[#a07c3a] hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(160,124,58,0.3)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="flex-shrink-0">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Erstgespräch vereinbaren
          </a>
        </div>
      </div>
    </section>
  )
}
