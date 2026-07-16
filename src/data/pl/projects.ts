import { ProjectGroup } from '../types/interfaces'

const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      'Największe, modułowe projekty stron internetowych, w których każdy element stanowi odrębną część większej całości.',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDirac to innowacyjny projekt edukacyjny non-profit, którego celem jest zwiększenie dostępności edukacji poprzez darmowe i kompleksowe podręczniki.',
        longdescription: `eDirac to innowacyjny projekt edukacyjny non-profit, którego celem jest zapewnienie bezpłatnego dostępu do kompleksowej wiedzy naukowej. Projekt skupia się na:
<ul>
  <li>tworzeniu darmowych podręczników z fizyki, inżynierii, matematyki i innych dziedzin,</li>
  <li>upowszechnianiu wiedzy niezależnie od pochodzenia czy zamożności użytkowników,</li>
  <li>planach rozwoju obejmujących tłumaczenia podręczników na wiele języków świata, aby każdy miał równe szanse w edukacji.</li>
</ul>
Platforma eDirac łączy w sobie przystępny interfejs, łatwy dostęp do materiałów oraz misję globalnej edukacji, stawiając na transparentność i pełną dostępność zasobów dla każdego.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Prosty system współdzielenia plików napisany w technologiach Vue, Node, Nest i MongoDB.',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLib to osobista strona internetowa oferująca dostęp do kolekcji e-booków i plików PDF. Służy jako platforma do dzielenia się zasobami edukacyjnymi.',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMe to platforma z wieloma testami psychologicznymi, politycznymi i filozoficznymi. Odpowiadaj szczerze!',
        longdescription: `AnalyseMe to lekka, nowoczesna platforma webowa przeznaczona do diagnozowania i analizy własnych poglądów oraz przekonań. Serwis dostarcza zestaw rozbudowanych quizów (takich jak Political Compass czy 9Axes), intuicyjne narzędzia do filtrowania kategorii oraz przejrzysty system tagowania. Projekt stawia na:
<ul>
<li>różnorodność tematyczną (od polityki i ekonomii po filozofię),</li>
<li>przejrzysty, minimalistyczny interfejs użytkownika,</li>
<li>otwarty charakter i integrację ze społecznością (GitHub),</li>
</ul>
AnalyseMe ma być Twoim osobistym centrum samopoznania — od wieloosiowych analiz politycznych po testy wolności osobistej — bez zbędnego skomplikowania i bez barier w dostępie do wyników`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Prosta aplikacja do robienia notatek napisana w Nuxt.js i Nest.js.',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description: 'Prosta aplikacja do przechowywania i skracania linków.',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAI to inteligentna platforma do generowania spersonalizowanych projektów programistycznych.',
        longdescription: `ThinklineAI to inteligentna platforma do generowania spersonalizowanych projektów programistycznych. System analizuje zainteresowania użytkownika, preferowane języki oraz poziom trudności, aby proponować unikalne i praktyczne pomysły do nauki, eksperymentów i prototypowania. Projekt stawia na:<ul><li>modularną i skalowalną architekturę AI,</li><li>intuicyjny interfejs użytkownika,</li><li>łatwą integrację z różnymi technologiami i językami programowania,</li></ul>ThinklineAI ma wspierać rozwój umiejętności programistycznych, eksplorację nowych rozwiązań oraz szybkie prototypowanie projektów — bez zbędnej komplikacji i nadmiaru abstrakcji.`,
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
      'Rozbudowane i skomplikowane projekty, które wymagają dużo planowania, wysiłku oraz użycia zaawansowanych narzędzi.',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'Gra konsolowa stworzona w C++, w której gracze sterują kapibarą przemierzającą dżunglę. Gra oferuje różnorodne wyzwania i interakcje osadzone w środowisku dżungli.',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flow to zaawansowany demon powłoki Bash, który automatyzuje synchronizację lokalnych katalogów z Google Drive w czasie rzeczywistym. Eliminuje potrzebę ręcznych kopii zapasowych, cicho obserwując system plików pod kątem zmian i wypychając je do chmury w momencie ich wystąpienia.`,
        longdescription: `Flow to zaawansowany demon powłoki Bash, który automatyzuje synchronizację lokalnych katalogów z Google Drive w czasie rzeczywistym. Eliminuje potrzebę ręcznych kopii zapasowych, cicho obserwując system plików pod kątem zmian i wypychając je do chmury w momencie ich wystąpienia, dbając o bezpieczeństwo danych bez przerywania pracy.`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: 'Ja liczę sprawozdania ty pijesz piwo.',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'Pixel to szybki i lekki edytor obrazów napisany w języku Rust, dostępny zarówno z poziomu GUI, jak i CLI. Zapewnia potężne, ale proste narzędzia do przetwarzania obrazu – od podstawowych operacji po wbudowane filtry.',
        longdescription:
          'Pixel to szybki i lekki edytor obrazów napisany w języku Rust, dostępny zarówno z poziomu GUI, jak i CLI. Zapewnia potężne, ale proste narzędzia do przetwarzania obrazu – od podstawowych operacji (zmiana rozmiaru, przycinanie, obracanie) po wbudowane filtry w stylu Instagrama.',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHATo to kompleksowy projekt sieci komputerowych, zapewniający bezpieczne przesyłanie wiadomości w czasie rzeczywistym między użytkownikami. Napisany w całości w Go, charakteryzuje się architekturą klient-serwer wykorzystującą RESTful API i WebSockets.`,
        longdescription: `poCHATo to kompleksowy projekt sieci komputerowych, zaprojektowany w celu zapewnienia bezpiecznego przesyłania wiadomości w czasie rzeczywistym między użytkownikami. Napisany w całości w Go, charakteryzuje się solidną architekturą klient-serwer wykorzystującą RESTful API do standardowych operacji i WebSockets (TCP/IP) do dwukierunkowej komunikacji o niskich opóźnieniach.
<ul>
  <li>Szyfrowanie End-to-End (E2EE)</li>
  <li>System znajomych</li>
  <li>WebSockets w czasie rzeczywistym</li>
</ul>
Bezpieczeństwo i prywatność są sercem poCHATo. Bezpośrednia komunikacja jest ograniczona do obustronnie zaakceptowanych znajomych, a każda wiadomość jest zabezpieczona za pomocą szyfrowania End-to-End.`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          'Aplikacja generująca wykres przedstawiający używane przez Ciebie języki programowania. Pomaga zwizualizować, które z nich lubisz najbardziej.',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'Prosta aplikacja Electron przeznaczona do pobierania filmów z YouTube.',
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
      'Szybkie, pomysłowe projekty skupione na rozwiązywaniu problemów i swobodnym eksperymentowaniu.',
    projects: [
      {
        title: 'Assistant',
        description:
          'Nowoczesna aplikacja webowa przeznaczona do interaktywnego przeglądania programów studiów i struktur wydziałowych. Tutaj z danymi zastępczymi - Królewski Instytut Technologiczny w Rzeczypospolitej Obojga Narodów.',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'],
      },
      {
        title: 'Boson',
        description: `Boson to elastyczny symulator automatów komórkowych z konfigurowalnymi regułami, umożliwiający modelowanie złożonych zjawisk, takich jak pożary czy ewolucja wzorców.`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWybory to aplikacja przeznaczona do rejestrowania danych z głosowań. Zapewnia bezpieczny i zorganizowany sposób dokumentowania wyników wyborów do użytku osobistego.`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `Implementacja Gry w życie Conwaya w języku Go, automatu komórkowego symulującego ewolucję komórek w oparciu o proste zasady.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `Bardzo lekka biblioteka CSS do stylizacji domyślnych elementów. Bez klas, bez JS - po prostu lepszy wygląd.`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `Projekt "PastoLatarnia" to platforma do dzielenia się i czytania "past" - zazwyczaj humorystycznych internetowych opowieści. Zapewnia dobrą zabawę.`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `Interaktywna mapa Polski z wynikami wyborów i wieloma sposobami eksploracji statystyk na ich temat.`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `Po prostu zmienia rozmiar Twoich ikon.`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQuery to nowoczesna wersja jQuery, napisana w TypeScript. Stanowi lekką alternatywę, skupiając się na prostocie i nowoczesnych standardach webowych.`,
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
      'Szybkie projekty w tematyce gier, gdzie liczy się przede wszystkim dobra zabawa i kreatywność.',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolver to aplikacja w C# przeznaczona do rozwiązywania łamigłówek Sudoku. Zapewnia implementację algorytmu do automatycznego uzupełniania siatek.',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiply to aplikacja edukacyjna stworzona do pomocy użytkownikom w nauce tabliczki mnożenia.',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `Prosta parodia tanich stron z kasynami. Zawiera grę w Black Jacka.`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Klasyczna implementacja gry Snake w Rust.',
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
      'Praktyczne projekty stworzone z myślą o lepszym zrozumieniu kluczowych cech języka Go i poznaniu dobrych praktyk.',
    projects: [
      {
        title: 'CodeHub',
        description:
          'Twój osobisty menedżer projektów, zaprojektowany do łatwego organizowania, śledzenia i wyświetlania projektów programistycznych.',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description:
          'Prosty framework front-endowy napisany w Go. Koniec z JS!',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dash to osobisty serwer reverse proxy z obsługą HTTP/HTTPS, SSL, balansowania obciążenia i cache statycznych zasobów.',
        longdescription: `Dash to własny serwer reverse proxy z obsługą HTTP/HTTPS, SSL, balansowaniem obciążenia i cache statycznych zasobów. Projekt stawia na:
<ul>
  <li>automatyczne wystawianie certyfikatów SSL,</li>
  <li>różne algorytmy balansowania (round-robin, least connections),</li>
  <li>kompresję danych i cache,</li>
  <li>monitorowanie i logowanie ruchu.</li>
</ul>
Dodatkowo projekt umożliwia rozbudowę o panel administracyjny w czasie rzeczywistym oraz reguły routingu oparte na nagłówkach HTTP, tworząc solidną bazę pod skalowalne rozwiązania sieciowe.`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:
          'Neon to rozproszona platforma obliczeniowa zaprojektowana do symulacji i przetwarzania danych naukowych w środowiskach HPC.',
        longdescription:
          'Neon to rozproszona platforma obliczeniowa zaprojektowana do symulacji i przetwarzania danych naukowych w środowiskach HPC. System umożliwia definiowanie zadań obliczeniowych, automatyczne rozdzielanie obciążenia w klastrze, monitorowanie zasobów i agregowanie wyników w czasie rzeczywistym. Projekt stawia na:<ul><li>skalowalność i odporność na awarie,</li><li>efektywną komunikację i równoległość w Go,</li><li>modularną architekturę z master/worker i systemem kolejkowym.</li></ul>Neon ma być fundamentem pod kompleksowe systemy obliczeniowe — od symulacji fizycznych po analizę dużych zbiorów danych — z pełną kontrolą nad przepływem obliczeń i zasobami klastra.',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'Twój osobisty menedżer projektów, zaprojektowany do łatwego organizowania, śledzenia i wyświetlania projektów programistycznych.',
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
      'Projekty stworzone w kontekście nauki i inżynierii, odzwierciedlające wiedzę teoretyczną i jej praktyczne zastosowanie.',
    projects: [
      {
        title: 'Arctic',
        description:
          'Minimalistyczny, modularny 32-bitowy system operacyjny napisany w C i NASM, przeznaczony na architekturę x86.',
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'],
      },
      {
        title: 'NumC',
        description:
          'NumC to lekki, modularny silnik obliczeniowy przeznaczony do zastosowań inżynierskich, statystycznych i naukowych.',
        longdescription:
          'NumC to lekki, modularny silnik obliczeniowy przeznaczony do zastosowań inżynierskich, statystycznych i naukowych. Biblioteka dostarcza zoptymalizowane implementacje metod numerycznych, narzędzia do analizy danych oraz podstawowe mechanizmy wizualizacji wyników. Projekt stawia na:<ul><li>wysoką wydajność i kontrolę pamięci,</li><li>stabilność numeryczną i przewidywalność obliczeń,</li><li>czyste, minimalistyczne API w C++.</li></ul>NumC ma być fundamentem pod większe systemy obliczeniowe — od symulacji fizycznych po analizę danych eksperymentalnych — bez ukrytej magii i bez zbędnej warstwy abstrakcji.',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description:
          'Echo to modularny framework do przetwarzania i analizy sygnałów cyfrowych. Umożliwia wczytywanie danych z różnych źródeł, filtrowanie i transformacje.',
        longdescription: `Echo to modularny framework do przetwarzania i analizy sygnałów cyfrowych. Umożliwia wczytywanie danych z różnych źródeł, filtrowanie, transformacje czasowo-częstotliwościowe oraz wizualizację przebiegów w czasie rzeczywistym lub offline. Projekt stawia na:
<ul>
  <li>wydajność i elastyczność modułów,</li>
  <li>przejrzysty, minimalistyczny interfejs,</li>
  <li>przydatność w edukacji i badaniach naukowych.</li>
</ul>
Echo jest zaprojektowane jako baza do eksperymentów DSP i tworzenia zaawansowanych łańcuchów przetwarzania sygnałów — od analizy audio po projekty telekomunikacyjne.`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resist to lekki język DSL, napisany w Rust, służący do symulacji obwodów elektrycznych. Umożliwia deklaratywne definiowanie obwodów i elementów.`,
        longdescription: `Resist to lekki język DSL, napisany w Rust, służący do symulacji obwodów elektrycznych. Umożliwia deklaratywne definiowanie obwodów, modelowanie elementów (rezystory, kondensatory, cewki, źródła, diody, tranzystory) oraz wykonywanie symulacji DC, AC. Projekt stawia na:
<ul>
  <li>integrację z wydajnym solverem numerycznym w Rust,</li>
  <li>prostotę deklaratywnego opisu obwodów,</li>
  <li>przydatność edukacyjną w nauce symulacji i algebry numerycznej.</li>
</ul>
Resist jest fundamentem pod eksperymenty w symulacji obwodów i rozwój własnych narzędzi analitycznych w Rust.`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          'Cel: Znalezienie najbardziej stabilnej geometrii klastra Au6 zaadsorbowanego na powierzchni heksagonalnego azotku boru (h-BN) z wykorzystaniem algorytmu genetycznego (GA) w środowisku ASE.',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'Symulacja dynamiki molekularnej dla tlenku bizmutu Bi₂O₃ : TiO₂ z użyciem potencjału uczenia maszynowego MACE i środowiska ASE.',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'Dynamika molekularna kryształów gazów szlachetnych napisana od podstaw.',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'Fizyczna symulacja bomby nuklearnej zaimplementowana w Javie. Model pokazuje, że niska gęstość uranu prowadzi do stałego wzrostu energii, podczas gdy wyższa skutkuje szybkim przyrostem i reżimem wybuchowym.',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'Prosta symulacja fal kwantowych poprzez rozwiązywanie równania Schrödingera w niestandardowych potencjałach. Pozwala na wizualizację i eksplorację zjawisk kwantowych.',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          'Prosta symulacja układu słonecznego, pokazująca interakcje grawitacyjne między ciałami niebieskimi i ułatwiająca wizualizację dynamiki astrofizycznej.',
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
