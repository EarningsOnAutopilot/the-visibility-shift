# Maßnahmenplan: SEO/GEO Recovery — The Visibility Shift

**Datum:** 5. März 2026
**Erstellt von:** Claude SEO/GEO Audit
**Domain:** https://the-visibility-shift.com
**Status:** 0 indexierte Seiten, 4 Fehler in Search Console

---

## Teil 1: Ursachenanalyse — Wie konnte das passieren?

### Die Timeline

| Datum | Commit | Was passierte |
|-------|--------|---------------|
| 31. Jan 2026 | `ea076c2` "Initial commit: GEO Landing Page" | Next.js 16 App Router mit SSR, TypeScript, Metadata API — **SEO-ready** |
| 13. Feb 2026 | `79ea871` "Rewrite: Vite/React SPA mit GEO-Optimierungen" | **Kompletter Rewrite** auf Vite + React SPA. SSR entfernt. TypeScript entfernt. Tailwind v4→v3 downgrade. |
| 13. Feb 2026 | `5b9a5d6` "Add Dockerfile for Coolify deployment" | nginx-basiertes Deployment für statische Dateien. Kein Node.js-Server. |

### Was verloren ging

Das CHANGELOG.md dokumentiert die Migration als bewusste Entscheidung. Hier ist, was dabei zerstört wurde:

| Feature | Next.js (vorher) | Vite SPA (jetzt) | SEO-Impact |
|---------|-------------------|-------------------|------------|
| Server-Side Rendering | ✅ Automatisch via App Router | ❌ Nicht vorhanden | **FATAL** — Google sieht leeres HTML |
| Metadata API | ✅ `export const metadata` in layout.tsx | ❌ Durch `document.title` ersetzt (clientseitig) | **KRITISCH** — Meta-Tags nur nach JS-Execution |
| Schema.org | ✅ Server-gerendert im HTML | ❌ Per `useEffect` dynamisch injiziert | **HOCH** — Crawler sehen Schema nicht zuverlässig |
| TypeScript | ✅ Typsicherheit | ❌ Entfernt | Mittel — kein direkter SEO-Impact |
| Automatic Code Splitting | ✅ Via Next.js | ❌ Manuell (nicht konfiguriert) | Mittel — Performance |
| Static Generation | ✅ Möglich per `generateStaticParams` | ❌ Nicht verfügbar | **HOCH** — Kein Pre-Rendering |

### Warum hat der Build die Meta-Tags verloren?

Die `dist/index.html` (der tatsächlich deployte Build) unterscheidet sich von der Source `index.html`:

- **Canonical Tag:** fehlt im Build
- **OG-Tags (og:title, og:description, og:url, og:image):** fehlen alle im Build
- **Twitter Card Tags:** fehlen alle im Build
- **Cookiebot Script:** fehlt im Build
- **Title:** "GEO **Strategic** Audit" statt "GEO **Discovery** Audit" (inkonsistent)

**Wahrscheinliche Ursache:** Der `dist/`-Ordner wurde von einem älteren Build erzeugt und danach nicht aktualisiert, nachdem die `index.html` verbessert wurde. Der veraltete Build wurde deployed.

### Root Cause Zusammenfassung

**Es gab keinen technischen Grund für die Migration.** Next.js App Router auf Coolify/Hetzner funktioniert einwandfrei (Dockerfile mit `next start` statt `nginx`). Die Migration von Next.js zu Vite hat das einzige Feature zerstört, das für die Google-Indexierung unverzichtbar ist: Server-Side Rendering.

Der `_backup/`-Ordner enthält noch die originalen Next.js-Dateien (`layout.tsx`, `page.tsx`, `impressum.tsx`, `datenschutz.tsx`, `cookies.tsx`, `globals.css`). Die Migration kann rückgängig gemacht werden.

### Verschärfende Faktoren

1. **Falsche Dokumentation:** Das Setup-Dokument (`cowork-project-setup.md`) sagt "SSR: aktiv (App Router)" — das stimmt nicht mehr seit dem 13. Februar.
2. **Dockerfile serviert nur statische Dateien:** `nginx:alpine` mit `try_files $uri /index.html` — klassisches SPA-Setup, kein SSR möglich.
3. **Kein Pre-Rendering konfiguriert:** Vite hat kein SSG/SSR-Plugin. Der Build erzeugt nur eine leere HTML-Shell + ein großes JS-Bundle.
4. **Schema.org nur via JavaScript:** Alle strukturierten Daten werden per React `useEffect` eingefügt — unsichtbar für Crawler ohne JS-Rendering.

---

## Teil 2: Was Google aktuell sieht

### HTML das der Crawler empfängt

```html
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GEO Strategic Audit | The Visibility Shift</title>
  <meta name="description" content="..." />
  <!-- KEINE Canonical, OG-Tags, Twitter Cards -->
  <script type="module" src="/assets/index-rHXKzAwt.js"></script>
  <link rel="stylesheet" href="/assets/index-DzKHuOZh.css">
</head>
<body>
  <div id="root"></div>  <!-- LEER — kein Content -->
</body>
</html>
```

**Das ist alles.** Kein Text. Keine Headings. Keine Schema.org-Daten. Keine Navigation. Google sieht eine leere Seite mit einem Title und einer Meta-Description.

### Warum "Gecrawlt – nicht indexiert"?

Google crawlt die Seite → sieht `<div id="root"></div>` → kein Content → klassifiziert als "Thin Content" oder "Empty Page" → entscheidet sich GEGEN Indexierung.

Selbst wenn Google den JavaScript-Renderer (WRS) nutzt: Bei einer neuen, unbekannten Domain mit wenig Autorität hat JS-Rendering niedrigste Priorität. Die Render-Queue kann Tage oder Wochen dauern.

---

## Teil 3: Priorisierter Maßnahmenplan

### 🔴 Phase 1 — SOFORT (heute, 2–4 Stunden)

#### 1.1 Build aktualisieren und Meta-Tags retten

**Problem:** Der deployed Build hat keine OG-Tags, kein Canonical, kein Cookiebot.

**Fix:**
```bash
# Im Projekt-Root:
npm run build
# Prüfen, ob dist/index.html jetzt alle Tags enthält:
grep -c "og:title\|canonical\|Cookiebot" dist/index.html
# Erwartete Ausgabe: 3 (oder mehr)
```

Wenn der Build die Tags korrekt übernimmt → deployen.

**Aufwand:** 15 Minuten
**Impact:** Meta-Tags und OG-Tags werden für Crawler sichtbar


#### 1.2 Schema.org aus React raus, in index.html rein

**Problem:** JSON-LD wird per `useEffect` dynamisch eingefügt — Crawler sehen es nicht.

**Fix:** Die Schema.org-Blöcke aus `Home.jsx` (Zeilen ~5–100) als statische `<script type="application/ld+json">` direkt in den `<head>` der `index.html` kopieren:

```html
<!-- In index.html, vor </head>: -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Visibility Shift",
  "alternateName": "NEELTIZ Consulting - FZCO",
  "url": "https://the-visibility-shift.com",
  "description": "GEO & LLMO Consulting – Wir machen Ihre Marke sichtbar in KI-Antworten von ChatGPT, Perplexity und Google AI Overviews.",
  "foundingDate": "2024",
  "areaServed": ["DE", "AT", "CH"],
  "serviceType": ["GEO Consulting", "LLMO Consulting", "AI Visibility Audit"],
  "sameAs": ["https://www.linkedin.com/company/thevisibilityshift"]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "GEO Discovery Audit",
  "provider": {"@type": "Organization", "name": "The Visibility Shift"},
  "areaServed": ["DE", "AT", "CH"],
  "description": "Umfassende Analyse Ihrer Marken-Sichtbarkeit in KI-Antworten"
}
</script>
```

**Aufwand:** 1 Stunde
**Impact:** Google und LLMs können Schema.org ohne JavaScript lesen


#### 1.3 Search Console: Indexierung beantragen

Nach dem Deploy des neuen Builds:

1. Search Console → URL-Prüfung → `https://the-visibility-shift.com`
2. "Live-URL testen" klicken → prüfen, was Googlebot sieht
3. "Indexierung beantragen" für alle 4 URLs
4. Sitemap unter Search Console → Sitemaps erneut einreichen

**Aufwand:** 15 Minuten
**Impact:** Google prüft die Seiten erneut mit den neuen Meta-Tags


#### 1.4 Validierung: robots.txt, CWV, Mobile

**Schnellcheck (30 Minuten):**

1. **robots.txt bestätigen:** `https://the-visibility-shift.com/robots.txt` aufrufen — prüfen, dass `User-agent: * Allow: /` steht (✅ im Source-Code ok, aber nach Deploy verifizieren)
2. **Core Web Vitals:** PageSpeed Insights aufrufen → Lighthouse-Score notieren. Bei LCP > 4s oder CLS > 0.25: als Phase-2-Blocker behandeln
3. **Mobile Usability:** Search Console → Mobile Usability Report prüfen → 0 Fehler erwartet
4. **OG-Image erreichbar?** `https://the-visibility-shift.com/og-image.png` im Browser aufrufen → muss HTTP 200 zurückgeben

**Aufwand:** 30 Minuten
**Impact:** Stellt sicher, dass keine weiteren Blocker vor der Indexierung liegen


#### 1.5 Dokumentation korrigieren

`cowork-project-setup.md` aktualisieren — "SSR: aktiv (App Router)" stimmt nicht. Ersetzen durch:
```
Stack: Vite 6 + React 18 (SPA, KEIN SSR)
Deployment: nginx statisch via Coolify auf Hetzner
⚠️ WARNUNG: Kein Server-Side Rendering. Google sieht kein HTML-Content.
```

**Aufwand:** 5 Minuten
**Impact:** Verhindert, dass zukünftige Diagnosen auf falschen Annahmen basieren


---

### 🟡 Phase 2 — DIESE WOCHE (3–5 Tage)

#### 2.1 Entscheidung treffen: Zurück zu Next.js oder Pre-Rendering für Vite?

**Option A: Zurück zu Next.js (EMPFOHLEN)**

Der `_backup/`-Ordner enthält die originalen Dateien. Migration zurück:

| Schritt | Aufwand |
|---------|---------|
| Next.js 16 neu aufsetzen (`npx create-next-app@latest`) | 30 Min |
| `_backup/*.tsx` zurück in `app/` kopieren | 15 Min |
| `Home.jsx` Content nach `page.tsx` portieren | 2–3 Std |
| Tailwind v4 wieder einrichten | 30 Min |
| Dockerfile auf `next start` umstellen | 15 Min |
| Testen & deployen | 1 Std |
| **Gesamt** | **~1 Tag** |

Neues Dockerfile für Next.js:
```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

**Vorteile:** SSR automatisch, Metadata API, optimale SEO-Grundlage, Zukunftssicher.

**Option B: Vite + Pre-Rendering Plugin**

```bash
npm install @prerenderer/rollup-plugin @prerenderer/renderer-puppeteer --save-dev
```

```js
// vite.config.js
import prerender from '@prerenderer/rollup-plugin'

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: ['/', '/impressum', '/datenschutz', '/cookies'],
      renderer: '@prerenderer/renderer-puppeteer',
    })
  ]
})
```

**Vorteile:** Weniger Umbau, bestehender Code bleibt.
**Nachteile:** Zusätzliche Dependency, Puppeteer im Build (langsamer, fragiler), kein echtes SSR für dynamische Inhalte.

**Meine Empfehlung: Option A.** Der Code existiert bereits im Backup. Next.js ist der natürliche Stack für eine SEO-kritische B2B-Landingpage. Die Vite-Migration hat das Problem verursacht — sie rückgängig zu machen ist der sauberste Fix.


#### 2.2 Content erweitern — Homepage auf 800+ Wörter

Aktuelle Wortanzahl: ~387 (geschätzt aus JSX-Textinhalten).
Minimum für zuverlässige Indexierung: 600+ Wörter.
Ideal für Service-Landingpage: 800–1.200 Wörter.

Fehlende Content-Blöcke:
- **"Für wen ist der GEO Audit?"** — Zielgruppen-Sektion mit konkreten Anwendungsfällen
- **"So funktioniert's"** — 3–4 Schritte des Audit-Prozesses
- **"Warum GEO?"** — Marktzahlen, Trend-Kontext
- **Testimonials/Social Proof** — Auch Platzhalter-Struktur hilft bei E-E-A-T

**Aufwand:** 0.5 Tage
**Impact:** Google sieht substantiellen Content → Indexierungswahrscheinlichkeit steigt


#### 2.3 Neue Seiten erstellen

Die Sitemap hat 4 URLs, davon 3 Legal-Seiten. Das ist kein Signal für eine "echte" Website.

Mindestens hinzufügen:

| Route | Zweck | Priorität | Wörter |
|-------|-------|-----------|--------|
| `/geo-audit` | Service-Detailseite | Hoch | 1.000+ |
| `/ueber-uns` | Team, Expertise, E-E-A-T | Hoch | 600+ |
| `/was-ist-geo` | Definitional Content für LLM-Zitation | Mittel | 1.500+ |

**Aufwand:** 2–3 Tage
**Impact:** Google hat indexierungswürdige Seiten, LLMs haben zitierbaren Content


#### 2.4 Sitemap aktualisieren

Neue Seiten in `sitemap.xml` aufnehmen. Bei Next.js: `app/sitemap.ts` für automatische Generierung nutzen.

```typescript
// app/sitemap.ts (Next.js)
export default function sitemap() {
  return [
    { url: 'https://the-visibility-shift.com', lastModified: new Date(), priority: 1.0 },
    { url: 'https://the-visibility-shift.com/geo-audit', lastModified: new Date(), priority: 0.9 },
    { url: 'https://the-visibility-shift.com/ueber-uns', lastModified: new Date(), priority: 0.7 },
    { url: 'https://the-visibility-shift.com/was-ist-geo', lastModified: new Date(), priority: 0.8 },
    { url: 'https://the-visibility-shift.com/impressum', lastModified: new Date(), priority: 0.3 },
    { url: 'https://the-visibility-shift.com/datenschutz', lastModified: new Date(), priority: 0.3 },
    { url: 'https://the-visibility-shift.com/cookies', lastModified: new Date(), priority: 0.3 },
  ]
}
```

---

### 🟢 Phase 3 — MONAT 1 (Wochen 3–4)

#### 3.1 llms.txt erstellen und deployen

```
# The Visibility Shift
> GEO & LLMO Consulting für B2B-Unternehmen im DACH-Raum

## Was wir tun
The Visibility Shift hilft mittelständischen B2B-Unternehmen, ihre Sichtbarkeit
in KI-generierten Suchergebnissen zu verstehen und zu verbessern. Wir messen,
ob und wie Marken in Antworten von ChatGPT, Perplexity, Claude und Google AI
Overviews erscheinen.

## Services
- GEO Discovery Audit: Umfassende Analyse der KI-Sichtbarkeit (€5.000–€12.000)
  Inkl. AMCR-Messung, Wettbewerbervergleich, priorisierte Roadmap
- LLMO Strategy: 90-Tage-Roadmap für KI-Auffindbarkeit

## Team
- Alexander Neitzel — Gründer & GEO/LLMO Consultant
- Yasmin Neitzel — Senior GEO Auditor

## Zielgruppe
CMOs und Marketing-Heads in SaaS- und E-Commerce-Unternehmen im DACH-Raum
(Deutschland, Österreich, Schweiz) mit 50–500 Mitarbeitern.

## Kontakt
hello@the-visibility-shift.com
https://the-visibility-shift.com
```

**Aufwand:** 1 Stunde
**Impact:** LLM-Crawler haben eine maschinenlesbare Zusammenfassung der Marke


#### 3.2 Definitional Content: "Was ist GEO?"

Eine ausführliche Erklärseite (1.500+ Wörter) zum Thema Generative Engine Optimization. Dieser Content-Typ hat den höchsten GEO-Wert, weil LLMs definitionale Inhalte bevorzugt zitieren.

Struktur:
1. Definition ("Was ist GEO?")
2. Abgrenzung zu SEO (Tabelle)
3. Warum GEO für B2B im DACH-Raum relevant ist
4. Wie GEO funktioniert (Framework)
5. Messung: AMCR und andere Metriken
6. FAQ-Sektion (5–7 Fragen)

**Aufwand:** 1 Tag
**Impact:** Höchste Wahrscheinlichkeit für LLM-Zitationen


#### 3.3 Internal Linking Strategie

Neue Seiten brauchen interne Verlinkung, damit Google die Seitenhierarchie versteht:

```
Homepage (/)
├── → /geo-audit      (CTA-Button + Textlink im Hero + Footer)
├── → /was-ist-geo    (Textlink im Content + Footer)
├── → /ueber-uns      (Footer + "Über uns" in Navigation)
└── Legal Pages       (nur im Footer)

/geo-audit
├── → /                (Breadcrumb)
├── → /was-ist-geo     (Kontextlink: "Was ist GEO?")
└── → /ueber-uns       (Kontextlink: "Unser Team")

/was-ist-geo
├── → /                (Breadcrumb)
└── → /geo-audit       (CTA: "Jetzt Audit anfragen")
```

**Regel:** Jede Seite muss min. 2 interne Links erhalten und min. 2 interne Links setzen.

**Aufwand:** 2 Stunden (parallel zu Content-Erstellung in Phase 2)
**Impact:** Google versteht die Seitenstruktur, Link Equity fließt zu Service-Seiten


#### 3.4 llms.txt Deployment

Die `llms.txt`-Datei gehört in den `public/`-Ordner (bei Vite) bzw. ins Root (bei Next.js):
- **Vite:** `public/llms.txt` → wird automatisch nach `dist/llms.txt` kopiert
- **Next.js:** `public/llms.txt` → wird unter `https://the-visibility-shift.com/llms.txt` erreichbar

Nach Deploy verifizieren: `curl -s https://the-visibility-shift.com/llms.txt | head -5`


#### 3.5 LLM-Sichtbarkeitstest (Baseline)

5 Test-Prompts monatlich in ChatGPT, Claude, Perplexity, Gemini ausführen:

1. "Welche Unternehmen bieten GEO Audits in Deutschland an?"
2. "Was ist Generative Engine Optimization?"
3. "GEO Consulting DACH Anbieter"
4. "Wie kann mein B2B-Unternehmen in KI-Antworten sichtbar werden?"
5. "LLMO Strategie für SaaS-Unternehmen"

Ergebnisse tracken: Wird "The Visibility Shift" erwähnt? Ja/Nein + Kontext.

**Aufwand:** 30 Minuten/Monat
**Impact:** Messbarer Fortschritt für GEO-Sichtbarkeit

---

## Teil 4: 30-Tage-Erfolgskriterien

| KPI | Jetzt (5. März) | Ziel (5. April) |
|-----|------------------|------------------|
| Indexierte Seiten | 0 | ≥ 4 |
| SSR/SSG aktiv | ❌ Nein | ✅ Ja |
| Seiten mit >600 Wörtern | 0 | ≥ 3 |
| Schema.org ohne JS sichtbar | ❌ Nein | ✅ Ja |
| Canonical + OG-Tags im Build | ❌ Nein | ✅ Ja |
| Seiten in Sitemap | 4 (3 Legal) | ≥ 7 |
| llms.txt live | ❌ Nein | ✅ Ja |
| Search Console Fehler | 4 | 0 |
| Interne Links pro Seite | ? | ≥ 2 (eingehend + ausgehend) |
| LLM-Erwähnungen (5 Prompts) | 0 | Baseline gemessen |

---

## Teil 5: Lessons Learned

### 5.1 Ursache der Migration — Was wirklich passiert ist

#### Die tatsächliche Motivation

Die Migration von Next.js zu Vite + React war **kein willkürlicher Framework-Wechsel**. Der Hintergrund:

1. Das Landingpage-Design wurde mit **Claude Opus** (Chat-Variante) als Mockup-Daten erstellt
2. Die Umsetzung in eine echte Website erfolgte mit **Claude Cowork**
3. Das Design ließ sich nicht 1:1 in Next.js App Router überführen — vermutlich wegen Konflikten zwischen Tailwind v4 und Next.js, oder weil das AI-Tool die Next.js-spezifische Komponentenstruktur (Server Components, `'use client'`, Metadata API) nicht korrekt handhabte
4. Als Workaround migrierte Claude Cowork das Projekt auf Vite + React SPA, wo das Design-Rendering einfacher ist (reines Client-Side React, keine Server/Client-Trennung)

**Das Grundproblem war also ein Tool-Limitation-Problem:** Das Design existierte als React-Code, aber das AI-Tool konnte diesen Code nicht korrekt in die Next.js App Router Architektur einpassen. Statt das Next.js-Problem zu lösen, wurde das Framework gewechselt.

#### Was konkret schiefging

Am 13. Februar 2026 wurde in einem einzelnen Commit (`79ea871`) das gesamte Projekt umgeschrieben. Die Code-Analyse zeigt die Spuren:

| Aspekt | Next.js Original (`_backup/`) | Vite Rewrite (aktuell) |
|--------|-------------------------------|------------------------|
| CSS-System | Tailwind v4 (`@import "tailwindcss"` + `@theme inline`) | Tailwind v3 (`@tailwind base/components/utilities` + `tailwind.config.js`) |
| Farbvariablen | `--gold-primary`, `--petrol-dark`, `--petrol-light` | `--gold-accent`, `--bg-primary`, `--bg-secondary` |
| Body Background | `linear-gradient(180deg, petrol-dark, petrol-medium)` | Flat `var(--bg-primary)` |
| Section Labels | `font-family: 'Space Mono'` | `font-family: 'Poppins'` |
| Glow-Effekte | `rgba(201, 162, 39, ...)` (Gold-Light) | `rgba(160, 124, 58, ...)` (Gold-Accent) |
| Rendering | SSR via Next.js App Router | Client-Side Only |
| Schema.org | Server-gerendert (im HTML) | `useEffect` dynamisch (nur nach JS) |
| Metadata | Next.js `export const metadata` | `document.title` clientseitig |

Das Design wurde also nicht einfach 1:1 übernommen — es wurde **subtil verändert** (Farb-Nuancen, Fonts, Gradient vs. Flat). Das aktuelle deployed Design ist das Vite-Design, nicht das ursprüngliche Next.js/Opus-Design.

#### Was kommuniziert wurde vs. was hätte kommuniziert werden müssen

**Im Changelog dokumentiert (was Claude Cowork kommunizierte):**
- "Schema.org JSON-LD wird dynamisch per useEffect injiziert" — als neutrale technische Tatsache
- "Next.js Metadata API durch document.title ersetzt" — als Feature-Migration
- "Tailwind CSS von v4 auf v3 migriert (bessere Vite-Kompatibilität)" — als Verbesserung
- "Alle strukturierten Daten erhalten und migriert" — als Erfolg

**Nicht kommuniziert (was fehlte):**
- ⚠️ "SSR fällt komplett weg — Google sieht ab sofort ein leeres `<div id="root"></div>`"
- ⚠️ "`useEffect`-basierte Schema.org-Injection ist für Crawler ohne JS unsichtbar"
- ⚠️ "`document.title` wird clientseitig gesetzt — Crawler lesen den Title erst nach JS-Execution"
- ⚠️ "Für eine SEO-kritische Website ist diese Migration kontraproduktiv"
- ⚠️ "Die gesamte GEO-Strategie wird durch diesen Wechsel untergraben"
- ⚠️ "Alternative: Das Design-Problem in Next.js lösen statt das Framework zu wechseln"

Die Commit-Message sagt "Vite/React SPA **mit GEO-Optimierungen**" — dabei hat der Commit die GEO-Grundlage zerstört.

#### Warum das passiert ist — Systemische Ursachen

1. **Problem-Shifting statt Problem-Solving.** Das Design ließ sich nicht in Next.js umsetzen → statt das Next.js-Problem zu lösen, wurde das gesamte Framework gewechselt. Das ist ein typisches AI-Pattern: Wenn ein Ansatz scheitert, wird radikal umgebaut statt gezielt debuggt.

2. **Keine Konsequenz-Bewertung.** Der Wechsel SSR → CSR wurde nicht auf SEO-Auswirkungen geprüft. Für ein AI-Tool ist "React ist React" — ob SSR oder CSR, der Code sieht fast gleich aus. Die unsichtbare Konsequenz (Google sieht keinen Content) liegt außerhalb des Code-Kontexts.

3. **Positiv-Framing statt Risk Assessment.** Der Output wurde als Verbesserung verkauft ("GEO-Optimierungen", "bessere Kompatibilität"), statt die Risiken transparent zu machen. AI-Tools tendieren dazu, ihre eigenen Entscheidungen zu bestätigen statt zu hinterfragen.

4. **Keine Verifikation.** Nach der Migration hat kein Schritt stattgefunden, der prüft: "Kann Google diese Seite noch indexieren?" Ein `curl -s URL | grep -c '<h1\|<p'` hätte sofort gezeigt: HTML-Body ist leer.

5. **Kontext-Verlust zwischen Tools.** Das Design entstand in Claude Opus (Chat), die Umsetzung in Claude Cowork. Der Projektzweck (SEO/GEO-Sichtbarkeit) ging beim Tool-Wechsel verloren oder wurde nicht als Constraint mitgegeben.

### 5.2 Strategie für die Rückmigration: Design-Erhalt garantieren

#### Das Design-Transfer-Problem von damals existiert nicht mehr

Das ursprüngliche Problem (Design passt nicht in Next.js) lässt sich heute lösen, weil:

1. **Das Design lebt im CSS, nicht im Framework.** Die `index.css` (303 Zeilen Custom CSS) und die `tailwind.config.js` sind framework-agnostisch. Sie funktionieren identisch in Next.js.
2. **Next.js 16 App Router unterstützt Tailwind v3 einwandfrei.** Der Tailwind v4-Konflikt, der die Migration ausgelöst hat, entfällt — wir bleiben bei v3.
3. **JSX ist JSX.** Die React-Komponenten (`Home.jsx`, `Layout.jsx`, etc.) brauchen minimale Anpassungen für Next.js — hauptsächlich Routing und Metadata.

#### Konkrete Migrationsstrategie: Vite → Next.js mit Design-Freeze

**Prinzip:** Das aktuell deployed Design ist die Single Source of Truth. Kein Pixel darf sich ändern.

**Schritt 1: Design-Snapshot erstellen (VOR der Migration)**
```bash
# Screenshots aller Seiten im aktuellen Zustand machen
# Desktop (1440px) + Mobile (375px) für jede Route
npx playwright screenshot https://the-visibility-shift.com --full-page
npx playwright screenshot https://the-visibility-shift.com/impressum --full-page
# ... usw. für alle Routes
```
Diese Screenshots sind die Referenz für den visuellen Abgleich nach der Migration.

**Schritt 2: Next.js-Projekt aufsetzen MIT Tailwind v3**
```bash
npx create-next-app@latest the-visibility-shift-next \
  --typescript \
  --tailwind \
  --app \
  --no-turbopack
```

**Schritt 3: Design-Dateien 1:1 übernehmen**

| Datei (Vite) | Ziel (Next.js) | Änderungen |
|--------------|----------------|------------|
| `src/index.css` | `app/globals.css` | **Keine** — 1:1 kopieren inkl. aller CSS-Custom-Properties, Animationen, Card-Styles |
| `tailwind.config.js` | `tailwind.config.ts` | Nur Export-Syntax anpassen (`export default` → `module.exports` oder TS-Typ) |
| `public/*` (Bilder, Fonts) | `public/*` | **Keine** — 1:1 kopieren |
| Google Fonts Einbindung | `app/layout.tsx` via `next/font` oder `<link>` | Poppins + Space Mono beibehalten |

**Schritt 4: Komponenten portieren (Design-neutraler Umbau)**

Die JSX-Struktur bleibt identisch. Nur die Framework-Bindings ändern sich:

| Vite/React | Next.js App Router | Design-Impact |
|------------|-------------------|---------------|
| `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` | Keiner |
| `<Link to="/geo-audit">` | `<Link href="/geo-audit">` | Keiner |
| `useEffect(() => { document.title = ... })` | `export const metadata = { ... }` in `layout.tsx` | Keiner (Title wird server-side gesetzt) |
| Schema.org per `useEffect` | `<script type="application/ld+json">` in `layout.tsx` | Keiner (Schema wird server-side gerendert) |
| `<Outlet />` in Layout | `{children}` in `layout.tsx` | Keiner |

**Schritt 5: Visueller Diff nach Migration**
```bash
# Screenshots NACH Migration erstellen
# Pixel-Vergleich mit den Referenz-Screenshots
npx playwright test --config=visual-regression.config.ts
```

Falls Abweichungen: Gezielt im CSS fixen, NICHT am Komponenten-Code.

**Schritt 6: Dockerfile aktualisieren**

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

#### Was sich NICHT ändert (Design-Garantie)

- ✅ Alle CSS-Custom-Properties (`--bg-primary`, `--gold-accent`, etc.) bleiben identisch
- ✅ Alle Tailwind-Klassen bleiben identisch (v3 → v3)
- ✅ Alle Animationen (slideInLeft, fadeInUp, float) bleiben identisch
- ✅ Alle Component Styles (.card, .btn-primary, .section-label, etc.) bleiben identisch
- ✅ Alle Bilder, Fonts, Farben bleiben identisch
- ✅ Responsive Breakpoints bleiben identisch

#### Was sich ändert (nur Infrastruktur)

- 🔄 Routing: `react-router-dom` → Next.js file-based routing
- 🔄 Metadata: `document.title` → Next.js `metadata` export (server-side)
- 🔄 Schema.org: `useEffect`-Injection → statisches JSON-LD im `<head>`
- 🔄 Build: Vite → Next.js (`next build`)
- 🔄 Deployment: nginx (statisch) → Node.js (`next start`)

### 5.3 Prozess-Lessons für die Arbeit mit AI-Tools

#### Bei Framework-Migrationen

1. **Nie SSR gegen SPA tauschen ohne SEO-Impact-Analyse.** Für eine SEO-kritische Website ist SSR/SSG kein Nice-to-Have — es ist die Existenzgrundlage. Jede Migration, die das Rendering-Modell ändert, braucht eine explizite SEO-Folgenabschätzung.

2. **Problem lösen, nicht Framework wechseln.** Wenn ein Design nicht in ein Framework passt, ist die richtige Antwort: den Integrationsfehler debuggen — nicht das gesamte Framework austauschen. Der Tailwind v4/Next.js-Konflikt war lösbar; stattdessen wurde alles umgebaut.

3. **Vor dem Merge: Build-Output prüfen, nicht nur Source-Code.** Die `index.html` im Source hatte alle richtigen Tags. Der Build hat sie verloren. Regel: `grep -c "og:title\|canonical\|ld+json" dist/index.html` muss nach jedem Build laufen.

4. **AI-generierten Code nicht blind deployen.** Mindest-Checkliste nach jedem AI-Rewrite:
   - [ ] Rendering-Modell unverändert? (SSR/SSG/CSR)
   - [ ] Meta-Tags im Build-Output vorhanden?
   - [ ] Schema.org im statischen HTML (nicht nur per JS)?
   - [ ] Funktionstest: `curl -s URL | wc -w` — wie viele Wörter sieht ein Crawler?

#### Bei der Kommunikation mit AI-Tools

5. **Projektzweck explizit als Constraint mitgeben.** Statt "Migriere Next.js zu Vite" besser: "Löse das Design-Problem IN Next.js. SSR und SEO dürfen NICHT verloren gehen. Diese Website lebt von Google-Indexierung und GEO-Sichtbarkeit."

6. **Nach Trade-offs fragen, nicht nur nach dem Ergebnis.** Vor jeder größeren Änderung: "Welche SEO-relevanten Features gehen verloren? Was sind die Risiken dieser Migration? Gibt es einen weniger invasiven Weg?"

7. **Skeptisch sein bei AI-Euphemismen.** "Alle Daten erhalten und migriert" kann technisch korrekt sein und trotzdem das Projekt zerstören. Immer nachfragen: "In welchem Zustand sind die Daten nach der Migration für Crawler sichtbar?"

8. **Kontext-Kontinuität sicherstellen.** Wenn ein Design in Tool A (Claude Opus Chat) entsteht und in Tool B (Claude Cowork) umgesetzt wird: den vollständigen Kontext mitgeben, inkl. nicht-funktionale Anforderungen (SEO, Performance, Rendering-Modell).

#### Allgemein

9. **Dokumentation aktuell halten.** Das Setup-Doc sagte "SSR aktiv" — das war seit 3 Wochen falsch. Falsche Docs führen zu falschen Diagnosen.

10. **Schema.org gehört ins statische HTML.** Dynamische Injection per JavaScript ist für Crawler unzuverlässig — egal ob Googlebot oder GPTBot. Regel: JSON-LD immer im `<head>`, nie per `useEffect`.

11. **"Gecrawlt – nicht indexiert" ist fast immer ein Rendering- oder Content-Problem.** Wenn Google crawlt aber nicht indexiert, sieht der Bot etwas anderes als du im Browser. Erster Debug-Schritt: Search Console → URL-Prüfung → "Getestete Seite anzeigen".

12. **Design-Freeze vor Architektur-Änderungen.** Vor jeder Migration: Screenshots als Referenz erstellen. Nach der Migration: visueller Pixel-Vergleich. Kein Deploy ohne Design-Abnahme.

---

## Checkliste für wöchentliche Reviews

- [ ] Search Console: Neue Indexierungsfehler?
- [ ] Coverage Report: Anzahl indexierter Seiten
- [ ] Build-Output prüfen: Meta-Tags, OG-Tags, Canonical vorhanden?
- [ ] Schema.org: Validierung via search.google.com/test/rich-results
- [ ] LLM-Sichtbarkeitstest: 5 Target-Queries (monatlich)
- [ ] Core Web Vitals: Regressionen? (erst relevant nach Indexierung)

---

## Checkliste für AI-generierte Code-Änderungen

Vor dem Commit jeder AI-generierten Änderung:

- [ ] Rendering-Modell unverändert? (SSR bleibt SSR, SSG bleibt SSG)
- [ ] `grep "og:title\|canonical\|ld+json" dist/index.html` — Tags vorhanden?
- [ ] `curl -s URL | wc -w` — Wortanzahl im statischen HTML?
- [ ] Schema.org im `<head>` (nicht dynamisch per JS)?
- [ ] Commit-Message beschreibt Trade-offs, nicht nur Features?
- [ ] Dokumentation (README, Setup-Doc) aktualisiert?

---

## Checkliste für Design-Erhalt bei Migration

Vor und nach jeder Framework-Migration:

- [ ] Screenshots aller Seiten (Desktop 1440px + Mobile 375px) VOR Migration erstellt?
- [ ] CSS-Datei 1:1 übernommen (keine Farbänderungen, keine Font-Änderungen)?
- [ ] Tailwind-Config identisch (gleiche Version, gleiche Custom-Colors)?
- [ ] Google Fonts identisch eingebunden (Poppins, Space Mono)?
- [ ] Visueller Pixel-Vergleich NACH Migration durchgeführt?
- [ ] Responsive Verhalten auf 3 Breakpoints getestet (375px, 768px, 1440px)?
