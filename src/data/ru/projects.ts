import { ProjectGroup } from '../types/interfaces'

const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      'Самые масштабные, модульные веб-проекты, в которых каждый элемент является отдельной частью большего целого.',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDirac — это некоммерческий проект, направленный на повышение доступности образования с помощью бесплатных и полных учебников.',
        longdescription: `eDirac — это инновационный некоммерческий образовательный проект, направленный на обеспечение бесплатного доступа к комплексным научным знаниям. Проект фокусируется на:
<ul>
  <li>создании бесплатных учебников по физике, инженерии, математике и другим областям,</li>
  <li>распространении знаний независимо от происхождения или достатка пользователей,</li>
  <li>планах развития, включающих перевод учебников на многие языки мира, чтобы у каждого были равные возможности в образовании.</li>
</ul>
Платформа eDirac сочетает в себе доступный интерфейс, легкий доступ к материалам и миссию глобального образования, делая упор на прозрачность и полную доступность ресурсов для всех.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Простая система обмена файлами, написанная на Vue, Node, Nest и MongoDB.',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLib — это персональный веб-сайт, предоставляющий доступ к коллекции электронных книг и PDF-файлов. Он служит платформой для обмена учебными и другими ресурсами.',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMe — это платформа с множеством психологических, политических и философских тестов. Отвечай честно!',
        longdescription: `AnalyseMe — это легкая современная веб-платформа, предназначенная для диагностики и анализа ваших собственных взглядов и убеждений. Сайт предоставляет набор обширных викторин (таких как Political Compass или 9Axes), интуитивно понятные инструменты фильтрации категорий и четкую систему тегов. Проект фокусируется на:
<ul>
<li>тематическом разнообразии (от политики и экономики до философии),</li>
<li>четком, минималистичном пользовательском интерфейсе,</li>
<li>открытом характере и интеграции с сообществом (GitHub).</li>
</ul>
AnalyseMe задуман как ваш личный центр самопознания — от многоосевого политического анализа до тестов на личную свободу — без ненужных сложностей и барьеров.`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Простое приложение для ведения заметок, написанное на Nuxt.js и Nest.js.',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description:
          'Простое приложение для хранения и сокращения ваших ссылок.',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAI — это интеллектуальная платформа для генерации персонализированных проектов по программированию.',
        longdescription: `ThinklineAI — это интеллектуальная платформа для генерации персонализированных проектов по программированию. Система анализирует интересы пользователя, предпочитаемые языки и уровень сложности, чтобы предложить уникальные и практичные идеи для обучения, экспериментов и прототипирования. Проект фокусируется на:<ul><li>модульной и масштабируемой архитектуре ИИ,</li><li>интуитивно понятном пользовательском интерфейсе,</li><li>простой интеграции с различными технологиями и языками программирования.</li></ul>ThinklineAI предназначен для поддержки развития навыков программирования, поиска новых решений и быстрого прототипирования проектов.`,
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
      'Обширные и сложные проекты, требующие тщательного планирования, усилий и использования передовых инструментов.',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'Консольная игра, разработанная на C++, в которой игроки управляют капибарой, перемещающейся по джунглям. Игра включает различные испытания в условиях джунглей.',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flow — это продвинутый демон оболочки Bash, который автоматизирует синхронизацию локальных каталогов с Google Drive в реальном времени, устраняя необходимость в ручном резервном копировании.`,
        longdescription: `Flow — это продвинутый демон оболочки Bash, который автоматизирует синхронизацию локальных каталогов с Google Drive в реальном времени. Он устраняет необходимость в ручном резервном копировании, тихо наблюдая за изменениями в файловой системе и отправляя их в облако в момент их возникновения, обеспечивая безопасность данных без прерывания рабочего процесса.`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: 'Я считаю отчеты, а ты пьешь пиво.',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'Pixel — это быстрый и легкий редактор изображений, написанный на Rust. Он предоставляет мощные, но простые инструменты для обработки изображений — от базовых операций до встроенных фильтров.',
        longdescription:
          'Pixel — это быстрый и легкий редактор изображений, написанный на Rust, доступный как с графическим интерфейсом, так и в командной строке. Он предоставляет мощные, но простые инструменты для обработки изображений — от базовых операций (изменение размера, обрезка, поворот) до встроенных фильтров в стиле Instagram.',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHATo — это комплексный проект компьютерных сетей, предназначенный для обеспечения безопасного обмена сообщениями в реальном времени между пользователями. Написан полностью на Go.`,
        longdescription: `poCHATo — это комплексный проект компьютерных сетей, предназначенный для обеспечения безопасного обмена сообщениями в реальном времени между пользователями. Написан полностью на Go, он имеет надежную клиент-серверную архитектуру, использующую RESTful API и WebSockets (TCP/IP) для двусторонней связи с низкой задержкой.
<ul>
  <li>Сквозное шифрование (E2EE)</li>
  <li>Система друзей</li>
  <li>WebSockets в реальном времени</li>
</ul>
Безопасность и конфиденциальность лежат в основе poCHATo. Прямое общение ограничено взаимно принятыми друзьями.`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          'Приложение, которое генерирует график, показывающий используемые вами языки программирования. Оно помогает визуализировать, какие языки вам нравятся больше всего.',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'Простое приложение Electron, предназначенное для скачивания видео с YouTube.',
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
      'Быстрые, изобретательные проекты, ориентированные на решение проблем и свободные эксперименты.',
    projects: [
      {
        title: 'Assistant',
        description:
          'Современное веб-приложение, предназначенное для интерактивного просмотра учебных программ и структур факультетов. Здесь с плейсхолдером — Королевским технологическим институтом.',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'],
      },
      {
        title: 'Boson',
        description: `Boson — это гибкий симулятор клеточных автоматов с настраиваемыми правилами, позволяющий моделировать сложные явления, такие как пожары, кристаллизация и эволюция паттернов.`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWybory — это приложение, предназначенное для записи данных голосования и отслеживания того, как пользователи голосовали на выборах.`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `Реализация на Go игры «Жизнь» Конвея — клеточного автомата, который имитирует эволюцию клеток на основе простых правил.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `Очень легкая библиотека CSS для стилизации элементов по умолчанию. Без классов, без JS - просто лучший внешний вид.`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `Проект PastoLatarnia — это платформа для обмена и чтения "паст", забавных интернет-историй. Сайт позволяет пользователям наслаждаться разнообразием историй.`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `Интерактивная карта Польши с пользовательскими результатами выборов и множеством способов изучения статистики по ним.`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `Просто изменяет размер ваших иконок.`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQuery — это современная версия jQuery, написанная на TypeScript. Она предоставляет легкую альтернативу jQuery, ориентируясь на простоту.`,
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
      'Быстрые проекты на игровую тематику, где веселье и креативность важнее всего.',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolver — это приложение на C#, предназначенное для решения головоломок судоку. Проект предоставляет реализацию алгоритма для автоматического решения сеток судоку.',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiply — это обучающее приложение, созданное для того, чтобы помочь пользователям выучить таблицу умножения.',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `Простая пародия на дешевые страницы казино. Включает игру в блэкджек.`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Классическая реализация игры "Змейка" на Rust.',
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
      'Практические проекты, созданные для лучшего понимания ключевых особенностей языка Go и изучения передовых методов.',
    projects: [
      {
        title: 'CodeHub',
        description:
          'Ваш личный менеджер проектов, созданный для простой организации, отслеживания и отображения ваших проектов по программированию.',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description:
          'Простой фронтенд-фреймворк, написанный на Go. Больше никакого JS!',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dash — это персональный сервер обратного прокси с поддержкой HTTP/HTTPS, SSL, балансировкой нагрузки и кэшированием.',
        longdescription: `Dash — это настраиваемый сервер обратного прокси с поддержкой HTTP/HTTPS, SSL, балансировкой нагрузки и кэшированием статических ресурсов. Проект фокусируется на:
<ul>
  <li>автоматической выдаче SSL-сертификатов,</li>
  <li>различных алгоритмах балансировки,</li>
  <li>сжатии данных и кэшировании,</li>
  <li>мониторинге трафика и логировании.</li>
</ul>
Кроме того, проект позволяет расширить панель администратора в реальном времени и правила маршрутизации.`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:
          'Neon — это платформа распределенных вычислений, предназначенная для моделирования и обработки научных данных в средах HPC.',
        longdescription:
          'Neon — это платформа распределенных вычислений, предназначенная для моделирования и обработки научных данных в средах HPC. Система позволяет определять вычислительные задачи, автоматически распределять нагрузку в кластере, отслеживать ресурсы и агрегировать результаты в реальном времени. Проект фокусируется на:<ul><li>масштабируемости и отказоустойчивости,</li><li>эффективной связи и параллелизме в Go,</li><li>модульной архитектуре с системой master/worker.</li></ul>Neon задуман как основа для комплексных вычислительных систем.',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'Ваш личный менеджер проектов, созданный для простой организации, отслеживания и отображения ваших проектов.',
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
      'Проекты, созданные в контексте науки и инженерии, отражающие теоретические знания и их практическое применение.',
    projects: [
      {
        title: 'Arctic',
        description:
          'Минималистичная модульная 32-битная операционная система, написанная на C и NASM для архитектуры x86.',
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'],
      },
      {
        title: 'NumC',
        description:
          'Numc — это легкий модульный вычислительный движок, предназначенный для инженерных, статистических и научных приложений.',
        longdescription:
          'NumC — это легкий модульный вычислительный движок, предназначенный для инженерных, статистических и научных приложений. Библиотека предоставляет оптимизированные реализации численных методов, инструменты анализа данных и базовые механизмы визуализации результатов. Проект фокусируется на:<ul><li>высокой производительности и контроле памяти,</li><li>численной стабильности и предсказуемости вычислений,</li><li>чистом минималистичном API на C++.</li></ul>NumC призван стать основой для более крупных вычислительных систем.',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description:
          'Echo — это модульный фреймворк для обработки и анализа цифровых сигналов. Позволяет загружать данные, фильтровать и визуализировать.',
        longdescription: `Echo — это модульный фреймворк для обработки и анализа цифровых сигналов. Он позволяет загружать данные из различных источников, фильтровать, выполнять частотно-временные преобразования и визуализировать формы сигналов в реальном времени или в автономном режиме. Проект фокусируется на:
<ul>
  <li>производительности и гибкости модулей,</li>
  <li>четком минималистичном интерфейсе,</li>
  <li>полезности в образовании и научных исследованиях.</li>
</ul>
Echo разработан как база для экспериментов с DSP.`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resist — это легкий язык DSL, написанный на Rust, используемый для моделирования электрических цепей.`,
        longdescription: `Resist — это легкий язык DSL, написанный на Rust, используемый для моделирования электрических цепей. Он позволяет декларативно определять цепи, элементы (резисторы, конденсаторы, катушки, источники, диоды, транзисторы) и запускать симуляции постоянного и переменного тока. Проект фокусируется на:
<ul>
  <li>интеграции с эффективным численным решателем на Rust,</li>
  <li>простоте декларативного описания схемы,</li>
  <li>образовательной полезности в изучении симуляции и численной алгебры.</li>
</ul>
Resist является основой для разработки пользовательских аналитических инструментов на Rust.`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          'Цель: Найти наиболее стабильную геометрию кластера Au6, адсорбированного на поверхности гексагонального нитрида бора (h-BN), используя генетический алгоритм (GA) в среде ASE.',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'Симуляция молекулярной динамики для оксида висмута Bi₂O₃ : TiO₂ с использованием потенциала машинного обучения MACE и среды ASE.',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'Молекулярная динамика кристаллов благородных газов, созданная с нуля.',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'Физическая симуляция ядерной бомбы, реализованная на Java. Модель демонстрирует, что низкая плотность урана приводит к устойчивому росту энергии, в то время как более высокая плотность приводит к быстрому росту энергии и взрывному режиму.',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'Простая симуляция квантовых волн путем решения уравнения Шредингера в пользовательских потенциалах. Позволяет визуализировать поведение квантовых волн, давая представление о фундаментальных принципах квантовой механики.',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          'Простая симуляция солнечной системы, показывающая гравитационные взаимодействия между небесными телами.',
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
