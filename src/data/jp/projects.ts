import { ProjectGroup } from '../types/interfaces'

const projectdata: ProjectGroup[] = [
  {
    title: 'Modular Projects',
    icon: 'puzzle-piece',
    description:
      '各要素がより大きな全体の一部を形成する、最大規模のモジュール式Webプロジェクト。',
    projects: [
      {
        title: 'eDirac',
        description:
          'eDiracは、無料で包括的かつ簡単にアクセスできる教科書を提供することで、教育をより身近なものにすることに焦点を当てた非営利プロジェクトです。',
        longdescription: `eDiracは、包括的な科学知識への無料アクセスを提供することを目的とした、革新的な非営利の教育プロジェクトです。このプロジェクトは以下に焦点を当てています。
<ul>
  <li>物理学、工学、数学、その他の分野の無料の教科書の作成</li>
  <li>ユーザーの背景や富に関係なく知識を広める</li>
  <li>誰もが教育において平等な機会を持てるように、教科書を世界の多くの言語に翻訳することを含む開発計画</li>
</ul>
eDiracプラットフォームは、アクセシブルなインターフェース、資料への簡単なアクセス、グローバル教育の使命を組み合わせ、透明性とすべての人のためのリソースの完全な可用性に焦点を当てています。`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eDirac/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
        main: true,
        simulation: false,
      },
      {
        title: 'Cloudy',
        description:
          'Vue、Node、Nest、MongoDBで書かれたシンプルなファイル共有システム。',
        github: 'https://github.com/Cloudy-APP',
        icon: 'https://avatars.githubusercontent.com/u/95831075?s=400&u=b908e3c984b3068a4fa0dd3d0bfde5f9fe054aab&v=4',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'mLib',
        description:
          'mLibは、電子書籍やPDFファイルのコレクションへのアクセスを提供する個人のWebサイトです。教育用リソースなどを共有するためのプラットフォームとして機能します。',
        github: 'https://github.com/mslotwinski-dev/mLib',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/mLib/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'AnalyseMe',
        description:
          'AnalyseMeは、多くの心理的、政治的、哲学的テストを備えたプラットフォームです。正直に答えてください！',
        longdescription: `AnalyseMeは、あなた自身の見解や信念を診断および分析するために設計された、軽量でモダンなWebプラットフォームです。このサイトは、一連の大規模なクイズ（Political Compassや9Axesなど）、直感的なカテゴリフィルタリングツール、明確なタグ付けシステムを提供します。このプロジェクトは以下に焦点を当てています。
<ul>
<li>テーマの多様性（政治や経済から哲学まで）</li>
<li>明確でミニマリストなユーザーインターフェース</li>
<li>オープンな性質とコミュニティ（GitHub）との統合</li>
</ul>
AnalyseMeは、多軸の政治分析から個人の自由のテストまで、結果にアクセスするための不必要な合併症や障壁のない、自己発見のための個人的なセンターになることを目的としています。`,
        github: 'https://github.com/Analyse-Me',
        icon: 'https://github.com/Analyse-Me/AnalyseMe/blob/main/public/readme_icon.png?raw=true',
        langs: ['Vue', 'C#'],
        main: true,
      },
      {
        title: 'Note Keeper',
        description:
          'Nuxt.jsとNest.jsで書かれた、メモを取るためのシンプルなアプリ。',
        github: 'https://github.com/mslotwinski-dev/NoteKeeper',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NoteKeeper/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript', 'Go'],
      },
      {
        title: 'Lightning',
        description: 'リンクを保存して短縮するためのシンプルなアプリ。',
        github: 'https://github.com/mslotwinski-dev/Lightning',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Lightning/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'Go'],
      },
      {
        title: 'ThinklineAI',
        description:
          'ThinklineAIは、パーソナライズされたプログラミングプロジェクトを生成するためのインテリジェントなプラットフォームです。',
        longdescription: `ThinklineAIは、パーソナライズされたプログラミングプロジェクトを生成するためのインテリジェントなプラットフォームです。このシステムは、ユーザーの興味、好みの言語、難易度を分析して、学習、実験、プロトタイピングのためのユニークで実用的なアイデアを提案します。このプロジェクトは以下に焦点を当てています。<ul><li>モジュール式でスケーラブルなAIアーキテクチャ</li><li>直感的なユーザーインターフェース</li><li>さまざまなテクノロジーやプログラミング言語との簡単な統合</li></ul>ThinklineAIは、プログラミングスキルの開発、新しいソリューションの探索、迅速なプロジェクトのプロトタイピングをサポートするように設計されています。`,
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
      '多くの計画、労力、そして高度なツールの使用を必要とする、大規模で複雑なプロジェクト。',
    projects: [
      {
        title: 'Ancient Paws',
        description:
          'プレイヤーがジャングルを移動するカピバラを操作するC++で開発されたコンソールゲーム。ゲームには、ジャングル環境を舞台にしたさまざまな課題と相互作用が含まれます。',
        github: 'https://github.com/mslotwinski-dev/AncientPaws',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/AncientPaws/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
      },
      {
        title: 'Flow',
        description: `Flowは、ローカルディレクトリとGoogleドライブのリアルタイム同期を自動化する高度なBashシェルデーモンです。手動バックアップの必要性を排除します。`,
        longdescription: `Flowは、ローカルディレクトリとGoogleドライブのリアルタイム同期を自動化する高度なBashシェルデーモンです。ファイルシステムの変更を静かに監視し、変更が発生した瞬間にクラウドにプッシュすることで手動バックアップの必要性を排除し、ワークフローを中断することなくデータを安全に保ちます。`,
        github: 'https://github.com/mslotwinski-dev/Flow',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Flow/refs/heads/main/public/readme_icon.png',
        langs: ['Shell'],
        main: true,
        tags: ['File Synchronization', 'Cloud Storage', 'Automation'],
      },
      {
        title: 'PiWo',
        description: '私がレポートを計算するから、あなたはビールを飲んで。',
        github: 'https://github.com/mslotwinski-dev/PiWo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PiWo/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Pixel',
        description:
          'PixelはRustで書かれた高速で軽量な画像エディタで、GUIとCLIの両方で利用できます。画像処理のための強力かつシンプルなツールを提供します。',
        longdescription:
          'PixelはRustで書かれた高速で軽量な画像エディタで、GUIとCLIの両方で利用できます。基本的な操作（サイズ変更、切り抜き、回転）から組み込みのInstagram風フィルターまで、画像処理のための強力かつシンプルなツールを提供します。',
        github: 'https://github.com/mslotwinski-dev/Pixel',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Pixel/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: true,
      },
      {
        title: 'PoCHATo',
        description: `poCHAToは、ユーザー間の安全でリアルタイムのメッセージングを提供するために設計された包括的なコンピュータネットワークプロジェクトです。`,
        longdescription: `poCHAToは、ユーザー間の安全でリアルタイムのメッセージングを提供するために設計された包括的なコンピュータネットワークプロジェクトです。完全にGoで構築されており、標準操作のためのRESTful APIと、低遅延の双方向通信のためのWebSockets（TCP/IP）を利用した堅牢なクライアント・サーバーアーキテクチャを備えています。
<ul>
  <li>エンドツーエンド暗号化（E2EE）</li>
  <li>フレンドシステム</li>
  <li>リアルタイムWebSockets</li>
</ul>
セキュリティとプライバシーはpoCHAToの中核です。直接のコミュニケーションは互いに承認された友人に制限され、すべてのメッセージはエンドツーエンド暗号化を使用して保護されます。`,
        github: 'https://github.com/mslotwinski-dev/PoCHATo',
        icon: 'https://minecraft.wiki/images/Potato_JE3_BE2.png',
        langs: ['Go'],
        main: true,
        tags: ['Computer Networks', 'Security'],
      },
      {
        title: 'Shin',
        description:
          '使用しているプログラミング言語を示すグラフを生成するアプリケーション。どの言語が一番好きかを視覚化するのに役立ちます。',
        github: 'https://github.com/mslotwinski-dev/Shin',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Shin/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'YT Downloader',
        description:
          'YouTubeビデオをダウンロードするために設計されたシンプルなElectronアプリ。',
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
      '問題解決と自由な実験に焦点を当てた、スピーディーで独創的なプロジェクト。',
    projects: [
      {
        title: 'Assistant',
        description: '学習プログラムと学部構造のインタラクティブな閲覧のために設計された最新のWebアプリ。',
        github: 'https://github.com/mslotwinski-dev/Assistant',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Assistant/refs/heads/master/public/static/icon.png',
        langs: ['Vue', 'Python'], 
      },
      {
        title: 'Boson',
        description: `Bosonは、構成可能なルールを備えた柔軟なセルオートマトンシミュレーターであり、火災、結晶化などの複雑な現象のモデリングを可能にします。`,
        github: 'https://github.com/mslotwinski-dev/Boson',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Boson/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'eWybory',
        description: `eWyboryは、投票データを記録し、ユーザーが選挙でどのように投票したかを追跡するために設計されたアプリケーションです。`,
        github: 'https://github.com/mslotwinski-dev/eWybory',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/eWybory/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Game of Life',
        description: `単純なルールに基づいてセルの進化をシミュレートするセルオートマトンである、ConwayのライフゲームのGo実装。`,
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/GameOfLife/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'MangoUI',
        description: `デフォルト要素のスタイリングのための非常に軽量なCSSライブラリ。クラスなし、JSなし - 見た目を良くするだけです。`,
        github: 'https://github.com/mslotwinski-dev/MangoUI',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/MangoUI/refs/heads/main/public/readme_icon.png',
        langs: ['SCSS'],
      },
      {
        title: 'PastoLatarnia',
        description: `PastoLatarniaプロジェクトは、「パスタ」ストーリー（通常はユーモラスなインターネット上の物語）を共有して読むためのプラットフォームです。`,
        github: 'https://github.com/mslotwinski-dev/PastoLatarnia',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/PastoLatarnia/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Polistats',
        description: `カスタムの選挙結果とそれらに関する統計を調査する多くの方法を備えた、ポーランドのインタラクティブマップ。`,
        github: 'https://github.com/mslotwinski-dev/Polistats',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Polistats/refs/heads/main/public/readme_icon.png',
        langs: ['TypeScript', 'Vue'],
      },
      {
        title: 'Resizer',
        description: `アイコンのサイズを簡単に変更します。`,
        github: 'https://github.com/mslotwinski-dev/Resizer',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resizer/refs/heads/main/public/readme_icon.png',
        langs: ['C'],
      },
      {
        title: 'vQuery',
        description: `vQueryは、TypeScriptで書かれたモダンなバージョンのjQueryです。シンプルさに重点を置き、jQueryの軽量な代替手段を提供します。`,
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
      '楽しさと創造性が最も重要視される、ゲームをテーマにしたスピーディーなプロジェクト。',
    projects: [
      {
        title: 'Actually',
        description:
          'SudokuSolverは、数独パズルを解くように設計されたC#アプリケーションです。このプロジェクトは、数独グリッドを自動的に解くアルゴリズムの実装を提供します。',
        github: 'https://github.com/mslotwinski-dev/Actually-SudokuSolver',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Actually-SudokuSolver/refs/heads/main/public/readme_icon.png',
        langs: ['C#'],
      },
      {
        title: 'Multiply',
        description:
          'Multiplyは、ユーザーが掛け算の九九を学ぶのを助けるように設計された教育用アプリケーションです。',
        github: 'https://github.com/mslotwinski-dev/Multiply',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Multiply/refs/heads/main/public/readme_icon.png',
        langs: ['Vue'],
      },
      {
        title: 'Zeus Casino',
        description: `安っぽいカジノページのシンプルなパロディ。ブラックジャックゲームを含みます。`,
        github: 'https://github.com/mslotwinski-dev/BlackJack',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/BlackJack/refs/heads/main/public/readme_icon.png',
        langs: ['Vue', 'TypeScript'],
      },
      {
        title: 'Snake',
        description: 'Rustでのスネークゲームの古典的な実装。', 
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
      'Go言語の主要な機能をよりよく理解し、ベストプラクティスを学ぶために作成された実践的なプロジェクト。',
    projects: [
      {
        title: 'CodeHub',
        description:
          'コーディングプロジェクトを簡単に整理、追跡、表示するように設計されたパーソナルプロジェクトマネージャー。',
        github: 'https://github.com/mslotwinski-dev/eDirac',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/CodeHub/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Milk',
        description:
          'Goで書かれたシンプルなフロントエンドフレームワーク。もうJSは必要ありません！',
        github: 'https://github.com/mslotwinski-dev/Milk',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Milk/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
      },
      {
        title: 'Dash',
        description:
          'Dashは、HTTP/HTTPS、SSL、ロードバランシング、および静的リソースキャッシュをサポートするパーソナルリバースプロキシサーバーです。',
        longdescription: `Dashは、HTTP/HTTPS、SSL、ロードバランシング、および静的リソースキャッシュをサポートするカスタムリバースプロキシサーバーです。このプロジェクトは以下に焦点を当てています。
<ul>
  <li>SSL証明書の自動発行</li>
  <li>さまざまなバランシングアルゴリズム</li>
  <li>データ圧縮とキャッシュ</li>
  <li>トラフィックの監視とログ記録</li>
</ul>
さらに、このプロジェクトでは、リアルタイムの管理パネルの拡張やHTTPヘッダーに基づくルーティングルールが可能です。`,
        github: 'https://github.com/mslotwinski-dev/Dash',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Dash/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: true,
      },
      {
        title: 'Neon',
        description:'Neonは、HPC環境で科学データをシミュレートおよび処理するために設計された分散コンピューティングプラットフォームです。',
        longdescription:
          'Neonは、HPC環境で科学データをシミュレートおよび処理するために設計された分散コンピューティングプラットフォームです。システムは、計算タスクの定義、クラスター内の負荷の自動分散、リソースの監視、結果のリアルタイム集計を可能にします。このプロジェクトは以下に焦点を当てています。<ul><li>スケーラビリティとフォールトトレランス</li><li>Goでの効果的な通信と並列処理</li><li>マスター/ワーカーとキューシステムを備えたモジュール式アーキテクチャ</li></ul>Neonは、包括的な計算システムの基盤となることを目的としています。',
        github: 'https://github.com/mslotwinski-dev/Neon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Neon/refs/heads/main/public/readme_icon.png',
        langs: ['Go'],
        main: false,
      },
      {
        title: 'Shield',
        description:
          'コーディングプロジェクトを簡単に整理、追跡、表示するように設計されたパーソナルプロジェクトマネージャー。',
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
      '理論的知識とその実践的応用を反映した、科学と工学の文脈で作成されたプロジェクト。',
    projects: [
      {
        title: 'Arctic',
        description: 'x86アーキテクチャを対象とした、CおよびNASMで記述された最小限のモジュール式32ビットオペレーティングシステム。', 
        github: 'https://github.com/mslotwinski-dev/Arctic',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Arctic/refs/heads/main/public/icon.png',
        langs: ['C'], 
      },
      {
        title: 'NumC',
        description:
          'Numcは、工学、統計、および科学アプリケーション向けに設計された軽量でモジュール式の計算エンジンです。',
        longdescription:
          'NumCは、工学、統計、および科学アプリケーション向けに設計された軽量でモジュール式の計算エンジンです。ライブラリは、数値メソッドの最適化された実装、データ分析ツール、および基本的な結果の視覚化メカニズムを提供します。このプロジェクトは以下に焦点を当てています。<ul><li>高性能とメモリ制御</li><li>計算の数値的安定性と予測可能性</li><li>C++でのクリーンでミニマリストなAPI</li></ul>NumCは、大規模な計算システムの基盤となることを目的としています。',
        github: 'https://github.com/mslotwinski-dev/NumC',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NumC/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: true,
        tags: ['Data Engineering', 'Data Visualization', 'Numerical Methods'],
      },
      {
        title: 'Echo',
        description: 'Echoは、デジタル信号を処理および分析するためのモジュラーフレームワークです。さまざまなソースからのデータのロード、フィルタリングが可能です。',
        longdescription: `Echoは、デジタル信号を処理および分析するためのモジュラーフレームワークです。さまざまなソースからのデータのロード、フィルタリング、時間周波数変換、リアルタイムまたはオフラインでの波形の視覚化が可能です。このプロジェクトは以下に焦点を当てています。
<ul>
  <li>パフォーマンスとモジュールの柔軟性</li>
  <li>明確でミニマリストなインターフェース</li>
  <li>教育および科学研究における有用性</li>
</ul>
Echoは、DSP実験および高度な信号処理チェーンを作成するためのベースとして設計されています。`,
        github: 'https://github.com/mslotwinski-dev/Echo',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Echo/refs/heads/main/public/readme_icon.png',
        langs: ['C++'],
        main: false,
        tags: ['Signal Processing', 'Audio Analysis', 'Electronics'],
      },
      {
        title: 'Resist',
        description: `Resistは、電気回路のシミュレーションに使用される、Rustで書かれた軽量なDSL言語です。`,
        longdescription: `Resistは、電気回路のシミュレーションに使用される、Rustで書かれた軽量なDSL言語です。宣言的な回路定義、要素（抵抗、コンデンサ、コイル、電源、ダイオード、トランジスタ）のモデリング、DCおよびACシミュレーションの実行が可能です。このプロジェクトは以下に焦点を当てています。
<ul>
  <li>Rustでの効率的な数値ソルバーとの統合</li>
  <li>宣言的回路記述のシンプルさ</li>
  <li>シミュレーションと数値代数の学習における教育的有用性</li>
</ul>
Resistは、Rustでのカスタム分析ツールの開発の基盤となります。`,
        github: 'https://github.com/mslotwinski-dev/Resist',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Resist/refs/heads/main/public/readme_icon.png',
        langs: ['Rust'],
        main: false,
        tags: ['Circuit Simulation', 'Compiler Design', 'Electronics'],
      },
      {
        title: 'Au6 Cluster Optimization',
        description:
          '目標：ASE環境で遺伝的アルゴリズム（GA）を使用して、六方晶窒化ホウ素（h-BN）表面に吸着したAu6クラスターの最も安定した形状を見つけること。',
        github: 'https://github.com/quiklii/gold-hbn-optimization',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/gold-hbn-optimization/refs/heads/master/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['hbn-1.png'],
      },
      {
        title: 'Ionic conductivity of titanium dopped Bi₂O₃',
        description:
          'MACE機械学習ポテンシャルとASE環境を使用した、酸化ビスマス Bi₂O₃ : TiO₂ の分子動力学シミュレーション。',
        github: 'https://github.com/mslotwinski-dev/Bi2O3-conductivity',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Bi2O3-conductivity/refs/heads/main/img/material.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['bi2o3-1.png'],
      },
      {
        title: 'Argon molecular dynamics',
        description:
          'ゼロから作られた希ガスの結晶の分子動力学。',
        github: 'https://github.com/mslotwinski-dev/Argon',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/Argon/refs/heads/main/public/readme_icon.png',
        langs: ['c++'],
        simulation: true,
        screenshots: ['argon-1.png'],
      },
      {
        title: 'Nuclear Bomb',
        description:
          'Javaで実装された核爆弾の物理シミュレーション。モデルは、ウラン密度が低いとエネルギーが着実に増加し、密度が高いとエネルギーが急激に増加して爆発状態になることを示しています。',
        github: 'https://github.com/mslotwinski-dev/NuclearBomb',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/NuclearBomb/refs/heads/main/public/readme_icon.png',
        langs: ['Java'],
        simulation: true,
        screenshots: ['nuclear-bomb-1.png'],
      },
      {
        title: 'Quantum Waves',
        description:
          'カスタムポテンシャルでシュレディンガー方程式を解くことによる量子波の簡単なシミュレーション。量子波の挙動を視覚化し、量子力学の基本原理への洞察を提供します。',
        github: 'https://github.com/mslotwinski-dev/QuantumWave',
        icon: 'https://raw.githubusercontent.com/mslotwinski-dev/QuantumWave/refs/heads/main/public/readme_icon.png',
        langs: ['Python'],
        simulation: true,
        screenshots: ['quantum-waves-1.png'],
      },
      {
        title: 'Laplace',
        description:
          '天体間の重力相互作用を示すシンプルな太陽系シミュレーション。',
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