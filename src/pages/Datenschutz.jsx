import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Datenschutz() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung | The Visibility Shift'
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
        <h1>Datenschutzerklärung</h1>
        <p><strong>TheVisibilityShift</strong> – Eine Marke der NEELTIZ CONSULTING - FZCO<br /><em>Stand: Januar 2026</em></p>

        <h2>§ 1 Verantwortlicher</h2>
        <p>
          Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br /><br />
          <strong>NEELTIZ CONSULTING - FZCO</strong><br />
          handelnd unter der Marke TheVisibilityShift<br />
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
          E-Mail: Über das Kontaktformular auf <a href="https://app.prighter.com/portal/18615566844" target="_blank" rel="noopener noreferrer">https://app.prighter.com/portal/18615566844</a>
        </p>
        <p>
          <em>Hinweis:</em> Prighter ist gemäß Art. 27 DSGVO als Anlaufstelle für Datenschutzbehörden und betroffene Personen in der EU benannt. Die Verarbeitungstätigkeit umfasst Daten zur Identifikation und Kontaktdaten sowie Daten zu Anfragen betroffener Personen.
        </p>

        <h2>§ 2 Übersicht der Verarbeitungen</h2>
        <p>Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt nur nach Einwilligung des Nutzers oder wenn die Verarbeitung durch gesetzliche Vorschriften gestattet ist.</p>

        <h2>§ 3 Rechtsgrundlagen</h2>
        <p>Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis folgender Rechtsgrundlagen:</p>
        <ul>
          <li><strong>Einwilligung (Art. 6 Abs. 1 lit. a DSGVO):</strong> Soweit Sie uns eine Einwilligung zur Verarbeitung erteilt haben, z.B. für Cookies oder Newsletter.</li>
          <li><strong>Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO):</strong> Soweit die Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich ist.</li>
          <li><strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO):</strong> Soweit wir einer rechtlichen Verpflichtung unterliegen.</li>
          <li><strong>Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO):</strong> Soweit die Verarbeitung zur Wahrung unserer berechtigten Interessen erforderlich ist, z.B. für den Betrieb und die Sicherheit der Website.</li>
        </ul>

        <h2>§ 4 Datenübermittlung in Drittländer</h2>
        <p>Da unser Unternehmenssitz in den Vereinigten Arabischen Emiraten liegt, werden personenbezogene Daten grundsätzlich in ein Drittland übermittelt. Wir stellen sicher, dass diese Übermittlung auf Basis geeigneter Garantien erfolgt:</p>
        <ul>
          <li>Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO)</li>
          <li>Soweit Dienstleister in den USA eingesetzt werden: EU-US Data Privacy Framework, sofern der Dienstleister zertifiziert ist</li>
          <li>Ausdrückliche Einwilligung (Art. 49 Abs. 1 lit. a DSGVO) für bestimmte Verarbeitungen</li>
        </ul>

        <h2>§ 5 Hosting und technische Bereitstellung</h2>
        <p>Diese Website wird bei <strong>Hetzner Online GmbH</strong> gehostet. Bei jedem Zugriff auf diese Website werden automatisch Informationen in sogenannten Server-Logfiles erfasst:</p>
        <ul>
          <li>IP-Adresse des anfragenden Rechners (anonymisiert oder gekürzt, soweit technisch möglich)</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der der Zugriff erfolgt (Referrer-URL)</li>
          <li>Verwendeter Browser und ggf. das Betriebssystem</li>
          <li>Name des Access-Providers</li>
        </ul>
        <p>Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses an der technischen Bereitstellung und Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO).</p>
        <p>
          <strong>Anbieter:</strong> Hetzner Online GmbH, Industriestr. 25, 91710 Gunzenhausen, Deutschland<br />
          <strong>Rechenzentrum:</strong> Nürnberg, Deutschland<br />
          <strong>Datenschutzerklärung:</strong> <a href="https://www.hetzner.com/de/rechtliches/datenschutz" target="_blank" rel="noopener noreferrer">hetzner.com/de/rechtliches/datenschutz</a>
        </p>

        <h2>§ 6 Cookies und Einwilligungsverwaltung</h2>
        <p>Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir unterscheiden zwischen technisch notwendigen Cookies und solchen, die einer Einwilligung bedürfen.</p>
        <h3 style={{ fontSize: '16px', marginTop: '16px' }}>Technisch notwendige Cookies</h3>
        <p>Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.</p>
        <h3 style={{ fontSize: '16px', marginTop: '16px' }}>Analyse- und Marketing-Cookies</h3>
        <p>Diese Cookies werden nur nach Ihrer ausdrücklichen Einwilligung gesetzt.</p>
        <h3 style={{ fontSize: '16px', marginTop: '16px' }}>Einwilligungsverwaltung mit Cookiebot</h3>
        <p>Für die Verwaltung Ihrer Cookie-Einwilligung nutzen wir <strong>Cookiebot</strong>.</p>
        <p><strong>Anbieter:</strong> Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark</p>
        <p>Weitere Details finden Sie in unserer <Link to="/cookies">Cookie-Richtlinie</Link>.</p>

        <h2>§ 7 Webanalyse</h2>
        <p>Diese Website nutzt <strong>Google Analytics 4</strong>, einen Webanalysedienst der Google Ireland Limited.</p>
        <p>
          <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
          <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)<br />
          <strong>Datenübermittlung:</strong> USA – Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert
        </p>

        <h2>§ 7a Bing Webmaster Tools</h2>
        <p>Diese Website nutzt <strong>Bing Webmaster Tools</strong>, einen Dienst der Microsoft Corporation, zur Analyse und Optimierung der Auffindbarkeit in der Bing-Suchmaschine.</p>
        <p>
          Bing Webmaster Tools erfasst Daten zur Indexierung, Crawling-Aktivität und Suchperformance unserer Website. Dabei können technische Zugriffsdaten (z.B. IP-Adressen, Seitenaufrufe) verarbeitet werden.
        </p>
        <p>
          <strong>Anbieter:</strong> Microsoft Corporation, One Microsoft Way, Redmond, WA 98052-6399, USA<br />
          <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO) – Optimierung der Auffindbarkeit unserer Website in Suchmaschinen<br />
          <strong>Datenübermittlung:</strong> USA – Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert<br />
          <strong>Datenschutzerklärung:</strong> <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer">privacy.microsoft.com/de-de/privacystatement</a>
        </p>

        <h2>§ 8 Marketing und Conversion-Tracking</h2>
        <p>Wir nutzen den <strong>LinkedIn Insight Tag</strong> für Conversion-Tracking und Retargeting-Zwecke.</p>
        <p>
          <strong>Anbieter:</strong> LinkedIn Ireland Unlimited Company, Wilton Place, Dublin 2, Irland<br />
          <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
        </p>

        <h2>§ 9 Online-Terminvergabe (meetergo)</h2>
        <p>Wir haben meetergo auf dieser Webseite eingebunden. Anbieter ist die meetergo GmbH, Hauptstr. 44, 40789 Monheim am Rhein (nachfolgend meetergo). meetergo stellt ein Online-Terminvergabe-Tool bereit. Wenn Sie online einen Termin mit uns vereinbaren, werden Ihre hierzu eingegebenen Daten auf den Servern von meetergo in Deutschland gespeichert.</p>
        <p>Des Weiteren erfasst meetergo kurzfristig Ihre IP-Adresse, Ihre Referrer-URL, die Uhrzeit des Zugriffs und kann feststellen, dass Sie bei uns eine Anfrage gestellt haben; diese Daten werden ausschließlich für die technische Bereitstellung des Dienstes verwendet und anschließend automatisch wieder gelöscht.</p>
        <p>Die Verwendung von meetergo erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst unkomplizierten Terminvereinbarung. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 1 lit. a; die Einwilligung ist jederzeit widerrufbar.</p>
        <p>
          <strong>Anbieter:</strong> meetergo GmbH, Hauptstr. 44, 40789 Monheim am Rhein, Deutschland<br />
          <strong>Serverstandort:</strong> Deutschland<br />
          <strong>Datenschutzerklärung:</strong> <a href="https://meetergo.com/de/datenschutz" target="_blank" rel="noopener noreferrer">meetergo.com/de/datenschutz</a>
        </p>

        <h2>§ 9a Kontaktformulare (Tally.so)</h2>
        <p>Für unsere Kontaktformulare (z.B. Blindspot-Check, Angebotsanfragen) nutzen wir <strong>Tally</strong>. Wenn Sie ein Formular auf unserer Website ausfüllen, werden die von Ihnen eingegebenen Daten (z.B. Name, E-Mail-Adresse, Website-URL, Telefonnummer, Produktinformationen) an Tally übermittelt und auf Servern in der EU gespeichert.</p>
        <p>Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer effizienten Bearbeitung von Anfragen).</p>
        <p>
          <strong>Anbieter:</strong> Tally NV, Brüssel, Belgien<br />
          <strong>Serverstandort:</strong> EU (Belgien)<br />
          <strong>Datenschutzerklärung:</strong> <a href="https://tally.so/help/privacy-policy" target="_blank" rel="noopener noreferrer">tally.so/help/privacy-policy</a>
        </p>

        <h2>§ 9b Verarbeitung im Rahmen der Leistungserbringung (Projektarbeit)</h2>
        <p>Für die Erbringung unserer Beratungsleistungen im Bereich GEO und LLMO verarbeiten wir im Auftrag des Kunden personenbezogene Daten. Hierzu setzen wir folgende Dienstleister und Tools ein:</p>
        <p><strong>1. Sichere Kommunikation:</strong> Proton AG (ProtonMail, ProtonDrive) – Schweiz</p>
        <p><strong>2. KI-Dienste:</strong> OpenAI (ChatGPT), Anthropic (Claude), xAI (Grok), Perplexity AI, Abacus AI – jeweils USA mit Standardvertragsklauseln</p>
        <p style={{ padding: '12px 16px', borderLeft: '3px solid #a07c3a', background: 'rgba(160, 124, 58, 0.08)', marginTop: '12px' }}>
          <strong>WICHTIG:</strong> Kundendaten werden NICHT zum Training der KI-Modelle verwendet. Wir nutzen ausschließlich Enterprise-Versionen oder API-Zugänge mit vertraglichem Ausschluss vom Modelltraining.
        </p>
        <p><strong>3. EU-Vertreter (Art. 27 DSGVO):</strong> Prighter</p>
        <p>
          <strong>Anbieter:</strong> iuro Rechtsanwälte GmbH t/a Prighter, Schellinggasse 3, 1010 Wien, Österreich<br />
          <strong>Verarbeitungstätigkeit:</strong> Prighter fungiert als Anlaufstelle für Datenschutzbehörden und betroffene Personen gemäß Art. 27 DSGVO. Verarbeitete Daten umfassen Name, Identifikation, Kontaktdaten und Daten zu Anfragen betroffener Personen.<br />
          <strong>Rolle:</strong> Bei Beratung und Support: Verantwortlicher. Bei Bereitstellung der technischen Infrastruktur und des DSR-Tools: Auftragsverarbeiter.<br />
          <strong>Beschreibung:</strong> Prighter nimmt Anfragen von Datenschutzbehörden und betroffenen Personen entgegen. Für Betroffenenanfragen (Data Subject Requests, DSR) stellt Prighter eine Lösung bereit, um diese zu kanalisieren, filtern und strukturieren. Die vom Betroffenen über das DSR-Tool bereitgestellten Daten werden von Prighter über Hetzner Online GmbH als Rechenzentrumslösung verarbeitet.<br />
          <strong>Garantien:</strong> Angemessenes Datenschutzniveau (Österreich, EU)
        </p>

        <h2>§ 10 Newsletter</h2>
        <p>Wenn Sie sich für unseren Newsletter anmelden, verarbeiten wir die von Ihnen angegebenen Daten für den Versand des Newsletters. Die Anmeldung erfolgt im Double-Opt-in-Verfahren.</p>
        <p><strong>Anbieter:</strong> Brevo (ehemals Sendinblue), Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Deutschland</p>

        <h2>§ 11 Eingebettete Inhalte</h2>
        <h3 style={{ fontSize: '16px', marginTop: '16px' }}>YouTube-Videos</h3>
        <p>Wir binden Videos von YouTube im erweiterten Datenschutzmodus ein (Domain: youtube-nocookie.com).</p>

        <h2>§ 12 Ihre Rechte</h2>
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
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@the-visibility-shift.com">info@the-visibility-shift.com</a><br /><br />
          Alternativ können Sie Ihre Rechte auch gegenüber unserem EU-Vertreter geltend machen:<br />
          <a href="https://app.prighter.com/portal/18615566844" target="_blank" rel="noopener noreferrer">https://app.prighter.com/portal/18615566844</a>
        </p>

        <h2>§ 13 Datensicherheit</h2>
        <p>Wir verwenden SSL-/TLS-Verschlüsselung für die Übertragung von Daten. Unsere Website ist ausschließlich über HTTPS erreichbar.</p>

        <h2>§ 14 Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die jeweils aktuelle Version finden Sie stets auf unserer Website.</p>

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
