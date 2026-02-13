import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Cookies() {
  const cookieDeclarationRef = useRef(null)

  useEffect(() => {
    document.title = 'Cookie-Richtlinie | The Visibility Shift'
  }, [])

  useEffect(() => {
    if (cookieDeclarationRef.current) {
      const script = document.createElement('script')
      script.id = 'CookieDeclaration'
      script.src = 'https://consent.cookiebot.com/69c9eeeb-3694-46d7-a1ca-64e07c517b79/cd.js'
      script.async = true
      cookieDeclarationRef.current.appendChild(script)
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-slate-200">
      {/* Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        padding: '16px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'rgba(10, 26, 31, 0.95)', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(160, 124, 58, 0.1)', zIndex: 1000
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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

        <div ref={cookieDeclarationRef} style={{ marginTop: '16px', marginBottom: '24px' }}></div>

        <p style={{ fontSize: '14px', color: '#5a7a7e', marginTop: '16px' }}>
          Die obige Liste wird automatisch von Cookiebot generiert und aktualisiert.
        </p>

        <h2>§ 4a Eingebettete Dienste</h2>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>meetergo (Online-Terminvergabe)</h3>
        <p>Für die Online-Terminvergabe nutzen wir meetergo. Beim Laden des eingebetteten Buchungswidgets kann meetergo technisch notwendige Cookies setzen, um den Buchungsprozess zu ermöglichen.</p>
        <p>Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)<br /><strong>Anbieter:</strong> meetergo GmbH, Hauptstr. 44, 40789 Monheim am Rhein, Deutschland</p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>Tally.so (Kontaktformulare)</h3>
        <p>Für unsere Kontaktformulare (z.B. Blindspot-Check, Angebotsanfragen) nutzen wir Tally. Die Formulare werden als Iframe eingebettet. Tally kann dabei technisch notwendige Cookies setzen, um die Formularfunktion sicherzustellen. Es werden keine Tracking- oder Marketing-Cookies durch Tally gesetzt.</p>
        <p>Rechtsgrundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) bzw. Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)<br /><strong>Anbieter:</strong> Tally NV, Brüssel, Belgien<br /><strong>Serverstandort:</strong> EU (Belgien)<br /><strong>Datenschutzerklärung:</strong> <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer">tally.so/help/privacy-policy</a></p>

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
          <Link to="/impressum" className="nav-link">Impressum</Link>
          <Link to="/datenschutz" className="nav-link">Datenschutz</Link>
          <Link to="/cookies" className="nav-link">Cookies</Link>
        </div>
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#5a7a7e' }}>© 2026 The Visibility Shift – NEELTIZ CONSULTING - FZCO</p>
      </footer>
    </div>
  )
}
