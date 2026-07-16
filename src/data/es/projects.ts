import { ProjectGroup } from '../types/interfaces'

const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      'Los proyectos web modulares más grandes, donde cada elemento forma una parte distinta de un todo mayor.',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDirac es un proyecto sin fines de lucro enfocado en hacer que la educación sea más accesible proporcionando libros de texto gratuitos, completos y de fácil acceso.',
        longdescription: `eDirac es un proyecto educativo innovador sin fines de lucro cuyo objetivo es proporcionar acceso gratuito a conocimientos científicos completos. El proyecto se centra en:
<ul>
  <li>crear libros de texto gratuitos de física, ingeniería, matemáticas y otros campos,</li>
  <li>difundir el conocimiento independientemente de los antecedentes o la riqueza de los usuarios,</li>
  <li>planes de desarrollo que incluyen la traducción de libros de texto a muchos idiomas para que todos tengan las mismas oportunidades en la educación.</li>
</ul>
La plataforma eDirac combina una interfaz accesible, fácil acceso a los materiales y una misión de educación global, centrándose en la transparencia y la plena disponibilidad de los recursos para todos.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Sistema simple de intercambio de archivos escrito en Vue, Node, Nest y MongoDB.',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLib es un sitio web personal que ofrece acceso a una colección de libros electrónicos y archivos PDF. Sirve como plataforma para compartir recursos educativos y de otro tipo, posiblemente para uso académico o personal.',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMe es una plataforma con muchos tests psicológicos, políticos y filosóficos. ¡Responde honestamente!',
        longdescription: `AnalyseMe es una plataforma web moderna y ligera diseñada para diagnosticar y analizar tus propios puntos de vista y creencias. El sitio proporciona un conjunto de cuestionarios extensos (como Political Compass o 9Axes), herramientas intuitivas de filtrado de categorías y un claro sistema de etiquetado. El proyecto se centra en:
<ul>
<li>diversidad temática (desde política y economía hasta filosofía),</li>
<li>una interfaz de usuario clara y minimalista,</li>
<li>un carácter abierto e integración con la comunidad (GitHub).</li>
</ul>
AnalyseMe pretende ser tu centro personal para el autodescubrimiento — desde análisis políticos multieje hasta pruebas de libertad personal — sin complicaciones innecesarias y barreras para acceder a los resultados.`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Aplicación simple para tomar notas escrita en Nuxt.js y Nest.js.',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description: 'Aplicación simple para guardar y acortar tus enlaces.',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAI es una plataforma inteligente para generar proyectos de programación personalizados.',
        longdescription: `ThinklineAI es una plataforma inteligente para generar proyectos de programación personalizados. El sistema analiza los intereses del usuario, los idiomas preferidos y el nivel de dificultad para proponer ideas únicas y prácticas para el aprendizaje, la experimentación y la creación de prototipos. El proyecto se centra en:<ul><li>una arquitectura de IA modular y escalable,</li><li>una interfaz de usuario intuitiva,</li><li>fácil integración con varias tecnologías y lenguajes de programación.</li></ul>ThinklineAI está diseñado para apoyar el desarrollo de habilidades de programación, la exploración de nuevas soluciones y el rápido prototipado de proyectos — sin complicaciones innecesarias y abstracción excesiva.`,
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
      'Proyectos extensos y complejos que requieren mucha planificación, esfuerzo y el uso de herramientas avanzadas.',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'Juego de consola desarrollado en C++ donde los jugadores controlan a un capibara navegando por una selva. El juego involucra varios desafíos e interacciones en un entorno selvático, proporcionando una experiencia atractiva y divertida.',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flow es un demonio avanzado de Bash que automatiza la sincronización en tiempo real de directorios locales con Google Drive. Elimina la necesidad de copias de seguridad manuales al observar silenciosamente tu sistema de archivos en busca de cambios y subirlos a la nube en el momento en que ocurren, manteniendo tus datos seguros sin interrumpir tu flujo de trabajo.`,
        longdescription: `Flow es un demonio avanzado de Bash que automatiza la sincronización en tiempo real de directorios locales con Google Drive. Elimina la necesidad de copias de seguridad manuales al observar silenciosamente tu sistema de archivos en busca de cambios y subirlos a la nube en el momento en que ocurren, manteniendo tus datos seguros sin interrumpir tu flujo de trabajo.`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: 'Yo calculo los informes, tú bebes la cerveza.',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'Pixel es un editor de imágenes rápido y ligero escrito en Rust, disponible tanto con una GUI como con una CLI. Proporciona herramientas potentes pero simples para el procesamiento de imágenes: desde operaciones básicas (cambiar tamaño, recortar, rotar) hasta filtros integrados al estilo Instagram.',
        longdescription:
          'Pixel es un editor de imágenes rápido y ligero escrito en Rust, disponible tanto con una GUI como con una CLI. Proporciona herramientas potentes pero simples para el procesamiento de imágenes: desde operaciones básicas (cambiar tamaño, recortar, rotar) hasta filtros integrados al estilo Instagram.',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHATo es un proyecto integral de redes informáticas diseñado para proporcionar mensajería segura en tiempo real entre usuarios. Construido completamente en Go, cuenta con una sólida arquitectura cliente-servidor utilizando una API RESTful para operaciones estándar y WebSockets (TCP/IP) para comunicación bidireccional de baja latencia.`,
        longdescription: `poCHATo es un proyecto integral de redes informáticas diseñado para proporcionar mensajería segura en tiempo real entre usuarios. Construido completamente en Go, cuenta con una sólida arquitectura cliente-servidor utilizando una API RESTful para operaciones estándar y WebSockets (TCP/IP) para comunicación bidireccional de baja latencia.
<ul>
  <li>Cifrado de extremo a extremo (E2EE)</li>
  <li>Sistema de amigos</li>
  <li>WebSockets en tiempo real</li>
</ul>
La seguridad y la privacidad están en el corazón de poCHATo. La comunicación directa está restringida a amigos mutuamente aceptados, y cada mensaje está asegurado mediante Cifrado de extremo a extremo (E2EE).`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          'Una aplicación que genera un gráfico mostrando los lenguajes de programación que usas. Ayuda a visualizar qué lenguajes te gustan más.',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'Aplicación simple de Electron diseñada para descargar videos de YouTube.',
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
      'Proyectos rápidos e inventivos centrados en la resolución de problemas y la experimentación libre.',
    projects: [
      {
        title: 'Assistant',
        description:
          'Moderna aplicación web diseñada para la navegación interactiva de programas de estudio y estructuras de departamentos. Aquí con marcador de posición - Instituto Real de Tecnología en la República de las Dos Naciones.',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'],
      },
      {
        title: 'Boson',
        description: `Boson es un simulador flexible de autómatas celulares con reglas configurables, que permite el modelado de fenómenos complejos como incendios, cristalización o evolución de patrones.`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWybory es una aplicación diseñada para registrar datos de votación y realizar un seguimiento de cómo votaron los usuarios en las elecciones. Proporciona una forma segura y organizada de documentar los resultados de las elecciones para uso personal.`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `Implementación en Go del Juego de la Vida de Conway, un autómata celular que simula la evolución de las células basadas en reglas simples.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `Biblioteca CSS muy ligera para estilizar elementos predeterminados. Sin clases, sin JS: solo un mejor aspecto.`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `El proyecto "PastoLatarnia" es una plataforma para compartir y leer historias tipo "pasta", historias de Internet típicamente divertidas o ligeras. El sitio permite a los usuarios disfrutar de una variedad de historias que pretenden entretener y divertir.`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `Mapa interactivo de Polonia con resultados electorales personalizados y muchas formas de explorar estadísticas sobre ellos.`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `Simplemente cambia el tamaño de tus iconos.`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQuery es una versión moderna de jQuery, escrita en TypeScript. Proporciona una alternativa ligera a jQuery, centrándose en la simplicidad y en las prácticas modernas de desarrollo web.`,
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
      'Proyectos rápidos con temática de juegos donde la diversión y la creatividad son lo más importante.',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolver es una aplicación en C# diseñada para resolver Sudoku. El proyecto proporciona la implementación de un algoritmo para resolver automáticamente las cuadrículas de Sudoku.',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiply es una aplicación educativa diseñada para ayudar a los usuarios a aprender las tablas de multiplicar.',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `Simple parodia de páginas de casinos baratos. Incluye juego de blackjack.`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Implementación clásica del juego Snake en Rust.',
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
      'Proyectos prácticos creados para comprender mejor las características clave del lenguaje Go y aprender las mejores prácticas.',
    projects: [
      {
        title: 'CodeHub',
        description:
          'Tu gestor de proyectos personal, diseñado para organizar, rastrear y mostrar tus proyectos de codificación con facilidad.',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description: 'Framework front-end simple escrito en Go. ¡No más JS!',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dash es un servidor proxy inverso personal con soporte para HTTP/HTTPS, SSL, equilibrio de carga y almacenamiento en caché de recursos estáticos.',
        longdescription: `Dash es un servidor proxy inverso personalizado con soporte para HTTP/HTTPS, SSL, equilibrio de carga y almacenamiento en caché de recursos estáticos. El proyecto se centra en:
<ul>
  <li>emisión automática de certificados SSL,</li>
  <li>varios algoritmos de equilibrio (round-robin, least connections),</li>
  <li>compresión de datos y almacenamiento en caché,</li>
  <li>monitoreo y registro de tráfico.</li>
</ul>
Además, el proyecto permite la expansión de un panel administrativo en tiempo real y reglas de enrutamiento basadas en encabezados HTTP, creando una base sólida para soluciones de red escalables.`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:
          'Neon es una plataforma de computación distribuida diseñada para simular y procesar datos científicos en entornos HPC.',
        longdescription:
          'Neon es una plataforma de computación distribuida diseñada para simular y procesar datos científicos en entornos HPC. El sistema permite definir tareas computacionales, distribuir automáticamente la carga en un clúster, monitorear recursos y agregar resultados en tiempo real. El proyecto se centra en:<ul><li>escalabilidad y tolerancia a fallos,</li><li>comunicación efectiva y paralelismo en Go,</li><li>una arquitectura modular con un maestro/trabajador y un sistema de colas.</li></ul>Neon está destinado a ser la base para sistemas computacionales integrales — desde simulaciones físicas hasta el análisis de grandes conjuntos de datos — con un control total sobre el flujo de cálculos y recursos del clúster.',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'Tu gestor de proyectos personal, diseñado para organizar, rastrear y mostrar tus proyectos de codificación con facilidad.',
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
      'Proyectos creados en el contexto de la ciencia y la ingeniería, que reflejan conocimientos teóricos y su aplicación práctica.',
    projects: [
      {
        title: 'Arctic',
        description:
          'Un sistema operativo modular y minimalista de 32 bits escrito en C y NASM, orientado a la arquitectura x86.',
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'],
      },
      {
        title: 'NumC',
        description:
          'Numc es un motor computacional ligero y modular diseñado para aplicaciones de ingeniería, estadísticas y científicas.',
        longdescription:
          'NumC es un motor computacional ligero y modular diseñado para aplicaciones de ingeniería, estadísticas y científicas. La biblioteca proporciona implementaciones optimizadas de métodos numéricos, herramientas de análisis de datos y mecanismos básicos de visualización de resultados. El proyecto se centra en:<ul><li>alto rendimiento y control de memoria,</li><li>estabilidad numérica y previsibilidad de los cálculos,</li><li>una API limpia y minimalista en C++.</li></ul>NumC está destinado a ser la base para sistemas computacionales más grandes — desde simulaciones físicas hasta el análisis de datos experimentales — sin magia oculta y capas de abstracción innecesarias.',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description:
          'Echo es un framework modular para procesar y analizar señales digitales. Permite cargar datos de varias fuentes, filtrar, realizar transformaciones de tiempo-frecuencia y visualizar formas de onda en tiempo real o fuera de línea.',
        longdescription: `Echo es un framework modular para procesar y analizar señales digitales. Permite cargar datos de varias fuentes, filtrar, realizar transformaciones de tiempo-frecuencia y visualizar formas de onda en tiempo real o fuera de línea. El proyecto se centra en:
<ul>
  <li>rendimiento y flexibilidad del módulo,</li>
  <li>una interfaz clara y minimalista,</li>
  <li>utilidad en la educación y la investigación científica.</li>
</ul>
Echo está diseñado como base para experimentos DSP y la creación de cadenas avanzadas de procesamiento de señales — desde análisis de audio hasta proyectos de telecomunicaciones.`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resist es un lenguaje DSL ligero escrito en Rust, utilizado para simular circuitos eléctricos. Permite la definición declarativa de circuitos, elementos de modelado (resistencias, condensadores, bobinas, fuentes, diodos, transistores) y la ejecución de simulaciones de CC y CA.`,
        longdescription: `Resist es un lenguaje DSL ligero escrito en Rust, utilizado para simular circuitos eléctricos. Permite la definición declarativa de circuitos, elementos de modelado (resistencias, condensadores, bobinas, fuentes, diodos, transistores) y la ejecución de simulaciones de CC y CA. El proyecto se centra en:
<ul>
  <li>integración con un solucionador numérico eficiente en Rust,</li>
  <li>la simplicidad de la descripción del circuito declarativo,</li>
  <li>utilidad educativa en el aprendizaje de la simulación y el álgebra numérica.</li>
</ul>
Resist es la base para experimentos en simulación de circuitos y el desarrollo de herramientas analíticas personalizadas en Rust.`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          'Objetivo: Encontrar la geometría más estable de un clúster Au6 adsorbido en una superficie de nitruro de boro hexagonal (h-BN) utilizando un Algoritmo Genético (GA) en el entorno ASE.',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'Simulación de dinámica molecular para óxido de bismuto Bi₂O₃ : TiO₂ utilizando el potencial de aprendizaje automático MACE y el entorno ASE.',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'Dinámica molecular de cristales de gases nobles hecha desde cero.',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'Simulación física de una bomba nuclear implementada en Java, proporcionando un modelo para simular y analizar su comportamiento. El modelo demuestra que una baja densidad de uranio conduce a un aumento constante de la energía, mientras que una mayor densidad resulta en un rápido crecimiento de la energía y un régimen explosivo.',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'Simulación simple de ondas cuánticas resolviendo la ecuación de Schrödinger en potenciales personalizados. El proyecto permite a los usuarios visualizar y explorar el comportamiento de las ondas cuánticas bajo diferentes configuraciones de potencial, proporcionando información sobre los principios fundamentales de la mecánica cuántica.',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          'Simulación simple del sistema solar, mostrando interacciones gravitacionales entre cuerpos celestes, permitiendo a los usuarios visualizar la dinámica de un sistema solar.',
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
