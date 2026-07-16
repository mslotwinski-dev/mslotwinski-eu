import { ProjectGroup } from '../types/interfaces'
const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      'Die größten, modularen Website-Projekte, bei denen jedes Element einen eigenständigen Teil eines größeren Ganzen bildet.',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDirac ist ein gemeinnütziges Projekt, das Bildung durch kostenlose, umfassende und leicht zugängliche Lehrbücher zugänglicher machen soll.',
        longdescription: `eDirac ist ein innovatives gemeinnütziges Bildungsprojekt, das den kostenlosen Zugang zu umfassendem wissenschaftlichem Wissen ermöglichen soll. Das Projekt konzentriert sich auf:
<ul>
  <li>die Erstellung kostenloser Lehrbücher in Physik, Ingenieurwesen, Mathematik und anderen Bereichen,</li>
  <li>die Verbreitung von Wissen unabhängig von Herkunft oder Wohlstand der Benutzer,</li>
  <li>Entwicklungspläne einschließlich der Übersetzung von Lehrbüchern in viele Weltsprachen, damit jeder die gleichen Bildungschancen hat.</li>
</ul>
Die eDirac-Plattform kombiniert eine barrierefreie Benutzeroberfläche, einfachen Zugriff auf Materialien und die Mission der globalen Bildung mit Fokus auf Transparenz und vollständige Verfügbarkeit von Ressourcen für alle.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Einfaches Dateifreigabesystem, geschrieben in Vue, Node, Nest und MongoDB.',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLib ist eine persönliche Website, die Zugriff auf eine Sammlung von E-Books und PDF-Dateien bietet. Sie dient als Plattform zum Teilen von Bildungs- und anderen Ressourcen, möglicherweise für den akademischen oder persönlichen Gebrauch.',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMe ist eine Plattform mit vielen psychologischen, politischen und philosophischen Tests. Antworte ehrlich!',
        longdescription: `AnalyseMe ist eine leichte, moderne Webplattform zur Diagnose und Analyse deiner eigenen Ansichten und Überzeugungen. Die Website bietet eine Reihe umfangreicher Quizfragen (wie Political Compass oder 9Axes), intuitive Werkzeuge zur Kategoriefilterung und ein klares Tagging-System. Das Projekt konzentriert sich auf:
<ul>
<li>thematische Vielfalt (von Politik und Wirtschaft bis zur Philosophie),</li>
<li>eine klare, minimalistische Benutzeroberfläche,</li>
<li>einen offenen Charakter und Integration mit der Community (GitHub).</li>
</ul>
AnalyseMe soll dein persönliches Zentrum zur Selbstfindung sein — von mehrachsigen politischen Analysen bis hin zu Tests der persönlichen Freiheit — ohne unnötige Komplikationen und Barrieren beim Zugriff auf Ergebnisse.`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Einfache App zum Notizenmachen, geschrieben in Nuxt.js und Nest.js.',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description: 'Einfache App zum Speichern und Kürzen deiner Links.',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAI ist eine intelligente Plattform zur Generierung personalisierter Programmierprojekte.',
        longdescription: `ThinklineAI ist eine intelligente Plattform zur Generierung personalisierter Programmierprojekte. Das System analysiert die Interessen, bevorzugten Sprachen und den Schwierigkeitsgrad des Benutzers, um einzigartige und praktische Ideen zum Lernen, Experimentieren und Prototyping vorzuschlagen. Das Projekt konzentriert sich auf:<ul><li>eine modulare und skalierbare KI-Architektur,</li><li>eine intuitive Benutzeroberfläche,</li><li>einfache Integration in verschiedene Technologien und Programmiersprachen.</li></ul>ThinklineAI soll die Entwicklung von Programmierfähigkeiten, die Erforschung neuer Lösungen und schnelles Projekt-Prototyping unterstützen – ohne unnötige Komplikationen und übermäßige Abstraktion.`,
        github: 'https://github.com/mslotwinski-dev/ThinklineAI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/ThinklineAI/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Python'],
        main: true,
      },
    ],
  },
  {
    title: 'Grand Designs',
    icon: 'microchip',
    description:
      'Umfangreiche und komplexe Projekte, die viel Planung, Mühe und den Einsatz fortschrittlicher Werkzeuge erfordern.',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'Konsolenspiel in C++, bei dem die Spieler ein Wasserschwein steuern, das durch einen Dschungel navigiert. Das Spiel beinhaltet verschiedene Herausforderungen und Interaktionen in einer Dschungelumgebung und bietet ein fesselndes und unterhaltsames Erlebnis.',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flow ist ein fortschrittlicher Bash-Shell-Daemon, der die Echtzeitsynchronisierung lokaler Verzeichnisse mit Google Drive automatisiert. Er macht manuelle Backups überflüssig, indem er dein Dateisystem im Hintergrund auf Änderungen überwacht und diese sofort in die Cloud hochlädt, sodass deine Daten sicher bleiben, ohne deinen Arbeitsablauf zu unterbrechen.`,
        longdescription: `Flow ist ein fortschrittlicher Bash-Shell-Daemon, der die Echtzeitsynchronisierung lokaler Verzeichnisse mit Google Drive automatisiert. Er macht manuelle Backups überflüssig, indem er dein Dateisystem im Hintergrund auf Änderungen überwacht und diese sofort in die Cloud hochlädt, sodass deine Daten sicher bleiben, ohne deinen Arbeitsablauf zu unterbrechen.`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: 'Ich berechne die Berichte, du trinkst das Bier.',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'Pixel ist ein schneller und leichter Bildeditor, geschrieben in Rust, verfügbar sowohl mit GUI als auch mit CLI. Er bietet leistungsstarke, aber einfache Werkzeuge zur Bildbearbeitung – von grundlegenden Operationen (Größe ändern, zuschneiden, drehen) bis hin zu integrierten Filtern im Instagram-Stil.',
        longdescription:
          'Pixel ist ein schneller und leichter Bildeditor, geschrieben in Rust, verfügbar sowohl mit GUI als auch mit CLI. Er bietet leistungsstarke, aber einfache Werkzeuge zur Bildbearbeitung – von grundlegenden Operationen (Größe ändern, zuschneiden, drehen) bis hin zu integrierten Filtern im Instagram-Stil.',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHATo ist ein umfassendes Computernetzwerkprojekt, das für sicheres Echtzeit-Messaging zwischen Benutzern entwickelt wurde. Es wurde vollständig in Go geschrieben und verfügt über eine robuste Client-Server-Architektur, die eine RESTful-API für Standardvorgänge und WebSockets (TCP/IP) für bidirektionale Kommunikation mit geringer Latenz nutzt.`,
        longdescription: `poCHATo ist ein umfassendes Computernetzwerkprojekt, das für sicheres Echtzeit-Messaging zwischen Benutzern entwickelt wurde. Es wurde vollständig in Go geschrieben und verfügt über eine robuste Client-Server-Architektur, die eine RESTful-API für Standardvorgänge und WebSockets (TCP/IP) für bidirektionale Kommunikation mit geringer Latenz nutzt.
<ul>
  <li>Ende-zu-Ende-Verschlüsselung (E2EE)</li>
  <li>Freundesystem</li>
  <li>Echtzeit-WebSockets</li>
</ul>
Sicherheit und Datenschutz stehen bei poCHATo im Mittelpunkt. Die direkte Kommunikation ist auf gegenseitig akzeptierte Freunde beschränkt und jede einzelne Nachricht wird mittels Ende-zu-Ende-Verschlüsselung (E2EE) gesichert.`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          'Eine Anwendung, die ein Diagramm der von dir verwendeten Programmiersprachen generiert. Sie hilft dabei zu visualisieren, welche Sprachen dir am besten gefallen.',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'Einfache Electron-App zum Herunterladen von YouTube-Videos.',
        github: 'https://github.com/mslotwinski-dev/YT-Downloader',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/YT-Downloader/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
    ],
  },
  {
    title: 'Quick Bytes',
    icon: 'dragon',
    description:
      'Schnelle, einfallsreiche Projekte, die sich auf das Lösen von Problemen und freies Experimentieren konzentrieren.',
    projects: [
      {
        title: 'Assistant',
        description:
          'Moderne Web-App für das interaktive Durchsuchen von Studienprogrammen und Abteilungsstrukturen. Hier mit Platzhalter - Königliches Institut für Technologie in der polnisch-litauischen Räterepublik.',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'],
      },
      {
        title: 'Boson',
        description: `Boson ist ein flexibler zellulärer Automaten-Simulator mit konfigurierbaren Regeln, der die Modellierung komplexer Phänomene wie Brände, Kristallisation oder Musterentwicklung ermöglicht.`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWybory ist eine Anwendung, die entwickelt wurde, um Wahldaten aufzuzeichnen und zu verfolgen, wie Benutzer bei Wahlen abgestimmt haben. Sie bietet eine sichere und organisierte Möglichkeit, Wahlergebnisse für den persönlichen Gebrauch zu dokumentieren.`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `Go-Implementierung von Conways Game of Life, einem zellulären Automaten, der die Entwicklung von Zellen basierend auf einfachen Regeln simuliert.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `Sehr leichte CSS-Bibliothek zum Stylen von Standardelementen. Keine Klassen, kein JS – einfach besseres Aussehen.`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `Das Projekt "PastoLatarnia" ist eine Plattform zum Teilen und Lesen von "Pasta"-Geschichten (lustige Internetgeschichten). Die Seite ermöglicht es Benutzern, eine Vielzahl von Geschichten zu genießen, die unterhalten und amüsieren sollen.`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `Interaktive Karte von Polen mit benutzerdefinierten Wahlergebnissen und vielen Möglichkeiten, Statistiken darüber zu erkunden.`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `Ändert einfach die Größe deiner Symbole.`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQuery ist eine moderne Version von jQuery, geschrieben in TypeScript. Es bietet eine leichtgewichtige Alternative zu jQuery, die sich auf Einfachheit und moderne Webentwicklungspraktiken konzentriert.`,
        github: 'https://github.com/mslotwinski-dev/vQuery',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/vQuery/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript'],
      },
    ],
  },
  {
    title: 'Pixel Zone',
    icon: 'ghost',
    description:
      'Schnelle Spiele-Projekte, bei denen Spaß und Kreativität im Vordergrund stehen.',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolver ist eine C#-Anwendung zur Lösung von Sudoku-Rätseln. Das Projekt bietet die Implementierung eines Algorithmus zur automatischen Lösung von Sudoku-Gittern.',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiply ist eine Bildungsanwendung, die Benutzern hilft, das Einmaleins zu lernen.',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `Einfache Parodie auf billige Casino-Seiten. Inklusive Black-Jack-Spiel.`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Klassische Implementierung des Snake-Spiels in Rust.',
        github: 'https://github.com/mslotwinski-dev/Snake',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Snake/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
      },
    ],
  },
  {
    title: 'Get Pro with Go',
    icon: 'carrot',
    description:
      'Praktische Projekte, die erstellt wurden, um die Hauptfunktionen der Programmiersprache Go besser zu verstehen und Best Practices zu erlernen.',
    projects: [
      {
        title: 'CodeHub',
        description:
          'Dein persönlicher Projektmanager, entwickelt, um deine Programmierprojekte einfach zu organisieren, zu verfolgen und anzuzeigen.',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description:
          'Einfaches Front-End-Framework, geschrieben in Go. Kein JS mehr!',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dash ist ein persönlicher Reverse-Proxy-Server mit Unterstützung für HTTP/HTTPS, SSL, Load Balancing und Zwischenspeicherung statischer Ressourcen.',
        longdescription: `Dash ist ein eigener Reverse-Proxy-Server mit Unterstützung für HTTP/HTTPS, SSL, Load Balancing und Zwischenspeicherung statischer Ressourcen. Das Projekt konzentriert sich auf:
<ul>
  <li>automatische Ausstellung von SSL-Zertifikaten,</li>
  <li>verschiedene Balancing-Algorithmen (Round-Robin, Least Connections),</li>
  <li>Datenkomprimierung und Caching,</li>
  <li>Verkehrsüberwachung und Protokollierung.</li>
</ul>
Darüber hinaus ermöglicht das Projekt die Erweiterung eines Echtzeit-Administrationsbereichs und Routing-Regeln auf Basis von HTTP-Headern, wodurch eine solide Grundlage für skalierbare Netzwerklösungen geschaffen wird.`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:
          'Neon ist eine verteilte Computing-Plattform, die für die Simulation und Verarbeitung wissenschaftlicher Daten in HPC-Umgebungen entwickelt wurde.',
        longdescription:
          'Neon ist eine verteilte Computing-Plattform, die für die Simulation und Verarbeitung wissenschaftlicher Daten in HPC-Umgebungen entwickelt wurde. Das System ermöglicht die Definition von Rechenaufgaben, die automatische Verteilung der Last in einem Cluster, die Überwachung von Ressourcen und die Aggregation von Ergebnissen in Echtzeit. Das Projekt konzentriert sich auf:<ul><li>Skalierbarkeit und Fehlertoleranz,</li><li>effektive Kommunikation und Parallelität in Go,</li><li>eine modulare Architektur mit Master/Worker und einem Warteschlangensystem.</li></ul>Neon soll das Fundament für umfassende Rechensysteme sein — von physikalischen Simulationen bis hin zur Analyse großer Datensätze — mit voller Kontrolle über den Rechenfluss und die Cluster-Ressourcen.',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'Dein persönlicher Projektmanager, entwickelt, um deine Programmierprojekte einfach zu organisieren, zu verfolgen und anzuzeigen.',
        github: 'https://github.com/mslotwinski-dev/Shield',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shield/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
    ],
  },
  {
    title: 'Entropy Logs',
    icon: 'dna',
    description:
      'Projekte, die im Kontext von Wissenschaft und Ingenieurwesen erstellt wurden und theoretisches Wissen sowie dessen praktische Anwendung widerspiegeln.',
    projects: [
      {
        title: 'Arctic',
        description:
          'Ein minimales, modulares 32-Bit-Betriebssystem, geschrieben in C und NASM, das auf die x86-Architektur abzielt.',
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'],
      },
      {
        title: 'NumC',
        description:
          'Numc ist eine leichte, modulare Berechnungs-Engine, die für technische, statistische und wissenschaftliche Anwendungen entwickelt wurde.',
        longdescription:
          'NumC ist eine leichte, modulare Berechnungs-Engine, die für technische, statistische und wissenschaftliche Anwendungen entwickelt wurde. Die Bibliothek bietet optimierte Implementierungen numerischer Methoden, Datenanalysewerkzeuge und grundlegende Mechanismen zur Ergebnisvisualisierung. Das Projekt konzentriert sich auf:<ul><li>hohe Leistung und Speicherkontrolle,</li><li>numerische Stabilität und Vorhersehbarkeit von Berechnungen,</li><li>eine saubere, minimalistische API in C++.</li></ul>NumC soll das Fundament für größere Rechensysteme sein — von physikalischen Simulationen bis hin zur Analyse experimenteller Daten — ohne versteckte Magie und unnötige Abstraktionsschichten.',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description:
          'Echo ist ein modulares Framework zur Verarbeitung und Analyse digitaler Signale. Es ermöglicht das Laden von Daten aus verschiedenen Quellen, Filterung, Zeit-Frequenz-Transformationen und die Visualisierung von Wellenformen in Echtzeit oder offline.',
        longdescription: `Echo ist ein modulares Framework zur Verarbeitung und Analyse digitaler Signale. Es ermöglicht das Laden von Daten aus verschiedenen Quellen, Filterung, Zeit-Frequenz-Transformationen und die Visualisierung von Wellenformen in Echtzeit oder offline. Das Projekt konzentriert sich auf:
<ul>
  <li>Leistung und Modulflexibilität,</li>
  <li>eine klare, minimalistische Schnittstelle,</li>
  <li>Nützlichkeit in Bildung und wissenschaftlicher Forschung.</li>
</ul>
Echo ist als Basis für DSP-Experimente und die Erstellung fortschrittlicher Signalverarbeitungsketten konzipiert — von der Audioanalyse bis hin zu Telekommunikationsprojekten.`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resist ist eine leichte DSL-Sprache, geschrieben in Rust, die zur Simulation elektrischer Schaltkreise verwendet wird. Sie ermöglicht die deklarative Schaltkreisdefinition, die Modellierung von Elementen (Widerstände, Kondensatoren, Spulen, Quellen, Dioden, Transistoren) und die Durchführung von DC- und AC-Simulationen.`,
        longdescription: `Resist ist eine leichte DSL-Sprache, geschrieben in Rust, die zur Simulation elektrischer Schaltkreise verwendet wird. Sie ermöglicht die deklarative Schaltkreisdefinition, die Modellierung von Elementen (Widerstände, Kondensatoren, Spulen, Quellen, Dioden, Transistoren) und die Durchführung von DC- und AC-Simulationen. Das Projekt konzentriert sich auf:
<ul>
  <li>Integration mit einem effizienten numerischen Solver in Rust,</li>
  <li>die Einfachheit der deklarativen Schaltkreisbeschreibung,</li>
  <li>pädagogischen Nutzen beim Erlernen von Simulation und numerischer Algebra.</li>
</ul>
Resist ist das Fundament für Experimente in der Schaltungssimulation und die Entwicklung benutzerdefinierter Analysetools in Rust.`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          'Ziel: Finden der stabilsten Geometrie eines auf einer hexagonalen Bornitrid (h-BN)-Oberfläche adsorbierten Au6-Clusters unter Verwendung eines Genetischen Algorithmus (GA) in der ASE-Umgebung.',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'Molekulardynamiksimulation für Wismutoxid Bi₂O₃ : TiO₂ unter Verwendung des MACE-Maschinellen-Lern-Potenzials und der ASE-Umgebung.',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'Molekulardynamik von Edelgaskristallen, von Grund auf neu erstellt.',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'In Java implementierte physikalische Simulation einer Atombombe, die ein Modell zur Simulation und Analyse ihres Verhaltens liefert. Das Modell zeigt, dass eine geringe Urandichte zu einem stetigen Energieanstieg führt, während eine höhere Dichte zu einem schnellen Energiewachstum und einem explosiven Regime führt.',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'Einfache Simulation von Quantenwellen durch Lösen der Schrödinger-Gleichung in benutzerdefinierten Potenzialen. Das Projekt ermöglicht es Benutzern, das Verhalten von Quantenwellen unter verschiedenen Potenzialkonfigurationen zu visualisieren und zu untersuchen und Einblicke in grundlegende Prinzipien der Quantenmechanik zu geben.',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          'Einfache Sonnensystemsimulation, die gravitative Wechselwirkungen zwischen Himmelskörpern zeigt und es Benutzern ermöglicht, die Dynamik eines Sonnensystems zu visualisieren.',
        github: 'https://github.com/mslotwinski-dev/Laplace',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Laplace/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['laplace-1.png'],
      },
    ],
  },
] as ProjectGroup[]

export default projectdata
