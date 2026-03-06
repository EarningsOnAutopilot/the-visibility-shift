# The Visibility Shift

GEO Discovery Audit Landing Page — Vite + React SPA.

## ⚠️ Bekanntes SEO-Problem

**Dieses Projekt ist eine Client-Side SPA (kein SSR/SSG).** Google und AI-Crawler sehen ein leeres `<div id="root"></div>` ohne Content. Für Details siehe:
- `MASSNAHMENPLAN-SEO-GEO-2026-03-05.md` — Vollständige Diagnose und Ursachenanalyse
- `ARBEITSPAKETE-CLAUDE-CODE.md` — Migrationsplan zurück zu Next.js App Router

**Status (6. März 2026):** Phase 1 (Sofort-Fixes) durchgeführt. Schema.org und Meta-Tags sind jetzt im statischen HTML. Migration zu Next.js (Phase 2) steht aus.

## Tech Stack

- **Framework:** React 18 (Client-Side SPA — **KEIN SSR**)
- **Build Tool:** Vite 6
- **Routing:** React Router DOM 7
- **Styling:** Tailwind CSS 3
- **Fonts:** Poppins (Google Fonts)
- **Deployment:** nginx statisch via Docker/Coolify auf Hetzner CPX22

## Projektstruktur

```
src/
├── components/
│   └── Layout.jsx        # Schema.org Daten (useEffect) & Layout-Wrapper
├── pages/
│   ├── Home.jsx          # Landing Page (1.282 Zeilen, gesamter Content)
│   ├── Impressum.jsx     # Impressum
│   ├── Datenschutz.jsx   # Datenschutzerklärung
│   └── Cookies.jsx       # Cookie-Richtlinie
├── App.jsx               # React Router Konfiguration
├── main.jsx              # Entry Point
└── index.css             # Tailwind + Custom Styles (303 Zeilen)

design-reference/         # 32 Design-Screenshots (Desktop) — Referenz für Migration
_backup/                  # Originale Next.js-Dateien (layout.tsx, page.tsx, etc.)
```

## Routen

| Route | Seite |
|-------|-------|
| `/` | Home (Landing Page) |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |
| `/cookies` | Cookie-Richtlinie |

## Entwicklung

```bash
npm install       # Dependencies installieren
npm run dev       # Entwicklungsserver starten
npm run build     # Production Build erstellen
npm run preview   # Production Build lokal testen
```

## SEO & Schema.org

Schema.org JSON-LD ist **doppelt** eingebunden:
1. **Statisch in `index.html`** (7 Blöcke) — für Crawler ohne JS sichtbar ✅
2. **Dynamisch in `Layout.jsx`** per `useEffect` — für die React-App

Schema-Typen: Organization, WebSite, ProfessionalService, Person (×2), HowTo, BreadcrumbList

**⚠️ Der eigentliche Seiteninhalt (Texte, Headings, etc.) ist weiterhin NUR per JavaScript sichtbar.** Das ist das Kernproblem, das Phase 2 (Next.js Migration) löst.

## Deployment

Aktuell: nginx-basiertes Docker-Deployment (statische Dateien).
Geplant: Node.js-basiertes Docker-Deployment mit Next.js SSR.
