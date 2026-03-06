# SEO/GEO Technische Diagnose — The Visibility Shift

**Datum:** 5. März 2026
**Domain:** https://the-visibility-shift.com
**Audit:** Technische Basisdiagnose (Task 1)

---

## Diagnose-Zusammenfassung

**Root Cause für 0 indexierte Seiten: Die Site ist eine Client-Side-Rendered React SPA (Vite + React), KEIN Next.js App Router mit SSR.**

Google sieht beim Crawlen nur ein leeres `<div id="root"></div>`. Der gesamte Content — Text, Schema.org, Headings — existiert erst nach JavaScript-Execution. Das ist der mit Abstand wahrscheinlichste Grund für "Gecrawlt – zurzeit nicht indexiert".

---

## 🔴 Kritische Befunde

### 1. Kein Server-Side Rendering — SPA-Only

**Was ist:** Vite + React 18 + react-router-dom (Client-Side SPA)
**Was in der Doku steht:** "Next.js App Router + SSR aktiv"
**Realität:** Es gibt kein SSR. Kein Next.js. Kein serverseitiges HTML.

```
# Was Google sieht (Build-Output dist/index.html):
<body>
  <div id="root"></div>
  <script type="module" src="/assets/index-rHXKzAwt.js"></script>
</body>
```

**Impact:** Google muss JavaScript rendern, um irgendeinen Content zu sehen. Bei neuen, niedrig-priorisierten Seiten passiert das oft nicht — oder Google entscheidet nach dem Render, dass die Seite "thin content" ist.

**Fix-Optionen (nach Aufwand sortiert):**

| Option | Aufwand | SEO-Impact |
|--------|---------|------------|
| A) Vite-Plugin `vite-plugin-ssr` oder `vite-ssg` für Pre-Rendering | 1–2 Tage | Hoch |
| B) Migration auf Next.js App Router (wie geplant) | 1–2 Wochen | Sehr hoch |
| C) Prerender.io / rendertron als Middleware vor Coolify | 4–8 Stunden | Mittel |

**Empfehlung:** Option A als Quick-Fix (Static Site Generation bei Build), dann mittelfristig Option B.


### 2. Build-Output verliert Meta-Tags

Der Vite-Build strippt kritische Tags aus der `index.html`:

| Tag | In Source `index.html` | In `dist/index.html` |
|-----|----------------------|---------------------|
| `<link rel="canonical">` | ✅ Vorhanden | ❌ **Fehlt** |
| OG-Tags (og:title, og:description, og:url, og:image) | ✅ Vorhanden | ❌ **Fehlen alle** |
| Twitter Card Tags | ✅ Vorhanden | ❌ **Fehlen alle** |
| Cookiebot Script | ✅ Vorhanden | ❌ **Fehlt** |
| Title | "GEO Discovery Audit" | "GEO Strategic Audit" (**Inkonsistent!**) |

**Ursache:** Wahrscheinlich ein veralteter Build im `dist/`-Ordner. Der Build scheint nicht von der aktuellen `index.html` erzeugt worden zu sein.

**Fix:** `npm run build` erneut ausführen und prüfen, ob Vite die `index.html` korrekt kopiert.


### 3. Schema.org nur via JavaScript sichtbar

Die Schema.org JSON-LD (Organization, Service, WebPage, FAQ) ist in `Home.jsx` als React State definiert und wird per `useEffect` + `document.head.appendChild` injiziert — also erst nach JS-Execution.

```jsx
// Aktuell in Home.jsx:
useEffect(() => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  // ... wird dynamisch eingefügt
}, [])
```

**Problem:** Googlebot sieht die Schema.org-Daten erst nach JS-Render. Ohne SSR/SSG ist nicht garantiert, dass Google sie verarbeitet.

**Fix:** Schema.org JSON-LD direkt in die `index.html` hardcoden (nicht dynamisch per React).

---

## 🟡 Hohe Priorität

### 4. Sitemap enthält nur 4 URLs — keine Service-Seiten

```xml
<!-- Aktuelle Sitemap: -->
/                    (priority 1.0)
/impressum           (priority 0.3)
/datenschutz         (priority 0.3)
/cookies             (priority 0.3)
```

3 von 4 URLs in der Sitemap sind Legal-Seiten. Es gibt keine Service-Page, keine About-Page, kein Blog. Für Google sagt das: "Diese Site hat keinen relevanten Content."

**Fix:** Service-Seiten erstellen und in Sitemap aufnehmen. Mindestens:
- `/geo-audit` — Service-Detailseite
- `/ueber-uns` — Team & Expertise (E-E-A-T)
- `/was-ist-geo` — Definitional Content (GEO-Power-Move)


### 5. Content-Menge grenzwertig

Die Homepage hat ~387 sichtbare Wörter (geschätzt aus JSX). Das liegt unter dem empfohlenen Minimum von 600 Wörtern für eine Hauptseite und weit unter den 1.000+ Wörtern, die für eine Service-Landingpage ideal wären.

Bei einer SPA ohne SSR kommt erschwerend hinzu, dass Google diesen Content möglicherweise gar nicht sieht.


### 6. Nur eine "echte" Seite

Die gesamte Site hat **4 Routes**, davon 3 Legal-Seiten:

| Route | Typ | SEO-Wert |
|-------|-----|----------|
| `/` | Homepage/Landingpage | Einzige relevante Seite |
| `/impressum` | Pflichtseite | Kein SEO-Wert |
| `/datenschutz` | Pflichtseite | Kein SEO-Wert |
| `/cookies` | Pflichtseite | Kein SEO-Wert |

Google hat effektiv **eine Seite** zu indexieren. Das ist kein Signal für eine "echte" Website.

---

## 🟢 Was funktioniert

| Check | Status | Kommentar |
|-------|--------|-----------|
| robots.txt | ✅ OK | Googlebot erlaubt, AI-Bots explizit erlaubt (GPTBot, ClaudeBot, etc.) |
| Sitemap Syntax | ✅ OK | Valides XML, hreflang für DACH korrekt |
| Meta Title (Source) | ✅ OK | "GEO Discovery Audit \| The Visibility Shift" — klar, keyword-nah |
| Meta Description (Source) | ✅ OK | 97 Zeichen, CTA + Keyword, gut formuliert |
| Canonical Tag (Source) | ✅ OK | Korrekt auf Hauptdomain gesetzt |
| OG/Twitter Tags (Source) | ✅ OK | Vollständig inkl. og:image |
| Schema.org Inhalt | ✅ OK | Organization, Service, WebPage, FAQ — gut strukturiert |
| AI-Bot-Zugang | ✅ OK | Alle relevanten AI-Crawler explizit in robots.txt erlaubt |

---

## Priorisierter Action Plan

### Woche 1 — Rendering & Indexierung retten

| # | Aktion | Aufwand | Impact |
|---|--------|---------|--------|
| 1 | **SSG/Pre-Rendering einbauen** — `vite-plugin-ssr` oder `@prerenderer/rollup-plugin` | 1 Tag | 🔴 Kritisch |
| 2 | **`dist/` neu builden** — Meta-Tags, OG-Tags, Canonical verifizieren | 30 Min | 🔴 Kritisch |
| 3 | **Schema.org in `index.html` hardcoden** statt per React-useEffect | 1 Stunde | 🔴 Kritisch |
| 4 | **Indexierung beantragen** — Search Console URL-Prüfung für alle 4 URLs | 15 Min | 🔴 Kritisch |

### Woche 2 — Content & Struktur

| # | Aktion | Aufwand | Impact |
|---|--------|---------|--------|
| 5 | **Service-Seite `/geo-audit` erstellen** — 1.000+ Wörter, was-wie-warum | 1 Tag | 🟡 Hoch |
| 6 | **About-Seite `/ueber-uns` erstellen** — Team, Credentials, E-E-A-T | 0.5 Tag | 🟡 Hoch |
| 7 | **Homepage auf 800+ Wörter erweitern** | 0.5 Tag | 🟡 Hoch |
| 8 | **Sitemap aktualisieren** mit neuen Seiten | 15 Min | 🟡 Hoch |

### Woche 3–4 — GEO Foundation

| # | Aktion | Aufwand | Impact |
|---|--------|---------|--------|
| 9 | **`/llms.txt` erstellen** und deployen | 1 Stunde | 🟢 Mittel |
| 10 | **Definitional Content "Was ist GEO?"** — 1.500+ Wörter | 1 Tag | 🟡 Hoch |
| 11 | **LLM-Sichtbarkeitstest** — 5 Prompts in ChatGPT/Claude/Perplexity | 30 Min | 🟢 Mittel |
| 12 | **Next.js Migration planen** (mittelfristig) | 2 Stunden | 🟢 Mittel |

---

## Quick Win — In den nächsten 2 Stunden umsetzbar

**Schema.org aus React raus, in `index.html` rein.**

Das ist der schnellste Fix mit dem höchsten Impact. Copy-paste die JSON-LD Blöcke aus `Home.jsx` direkt als `<script type="application/ld+json">` in den `<head>` der `index.html`. Dann `npm run build` und deployen.

Das stellt sicher, dass Google die Structured Data ohne JavaScript-Rendering sehen kann.

---

## 30-Tage-Erfolgskriterien

| KPI | Jetzt | Ziel (Tag 30) |
|-----|-------|---------------|
| Indexierte Seiten | 0 | ≥ 3 |
| Seiten mit Content | 1 | ≥ 4 |
| Wörter auf Homepage | ~387 | ≥ 800 |
| Schema.org sichtbar ohne JS | Nein | Ja |
| SSR/SSG aktiv | Nein | Ja |
| llms.txt live | Nein | Ja |
