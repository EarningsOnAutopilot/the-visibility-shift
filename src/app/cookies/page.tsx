import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Cookie-Richtlinie für the-visibility-shift.com – Informationen zu verwendeten Cookies und Tracking.",
  robots: { index: true, follow: true },
};

export default function Cookies() {
  return (
    <>
      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        padding: '16px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10, 26, 31, 0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(160, 124, 58, 0.1)', zIndex: 1000
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <svg width="32" height="32" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#a07c3a" strokeWidth="4" opacity="0.4"/>
            <circle cx="50" cy="50" r="32" fill="none" stroke="#a07c3a" strokeWidth="4"/>
            <circle cx="50" cy="50" r="16" fill="#a07c3a"/>
          </svg>
          <span style={{ fontWeight: 600, color: '#e2e8f0' }}>The Visibility Shift</span>
        </Link>
      </nav>

      <div className="legal-content">
        <h1>Cookie-Richtlinie</h1>
        <p>Diese Cookie-Richtlinie erklärt, welche Cookies und ähnliche Technologien auf der Website <strong>the-visibility-shift.com</strong> verwendet werden.</p>

        <h2>§ 1 Was sind Cookies?</h2>
        <p>Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihr Gerät wiederzuerkennen und bestimmte Informationen zu speichern.</p>

        <h2>§ 2 Ihre Einwilligung</h2>
        <p>Beim ersten Besuch unserer Website wird Ihnen ein Cookie-Banner angezeigt (bereitgestellt durch Cookiebot). Dort können Sie wählen, welche Cookie-Kategorien Sie akzeptieren möchten.</p>
        <p>Sie können Ihre Einstellungen jederzeit ändern, indem Sie auf den Link &quot;Cookie-Einstellungen&quot; im Footer der Website klicken.</p>

        <h2>§ 3 Cookie-Kategorien</h2>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>3.1 Technisch notwendige Cookies</h3>
        <p>Diese Cookies sind für die Grundfunktionen der Website unentbehrlich.</p>
        <p>Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)<br />Beispiele: Session-Cookies, Cookie-Consent-Speicherung, Sicherheits-Cookies</p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>3.2 Funktionale Cookies (Präferenzen)</h3>
        <p>Diese Cookies ermöglichen erweiterte Funktionalitäten und Personalisierung.</p>
        <p>Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>3.3 Analyse-Cookies (Statistik)</h3>
        <p>Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.</p>
        <p>Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />Eingesetzte Dienste: Google Analytics 4</p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>3.4 Marketing-Cookies</h3>
        <p>Diese Cookies werden verwendet, um Werbung relevanter für Sie zu gestalten.</p>
        <p>Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />Eingesetzte Dienste: LinkedIn Insight Tag</p>

        <h2>§ 4 Detaillierte Cookie-Übersicht</h2>

        <div style={{ overflowX: 'auto', marginTop: '16px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(160, 124, 58, 0.3)' }}>
                <th style={{ padding: '12px', textAlign: 'left', color: '#a07c3a' }}>Dienst</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#a07c3a' }}>Cookie-Name</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#a07c3a' }}>Kategorie</th>
                <th style={{ padding: '12px', textAlign: 'left', color: '#a07c3a' }}>Speicherdauer</th>
              </tr>
            </thead>
            <tbody style={{ color: '#7a9a9e' }}>
              <tr style={{ borderBottom: '1px solid rgba(160, 124, 58, 0.1)' }}>
                <td style={{ padding: '12px' }}>Cookiebot</td>
                <td style={{ padding: '12px' }}>CookieConsent</td>
                <td style={{ padding: '12px' }}>Notwendig</td>
                <td style={{ padding: '12px' }}>12 Monate</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(160, 124, 58, 0.1)' }}>
                <td style={{ padding: '12px' }}>Google Analytics 4</td>
                <td style={{ padding: '12px' }}>_ga, _ga_[ID]</td>
                <td style={{ padding: '12px' }}>Statistik</td>
                <td style={{ padding: '12px' }}>2 Jahre</td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(160, 124, 58, 0.1)' }}>
                <td style={{ padding: '12px' }}>LinkedIn</td>
                <td style={{ padding: '12px' }}>li_sugr, bcookie, lidc</td>
                <td style={{ padding: '12px' }}>Marketing</td>
                <td style={{ padding: '12px' }}>30 Tage - 2 Jahre</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>§ 5 Cookies verwalten und löschen</h2>
        <p><strong>Über unsere Website:</strong> Klicken Sie auf &quot;Cookie-Einstellungen&quot; im Footer.</p>
        <p><strong>Über Ihren Browser:</strong> Sie können Cookies auch direkt in Ihrem Browser verwalten oder löschen.</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
          <li><a href="https://support.mozilla.org/de/kb/cookies-loeschen" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-loeschen" target="_blank" rel="noopener noreferrer">Edge</a></li>
        </ul>

        <h2>§ 6 Opt-out-Links</h2>
        <ul>
          <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out" target="_blank" rel="noopener noreferrer">linkedin.com/psettings/guest-controls/retargeting-opt-out</a></li>
        </ul>

        <h2>§ 7 Kontakt</h2>
        <p>Bei Fragen zu dieser Cookie-Richtlinie: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a></p>

        <p style={{ marginTop: '48px', fontSize: '14px', color: '#5a7a7e' }}>Stand: Januar 2026</p>
      </div>

      {/* Footer */}
      <footer style={{ padding: '32px 64px', borderTop: '1px solid rgba(160, 124, 58, 0.1)', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '14px' }}>
          <Link href="/impressum" className="nav-link">Impressum</Link>
          <Link href="/datenschutz" className="nav-link">Datenschutz</Link>
          <Link href="/cookies" className="nav-link">Cookies</Link>
        </div>
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#5a7a7e' }}>© 2025 The Visibility Shift – NEELTIZ CONSULTING - FZCO</p>
      </footer>
    </>
  );
}
