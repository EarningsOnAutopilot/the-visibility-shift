# Arbeitspakete: SEO/GEO Recovery — The Visibility Shift

**Erstellt:** 6. März 2026
**Basiert auf:** MASSNAHMENPLAN-SEO-GEO-2026-03-05.md
**Ziel:** Vollständige SEO/GEO-Recovery durch Migration Vite SPA → Next.js App Router
**Arbeitsumgebung:** Lokal auf Mac, Localhost-Verifikation vor jedem Deploy

---

## Regeln für Claude Code

### Arbeitsweise
1. **Qualität > Quantität.** Jedes Arbeitspaket wird vollständig abgeschlossen, bevor das nächste beginnt.
2. **Schrittweise arbeiten.** Keine Batch-Änderungen. Jede Datei wird einzeln bearbeitet und geprüft.
3. **Websuche einbeziehen.** Vor jeder technischen Entscheidung aktuelle Best Practices recherchieren (Next.js Docs, Google Search Central, Schema.org).
4. **Unklarheiten sofort anzeigen.** Nicht raten. Wenn etwas unklar ist → Stop → Frage an den Nutzer.
5. **Tests nach jedem Sprint.** Kein Arbeitspaket gilt als abgeschlossen ohne Tests.
6. **Changelog nach jedem Arbeitspaket.** Format siehe Template unten.

### SEO/GEO Constraint
Jede Code-Änderung wird gegen die **SEO/GEO Prüf-Checkliste** (siehe unten) geprüft. Kein Commit ohne bestandene Checkliste.

### Design-Constraint
Das aktuell deployed Design (Vite SPA) ist die **Single Source of Truth**. Kein Pixel darf sich ändern. Referenz-Screenshots liegen in `design-reference/` — 32 Screenshots (Desktop), alle Sektionen und Seiten abgedeckt:

**Homepage (16 Sektionen):**
- `homepage-desktop-full header.png` — Navigation + Hero
- `homepage-desktop-full.png` / `homepage-desktop-full 2.png` — Hero-Bereich
- `homepage-desktop-full - das problem.png` — Problem-Sektion
- `homepage-desktop-full - Die Lösung.png` — Lösungs-Sektion
- `homepage-desktop-full - der Prozess.png` — Prozess-Sektion
- `homepage-desktop-full - investition.png` — Pricing/Investition
- `homepage-desktop-full - klartext.png` / `klartext 2.png` / `klartext 3.png` — Klartext-Sektion
- `homepage-desktop-full - das team.png` / `das team 2.png` — Team-Sektion
- `homepage-desktop-full - karriere.png` / `karriere 2.png` — Karriere-Sektion
- `homepage-desktop-full - wissen.png` — Wissen/FAQ-Sektion
- `homepage-desktop-full - kostenloser blind spot check.png` / `kostenlos.png` — Blind Spot Check
- `homepage-desktop-full - footer.png` — Footer

**Legal Pages:**
- `homepage-desktop-full impressum.png` / `impressum 2.png` / `impressum 3.png`
- `homepage-desktop-full Datenschutzerklärung.png` bis `Datenschutzerklärung 8.png` (8 Teile)
- `homepage-desktop-full Cookie-Richtlinie.png` bis `Cookie-Richtlinie 3.png` (3 Teile)

---

## SEO/GEO Prüf-Checkliste

> Abgeleitet aus den Lessons Learned (Maßnahmenplan Teil 5). Diese Checkliste wird nach JEDEM Arbeitspaket durchlaufen.

### A. Rendering & Crawlability
- [ ] **Rendering-Modell:** SSR/SSG ist aktiv (NICHT CSR/SPA)
- [ ] **HTML-Body prüfen:** `curl -s http://localhost:3000 | grep -c '<h1\|<h2\|<p'` → muss > 0 sein
- [ ] **Wortanzahl im statischen HTML:** `curl -s http://localhost:3000 | sed 's/<[^>]*>//g' | wc -w` → muss > 100 sein
- [ ] **Kein leeres `<div id="root">`** im Server-Response

### B. Meta-Tags & Open Graph
- [ ] **Title-Tag** im HTML-Source (nicht per JS gesetzt)
- [ ] **Meta Description** im HTML-Source
- [ ] **Canonical URL** vorhanden und korrekt
- [ ] **OG-Tags** (og:title, og:description, og:url, og:image, og:type, og:locale)
- [ ] **Twitter Card Tags** (twitter:card, twitter:title, twitter:description, twitter:image)
- [ ] **Hreflang** für de-DE (falls zutreffend)

### C. Schema.org / Structured Data
- [ ] **JSON-LD im statischen HTML** (im `<head>`, NICHT per useEffect/JS)
- [ ] **Alle 7 Schema-Blöcke** vorhanden: Organization, WebSite, ProfessionalService, Person×2, HowTo, BreadcrumbList
- [ ] **Validierung:** Schema.org Validator oder Google Rich Results Test bestanden

### D. Technische SEO
- [ ] **robots.txt** erreichbar und korrekt (User-agent: *, Allow: /)
- [ ] **Sitemap.xml** erreichbar, valides XML, alle Seiten enthalten
- [ ] **Cookiebot** korrekt eingebunden (vor allen anderen Scripts)
- [ ] **Favicon** vorhanden
- [ ] **Keine Console-Errors** im Browser

### E. GEO / AI-Sichtbarkeit
- [ ] **Schema.org ohne JavaScript lesbar** (für GPTBot, ClaudeBot, PerplexityBot)
- [ ] **robots.txt erlaubt AI-Crawler** (GPTBot, ClaudeBot, PerplexityBot, Google-Extended)
- [ ] **Content im HTML sichtbar** ohne JS-Rendering (für AI-Crawler die kein JS rendern)
- [ ] **llms.txt** vorhanden (ab Phase 3)

### F. Design-Erhalt
- [ ] **CSS-Custom-Properties identisch** (--bg-primary, --gold-accent, etc.)
- [ ] **Tailwind-Config identisch** (gleiche Custom-Colors, v3)
- [ ] **Google Fonts identisch** (Poppins 400/500/600/700)
- [ ] **Visueller Vergleich** mit Referenz-Screenshots: keine sichtbaren Abweichungen
- [ ] **Responsive:** Mobile (375px), Tablet (768px), Desktop (1440px) geprüft

---

## Phase 1: Sofort-Fixes (Vite SPA — bestehender Code)

> Ziel: Google sieht wenigstens Metadaten und Schema.org. Schnelle Indexierung ermöglichen.

### AP 1.1 — Build aktualisieren & Meta-Tags retten

**Problem:** `dist/index.html` (deployed) hat keine OG-Tags, kein Canonical, kein Cookiebot.

**Schritte:**
1. `npm run build` ausführen
2. `dist/index.html` prüfen: Enthält der Output alle Tags aus `index.html`?
3. Vergleich: `diff index.html dist/index.html` — fehlende Tags identifizieren
4. Falls Tags fehlen: Vite-Config prüfen, ggf. `vite-plugin-html` einsetzen
5. Erneut bauen und verifizieren

**Akzeptanzkriterien:**
- `grep -c "og:title\|canonical\|Cookiebot" dist/index.html` → mindestens 3
- Title konsistent: "GEO Discovery Audit" (nicht "Strategic")

**Aufwand:** 30 Min
**Changelog:** Ja

---

### AP 1.2 — Schema.org in index.html hardcoden

**Problem:** JSON-LD wird per `useEffect` injiziert — Crawler ohne JS sehen es nicht.

**Schritte:**
1. Alle 7 Schema-Objekte aus `src/components/Layout.jsx` (Zeilen 5–151) extrahieren
2. Als `<script type="application/ld+json">` Blöcke in den `<head>` von `index.html` einfügen
3. **NICHT** aus Layout.jsx entfernen (React-App soll weiterhin funktionieren)
4. Build ausführen und `dist/index.html` prüfen
5. Schema.org Validator: https://validator.schema.org/ → JSON-LD aus dem Build testen

**Akzeptanzkriterien:**
- `grep -c "application/ld+json" dist/index.html` → 7
- Schema.org Validator: 0 Fehler

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 1.3 — Validierung & Quick-Checks

**Schritte:**
1. `dist/` lokal mit `npx serve dist` oder `npm run preview` testen
2. robots.txt erreichbar: `curl -s http://localhost:4173/robots.txt`
3. sitemap.xml erreichbar: `curl -s http://localhost:4173/sitemap.xml`
4. OG-Image erreichbar: `curl -s -o /dev/null -w "%{http_code}" http://localhost:4173/og-image.png`
5. Mobile-Ansicht in Browser DevTools (375px) testen — keine Layout-Brüche

**Akzeptanzkriterien:**
- robots.txt: HTTP 200, enthält "Allow: /"
- sitemap.xml: HTTP 200, valides XML
- og-image.png: HTTP 200
- Keine Console-Errors im Browser

**Aufwand:** 30 Min
**Changelog:** Ja

---

### AP 1.4 — Dokumentation korrigieren

**Schritte:**
1. `docs/README.md` aktualisieren mit korrektem Stack
2. Hinweis auf SSR-Problem dokumentieren
3. Verweis auf Maßnahmenplan einfügen

**Akzeptanzkriterien:**
- Kein Dokument behauptet "SSR aktiv" oder "Next.js"
- Aktueller technischer Stand korrekt beschrieben

**Aufwand:** 15 Min
**Changelog:** Ja

---

### ⬛ Phase 1 Abschluss-Test

Nach Abschluss aller Phase-1-APs:
1. Vollständiger Build (`npm run build`)
2. Lokaler Server (`npm run preview`)
3. SEO/GEO Prüf-Checkliste Abschnitte B, C, D durchlaufen
4. Screenshot-Vergleich: Design unverändert?

**Ergebnis an Nutzer melden:** Was hat sich verbessert? Was bleibt offen (→ Phase 2)?

---

## Phase 2: Next.js Migration (lokal auf Mac)

> Ziel: SSR aktivieren, Design 1:1 erhalten, localhost-Verifikation vor Deploy.
> WICHTIG: Code wird dupliziert. Originalcode bleibt unverändert.

### AP 2.0 — Vorbereitung: Design-Freeze & Projekt-Duplikation

**Schritte:**
1. **Referenz-Screenshots sichern:** Bestehende Screenshots im Root (`screenshot-*.png`) als Design-Referenz katalogisieren
2. **Node.js Version prüfen:** `node -v` und `npm -v` — dokumentieren
3. **Websuche:** Aktuelle Next.js Version prüfen (docs.nextjs.org), Tailwind v3 Kompatibilität bestätigen
4. **Projekt duplizieren:** Neues Verzeichnis `the-visibility-shift-nextjs/` erstellen (NICHT im bestehenden Projekt)
5. **Git initialisieren:** Neues Git-Repo für die Next.js-Version

**Akzeptanzkriterien:**
- Node.js Version dokumentiert
- Neues Verzeichnis existiert und ist leer
- Originales Vite-Projekt unverändert

**Aufwand:** 30 Min
**Changelog:** Ja (erstes Changelog im neuen Projekt)

---

### AP 2.1 — Next.js Projekt aufsetzen

**Schritte:**
1. **Websuche:** `create-next-app` aktuelle Optionen prüfen
2. Next.js App erstellen:
   ```bash
   npx create-next-app@latest the-visibility-shift-nextjs \
     --typescript \
     --tailwind \
     --app \
     --no-turbopack \
     --eslint
   ```
3. Tailwind v3 Kompatibilität bestätigen (Next.js 15+ verwendet ggf. Tailwind v4 per Default — wir brauchen v3!)
4. Falls Tailwind v4 installiert wurde: Downgrade auf v3.4.x
5. PostCSS-Config prüfen
6. Dev-Server starten: `npm run dev` — Default-Next.js-Seite muss laden
7. **Websuche:** Next.js App Router best practices für SEO (2025/2026)

**Akzeptanzkriterien:**
- `npm run dev` startet ohne Fehler
- Tailwind v3 installiert (prüfen: `npx tailwindcss --help | head -1`)
- App Router aktiv (Ordner `app/` existiert)

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 2.2 — CSS & Design 1:1 übertragen

**Schritte:**
1. `src/index.css` (303 Zeilen) → `app/globals.css` kopieren
   - Tailwind-Directives beibehalten: `@tailwind base; @tailwind components; @tailwind utilities;`
   - Alle CSS-Custom-Properties 1:1 übernehmen
   - Alle Animationen (@keyframes) 1:1 übernehmen
   - Alle Komponentenstyles (.card, .btn-primary, etc.) 1:1 übernehmen
2. `tailwind.config.js` → `tailwind.config.ts` konvertieren
   - Nur Syntax anpassen (JS → TS Export)
   - Farben, Fonts, Content-Pfade identisch halten
   - Content-Pfad anpassen: `./src/**` → `./app/**`, `./components/**`
3. Google Fonts einbinden in `app/layout.tsx`:
   - Poppins (400, 500, 600, 700) — via `next/font/google` ODER `<link>`
   - Prüfen: Wird Space Mono irgendwo genutzt? → Falls ja, ebenfalls einbinden
4. `postcss.config.js` übernehmen
5. Alle Dateien aus `public/` 1:1 kopieren (Bilder, Favicon, robots.txt, sitemap.xml, etc.)

**Akzeptanzkriterien:**
- `diff` zwischen alter und neuer CSS-Datei zeigt NUR Pfad-Anpassungen, keine Inhaltsänderungen
- Tailwind-Config: identische Custom-Colors
- Dev-Server zeigt korrekte Fonts (Poppins)

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 2.3 — Homepage-Komponente portieren (Home.jsx → page.tsx)

**Schritte:**
1. `src/pages/Home.jsx` (1.282 Zeilen) analysieren
2. Schema.org-Daten (Zeilen 1–195) SEPARAT behandeln → werden in AP 2.4 (Layout) verarbeitet
3. JSX-Markup (ab ~Zeile 196) → `app/page.tsx` übertragen
4. **Websuche:** Next.js Server Components vs Client Components — welche Teile brauchen `'use client'`?
5. Interaktive Elemente identifizieren:
   - FAQ Accordion (State-basiert) → eigene Client Component
   - Tally Form Embed → prüfen ob Script-Einbindung in Next.js funktioniert
   - Animationen → CSS-basiert, kein JS nötig
   - Scroll-Events → falls vorhanden, Client Component
6. Statische Teile als Server Components belassen (kein `'use client'`)
7. `react-router-dom` Imports entfernen, durch `next/link` ersetzen:
   - `<Link to="...">` → `<Link href="...">`
8. Alle Klassennamen EXAKT beibehalten

**Akzeptanzkriterien:**
- `npm run dev` → Homepage rendert im Browser
- Visueller Vergleich mit `screenshot-hero.png` — keine sichtbaren Abweichungen
- Keine Console-Errors
- Server-Side-Rendered: `curl -s http://localhost:3000 | grep -c '<h1'` → > 0

**Aufwand:** 3 Std
**Changelog:** Ja

---

### AP 2.4 — Layout, Metadata & Schema.org (SSR)

**Schritte:**
1. `app/layout.tsx` erstellen mit:
   - **Websuche:** Next.js Metadata API aktuelle Syntax prüfen
   - `export const metadata: Metadata` mit allen Tags aus `index.html`:
     - Title, Description, Canonical, OG-Tags, Twitter Cards
     - robots: `index, follow`
   - Google Fonts Einbindung
   - Cookiebot Script (im `<head>`, VOR anderen Scripts)
   - `<html lang="de">`
2. Schema.org JSON-LD als statische `<script>` Tags im Layout:
   - Alle 7 Schema-Blöcke aus `Layout.jsx` (Zeilen 5–151)
   - Server-Side gerendert (NICHT per useEffect!)
   - **Websuche:** Next.js empfohlene Methode für JSON-LD (2025/2026)
3. `{children}` statt `<Outlet />`
4. Favicon/Icons konfigurieren

**Akzeptanzkriterien:**
- `curl -s http://localhost:3000 | grep -c "application/ld+json"` → 7
- `curl -s http://localhost:3000 | grep "og:title"` → vorhanden
- `curl -s http://localhost:3000 | grep "canonical"` → vorhanden
- Cookiebot-Script im HTML-Source sichtbar
- Schema.org Validator: 0 Fehler

**Aufwand:** 2 Std
**Changelog:** Ja

---

### AP 2.5 — Routing & Legal Pages

**Schritte:**
1. `src/pages/Impressum.jsx` → `app/impressum/page.tsx`
2. `src/pages/Datenschutz.jsx` → `app/datenschutz/page.tsx`
3. `src/pages/Cookies.jsx` → `app/cookies/page.tsx`
4. Für jede Seite: eigene `metadata` Export-Objekte mit Title, Description, Canonical
5. **Websuche:** Next.js dynamische Metadata pro Route — aktuelle API
6. Navigation/Footer Links prüfen: Alle internen Links funktionieren
7. 404-Seite: `app/not-found.tsx` erstellen (optional aber empfohlen)

**Akzeptanzkriterien:**
- Alle 4 Routes erreichbar (/, /impressum, /datenschutz, /cookies)
- Jede Route hat eigene Title + Meta Description im HTML-Source
- Interne Links funktionieren (kein Full Page Reload)
- `curl -s http://localhost:3000/impressum | grep '<h1'` → vorhanden

**Aufwand:** 1.5 Std
**Changelog:** Ja

---

### AP 2.6 — Integrationen: Cookiebot, Tally, OG-Image

**Schritte:**
1. **Cookiebot:** Bereits in AP 2.4 eingebunden — hier verifizieren:
   - Script lädt korrekt
   - Cookie-Banner erscheint
   - Blocking-Mode funktioniert
2. **Tally Form (Blindspot Check):**
   - **Websuche:** Tally Embed in Next.js App Router — empfohlene Methode
   - Script-Tag oder Iframe korrekt einbinden
   - Testen: Formular lädt und ist ausfüllbar
3. **OG-Image:**
   - `public/og-image.png` übernommen (AP 2.2)
   - Prüfen: `http://localhost:3000/og-image.png` → HTTP 200
   - Optional: `generate_og_image.py` dokumentieren (nicht migrieren)
4. **Externe Links:**
   - LinkedIn-Links funktionieren
   - E-Mail-Links (mailto:) funktionieren

**Akzeptanzkriterien:**
- Cookiebot-Banner erscheint beim ersten Besuch
- Tally-Formular lädt und ist funktional
- OG-Image erreichbar
- Keine 404-Fehler bei externen Ressourcen

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 2.7 — Visueller Vergleich & Responsiveness

**Schritte:**
1. **Desktop (1440px):**
   - Screenshot der localhost-Version erstellen
   - Manueller Pixel-Vergleich mit `screenshot-hero.png`, `screenshot-problem.png`, etc.
   - Abweichungen dokumentieren
2. **Mobile (375px):**
   - Browser DevTools → iPhone SE Größe
   - Alle Sektionen durchscrollen
   - Kein Overflow, kein abgeschnittener Text, kein Layout-Bruch
3. **Tablet (768px):**
   - Zwischengröße testen
4. **Bei Abweichungen:**
   - NUR im CSS fixen (globals.css)
   - NICHT am Komponenten-JSX
   - Jede CSS-Änderung dokumentieren und begründen

**Akzeptanzkriterien:**
- Kein sichtbarer Unterschied zum deployed Vite-Design
- Responsive auf 3 Breakpoints getestet
- Keine Console-Errors
- Falls CSS-Fixes nötig: alle dokumentiert im Changelog

**Aufwand:** 1.5 Std
**Changelog:** Ja

---

### AP 2.8 — Dockerfile für Next.js

**Schritte:**
1. **Websuche:** Next.js Docker Deployment best practices (2025/2026), Output Standalone
2. Dockerfile erstellen:
   ```dockerfile
   FROM node:20-alpine AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   FROM node:20-alpine AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   FROM node:20-alpine AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   COPY --from=builder /app/public ./public
   COPY --from=builder /app/.next/standalone ./
   COPY --from=builder /app/.next/static ./.next/static
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```
3. **Websuche:** Next.js `output: 'standalone'` Konfiguration
4. `next.config.ts` anpassen: `output: 'standalone'`
5. Lokal testen: `docker build -t tvs-next . && docker run -p 3000:3000 tvs-next`
6. SSR-Verifikation im Docker-Container

**Akzeptanzkriterien:**
- Docker-Image baut fehlerfrei
- Container startet und zeigt die Website
- SSR funktioniert im Container: `curl -s http://localhost:3000 | grep '<h1'` → vorhanden
- Schema.org im Container-HTML sichtbar

**Aufwand:** 1.5 Std
**Changelog:** Ja

---

### AP 2.9 — Vollständiger Localhost-Abnahmetest

**Dies ist der FINALE TEST vor dem Deployment.**

**Schritte:**
1. **Komplette SEO/GEO Prüf-Checkliste** (alle Abschnitte A–F) durchlaufen
2. **Lighthouse-Audit** in Chrome DevTools:
   - Performance Score notieren
   - SEO Score muss ≥ 90 sein
   - Accessibility Score notieren
   - Best Practices Score notieren
3. **Google Rich Results Test** (mit dem HTML-Source):
   - Alle Schema.org-Blöcke werden erkannt
   - Keine Fehler
4. **Crawl-Simulation:**
   ```bash
   # Was ein Crawler sieht (ohne JS):
   curl -s http://localhost:3000 | wc -w
   # Muss > 300 Wörter sein

   curl -s http://localhost:3000 | grep -c '<h1\|<h2\|<h3'
   # Muss > 5 sein

   curl -s http://localhost:3000 | grep -c 'application/ld+json'
   # Muss = 7 sein
   ```
5. **Alle Routes testen:** /, /impressum, /datenschutz, /cookies
6. **Design-Vergleich:** Finale Screenshots erstellen und mit Referenz vergleichen
7. **Ergebnis-Report** an Nutzer: Go/No-Go für Deployment

**Akzeptanzkriterien:**
- SEO/GEO Prüf-Checkliste: 100% bestanden
- Lighthouse SEO ≥ 90
- Crawl-Simulation: > 300 Wörter im HTML, 7 Schema-Blöcke
- Design: Keine sichtbaren Abweichungen
- Nutzer hat Go gegeben

**Aufwand:** 1.5 Std
**Changelog:** Ja (Abschluss-Changelog Phase 2)

---

## Phase 3: Deployment & GEO-Optimierung

> Erst nach erfolgreichem Localhost-Abnahmetest (AP 2.9) und Go vom Nutzer.

### AP 3.1 — Coolify-Konfiguration anpassen

**Schritte:**
1. **Websuche:** Coolify v4 Next.js Deployment Konfiguration
2. Bestehende Coolify-Konfiguration auf Hetzner CPX22 dokumentieren
3. Anpassungen identifizieren:
   - Build-Command: `npm run build` (bleibt gleich)
   - Start-Command: `npm start` (statt nginx)
   - Port: 3000 (statt 80)
   - Dockerfile: Neues Dockerfile verwenden
4. **NICHT selbst deployen** — Konfiguration dokumentieren und dem Nutzer zur Überprüfung vorlegen
5. Rollback-Plan erstellen: Was tun, wenn Deploy fehlschlägt?

**Akzeptanzkriterien:**
- Deployment-Anleitung dokumentiert
- Rollback-Plan existiert
- Nutzer hat die Konfiguration geprüft

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 3.2 — llms.txt erstellen

**Schritte:**
1. **Websuche:** llms.txt Standard — aktuelle Spezifikation und Best Practices
2. `public/llms.txt` erstellen mit:
   - Firmenname, Beschreibung
   - Services mit Preisrange
   - Team
   - Zielgruppe
   - Kontaktdaten
3. `public/llms-full.txt` erstellen (ausführlichere Version, falls Standard das vorsieht)
4. Erreichbarkeit testen: `http://localhost:3000/llms.txt`

**Akzeptanzkriterien:**
- llms.txt entspricht aktuellem Standard
- HTTP 200 unter /llms.txt
- Inhaltlich korrekt und vollständig

**Aufwand:** 1 Std
**Changelog:** Ja

---

### AP 3.3 — Automatische Sitemap

**Schritte:**
1. **Websuche:** Next.js App Router automatische Sitemap-Generierung (2025/2026)
2. `app/sitemap.ts` erstellen
3. Statische `public/sitemap.xml` entfernen (wird jetzt dynamisch generiert)
4. robots.txt anpassen: Sitemap-URL hinzufügen (`Sitemap: https://the-visibility-shift.com/sitemap.xml`)
5. Testen: `curl -s http://localhost:3000/sitemap.xml` — valides XML mit allen Routes

**Akzeptanzkriterien:**
- Dynamische Sitemap enthält alle Routes
- robots.txt verweist auf Sitemap
- XML valide

**Aufwand:** 30 Min
**Changelog:** Ja

---

### AP 3.4 — Post-Deployment Verifikation

> Nach erfolgreichem Deploy auf Hetzner.

**Schritte:**
1. Live-Site aufrufen: `https://the-visibility-shift.com`
2. SSR-Verifikation: `curl -s https://the-visibility-shift.com | grep '<h1'`
3. Schema.org: `curl -s https://the-visibility-shift.com | grep 'application/ld+json'`
4. robots.txt: `https://the-visibility-shift.com/robots.txt`
5. sitemap.xml: `https://the-visibility-shift.com/sitemap.xml`
6. llms.txt: `https://the-visibility-shift.com/llms.txt`
7. OG-Image: `https://the-visibility-shift.com/og-image.png`
8. Google Search Console:
   - URL-Prüfung für alle Routes
   - "Live-URL testen" — prüfen was Google sieht
   - Indexierung beantragen für alle URLs
   - Sitemap erneut einreichen
9. **Vollständige SEO/GEO Prüf-Checkliste** auf der Live-Site
10. Ergebnis dokumentieren

**Akzeptanzkriterien:**
- Komplette SEO/GEO Prüf-Checkliste bestanden auf Live-Site
- Search Console zeigt valides HTML mit Content
- Indexierung beantragt

**Aufwand:** 1 Std
**Changelog:** Ja (Abschluss-Changelog Phase 3)

---

## Templates

### Changelog-Template

> Nach JEDEM Arbeitspaket ausfüllen und in `CHANGELOG-MIGRATION.md` anhängen.

```markdown
## [AP X.X] — YYYY-MM-DD

### Zusammenfassung
Kurze Beschreibung, was in diesem Arbeitspaket umgesetzt wurde.

### Änderungen
- **Datei:** `pfad/zur/datei.tsx`
  **Art:** Neu erstellt / Modifiziert / Gelöscht
  **Was:** Beschreibung der Änderung

### SEO/GEO Checkliste
- [x] Rendering-Modell: [SSR/CSR/nicht relevant]
- [x] HTML-Body Content: [Ja/Nein/nicht relevant]
- [x] Meta-Tags: [vorhanden/nicht relevant]
- [x] Schema.org: [statisch/dynamisch/nicht relevant]
- [x] Design: [unverändert/angepasst — Begründung]

### Tests
- [ ] Test 1: Beschreibung → Ergebnis
- [ ] Test 2: Beschreibung → Ergebnis

### Offene Punkte / Unklarheiten
- Keine / Liste der offenen Fragen

### Nächster Schritt
→ AP X.X: Kurzbeschreibung
```

---

### Sprint-Test-Vorlage

> Nach jedem abgeschlossenen Arbeitspaket durchführen.

```markdown
## Sprint-Test: AP X.X — YYYY-MM-DD

### 1. Funktionstest
- [ ] Dev-Server startet: `npm run dev` → kein Fehler
- [ ] Seite lädt im Browser: http://localhost:3000
- [ ] Keine Console-Errors in DevTools

### 2. SSR-Verifikation (ab AP 2.3)
- [ ] `curl -s http://localhost:3000 | head -50` → HTML enthält Content
- [ ] `curl -s http://localhost:3000 | grep -c '<h1\|<h2'` → > 0

### 3. Design-Check
- [ ] Visueller Vergleich mit Referenz-Screenshots
- [ ] Mobile (375px) getestet
- [ ] Desktop (1440px) getestet

### 4. SEO-Quick-Check (relevant für AP)
- [ ] Meta-Tags im HTML-Source vorhanden
- [ ] Schema.org im HTML-Source vorhanden (ab AP 2.4)

### 5. Ergebnis
- ✅ Bestanden / ❌ Fehlgeschlagen
- Kommentar: ...
```

---

## Zeitplan-Übersicht

| Phase | APs | Geschätzter Aufwand | Abhängigkeiten |
|-------|-----|---------------------|----------------|
| Phase 1 | AP 1.1–1.4 | ~2 Stunden | Keine |
| Phase 2 | AP 2.0–2.9 | ~14 Stunden (~2 Tage) | Phase 1 abgeschlossen |
| Phase 3 | AP 3.1–3.4 | ~3.5 Stunden | Phase 2 + Nutzer-Go |
| **Gesamt** | **17 APs** | **~19.5 Stunden** | |

---

## Wichtige Dateien-Referenz

### Vite-Projekt (Original — NICHT verändern ab Phase 2)
| Datei | Beschreibung | Relevanz |
|-------|-------------|----------|
| `src/pages/Home.jsx` | Gesamter Homepage-Content (1.282 Zeilen) | Portierung → page.tsx |
| `src/components/Layout.jsx` | Schema.org (7 Blöcke) + Layout | Portierung → layout.tsx |
| `src/index.css` | 303 Zeilen Custom CSS + Tailwind | 1:1 → globals.css |
| `tailwind.config.js` | Custom-Colors, Fonts | 1:1 → tailwind.config.ts |
| `index.html` | Meta-Tags, OG, Cookiebot | Referenz für metadata Export |
| `public/*` | Statische Assets | 1:1 kopieren |
| `screenshot-*.png` | Design-Referenz | Visueller Vergleich |
| `_backup/*.tsx` | Original Next.js Dateien | Referenz (NICHT direkt verwenden) |

### Neue Dateien (Next.js-Projekt)
| Datei | Erstellt in AP | Beschreibung |
|-------|---------------|-------------|
| `app/layout.tsx` | AP 2.4 | Root Layout mit Metadata + Schema.org |
| `app/page.tsx` | AP 2.3 | Homepage-Content (Server Component + Client Components) |
| `app/globals.css` | AP 2.2 | 1:1 Kopie von index.css |
| `app/impressum/page.tsx` | AP 2.5 | Legal Page |
| `app/datenschutz/page.tsx` | AP 2.5 | Legal Page |
| `app/cookies/page.tsx` | AP 2.5 | Legal Page |
| `app/sitemap.ts` | AP 3.3 | Automatische Sitemap |
| `public/llms.txt` | AP 3.2 | LLM-Crawler Info |
| `Dockerfile` | AP 2.8 | Next.js Docker Deployment |
| `CHANGELOG-MIGRATION.md` | AP 2.0+ | Lückenlose Dokumentation |
