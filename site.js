/* =====================================================================
   Daehee Koo, portfolio. Shared script for index.html (data-page="home")
   and work.html (data-page="work"). All visible text comes from
   window.PORTFOLIO in shared/content.js.
   Sections: setup, helpers, tokens, language, chrome (top bar, footer),
   project art, demo phone, documents, project view, home, work, boot.
   ===================================================================== */
(function () {
  "use strict";

  const P = window.PORTFOLIO;
  const PAGE = ["work", "about"].includes(document.body.dataset.page) ? document.body.dataset.page : "home";
  if (!P) { document.body.insertAdjacentHTML("afterbegin", "<p style='padding:24px'>Content failed to load.</p>"); return; }
  const UI = P.ui;
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));

  /* ------------------------------------------------------------ Page-only labels */
  const LBL = {
    skip: { en: "Skip to content", ko: "본문으로 건너뛰기" },
    mainNav: { en: "Main", ko: "주 메뉴" },
    city: { en: "Seoul", ko: "서울" },
    tapHint: { en: "Tap the screen to try the app yourself.", ko: "화면을 눌러 앱을 직접 써 보세요." },
    prev: { en: "Previous", ko: "이전" },
    next: { en: "Next", ko: "다음" },
    prevCards: { en: "Previous projects", ko: "이전 프로젝트" },
    nextCards: { en: "Next projects", ko: "다음 프로젝트" },
    featured: { en: "Featured work", ko: "대표 작업" },
    updated: { en: "Updated", ko: "업데이트" },
    email: { en: "Email", ko: "이메일" },
    github: { en: "GitHub", ko: "GitHub" },
    copy: { en: "Copy", ko: "복사" },
    open: { en: "Open", ko: "열기" },
    improved: { en: "Improved", ko: "개선" },
    best: { en: "Final model", ko: "최종 모델" },
    worse: { en: "Made it worse", ko: "오히려 악화" },
    baseline: { en: "Baseline", ko: "기준" },
    demoOf: { en: "Interactive demo of", ko: "인터랙티브 데모:" },
    org: { en: "Org", ko: "소속" },
    axesL: { en: "Axes", ko: "축" },
    seeAll: { en: "See all", ko: "전체 보기" },
    seeN: { en: "See {n} on the Work page", ko: "작업 페이지에서 {n}개 보기" },
    nProjects: { en: "{n} projects", ko: "프로젝트 {n}개" },
    oneProject: { en: "1 project", ko: "프로젝트 1개" },
    workLede: { en: "Seven projects across product, AI and healthcare. Filter by axis, or open any one for the full story.", ko: "프로덕트, AI, 헬스케어에 걸친 일곱 개 프로젝트입니다. 축별로 걸러 보거나, 하나를 열어 자세히 볼 수 있습니다." },
    pagesN: { en: "pages", ko: "쪽" },
    enlarge: { en: "Click to enlarge", ko: "눌러서 크게 보기" },
    keysHint: { en: "Arrow keys work here", ko: "방향키로 넘길 수 있습니다" },
    dgAlt: { en: "Diagram of three overlapping circles: Product, AI and Healthcare.", ko: "프로덕트, AI, 헬스케어 세 원이 겹친 그림입니다." },
    poster: { en: "Research poster", ko: "연구 포스터" },
    figures: { en: "Figures", ko: "자료" },
    talks: { en: "Talks and mentoring", ko: "강연 · 멘토링" },
    aboutLede: { en: "Experience, education, awards and skills, the same as on my CV.", ko: "경력, 학력, 수상, 기술을 CV처럼 정리했습니다." },
    cvPdf: { en: "CV (PDF)", ko: "CV (PDF)" },
    home: { en: "Home", ko: "홈" },
    more: { en: "More", ko: "더보기" },
    openMenu: { en: "Open navigation menu", ko: "메뉴 열기" },
    closeMenu: { en: "Close navigation menu", ko: "메뉴 닫기" },
    cfForm: { en: "Contact form", ko: "연락 양식" },
    cfTo: { en: "To", ko: "받는 사람" },
    cfFrom: { en: "From", ko: "보내는 사람" },
    cfSubject: { en: "Subject", ko: "제목" },
    cfMessage: { en: "Message", ko: "메시지" },
    cfSend: { en: "Send", ko: "보내기" },
    cfSending: { en: "Sending…", ko: "보내는 중…" },
    cfSent: { en: "Sent. Thank you, I will reply soon.", ko: "보냈습니다. 곧 답장 드리겠습니다." },
    cfFailed: { en: "Could not send. Please email me directly:", ko: "보내지 못했습니다. 이메일로 직접 보내 주세요:" },
    cfLimit: { en: "You have sent several messages today. Please email me directly:", ko: "오늘은 이미 여러 번 보내셨습니다. 이메일로 직접 보내 주세요:" },
    cfMailApp: { en: "Opening your mail app…", ko: "메일 앱을 여는 중…" },
    cfBadEmail: { en: "Please enter your email address.", ko: "회신받을 이메일 주소를 적어 주세요." },
    cfBadSubject: { en: "Please add a subject.", ko: "제목을 적어 주세요." },
    cfBadMessage: { en: "Please write a message (10 characters or more).", ko: "메시지를 10자 이상 적어 주세요." }
  };

  /* Which picture a project shows in a colored card ("card") and on a light-gray tile ("gray"). */
  const ART = {
    uniway: { card: "wide", gray: "float" },
    smeal: { card: "phones", gray: "contain" },
    cj: { flow: "v" },
    uai: { flow: "h", frame: /jetson/i }
  };
  const DEMO_PROJECT = "uniway";

  /* Crop for poster renders that include their own bezel, so they line up with the CSS screen. */
  const POSTER_CROP = {
    "uniway-phone-carpool.webp": { size: "123.7% auto", pos: "73% 24%" },
    "smeal-phone-meal.webp": { size: "105.2% auto", pos: "48% 34.6%" }
  };

  /* ------------------------------------------------------------ Helpers */
  let lang = "en";
  const t = (f) => {
    if (f == null) return "";
    if (typeof f === "string" || typeof f === "number") return String(f);
    const v = f[lang];
    return v != null && v !== "" ? v : (f.en != null ? f.en : "");
  };
  const tl = (f) => {
    if (!f) return [];
    if (Array.isArray(f)) return f;
    const v = f[lang] || f.en;
    return Array.isArray(v) ? v : [];
  };
  const L = (k) => t((UI.labels && UI.labels[k]) || LBL[k]);
  const N = (k) => t(UI.nav[k]);
  const fmt = (k, n) => L(k).replace("{n}", n);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const T = (f) => esc(t(f));
  const val = (m) => (lang === "ko" && m.valueKo ? m.valueKo : m.value);
  const has = (f) => !!(f && (typeof f === "string" ? f : t(f)));
  const projects = P.projects.slice().sort((a, b) => a.order - b.order);
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
  const axes = P.axes || [];
  const axisById = Object.fromEntries(axes.map((a) => [a.id, a]));
  const kindLabel = (p) => t(P.kinds[p.kind]);
  const shortOf = (p) => t(p.shortTitle || p.title);
  const fileName = (src) => String(src).split("/").pop();
  const imgFor = (p, src) => (p.images || []).find((im) => im.src === src);
  const altFor = (p, src) => { const im = imgFor(p, src); return im ? t(im.alt) : t(p.title); };
  const pAxes = (p) => (p.axes || []).filter((a) => axisById[a]);
  const countFor = (axisId) => projects.filter((p) => pAxes(p).includes(axisId)).length;
  const pageLabel = (i, n) => (lang === "ko" ? `${i} / ${n}${L("pageOf")}` : `${L("pageOf")} ${i} / ${n}`);
  const projectHref = (id) => (PAGE === "work" ? `#${id}` : `work.html#${id}`);
  const BASE_TITLE = "Daehee Koo";

  const ICON = {
    copy: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M11 5V3.5A1.5 1.5 0 0 0 9.5 2h-6A1.5 1.5 0 0 0 2 3.5v6A1.5 1.5 0 0 0 3.5 11H5"/></svg>',
    check: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 8.5l3 3 7-7"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>',
    back: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M13 8H3M7 4L3 8l4 4"/></svg>',
    chev: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true" style="width:13px;height:13px"><path d="M6 3.5L10.5 8 6 12.5"/></svg>',
    ext: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M5 11l6-6M6 5h5v5"/></svg>',
    close: '<svg class="icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8"/></svg>'
  };

  /* ------------------------------------------------------------ Color tokens from content */
  function hexToRgb(h) {
    h = String(h).replace("#", "");
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    const n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function rgbToHsl(rgb) {
    const [r, g, b] = rgb.map((c) => c / 255);
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0;
    const l = (max + min) / 2;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h *= 60;
    }
    return [h, s, l];
  }
  const hsl = (h, s, l) => `hsl(${h.toFixed(1)} ${(s * 100).toFixed(1)}% ${(l * 100).toFixed(1)}%)`;
  const tint = (hex, amt) => { const c = hexToRgb(hex).map((v) => Math.round(v * amt + 255 * (1 - amt))); return `rgb(${c.join(" ")})`; };

  function writeTokens() {
    let css = "";
    projects.forEach((p) => {
      const acc = p.accent || "#777777";
      const [ah, as, al] = rgbToHsl(hexToRgb(acc));
      let g = tint(acc, 0.18);
      if (p.cover && p.cover.bg) {
        const [, s, l] = rgbToHsl(hexToRgb(p.cover.bg));
        if (s > 0.2 || l < 0.9) g = p.cover.bg;   // keep the cover hint unless it would vanish into white
      }
      css += `--g-${p.id}:${g};--a-${p.id}:${hsl(ah, as, Math.min(al, 0.47))};--gd-${p.id}:${tint(acc, 0.1)};`;
    });
    // Axis colors, toned down to sit on white next to light-gray tiles.
    axes.forEach((a) => {
      const [h, s] = rgbToHsl(hexToRgb(a.color));
      css += `--x-${a.id}:${hsl(h, Math.min(s, 0.58), 0.5)};`;
    });
    $("#project-tokens").textContent = `:root{${css}}`;
  }
  const groundVars = (p) => `--g:var(--g-${p.id});--a:var(--a-${p.id});`;
  const xc = (id) => `--xc:var(--x-${id})`;

  /* ------------------------------------------------------------ Language */
  function initialLang() {
    let q = null;
    try { q = new URLSearchParams(location.search).get("lang"); } catch (e) {}
    if (q === "en" || q === "ko") return q;
    try { const s = localStorage.getItem("dk-lang"); if (s === "en" || s === "ko") return s; } catch (e) {}
    return (P.meta && P.meta.defaultLang) || "en";
  }
  function setLang(next) {
    lang = next;
    try { localStorage.setItem("dk-lang", next); } catch (e) {}
    try {
      const u = new URL(location.href);
      if (u.searchParams.has("lang")) { u.searchParams.set("lang", next); history.replaceState(history.state, "", u); }
    } catch (e) {}
    renderAll();
  }

  /* ------------------------------------------------------------ Copy email */
  function announce(msg) { const a = $("#announcer"); if (!a) return; a.textContent = ""; setTimeout(() => { a.textContent = msg; }, 30); }
  function copyEmail(btn) {
    const email = P.profile.email;
    const label = btn.dataset.copyLabel || L("copyEmail");
    const done = () => {
      btn.innerHTML = ICON.check + `<span>${esc(L("copied"))}</span>`;
      announce(L("copied"));
      clearTimeout(btn._t);
      btn._t = setTimeout(() => { btn.innerHTML = ICON.copy + `<span>${esc(label)}</span>`; }, 1800);
    };
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove(); done();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(email).then(done, fallback);
    else fallback();
  }

  /* ------------------------------------------------------------ Top bar and footer */
  /* Top-right index after gabrielvaldivia.com:
     - at the top: the pages other than the current one, then "More";
     - after scrolling: the links shrink and slide right into one round frosted button;
     - "More" or the round button opens a frosted panel with every page (current one black with a dot)
       and the language switch. */
  const PAGES = [
    { id: "home", href: "index.html", label: () => L("home") },
    { id: "work", href: "work.html", label: () => N("work") },
    { id: "about", href: "about.html", label: () => N("about") },
    { id: "cv", href: () => P.profile.cv && P.profile.cv.href, label: () => "CV", ext: true }
  ];
  const pageHref = (pg) => (typeof pg.href === "function" ? pg.href() : pg.href);
  function renderTop() {
    const pr = P.profile;
    const pages = PAGES.filter((pg) => pageHref(pg));
    const shown = pages.filter((pg) => pg.id !== PAGE).slice(0, 3);
    const linkAttrs = (pg) => `href="${esc(pageHref(pg))}"${pg.ext ? ' target="_blank" rel="noopener"' : ""}`;
    $("#top").innerHTML = `
      <a class="name" href="${PAGE === "home" ? "#top" : "index.html"}">${T(pr.name)}</a>
      <nav class="tnav" id="tnav" aria-label="${esc(L("mainNav"))}">
        <div class="tnav-links">
          ${shown.map((pg) => `<div class="tnav-it"><a ${linkAttrs(pg)}>${esc(pg.label())}</a></div>`).join("")}
          <div class="tnav-it"><button class="tnav-more" type="button" data-menu aria-expanded="false" aria-controls="tmenu">${esc(L("more"))}</button></div>
        </div>
        <button class="tnav-round" type="button" data-menu aria-expanded="false" aria-controls="tmenu" aria-label="${esc(L("openMenu"))}"><span></span><span></span></button>
        <div class="tnav-panel" id="tmenu">
          <button class="tnav-close" type="button" data-menu-close aria-label="${esc(L("closeMenu"))}"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9"/></svg></button>
          <ul>
            ${pages.map((pg) => `<li><a ${linkAttrs(pg)}${pg.id === PAGE ? ' aria-current="page"' : ""}>${esc(pg.label())}${pg.ext ? " ↗" : ""}</a></li>`).join("")}
            <li class="tnav-sep"><button type="button" data-lang lang="${lang === "en" ? "ko" : "en"}">${esc(L("switchLang"))}</button></li>
          </ul>
        </div>
      </nav>`;
    layoutTopNav();
    onScrollNav();
  }
  /* Each link slides right by its distance to the round button, so the row folds into it. */
  function layoutTopNav() {
    const row = $(".tnav-links");
    if (!row) return;
    $$(".tnav-it", row).forEach((it) => it.style.setProperty("--dx", `${row.offsetWidth - (it.offsetLeft + it.offsetWidth)}px`));
  }
  function onScrollNav() {
    const nav = $("#tnav");
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }
  function setMenu(open) {
    const nav = $("#tnav");
    if (!nav) return;
    nav.classList.toggle("is-open", open);
    $$("[data-menu]", nav).forEach((b) => b.setAttribute("aria-expanded", String(open)));
    if (open) { const cur = $('.tnav-panel a[aria-current="page"]', nav) || $(".tnav-panel a", nav); if (cur) setTimeout(() => cur.focus({ preventScroll: true }), 60); }
  }
  window.addEventListener("scroll", onScrollNav, { passive: true });
  document.addEventListener("keydown", (e) => {
    const nav = $("#tnav");
    if (e.key === "Escape" && nav && nav.classList.contains("is-open")) { setMenu(false); const b = $(nav.classList.contains("is-scrolled") ? ".tnav-round" : ".tnav-more", nav); if (b) b.focus(); }
  });
  document.addEventListener("pointerdown", (e) => {
    const nav = $("#tnav");
    if (nav && nav.classList.contains("is-open") && !e.target.closest(".tnav-panel") && !e.target.closest("[data-menu]")) setMenu(false);
  });
  function renderFoot() {
    const pr = P.profile;
    const home = PAGE === "home";
    $("#foot").innerHTML = `
      <div class="foot-grid">
        <div><p class="foot-name">${T(pr.name)}</p><p class="foot-role">${T(pr.role)}</p></div>
        <nav class="foot-links" aria-label="${esc(N("contact"))}">
          <a href="work.html">${esc(N("work"))}</a>
          <a href="about.html">${esc(N("about"))}</a>
          <a href="mailto:${esc(pr.email)}">${esc(L("email"))}</a>
          ${pr.github ? `<a href="${esc(pr.github.href)}" target="_blank" rel="noopener">${esc(L("github"))}</a>` : ""}
          ${pr.cv ? `<a href="${esc(pr.cv.href)}" target="_blank" rel="noopener">CV</a>` : ""}
          <button type="button" data-lang lang="${lang === "en" ? "ko" : "en"}">${esc(L("switchLang"))}</button>
        </nav>
      </div>
      <div class="foot-base">
        <span>${T(pr.location)} · ${esc(L("city"))} <span class="foot-clock" id="clock"></span></span>
        ${P.meta && P.meta.updated ? `<span>${esc(L("updated"))} ${esc(P.meta.updated)}</span>` : ""}
      </div>`;
    tick();
  }
  let clockFmt = null;
  try { clockFmt = new Intl.DateTimeFormat("en-GB", { timeZone: P.profile.timezone || "Asia/Seoul", hour: "2-digit", minute: "2-digit", second: "2-digit", hourCycle: "h23" }); } catch (e) {}
  function tick() { const el = $("#clock"); if (el && clockFmt) el.textContent = clockFmt.format(new Date()); }
  setInterval(tick, 1000);

  /* ------------------------------------------------------------ Tags */
  const axisTags = (p) => pAxes(p).map((a) => `<span class="tag" style="${xc(a)}"><span class="dot"></span>${T(axisById[a].label)}</span>`).join("");

  /* ------------------------------------------------------------ Project art */
  function flowHTML(p, opts) {
    const steps = p.steps || [];
    const box = (s) => `<li><span class="fbox">${T(s)}</span></li>`;
    const frameLabel = opts.frame ? (p.stack || []).find((s) => opts.frame.test(s)) : null;
    const dirClass = opts.dir === "h" ? "flow flow-h" : "flow";
    if (frameLabel && steps.length >= 3) {
      const inner = steps.slice(1, -1).map(box).join("");
      return `<ol class="${dirClass}">${box(steps[0])}
        <li class="flow-group-li"><div class="flow-group"><span class="flow-frame">${esc(frameLabel)}</span><ol class="${opts.innerDir === "h" ? "flow flow-h" : "flow"}">${inner}</ol></div></li>
        ${box(steps[steps.length - 1])}</ol>`;
    }
    return `<ol class="${dirClass}">${steps.map(box).join("")}</ol>`;
  }

  /* The picture for a project: ctx "card" sits on the project's own ground, "gray" on a light-gray tile. */
  function artHTML(p, ctx) {
    const c = p.cover || {};
    const cfg = ART[p.id] || {};
    const mode = cfg[ctx];
    const img = (src, cls) => `<img${cls ? ` class="${cls}"` : ""} src="${esc(src)}" alt="${esc(altFor(p, src))}" loading="lazy">`;
    if (mode === "wide" && c.wide) return `<div class="art">${img(c.wide, "art-wide")}</div>`;
    if (mode === "contain" && c.wide) return `<div class="art art-contain">${img(c.wide)}</div>`;
    if (mode === "float" && c.phones) return `<div class="art art-float">${c.phones.slice(0, 2).map((s) => img(s)).join("")}</div>`;
    if (mode === "phones" || c.type === "phones") return `<div class="art art-phones">${(c.phones || []).slice(0, 2).map((s) => img(s)).join("")}</div>`;
    if (c.type === "steps" && p.steps && p.steps.length) return `<div class="art art-flow">${flowHTML(p, { dir: cfg.flow || "v", frame: cfg.frame, innerDir: "v" })}</div>`;
    const src = c.image || (p.images[0] && p.images[0].src);
    const im = imgFor(p, src);
    if (im && im.kind === "poster") {
      const sheets = (p.images || []).filter((x) => x.kind === "poster").slice(0, 2);
      return `<div class="art art-poster">${sheets.map((s) => `<div class="sheet"><img src="${esc(s.src)}" alt="${T(s.alt)}" loading="lazy"></div>`).join("")}</div>`;
    }
    return src ? `<div class="art art-panel"><div class="panel">${img(src)}</div></div>` : "";
  }

  /* ------------------------------------------------------------ Demo phone */
  const demos = [];
  function createDemo(p) {
    const d = p.demo;
    const auto = !reduceMotion;
    const crop = POSTER_CROP[fileName(d.poster)];
    const phone = document.createElement("div");
    phone.className = "phone";
    phone.innerHTML = `<div class="phone-screen" style="background-image:url('${esc(d.poster)}');${crop ? `--poster-size:${crop.size};--poster-pos:${crop.pos};` : ""}">
        <iframe class="is-pending" src="${esc(d.src)}?autoplay=${auto ? 1 : 0}" loading="lazy" width="${d.w || 390}" height="${d.h || 844}"></iframe></div>`;
    const iframe = $("iframe", phone);
    const screen = $(".phone-screen", phone);
    const fit = () => { const w = screen.clientWidth; if (w) iframe.style.setProperty("--s", (w / (d.w || 390)).toFixed(4)); };
    if ("ResizeObserver" in window) new ResizeObserver(fit).observe(screen);
    requestAnimationFrame(fit);
    const comp = {
      p, phone, iframe, el: null, playing: auto, screen: null, revealed: false,
      send(msg) { try { iframe.contentWindow && iframe.contentWindow.postMessage(msg, "*"); } catch (e) {} },
      reveal() { if (!comp.revealed) { comp.revealed = true; iframe.classList.remove("is-pending"); } },
      goto(id) { comp.send({ type: "demo:goto", screen: id }); comp.onScreen(id); },
      setPlaying(on) { comp.playing = on; comp.send({ type: "demo:autoplay", on }); comp.update(); },
      onScreen(id) { comp.screen = id; comp.update(); },
      update() {
        iframe.title = `${L("demoOf")} ${t(p.title)}`;
        if (!comp.el) return;
        const tour = $("[data-tour]", comp.el);
        if (tour) { tour.textContent = comp.playing ? L("stopTour") : L("playTour"); tour.setAttribute("aria-pressed", String(!comp.playing)); }
        $$("[data-screen]", comp.el).forEach((b) => { const on = b.dataset.screen === comp.screen; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
        const sc = (d.screens || []).find((s) => s.id === comp.screen);
        const live = $("[data-live-text]", comp.el);
        if (live) live.textContent = L("liveDemo") + (sc ? ` · ${t(sc.label)}` : "");
      }
    };
    iframe.addEventListener("load", fit);
    demos.push(comp);
    return comp;
  }
  function dropDemo(comp) { const i = demos.indexOf(comp); if (i >= 0) demos.splice(i, 1); }
  window.addEventListener("message", (e) => {
    const data = e.data;
    if (!data || typeof data !== "object" || typeof data.type !== "string" || data.type.indexOf("demo:") !== 0) return;
    const c = demos.find((x) => x.iframe.contentWindow === e.source);
    if (!c) return;
    c.reveal();
    if (data.type === "demo:screen" && data.screen) c.onScreen(data.screen);
  });
  // A tap inside a demo moves focus into its iframe: reveal it even if it has not posted yet.
  window.addEventListener("blur", () => setTimeout(() => {
    const a = document.activeElement;
    const c = a && a.tagName === "IFRAME" && demos.find((x) => x.iframe === a);
    if (c) c.reveal();
  }, 0));
  /* Fit a phone into a box by height and width. */
  function fitPhone(phone, box, maxW, byHeightOnly) {
    if (!box || !box.clientHeight) return;
    const cs = getComputedStyle(box);
    const h = box.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const w = byHeightOnly ? Infinity : box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const bz = 16;
    const byH = (h - bz) * 390 / 844 + bz;
    phone.style.width = Math.max(120, Math.floor(Math.min(w, byH, maxW || 340))) + "px";
  }

  /* ------------------------------------------------------------ Documents and posters */
  const DOCS = {};
  projects.forEach((p) => (p.docs || []).forEach((d) => { DOCS[d.id] = d; }));
  function docHTML(d) {
    const n = d.pages.length, title = t(d.title);
    const bar = `<div class="doc-bar"><span class="doc-title">${esc(title)}</span><span class="doc-count">${n} ${esc(L("pagesN"))}</span>
      ${d.pdf ? `<a class="btn" href="${esc(d.pdf)}" target="_blank" rel="noopener">${esc(L("openPdf"))} ${ICON.ext}</a>` : ""}</div>`;
    if (d.kind === "slides") {
      return `<div class="doc doc-slides" tabindex="0" data-doc="${esc(d.id)}" data-i="0" role="group" aria-roledescription="slides" aria-label="${esc(title)}">
        ${bar}
        <div class="slide-stage" style="aspect-ratio:${esc(d.aspect || "16 / 9")}"><img src="${esc(d.pages[0])}" alt="${esc(title)}, ${esc(pageLabel(1, n))}" data-slide-img></div>
        <div class="slide-nav">
          <button class="btn" type="button" data-slide="-1" disabled>← ${esc(L("prev"))}</button>
          <span class="slide-count" aria-live="polite" data-slide-count>${esc(pageLabel(1, n))}</span>
          <span class="slide-hint">${esc(L("keysHint"))}</span>
          <button class="btn" type="button" data-slide="1"${n < 2 ? " disabled" : ""}>${esc(L("next"))} →</button>
        </div></div>`;
    }
    const pages = d.pages.map((src, i) => `<figure class="doc-page"><img src="${esc(src)}" loading="lazy" alt="${esc(title)}, ${esc(pageLabel(i + 1, n))}" style="aspect-ratio:${esc(d.aspect || "1 / 1.414")}"><figcaption>${esc(pageLabel(i + 1, n))}</figcaption></figure>`).join("");
    return `<div class="doc doc-paper">${bar}<div class="doc-scroll" tabindex="0" role="region" aria-label="${esc(title)}">${pages}</div></div>`;
  }
  function stepSlides(viewer, dir) {
    const d = viewer && DOCS[viewer.dataset.doc];
    if (!d) return;
    const n = d.pages.length;
    const i = Math.max(0, Math.min(n - 1, Number(viewer.dataset.i || 0) + dir));
    viewer.dataset.i = String(i);
    const img = $("[data-slide-img]", viewer);
    img.src = d.pages[i];
    img.alt = `${t(d.title)}, ${pageLabel(i + 1, n)}`;
    $("[data-slide-count]", viewer).textContent = pageLabel(i + 1, n);
    $('[data-slide="-1"]', viewer).disabled = i === 0;
    $('[data-slide="1"]', viewer).disabled = i === n - 1;
    if (d.pages[i + 1]) { const pre = new Image(); pre.src = d.pages[i + 1]; }
  }
  function postersHTML(list) {
    return `<div class="posters">${list.map((im) => `<button class="poster" type="button" data-lightbox="${esc(im.src)}" data-caption="${T(im.caption)}">
        <img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy">
        <span class="poster-cap"><span>${T(im.caption)}</span><span>${esc(L("enlarge"))}</span></span></button>`).join("")}</div>`;
  }
  function openLightbox(src, caption, opener) {
    const dlg = $("#lightbox");
    if (!dlg || !dlg.showModal) { window.open(src, "_blank", "noopener"); return; }
    const img = $("img", dlg);
    img.src = src; img.alt = caption || "";
    $(".lb-title", dlg).textContent = caption || "";
    const closeBtn = $("[data-lb-close]", dlg);
    closeBtn.innerHTML = `<span>${esc(L("close"))}</span>${ICON.close}`;
    dlg._opener = opener;
    dlg.showModal();
    $(".lb-scroll", dlg).scrollTop = 0;
    closeBtn.focus();
  }

  /* ------------------------------------------------------------ Shared small renderers */
  function dotPlotHTML(p) {
    const c = p.chart, ax = c.axis;
    const pos = (v) => Math.max(0, Math.min(100, ((v - ax.min) / (ax.max - ax.min)) * 100));
    const unit = c.unit ? ` ${esc(c.unit)}` : "";
    const rows = c.bars.map((b) => {
      const x = pos(b.value);
      return `<div class="dp-row tone-${esc(b.tone || "base")}"><span class="dp-label">${T(b.label)}</span>
        <span class="dp-track"><span class="dp-dot" style="--x:${x}%"></span><span class="dp-val${x > 72 ? " is-left" : ""}" style="--x:${x}%">${esc(b.value)}${unit}</span></span></div>`;
    }).join("");
    const ticks = (ax.ticks || []).map((v) => `<span style="--x:${pos(v)}%">${esc(v)}</span>`).join("");
    const grid = (ax.ticks || []).map((v) => `<span style="--x:${pos(v)}%"></span>`).join("");
    return `<div class="dp"><div class="dp-grid" aria-hidden="true">${grid}</div>${rows}<div class="dp-axis" aria-hidden="true"><span></span><span class="dp-ticks">${ticks}</span></div></div>`;
  }
  function chartHTML(p) {
    const c = p.chart;
    const present = new Set(c.bars.map((b) => b.tone || "base"));
    const key = { base: "baseline", good: "improved", best: "best", bad: "worse" };
    const legend = ["base", "good", "best", "bad"].filter((k) => present.has(k)).map((k) => `<li class="tone-${k}"><i></i>${esc(L(key[k]))}</li>`).join("");
    return `<figure style="margin:0">${has(c.title) ? `<p class="chart-title">${T(c.title)}</p>` : ""}${dotPlotHTML(p)}
      <ul class="dp-legend">${legend}</ul>${has(c.caption) ? `<figcaption class="chart-cap">${T(c.caption)}</figcaption>` : ""}</figure>`;
  }
  function tableHTML(p) {
    const tb = p.table, hl = tb.highlight || [];
    const head = tb.columns.map((c) => `<th scope="col">${T(c)}</th>`).join("");
    const body = tb.rows.map((r, ri) => `<tr>${r.map((cell, ci) => ci === 0
      ? `<th scope="row">${T(cell)}</th>`
      : `<td${hl[0] === ri && hl[1] === ci ? ' class="is-hl"' : ""}>${T(cell)}</td>`).join("")}</tr>`).join("");
    return `<div class="table-wrap"><table class="tbl">${has(tb.title) ? `<caption>${T(tb.title)}</caption>` : ""}<thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  /* =================================================================== PROJECT VIEW (work.html#id) */
  const pv = { p: null, demo: null, indexScroll: 0 };

  function visualKind(p) {
    const c = p.cover || {};
    const im = c.image ? imgFor(p, c.image) : null;
    if (im && im.kind === "poster") return "poster";
    if (im) return "image";
    if (c.wide && imgFor(p, c.wide)) return ART[p.id] && ART[p.id].gray === "contain" ? "contain" : "wide";
    if (p.steps && p.steps.length) return "steps";
    return null;
  }
  function visualHTML(p, kind) {
    const c = p.cover || {};
    const cap = (im) => (im && has(im.caption) ? `<p class="cap">${T(im.caption)}</p>` : "");
    if (kind === "poster") {
      const ps = (p.images || []).filter((im) => im.kind === "poster");
      return `<div class="pv-block pv-wide"><div class="gpanel"><p class="eyebrow gpanel-label">${esc(L("poster"))}</p>${postersHTML(ps)}</div></div>`;
    }
    if (kind === "image") {
      const im = imgFor(p, c.image);
      return `<figure class="pv-block pv-col" style="margin-top:clamp(40px,4.4vw,64px)"><div class="gpanel"><div class="wfig"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy"></div></div>${cap(im)}</figure>`;
    }
    if (kind === "wide") {
      const im = imgFor(p, c.wide);
      return `<figure class="pv-block pv-col" style="margin-top:clamp(40px,4.4vw,64px)"><div class="pv-visual"><img class="wide" src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy"></div>${cap(im)}</figure>`;
    }
    if (kind === "contain") {
      const im = imgFor(p, c.wide);
      return `<figure class="pv-block pv-col" style="margin-top:clamp(40px,4.4vw,64px)"><div class="gpanel" style="display:grid;place-items:center"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy" style="max-height:560px;width:auto;max-width:100%"></div>${cap(im)}</figure>`;
    }
    if (kind === "steps") return flowBlock(p, true);
    return "";
  }
  function flowBlock(p, framed) {
    const cfg = ART[p.id] || {};
    return `<div class="pv-block pv-col"><div class="gpanel"><p class="eyebrow gpanel-label">${esc(L("pipeline"))}</p>${flowHTML(p, { dir: "h", frame: framed ? cfg.frame : null, innerDir: "h" })}</div></div>`;
  }

  function pvTopHTML(p, kind) {
    const rows = [
      ["role", T(p.role)], ["org", T(p.org)], ["period", T(p.period)], ["team", T(p.team)],
      ["axesL", `<div class="tags">${axisTags(p)}</div>`],
      ["stack", (p.stack || []).length ? `<div class="tags">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>` : ""]
    ].filter(([, v]) => v);
    const metrics = (p.metrics || []);
    const prow = (k, body) => `<div class="prow"><h2 class="prow-k">${esc(k)}</h2><div class="prow-v">${body}</div></div>`;
    const ul = (items) => `<ul class="plist plist--plain">${items.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>`;
    const parts = [];
    if (has(p.problem)) parts.push(prow(L("problem"), `<p>${T(p.problem)}</p>`));
    if (tl(p.approach).length) parts.push(prow(L("approach"), ul(tl(p.approach))));
    if (tl(p.outcome).length) parts.push(prow(L("outcome"), ul(tl(p.outcome))));
    if (has(p.learned)) parts.push(prow(L("learned"), `<p>${T(p.learned)}</p>`));
    if (has(p.retro)) parts.push(prow(L("retro"), `<p>${T(p.retro)}</p>`));
    return `
      <a class="pv-back" href="#" data-back>${ICON.back}<span>${esc(L("allWork"))}</span></a>
      <header class="pv-hero">
        <p class="eyebrow">${esc(kindLabel(p))} · ${esc(p.year)}</p>
        <h1 class="pv-short" id="pv-title" tabindex="-1">${esc(shortOf(p))}</h1>
        ${shortOf(p) !== t(p.title) ? `<p class="pv-title">${T(p.title)}</p>` : ""}
        ${has(p.headline) ? `<p class="pv-headline">${T(p.headline)}</p>` : ""}
      </header>
      <div class="pv-col pv-intro">
        ${has(p.summary) ? `<p class="pv-summary">${T(p.summary)}</p>` : "<div></div>"}
        <dl class="mtable">${rows.map(([k, v]) => `<dt>${esc(L(k))}</dt><dd>${v}</dd>`).join("")}</dl>
      </div>
      ${visualHTML(p, kind)}
      ${metrics.length ? `<div class="pv-block pv-col"><div class="metrics" style="--mcols:${Math.min(4, metrics.length)}">${metrics.map((m) => `<div class="metric"><div class="metric-v">${esc(val(m))}</div><div class="metric-l">${T(m.label)}</div></div>`).join("")}</div></div>` : ""}
      ${parts.length ? `<div class="pv-block pv-col prows">${parts.join("")}</div>` : ""}
      ${kind !== "steps" && p.steps && p.steps.length ? flowBlock(p, false) : ""}
      ${p.chart && p.chart.type === "dot" ? `<div class="pv-block pv-col"><div class="gpanel">${chartHTML(p)}</div></div>` : ""}
      ${p.table && p.table.rows && p.table.rows.length ? `<div class="pv-block pv-col">${tableHTML(p)}</div>` : ""}`;
  }

  function pvRestHTML(p, kind) {
    const c = p.cover || {};
    const used = new Set();
    if (kind === "image") used.add(c.image);
    if (kind === "wide" || kind === "contain") used.add(c.wide);
    if (kind === "poster") (p.images || []).filter((im) => im.kind === "poster").forEach((im) => used.add(im.src));
    const imgs = (p.images || []).filter((im) => !used.has(im.src));
    const capOf = (im) => (has(im.caption) ? `<figcaption class="cap">${T(im.caption)}</figcaption>` : "");
    const blocks = [];
    imgs.filter((im) => im.kind === "wide").forEach((im) => blocks.push(`<figure class="fig fig-wide"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy">${capOf(im)}</figure>`));
    const plots = imgs.filter((im) => im.kind === "plot");
    if (plots.length) blocks.push(`<div class="figs ${plots.length > 1 ? "figs-2" : ""}">${plots.map((im) => `<figure class="fig fig-plot"><div class="wfig"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy"></div>${capOf(im)}</figure>`).join("")}</div>`);
    imgs.filter((im) => im.kind === "photo").forEach((im) => blocks.push(`<figure class="fig fig-photo"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy">${capOf(im)}</figure>`));
    const posters = imgs.filter((im) => im.kind === "poster");
    if (posters.length) blocks.push(postersHTML(posters));
    const phones = imgs.filter((im) => im.kind === "phone");
    let out = "";
    if (blocks.length) out += `<div class="pv-block pv-col"><p class="eyebrow" style="margin-bottom:18px">${esc(L("figures"))}</p><div class="figs">${blocks.join("")}</div></div>`;
    if (phones.length) out += `<div class="pv-block pv-col"><p class="eyebrow" style="margin-bottom:18px">${esc(L("screens"))}</p><div class="phone-row">${phones.map((im) => `<figure class="fig"><img src="${esc(im.src)}" alt="${T(im.alt)}" loading="lazy">${capOf(im)}</figure>`).join("")}</div></div>`;
    if ((p.docs || []).length) out += `<div class="pv-block pv-col"><p class="eyebrow" style="margin-bottom:18px">${esc(L("documents"))}</p>${p.docs.map(docHTML).join("")}</div>`;
    const links = (p.links || []).filter((l) => l && l.href);
    if (links.length) out += `<div class="pv-block pv-col prows"><div class="prow"><h2 class="prow-k">${esc(L("links"))}</h2><div class="prow-v links">${links.map((l) => `<a class="btn" href="${esc(l.href)}" target="_blank" rel="noopener">${T(l.label)} ${ICON.ext}</a>`).join("")}</div></div></div>`;
    const i = projects.indexOf(p);
    const prev = projects[(i - 1 + projects.length) % projects.length];
    const next = projects[(i + 1) % projects.length];
    out += `<nav class="pv-block pv-col pager" aria-label="${esc(L("prev"))} / ${esc(L("next"))}" style="margin-bottom:clamp(72px,8vw,128px)">
        <a href="#${esc(prev.id)}"><small>← ${esc(L("prev"))}</small><span>${esc(shortOf(prev))}</span></a>
        <a href="#${esc(next.id)}"><small>${esc(L("next"))} →</small><span>${esc(shortOf(next))}</span></a></nav>`;
    return out;
  }

  function buildDemoPlate(p) {
    const comp = createDemo(p);
    const el = document.createElement("div");
    el.className = "demo-plate";
    el.setAttribute("style", `--g:var(--gd-${p.id})`);
    el.innerHTML = `<div class="demo-phone"></div>
      <div class="demo-side">
        <span class="live"><span class="live-dot" aria-hidden="true"></span><span class="live-text" data-live-text></span></span>
        <h2 class="demo-title" data-demo-title></h2>
        <p class="demo-note" data-note></p>
        <p class="eyebrow" data-screens-label></p>
        <div class="screens" role="group" data-screens></div>
        <div><button class="btn" type="button" data-tour style="background:var(--bg)"></button></div>
      </div>`;
    $(".demo-phone", el).appendChild(comp.phone);
    const screens = $("[data-screens]", el);
    screens.addEventListener("click", (e) => { const b = e.target.closest("[data-screen]"); if (b) comp.goto(b.dataset.screen); });
    $("[data-tour]", el).addEventListener("click", () => comp.setPlaying(!comp.playing));
    comp.el = el;
    const base = comp.update;
    comp.update = function () {
      $("[data-demo-title]", el).textContent = L("tryIt");
      $("[data-note]", el).textContent = t(p.demo.note);
      $("[data-screens-label]", el).textContent = L("screens");
      screens.setAttribute("aria-label", L("screens"));
      screens.innerHTML = (p.demo.screens || []).map((s) => `<button class="btn" type="button" data-screen="${esc(s.id)}">${T(s.label)}</button>`).join("");
      base();
    };
    comp.update();
    return comp;
  }

  /* Keep the enormous title on one line from 640px up by shrinking it if it would overflow. */
  function fitShortTitle() {
    const h = $("#pv-title");
    if (!h) return;
    h.style.fontSize = "";
    if (window.matchMedia("(max-width: 639px)").matches) return;
    const box = h.parentElement.clientWidth;
    const need = h.scrollWidth;
    if (need > box) h.style.fontSize = (parseFloat(getComputedStyle(h).fontSize) * (box / need) * 0.98).toFixed(1) + "px";
  }

  function renderProject(p, keepDemo) {
    const kind = visualKind(p);
    $("#pv-a").innerHTML = pvTopHTML(p, kind);
    const slot = $("#pv-demo");
    if (keepDemo && pv.demo && pv.demo.p.id === p.id) pv.demo.update();
    else {
      if (pv.demo) { dropDemo(pv.demo); pv.demo = null; }
      slot.innerHTML = "";
      if (p.demo) { pv.demo = buildDemoPlate(p); slot.appendChild(pv.demo.el); }
    }
    slot.hidden = !p.demo;
    $("#pv-b").innerHTML = pvRestHTML(p, kind);
    $("#pv").setAttribute("style", groundVars(p));
    pv.p = p;
    fitShortTitle();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitShortTitle);
  }

  /* =================================================================== HOME */
  const home = { built: false, demo: null, hlAxis: null, hlRegion: null };



  /* ------------------------------------------------------------ Hero and featured row */
  /* Mosaic on a six-column grid (as in the gallery version): how many columns each card spans. */
  const SPAN = { uniway: 4, demo: 2, cj: 2, uai: 2, shoulder: 2, smeal: 2, los: 4, emg: 4, more: 2 };
  const span = (id) => `--span:${SPAN[id] || 2};`;
  function cardHTML(p) {
    return `<li class="fcard" id="card-${esc(p.id)}" style="${groundVars(p)}${span(p.id)}">
      <a class="fcard-link" href="${projectHref(p.id)}">
        <div class="fcard-art" aria-hidden="true">${artHTML(p, "card")}</div>
        <div class="fcard-text">
          <p class="fcard-meta">${esc(p.year)} · ${T(p.role)}</p>
          <h3 class="fcard-title">${esc(shortOf(p))}</h3>
          <p class="fcard-line">${T(p.oneLiner)}</p>
          <div class="fcard-foot"><span class="tags">${axisTags(p)}</span></div>
        </div>
      </a></li>`;
  }
  /* The Uniway row holds the live demo, so it is not one big link: the phone takes taps. */
  function demoCardHTML(p) {
    return `<li class="fcard fcard--demo" id="card-demo" style="--g:var(--gd-${esc(p.id)});${span("demo")}">
      <div class="fcard-link">
        <div class="fcard-art"></div>
        <div class="fcard-text">
          <div class="fcard-demo-cap"><span class="live"><span class="live-dot" aria-hidden="true"></span><span class="live-text" data-live-text></span></span>
            <button class="btn btn-mini" type="button" data-tour></button></div>
          <h3 class="fcard-title"><a href="${projectHref(p.id)}" data-d-title></a></h3>
          <p class="fcard-hint" data-hint></p>
          <a class="more-link" href="${projectHref(p.id)}" data-demo-link></a>
        </div></div></li>`;
  }
  function moreCardHTML() {
    return `<li class="fcard fcard--more" id="card-more" style="${span("more")}">
      <a class="fcard-link" href="work.html">
        <div class="fcard-text">
          <h3 class="fcard-title">${esc(N("work"))}</h3>
          <p class="fcard-line">${esc(L("allWork"))} · ${projects.length}</p>
          <div class="fcard-foot">${P.axes.map((a) => `<span class="tag" style="${xc(a.id)}"><span class="dot"></span>${T(a.label)}</span>`).join("")}</div>
          <span class="more-link"><span>${esc(L("seeAll"))}</span>${ICON.chev}</span>
        </div></a></li>`;
  }
  function attachDemo(li, p) {
    const comp = createDemo(p);
    $(".fcard-art", li).appendChild(comp.phone);
    $("[data-tour]", li).addEventListener("click", () => comp.setPlaying(!comp.playing));
    comp.el = li;
    const base = comp.update;
    comp.update = function () {
      base();
      $("[data-d-title]", li).textContent = shortOf(p);
      $("[data-hint]", li).textContent = L("tapHint");
      $("[data-demo-link]", li).innerHTML = `<span>${esc(L("viewProject"))}</span>${ICON.chev}`;
    };
    comp.update();
    return comp;
  }
  function fitDemoCard() { if (home.demo) fitPhone(home.demo.phone, $(".fcard-art", home.demo.el), 340, true); }

  function renderHero() {
    const pr = P.profile;
    $("#hero-text").innerHTML = `
      <div>
        <h1 class="thesis" id="hero-h">${T(P.profile.headline)}</h1>
      </div>`;
    const feed = $("#ftrack");
    feed.setAttribute("aria-label", L("featured"));
    const dp = byId[DEMO_PROJECT];
    if (!home.built) {
      feed.innerHTML = projects.map((p) => cardHTML(p) + (dp && dp.demo && p.id === dp.id ? demoCardHTML(p) : "")).join("") + moreCardHTML();
      const li = $("#card-demo");
      if (li) home.demo = attachDemo(li, dp);
      if ("ResizeObserver" in window && home.demo) new ResizeObserver(fitDemoCard).observe($(".fcard-art", home.demo.el));
    } else {
      projects.forEach((p) => { const old = $("#card-" + p.id); if (old) old.outerHTML = cardHTML(p); });
      const more = $("#card-more"); if (more) more.outerHTML = moreCardHTML();
      if (home.demo) home.demo.update();
    }
    requestAnimationFrame(fitDemoCard);
  }

  /* ------------------------------------------------------------ About */
  function renderAbout() {
    const pr = P.profile;
    const paras = tl(pr.about);
    $("#about").innerHTML = `
      <img class="about-photo" src="${esc(pr.photo)}" alt="${T(pr.name)}" width="1000" height="1221" loading="lazy">
      <div class="about-body">
        <p class="eyebrow" style="margin:0 0 18px">${esc(N("about"))}</p>
        ${paras[0] ? `<p class="statement">${esc(paras[0])}</p>` : ""}
        ${paras.slice(1).map((s) => `<p>${esc(s)}</p>`).join("")}
      </div>`;
  }

  /* ------------------------------------------------------------ Hairline records */
  const row = (when, title, sub, note, go) => `<li><span class="r-when">${when}</span>
    <div class="r-what">${title}${sub ? `<span class="r-sub">${sub}</span>` : ""}${note ? `<span class="r-note">${note}</span>` : ""}</div>${go || "<span></span>"}</li>`;
  function renderRecords() {
    const ed = P.education;
    const out = [];
    const xp = (P.experience || []).map((x) => row(T(x.period),
      x.project && byId[x.project] ? `<a class="r-title" href="${projectHref(x.project)}">${T(x.title)}</a>` : `<span class="r-title">${T(x.title)}</span>`,
      T(x.org), has(x.note) ? T(x.note) : "",
      x.project && byId[x.project] ? `<a class="more-link r-go" href="${projectHref(x.project)}" aria-label="${esc(L("viewProject"))}: ${T(x.title)}"><span>${esc(L("viewProject"))}</span>${ICON.chev}</a>` : ""));
    if (xp.length) out.push(["experience", N("experience"), xp]);
    if (ed) {
      const rows = [row(T(ed.period), `<span class="r-title">${T(ed.school)}</span>`, T(ed.degree),
        [has(ed.gpa) ? T(ed.gpa) : ""].concat(tl(ed.notes).map(esc)).filter(Boolean).join("<br>"), "")];
      if (has(P.language)) rows.push(row(esc(L("language")), `<span class="r-title">${T(P.language)}</span>`, "", "", ""));
      out.push(["education", N("education"), rows]);
    }
    const aw = (P.awards || []).map((a) => row(T(a.date), `<span class="r-title">${T(a.title)}</span>`, T(a.org), has(a.note) ? T(a.note) : "",
      a.href ? `<a class="more-link r-go" href="${esc(a.href)}" target="_blank" rel="noopener"><span>GitHub</span>${ICON.ext}</a>` : ""));
    if (aw.length) out.push(["award", L("awards"), aw]);
    const ow = (P.outreach || []).map((o) => row(T(o.date), `<span class="r-title">${T(o.title)}</span>`, T(o.org), "", ""));
    if (ow.length) out.push(["talks", L("outreach"), ow]);
    const sk = (P.skills || []).map((g) => row(T(g.group), `<span class="r-title" style="font-size:inherit;line-height:1.55">${g.items.map(esc).join(", ")}</span>`, "", "", ""));
    if (sk.length) out.push(["skills", L("skills"), sk]);
    $("#records").innerHTML = out.map(([id, title, rows], i) => `<section class="wrap hsec" id="${id}" aria-labelledby="h-${id}"${i ? ' style="padding-top:clamp(72px,8vw,120px)"' : ""}>
        <div class="hsec-head"><h2 class="h2" id="h-${id}">${esc(title)}</h2></div><ol class="rows">${rows.join("")}</ol></section>`).join("");
  }

  /* ------------------------------------------------------------ Contact */
  /* Contact form after gabrielvaldivia.com: To / From / Subject / Message in one gray box.
     With a Web3Forms access key in content.js (profile.contactForm.accessKey) the message is
     sent straight to my inbox; without one, Send opens the visitor's mail app with the fields filled in. */
  function renderContact() {
    const pr = P.profile;
    $("#contact").innerHTML = `
      <h2 class="contact-big">${T(pr.now)}</h2>
      <div class="cform-box">
        <form class="cform" id="cform" novalidate aria-label="${esc(L("cfForm"))}">
          <div class="cf-row"><span class="cf-k">${esc(L("cfTo"))}</span>
            <div class="cf-to"><span class="cf-v">${esc(pr.email)}</span>
              <button class="cf-copy" type="button" data-copy data-copy-label="${esc(L("copy"))}"><span>${esc(L("copy"))}</span></button></div></div>
          <label class="cf-row"><span class="cf-k">${esc(L("cfFrom"))}</span>
            <input class="cf-in" type="email" name="fromEmail" required maxlength="254" autocomplete="email" placeholder="you@example.com"></label>
          <label class="cf-row"><span class="cf-k">${esc(L("cfSubject"))}</span>
            <input class="cf-in" type="text" name="subject" required maxlength="160"></label>
          <label class="cf-msg"><span class="sr">${esc(L("cfMessage"))}</span>
            <textarea class="cf-in" name="message" required minlength="10" maxlength="5000" rows="4" placeholder="${esc(L("cfMessage"))}"></textarea></label>
          <input type="text" name="website" tabindex="-1" autocomplete="off" class="cf-hp" aria-hidden="true">
          <div class="cf-foot"><button class="cf-send" type="submit">${esc(L("cfSend"))}</button><p class="cf-status" role="status" aria-live="polite"></p></div>
        </form>
      </div>`;
    const form = $("#cform");
    const ta = $("textarea", form);
    const grow = () => { ta.style.height = "auto"; ta.style.height = ta.scrollHeight + "px"; };
    ta.addEventListener("input", grow);
    form.addEventListener("submit", sendContact);
    // A field marked red goes back to normal as soon as the visitor edits it.
    form.addEventListener("input", (e) => {
      const el = e.target;
      if (el.getAttribute && el.getAttribute("aria-invalid") === "true") {
        el.setAttribute("aria-invalid", "false");
        $(".cf-status", form).textContent = "";
      }
    });
  }
  async function sendContact(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const pr = P.profile;
    const status = $(".cf-status", form);
    const btn = $(".cf-send", form);
    const f = (n) => form.elements[n];
    const from = f("fromEmail").value.trim(), subject = f("subject").value.trim(), message = f("message").value.trim();
    [f("fromEmail"), f("subject"), f("message")].forEach((el) => el.setAttribute("aria-invalid", "false"));
    let bad = null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from)) bad = f("fromEmail");
    else if (!subject) bad = f("subject");
    else if (message.length < 10) bad = f("message");
    if (bad) { bad.setAttribute("aria-invalid", "true"); bad.focus(); status.textContent = L(bad.name === "fromEmail" ? "cfBadEmail" : bad.name === "subject" ? "cfBadSubject" : "cfBadMessage"); return; }
    if (f("website").value) return; // honeypot: bots fill it, people never see it
    const cfg = pr.contactForm || {};
    if (!cfg.accessKey) {
      const body = `${message}\n\n— ${from}`;
      location.href = `mailto:${pr.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = L("cfMailApp");
      return;
    }
    // Per-browser cap so one visitor (or a script reusing this page) cannot flood the inbox.
    const DAY = 864e5, cap = cfg.perBrowserPerDay || 3;
    let sent = [];
    try { sent = JSON.parse(localStorage.getItem("cf-sent") || "[]").filter((t) => Date.now() - t < DAY); } catch (err) {}
    if (sent.length >= cap) { status.innerHTML = `${esc(L("cfLimit"))} <a href="mailto:${esc(pr.email)}">${esc(pr.email)}</a>`; return; }
    btn.disabled = true;
    status.textContent = L("cfSending");
    try {
      const res = await fetch(cfg.endpoint || "https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: cfg.accessKey, subject: `[Portfolio] ${subject}`, email: from, replyto: from, from_name: from, message, botcheck: "" })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || res.status);
      try { localStorage.setItem("cf-sent", JSON.stringify(sent.concat(Date.now()))); } catch (err) {}
      form.reset();
      f("message").style.height = "auto";
      status.textContent = L("cfSent");
    } catch (err) {
      status.innerHTML = `${esc(L("cfFailed"))} <a href="mailto:${esc(pr.email)}">${esc(pr.email)}</a>`;
    } finally {
      btn.disabled = false;
    }
  }

  function renderHome() {
    renderHero();
    renderAbout();
    renderContact();
    home.built = true;
    document.title = BASE_TITLE;
  }

  /* =================================================================== ABOUT PAGE */
  function renderAboutPage() {
    const pr = P.profile;
    $("#ab-head").innerHTML = `
      <header class="wk-head">
        <h1 class="wk-title">${esc(N("about"))}</h1>
        <p class="wk-lede">${esc(L("aboutLede"))}</p>
        ${pr.cv ? `<a class="btn ab-cv" href="${esc(pr.cv.href)}" target="_blank" rel="noopener">${esc(L("cvPdf"))} ${ICON.ext}</a>` : ""}
      </header>`;
    renderRecords();
    document.title = `${N("about")} · ${BASE_TITLE}`;
  }

  /* =================================================================== WORK PAGE */
  const work = { filter: "all" };
  try {
    const q = new URLSearchParams(location.search).get("axis");
    if (q && axisById[q]) work.filter = q;
  } catch (e) {}

  function wtileHTML(p) {
    return `<li data-axes="${esc(pAxes(p).join(" "))}"><a class="wtile" href="#${esc(p.id)}" id="tile-${esc(p.id)}">
        ${p.demo ? `<span class="mark"><span class="live-dot" aria-hidden="true"></span>${esc(L("liveDemo"))}</span>` : ""}
        <div class="wtile-art" aria-hidden="true">${artHTML(p, "gray")}</div>
        <div class="wtile-text">
          <h2 class="wtile-title">${T(p.title)}</h2>
          <p class="wtile-line">${T(p.oneLiner)}</p>
          <p class="wtile-quiet">${esc(p.year)} · ${T(p.role)} · ${T(p.org)}</p>
          <div class="tags">${axisTags(p)}</div>
        </div></a></li>`;
  }
  function renderWorkIndex() {
    const filters = (P.filters || [{ id: "all", label: { en: "All", ko: "전체" } }]).filter((f) => f.id === "all" || axisById[f.id]);
    $("#wk").innerHTML = `
      <header class="wk-head">
        <h1 class="wk-title">${esc(N("work"))}</h1>
        <p class="wk-lede">${esc(L("workLede"))}</p>
      </header>
      <div class="filters" role="group" aria-label="${esc(L("axes"))}">${filters.map((f) =>
        `<button class="btn" type="button" data-filter="${esc(f.id)}" aria-pressed="${f.id === work.filter}"${axisById[f.id] ? ` style="${xc(f.id)}"` : ""}>${axisById[f.id] ? '<span class="dot"></span>' : ""}${T(f.label)}</button>`).join("")}</div>
      <ul class="wgrid" id="wgrid">${projects.map(wtileHTML).join("")}</ul>`;
    applyWorkFilter();
  }
  function applyWorkFilter() {
    $$("#wgrid > li").forEach((li) => { li.hidden = work.filter !== "all" && !li.dataset.axes.split(" ").includes(work.filter); });
    $$("[data-filter]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.filter === work.filter)));
  }
  function setWorkFilter(f) {
    work.filter = f;
    applyWorkFilter();
    try {
      const u = new URL(location.href);
      if (f === "all") u.searchParams.delete("axis"); else u.searchParams.set("axis", f);
      history.replaceState(history.state, "", u);
    } catch (e) {}
    announce(f === "all" ? L("allWork") : t(axisById[f].label));
  }

  function showProject(p) {
    if (!pv.p) pv.indexScroll = window.scrollY;
    $("#wk").hidden = true;
    $("#pv").hidden = false;
    renderProject(p, false);
    window.scrollTo({ top: 0, behavior: "instant" });
    const h = $("#pv-title");
    if (h) h.focus({ preventScroll: true });
    document.title = `${shortOf(p)} · ${BASE_TITLE}`;
  }
  function showIndex() {
    const was = pv.p;
    if (was) {
      pv.p = null;
      if (pv.demo) { dropDemo(pv.demo); pv.demo = null; }
      $("#pv-a").innerHTML = ""; $("#pv-demo").innerHTML = ""; $("#pv-b").innerHTML = "";
      $("#pv").hidden = true;
      $("#wk").hidden = false;
      window.scrollTo({ top: pv.indexScroll, behavior: "instant" });
      const tile = $("#tile-" + was.id);
      if (tile) tile.focus({ preventScroll: true });
    }
    document.title = `${N("work")} · ${BASE_TITLE}`;
  }
  function routeWork() {
    let id = "";
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (e) {}
    const p = byId[id];
    if (p) { if (!pv.p || pv.p.id !== p.id) showProject(p); }
    else showIndex();
  }
  function renderWork() {
    renderWorkIndex();
    if (pv.p) { renderProject(pv.p, true); document.title = `${shortOf(pv.p)} · ${BASE_TITLE}`; }
    else document.title = `${N("work")} · ${BASE_TITLE}`;
  }

  /* =================================================================== Events and boot */
  document.addEventListener("click", (e) => {
    const tgt = e.target;
    if (tgt.closest("[data-menu]")) { const nav = $("#tnav"); setMenu(!(nav && nav.classList.contains("is-open"))); return; }
    if (tgt.closest("[data-menu-close]")) { setMenu(false); return; }
    if (tgt.closest(".tnav-panel a")) setMenu(false);
    if (tgt.closest("[data-lang]")) { setLang(lang === "en" ? "ko" : "en"); return; }
    const cp = tgt.closest("[data-copy]");
    if (cp) { copyEmail(cp); return; }
    const fb = tgt.closest("[data-filter]");
    if (fb) { setWorkFilter(fb.dataset.filter); return; }
    const sl = tgt.closest("[data-slide]");
    if (sl) { stepSlides(sl.closest(".doc-slides"), Number(sl.dataset.slide)); return; }
    const lb = tgt.closest("[data-lightbox]");
    if (lb) { openLightbox(lb.dataset.lightbox, lb.dataset.caption, lb); return; }
    if (tgt.closest("[data-lb-close]")) { $("#lightbox").close(); return; }
    const back = tgt.closest("[data-back]");
    if (back) { e.preventDefault(); history.pushState(null, "", location.pathname + location.search); routeWork(); }
  });
  document.addEventListener("keydown", (e) => {
    if (document.querySelector("dialog[open]")) return;
    const viewer = e.target.closest && e.target.closest(".doc-slides");
    if (viewer && (e.key === "ArrowLeft" || e.key === "ArrowRight")) { e.preventDefault(); stepSlides(viewer, e.key === "ArrowLeft" ? -1 : 1); }
  });
  const lbox = $("#lightbox");
  if (lbox) lbox.addEventListener("close", () => { const o = lbox._opener; if (o && document.contains(o)) o.focus({ preventScroll: true }); });
  window.addEventListener("hashchange", () => { if (PAGE === "work") routeWork(); });
  window.addEventListener("resize", () => {
    layoutTopNav();
    if (PAGE === "home") fitDemoCard();
    else if (PAGE === "work") fitShortTitle();
  });

  function renderAll() {
    root.setAttribute("lang", lang);
    const skip = $("#skip");
    if (skip) skip.textContent = L("skip");
    renderTop();
    renderFoot();
    if (PAGE === "home") renderHome();
    else if (PAGE === "about") renderAboutPage();
    else renderWork();
  }

  lang = initialLang();
  writeTokens();
  renderAll();
  if (PAGE === "work") routeWork();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { layoutTopNav(); if (PAGE === "home") fitDemoCard(); else if (PAGE === "work") fitShortTitle(); });
})();
