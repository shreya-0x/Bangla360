/* ============================================================
  BANGLADESH 360    Strategic Relations Intelligence Console
  Vanilla JS application. Zero build step, browser-compatible.
  ============================================================ */

/* ---------------- tiny icon set (inline SVG strings) ---------------- */

function icon(name, size, color) {
 size = size || 16;
 color = color || "currentColor";
 const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
 const paths = {
  home: `<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>`,
  globe: `<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9s1.3-6.5 3.8-9z"/>`,
  network: `<circle cx="5" cy="6" r="2.3"/><circle cx="19" cy="6" r="2.3"/><circle cx="12" cy="18" r="2.3"/><path d="M7 7l10 0M6.5 8.2L11 16M17.5 8.2L13 16"/>`,
  sparkles: `<path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M19 15l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z"/>`,
  sliders: `<path d="M4 6h10M4 12h6M4 18h12"/><circle cx="17" cy="6" r="2"/><circle cx="13" cy="12" r="2"/><circle cx="19" cy="18" r="2"/>`,
  radar: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12L19 6"/>`,
  file: `<path d="M6 2h9l5 5v15H6z"/><path d="M15 2v5h5"/>`,
  handshake: `<path d="M8 12l3 3 3-3 3 3 2-2-6-6-2 2-2-2-5 5z"/>`,
  landmark: `<path d="M4 21h16M5 21V10M9 21V10M15 21V10M19 21V10M3 10l9-6 9 6"/>`,
  shield: `<path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/>`,
  users: `<circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="2.4"/><path d="M16 14c2.7.3 5 2.3 5 6"/>`,
  flask: `<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/>`,
  leaf: `<path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14z"/><path d="M4 20L14 10"/>`,
  chevron: `<path d="M9 5l7 7-7 7"/>`,
  search: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>`,
  back: `<path d="M19 12H5M12 19l-7-7 7-7"/>`,
  info: `<circle cx="12" cy="12" r="9"/><path d="M12 8h.01M11 12h1v5h1"/>`,
  up: `<path d="M4 17l6-6 4 4 6-8"/><path d="M14 7h6v6"/>`,
  down: `<path d="M4 7l6 6 4-4 6 8"/><path d="M14 17h6v-6"/>`,
  flat: `<path d="M4 12h16"/>`,
  download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  printer: `<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>`,
  copy: `<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>`,
  x: `<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>`,
  check: `<polyline points="20 6 9 17 4 12"/>`,
  filter: `<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>`,
  reset: `<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>`,
  map: `<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>`,
  layers: `<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>`,
  anchor: `<circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>`,
 };
 return `<svg ${s}>${paths[name] || ""}</svg>`;
}

function trendIconName(t) { return t === "up" ? "up" : t === "down" ? "down" : "flat"; }

function trendPillHTML(trend) {
 const m = trendMeta(trend);
 return `<span class="trend-pill" style="color:${m.color}">${icon(trendIconName(trend), 13, m.color)} ${m.label}</span>`;
}

function protoTagHTML(text) {
 text = text || "Illustrative Demo Data";
 return `<span class="proto-tag">${icon("info", 11)} ${text}</span>`;
}

/* ---------------- utilities ---------------- */

function escapeHTML(str) {
 return String(str || "").replace(/[&<>'"]/g, (tag) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  '"': "&quot;",
 }[tag] || tag));
}

function escapeRegex(str) {
 return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function downloadFile(filename, content, type = "text/plain") {
 const blob = new Blob([content], { type });
 const url = URL.createObjectURL(blob);
 const a = document.createElement("a");
 a.href = url;
 a.download = filename;
 document.body.appendChild(a);
 a.click();
 document.body.removeChild(a);
 URL.revokeObjectURL(url);
}

function showToast(text, duration = 3000) {
 const t = document.getElementById("toast");
 if (!t) return;
 t.innerHTML = `${icon("check", 15, COLORS.teal)} <span>${text}</span>`;
 t.classList.add("show");
 clearTimeout(t._timer);
 t._timer = setTimeout(() => t.classList.remove("show"), duration);
}

/* ---------------- global app state ---------------- */

const App = {
 state: {
  view: "home",
  category: "diplomatic",
  year: 2025,
  aiTab: { overall: "why", cat: {} },
  zooming: false,
  levers: Object.fromEntries(LEVERS.map((l) => [l.id, l.base])),
  activePreset: "baseline",
  timelineFilter: "all",
  mapMode: "3d", // "3d" (Cyber Globe) or "2d" (Tactical Equirectangular Grid)
  mapLayers: {
   arcs: true,
   lanes: true,
   chokepoints: true,
   radar: false,
  },
  globeFocus: "bob", // "bob" (Bay of Bengal), "asia", "global"
  theme: "auto",    // "auto" | any THEME_PALETTES id
  themeMenuOpen: false,
 },
 charts: {},

 init() {
  window.addEventListener("popstate", (e) => {
   if (e.state) {
    this.state.view = e.state.view || "home";
    this.state.category = e.state.category || this.state.category;
   } else {
    this.state.view = "home";
   }
   this.render();
  });
  history.replaceState({ view: "home" }, "", "#home");
  this.render();
 },

 navigate(view, category) {
  if (category) this.state.category = category;
  this.state.view = view;
  this.state.zooming = false;
  history.pushState({ view, category: this.state.category }, "", "#" + view + (category ? ":" + category : ""));
  this.render();
  const content = document.getElementById("content");
  if (content) content.scrollTop = 0;
 },

 setMapMode(mode) {
  this.state.mapMode = mode;
  this.render();
 },

 toggleMapLayer(layer) {
  if (this.state.mapLayers[layer] !== undefined) {
   this.state.mapLayers[layer] = !this.state.mapLayers[layer];
   this.render();
  }
 },

 setGlobeFocus(region) {
  this.state.globeFocus = region;
  this.render();
 },

 selectBD() {
  this.state.zooming = true;
  renderHome();
  setTimeout(() => this.navigate("relationship"), 900);
 },

 setYear(y) {
  this.state.year = y;
  this.destroyCharts();
  renderRelationship();
 },

 setTimelineFilter(filter) {
  this.state.timelineFilter = filter;
  this.destroyCharts();
  renderRelationship();
 },

 setAiTab(scope, tab) {
  if (scope === "overall") this.state.aiTab.overall = tab;
  else this.state.aiTab.cat[scope] = tab;
  this.destroyCharts();
  if (this.state.view === "relationship") renderRelationship();
  else if (this.state.view === "category") renderCategory();
  else if (this.state.view === "ai") renderAIInsights();
 },

 updateLever(id, value) {
  this.state.levers[id] = Number(value);
  this.state.activePreset = null;
  updateScenarioOutputs();
 },

 applyPreset(presetId) {
  const preset = PRESET_SCENARIOS.find((p) => p.id === presetId);
  if (!preset) return;
  this.state.activePreset = presetId;
  Object.entries(preset.values).forEach(([k, v]) => {
   this.state.levers[k] = v;
  });
  this.destroyCharts();
  renderScenario();
  showToast(`Applied preset: ${preset.name}`);
 },

 resetLevers() {
  this.state.activePreset = "baseline";
  LEVERS.forEach((l) => {
   this.state.levers[l.id] = l.base;
  });
  this.destroyCharts();
  renderScenario();
  showToast("Reverted levers to baseline levels (+20%)");
 },

 openSearch() {
  openSearch();
 },

 closeSearch() {
  closeSearch();
 },

 runSearchAction(idx) {
  if (window._activeSearchMatches && window._activeSearchMatches[idx]) {
   const item = window._activeSearchMatches[idx];
   closeSearch();
   if (typeof item.action === "function") {
    item.action();
   }
  }
 },

 openHub(hubId) {
  openHub(hubId);
 },

 closeHub() {
  closeHub();
 },

 openChokepoint(cpId) {
  openChokepoint(cpId);
 },

 openCompare() {
  openCompare();
 },

 closeCompare() {
  closeCompare();
 },

 exportPrint() {
  window.print();
 },

 exportCSV(type) {
  if (type === "indicators") {
   let csv = "Category,Indicator,Value\n";
   CATEGORIES.forEach((c) => {
    c.indicators.forEach((i) => {
     csv += `"${c.name}","${i.label}",${i.value}\n`;
    });
   });
   downloadFile("bangladesh-sri-lanka-indicators.csv", csv, "text/csv");
   showToast("Downloaded Indicators CSV");
  } else if (type === "timeline") {
   let csv = "Year,Category,Impact,Headline,Note,Source\n";
   TIMELINE.forEach((t) => {
    csv += `${t.year},"${t.category}","${t.impact}","${t.headline.replace(/"/g, '""')}","${t.note.replace(/"/g, '""')}","${(t.source || "").replace(/"/g, '""')}"\n`;
   });
   downloadFile("bangladesh-sri-lanka-timeline.csv", csv, "text/csv");
   showToast("Downloaded Timeline CSV");
  }
 },

 exportJSON() {
  const data = {
   metadata: {
    title: "BANGLADESH 360    Strategic Relations Intelligence Console",
    version: "3.2",
    generatedAt: new Date().toISOString(),
    subject: "Bangladesh   Sri Lanka Bilateral Relations & Global Footprint",
   },
   categories: CATEGORIES,
   timeline: TIMELINE,
   riskRadar: RISK_OPP_RADAR,
   opportunities: TOP_OPPORTUNITIES,
   risks: TOP_RISKS,
   hubs: HUBS_RAW,
   continents: CONTINENTS,
   chokepoints: CHOKEPOINTS,
   maritimeLanes: MARITIME_LANES,
   levers: LEVERS,
   briefs: BRIEFS,
   compare: BILATERAL_COMPARE,
  };
  downloadFile("bangladesh-360-intelligence.json", JSON.stringify(data, null, 2), "application/json");
  showToast("Exported complete intelligence dataset as JSON");
 },

 copyMarkdownBrief() {
  const hist = overallHistory();
  const latestScore = hist[hist.length - 1];
  let md = `# BANGLADESH 360    BILATERAL RELATIONS INTELLIGENCE BRIEF\n\n`;
  md += `**Bilateral Index (Bangladesh   Sri Lanka):** ${latestScore} / 100\n`;
  md += `**Console Version:** 3.2 Strategic Intel\n`;
  md += `**Date Generated:** ${new Date().toLocaleDateString()}\n\n`;
  md += `## Six Core Relationship Dimensions\n`;
  CATEGORIES.forEach((c) => {
   md += `- **${c.name}**: ${c.score}/100  ${c.status}\n`;
  });
  md += `\n## Top Strategic Opportunities\n`;
  TOP_OPPORTUNITIES.forEach((o, i) => (md += `${i + 1}. ${o}\n`));
  md += `\n## Top Strategic Risks\n`;
  TOP_RISKS.forEach((r, i) => (md += `${i + 1}. ${r}\n`));
  md += `\n---\n*Generated by BANGLADESH 360  Platform*\n`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
   navigator.clipboard.writeText(md).then(() => {
    showToast("Executive brief copied to clipboard (Markdown)");
   }).catch(() => {
    downloadFile("bangladesh-360-brief.md", md, "text/markdown");
    showToast("Downloaded Markdown brief file");
   });
  } else {
   downloadFile("bangladesh-360-brief.md", md, "text/markdown");
   showToast("Downloaded Markdown brief file");
  }
 },

 // ---- Theme palette management ----
 applyTheme() {
  const root = document.documentElement;
  const t = this.state.theme;
  if (t === "auto") {
   // In category view, use the category's signature color; elsewhere use default
   if (this.state.view === "category") {
    const cat = CATEGORIES.find((c) => c.id === this.state.category) || CATEGORIES[0];
    root.style.setProperty("--accent", cat.color);
   } else {
    root.style.setProperty("--accent", "#22d3ee");
   }
  } else {
   const pal = THEME_PALETTES.find((p) => p.id === t);
   if (pal) root.style.setProperty("--accent", pal.color);
  }
 },

 setTheme(themeId) {
  this.state.theme = themeId;
  this.state.themeMenuOpen = false;
  this.applyTheme();
  renderTopbarThemePicker();
  const pal = THEME_PALETTES.find((p) => p.id === themeId);
  showToast("   Palette: " + (pal ? pal.name : "Dynamic"));
 },

 toggleThemeMenu() {
  this.state.themeMenuOpen = !this.state.themeMenuOpen;
  renderTopbarThemePicker();
 },

 destroyCharts() {
  Object.values(this.charts).forEach((c) => c && c.destroy && c.destroy());
  this.charts = {};
 },

 render() {
  this.destroyCharts();
  this.applyTheme();
  renderSidebar();
  renderMobileNav();
  const view = this.state.view;
  if (view === "home") renderHome();
  else if (view === "relationship") renderRelationship();
  else if (view === "category") renderCategory();
  else if (view === "scenario") renderScenario();
  else if (view === "risk") renderRisk();
  else if (view === "globalmap") renderGlobalMap();
  else if (view === "reports") renderReports();
  else if (view === "ai") renderAIInsights();
  else renderHome();
 },
};

/* ---------------- sidebar / topbar ---------------- */

function renderSidebar() {
 const el = document.getElementById("sidebar");
 if (!el) return;
 const navHtml = NAV_ITEMS.map((n) => {
  const active = App.state.view === n.id;
  return `<button class="nav-btn ${active ? "active" : ""}" onclick="App.navigate('${n.id}')">${icon(n.icon, 16)}<span>${n.label}</span></button>`;
 }).join("");
 const dimHtml = CATEGORIES.map((c) => {
  return `<button class="dim-btn" onclick="App.navigate('category','${c.id}')">${icon(ICONS[c.id], 14, COLORS.purple)}<span>${c.name}</span></button>`;
 }).join("");

 el.innerHTML = `
  <div class="brand">
   <div class="brand-badge">B360</div>
   <div>
    <div class="brand-title">BANGLADESH 360 </div>
    <div class="brand-sub">Relations Intelligence</div>
   </div>
  </div>
  <nav class="nav" aria-label="Primary Navigation">${navHtml}</nav>
  <div class="sidebar-section-label label">Relationship Dimensions</div>
  <div class="dim-list">${dimHtml}</div>
  <div class="sidebar-footer">
   <button class="export-btn secondary" style="width:100%;justify-content:center;" onclick="App.openCompare()">
        Compare BD vs LK
   </button>
  </div>
 `;
}

function renderMobileNav() {
 const el = document.getElementById("mobile-nav");
 if (!el) return;
 el.innerHTML = NAV_ITEMS.map((n) => {
  const active = App.state.view === n.id;
  return `<button class="mnav-btn ${active ? "active" : ""}" onclick="App.navigate('${n.id}')">${icon(n.icon, 13)} ${n.label}</button>`;
 }).join("");
}

function topbarHTML(crumbs, backView) {
 const crumbHtml = crumbs
  .map((c, i) => (i === crumbs.length - 1 ? `<span class="crumb-current">${c}</span>` : `<span>${c}</span>${icon("chevron", 12)}`))
  .join("");
 const backBtn = backView ? `<button class="back-btn" aria-label="Go back" onclick="App.navigate('${backView}')">${icon("back", 14)}</button>` : "";
 // Find current theme swatch color
 const t = App.state.theme;
 const activePal = THEME_PALETTES.find((p) => p.id === t) || THEME_PALETTES[0];
 const swatchColor = (t === "auto" && App.state.view === "category")
  ? (CATEGORIES.find((c) => c.id === App.state.category) || CATEGORIES[0]).color
  : activePal.color;
 return `
  <div class="topbar" id="topbar-root">
   <div style="display:flex;align-items:center;min-width:0;">
    ${backBtn}
    <div class="crumbs">${crumbHtml}</div>
    <span class="exec-status-badge" style="margin-left:14px;"><span class="beacon-dot"></span> V3.3 INTEL CONSOLE</span>
   </div>
   <div style="display:flex;align-items:center;gap:8px;">
    <div class="theme-picker-wrap" id="theme-picker-wrap">
     <button class="theme-picker-btn ${App.state.themeMenuOpen ? 'open' : ''}"
      onclick="App.toggleThemeMenu()" aria-label="Change color palette"
      title="Change interface color palette">
      <span class="theme-color-swatch" style="background:${swatchColor};box-shadow:0 0 6px ${swatchColor}88;"></span>
         ${activePal.name}
     </button>
    </div>
    <div class="search-box" role="button" tabindex="0" aria-label="Search dashboard (Press Ctrl+K)" onclick="App.openSearch()" onkeydown="if(event.key==='Enter')App.openSearch()">
     ${icon("search", 13)}
     <input readonly placeholder="Search intelligence (Ctrl+K)  " aria-label="Search countries, categories and intelligence" />
     <span class="search-shortcut-tag">Ctrl+K</span>
    </div>
   </div>
  </div>
 `;
}

function renderTopbarThemePicker() {
 const wrap = document.getElementById("theme-picker-wrap");
 if (!wrap) return;
 const t = App.state.theme;
 const activePal = THEME_PALETTES.find((p) => p.id === t) || THEME_PALETTES[0];
 const swatchColor = (t === "auto" && App.state.view === "category")
  ? (CATEGORIES.find((c) => c.id === App.state.category) || CATEGORIES[0]).color
  : activePal.color;

 let dropdownHTML = "";
 if (App.state.themeMenuOpen) {
  const optionsHTML = THEME_PALETTES.map((pal) => `
   <button class="theme-option ${t === pal.id ? "active" : ""}" onclick="App.setTheme('${pal.id}')">
    <span class="theme-color-swatch" style="background:${pal.color};box-shadow:0 0 5px ${pal.color}99;width:14px;height:14px;"></span>
    <span class="theme-option-info">
     <span class="theme-option-name">${pal.name}</span>
     <span class="theme-option-desc">${pal.desc}</span>
    </span>
   </button>
  `).join("");
  dropdownHTML = `
   <div class="theme-dropdown" id="theme-dropdown" role="listbox" aria-label="Color palette options">
    <div class="theme-dropdown-header">Interface Palette</div>
    ${optionsHTML}
   </div>
  `;
 }

 wrap.innerHTML = `
  <button class="theme-picker-btn ${App.state.themeMenuOpen ? 'open' : ''}"
   onclick="App.toggleThemeMenu()" aria-label="Change color palette"
   title="Change interface color palette">
   <span class="theme-color-swatch" style="background:${swatchColor};box-shadow:0 0 6px ${swatchColor}88;"></span>
      ${activePal.name}
  </button>
  ${dropdownHTML}
 `;
}

// Close theme dropdown when clicking outside
document.addEventListener("click", function(e) {
 if (App.state.themeMenuOpen) {
  const wrap = document.getElementById("theme-picker-wrap");
  if (wrap && !wrap.contains(e.target)) {
   App.state.themeMenuOpen = false;
   renderTopbarThemePicker();
  }
 }
});


/* ---------------- score gauge (SVG) ---------------- */

function gaugeHTML(value, size, color) {
 size = size || 108;
 color = color || COLORS.cyan;
 const r = size / 2 - 8;
 const c = 2 * Math.PI * r;
 const offset = c - (value / 100) * c;
 return `
  <div class="gauge-wrap" style="width:${size}px;height:${size}px;">
   <svg width="${size}" height="${size}">
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${COLORS.line}" stroke-width="7" fill="none" />
    <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="${color}" stroke-width="7" fill="none"
     stroke-dasharray="${c}" stroke-dashoffset="${offset}" stroke-linecap="round"
     transform="rotate(-90 ${size / 2} ${size / 2})"
     style="filter:drop-shadow(0 0 6px ${color});transition:stroke-dashoffset 900ms ease;" />
   </svg>
   <div class="gauge-center">
    <span class="gauge-value" style="font-size:${size * 0.26}px;">${value}</span>
    <span class="gauge-suffix">/ 100</span>
   </div>
  </div>
 `;
}

/* ---------------- PROJECTION ENGINE & WORLD MAP BUILDER ---------------- */

function project3D(lat, lon, globe) {
 const phi = (lat * Math.PI) / 180;
 const lambda = ((lon - globe.lon) * Math.PI) / 180;
 const centerLat = (globe.lat * Math.PI) / 180;
 const cosC = Math.sin(centerLat) * Math.sin(phi) + Math.cos(centerLat) * Math.cos(phi) * Math.cos(lambda);
 const x = globe.cx + globe.r * Math.cos(phi) * Math.sin(lambda);
 const y = globe.cy - globe.r * (Math.cos(centerLat) * Math.sin(phi) - Math.sin(centerLat) * Math.cos(phi) * Math.cos(lambda));
 return { x, y, visible: cosC > -0.15 };
}

function project2D(lat, lon) {
 return {
  x: ((lon + 180) / 360) * 1000,
  y: ((90 - lat) / 180) * 500,
  visible: true,
 };
}

function buildWorldSVG(opts) {
 opts = opts || {};
 const is3D = (opts.mode || App.state.mapMode) === "3d";
 const zoomed = !!opts.zoomed;
 const compact = !!opts.compact;
 const interactive = opts.interactive !== false;

 // Globe parameters based on regional focus
 let centerLat = 15;
 let centerLon = 90;
 if (App.state.globeFocus === "asia") {
  centerLat = 28;
  centerLon = 110;
 } else if (App.state.globeFocus === "global") {
  centerLat = 22;
  centerLon = 55;
 }
 const globe = { cx: 500, cy: 250, r: compact ? 180 : 210, lat: centerLat, lon: centerLon };

 const project = (lat, lon) => {
  return is3D ? project3D(lat, lon, globe) : project2D(lat, lon);
 };

 // 1. Graticules (Grid lines)
 const gridLines = [];
 if (is3D) {
  for (let lon = -150; lon <= 150; lon += 30) {
   gridLines.push(`<ellipse cx="${globe.cx}" cy="${globe.cy}" rx="${Math.abs(Math.sin((lon * Math.PI) / 180)) * globe.r}" ry="${globe.r}" fill="none" stroke="${COLORS.line}" stroke-width="0.7" opacity="0.6"/>`);
  }
  for (let lat = -60; lat <= 60; lat += 30) {
   gridLines.push(`<ellipse cx="${globe.cx}" cy="${globe.cy - Math.sin(((lat - globe.lat) * Math.PI) / 180) * globe.r * 0.28}" rx="${Math.cos((lat * Math.PI) / 180) * globe.r}" ry="${Math.max(10, Math.cos((lat * Math.PI) / 180) * globe.r * 0.22)}" fill="none" stroke="${COLORS.line}" stroke-width="0.7" opacity="0.55"/>`);
  }
 } else {
  for (let x = 100; x < 1000; x += 100) {
   gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="500" stroke="${COLORS.line}" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.5"/>`);
  }
  for (let y = 50; y < 500; y += 50) {
   gridLines.push(`<line x1="0" y1="${y}" x2="1000" y2="${y}" stroke="${COLORS.line}" stroke-width="0.6" stroke-dasharray="3 4" opacity="0.5"/>`);
  }
 }

 // 2. Continents rendering (Actual Landmass Outlines!)
 const continentsHtml = CONTINENTS.map((c) => {
  let projected;
  if (is3D) {
   projected = c.pts.map(([lon, lat]) => {
    const pt = project3D(lat, lon, globe);
    if (!pt.visible) {
     const angle = Math.atan2(pt.y - globe.cy, pt.x - globe.cx);
     return {
      x: globe.cx + globe.r * Math.cos(angle),
      y: globe.cy + globe.r * Math.sin(angle),
      visible: false,
     };
    }
    const dist = Math.hypot(pt.x - globe.cx, pt.y - globe.cy);
    if (dist > globe.r) {
     const angle = Math.atan2(pt.y - globe.cy, pt.x - globe.cx);
     return {
      x: globe.cx + globe.r * Math.cos(angle),
      y: globe.cy + globe.r * Math.sin(angle),
      visible: true,
     };
    }
    return pt;
   });
   const visCount = projected.filter((p) => p.visible).length;
   if (visCount === 0) return "";
  } else {
   projected = c.pts.map(([lon, lat]) => project2D(lat, lon));
  }
  const ptsStr = projected.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  return `<polygon points="${ptsStr}" class="continent-shape ${c.isFocus ? "focus-region" : ""}"><title>${c.name}</title></polygon>`;
 }).join("");

 // 3. Maritime Shipping Lanes
 let lanesHtml = "";
 if (App.state.mapLayers.lanes) {
  lanesHtml = MARITIME_LANES.map((lane) => {
   const pts = lane.coords.map(([lon, lat]) => project(lat, lon));
   const visiblePts = pts.filter((p) => p.visible);
   if (visiblePts.length < 2) return "";
   const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
   return `
    <g>
     <path d="${d}" class="sea-lane-path"><title>${lane.name} (${lane.volume})</title></path>
     <circle r="2.8" fill="${COLORS.teal}">
      <animateMotion path="${d}" dur="4s" repeatCount="indefinite" />
     </circle>
    </g>
   `;
  }).join("");
 }

 // 4. Strategic Chokepoints
 let chokepointsHtml = "";
 if (App.state.mapLayers.chokepoints) {
  chokepointsHtml = CHOKEPOINTS.map((cp) => {
   const pt = project(cp.lat, cp.lon);
   if (!pt.visible) return "";
   return `
    <g class="chokepoint-group" onclick="App.openChokepoint('${cp.id}')">
     <circle cx="${pt.x}" cy="${pt.y}" r="8" fill="rgba(245,158,11,0.18)" stroke="${COLORS.amber}" stroke-width="1.2">
      <animate attributeName="r" values="6;10;6" dur="2.2s" repeatCount="indefinite" />
     </circle>
     <circle cx="${pt.x}" cy="${pt.y}" r="2.5" fill="${COLORS.amber}" />
     <text x="${pt.x + 8}" y="${pt.y + 3}" font-size="9" fill="${COLORS.amber}" font-family="monospace">${cp.name.toUpperCase()}</text>
     <title>${cp.name}: ${cp.status}  ${cp.desc}</title>
    </g>
   `;
  }).join("");
 }

 // 5. Bilateral Arcs & Network Lines
 const bd = HUBS.find((h) => h.id === "bd");
 const lk = HUBS.find((h) => h.id === "lk");
 const bdPoint = project(bd.lat, bd.lon);
 const lkPoint = project(lk.lat, lk.lon);

 let arcsHtml = "";
 if (App.state.mapLayers.arcs && bdPoint.visible && lkPoint.visible) {
  const arcD = `M ${bdPoint.x} ${bdPoint.y} Q ${(bdPoint.x + lkPoint.x) / 2 - 20} ${(bdPoint.y + lkPoint.y) / 2 - 38}, ${lkPoint.x} ${lkPoint.y}`;
  arcsHtml = `
   <path d="${arcD}" stroke="${COLORS.cyan}" stroke-width="${zoomed ? 2.8 : 2}" fill="none" stroke-dasharray="6 5"
    filter="url(#glow)" class="bd-lk-arc"><title>Primary Strategic Corridor: Bangladesh   Sri Lanka (2,027 km)</title></path>
   <circle r="3.5" fill="${COLORS.cyan}">
    <animateMotion path="${arcD}" dur="2.2s" repeatCount="indefinite" />
   </circle>
  `;
 }

 // Minor network links from Bangladesh to foreign hubs
 const linksFromBD = ["in", "cn", "uk", "ae", "jp", "sg", "us"];
 const netLines = linksFromBD.map((id) => {
  const h = HUBS.find((x) => x.id === id);
  const point = project(h.lat, h.lon);
  if (!point.visible || !bdPoint.visible) return "";
  return `<line x1="${bdPoint.x}" y1="${bdPoint.y}" x2="${point.x}" y2="${point.y}" stroke="${COLORS.purple}" stroke-width="0.8" opacity="0.3" stroke-dasharray="2 4"/>`;
 }).join("");

 // 6. Hub Nodes
 const hubsHtml = HUBS.map((h) => {
  const point = project(h.lat, h.lon);
  if (!point.visible) return "";
  const isFocus = h.tier === "focus";
  const isMajor = h.tier === "major";
  const r = isFocus ? 7 : isMajor ? 5 : 3.8;
  const color = isFocus ? COLORS.cyan : isMajor ? COLORS.purple : "#4E7A90";
  const isBD = h.id === "bd";
  const clickAction = interactive ? (isBD ? `App.selectBD()` : `App.openHub('${h.id}')`) : "";
  const pulse = isFocus ? `<animate attributeName="r" values="${r};${r + 2.8};${r}" dur="2.2s" repeatCount="indefinite"/>` : "";
  const showLabel = isFocus || (!compact && isMajor);
  const label = showLabel
   ? `<text x="${point.x + r + 6}" y="${point.y + 4}" font-size="${isFocus ? 13 : 10}" font-weight="${isFocus ? "600" : "500"}" fill="${isFocus ? COLORS.text : COLORS.muted}">${h.flag ? h.flag + " " : ""}${h.name.toUpperCase()}</text>`
   : "";
  const titleTooltip = `<title>${h.name} (${h.flag || ""})  ${h.tagline || ""} [Click for Intelligence Dossier]</title>`;

  return `
   <g style="cursor:${interactive ? "pointer" : "default"}" ${clickAction ? `onclick="${clickAction}"` : ""}>
    ${titleTooltip}
    <circle cx="${point.x}" cy="${point.y}" r="${r + 7}" fill="${color}" opacity="${isFocus ? 0.22 : 0.09}"/>
    <circle cx="${point.x}" cy="${point.y}" r="${r}" fill="${color}" filter="${isFocus ? "url(#glow)" : ""}">${pulse}</circle>
    ${label}
   </g>
  `;
 }).join("");

 // 7. Radar Surveillance Sweep Beam
 let radarHtml = "";
 if (App.state.mapLayers.radar) {
  if (is3D) {
   radarHtml = `
    <g class="radar-sweep-beam">
     <line x1="${globe.cx}" y1="${globe.cy}" x2="${globe.cx + globe.r}" y2="${globe.cy}" stroke="${COLORS.teal}" stroke-width="1.8" opacity="0.75" />
     <polygon points="${globe.cx},${globe.cy} ${globe.cx + globe.r},${globe.cy} ${globe.cx + globe.r},${globe.cy + 60}" fill="rgba(45,212,191,0.12)" />
    </g>
   `;
  } else {
   radarHtml = `
    <line x1="0" y1="250" x2="1000" y2="250" stroke="${COLORS.teal}" stroke-width="1.2" stroke-dasharray="4 4" opacity="0.5">
     <animate attributeName="y1" values="50;450;50" dur="8s" repeatCount="indefinite" />
     <animate attributeName="y2" values="50;450;50" dur="8s" repeatCount="indefinite" />
    </line>
   `;
  }
 }

 // 3D Globe background clipping vs 2D Flat frame
 let mapCore = "";
 if (is3D) {
  mapCore = `
   <circle cx="${globe.cx}" cy="${globe.cy}" r="${globe.r + 14}" fill="none" stroke="${COLORS.cyan}" stroke-width="1" opacity="0.15"/>
   <circle cx="${globe.cx}" cy="${globe.cy}" r="${globe.r}" fill="url(#bgGlow)" stroke="${COLORS.line}" stroke-width="2"/>
   <g clip-path="url(#globe-clip)">
    ${gridLines.join("")}
    ${continentsHtml}
    ${lanesHtml}
    ${netLines}
    ${arcsHtml}
    ${chokepointsHtml}
    ${radarHtml}
    ${hubsHtml}
   </g>
  `;
 } else {
  mapCore = `
   <rect x="0" y="0" width="1000" height="500" fill="url(#bgGlow)" stroke="${COLORS.line}" stroke-width="1.5" />
   ${gridLines.join("")}
   ${continentsHtml}
   ${lanesHtml}
   ${netLines}
   ${arcsHtml}
   ${chokepointsHtml}
   ${radarHtml}
   ${hubsHtml}
  `;
 }

 return `
  <svg viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
   <defs>
    <radialGradient id="bgGlow" cx="50%" cy="45%" r="65%">
     <stop offset="0%" stop-color="#0E2C44"/>
     <stop offset="100%" stop-color="#020812"/>
    </radialGradient>
    <filter id="glow"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <clipPath id="globe-clip"><circle cx="${globe.cx}" cy="${globe.cy}" r="${globe.r}"/></clipPath>
   </defs>
   <g class="zoom-group ${zoomed ? "zoomed" : ""}">
    ${mapCore}
   </g>
  </svg>
 `;
}

/* ---------------- HOME VIEW ---------------- */

function renderHome() {
 const content = document.getElementById("content");
 const zoomed = App.state.zooming;
 const is3D = App.state.mapMode === "3d";
 const layers = App.state.mapLayers;

 // Executive Telemetry row
 const telemetryHtml = TELEMETRY_STATS.map((t) => `
  <div class="telemetry-stat-item">
   <span class="telemetry-stat-label">${t.label}:</span>
   <span class="telemetry-stat-val">${t.val}</span>
   <span class="telemetry-stat-badge">${t.change}</span>
  </div>
 `).join("");

 // Side Rail Cards
 const railCards = CATEGORIES.map((c) => `
  <button class="mini-cat-card" onclick="App.navigate('category','${c.id}')">
   <div class="panel panel-pad" style="margin-bottom:0;">
    <div class="mini-cat-row">${icon(ICONS[c.id], 15, COLORS.purple)}<span class="name">${c.name}</span></div>
    <div class="mini-cat-scoreline"><span class="score">${c.score}</span>${trendPillHTML(c.trend)}</div>
   </div>
  </button>
 `).join("");

 content.innerHTML = `
  ${topbarHTML(["Global Operations Center"])}

  <div class="exec-header-bar">
   <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <span class="exec-status-badge"><span class="beacon-dot"></span> ACTIVE STRATEGIC DIALOGUE - 2026 CYCLE</span>
    <div class="telemetry-row">${telemetryHtml}</div>
   </div>
   <div class="exec-actions">
    <button class="export-btn" onclick="App.openCompare()">Compare BD vs LK</button>
    <button class="export-btn secondary" onclick="App.navigate('scenario')">What-If Simulator</button>
    <button class="export-btn secondary" onclick="App.navigate('reports')">Executive Dossier</button>
   </div>
  </div>

  <div class="home-layout">
   <div class="map-stage" id="map-stage">
    <!-- Clean Flex Topbar: Title on left, Controls on right, zero overlap! -->
    <div class="map-stage-topbar">
     <div class="map-title-block">
      <div class="label">LIVE GEOPOLITICAL RELATIONS MAP</div>
      <h2 class="map-title-heading">Bangladesh - Sri Lanka Global Intelligence</h2>
      <p class="map-title-sub">Click <span class="hl">Bangladesh</span> or <span class="hl">Sri Lanka</span> to open bilateral dossier, or inspect maritime chokepoints.</p>
     </div>
     <div class="map-toolbar">
      <div class="map-toolbar-group">
       <button class="map-control-btn ${is3D ? "active" : ""}" onclick="App.setMapMode('3d')">${icon("globe", 13)} 3D Globe</button>
       <button class="map-control-btn ${!is3D ? "active" : ""}" onclick="App.setMapMode('2d')">${icon("map", 13)} 2D Grid</button>
      </div>
      <div class="map-toolbar-divider"></div>
      <div class="map-toolbar-group">
       <button class="map-control-btn ${layers.lanes ? "active" : ""}" onclick="App.toggleMapLayer('lanes')">Sea Lanes</button>
       <button class="map-control-btn ${layers.chokepoints ? "active" : ""}" onclick="App.toggleMapLayer('chokepoints')">Chokepoints</button>
       <button class="map-control-btn ${layers.radar ? "active" : ""}" onclick="App.toggleMapLayer('radar')">Radar</button>
      </div>
      <div class="map-toolbar-divider"></div>
      <div class="map-toolbar-group">
       <button class="map-control-btn ${App.state.globeFocus === "bob" ? "active" : ""}" onclick="App.setGlobeFocus('bob')">Bay of Bengal</button>
       <button class="map-control-btn ${App.state.globeFocus === "asia" ? "active" : ""}" onclick="App.setGlobeFocus('asia')">East Asia</button>
       <button class="map-control-btn ${App.state.globeFocus === "global" ? "active" : ""}" onclick="App.setGlobeFocus('global')">Global</button>
      </div>
     </div>
    </div>

    <div class="map-canvas-wrap">
     ${buildWorldSVG({ zoomed })}

     <!-- Interactive HUD Coordinate Readouts -->
     <div class="map-hud-readout">
      <span>SYS: <span class="highlight">INTEL_CORE_V3.4</span> // PROJECTION: <span class="highlight">${is3D ? "ORTHOGRAPHIC SPHERE" : "EQUIRECTANGULAR 2D"}</span></span>
      <span>STRATEGIC CORRIDOR: <span class="highlight">CHATTOGRAM - COLOMBO (2,027 KM)</span> // FEEDERS: <span class="highlight">ACTIVE</span></span>
     </div>

     <div class="map-status ${zoomed ? "show" : ""}">
      <span class="tag">ESTABLISHING BILATERAL LINK...</span>
      <span class="pair">BANGLADESH - SRI LANKA</span>
     </div>
    </div>
   </div>

   <div class="side-rail">
    <div style="display:flex;justify-content:space-between;align-items:center;">
     <div class="label">Relationship Dimensions</div>
     <span style="font-size:10px;color:${COLORS.cyan};cursor:pointer;" onclick="App.navigate('relationship')">View All -></span>
    </div>
    ${railCards}
    <div class="panel panel-pad" style="margin-top:6px;background:rgba(2,8,18,0.7);">
     <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;">
      <span class="beacon-dot"></span>
      <span class="label" style="color:var(--teal)">Latest Strategic Signal</span>
     </div>
     <div style="font-size:12px;color:var(--text);line-height:1.5;">Fourth round of Foreign Office Consultations advanced coastal shipping SOPs and pharmaceutical market access.</div>
    </div>
    ${protoTagHTML("Live Research Model")}
   </div>
  </div>
 `;
}

/* ---------------- RELATIONSHIP VIEW ---------------- */

function overallHistory() {
 return HISTORY_YEARS.map((y, i) => Math.round(CATEGORIES.reduce((s, c) => s + c.history[i], 0) / CATEGORIES.length));
}

function seriesTrend(history, index) {
 if (index === 0 || history[index] === history[index - 1]) return "flat";
 return history[index] > history[index - 1] ? "up" : "down";
}

function yearStatus(category, index) {
 if (index === 0) return category.status;
 const change = category.history[index] - category.history[index - 1];
 if (change > 0) return `Improving from ${HISTORY_YEARS[index - 1]}`;
 if (change < 0) return `Under pressure from ${HISTORY_YEARS[index - 1]}`;
 return "Stable year-over-year";
}

function renderRelationship() {
 const content = document.getElementById("content");
 const hist = overallHistory();
 const year = App.state.year;
 const yearIndex = Math.max(0, HISTORY_YEARS.indexOf(year));
 const overallScore = hist[yearIndex];
 const aiTab = App.state.aiTab.overall;
 const timelineFilter = App.state.timelineFilter || "all";

 // Category summary cards
 const catCards = CATEGORIES.map((c) => {
  const score = c.history[yearIndex];
  const m = trendMeta(seriesTrend(c.history, yearIndex));
  return `
   <button class="cat-card panel" onclick="App.navigate('category','${c.id}')" style="text-align:left;">
    <div class="cat-card-top">
     <div style="display:flex;align-items:center;gap:8px;">
      <div class="cat-card-icon">${icon(ICONS[c.id], 16, COLORS.cyan)}</div>
      <span class="cat-card-name">${c.name}</span>
     </div>
     ${icon("chevron", 15, COLORS.muted)}
    </div>
    <div class="cat-card-scoreline">
     <span class="cat-card-score" style="color:${m.color}">${score}<span class="of100"> /100</span></span>
     ${trendPillHTML(seriesTrend(c.history, yearIndex))}
    </div>
    <div class="cat-card-status">${yearStatus(c, yearIndex)}</div>
    <div class="mini-chart"><canvas id="mini-${c.id}"></canvas></div>
   </button>
  `;
 }).join("");

 // Timeline filtering
 const activeEvent = TIMELINE.find((t) => t.year === year);

 const timelineFilterButtons = [
  ["all", "All Milestones"],
  ...CATEGORIES.map((c) => [c.id, c.name.split(" ")[0]]),
 ].map(([id, label]) => `
  <button class="timeline-filter-btn ${timelineFilter === id ? "active" : ""}" onclick="App.setTimelineFilter('${id}')">${label}</button>
 `).join("");

 const timelineNodes = TIMELINE.map((t, i) => {
  const active = t.year === year;
  const matchesFilter = timelineFilter === "all" || t.category === timelineFilter;
  return `
   <button class="timeline-node-wrap" style="opacity:${matchesFilter ? 1 : 0.4}" aria-label="Milestone year ${t.year}" onclick="App.setYear(${t.year})">
    <div class="timeline-dot ${active ? "active" : ""}"></div>
    <span class="timeline-year ${active ? "active" : ""}">${t.year}</span>
   </button>
   ${i < TIMELINE.length - 1 ? `<div class="timeline-connector"></div>` : ""}
  `;
 }).join("");

 const aiButtons = [
  ["why", "Why does this matter?"],
  ["changed", "What changed?"],
  ["opportunities", "Show opportunities"],
  ["risks", "Show risks"],
  ["trend", "Explain this trend"],
 ].map(([id, label]) => `<button class="ai-btn ${aiTab === id ? "active" : ""}" onclick="App.setAiTab('overall','${id}')">${label}</button>`).join("");

 content.innerHTML = `
  ${topbarHTML(["Global Home", "     Bangladesh       Sri Lanka"], "home")}
  <div class="page">
   <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
    <div>
     <div style="display:flex;align-items:center;gap:12px;font-size:26px;font-weight:600;">
      <span>     BANGLADESH</span><span style="color:${COLORS.cyan}">  </span><span>SRI LANKA     </span>
     </div>
     <p class="page-sub">Bilateral Relationship Intelligence Platform  Active Intelligence Window: ${year}</p>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
     <button class="export-btn" onclick="App.openCompare()">    Quick Match</button>
     <button class="export-btn secondary" onclick="App.navigate('reports')">${icon("file", 13)} Intelligence Reports</button>
    </div>
   </div>

   <div class="panel panel-pad" style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
     <div class="label">Bilateral Relationship Index</div>
     ${gaugeHTML(overallScore, 128)}
     ${trendPillHTML(seriesTrend(hist, yearIndex))}
    </div>
    <div style="flex:1;min-width:260px;">
     <div class="label">Research-informed modeled trend</div>
     <div class="chart-box h140"><canvas id="overall-trend-chart"></canvas></div>
     ${protoTagHTML("Modeled index   not an official statistical series")}
    </div>
   </div>

   <div>
    <div class="label">Six Core Relationship Categories  modeled index</div>
    <div class="cat-grid" style="margin-top:8px;">${catCards}</div>
    <div style="margin-top:8px;">${protoTagHTML("Modeled category index   click any category to view full briefs")}</div>
   </div>

   <div class="panel panel-pad">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
     <div class="label">Bilateral timeline & milestones</div>
     <span style="font-size:10px;color:${COLORS.muted}">Sources linked in milestone details</span>
    </div>
    <div class="timeline-filter-bar">${timelineFilterButtons}</div>
    <div class="timeline-track">${timelineNodes}</div>
    ${activeEvent ? `
     <div class="timeline-detail">
      <span class="badge" style="cursor:pointer;" title="Go to ${CATEGORIES.find((c) => c.id === activeEvent.category).name}" onclick="App.navigate('category', '${activeEvent.category}')">
       ${CATEGORIES.find((c) => c.id === activeEvent.category).name} ${icon("chevron", 10)}
      </span>
      <span class="impact">Impact: ${activeEvent.impact}</span>
      <div class="headline">${activeEvent.headline}</div>
      <p>${activeEvent.note}</p>
      ${activeEvent.sourceUrl ? `<a class="timeline-source" href="${activeEvent.sourceUrl}" target="_blank" rel="noopener noreferrer">Source: ${activeEvent.source}</a>` : ""}
     </div>` : ""}
   </div>

   <div class="panel panel-pad">
    <div class="ai-panel-head">${icon("sparkles", 15, COLORS.purple)}<span class="title">AI Relationship Intelligence</span></div>
    <p class="ai-panel-text">${OVERALL_AI[aiTab]}</p>
    <div class="ai-btn-row">${aiButtons}</div>
   </div>
  </div>
 `;

 // Render Charts
 App.charts["overall-trend"] = new Chart(document.getElementById("overall-trend-chart"), lineChartConfig(HISTORY_YEARS, hist, COLORS.cyan, yearIndex));
 CATEGORIES.forEach((c) => {
  App.charts["mini-" + c.id] = new Chart(document.getElementById("mini-" + c.id), miniLineConfig(c.history, trendMeta(seriesTrend(c.history, yearIndex)).color, yearIndex));
 });
}

/* ---------------- CATEGORY DETAIL VIEW ---------------- */

function briefHTML(catId) {
 const brief = BRIEFS[catId];
 if (!brief) return "";
 const sectionsHtml = brief.sections.map((s) => {
  const parasHtml = s.paragraphs.map((p) => `<p><strong>${p.label}:</strong> ${p.text}</p>`).join("");
  const sourcesHtml = s.sources && s.sources.length ? `
   <div class="diplomatic-sources">Sources: ${s.sources.map((src) => src.url ? `<a href="${src.url}" target="_blank" rel="noopener noreferrer">${src.name}</a>` : src.name).join("  ")}</div>
  ` : "";
  return `
   <div class="diplomatic-brief-section">
    <h3>${s.title}</h3>
    ${parasHtml}
    ${sourcesHtml}
   </div>
  `;
 }).join("");

 return `
  <div class="panel panel-pad diplomatic-brief ${catId}-brief">
   <div class="label">${brief.label}</div>
   ${sectionsHtml}
  </div>
 `;
}

function renderCategory() {
 const content = document.getElementById("content");
 const cat = CATEGORIES.find((c) => c.id === App.state.category) || CATEGORIES[0];
 const catColor = cat.color;      // signature color for this category
 const catAccent = cat.accent || catColor;
 const m = trendMeta(cat.trend);
 const aiTab = App.state.aiTab.cat[cat.id] || "why";

 // Indicator bars use the category color
 const indicatorsHTML = cat.indicators.map((ind) => `
  <div class="indicator-row">
   <div class="indicator-label-row"><span class="name">${ind.label}</span><span class="val">${ind.value}</span></div>
   <div class="bar-track"><div class="bar-fill" style="width:${ind.value}%;background:${catColor};box-shadow:0 0 6px ${catColor}55;"></div></div>
  </div>
 `).join("");

 const bulletBlock = (title, items, color) => `
  <div class="panel panel-pad">
   <div class="label">${title}</div>
   <ul class="bullet-list">${items.map((d) => `<li><span style="color:${color}">  </span>${d}</li>`).join("")}</ul>
  </div>
 `;

 const aiButtons = [
  ["why", "Why does this matter?"],
  ["changed", "What changed?"],
  ["opportunities", "Show opportunities"],
  ["risks", "Show risks"],
  ["trend", "Explain this trend"],
 ].map(([id, label]) => `<button class="ai-btn ${aiTab === id ? "active" : ""}" onclick="App.setAiTab('${cat.id}','${id}')">${label}</button>`).join("");

 content.innerHTML = `
  ${topbarHTML(["Bangladesh   Sri Lanka", cat.name], "relationship")}
  <div class="page">
   <div class="detail-header" style="border-left:3px solid ${catColor};padding-left:14px;">
    <div class="detail-icon" style="background:${catColor}22;border:1px solid ${catColor}55;border-radius:10px;padding:8px;">${icon(ICONS[cat.id], 20, catColor)}</div>
    <div>
     <div class="detail-eyebrow">Bangladesh   Sri Lanka</div>
     <div class="detail-title" style="color:${catColor};">${cat.name}</div>
     <div style="font-size:11px;color:var(--muted);margin-top:2px;font-family:monospace;letter-spacing:0.06em;">${cat.themeName}</div>
    </div>
   </div>

   <div class="detail-grid">
    <div class="detail-col">
     <div class="panel panel-pad" style="display:flex;flex-direction:column;align-items:center;gap:8px;border-top:2px solid ${catColor};">
      ${gaugeHTML(cat.score, 108, catColor)}
      ${trendPillHTML(cat.trend)}
      <p style="font-size:12px;text-align:center;color:${COLORS.muted};margin:0;">${cat.status}</p>
     </div>
     <div class="panel panel-pad" style="border-top:2px solid ${catColor};">
      <div class="label">Key indicators</div>
      <div style="margin-top:10px;">${indicatorsHTML}</div>
     </div>
    </div>

    <div class="detail-col">
     <div class="panel panel-pad">
      <div class="label">Historical trend</div>
      <div class="chart-box h200"><canvas id="cat-trend-chart"></canvas></div>
     </div>
     <div class="panel panel-pad">
      <div class="label">Indicator comparison</div>
      <div class="chart-box h200"><canvas id="cat-bar-chart"></canvas></div>
      ${protoTagHTML()}
     </div>
     <div class="two-col">
      ${bulletBlock("Key drivers", cat.drivers, catColor)}
      ${bulletBlock("Areas of cooperation", cat.cooperation, COLORS.teal)}
      ${bulletBlock("Sensitive areas / risks", cat.risks, COLORS.red)}
      ${bulletBlock("Opportunities", cat.opportunities, COLORS.amber)}
     </div>
    </div>

    <div class="detail-col">
     <div class="panel panel-pad">
      <div class="ai-panel-head">${icon("sparkles", 15, catColor)}<span class="title" style="color:${catColor};">AI  ${cat.name.toUpperCase()}</span></div>
      <p class="ai-panel-text">${cat.ai[aiTab]}</p>
      <div class="ai-btn-row">${aiButtons}</div>
     </div>
    </div>
   </div>

   ${briefHTML(cat.id)}
  </div>
 `;

 App.charts["cat-trend"] = new Chart(document.getElementById("cat-trend-chart"), lineChartConfig(HISTORY_YEARS, cat.history, catColor));
 App.charts["cat-bar"] = new Chart(document.getElementById("cat-bar-chart"), barChartConfig(
  cat.indicators.map((i) => i.label), cat.indicators.map((i) => i.value), catAccent
 ));
}

/* ---------------- SCENARIO SIMULATOR ---------------- */

function computeImpacts() {
 const l = App.state.levers;
 const n = (id) => l[id] / 20;
 return {
  "Trade": +( (n("trade") * 12 + n("maritime") * 2) ).toFixed(1),
  "Investment": +( (n("trade") * 8 + n("tech") * 3) ).toFixed(1),
  "Connectivity": +( (n("maritime") * 5 + n("trade") * 2) ).toFixed(1),
  "Employment": +( (n("trade") * 6 + n("cultural") * 2) ).toFixed(1),
  "Regional Cooperation": +( (n("environmental") * 4 + n("maritime") * 3) ).toFixed(1),
  "Security Stability": +( (n("security") * 5 + n("maritime") * 2) ).toFixed(1),
 };
}

function renderScenario() {
 const content = document.getElementById("content");
 const impacts = computeImpacts();

 const presetsHtml = PRESET_SCENARIOS.map((p) => {
  const active = App.state.activePreset === p.id;
  return `<button class="preset-btn ${active ? "active" : ""}" title="${p.desc}" onclick="App.applyPreset('${p.id}')">${p.name}</button>`;
 }).join("");

 const sliders = LEVERS.map((l) => `
  <div class="slider-row">
   <div class="slider-label-row">
    <label for="lever-${l.id}" class="name">${l.label}</label>
    <span class="val" id="lever-val-${l.id}">+${App.state.levers[l.id]}%</span>
   </div>
   <input id="lever-${l.id}" type="range" min="0" max="40" step="2" value="${App.state.levers[l.id]}" aria-label="${l.label} cooperation lever" oninput="App.updateLever('${l.id}', this.value)" />
  </div>
 `).join("");

 const impactCells = Object.entries(impacts).map(([k, v]) => `
  <div class="impact-cell" id="impact-cell-${k.replace(/\s/g, "")}">
   <div class="k">${k}</div>
   <div class="v" style="color:${v >= 0 ? COLORS.teal : COLORS.red}">${v >= 0 ? "+" : ""}${v}%</div>
  </div>
 `).join("");

 content.innerHTML = `
  ${topbarHTML(["Bangladesh   Sri Lanka", "What-If Scenario Simulator"], "relationship")}
  <div class="page">
   <div class="scenario-header-row">
    <div>
     <h1 class="page-title">What-If Scenario Simulator</h1>
     <p class="page-sub">Adjust cooperation levers to model illustrative downstream bilateral effects.</p>
    </div>
    <button class="reset-btn" onclick="App.resetLevers()">${icon("reset", 13)} Reset to Baseline</button>
   </div>

   <div class="panel panel-pad" style="margin-bottom: -4px;">
    <div class="label">Quick Scenario Presets</div>
    <div class="preset-bar">${presetsHtml}</div>
   </div>

   <div class="two-col">
    <div class="panel panel-pad">
     <div class="label">Cooperation levers</div>
     <div style="margin-top:16px;">${sliders}</div>
     <div style="margin-top:16px;">${protoTagHTML("Illustrative scenario modelling   not a forecast")}</div>
    </div>
    <div class="panel panel-pad">
     <div class="label">Modelled downstream impact</div>
     <div class="impact-grid" id="impact-grid">${impactCells}</div>
     <div class="chart-box h180" style="margin-top:16px;"><canvas id="impact-chart"></canvas></div>
    </div>
   </div>
  </div>
 `;

 App.charts["impact"] = new Chart(document.getElementById("impact-chart"), barChartConfig(
  Object.keys(impacts), Object.values(impacts), COLORS.teal
 ));
}

function updateScenarioOutputs() {
 const impacts = computeImpacts();
 LEVERS.forEach((l) => {
  const elV = document.getElementById("lever-val-" + l.id);
  if (elV) elV.textContent = "+" + App.state.levers[l.id] + "%";
 });
 Object.entries(impacts).forEach(([k, v]) => {
  const cell = document.getElementById("impact-cell-" + k.replace(/\s/g, ""));
  if (cell) {
   const vEl = cell.querySelector(".v");
   if (vEl) {
    vEl.textContent = (v >= 0 ? "+" : "") + v + "%";
    vEl.style.color = v >= 0 ? COLORS.teal : COLORS.red;
   }
  }
 });
 const chart = App.charts["impact"];
 if (chart) {
  chart.data.datasets[0].data = Object.values(impacts);
  chart.update();
 }
}

/* ---------------- RISK & OPPORTUNITY ---------------- */

function renderRisk() {
 const content = document.getElementById("content");

 const oppList = TOP_OPPORTUNITIES.map((o, i) => `<li><span class="num" style="color:${COLORS.teal}">${i + 1}</span>${o}</li>`).join("");
 const riskList = TOP_RISKS.map((o, i) => `<li><span class="num" style="color:${COLORS.red}">${i + 1}</span>${o}</li>`).join("");

 content.innerHTML = `
  ${topbarHTML(["Bangladesh   Sri Lanka", "Risk & Opportunity Radar"], "relationship")}
  <div class="page">
   <div>
    <h1 class="page-title">Risk & Opportunity Radar</h1>
    <p class="page-sub">Illustrative composite scoring across the six relationship dimensions.</p>
   </div>
   <div class="panel panel-pad">
    <div class="chart-box h340"><canvas id="radar-chart"></canvas></div>
    ${protoTagHTML()}
   </div>
   <div class="two-col">
    <div class="panel panel-pad">
     <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <div style="width:8px;height:8px;border-radius:50%;background:${COLORS.teal}"></div>
      <div class="label">Top opportunities</div>
     </div>
     <ol class="bullet-list numbered">${oppList}</ol>
    </div>
    <div class="panel panel-pad">
     <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
      <div style="width:8px;height:8px;border-radius:50%;background:${COLORS.red}"></div>
      <div class="label">Top risks</div>
     </div>
     <ol class="bullet-list numbered">${riskList}</ol>
    </div>
   </div>
  </div>
 `;

 App.charts["radar"] = new Chart(document.getElementById("radar-chart"), {
  type: "radar",
  data: {
   labels: RISK_OPP_RADAR.map((r) => r.category),
   datasets: [
    {
     label: "Opportunity",
     data: RISK_OPP_RADAR.map((r) => r.opportunity),
     borderColor: COLORS.teal,
     backgroundColor: "rgba(45,212,191,0.25)",
     pointBackgroundColor: COLORS.teal,
    },
    {
     label: "Risk",
     data: RISK_OPP_RADAR.map((r) => r.risk),
     borderColor: COLORS.red,
     backgroundColor: "rgba(248,113,113,0.2)",
     pointBackgroundColor: COLORS.red,
    },
   ],
  },
  options: {
   maintainAspectRatio: false,
   scales: {
    r: {
     min: 0, max: 100,
     angleLines: { color: COLORS.line },
     grid: { color: COLORS.line },
     pointLabels: { color: "#b7c9d6", font: { size: 11 } },
     ticks: { display: false, backdropColor: "transparent" },
    },
   },
   plugins: {
    legend: { labels: { color: COLORS.muted, font: { size: 11 } } },
    tooltip: { backgroundColor: COLORS.panel2, borderColor: COLORS.line, borderWidth: 1, titleColor: COLORS.text, bodyColor: "#c7d8e2" },
   },
  },
 });
}

/* ---------------- DEDICATED GLOBAL MAP VIEW ---------------- */

function renderGlobalMap() {
 const content = document.getElementById("content");
 const is3D = App.state.mapMode === "3d";
 const layers = App.state.mapLayers;

 const feedCards = GLOBAL_FEED.map((f) => `
  <div class="panel feed-card" onclick="App.navigate('category','${f.cat}')">
   <span class="feed-tag" style="color:${f.color}">${f.tag}</span>
   <p class="feed-text">${f.text}</p>
  </div>
 `).join("");

 const chokepointCards = CHOKEPOINTS.map((cp) => `
  <div class="panel feed-card" style="cursor:pointer;" onclick="App.openChokepoint('${cp.id}')">
   <div style="display:flex;align-items:center;justify-content:space-between;">
    <span style="font-size:12px;font-weight:600;color:var(--text);">${cp.flag} ${cp.name}</span>
    <span style="font-size:10px;color:var(--amber);font-family:monospace;">${cp.status}</span>
   </div>
   <p class="feed-text" style="font-size:11px;color:var(--muted);">${cp.desc}</p>
  </div>
 `).join("");

 content.innerHTML = `
  ${topbarHTML(["Global Tactical Overview"], "home")}
  <div class="home-layout">
   <div class="map-stage" style="min-height:540px;">
    <!-- Global Map Interactive Topbar -->
    <div class="map-stage-topbar">
     <div class="map-title-block">
      <div class="label">STRATEGIC THEATER OVERVIEW</div>
      <h2 class="map-title-heading">Bay of Bengal & Indian Ocean Maritime Grid</h2>
      <p class="map-title-sub">Real-time situational mapping across 13 sovereign hubs & strategic SLOCs.</p>
     </div>
     <div class="map-toolbar">
      <div class="map-toolbar-group">
       <button class="map-control-btn ${is3D ? "active" : ""}" onclick="App.setMapMode('3d')">${icon("globe", 13)} 3D Globe</button>
       <button class="map-control-btn ${!is3D ? "active" : ""}" onclick="App.setMapMode('2d')">${icon("map", 13)} 2D Grid</button>
      </div>
      <div class="map-toolbar-divider"></div>
      <div class="map-toolbar-group">
       <button class="map-control-btn ${layers.lanes ? "active" : ""}" onclick="App.toggleMapLayer('lanes')">Sea Lanes</button>
       <button class="map-control-btn ${layers.chokepoints ? "active" : ""}" onclick="App.toggleMapLayer('chokepoints')">Chokepoints</button>
       <button class="map-control-btn ${layers.radar ? "active" : ""}" onclick="App.toggleMapLayer('radar')">Radar</button>
      </div>
      <div class="map-toolbar-divider"></div>
      <div class="map-toolbar-group">
       <button class="map-control-btn ${App.state.globeFocus === "bob" ? "active" : ""}" onclick="App.setGlobeFocus('bob')">Bay of Bengal</button>
       <button class="map-control-btn ${App.state.globeFocus === "asia" ? "active" : ""}" onclick="App.setGlobeFocus('asia')">East Asia</button>
       <button class="map-control-btn ${App.state.globeFocus === "global" ? "active" : ""}" onclick="App.setGlobeFocus('global')">Global</button>
      </div>
     </div>
    </div>

    <div class="map-canvas-wrap">
     ${buildWorldSVG({ zoomed: false, compact: false, interactive: true })}

     <div class="map-hud-readout">
      <span>SURVEILLANCE: <span class="highlight">INDIAN OCEAN & BAY OF BENGAL</span> // HUBS ACTIVE: <span class="highlight">13 NATIONS</span></span>
      <span>SELECT ANY NATION OR CHOKEPOINT TO ENGAGE TACTICAL DOSSIER</span>
     </div>
    </div>
   </div>

   <div class="side-rail" style="width:340px;">
    <div class="label">Strategic Maritime Chokepoints</div>
    ${chokepointCards}

    <div class="label" style="margin-top:12px;">Global Intelligence Feed</div>
    ${feedCards}
   </div>
  </div>
 `;
}

/* ---------------- REPORTS & EXPORT SUITE ---------------- */

function renderReports() {
 const content = document.getElementById("content");
 content.innerHTML = `
  ${topbarHTML(["Reports & Export Suite"], "home")}
  <div class="page">
   <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
    <div>
     <h1 class="page-title">Intelligence Reports & Exports</h1>
     <p class="page-sub">Export structured datasets, executive briefs, and formatted intelligence dossiers.</p>
    </div>
    <div style="display:flex;gap:8px;">
     <button class="export-btn secondary" onclick="App.openCompare()">    Quick Match Table</button>
     <button class="export-btn" onclick="App.exportPrint()">${icon("printer", 14)} Print / Export PDF Dossier</button>
    </div>
   </div>

   <div class="two-col">
    <div class="panel report-card">
     <div class="report-title-row">${icon("file", 16, COLORS.cyan)}<span class="report-title">Bilateral Relations Summary Dossier</span></div>
     <p class="report-desc">Comprehensive overview covering the 6 core relationship dimensions, current index scores, and key indicators.</p>
     <div class="report-actions">
      <button class="export-btn" onclick="App.exportPrint()">${icon("printer", 13)} Print Dossier</button>
      <button class="export-btn secondary" onclick="App.copyMarkdownBrief()">${icon("copy", 13)} Copy Markdown Summary</button>
     </div>
    </div>

    <div class="panel report-card">
     <div class="report-title-row">${icon("landmark", 16, COLORS.teal)}<span class="report-title">Indicator Scores & History (CSV)</span></div>
     <p class="report-desc">Full tabular dataset of indicator metrics, historical year scores (2019-2025), and category trajectories.</p>
     <div class="report-actions">
      <button class="export-btn" onclick="App.exportCSV('indicators')">${icon("download", 13)} Download Indicators CSV</button>
     </div>
    </div>

    <div class="panel report-card">
     <div class="report-title-row">${icon("handshake", 16, COLORS.purple)}<span class="report-title">Bilateral Milestones Timeline (CSV)</span></div>
     <p class="report-desc">Chronological database of Bangladesh  Sri Lanka diplomatic, economic, and security milestones with verified sources.</p>
     <div class="report-actions">
      <button class="export-btn" onclick="App.exportCSV('timeline')">${icon("download", 13)} Download Timeline CSV</button>
     </div>
    </div>

    <div class="panel report-card">
     <div class="report-title-row">${icon("sparkles", 16, COLORS.amber)}<span class="report-title">Complete Intelligence Dataset (JSON)</span></div>
     <p class="report-desc">Complete export containing raw series, global hubs, scenario simulator baselines, risk matrix, and research briefs.</p>
     <div class="report-actions">
      <button class="export-btn" onclick="App.exportJSON()">${icon("download", 13)} Download JSON Data</button>
     </div>
    </div>
   </div>
  </div>
 `;
}

/* ---------------- AI INSIGHTS ---------------- */

function renderAIInsights() {
 const content = document.getElementById("content");
 const aiTab = App.state.aiTab.overall;
 const aiButtons = [
  ["why", "Why does this matter?"],
  ["changed", "What changed?"],
  ["opportunities", "Show opportunities"],
  ["risks", "Show risks"],
  ["trend", "Explain this trend"],
 ].map(([id, label]) => `<button class="ai-btn ${aiTab === id ? "active" : ""}" onclick="App.setAiTab('overall','${id}')">${label}</button>`).join("");

 const catSummaries = CATEGORIES.map((c) => `
  <div class="panel panel-pad" style="cursor:pointer;" onclick="App.navigate('category','${c.id}')">
   <span style="font-size:14px;font-weight:500;">${c.name}</span>
   <p style="font-size:12px;color:${COLORS.muted};margin-top:6px;line-height:1.5;">${c.ai.trend}</p>
  </div>
 `).join("");

 content.innerHTML = `
  ${topbarHTML(["AI Insights"], "home")}
  <div class="page">
   <h1 class="page-title">AI Relationship Intelligence</h1>
   <div class="panel panel-pad">
    <div class="ai-panel-head">${icon("sparkles", 15, COLORS.purple)}<span class="title">AI Relationship Intelligence</span></div>
    <p class="ai-panel-text">${OVERALL_AI[aiTab]}</p>
    <div class="ai-btn-row">${aiButtons}</div>
   </div>
   <div>
    <div class="label">Per-category summaries</div>
    <div class="two-col" style="margin-top:8px;">${catSummaries}</div>
   </div>
  </div>
 `;
}

/* ---------------- Chart.js config helpers ---------------- */

function chartBaseOptions() {
 return {
  maintainAspectRatio: false,
  plugins: {
   legend: { display: false },
   tooltip: { backgroundColor: COLORS.panel2, borderColor: COLORS.line, borderWidth: 1, titleColor: COLORS.text, bodyColor: "#c7d8e2" },
  },
  scales: {
   x: { ticks: { color: COLORS.muted, font: { size: 10 } }, grid: { color: "transparent" }, border: { color: COLORS.line } },
   y: { min: 0, max: 100, ticks: { color: COLORS.muted, font: { size: 10 } }, grid: { color: COLORS.line }, border: { color: COLORS.line } },
  },
 };
}

function lineChartConfig(labels, data, color, activeIndex) {
 return {
  type: "line",
  data: { labels, datasets: [{ data, borderColor: color, backgroundColor: color + "22", borderWidth: 2.5, pointRadius: data.map((_, i) => i === activeIndex ? 6 : 3), pointBackgroundColor: color, tension: 0.35, fill: true }] },
  options: chartBaseOptions(),
 };
}

function miniLineConfig(data, color, activeIndex) {
 return {
  type: "line",
  data: { labels: data.map((_, i) => i), datasets: [{ data, borderColor: color, borderWidth: 2, pointRadius: data.map((_, i) => i === activeIndex ? 4 : 0), pointBackgroundColor: color, tension: 0.35 }] },
  options: {
   maintainAspectRatio: false,
   plugins: { legend: { display: false }, tooltip: { enabled: false } },
   scales: { x: { display: false }, y: { display: false, min: 0, max: 100 } },
  },
 };
}

function barChartConfig(labels, data, color) {
 const opts = chartBaseOptions();
 opts.scales.y.max = undefined;
 return {
  type: "bar",
  data: { labels, datasets: [{ data, backgroundColor: color, borderRadius: 4, maxBarThickness: 42 }] },
  options: opts,
 };
}

/* ---------------- Search Engine Modal ---------------- */

function buildSearchIndex() {
 const index = [];
 // 1. Hubs
 HUBS_RAW.forEach((h) => {
  index.push({
   type: "hub",
   badge: "Country Hub",
   title: `${h.flag || "  "} ${h.name}`,
   sub: `${h.tagline || ""}  ${h.strategicStatus || ""}`,
   keywords: `${h.name} ${h.tagline || ""} ${h.strategicStatus || ""} ${h.summary || ""} ${h.tradeWithBD || ""}`,
   action: () => App.openHub(h.id),
  });
 });
 // 2. Chokepoints
 CHOKEPOINTS.forEach((cp) => {
  index.push({
   type: "hub",
   badge: "Maritime Chokepoint",
   title: `${cp.flag} ${cp.name}`,
   sub: `${cp.status}  ${cp.desc}`,
   keywords: `${cp.name} ${cp.status} ${cp.desc}`,
   action: () => App.openChokepoint(cp.id),
  });
 });
 // 3. Categories & Indicators
 CATEGORIES.forEach((c) => {
  index.push({
   type: "category",
   badge: "Dimension",
   title: c.name,
   sub: `${c.status}  Index Score: ${c.score}/100`,
   keywords: `${c.name} ${c.status} ${c.drivers.join(" ")} ${c.cooperation.join(" ")} ${c.risks.join(" ")} ${c.opportunities.join(" ")}`,
   action: () => App.navigate("category", c.id),
  });
  c.indicators.forEach((ind) => {
   index.push({
    type: "indicator",
    badge: "Metric",
    title: `${c.name}: ${ind.label}`,
    sub: `Score: ${ind.value}/100 in ${c.name}`,
    keywords: `${ind.label} ${c.name}`,
    action: () => App.navigate("category", c.id),
   });
  });
 });
 // 4. Timeline
 TIMELINE.forEach((t) => {
  index.push({
   type: "timeline",
   badge: `${t.year} Milestone`,
   title: `${t.year}: ${t.headline}`,
   sub: t.note.slice(0, 85) + "  ",
   keywords: `${t.year} ${t.headline} ${t.note} ${t.category} ${t.source || ""}`,
   action: () => {
    App.navigate("relationship");
    App.setYear(t.year);
   },
  });
 });
 // 5. Research Briefs
 Object.entries(BRIEFS).forEach(([catId, b]) => {
  const cat = CATEGORIES.find((c) => c.id === catId);
  b.sections.forEach((s) => {
   index.push({
    type: "brief",
    badge: "Research Brief",
    title: s.title,
    sub: `${cat ? cat.name : catId}  ${s.paragraphs.map((p) => p.text).join(" ").slice(0, 85)}  `,
    keywords: `${s.title} ${s.paragraphs.map((p) => p.text).join(" ")} ${catId}`,
    action: () => App.navigate("category", catId),
   });
  });
 });
 // 6. Navigation tools
 index.push({
  type: "nav",
  badge: "Tool",
  title: "What-If Scenario Simulator",
  sub: "Model downstream bilateral impacts with cooperation levers",
  keywords: "scenario simulator levers trade maritime tech security",
  action: () => App.navigate("scenario"),
 });
 index.push({
  type: "nav",
  badge: "Tool",
  title: "Risk & Opportunity Radar",
  sub: "6-axis composite risk vs opportunity matrix",
  keywords: "risk opportunity radar matrix score",
  action: () => App.navigate("risk"),
 });
 index.push({
  type: "nav",
  badge: "Tool",
  title: "Bilateral Quick Match (BD vs LK)",
  sub: "Compare Bangladesh and Sri Lanka across key strategic metrics",
  keywords: "compare match bilateral bangladesh sri lanka gdp population ports",
  action: () => App.openCompare(),
 });
 index.push({
  type: "nav",
  badge: "Tool",
  title: "Reports & Intelligence Dossier",
  sub: "Export CSV, JSON, and print-ready dossiers",
  keywords: "reports export download pdf csv json",
  action: () => App.navigate("reports"),
 });
 return index;
}

function openSearch() {
 const modal = document.getElementById("search-modal");
 if (!modal) return;
 modal.style.display = "flex";
 modal.innerHTML = `
  <div class="search-dialog" onclick="event.stopPropagation()">
   <div class="search-modal-header">
    ${icon("search", 16, COLORS.cyan)}
    <input id="search-modal-input" placeholder="Search countries, categories, timeline, metrics  " aria-label="Search intelligence" autocomplete="off" />
    <span class="search-shortcut-tag">ESC</span>
   </div>
   <div class="search-results-list" id="search-modal-results"></div>
  </div>
 `;
 modal.onclick = closeSearch;
 const input = document.getElementById("search-modal-input");
 input.focus();
 input.addEventListener("input", (e) => renderSearchResults(e.target.value));
 renderSearchResults("");
}

function closeSearch() {
 const modal = document.getElementById("search-modal");
 if (modal) modal.style.display = "none";
}

function renderSearchResults(query) {
 const container = document.getElementById("search-modal-results");
 if (!container) return;
 const q = query.trim().toLowerCase();
 const searchIndex = buildSearchIndex();
 let matches = [];

 if (!q) {
  matches = searchIndex.slice(0, 10);
 } else {
  matches = searchIndex.filter((item) =>
   item.title.toLowerCase().includes(q) ||
   item.sub.toLowerCase().includes(q) ||
   item.keywords.toLowerCase().includes(q)
  ).slice(0, 15);
 }

 if (matches.length === 0) {
  container.innerHTML = `<div class="search-empty">No matching records found for "<strong>${escapeHTML(query)}</strong>"</div>`;
  return;
 }

 container.innerHTML = matches.map((item, idx) => `
  <button class="search-result-item" onclick="App.runSearchAction(${idx})">
   <div class="search-result-main">
    <div>
     <div class="search-result-title">${highlightMatch(item.title, q)}</div>
     <div class="search-result-sub">${highlightMatch(item.sub, q)}</div>
    </div>
   </div>
   <span class="search-result-badge" style="background:${badgeColor(item.type)};color:${COLORS.ink}">${item.badge}</span>
  </button>
 `).join("");

 window._activeSearchMatches = matches;
}

function highlightMatch(text, query) {
 if (!query) return escapeHTML(text);
 const regex = new RegExp(`(${escapeRegex(query)})`, "gi");
 return escapeHTML(text).replace(regex, `<span style="color:${COLORS.cyan};font-weight:600;">$1</span>`);
}

function badgeColor(type) {
 if (type === "hub") return COLORS.cyan;
 if (type === "category") return COLORS.purple;
 if (type === "timeline") return COLORS.teal;
 if (type === "brief") return COLORS.amber;
 return COLORS.muted;
}

/* ---------------- Hub Dossier Modal ---------------- */

function openHub(hubId) {
 const hub = HUBS_RAW.find((h) => h.id === hubId);
 if (!hub) return;
 const modal = document.getElementById("hub-modal");
 if (!modal) return;
 modal.style.display = "flex";
 modal.onclick = closeHub;

 const isBD = hub.id === "bd";
 const actionBtn = isBD
  ? `<button class="export-btn" onclick="closeHub();App.navigate('relationship');">Open Bilateral Dashboard ${icon("chevron", 12)}</button>`
  : `<button class="export-btn secondary" onclick="closeHub();">Done</button>`;

 modal.innerHTML = `
  <div class="hub-dialog" onclick="event.stopPropagation()">
   <div class="hub-header">
    <div class="hub-title-row">
     <div class="hub-flag">${hub.flag || "  "}</div>
     <div>
      <div class="hub-name">${hub.name}</div>
      <div class="hub-tagline">${hub.tagline || ""}</div>
     </div>
    </div>
    <button class="hub-close-btn" onclick="closeHub()" aria-label="Close dossier">${icon("x", 14)}</button>
   </div>

   <div class="hub-stats-grid">
    <div class="hub-stat-card">
     <div class="hub-stat-label">Strategic Status</div>
     <div class="hub-stat-val">${hub.strategicStatus || "Regional Partner"}</div>
    </div>
    <div class="hub-stat-card">
     <div class="hub-stat-label">Bilateral Trade / Ties</div>
     <div class="hub-stat-val" style="color:${COLORS.cyan}">${hub.tradeWithBD || "Active Diplomatic Links"}</div>
    </div>
   </div>

   <p class="hub-summary">${hub.summary || ""}</p>

   <div class="hub-action-row">
    ${actionBtn}
   </div>
  </div>
 `;
}

function closeHub() {
 const modal = document.getElementById("hub-modal");
 if (modal) modal.style.display = "none";
}

/* ---------------- Chokepoint Tactical Modal ---------------- */

function openChokepoint(cpId) {
 const cp = CHOKEPOINTS.find((c) => c.id === cpId);
 if (!cp) return;
 const modal = document.getElementById("hub-modal");
 if (!modal) return;
 modal.style.display = "flex";
 modal.onclick = closeHub;

 modal.innerHTML = `
  <div class="hub-dialog" onclick="event.stopPropagation()">
   <div class="hub-header">
    <div class="hub-title-row">
     <div class="hub-flag">${cp.flag}</div>
     <div>
      <div class="hub-name">${cp.name}</div>
      <div class="hub-tagline">${cp.status}</div>
     </div>
    </div>
    <button class="hub-close-btn" onclick="closeHub()" aria-label="Close dossier">${icon("x", 14)}</button>
   </div>

   <div class="hub-stats-grid">
    <div class="hub-stat-card">
     <div class="hub-stat-label">Coordinates</div>
     <div class="hub-stat-val" style="font-family:monospace;color:${COLORS.cyan}">${cp.lat.toFixed(1)}  N, ${cp.lon.toFixed(1)}  E</div>
    </div>
    <div class="hub-stat-card">
     <div class="hub-stat-label">Corridor Role</div>
     <div class="hub-stat-val" style="color:${COLORS.amber}">${cp.status}</div>
    </div>
   </div>

   <p class="hub-summary">${cp.desc}</p>

   <div class="hub-action-row">
    <button class="export-btn secondary" onclick="closeHub()">Close Chokepoint Intel</button>
   </div>
  </div>
 `;
}

/* ---------------- Bilateral Quick Match Modal ---------------- */

function openCompare() {
 const modal = document.getElementById("compare-modal");
 if (!modal) return;
 modal.style.display = "flex";
 modal.onclick = closeCompare;

 const rows = BILATERAL_COMPARE.map((r) => `
  <tr>
   <td style="font-weight:600;color:var(--text);">${r.metric}</td>
   <td style="color:${r.lead === "bd" ? COLORS.cyan : "inherit"};font-weight:${r.lead === "bd" ? "600" : "normal"}">${r.bd}</td>
   <td style="color:${r.lead === "lk" ? COLORS.teal : "inherit"};font-weight:${r.lead === "lk" ? "600" : "normal"}">${r.lk}</td>
   <td style="font-size:12px;color:var(--muted);">${r.note}</td>
  </tr>
 `).join("");

 modal.innerHTML = `
  <div class="compare-modal-dialog" onclick="event.stopPropagation()">
   <div class="hub-header">
    <div class="hub-title-row">
     <div style="font-size:26px;">   </div>
     <div>
      <div class="hub-name">Bilateral Strategic Quick Match</div>
      <div class="hub-tagline">Comparative Assessment: Bangladesh (    ) vs Sri Lanka (    )</div>
     </div>
    </div>
    <button class="hub-close-btn" onclick="closeCompare()" aria-label="Close dialog">${icon("x", 14)}</button>
   </div>

   <div style="overflow-x:auto;">
    <table class="compare-table">
     <thead>
      <tr>
       <th>Indicator Dimension</th>
       <th>     Bangladesh</th>
       <th>     Sri Lanka</th>
       <th>Strategic Takeaway</th>
      </tr>
     </thead>
     <tbody>
      ${rows}
     </tbody>
    </table>
   </div>

   <div class="hub-action-row">
    <button class="export-btn" onclick="closeCompare();App.navigate('relationship');">Go to Bilateral Dashboard  </button>
   </div>
  </div>
 `;
}

function closeCompare() {
 const modal = document.getElementById("compare-modal");
 if (modal) modal.style.display = "none";
}

/* ---------------- Global keyboard shortcuts ---------------- */

document.addEventListener("keydown", (e) => {
 if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
  e.preventDefault();
  openSearch();
 } else if (e.key === "/" && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
  e.preventDefault();
  openSearch();
 } else if (e.key === "Escape") {
  closeSearch();
  closeHub();
  closeCompare();
 }
});

/* ---------------- boot ---------------- */

document.addEventListener("DOMContentLoaded", () => App.init());
