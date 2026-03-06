# Changelog: SEO/GEO Migration — The Visibility Shift

---

## [AP 1.1] — 2026-03-06

### Zusammenfassung
Production Build aktualisiert. Der alte `dist/`-Ordner enthielt einen veralteten Build ohne OG-Tags, Canonical und Cookiebot. Neuer Build übernimmt jetzt alle Meta-Tags korrekt aus `index.html`.

### Änderungen
- **Datei:** `dist/` (gesamter Build-Output)
  **Art:** Neu gebaut (`npm run build`)
  **Was:** Veralteter Build durch aktuellen ersetzt. Build-Größe: index.html 9.83 KB, CSS 25.94 KB, JS 284.31 KB

### SEO/GEO Checkliste
- [x] Rendering-Modell: CSR/SPA (unverändert — Phase 2 ändert auf SSR)
- [x] Meta-Tags: ✅ Title, Description, Canonical, OG (9 Tags), Twitter (4 Tags)
- [x] Schema.org: nicht relevant für dieses AP
- [x] Design: unverändert

### Tests
- [x] `grep -c "og:title|canonical|Cookiebot" dist/index.html` → 3 ✅
- [x] Title = "GEO Discovery Audit" (nicht mehr "Strategic") ✅

### Offene Punkte
- Keine

### Nächster Schritt
→ AP 1.2: Schema.org in index.html hardcoden

---

## [AP 1.2] — 2026-03-06

### Zusammenfassung
Alle 7 Schema.org JSON-LD Blöcke aus `Layout.jsx` als statische `<script>` Tags in `index.html` eingefügt. Crawler ohne JavaScript können jetzt alle strukturierten Daten lesen.

### Änderungen
- **Datei:** `index.html`
  **Art:** Modifiziert
  **Was:** 7 `<script type="application/ld+json">` Blöcke im `<head>` eingefügt: Organization, WebSite, ProfessionalService, Person (Alexander), Person (Yasmin), HowTo, BreadcrumbList
- **Datei:** `dist/index.html`
  **Art:** Neu gebaut
  **Was:** Rebuild mit den neuen Schema.org Blöcken. Build-Größe index.html stieg von 2.33 KB auf 9.83 KB.
- **Datei:** `src/components/Layout.jsx`
  **Art:** NICHT verändert
  **Was:** useEffect-basierte Schema-Injection bleibt bestehen (React-App braucht sie weiterhin)

### SEO/GEO Checkliste
- [x] Schema.org: ✅ 7 Blöcke statisch im HTML
- [x] JSON-Validierung: ✅ Alle 7 Blöcke sind valides JSON
- [x] Design: unverändert (nur `<head>` geändert)

### Tests
- [x] `grep -c "application/ld+json" dist/index.html` → 7 ✅
- [x] Python JSON-Validierung: alle 7 Blöcke parsen fehlerfrei ✅
- [x] Schema-Typen korrekt: Organization, WebSite, ProfessionalService, Person×2, HowTo, BreadcrumbList ✅

### Offene Punkte
- Schema.org ist jetzt doppelt (statisch + dynamisch per useEffect). Ist akzeptabel und schadet nicht. Wird in Phase 2 (Next.js) bereinigt.

### Nächster Schritt
→ AP 1.3: Validierung & Quick-Checks

---

## [AP 1.3] — 2026-03-06

### Zusammenfassung
Lokale Validierung aller statischen Assets und SEO-relevanten Dateien gegen den Preview-Server.

### Änderungen
- Keine Dateiänderungen (nur Tests)

### Tests
- [x] robots.txt: HTTP 200, enthält "Allow: /", AI-Crawler erlaubt ✅
- [x] sitemap.xml: HTTP 200, valides XML, 4 URLs mit hreflang ✅
- [x] og-image.png: HTTP 200 ✅
- [x] favicon.ico: HTTP 200 ✅
- [x] Schema.org: 7 Blöcke im HTML ✅
- [x] Canonical: vorhanden und korrekt ✅
- [x] OG-Tags: 9 Tags vorhanden ✅
- [x] Twitter Cards: 4 Tags vorhanden ✅

### Offene Punkte
- Keine

### Nächster Schritt
→ AP 1.4: Dokumentation korrigieren

---

## [AP 1.4] — 2026-03-06

### Zusammenfassung
`docs/README.md` aktualisiert. Falsche Angaben korrigiert, SEO-Problem prominent dokumentiert, Verweis auf Maßnahmenplan und Arbeitspakete eingefügt.

### Änderungen
- **Datei:** `docs/README.md`
  **Art:** Modifiziert (komplett überarbeitet)
  **Was:**
  - Title korrigiert: "GEO Strategic Audit" → "GEO Discovery Audit"
  - ⚠️ SEO-Warning-Box eingefügt (kein SSR, leeres div#root)
  - Tech Stack korrigiert: "KEIN SSR" explizit vermerkt
  - Deployment-Info aktualisiert: nginx + Coolify + Hetzner CPX22
  - Schema.org-Abschnitt: Doppelte Einbindung (statisch + dynamisch) dokumentiert
  - Verweise auf MASSNAHMENPLAN und ARBEITSPAKETE eingefügt

### SEO/GEO Checkliste
- [x] Kein Dokument behauptet "SSR aktiv" ✅
- [x] Aktueller technischer Stand korrekt beschrieben ✅

### Tests
- [x] README enthält "KEIN SSR" ✅
- [x] README verweist auf Maßnahmenplan ✅

### Offene Punkte
- Keine

---

## [Phase 1 Abschluss] — 2026-03-06

### Zusammenfassung
Phase 1 komplett abgeschlossen. Alle 4 Arbeitspakete (AP 1.1–1.4) durchgeführt und getestet.

### Ergebnis-Übersicht

| Bereich | Vorher | Nachher |
|---------|--------|---------|
| Build-Output | Veraltet, fehlende Tags | Aktuell, alle Tags vorhanden |
| Title | "GEO Strategic Audit" (falsch) | "GEO Discovery Audit" (korrekt) |
| Canonical | ❌ fehlte im Build | ✅ vorhanden |
| OG-Tags | ❌ fehlten im Build | ✅ 9 Tags |
| Twitter Cards | ❌ fehlten im Build | ✅ 4 Tags |
| Cookiebot | ❌ fehlte im Build | ✅ vorhanden |
| Schema.org | ❌ Nur per JS (useEffect) | ✅ 7 Blöcke statisch im HTML |
| Dokumentation | ❌ Falsch ("SSR aktiv") | ✅ Korrekt ("KEIN SSR") |

### Was Phase 1 NICHT löst
- HTML-Body ist weiterhin `<div id="root"></div>` — kein sichtbarer Text-Content für Crawler
- Wortanzahl im statischen HTML: ~631 (Schema.org JSON zählt mit), aber 0 sichtbare Wörter
- Kein `<h1>`, `<h2>`, `<p>` im Server-Response
- → Phase 2 (Next.js Migration) löst diese Probleme

### Nächster Schritt
→ AP 2.0: Vorbereitung — Design-Freeze & Projekt-Duplikation
