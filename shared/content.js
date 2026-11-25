/*
 * Shared portfolio content (public web version).
 * Every text field is { en, ko }. All five design variants read this file,
 * so wording is edited here once.
 *
 * Disclosure rule for this file: it is public. Unpublished research numbers
 * (UAI Lab) and company-internal figures (CJ OliveNetworks) are left out on
 * purpose; they appear only in the coffee-chat deck and the CV.
 */
window.PORTFOLIO = {
  meta: { updated: "2026-11", defaultLang: "en", langs: ["en", "ko"] },

  profile: {
    name: { en: "Daehee Koo", ko: "구대희" },
    role: {
      en: "CS undergraduate at UNIST · app co-founder · AI engineer",
      ko: "UNIST 컴퓨터공학과 · 앱 공동 창업 · AI 엔지니어"
    },
    headline: {
      en: "Solving challenging problems in healthcare with AI.",
      ko: "AI로 헬스케어의 난제를 풀고, 실질적인 가치를 만듭니다."
    },
    sub: {
      en: "Computer science undergraduate at UNIST. I shipped two mobile apps, built LLM agents at CJ OliveNetworks, researched robot AI, and trained models on hospital data.",
      ko: "UNIST 컴퓨터공학과 학부생입니다. 모바일 앱 두 개를 출시했고, CJ올리브네트웍스에서 LLM 에이전트를 개발했고, 로봇 AI를 연구했고, 병원 데이터로 모델을 만들었습니다."
    },
    about: {
      en: [
        "I like work where the result is visible: an app students open every day, an LLM agent built for a real content business, a model that still holds up on a person it has never seen.",
        "Over the past two years I co-founded two mobile apps, spent six months as an AI engineer intern at CJ OliveNetworks, and did research on robot foundation models and clinical data. Running an app taught me that the code is the smaller half. What decides the outcome is finding what people need and getting it in front of them.",
        "I'm looking for a team where I can take a problem from definition to launch, and learn the parts beyond engineering along the way."
      ],
      ko: [
        "결과가 눈에 보이는 일을 좋아합니다. 학생들이 매일 여는 앱, 실제 콘텐츠 사업에 쓰려고 만든 LLM 에이전트, 처음 보는 사람에게도 통하는 모델 같은 것들입니다.",
        "지난 2년 동안 모바일 앱 두 개를 공동 창업했고, CJ올리브네트웍스에서 6개월간 AI 엔지니어 인턴으로 일했으며, 로봇 파운데이션 모델과 임상 데이터를 연구했습니다. 앱을 직접 운영해 보니 코드는 절반이 안 됐습니다. 사람들이 필요로 하는 것을 찾고 그것을 알리는 일이 결과를 갈랐습니다.",
        "문제 정의부터 출시까지 직접 끌고 갈 수 있고, 개발 바깥의 일까지 배울 수 있는 팀을 찾고 있습니다."
      ]
    },
    now: {
      en: "Feel free to\nTalk with me!",
      ko: "편하게\n연락 주세요!"
    },
    location: { en: "Ulsan / Seoul, Korea", ko: "울산 / 서울" },
    timezone: "Asia/Seoul",
    email: "daeheekoo33@gmail.com",
    // Contact form on the home page. Put a Web3Forms access key here (web3forms.com, free:
    // enter the inbox email there and the key arrives by mail) to send messages directly.
    // Empty = the Send button opens the visitor's mail app with the fields filled in.
    // perBrowserPerDay: how many messages one browser may send in 24 hours (spam brake).
    // The free Web3Forms plan itself stops at 250 messages a month and never bills (no card on file).
    contactForm: { endpoint: "https://api.web3forms.com/submit", accessKey: "cd5d29ea-de4d-42cf-87bb-eeb8899d9504", perBrowserPerDay: 3 },
    github: { label: "DH-Koo", href: "https://github.com/DH-Koo" },
    photo: "shared/img/profile.webp",
    photoSquare: "shared/img/profile-sq.webp",
    cv: { label: { en: "CV (PDF)", ko: "CV (PDF)" }, href: "cv/DaeheeKoo_CV.pdf" }
  },

  /* Stats block removed at the owner's request. Kept as an empty array so older pages do not break. */
  stats: [],

  /* The three axes the whole portfolio is organized around. A project can sit on more than one. */
  axes: [
    { id: "product", color: "#3b9cf5", label: { en: "Product", ko: "프로덕트" }, blurb: { en: "Apps I planned, built, shipped and ran.", ko: "직접 기획하고 만들어 출시하고 운영한 앱" } },
    { id: "ai", color: "#f2762e", label: { en: "AI", ko: "AI" }, blurb: { en: "LLM agents in industry and robot foundation models in the lab.", ko: "기업에서 만든 LLM 에이전트와 연구실에서 다룬 로봇 파운데이션 모델" } },
    { id: "healthcare", color: "#23a26d", label: { en: "Healthcare", ko: "헬스케어" }, blurb: { en: "Models built on hospital, clinical and biosignal data.", ko: "병원 데이터, 임상 기록, 생체 신호로 만든 모델" } }
  ],
  /* For the three-circle diagram: which items sit in which region. `items` are project ids, or `award` for the hackathon app. */
  axisRegions: [
    { axes: ["product"], items: ["uniway", "smeal"] },
    { axes: ["ai"], items: ["uai"] },
    { axes: ["ai", "product"], items: ["cj"] },
    { axes: ["ai", "healthcare"], items: ["shoulder", "los", "emg"] },
    { axes: ["product", "healthcare"], items: ["award"] },
    { axes: ["product", "ai", "healthcare"], items: [], note: { en: "Where I want to work next", ko: "다음에 일하고 싶은 곳" } }
  ],

  filters: [
    { id: "all", label: { en: "All", ko: "전체" } },
    { id: "product", label: { en: "Product", ko: "프로덕트" } },
    { id: "ai", label: { en: "AI", ko: "AI" } },
    { id: "healthcare", label: { en: "Healthcare", ko: "헬스케어" } }
  ],

  kinds: {
    product: { en: "Product", ko: "프로덕트" },
    industry: { en: "Internship", ko: "인턴십" },
    research: { en: "Research", ko: "연구" },
    coursework: { en: "Course project", ko: "수업 프로젝트" }
  },

  projects: [
    /* ------------------------------------------------------------ Uniway */
    {
      id: "uniway",
      shortTitle: { en: "Uniway", ko: "Uniway" },
      order: 1,
      kind: "product",
      groups: ["product"],
      axes: ["product"],
      year: "2025",
      start: "2025-07",
      accent: "#3b9cf5",
      title: { en: "Uniway", ko: "Uniway" },
      org: { en: "Campus life app", ko: "캠퍼스 생활 앱" },
      role: { en: "Co-founder · App developer", ko: "공동 창업 · 앱 개발" },
      team: { en: "Team of 3", ko: "3인 팀" },
      period: { en: "Jul – Nov 2025", ko: "2025.07 – 2025.11" },
      topics: [{ en: "Mobile app", ko: "모바일 앱" }, { en: "Community", ko: "커뮤니티" }, { en: "Flutter", ko: "Flutter" }],
      oneLiner: {
        en: "A campus life app for university students in Ulsan: taxi carpools, meetups and a second-hand market in one place.",
        ko: "울산 지역 대학생을 위한 캠퍼스 생활 앱. 택시 카풀, 모임, 중고거래를 한곳에 모았습니다."
      },
      headline: {
        en: "A campus app built by three people reached about 1,000 registered users.",
        ko: "3인 팀이 만든 캠퍼스 앱에 약 1,000명이 가입했습니다."
      },
      summary: {
        en: "Someone to share a taxi with, a group to eat or study with, a buyer for a used desk. Students kept asking for these in group chats, so we put them in one app. We built it in Flutter over one summer, released it, and ran it through the fall semester.",
        ko: "같은 방향으로 가는 택시 동승자, 같이 밥 먹거나 공부할 사람, 쓰던 책상을 살 사람. 학생들이 단체 채팅방에서 매번 찾던 것들을 앱 하나에 모았습니다. 여름 방학 동안 Flutter로 만들어 출시했고 가을 학기 내내 운영했습니다."
      },
      problem: {
        en: "Students had no single place to find a ride partner, a casual meetup or a second-hand deal. In a poll on a campus community, 174 of 254 respondents (68.5%) said they wanted an app for this, and the most-liked comments asked for taxi sharing, second-hand trading and lab reviews.",
        ko: "이동 경로가 맞는 사람, 가볍게 만날 모임, 중고 거래 상대를 찾을 한곳이 없었습니다. 교내 커뮤니티 투표에서 254명 중 174명(68.5%)이 이런 앱에 관심이 있다고 답했고, 추천을 많이 받은 댓글은 택시 동승, 중고거래, 연구실 후기를 요청했습니다."
      },
      approach: {
        en: [
          "Turned the most-requested needs into features: taxi carpool by date and route, UniConnect meetups, a second-hand market, an anonymous board, lab information, the academic calendar and cafeteria menus with a home-screen widget.",
          "Built the Flutter client with one teammate: 491 commits in four months, 405 of them in August. My part included sign-up and profiles, the chat UI, carpool posts, the calendar, and the iOS widget.",
          "Added reporting, blocking, a profanity filter and terms consent so that user posts met App Store review guidelines.",
          "Promoted it on campus through open chat rooms, posters, a joint event with the student press and a prize draw."
        ],
        ko: [
          "요청이 많았던 것부터 기능으로 만들었습니다. 날짜와 경로로 찾는 택시 카풀, 모임을 여는 유니커넥트, 중고거래, 익명 게시판, 연구실 정보, 학사 일정, 홈 화면 위젯으로 보는 식단표입니다.",
          "팀원 한 명과 Flutter 클라이언트를 만들었습니다. 넉 달 동안 491번 커밋했고 그중 405번이 8월에 몰려 있습니다. 저는 회원가입과 프로필, 채팅 화면, 카풀 글, 학사 일정, iOS 위젯 등을 맡았습니다.",
          "사용자가 올리는 글이 App Store 심사 기준을 통과하도록 신고, 차단, 비속어 필터, 약관 동의를 넣었습니다.",
          "오픈채팅방, 포스터, 교내 자치언론과의 공동 이벤트, 경품 추첨으로 학교 안에서 알렸습니다."
        ]
      },
      outcome: {
        en: [
          "About 1,000 registered users at UNIST.",
          "Released on Google Play. Students at four Ulsan universities can pick their school at sign-up."
        ],
        ko: [
          "UNIST에서 약 1,000명이 가입했습니다.",
          "Google Play에 출시했습니다. 가입할 때 울산 지역 4개 대학 중 자기 학교를 고를 수 있습니다."
        ]
      },
      learned: {
        en: "We added features before checking which ones people would come back for, and development ran long. Next time I would ship the single most-requested feature, watch the response, and grow from there. Running the app also showed me that planning and getting the word out decide more than the code does.",
        ko: "어떤 기능을 사람들이 다시 찾는지 확인하기 전에 기능부터 늘렸고, 그만큼 개발이 길어졌습니다. 다시 한다면 요청이 가장 많았던 기능 하나를 먼저 내놓고 반응을 본 뒤 넓혀 가겠습니다. 서비스의 결과는 코드보다 기획과 알리는 일에서 더 크게 갈린다는 것도 운영하면서 배웠습니다."
      },
      retro: null,
      metrics: [
        { value: "~1,000", label: { en: "registered users", ko: "가입자" } },
        { value: "68.5%", label: { en: "of 254 polled students wanted it", ko: "투표한 254명 중 관심 있다고 답한 비율" } },
        { value: "491", label: { en: "commits in 4 months", ko: "4개월간 커밋" } },
        { value: "3", label: { en: "people on the team", ko: "팀 인원" } }
      ],
      stack: ["Flutter", "Dart", "Provider", "REST API", "WebSocket chat", "Firebase Cloud Messaging", "iOS / Android widgets"],
      steps: null,
      chart: null,
      table: null,
      cover: { type: "phones", bg: "#74b9ff", wide: "shared/img/uniway-hero.webp", phones: ["shared/img/uniway-phone-connect.webp", "shared/img/uniway-phone-carpool.webp"] },
      images: [
        { src: "shared/img/uniway-hero.webp", kind: "wide", alt: { en: "Uniway home screen and popular posts on two phones", ko: "Uniway 홈 화면과 인기 게시글" }, caption: { en: "Home and popular posts", ko: "홈 화면과 인기 게시글" } },
        { src: "shared/img/uniway-phone-carpool.webp", kind: "phone", alt: { en: "Taxi carpool screen", ko: "택시 카풀 화면" }, caption: { en: "Taxi carpool: pick a date, match a route", ko: "택시 카풀: 날짜를 고르고 경로가 맞는 글 찾기" } },
        { src: "shared/img/uniway-phone-connect.webp", kind: "phone", alt: { en: "UniConnect meetup list", ko: "유니커넥트 모임 목록" }, caption: { en: "UniConnect: meetups by activity", ko: "유니커넥트: 활동별 모임" } },
        { src: "shared/img/uniway-phone-market.webp", kind: "phone", alt: { en: "Second-hand market screen", ko: "중고거래 화면" }, caption: { en: "Second-hand market", ko: "중고거래" } },
        { src: "shared/img/uniway-phone-board.webp", kind: "phone", alt: { en: "Anonymous board screen", ko: "익명 게시판 화면" }, caption: { en: "Anonymous board, posts approved by moderators", ko: "익명 게시판, 운영진 승인 후 게시" } },
        { src: "shared/img/uniway-phone-chat.webp", kind: "phone", alt: { en: "In-app chat list", ko: "앱 내 채팅 목록" }, caption: { en: "In-app chat for every post", ko: "글마다 열리는 채팅" } }
      ],
      icons: ["shared/img/ico-taxi.webp", "shared/img/ico-connect.webp", "shared/img/ico-bag.webp", "shared/img/ico-lab.webp", "shared/img/ico-calendar.webp", "shared/img/ico-board.webp", "shared/img/ico-menu.webp"],
      logo: "shared/img/uniway-logo.webp",
      demo: {
        src: "shared/demo/uniway/index.html", w: 390, h: 844,
        poster: "shared/img/uniway-phone-carpool.webp",
        note: { en: "Interactive demo rebuilt from the app's source code, with sample data. Tap around.", ko: "앱 소스 코드를 바탕으로 다시 만든 인터랙티브 데모입니다. 샘플 데이터로 동작하니 직접 눌러 보세요." },
        screens: [
          { id: "home", label: { en: "Home", ko: "홈" } },
          { id: "carpool", label: { en: "Taxi carpool", ko: "택시 카풀" } },
          { id: "connect", label: { en: "UniConnect", ko: "유니커넥트" } },
          { id: "market", label: { en: "Market", ko: "중고거래" } },
          { id: "board", label: { en: "Board", ko: "게시판" } },
          { id: "chat", label: { en: "Chat", ko: "채팅" } }
        ]
      },
      links: [{ label: { en: "Google Play", ko: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.dolphindev.uniway" }]
    },

    /* --------------------------------------------------- CJ OliveNetworks */
    /* Detail follows the owner's KAIRI application letter and Co-op final presentation. */
    {
      id: "cj",
      shortTitle: { en: "K-drama agents", ko: "K-드라마 에이전트" },
      order: 2,
      kind: "industry",
      groups: ["ai", "product"],
      axes: ["ai", "product"],
      year: "2026",
      start: "2026-02",
      accent: "#0f9f8c",
      title: { en: "LLM agents for K-drama content", ko: "K-드라마 콘텐츠 LLM 에이전트" },
      org: { en: "CJ OliveNetworks · AI Center", ko: "CJ올리브네트웍스 · AI센터" },
      role: { en: "AI Engineer Intern", ko: "AI 엔지니어 인턴" },
      team: { en: "UNIST Co-op program", ko: "UNIST Co-op 프로그램" },
      period: { en: "Feb – Jul 2026", ko: "2026.02 – 2026.07" },
      topics: [{ en: "LLM agents", ko: "LLM 에이전트" }, { en: "Evaluation", ko: "평가" }, { en: "Synthetic data", ko: "합성 데이터" }],
      oneLiner: {
        en: "Developed LLM agents that analyze, evaluate and generate K-drama content.",
        ko: "K-드라마 콘텐츠를 분석·평가·생성하는 LLM 에이전트를 개발했습니다."
      },
      headline: {
        en: "Raised the consistency of an LLM drama-script agent by about 30% and built a checker that catches its hallucinations.",
        ko: "드라마 대본을 다루는 LLM 에이전트의 일관성을 약 30% 높이고, 환각을 걸러내는 판별기를 만들었습니다."
      },
      summary: {
        en: "At the AI Center of CJ OliveNetworks I worked on a system of LLM agents that analyze and generate TV drama scripts. A whole drama is too long for an LLM to keep track of, which causes hallucination and inconsistency, and the content domain asks for details a general model misses. Our goal was an LLM system built for that domain: a better analysis pipeline and a conversational agent.",
        ko: "CJ올리브네트웍스 AI센터에서 TV 드라마 대본을 분석하고 생성하는 LLM 에이전트 시스템을 만드는 일을 했습니다. 드라마 한 편은 LLM이 한 번에 따라가기에 너무 길어서 환각과 비일관성이 생기고, 콘텐츠 도메인이 요구하는 디테일도 일반 모델로는 채우기 어렵습니다. 그래서 이 도메인에 맞는 LLM 활용 체계, 곧 분석 파이프라인의 고도화와 대화형 에이전트 개발을 목표로 했습니다."
      },
      problem: {
        en: "The analysis system is a multi-stage pipeline, and my job was to find the bottleneck at each node and fix it. One step asks the LLM to pick one or two of several options, and under the same conditions it picked differently on every run. The generated answers also contained hallucinations, so they could not go into a service without an evaluation process the team could trust.",
        ko: "분석 체계는 여러 단계의 파이프라인이고, 각 노드의 병목과 문제를 찾아 고치는 것이 제 일이었습니다. 여러 선택지 중 한두 개를 고르는 단계는 같은 조건에서도 실행할 때마다 다른 답을 냈습니다. 생성된 답변에는 환각도 섞여 있어서, 믿을 수 있는 평가 절차 없이는 서비스에 쓸 수 없었습니다."
      },
      approach: {
        en: [
          "Story memory: developed a structured memory of the story, a character-relationship graph plus hierarchical episode summaries, so the agent stays consistent across a long drama.",
          "Prompting: for a reasoning model, a simple instruction that trusts its reasoning worked better than many fine-grained constraints. On top of that I applied Universal Self-Consistency, an ensemble method that samples several answers and has the LLM choose the consistent one.",
          "Evaluation: built an LLM-as-a-judge quality checker for hallucination. I put together a test dataset, measured precision and recall, and refined the pipeline with parallel processing, metadata and different LLM models.",
          "Generation: the model wrote formulaic, mechanical scripts because it did not grasp the logic of the domain. Human-written scripts as few-shot examples clearly helped, but copyright ruled them out, so I introduced a process that turns human work into synthetic data."
        ],
        ko: [
          "스토리 메모리: 인물 관계 그래프와 계층적 에피소드 요약으로 구성한 구조화된 스토리 메모리를 만들어, 에이전트가 긴 드라마 전체에서 일관성을 유지하게 했습니다.",
          "프롬프트: 추론 모델에는 세세한 제약을 여러 개 거는 것보다, 추론 능력을 믿고 단순한 지시문을 주는 편이 일관성에 도움이 됐습니다. 여기에 여러 번 답하게 한 뒤 일관된 답을 고르게 하는 앙상블 기법인 Universal Self-Consistency를 적용했습니다.",
          "평가: 환각을 가려내는 LLM-as-a-judge 품질 판별기를 만들었습니다. 테스트 데이터셋을 구축해 정밀도와 재현율을 측정했고, 병렬 처리, 메타데이터 활용, LLM 모델 교체로 파이프라인을 다듬었습니다.",
          "생성: 모델은 도메인 특유의 논리를 이해하지 못해 정형화되고 기계적인 대본을 썼습니다. 작가가 쓴 대본을 few-shot 예시로 주면 분명히 나아졌지만 저작권 때문에 그대로 쓸 수 없어서, 사람의 저작물을 한 단계 거쳐 합성 데이터로 만드는 과정을 도입했습니다."
        ]
      },
      outcome: {
        en: [
          "Consistency rose by about 30% on the team's in-house evaluator.",
          "The hallucination checker reached precision 0.735 and recall 0.973.",
          "The synthetic data process was safe to use and improved the quality of generated content."
        ],
        ko: [
          "사내 평가기 기준으로 일관성이 약 30% 올랐습니다.",
          "환각 판별기는 정밀도 0.735, 재현율 0.973을 기록했습니다.",
          "합성 데이터 생성 과정은 안전하게 쓸 수 있었고, 생성 콘텐츠의 품질을 높이는 데 기여했습니다."
        ]
      },
      learned: {
        en: "More than editing prompts, a system that benchmarks the model and automates evaluation decides how well the whole LLM service performs. And in industry the first question is how reliably you can control a commercial LLM for the business, with latency and serving cost both held down, before anyone thinks of building a model from scratch.",
        ko: "프롬프트를 고치는 것보다, 모델 성능을 체계적으로 벤치마킹하고 평가를 자동화하는 체계가 LLM 서비스 전체의 성능을 좌우한다는 것을 배웠습니다. 현장의 최우선 과제는 모델을 처음부터 만드는 일이 아니라, 추론 시간과 서빙 비용을 함께 줄이면서 상용 LLM을 얼마나 믿을 수 있게 통제해 사업에 적용하느냐였습니다."
      },
      retro: null,
      metrics: [
        { value: "~30%", label: { en: "higher consistency on the in-house evaluator", ko: "사내 평가기 기준 일관성 향상" } },
        { value: "0.973", label: { en: "recall of the hallucination checker", ko: "환각 판별기 재현율" } },
        { value: "0.735", label: { en: "precision of the hallucination checker", ko: "환각 판별기 정밀도" } },
        { value: "6 mo", valueKo: "6개월", label: { en: "full-time co-op internship", ko: "전일 Co-op 인턴" } }
      ],
      stack: ["LLM agents", "Prompt design", "Universal Self-Consistency", "LLM-as-a-judge", "Synthetic data", "vLLM"],
      steps: [
        { en: "Drama script", ko: "드라마 대본" },
        { en: "Story memory", ko: "스토리 메모리" },
        { en: "Analysis pipeline", ko: "분석 파이프라인" },
        { en: "Self-consistency selection", ko: "일관성 기반 답 선택" },
        { en: "LLM judge checks hallucination", ko: "LLM 판별기의 환각 검사" }
      ],
      chart: null,
      table: null,
      cover: { type: "steps", bg: "#e6f6f3" },
      images: [],
      docs: [],
      links: []
    },

    /* ------------------------------------------------------------ UAI Lab */
    /* Detail follows the owner's KAIRI application letter. */
    {
      id: "uai",
      shortTitle: { en: "Robot VLA", ko: "로봇 VLA" },
      order: 3,
      kind: "research",
      groups: ["ai"],
      axes: ["ai"],
      year: "2026",
      start: "2026-08",
      accent: "#f2762e",
      title: { en: "Efficient inference and continual learning for robot VLA models", ko: "로봇 VLA 모델의 효율적 추론과 연속 학습" },
      org: { en: "Ubiquitous AI Lab, UNIST · Prof. Taesik Gong", ko: "UNIST 유비쿼터스 인공지능 연구실 · 공태식 교수" },
      role: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" },
      team: { en: "Research lab", ko: "연구실" },
      period: { en: "Aug – Nov 2026", ko: "2026.08 – 2026.11" },
      topics: [{ en: "Robotics", ko: "로보틱스" }, { en: "On-device AI", ko: "온디바이스 AI" }, { en: "Continual learning", ko: "연속 학습" }],
      oneLiner: {
        en: "Tested which published speed-ups for robot foundation models hold up on a real device, then asked what a robot can do with new demonstrations before it is retrained.",
        ko: "로봇 파운데이션 모델의 가속 기법이 실제 기기에서도 통하는지 확인하고, 재학습 전까지 로봇이 새 시연으로 무엇을 할 수 있는지 연구했습니다."
      },
      headline: {
        en: "Checked which speed-ups for a robot foundation model survive on the device, and worked out why several, my own included, did not.",
        ko: "논문의 가속 기법이 실제 기기에서도 통하는지 확인했고, 제 아이디어를 포함해 통하지 않은 것들의 이유를 하나씩 짚었습니다."
      },
      summary: {
        en: "A vision-language-action (VLA) model runs a large network at every control step, more than a robot's onboard computer can afford. I asked which published speed-ups hold up on the device. Later I turned to continual learning: research assumes a robot trains the moment a new task arrives, but a deployed robot is retrained only on a schedule, so I asked what it can do with new demonstrations in the meantime.",
        ko: "VLA(Vision-Language-Action) 모델은 제어 스텝마다 큰 모델을 돌리는데, 로봇에 싣는 컴퓨터로는 감당하기 어렵습니다. 그래서 논문에 나온 가속 기법 가운데 어떤 것이 실제 기기에서도 통하는지 확인했습니다. 이후에는 연속 학습으로 넘어갔습니다. 기존 연구는 새 작업이 오는 즉시 로봇이 학습한다고 가정하지만, 배포된 로봇은 정해진 일정에만 재학습됩니다. 그 사이에 로봇이 새 시연으로 무엇을 할 수 있는지를 물었습니다."
      },
      problem: {
        en: "On a Jetson board, token caching and quantization both saved computation or memory, yet neither made inference faster. Most of the latency sat in the flow-matching action head, so that is where I looked next.",
        ko: "Jetson 보드에서 토큰 캐싱과 양자화는 계산량이나 메모리를 줄였지만 추론을 빠르게 하지는 못했습니다. 지연 시간의 대부분이 flow-matching 액션 헤드에 있어서, 다음으로 그곳을 봤습니다."
      },
      approach: {
        en: [
          "Adapted a speculative sampling method from image generation to the action head. It ran about twice as fast, until I ran the model as CUDA graphs and the gain vanished. I traced it to CPU launch overhead, not real parallelism.",
          "Tried a cheap probe for skipping denoising steps. It performed at chance, and I showed analytically that the two effects it measured cancel almost exactly.",
          "Since most of a scene barely changes between steps, asked whether the world model inside a VLA could predict which image tokens will change so the rest can be reused.",
          "For continual learning, built an experimental setup inspired by how the brain pairs fast episodic memory with slow consolidation: a stream of all 90 LIBERO-90 tasks with periodic training.",
          "Trained a hypernetwork that turns a few demonstrations into adapter weights, and checked it with a control run that fed it another task's demonstrations."
        ],
        ko: [
          "이미지 생성 분야의 speculative sampling 기법을 액션 헤드에 맞게 옮겼습니다. 약 2배 빨라졌지만, 모델을 CUDA graph로 돌리자 이득이 사라졌습니다. 원인은 실제 병렬성이 아니라 CPU 실행 오버헤드였습니다.",
          "디노이징 스텝을 건너뛸지 판단하는 가벼운 프로브를 시도했습니다. 성능이 우연 수준이었고, 프로브가 측정하는 두 효과가 거의 정확히 상쇄된다는 것을 해석적으로 보였습니다.",
          "장면의 대부분은 스텝 사이에 거의 변하지 않으므로, VLA 안의 월드 모델이 어떤 이미지 토큰이 바뀔지 예측해 나머지를 재사용할 수 있는지 확인했습니다.",
          "연속 학습에서는 뇌가 빠른 일화 기억과 느린 공고화를 함께 쓰는 방식에서 착안해, LIBERO-90의 90개 작업이 차례로 들어오고 학습은 주기적으로만 이뤄지는 실험 환경을 만들었습니다.",
          "시연 몇 개를 어댑터 가중치로 바꾸는 하이퍼네트워크를 학습시키고, 다른 작업의 시연을 넣는 대조 실험으로 검증했습니다."
        ]
      },
      outcome: {
        en: [
          "The world model's predictions of which tokens change were at chance, while raw pixel change did the job well, and its forecast lost to assuming that nothing changes.",
          "Tasks awaiting training mostly failed. A recently published training-free method barely helped, and simply replaying the closest stored demonstration did better.",
          "The hypernetwork looked successful by its loss, but the control run reached the same loss: it was ignoring its input. Given the task identity instead, it did produce task-specific adapters, which placed the failure in reading demonstrations, not in generating weights.",
          "Shifting objects by a few centimeters sharply degraded both retrieval and a trained policy.",
          "I did not end up with a working method, but I gained hands-on skill in building experimental setups and profiling."
        ],
        ko: [
          "월드 모델이 어떤 토큰이 바뀔지 예측한 결과는 우연 수준이었고, 단순한 픽셀 변화량이 그 일을 잘 해냈습니다. 월드 모델의 예측은 '아무것도 변하지 않는다'는 가정보다도 못했습니다.",
          "학습을 기다리는 작업은 대부분 실패했습니다. 최근 발표된 학습 없는 기법은 거의 도움이 되지 않았고, 저장된 시연 중 가장 가까운 것을 그대로 재생하는 편이 더 나았습니다.",
          "하이퍼네트워크는 손실만 보면 성공한 것 같았지만, 대조 실험도 같은 손실에 도달했습니다. 입력을 무시하고 있었던 것입니다. 시연 대신 작업 정체를 주자 작업별 어댑터를 만들어 냈고, 이로써 실패 지점이 가중치 생성이 아니라 시연을 읽는 쪽에 있음을 확인했습니다.",
          "물체를 몇 센티미터 옮기는 것만으로 시연 검색과 학습된 정책 모두 성능이 크게 떨어졌습니다.",
          "작동하는 방법을 만들지는 못했지만, 실험 환경을 구축하고 프로파일링하는 실전 역량을 얻었습니다."
        ]
      },
      learned: {
        en: "Saving computation or memory did not make inference faster on the device. And demonstrations teach a policy only about the states they cover, which is the observation that led me to world models.",
        ko: "계산량이나 메모리를 줄인다고 기기에서 추론이 빨라지지는 않았습니다. 그리고 시연은 그것이 다루는 상태에 대해서만 정책을 가르칩니다. 이 관찰이 저를 월드 모델로 이끌었습니다."
      },
      retro: null,
      metrics: [
        { value: "90", label: { en: "LIBERO tasks in the continual-learning stream", ko: "연속 학습 실험에 쓴 LIBERO 작업" } },
        { value: "3 mo", valueKo: "3개월", label: { en: "in the lab", ko: "연구실 활동" } },
        { value: "2", label: { en: "reading-group talks", ko: "리딩 그룹 발표" } }
      ],
      stack: ["PyTorch", "LeRobot", "SmolVLA", "GR00T", "LIBERO", "Jetson Orin Nano", "CUDA Graphs", "TensorRT", "Nsight"],
      steps: [
        { en: "Camera + instruction", ko: "카메라 영상 + 지시문" },
        { en: "Vision encoder", ko: "비전 인코더" },
        { en: "Language model", ko: "언어 모델" },
        { en: "Action head", ko: "액션 헤드" },
        { en: "Robot action", ko: "로봇 동작" }
      ],
      chart: null,
      table: null,
      cover: { type: "steps", bg: "#fdeee3" },
      images: [],
      docs: [],
      links: [{ label: { en: "Lab website", ko: "연구실 웹사이트" }, href: "https://uai-lab.com/" }]
    },

    /* ----------------------------------------------------------- Ergo Lab */
    {
      id: "shoulder",
      shortTitle: { en: "Shoulder screening", ko: "어깨 질환 선별" },
      order: 4,
      kind: "research",
      groups: ["ai", "healthcare"],
      axes: ["ai", "healthcare"],
      year: "2025",
      start: "2025-07",
      accent: "#d6456b",
      title: { en: "Screening shoulder disorders from arm motion", ko: "팔 움직임으로 어깨 질환 선별하기" },
      org: { en: "Ergonomics Lab, UNIST · with Ulsan University Hospital", ko: "UNIST Ergonomics Lab · 울산대학교병원 협력" },
      role: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" },
      team: { en: "Team of 4 · Advisor: Prof. Gwanseob Shin", ko: "4인 팀 · 지도교수 신관섭" },
      period: { en: "Jul – Dec 2025", ko: "2025.07 – 2025.12" },
      topics: [{ en: "Healthcare", ko: "헬스케어" }, { en: "Motion capture", ko: "모션 캡처" }, { en: "Time-series model", ko: "시계열 모델" }],
      oneLiner: {
        en: "Can the way a patient lifts an arm reveal a rotator cuff tear? A study with 22 hospital patients.",
        ko: "팔을 드는 움직임만으로 회전근개 파열을 가려낼 수 있을까. 병원 환자 22명과 함께한 연구입니다."
      },
      headline: {
        en: "Turned a measurement problem with no ground truth into a quick screening task, with a protocol hospital staff ran themselves.",
        ko: "정답을 구할 수 없던 측정 문제를 빠른 선별 문제로 바꾸고, 병원 의료진이 직접 쓰는 측정 절차를 만들었습니다."
      },
      summary: {
        en: "Early diagnosis of a rotator cuff tear depends on palpation and interviews, so it varies from doctor to doctor. With an orthopedic surgeon at Ulsan University Hospital as our clinical mentor, our team recorded how the shoulder blade and upper arm move when patients raise an arm. I built the models on top of that data.",
        ko: "회전근개 파열의 초기 진단은 촉진과 문진에 의존해서 의사마다 판단이 달라집니다. 울산대학교병원 정형외과 교수님을 임상 멘토로 모시고, 환자가 팔을 들 때 어깨뼈와 위팔이 어떻게 움직이는지 측정했습니다. 저는 그 데이터로 모델을 만드는 일을 맡았습니다."
      },
      problem: {
        en: "The shoulder blade slides under the skin, so skin markers never give a true reading without an X-ray. Chasing precise measurement was not going to work in a clinic.",
        ko: "어깨뼈는 피부 아래에서 미끄러지기 때문에, X-ray 없이는 피부에 붙인 마커로 정확한 값을 얻을 수 없습니다. 정밀 측정을 목표로 해서는 진료 현장에서 쓸 수 없었습니다."
      },
      approach: {
        en: [
          "Proposed a change of goal: from precise quantification to a fast first-pass screen that comes before the doctor's own examination.",
          "Cut the protocol to what patients could manage: one motion (raising the arm sideways, twice per arm) and seven markers. Raising the arm forward tired patients and hid the markers, so we dropped it.",
          "Wrote a step-by-step collection guide so hospital staff could record patients without us. They took over measurement from November.",
          "Built a bidirectional LSTM that reads marker trajectories in a shoulder-blade coordinate frame and predicts two things at once: whether the arm is affected, and whether it is a rotator cuff tear.",
          "Trained a DeepLabCut model that tracks four sticker keypoints in ordinary video, as a first step toward capturing the same motion with only a camera."
        ],
        ko: [
          "목표를 바꾸자고 제안했습니다. 정밀한 정량화 대신, 의사의 진찰에 앞서 빠르게 가능성을 가려내는 1차 선별로 방향을 잡았습니다.",
          "환자가 감당할 수 있는 만큼으로 측정 절차를 줄였습니다. 동작은 팔을 옆으로 드는 것 하나(팔마다 2회), 마커는 7개입니다. 팔을 앞으로 드는 동작은 환자가 힘들어하고 마커가 가려져서 뺐습니다.",
          "의료진이 저희 없이도 측정할 수 있도록 단계별 수집 가이드를 썼습니다. 11월부터는 병원에서 직접 측정했습니다.",
          "어깨뼈 기준 좌표계로 바꾼 마커 궤적을 읽는 양방향 LSTM을 만들었습니다. 병변이 있는 팔인지, 회전근개 파열인지를 한 번에 예측합니다.",
          "일반 영상에서 스티커 4개의 위치를 추적하는 DeepLabCut 모델을 학습시켰습니다. 카메라만으로 같은 움직임을 얻기 위한 첫 단계입니다."
        ]
      },
      outcome: {
        en: [
          "Usable recordings from 22 patients, collected by hospital staff with our protocol.",
          "On the held-out test set, the model flagged rotator cuff tears with recall 0.958 and precision 0.719 (preliminary result).",
          "The classifier and the camera model are still separate pieces. Joining them is the next step."
        ],
        ko: [
          "저희 절차로 병원에서 직접 측정한 환자 22명의 데이터를 확보했습니다.",
          "따로 떼어 둔 테스트셋에서 회전근개 파열을 재현율 0.958, 정밀도 0.719로 가려냈습니다 (예비 결과).",
          "분류 모델과 카메라 모델은 아직 따로 있습니다. 둘을 잇는 것이 다음 단계입니다."
        ]
      },
      learned: {
        en: "In a clinic, a rough estimate that is easy to get can be worth more than a precise one that is not. The goal there is a fast first read on whether something is wrong, and the doctor's own examination comes after.",
        ko: "진료 현장에서는 얻기 어려운 정밀한 값보다 쉽게 얻는 대략적인 추정치가 더 쓸모 있을 수 있습니다. 현장에서 필요한 것은 문제가 있는지 빠르게 가늠하는 일이고, 정밀한 진단은 그다음에 의사가 합니다."
      },
      retro: null,
      metrics: [
        { value: "22", label: { en: "patients measured at the hospital", ko: "병원에서 측정한 환자" } },
        { value: "0.958", label: { en: "recall for rotator cuff tears (preliminary)", ko: "회전근개 파열 재현율 (예비 결과)" } },
        { value: "7", label: { en: "markers, one motion", ko: "마커 수, 동작 1가지" } },
        { value: "4", label: { en: "people on the team", ko: "팀 인원" } }
      ],
      stack: ["PyTorch", "Bidirectional LSTM", "DeepLabCut (ResNet-50)", "OptiTrack / Motive", "OpenCV"],
      steps: [
        { en: "Patient raises arm", ko: "환자가 팔을 든다" },
        { en: "7 markers tracked at 120 Hz", ko: "마커 7개를 120Hz로 추적" },
        { en: "Shoulder-blade coordinate frame", ko: "어깨뼈 기준 좌표계로 변환" },
        { en: "Bidirectional LSTM", ko: "양방향 LSTM" },
        { en: "Affected arm? Rotator cuff tear?", ko: "병변 여부, 회전근개 파열 여부" }
      ],
      chart: null,
      table: {
        title: { en: "Held-out test result (preliminary)", ko: "테스트 결과 (예비 결과)" },
        columns: [{ en: "Task", ko: "분류 과제" }, { en: "Accuracy", ko: "정확도" }, { en: "Precision", ko: "정밀도" }, { en: "Recall", ko: "재현율" }],
        rows: [
          [{ en: "Affected arm?", ko: "병변이 있는 팔인가" }, "0.812", "0.942", "0.766"],
          [{ en: "Rotator cuff tear?", ko: "회전근개 파열인가" }, "0.792", "0.719", "0.958"]
        ],
        highlight: [1, 3]
      },
      cover: { type: "image", bg: "#fbe9ee", image: "shared/img/ergo-pose.webp" },
      images: [
        { src: "shared/img/ergo-pose.webp", kind: "wide", alt: { en: "Stickers on the back are detected as keypoints in video, and their trajectories are drawn as the arm is raised", ko: "등에 붙인 스티커를 영상에서 지점으로 인식하고, 팔을 드는 동안의 궤적을 그린 그림" }, caption: { en: "Camera-based pose estimation: stickers, detected keypoints, and their trajectories", ko: "카메라 기반 자세 추정: 스티커, 인식된 지점, 그 궤적" } },
        { src: "shared/img/ergo-trajectories.webp", kind: "plot", alt: { en: "Trajectories of four keypoints tracked from video while an arm is raised", ko: "팔을 드는 동안 영상에서 추적한 네 지점의 궤적" }, caption: { en: "Keypoint trajectories from ordinary video (DeepLabCut pilot)", ko: "일반 영상에서 추적한 지점들의 궤적 (DeepLabCut 파일럿)" } },
        { src: "shared/img/ergo-motive.webp", kind: "wide", alt: { en: "Motion capture software showing seven markers from three cameras", ko: "카메라 세 대로 마커 일곱 개를 잡은 모션 캡처 화면" }, caption: { en: "Seven markers seen by three cameras at 120 Hz", ko: "카메라 세 대가 120Hz로 잡은 마커 일곱 개" } },
        { src: "shared/img/ergo-kit.webp", kind: "photo", alt: { en: "The measurement kit laid out on a floor: camera bar, markers, sensors, cables, tripod", ko: "바닥에 펼쳐 놓은 측정 장비: 카메라 바, 마커, 센서, 케이블, 삼각대" }, caption: { en: "The kit handed over to the hospital", ko: "병원에 넘겨준 측정 장비" } }
      ],
      links: []
    },

    /* -------------------------------------------------------------- Smeal */
    {
      id: "smeal",
      shortTitle: { en: "Smeal", ko: "Smeal" },
      order: 5,
      kind: "product",
      groups: ["product"],
      axes: ["product"],
      year: "2025",
      start: "2025-02",
      accent: "#e3dc2f",
      title: { en: "Smeal", ko: "Smeal" },
      org: { en: "School meal and timetable app", ko: "학교 급식 · 시간표 앱" },
      role: { en: "Co-founder · App developer", ko: "공동 창업 · 앱 개발" },
      team: { en: "Team of 2", ko: "2인 팀" },
      period: { en: "Feb – Apr 2025", ko: "2025.02 – 2025.04" },
      topics: [{ en: "Mobile app", ko: "모바일 앱" }, { en: "Students", ko: "학생" }],
      oneLiner: {
        en: "Today's school lunch and the next class, in one app for students.",
        ko: "오늘 급식과 다음 교시 수업을 한곳에서 보는 학생용 앱입니다."
      },
      headline: {
        en: "A school meal and timetable app, released on both stores and downloaded 300+ times.",
        ko: "급식·시간표 앱을 두 스토어에 출시해 300회 넘게 다운로드됐습니다."
      },
      summary: {
        en: "Today's lunch menu and the next class are the two things students check every day. Smeal shows both for their own school. Two of us designed it, built it, and released it on Google Play and the App Store.",
        ko: "오늘 점심 메뉴와 다음 교시 수업은 학생들이 매일 확인하는 정보입니다. Smeal은 자기 학교의 급식과 학급 시간표를 한곳에서 보여 줍니다. 둘이서 기획하고 만들어 Google Play와 App Store에 출시했습니다."
      },
      problem: {
        en: "Meal menus and timetables lived in different places, and neither was quick to open between classes.",
        ko: "급식 메뉴와 시간표가 서로 다른 곳에 있었고, 쉬는 시간에 바로 열어 보기에는 둘 다 번거로웠습니다."
      },
      approach: {
        en: [
          "Breakfast, lunch and dinner menus by school and date, with a highlighter for favorite dishes.",
          "A monthly meal calendar where the highlighted dishes stay marked.",
          "A class timetable by day and period that students can edit when the schedule changes.",
          "Visited schools in Ulsan to give talks on AI and app development, and introduced Smeal to the students who would use it."
        ],
        ko: [
          "학교와 날짜에 맞는 아침·점심·저녁 급식 메뉴를 보여 주고, 좋아하는 메뉴에는 형광펜을 칠할 수 있습니다.",
          "월간 식단표에서도 표시해 둔 메뉴를 바로 찾을 수 있습니다.",
          "요일과 교시별 학급 시간표를 보여 주고, 수업이 바뀌면 직접 고칠 수 있습니다.",
          "울산 지역 학교를 찾아가 AI와 앱 개발을 주제로 특강을 하면서, 앱을 쓸 학생들에게 Smeal을 소개했습니다."
        ]
      },
      outcome: {
        en: ["300+ downloads across Google Play and the App Store."],
        ko: ["Google Play와 App Store를 합쳐 300회 넘게 다운로드됐습니다."]
      },
      learned: null,
      retro: null,
      metrics: [
        { value: "300+", label: { en: "downloads", ko: "다운로드" } },
        { value: "2", label: { en: "stores: Google Play and App Store", ko: "스토어: Google Play, App Store" } },
        { value: "2", label: { en: "people on the team", ko: "팀 인원" } }
      ],
      stack: ["Flutter", "Dart", "Provider", "Hive", "NEIS Open API", "Google Play", "App Store"],
      steps: null,
      chart: null,
      table: null,
      cover: { type: "phones", bg: "#f4f4f2", wide: "shared/img/smeal-hero.webp", phones: ["shared/img/smeal-phone-meal.webp", "shared/img/smeal-phone-timetable.webp"] },
      images: [
        { src: "shared/img/smeal-hero.webp", kind: "wide", alt: { en: "Smeal meal screen and timetable screen on two phones", ko: "Smeal 급식 화면과 시간표 화면" }, caption: { en: "Meals and timetable", ko: "급식과 시간표" } },
        { src: "shared/img/smeal-phone-meal.webp", kind: "phone", alt: { en: "Today's lunch with favorite dishes highlighted", ko: "좋아하는 메뉴에 형광펜을 칠한 오늘의 중식" }, caption: { en: "Today's lunch, favorites highlighted", ko: "오늘의 중식, 좋아하는 메뉴 표시" } },
        { src: "shared/img/smeal-phone-calendar.webp", kind: "phone", alt: { en: "Monthly meal calendar", ko: "월간 식단표" }, caption: { en: "Monthly meal calendar", ko: "월간 식단표" } },
        { src: "shared/img/smeal-phone-timetable.webp", kind: "phone", alt: { en: "Editable class timetable", ko: "수정할 수 있는 학급 시간표" }, caption: { en: "Class timetable, editable", ko: "직접 고칠 수 있는 학급 시간표" } }
      ],
      demo: {
        src: "shared/demo/smeal/index.html", w: 390, h: 844,
        poster: "shared/img/smeal-phone-meal.webp",
        note: { en: "Interactive demo rebuilt from the app's source code, with sample data. Tap a dish to highlight it.", ko: "앱 소스 코드를 바탕으로 다시 만든 인터랙티브 데모입니다. 메뉴를 눌러 형광펜을 칠해 보세요." },
        screens: [
          { id: "meal", label: { en: "Today's meal", ko: "오늘 급식" } },
          { id: "calendar", label: { en: "Monthly menu", ko: "월간 식단표" } },
          { id: "timetable", label: { en: "Timetable", ko: "시간표" } },
          { id: "edit", label: { en: "Edit timetable", ko: "시간표 수정" } }
        ]
      },
      links: [{ label: { en: "Google Play", ko: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.smeal.app" }]
    },

    /* ---------------------------------------------------------------- LOS */
    {
      id: "los",
      shortTitle: { en: "Length of stay", ko: "재원 기간 예측" },
      order: 6,
      kind: "coursework",
      groups: ["ai", "healthcare"],
      axes: ["ai", "healthcare"],
      year: "2025",
      start: "2025-09",
      accent: "#5b5bd6",
      title: { en: "Predicting hospital length of stay", ko: "입원 환자의 재원 기간 예측" },
      org: { en: "Deep Learning course project, UNIST", ko: "UNIST 딥러닝 수업 프로젝트" },
      role: { en: "Individual project", ko: "개인 프로젝트" },
      team: { en: "Solo", ko: "1인" },
      period: { en: "Sep – Dec 2025", ko: "2025.09 – 2025.12" },
      topics: [{ en: "Healthcare", ko: "헬스케어" }, { en: "Deep learning", ko: "딥러닝" }, { en: "EHR data", ko: "전자의무기록" }],
      oneLiner: {
        en: "A deep learning pipeline over 424,803 hospital admissions that predicts how long a patient will stay.",
        ko: "입원 424,803건의 의무기록으로 환자가 며칠 입원할지 예측하는 딥러닝 파이프라인입니다."
      },
      headline: {
        en: "Cut prediction error by 9% across 420K admissions. The biggest gain came from redefining the target, not from a bigger model.",
        ko: "입원 42만 건에서 예측 오차를 9% 줄였습니다. 가장 큰 개선은 더 큰 모델이 아니라 예측 대상을 다시 정의한 데서 나왔습니다."
      },
      summary: {
        en: "Hospitals plan beds and staff around how long patients stay. I built a pipeline on the MIMIC-IV records that joins nine tables into features for each admission and predicts the length of stay in hours, then compared seven models one change at a time.",
        ko: "병원은 환자의 재원 기간에 맞춰 병상과 인력을 계획합니다. MIMIC-IV 의무기록의 테이블 9개를 입원 단위 특징으로 합쳐 재원 시간을 예측하는 파이프라인을 만들고, 한 번에 한 가지만 바꿔 가며 모델 7개를 비교했습니다."
      },
      problem: {
        en: "Length of stay has an extreme long tail, from one day to more than 500. A model trained on raw hours spends its effort on a few very long stays.",
        ko: "재원 기간은 하루부터 500일 이상까지 꼬리가 매우 긴 분포입니다. 시간 값을 그대로 학습시키면 모델이 극소수의 장기 입원에 끌려갑니다."
      },
      approach: {
        en: [
          "Joined nine record tables (demographics, service, diagnoses, procedures, medications, orders) for 424,803 admissions, and encoded code lists as unordered sets.",
          "Ran seven models in sequence, changing one thing each time: baseline, log-scaled target, weighted sampling, one branch per data type, branch attention, and two Transformer variants.",
          "For each variant that failed, looked at where it failed: error by length-of-stay range for weighted sampling, and the mismatch between unordered codes and sequence models for the Transformers."
        ],
        ko: [
          "입원 424,803건에 대해 테이블 9개(인구통계, 진료과, 진단, 시술, 투약, 처방)를 합쳤고, 코드 목록은 순서 없는 집합으로 인코딩했습니다.",
          "한 번에 하나씩만 바꿔 가며 모델 7개를 차례로 실험했습니다. 기준 모델, 로그 변환한 예측값, 가중 샘플링, 데이터 종류별 분기, 분기 어텐션, Transformer 변형 두 가지입니다.",
          "실패한 변형마다 어디서 실패했는지 확인했습니다. 가중 샘플링은 재원 기간 구간별 오차로, Transformer는 순서 없는 코드와 순차 모델이 맞지 않는다는 점으로 설명했습니다."
        ]
      },
      outcome: {
        en: [
          "Test error (MAE) fell from 63.7 hours to 57.7 hours, a 9.4% reduction.",
          "Predicting the log of the stay gave the largest single improvement, 4.6 hours. Splitting the model by data type added another 1.3 hours.",
          "Oversampling long stays and both Transformer variants made the result worse."
        ],
        ko: [
          "테스트 오차(MAE)가 63.7시간에서 57.7시간으로 9.4% 줄었습니다.",
          "재원 기간에 로그를 씌워 예측하게 한 것이 4.6시간으로 가장 큰 개선이었습니다. 데이터 종류별로 모델을 나누자 1.3시간이 더 줄었습니다.",
          "장기 입원을 더 많이 뽑는 방법과 Transformer 변형 두 가지는 결과를 오히려 나쁘게 했습니다."
        ]
      },
      learned: {
        en: "Model design has to follow the structure of the data. Diagnosis codes are a set, and treating them as a sequence hurt. A more complex model was not a better one here.",
        ko: "모델 설계는 데이터의 구조를 따라야 합니다. 진단 코드는 순서가 없는 집합인데 이를 순서열로 다루자 성능이 떨어졌습니다. 이 문제에서는 더 복잡한 모델이 더 좋은 모델이 아니었습니다."
      },
      retro: null,
      metrics: [
        { value: "424,803", label: { en: "hospital admissions", ko: "입원 기록" } },
        { value: "−9.4%", label: { en: "prediction error vs. baseline", ko: "기준 모델 대비 예측 오차" } },
        { value: "7", label: { en: "models compared", ko: "비교한 모델" } },
        { value: "9", label: { en: "record tables joined", ko: "결합한 테이블" } }
      ],
      stack: ["PyTorch", "MIMIC-IV", "Embeddings", "Multi-branch MLP", "Transformer", "pandas"],
      steps: [
        { en: "9 record tables", ko: "의무기록 테이블 9개" },
        { en: "Features per admission", ko: "입원 단위 특징" },
        { en: "One branch per data type", ko: "데이터 종류별 분기" },
        { en: "Attention over branches", ko: "분기 어텐션" },
        { en: "Length of stay (hours)", ko: "재원 시간" }
      ],
      chart: {
        title: { en: "Test error by model (MAE in hours, lower is better)", ko: "모델별 테스트 오차 (MAE, 시간 단위, 낮을수록 좋음)" },
        type: "dot",
        unit: "h",
        lowerIsBetter: true,
        axis: { min: 56, max: 65, ticks: [56, 58, 60, 62, 64] },
        bars: [
          { label: { en: "Baseline MLP", ko: "기준 MLP" }, value: 63.74, tone: "base" },
          { label: { en: "Log-scaled target", ko: "로그 변환 예측값" }, value: 59.12, tone: "good" },
          { label: { en: "Weighted sampling", ko: "가중 샘플링" }, value: 59.72, tone: "bad" },
          { label: { en: "Branch per data type", ko: "데이터 종류별 분기" }, value: 57.84, tone: "good" },
          { label: { en: "Branch attention (final)", ko: "분기 어텐션 (최종)" }, value: 57.73, tone: "best" },
          { label: { en: "Transformer over branches", ko: "분기 단위 Transformer" }, value: 58.48, tone: "bad" },
          { label: { en: "Token-level Transformer", ko: "토큰 단위 Transformer" }, value: 60.83, tone: "bad" }
        ],
        caption: { en: "Each model changes one thing from the one before it.", ko: "각 모델은 앞 모델에서 한 가지만 바꿨습니다." }
      },
      table: null,
      cover: { type: "image", bg: "#ececfb", image: "shared/img/los-architecture.webp" },
      images: [
        { src: "shared/img/los-architecture.webp", kind: "wide", alt: { en: "Final model: one MLP branch per data type, concatenated, weighted by an attention MLP, then a fusion MLP and a linear layer that predicts length of stay", ko: "최종 모델: 데이터 종류별 MLP 분기를 합치고, 어텐션 MLP로 가중한 뒤, 퓨전 MLP와 선형 층으로 재원 기간을 예측" }, caption: { en: "Final model: multi-branch MLP with branch attention", ko: "최종 모델: 분기 어텐션을 쓴 다분기 MLP" } },
        { src: "shared/img/los-hist-raw.webp", kind: "plot", alt: { en: "Histogram of length of stay in hours with a long right tail", ko: "오른쪽 꼬리가 긴 재원 시간 분포" }, caption: { en: "Length of stay in hours: a long right tail", ko: "재원 시간 분포: 오른쪽 꼬리가 깁니다" } },
        { src: "shared/img/los-hist-log.webp", kind: "plot", alt: { en: "Histogram of log-scaled length of stay, closer to a bell shape", ko: "로그 변환한 재원 시간 분포" }, caption: { en: "After a log transform the target is far easier to fit", ko: "로그를 씌우면 훨씬 맞추기 쉬운 분포가 됩니다" } }
      ],
      docs: [
        { id: "los-slides", kind: "slides", title: { en: "Final presentation slides", ko: "최종 발표 슬라이드" }, pdf: "shared/docs/los-slides.pdf", aspect: "16 / 9", pages: ["shared/docs/los-slides/p01.webp", "shared/docs/los-slides/p02.webp", "shared/docs/los-slides/p03.webp", "shared/docs/los-slides/p04.webp", "shared/docs/los-slides/p05.webp", "shared/docs/los-slides/p06.webp", "shared/docs/los-slides/p07.webp", "shared/docs/los-slides/p08.webp", "shared/docs/los-slides/p09.webp", "shared/docs/los-slides/p10.webp", "shared/docs/los-slides/p11.webp", "shared/docs/los-slides/p12.webp", "shared/docs/los-slides/p13.webp", "shared/docs/los-slides/p14.webp", "shared/docs/los-slides/p15.webp", "shared/docs/los-slides/p16.webp", "shared/docs/los-slides/p17.webp", "shared/docs/los-slides/p18.webp", "shared/docs/los-slides/p19.webp", "shared/docs/los-slides/p20.webp", "shared/docs/los-slides/p21.webp", "shared/docs/los-slides/p22.webp", "shared/docs/los-slides/p23.webp"] }
      ],
      links: []
    },

    /* ---------------------------------------------------------------- EMG */
    {
      id: "emg",
      shortTitle: { en: "EMG gestures", ko: "근전도 제스처" },
      order: 7,
      kind: "coursework",
      groups: ["ai", "healthcare"],
      axes: ["ai", "healthcare"],
      year: "2025",
      start: "2025-03",
      accent: "#23a26d",
      title: { en: "Cross-user EMG gesture recognition", ko: "처음 보는 사용자의 근전도 제스처 인식" },
      org: { en: "Data Mining course project, UNIST", ko: "UNIST 데이터마이닝 수업 프로젝트" },
      role: { en: "Individual project", ko: "개인 프로젝트" },
      team: { en: "Solo", ko: "1인" },
      period: { en: "Mar – Jun 2025", ko: "2025.03 – 2025.06" },
      topics: [{ en: "Biosignals", ko: "생체 신호" }, { en: "Machine learning", ko: "머신러닝" }, { en: "Generalization", ko: "일반화" }],
      oneLiner: {
        en: "A sample-weighting method to help a muscle-signal gesture classifier work on people it has never seen.",
        ko: "근육 신호로 손동작을 맞히는 모델이 처음 보는 사람에게도 통하도록, 학습 샘플에 가중치를 주는 방법을 설계했습니다."
      },
      headline: {
        en: "Designed a way to down-weight atypical training samples so an EMG gesture model transfers to new users.",
        ko: "전형적이지 않은 학습 샘플의 비중을 낮춰, 근전도 제스처 모델이 새로운 사용자에게도 통하게 하는 방법을 설계했습니다."
      },
      summary: {
        en: "A model that reads forearm muscle signals (EMG) works well on the person it was trained on and poorly on anyone else. I proposed clustering each gesture's samples in a VAE latent space and trusting the samples near a cluster center more, then tested the idea on users held out of training.",
        ko: "팔 근육 신호(EMG)를 읽는 모델은 학습에 쓰인 사람에게는 잘 맞고 다른 사람에게는 잘 맞지 않습니다. 동작마다 샘플을 VAE 잠재 공간에서 군집으로 묶고 군집 중심에 가까운 샘플을 더 믿게 하는 방법을 제안했고, 학습에 쓰지 않은 사용자로 검증했습니다."
      },
      problem: {
        en: "Muscles, arm shape and electrode placement differ from person to person, so the same gesture produces different signals. Atypical samples pull the classifier away from what users have in common.",
        ko: "근육과 팔의 형태, 전극 위치가 사람마다 달라서 같은 동작도 신호가 다르게 나옵니다. 전형에서 벗어난 샘플은 모델이 사람들 사이의 공통점을 배우는 것을 방해합니다."
      },
      approach: {
        en: [
          "Extracted 140 time- and frequency-domain features per window from 10-channel EMG (NinaPro DB1: 27 people, 12 finger gestures).",
          "Compressed the features with a VAE and clustered each gesture's latent vectors with K-Means, GMM and HDBSCAN, to check the idea did not depend on one algorithm.",
          "Dropped small clusters, weighted the remaining samples by distance to their cluster center, and trained a weighted random forest.",
          "Evaluated on 5 people who never appeared in training (22 for training, 5 for testing)."
        ],
        ko: [
          "10채널 EMG에서 윈도우마다 시간·주파수 영역 특징 140개를 뽑았습니다 (NinaPro DB1: 27명, 손가락 동작 12가지).",
          "특징을 VAE로 압축하고, 동작별 잠재 벡터를 K-Means, GMM, HDBSCAN 세 가지로 군집화했습니다. 아이디어가 특정 알고리즘에만 기대는지 보기 위해서입니다.",
          "작은 군집은 버리고, 남은 샘플에는 군집 중심과의 거리에 따라 가중치를 줘서 가중 랜덤 포레스트를 학습시켰습니다.",
          "학습에 한 번도 쓰지 않은 5명으로 평가했습니다 (학습 22명, 테스트 5명)."
        ]
      },
      outcome: {
        en: [
          "On unseen users, the K-Means variant raised accuracy from 30.3% to 31.7% and macro-F1 from 30.2% to 31.5%.",
          "The HDBSCAN variant raised macro precision from 32.2% to 37.3%, with accuracy at 29.9%."
        ],
        ko: [
          "처음 보는 사용자에 대해 K-Means 변형은 정확도를 30.3%에서 31.7%로, macro-F1을 30.2%에서 31.5%로 올렸습니다.",
          "HDBSCAN 변형은 macro 정밀도를 32.2%에서 37.3%로 올렸고, 이때 정확도는 29.9%였습니다."
        ]
      },
      learned: {
        en: "The project started as a clustering exercise. Reading the literature showed that the real problem was the difference between users, so clustering became a tool for cleaning the training data instead of the goal.",
        ko: "처음에는 군집화 자체가 목표인 과제였습니다. 문헌을 읽다 보니 진짜 문제는 사용자 간 차이였고, 군집화는 목표가 아니라 학습 데이터를 정제하는 도구로 쓰게 됐습니다."
      },
      retro: null,
      metrics: [
        { value: "27", label: { en: "people in the dataset, 5 held out", ko: "데이터셋 인원, 5명은 테스트 전용" } },
        { value: "12", label: { en: "finger gestures", ko: "손가락 동작" } },
        { value: "+1.4 pt", valueKo: "+1.4%p", label: { en: "accuracy on unseen users (K-Means variant)", ko: "처음 보는 사용자 정확도 (K-Means 변형)" } }
      ],
      stack: ["Python", "Keras (VAE)", "scikit-learn", "K-Means / GMM / HDBSCAN", "Random forest", "NinaPro DB1"],
      steps: [
        { en: "10-channel EMG", ko: "10채널 EMG" },
        { en: "140 features per window", ko: "윈도우당 특징 140개" },
        { en: "VAE latent space", ko: "VAE 잠재 공간" },
        { en: "Cluster and weight samples", ko: "군집화와 샘플 가중치" },
        { en: "Weighted random forest", ko: "가중 랜덤 포레스트" }
      ],
      chart: null,
      table: {
        title: { en: "Unseen users (5 people, 12 gestures, %)", ko: "처음 보는 사용자 (5명, 동작 12가지, %)" },
        columns: [{ en: "Method", ko: "방법" }, { en: "Precision", ko: "정밀도" }, { en: "Recall", ko: "재현율" }, { en: "F1", ko: "F1" }, { en: "Accuracy", ko: "정확도" }],
        rows: [
          [{ en: "Baseline random forest", ko: "기준 랜덤 포레스트" }, "32.2", "31.3", "30.2", "30.3"],
          [{ en: "VAE + K-Means", ko: "VAE + K-Means" }, "35.1", "32.4", "31.5", "31.7"],
          [{ en: "VAE + GMM", ko: "VAE + GMM" }, "33.8", "31.5", "30.4", "31.0"],
          [{ en: "VAE + HDBSCAN", ko: "VAE + HDBSCAN" }, "37.3", "31.9", "29.2", "29.9"]
        ],
        highlight: [1, 4]
      },
      cover: { type: "image", bg: "#e6f5ee", image: "shared/img/emg-poster-1.webp" },
      images: [
        { src: "shared/img/emg-poster-1.webp", kind: "poster", alt: { en: "Research poster, page 1: introduction, goal, key idea and method", ko: "연구 포스터 1쪽: 소개, 목표, 핵심 아이디어, 방법" }, caption: { en: "Research poster, page 1", ko: "연구 포스터 1쪽" } },
        { src: "shared/img/emg-poster-2.webp", kind: "poster", alt: { en: "Research poster, page 2: experiment details, results and conclusion", ko: "연구 포스터 2쪽: 실험 설정, 결과, 결론" }, caption: { en: "Research poster, page 2", ko: "연구 포스터 2쪽" } },
        { src: "shared/img/emg-latent.webp", kind: "plot", alt: { en: "Latent vectors of one gesture clustered by three algorithms", ko: "한 동작의 잠재 벡터를 세 알고리즘으로 군집화한 결과" }, caption: { en: "One gesture in latent space, clustered three ways", ko: "잠재 공간에서 본 한 동작, 세 가지 군집화" } },
        { src: "shared/img/emg-signal.webp", kind: "plot", alt: { en: "Ten EMG channels before and after preprocessing", ko: "전처리 전후의 EMG 10채널" }, caption: { en: "Ten EMG channels for one gesture repetition", ko: "동작 한 번을 수행할 때의 EMG 10채널" } }
      ],
      docs: [
        { id: "emg-paper", kind: "paper", title: { en: "Full paper", ko: "논문 전문" }, pdf: "shared/docs/emg-paper.pdf", aspect: "1105 / 1430", pages: ["shared/docs/emg-paper/p1.webp", "shared/docs/emg-paper/p2.webp", "shared/docs/emg-paper/p3.webp", "shared/docs/emg-paper/p4.webp", "shared/docs/emg-paper/p5.webp"] }
      ],
      links: [
        { label: { en: "Paper (PDF)", ko: "논문 (PDF)" }, href: "shared/docs/emg-paper.pdf" },
        { label: { en: "Poster (PDF)", ko: "포스터 (PDF)" }, href: "shared/docs/emg-poster.pdf" },
        { label: { en: "Code on GitHub", ko: "GitHub 코드" }, href: "https://github.com/DH-Koo/CSE304_20211011" }
      ]
    }
  ],

  experience: [
    { period: { en: "Aug – Nov 2026", ko: "2026.08 – 2026.11" }, title: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" }, org: { en: "Ubiquitous AI Lab, UNIST", ko: "UNIST 유비쿼터스 인공지능 연구실" }, note: { en: "Efficient inference and continual learning for robot VLA models", ko: "로봇 VLA 모델의 효율적 추론과 연속 학습" }, project: "uai" },
    { period: { en: "Feb – Jul 2026", ko: "2026.02 – 2026.07" }, title: { en: "AI Engineer Intern", ko: "AI 엔지니어 인턴" }, org: { en: "CJ OliveNetworks, AI Center", ko: "CJ올리브네트웍스 AI센터" }, note: { en: "LLM agents that analyze, evaluate and generate K-drama content", ko: "K-드라마 콘텐츠 분석·평가·생성 LLM 에이전트" }, project: "cj" },
    { period: { en: "Jul – Dec 2025", ko: "2025.07 – 2025.12" }, title: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" }, org: { en: "Ergonomics Lab, UNIST", ko: "UNIST Ergonomics Lab" }, note: { en: "Shoulder disorder screening with Ulsan University Hospital", ko: "울산대학교병원과 어깨 질환 선별 연구" }, project: "shoulder" },
    { period: { en: "Jul – Nov 2025", ko: "2025.07 – 2025.11" }, title: { en: "Co-founder · App developer", ko: "공동 창업 · 앱 개발" }, org: { en: "Uniway", ko: "Uniway" }, note: { en: "Campus life app, about 1,000 registered users", ko: "캠퍼스 생활 앱, 가입자 약 1,000명" }, project: "uniway" },
    { period: { en: "Feb – Apr 2025", ko: "2025.02 – 2025.04" }, title: { en: "Co-founder · App developer", ko: "공동 창업 · 앱 개발" }, org: { en: "Smeal", ko: "Smeal" }, note: { en: "School meal and timetable app, 300+ downloads", ko: "급식·시간표 앱, 다운로드 300회 이상" }, project: "smeal" },
    { period: { en: "Mar 2023 – Sep 2024", ko: "2023.03 – 2024.09" }, title: { en: "Military service", ko: "군 복무" }, org: { en: "Republic of Korea Army, Sergeant", ko: "대한민국 육군, 병장 만기 전역" }, note: null, project: null }
  ],

  education: {
    school: { en: "UNIST (Ulsan National Institute of Science and Technology)", ko: "UNIST (울산과학기술원)" },
    degree: { en: "B.S. in Computer Science and Engineering", ko: "컴퓨터공학과 학사 과정" },
    period: { en: "Mar 2021 – present", ko: "2021.03 – 현재" },
    gpa: { en: "GPA 3.93 / 4.30 (major 4.14 / 4.30)", ko: "학점 3.93 / 4.30 (전공 4.14 / 4.30)" },
    notes: {
      en: ["Academic Excellence Scholarship (full tuition), every semester", "All courses taught in English"],
      ko: ["성적 우수 장학금(전액), 전 학기", "전 과목 영어 강의"]
    }
  },

  language: { en: "TOEIC 920 (Jan 2026)", ko: "TOEIC 920 (2026.01)" },

  awards: [
    {
      title: { en: "Excellence Award, Pharmacy × IT Startup Hackathon", ko: "약학xIT 창업 해커톤 우수상" },
      org: { en: "Seoul National University", ko: "서울대학교 제약바이오인력양성센터 주관" },
      date: { en: "Jul 2025", ko: "2025.07" },
      note: { en: "Built a mobile app that guides patients through their medication with music.", ko: "음악으로 환자의 복약을 안내하는 모바일 앱을 만들었습니다." },
      href: "https://github.com/DH-Koo/kpsa-hackathon"
    }
  ],

  outreach: [
    { title: { en: "Invited talk on using AI and building apps", ko: "AI 활용과 앱 개발 초청 특강" }, org: { en: "Hakseong Girls' High School, Ulsan", ko: "학성여자고등학교" }, date: { en: "Jul 2025", ko: "2025.07" } },
    { title: { en: "Mentor, STEM career program for middle school students", ko: "중학생 이공계 진로 체험 운영 멘토" }, org: { en: "UNIST Leadership Center", ko: "UNIST 리더십센터" }, date: { en: "Nov 2026", ko: "2026.11" } }
  ],

  skills: [
    { group: { en: "Product and apps", ko: "프로덕트 · 앱" }, items: ["Flutter", "Dart", "Firebase Cloud Messaging", "REST / WebSocket clients", "App Store and Google Play release"] },
    { group: { en: "AI and ML", ko: "AI · ML" }, items: ["Python", "PyTorch", "Keras", "LLM agents", "Sequence models", "DeepLabCut"] },
    { group: { en: "Systems", ko: "시스템" }, items: ["Linux", "NVIDIA Jetson", "CUDA Graphs", "TensorRT", "GPU profiling (Nsight)", "Git"] },
    { group: { en: "AI tools in daily work", ko: "일상적으로 쓰는 AI 도구" }, items: ["Claude Code", "Codex"] }
  ],

  /* Home page "Work" marquee (after gabrielvaldivia.com): two rows of image tiles, the first
     drifting left and the second right. Each tile links to its project. ratio = width / height.
     fit "contain" puts the picture on white with padding; demo = a phone playing the app tour,
     which becomes the live, tappable demo when the tile is enlarged. */
  marquee: [
    [
      { p: "uniway", src: "shared/img/uniway-hero.webp", ratio: 1.72 },
      { p: "cj", src: "shared/img/mq/cj-badge.webp", ratio: 0.72 },
      { p: "los", src: "shared/img/mq/los-cover.webp", ratio: 1.78 },
      { p: "uai", video: "shared/img/mq/uai.mp4", poster: "shared/img/mq/uai-poster.webp", ratio: 0.72 },
      { p: "uniway", demo: "shared/demo/uniway/frames/tour.webp", ratio: 1.3 }
    ],
    [
      { p: "smeal", src: "shared/img/smeal-hero.webp", ratio: 1.5 },
      { p: "emg", src: "shared/img/emg-poster-1.webp", ratio: 1.4, pos: "top" },
      { p: "smeal", demo: "shared/demo/smeal/frames/tour.webp", ratio: 1.3 },
      { p: "emg", src: "shared/docs/emg-paper/p1.webp", ratio: 0.75, pos: "top" },
      { p: "shoulder", src: "shared/img/ergo-pose.webp", ratio: 2.2, fit: "contain" }
    ]
  ],

  ui: {
    nav: {
      work: { en: "Work", ko: "작업" },
      about: { en: "About", ko: "소개" },
      experience: { en: "Experience", ko: "경력" },
      education: { en: "Education", ko: "학력" },
      contact: { en: "Contact", ko: "연락처" }
    },
    labels: {
      problem: { en: "Problem", ko: "문제" },
      approach: { en: "What I did", ko: "한 일" },
      outcome: { en: "Outcome", ko: "결과" },
      learned: { en: "What I learned", ko: "배운 점" },
      retro: { en: "If I did it again", ko: "다시 한다면" },
      role: { en: "Role", ko: "역할" },
      period: { en: "Period", ko: "기간" },
      team: { en: "Team", ko: "팀" },
      stack: { en: "Stack", ko: "기술" },
      links: { en: "Links", ko: "링크" },
      selectedWork: { en: "Selected work", ko: "주요 작업" },
      awards: { en: "Award", ko: "수상" },
      outreach: { en: "Talks and mentoring", ko: "강연 · 멘토링" },
      skills: { en: "Skills", ko: "기술" },
      language: { en: "Language", ko: "어학" },
      now: { en: "Now", ko: "지금" },
      viewProject: { en: "View project", ko: "자세히 보기" },
      close: { en: "Close", ko: "닫기" },
      copyEmail: { en: "Copy email", ko: "이메일 복사" },
      copied: { en: "Copied", ko: "복사됨" },
      switchLang: { en: "한국어", ko: "English" },
      pipeline: { en: "How it works", ko: "동작 흐름" },
      screens: { en: "Screens", ko: "화면" },
      figures: { en: "Figures", ko: "자료" },
      tryIt: { en: "Try the app", ko: "앱 직접 눌러 보기" },
      playTour: { en: "Play tour", ko: "자동 재생" },
      stopTour: { en: "Stop tour", ko: "재생 멈춤" },
      liveDemo: { en: "Live demo", ko: "라이브 데모" },
      documents: { en: "Documents", ko: "문서" },
      openPdf: { en: "Open PDF", ko: "PDF 열기" },
      pageOf: { en: "Page", ko: "쪽" },
      axes: { en: "Three axes", ko: "세 가지 축" },
      allWork: { en: "All work", ko: "전체 작업" }
    }
  }
};
