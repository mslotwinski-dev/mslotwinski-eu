import { ProjectGroup } from '../types/interfaces'

const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      'The largest, modular website projects where each element forms a distinct part of a greater whole.',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDirac is a non-profit project focused on making education more accessible by providing free, comprehensive, and easily accessible textbooks.',
        longdescription: `eDirac is an innovative non-profit educational project aimed at providing free access to comprehensive scientific knowledge. The project focuses on:
<ul>
  <li>creating free textbooks in physics, engineering, mathematics, and other fields,</li>
  <li>disseminating knowledge regardless of users' background or wealth,</li>
  <li>development plans including translating textbooks into many world languages so everyone has equal opportunities in education.</li>
</ul>
The eDirac platform combines an accessible interface, easy access to materials, and a mission of global education, focusing on transparency and full availability of resources for everyone.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Simple file sharing system written in Vue, Node, Nest and MongoDB.',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLib is a personal website that offers access to a collection of e-books and PDF files. It serves as a platform for sharing educational and other resources, possibly for academic or personal use.',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMe is a platform with many psychological, political and philosophical tests. Answer honestly!',
        longdescription: `AnalyseMe is a lightweight, modern web platform designed to diagnose and analyze your views and beliefs. The site provides a set of extensive quizzes (such as Political Compass or 9Axes), intuitive category filtering tools, and a clear tagging system. The project focuses on:
<ul>
<li>thematic diversity (from politics and economics to philosophy),</li>
<li>a clear, minimalist user interface,</li>
<li>an open nature and integration with the community (GitHub).</li>
</ul>
AnalyseMe is intended to be your personal center for self-discovery — from multi-axis political analyses to personal freedom tests — without unnecessary complications and barriers to accessing results.`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Simple app for keeping notes written in Nuxt.js and Nest.js.',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description: 'Simple App for keeping and shorting your links',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAI is an intelligent platform for generating personalized programming projects.',
        longdescription: `ThinklineAI is an intelligent platform for generating personalized programming projects. The system analyzes the user's interests, preferred languages, and difficulty level to propose unique and practical ideas for learning, experimenting, and prototyping. The project focuses on:<ul><li>a modular and scalable AI architecture,</li><li>an intuitive user interface,</li><li>easy integration with various technologies and programming languages.</li></ul>ThinklineAI is designed to support the development of programming skills, the exploration of new solutions, and rapid project prototyping — without unnecessary complications and excessive abstraction.`,
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
      'Extensive and complex projects that require a lot of planning, effort, and the use of advanced tools.',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'Console game developed in C++ where players control a capybara navigating through a jungle. The game involves various challenges and interactions set in a jungle environment, providing an engaging and fun experience.',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flow is an advanced Bash shell daemon that automates the real-time synchronization of local directories with Google Drive. It eliminates the need for manual backups by silently watching your filesystem for changes and pushing them to the cloud the moment they happen, keeping your data safe without interrupting your workflow.`,
        longdescription: `Flow is an advanced Bash shell daemon that automates the real-time synchronization of local directories with Google Drive. It eliminates the need for manual backups by silently watching your filesystem for changes and pushing them to the cloud the moment they happen, keeping your data safe without interrupting your workflow.`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: 'I calculate the reports, you drink the beer.',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'Pixel is a fast and lightweight image editor written in Rust, available with both a GUI and CLI. It provides powerful yet simple tools for image processing – from basic operations (resize, crop, rotate) to built-in Instagram-style filters.',
        longdescription:
          'Pixel is a fast and lightweight image editor written in Rust, available with both a GUI and CLI. It provides powerful yet simple tools for image processing – from basic operations (resize, crop, rotate) to built-in Instagram-style filters.',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHATo is a comprehensive computer networks project designed to provide secure, real-time messaging between users. Built entirely in Go, it features a robust client-server architecture utilizing a RESTful API for standard operations and WebSockets (TCP/IP) for low-latency, bi-directional communication.`,
        longdescription: `poCHATo is a comprehensive computer networks project designed to provide secure, real-time messaging between users. Built entirely in Go, it features a robust client-server architecture utilizing a RESTful API for standard operations and WebSockets (TCP/IP) for low-latency, bi-directional communication.
<ul>
  <li>End-to-End Encryption (E2EE)</li>
  <li>Friend System.</li>
  <li>Real-Time WebSockets</li>
</ul>
Security and privacy are at the core of poCHATo. Direct communication is restricted to mutually accepted friends, and every single message is secured using End-to-End Encryption (E2EE).`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          'An application that generates a graph displaying the programming languages that you use. It helps visualize which languages you like the most.',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'Simple electron app designed for downloading YouTube videos.',
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
      'Quick, inventive projects focused on solving problems and free experimentation.',
    projects: [
      {
        title: 'Assistant',
        description:
          'Modern web app designed for interactive browsing of study programs and departmental structures. Here with placeholder - Royal Institute of Technology in Polish-Lithuanian Commonwealth.',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'],
      },
      {
        title: 'Boson',
        description: `Boson is a flexible cellular automaton simulator with configurable rules, enabling the modeling of complex phenomena such as fires, crystallization, or pattern evolution.`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWybory is an application designed to record voting data and keep track of how users voted in elections. It provides a secure and organized way to document election results for personal use.`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `Go implementation of Conway's Game of Life, a cellular automaton that simulates the evolution of cells based on simple rules.`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `Veeeeeery light CSS library for styling default elements. No classes, no js - just better look.`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `The "PastoLatarnia" project is a platform for sharing and reading "pasta" stories, typically humorous or light-hearted internet tales. The site allows users to enjoy a variety of stories that are meant to entertain and amuse.`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `Interactive map of Poland with custom election results and many ways to explore statistics about them.`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `Simply resizes your icons.`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQuery is a modern version of jQuery, written in TypeScript. It provides a lightweight alternative to jQuery, focusing on simplicity and modern web development practices.`,
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
      'Quick game-themed projects where fun and creativity are what matters most.',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolver is a C# application designed to solve Sudoku puzzles. The project provides the implementation of an algorithm to automatically solve Sudoku grids.',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiply is an educational application designed to help users learn multiplication tables.',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `Simple parody of cheap casino pages. Including black jack game.`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Classic implementation of the Snake game in Rust.',
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
      'Practical projects created to better understand the key features of the Go language and learn best practices.',
    projects: [
      {
        title: 'CodeHub',
        description:
          'Your personal project manager, designed to organize, track, and display your coding projects with ease.',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description: 'Simple front-end framework written in Go. No more JS!',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dash is a personal reverse proxy server with support for HTTP/HTTPS, SSL, load balancing, and static resource caching.',
        longdescription: `Dash is a custom reverse proxy server with support for HTTP/HTTPS, SSL, load balancing, and static resource caching. The project focuses on:
<ul>
  <li>automatic SSL certificate issuance,</li>
  <li>various balancing algorithms (round-robin, least connections),</li>
  <li>data compression and caching,</li>
  <li>traffic monitoring and logging.</li>
</ul>
Additionally, the project allows for the expansion of a real-time administrative panel and routing rules based on HTTP headers, creating a solid foundation for scalable network solutions.`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:
          'Neon is a distributed computing platform designed for simulating and processing scientific data in HPC environments.',
        longdescription:
          'Neon is a distributed computing platform designed for simulating and processing scientific data in HPC environments. The system allows defining computational tasks, automatically distributing the load in a cluster, monitoring resources, and aggregating results in real-time. The project focuses on:<ul><li>scalability and fault tolerance,</li><li>effective communication and parallelism in Go,</li><li>a modular architecture with a master/worker and a queue system.</li></ul>Neon is meant to be the foundation for comprehensive computational systems — from physical simulations to analyzing large data sets — with full control over the flow of computations and cluster resources.',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'Your personal project manager, designed to organize, track, and display your coding projects with ease.',
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
      'Projects created in the context of science and engineering, reflecting theoretical knowledge and its practical application.',
    projects: [
      {
        title: 'Arctic',
        description:
          'A minimal, modular 32-bit operating system written in C and NASM, targeting the x86 architecture.',
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'],
      },
      {
        title: 'NumC',
        description:
          'Numc is a lightweight, modular computational engine designed for engineering, statistical, and scientific applications.',
        longdescription:
          'NumC is a lightweight, modular computational engine designed for engineering, statistical, and scientific applications. The library provides optimized implementations of numerical methods, data analysis tools, and basic result visualization mechanisms. The project focuses on:<ul><li>high performance and memory control,</li><li>numerical stability and predictability of computations,</li><li>a clean, minimalist API in C++.</li></ul>NumC is meant to be the foundation for larger computational systems — from physical simulations to the analysis of experimental data — without hidden magic and unnecessary layers of abstraction.',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description:
          'Echo is a modular framework for processing and analyzing digital signals. It allows loading data from various sources, filtering, time-frequency transformations, and visualizing waveforms in real-time or offline.',
        longdescription: `Echo is a modular framework for processing and analyzing digital signals. It allows loading data from various sources, filtering, time-frequency transformations, and visualizing waveforms in real-time or offline. The project focuses on:
<ul>
  <li>performance and module flexibility,</li>
  <li>a clear, minimalist interface,</li>
  <li>usefulness in education and scientific research.</li>
</ul>
Echo is designed as a base for DSP experiments and creating advanced signal processing chains — from audio analysis to telecommunications projects.`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resist is a lightweight DSL language written in Rust, used for simulating electrical circuits. It allows declarative circuit definition, modeling elements (resistors, capacitors, coils, sources, diodes, transistors), and running DC and AC simulations.`,
        longdescription: `Resist is a lightweight DSL language written in Rust, used for simulating electrical circuits. It allows declarative circuit definition, modeling elements (resistors, capacitors, coils, sources, diodes, transistors), and running DC and AC simulations. The project focuses on:
<ul>
  <li>integration with an efficient numerical solver in Rust,</li>
  <li>the simplicity of declarative circuit description,</li>
  <li>educational usefulness in learning simulation and numerical algebra.</li>
</ul>
Resist is the foundation for experiments in circuit simulation and the development of custom analytical tools in Rust.`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          'Goal: Find the most stable geometry of an Au6 cluster adsorbed on a hexagonal boron nitride (h-BN) surface using a Genetic Algorithm (GA) in the ASE environment.',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'Molecular dynamics simulation for bismuth oxide Bi₂O₃ : TiO₂ using the MACE machine learning potential and the ASE environment.',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'Molecular dynamics of noble gas crystals made from scratch.',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'Physical simulation of a nuclear bomb implemented in Java, providing a model to simulate and analyze its behavior. The model demonstrates that low uranium density leads to a steady increase in energy, while higher density results in rapid energy growth and an explosive regime.',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'Simple simulation of quantum waves by solving the Schrödinger equation in custom potentials. The project allows users to visualize and explore the behavior of quantum waves under different potential configurations, providing insights into fundamental principles of quantum mechanics.',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          'Simple solar system simulation, showing gravitational interactions between celestial bodies, allowing users to visualize the dynamics of a solar system. ',
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
