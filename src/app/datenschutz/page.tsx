import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der NEELTIZ CONSULTING - FZCO (The Visibility Shift) gemäß DSGVO.",
  robots: { index: true, follow: true },
};

export default function Datenschutz() {
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
        <h1>Datenschutzerklärung</h1>
        <p><strong>The Visibility Shift</strong> – Eine Marke der NEELTIZ CONSULTING - FZCO<br />Stand: Januar 2025 (Version 2.1 - mit EU-Vertreter)</p>

        <h2>§ 1 Verantwortlicher</h2>
        <p>
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
          <strong>NEELTIZ CONSULTING - FZCO</strong><br />
          handelnd unter der Marke The Visibility Shift<br />
          Building A1, Dubai Digital Park, Dubai Silicon Oasis<br />
          P.O. Box 342001, Dubai, Vereinigte Arabische Emirate<br /><br />
          E-Mail: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a>
        </p>
        <p>
          <strong>Datenschutz-Ansprechpartner:</strong> Alexander Neitzel<br />
          E-Mail: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a>
        </p>

        <h2>Vertreter in der EU gemäß Art. 27 DSGVO</h2>
        <p>
          Da wir unseren Sitz außerhalb der EU haben, jedoch Dienstleistungen für Personen in der EU anbieten, haben wir einen Vertreter in der EU benannt:<br /><br />
          <strong>iuro Rechtsanwälte GmbH t/a Prighter</strong><br />
          Schellinggasse 3, 1010 Wien, Österreich<br />
          E-Mail: Über das Kontaktformular auf <a href="https://prighter.com/q/16905952" target="_blank" rel="noopener noreferrer">https://prighter.com/q/16905952</a>
        </p>

        <h2>§ 2 Übersicht der Verarbeitungen</h2>
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.</p>

        <h2>§ 3 Rechtsgrundlagen</h2>
        <ul>
          <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Soweit Sie uns eine Einwilligung erteilt haben, z.B. für Cookies oder Newsletter.</li>
          <li><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</strong> Soweit die Verarbeitung zur Erfüllung eines Vertrags erforderlich ist.</li>
          <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Soweit wir einer rechtlichen Verpflichtung unterliegen.</li>
          <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong> Soweit die Verarbeitung zur Wahrung unserer berechtigten Interessen erforderlich ist.</li>
        </ul>

        <h2>§ 4 Datenübermittlung in Drittländer</h2>
        <p>Da unser Unternehmenssitz in den Vereinigten Arabischen Emiraten liegt, werden personenbezogene Daten grundsätzlich in ein Drittland übermittelt. Wir stellen sicher, dass diese Übermittlung auf Basis geeigneter Garantien erfolgt:</p>
        <ul>
          <li>Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO)</li>
          <li>EU-US Data Privacy Framework, sofern der Dienstleister zertifiziert ist</li>
          <li>Ausdrückliche Einwilligung (Art. 49 Abs. 1 lit. a DSGVO)</li>
        </ul>

        <h2>§ 5 Hosting und technische Bereitstellung</h2>
        <p>Diese Website wird bei <strong>Hetzner Online GmbH</strong> gehostet. Bei jedem Zugriff werden Server-Logfiles erfasst (IP-Adresse, Datum/Uhrzeit, abgerufene Datei, Referrer-URL, Browser, Betriebssystem).</p>
        <p>
          Anbieter: Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland<br />
          Rechenzentrum: Deutschland<br />
          Datenschutzerklärung: <a href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank" rel="noopener noreferrer">hetzner.com/de/rechtliches/datenschutz</a>
        </p>

        <h2>§ 6 Cookies und Einwilligungsverwaltung</h2>
        <p>Diese Website verwendet Cookies. Für die Verwaltung Ihrer Cookie-Einwilligung nutzen wir <strong>Cookiebot</strong>.</p>
        <p>Anbieter: Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark</p>
        <p>Details finden Sie in unserer <Link href="/cookies">Cookie-Richtlinie</Link>.</p>

        <h2>§ 7 Webanalyse</h2>
        <p>Diese Website nutzt <strong>Google Analytics 4</strong>, einen Webanalysedienst der Google Ireland Limited.</p>
        <p>Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />Datenübermittlung: USA - Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert</p>

        <h2>§ 8 Marketing und Conversion-Tracking</h2>
        <p>Wir nutzen den <strong>LinkedIn Insight Tag</strong> für Conversion-Tracking und Retargeting-Zwecke.</p>
        <p>Anbieter: LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland<br />Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>

        <h2>§ 9 Kontaktaufnahme und Terminbuchung (Meetergo)</h2>
        <p>Für die Online-Terminbuchung nutzen wir <strong>Meetergo</strong>. Bei der Buchung werden Ihre eingegebenen Daten (Name, E-Mail, ggf. Unternehmen, Terminwunsch) an Meetergo übermittelt.</p>
        <p>
          Anbieter: Meetergo GmbH, Deutschland<br />
          Rechtsgrundlage: Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)<br />
          Datenschutzerklärung: <a href="https://meetergo.com/de/datenschutz" target="_blank" rel="noopener noreferrer">meetergo.com/de/datenschutz</a>
        </p>

        <h2>§ 10 Newsletter</h2>
        <p>Wenn Sie sich für unseren Newsletter anmelden, verarbeiten wir Ihre Daten für den Versand. Die Anmeldung erfolgt im Double-Opt-in-Verfahren.</p>
        <p>Anbieter: Brevo (ehemals Sendinblue), Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin</p>

        <h2>§ 11 Ihre Rechte</h2>
        <p>Sie haben gemäß DSGVO folgende Rechte:</p>
        <ul>
          <li>Auskunftsrecht (Art. 15 DSGVO)</li>
          <li>Berichtigungsrecht (Art. 16 DSGVO)</li>
          <li>Löschungsrecht (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
          <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Beschwerderecht (Art. 77 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a><br />
          Oder über unseren EU-Vertreter: <a href="https://prighter.com/q/16905952" target="_blank" rel="noopener noreferrer">prighter.com/q/16905952</a>
        </p>

        <h2>§ 12 Datensicherheit</h2>
        <p>Wir verwenden SSL-/TLS-Verschlüsselung für die Übertragung von Daten. Unsere Website ist ausschließlich über HTTPS erreichbar.</p>

        <p style={{ marginTop: '48px', fontSize: '14px', color: '#5a7a7e' }}>Stand: Januar 2025</p>
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
