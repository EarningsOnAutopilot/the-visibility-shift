import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Impressum() {
  useEffect(() => {
    document.title = 'Impressum | The Visibility Shift'
  }, [])

  return (
    <div className="min-h-screen bg-[#0a1a1f] text-slate-200">
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 26, 31, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(160, 124, 58, 0.1)',
        zIndex: 1000
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
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG / DDG</h2>
        <p>
          <strong>NEELTIZ CONSULTING - FZCO</strong><br />
          handelnd unter der Marke <strong>TheVisibilityShift</strong><br /><br />
          Building A1, Dubai Digital Park<br />
          Dubai Silicon Oasis<br />
          P.O. Box 342001<br />
          Dubai, Vereinigte Arabische Emirate<br /><br />
          <strong>UAE Trade License Number:</strong> 69253
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a><br />
          Website: <a href="https://the-visibility-shift.com">https://the-visibility-shift.com</a>
        </p>

        <h2>Vertreter in der EU gemäß Art. 27 DSGVO</h2>
        <p>
          <strong>iuro Rechtsanwälte GmbH t/a Prighter</strong><br />
          Schellinggasse 3<br />
          1010 Wien<br />
          Österreich<br /><br />
          Kontakt für Datenschutzanfragen:<br />
          <a href="https://app.prighter.com/portal/18615566844" target="_blank" rel="noopener noreferrer">https://app.prighter.com/portal/18615566844</a>
        </p>

        <h2>Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV</h2>
        <p>
          Alexander Neitzel<br />
          (Anschrift wie oben)
        </p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>Die Tätigkeit unterliegt keiner besonderen berufsrechtlichen Zulassung.</p>

        <h2>Umsatzsteuer</h2>
        <p>
          Die NEELTIZ CONSULTING - FZCO hat ihren Sitz außerhalb der Europäischen Union. Bei Geschäften mit Unternehmern in der EU gilt das Reverse-Charge-Verfahren gemäß § 13b UStG. Die Umsatzsteuer ist vom Leistungsempfänger anzumelden und abzuführen.
        </p>

        <h2>Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a><br /><br />
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen, da wir ausschließlich im B2B-Bereich tätig sind.
        </p>

        <h2>Haftungsausschluss</h2>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>Haftung für Inhalte</h3>
        <p>
          Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>Haftung für Links</h3>
        <p>
          Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h3 style={{ fontSize: '18px', marginTop: '24px' }}>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>

        <p style={{ marginTop: '48px', fontSize: '14px', color: '#5a7a7e' }}>Stand: Januar 2026</p>
      </div>

      {/* Footer */}
      <footer style={{
        padding: '32px 64px',
        borderTop: '1px solid rgba(160, 124, 58, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '14px' }}>
          <Link to="/impressum" className="nav-link">Impressum</Link>
          <Link to="/datenschutz" className="nav-link">Datenschutz</Link>
          <Link to="/cookies" className="nav-link">Cookies</Link>
        </div>
        <p style={{ marginTop: '16px', fontSize: '12px', color: '#5a7a7e' }}>
          © 2026 The Visibility Shift – NEELTIZ CONSULTING - FZCO
        </p>
      </footer>
    </div>
  )
}
