/* ============================================================
   DATA LAYER - everything in this file is ILLUSTRATIVE DEMO DATA
   for prototype purposes only. Replace with verified sources
   (MoFA, World Bank, UN Comtrade, news feeds, etc) before any
   real-world use. Nothing here should be cited as fact.
   ============================================================ */

const COLORS = {
  ink: "#020812",
  panel: "#071522",
  panel2: "#0a1b2a",
  line: "#123049",
  cyan: "#22d3ee",
  purple: "#a78bfa",
  teal: "#2dd4bf",
  amber: "#f59e0b",
  red: "#f87171",
  muted: "#8ea8be",
  text: "#e7f2f7",
};

const HISTORY_YEARS = [2019, 2020, 2021, 2022, 2023, 2024, 2025];

// Simple seeded PRNG so ambient dot texture is stable across reloads
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(42);

function proj(lat, lon) {
  return { x: ((lon + 180) / 360) * 1000, y: ((90 - lat) / 180) * 500 };
}

const HUBS_RAW = [
  {
    id: "bd",
    name: "Bangladesh",
    flag: "[LOC]",
    lat: 23.7,
    lon: 90.4,
    tier: "focus",
    tagline: "Primary Strategic Focus",
    tradeWithBD: "Domestic Base",
    strategicStatus: "Sovereign Anchor / Bay of Bengal Littoral",
    summary: "South Asian economic powerhouse with rapid growth in textiles, pharmaceuticals, and digital public infrastructure. Anchors the Bay of Bengal initiative."
  },
  {
    id: "lk",
    name: "Sri Lanka",
    flag: "[LOC]",
    lat: 7.9,
    lon: 80.7,
    tier: "focus",
    tagline: "Target Bilateral Partner",
    tradeWithBD: "$134.1M Total Trade (2023-24)",
    strategicStatus: "Bilateral Maritime Partner",
    summary: "Strategic Indian Ocean island nation partnering with Bangladesh across maritime security, apparel supply chains, climate adaptation, and Buddhist cultural heritage."
  },
  {
    id: "in",
    name: "India",
    flag: "[LOC]",
    lat: 20.6,
    lon: 78.9,
    tier: "regional",
    tagline: "Largest Neighbor & Land Border",
    tradeWithBD: "~$16 Billion Bilateral Trade",
    strategicStatus: "Comprehensive Strategic Partner",
    summary: "Shares a 4,096 km border with Bangladesh. Key partner in power connectivity, trans-shipment corridors, CEPA negotiations, and regional security."
  },
  {
    id: "cn",
    name: "China",
    flag: "[LOC]",
    lat: 35.9,
    lon: 104.2,
    tier: "major",
    tagline: "Leading Infrastructure & Import Partner",
    tradeWithBD: "~$24 Billion Bilateral Trade",
    strategicStatus: "Strategic Cooperative Partnership",
    summary: "Top source of raw materials, capital goods, and major infrastructure financing (Padma Bridge rail link, Payra power plant, Bangabandhu Tunnel)."
  },
  {
    id: "us",
    name: "United States",
    flag: "[LOC]",
    lat: 39.8,
    lon: -98.6,
    tier: "major",
    tagline: "Top Single-Country Export Market",
    tradeWithBD: "~$10 Billion Bilateral Trade",
    strategicStatus: "Major Economic & Security Partner",
    summary: "Largest single destination for Bangladeshi ready-made garments (RMG) and leading source of foreign direct investment, humanitarian aid, and security dialogues."
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "[LOC]",
    lat: 55.4,
    lon: -3.4,
    tier: "major",
    tagline: "Major Historic & Export Partner",
    tradeWithBD: "~$5.5 Billion Bilateral Trade",
    strategicStatus: "Commonwealth Strategic Partner",
    summary: "Hosts a prominent 700,000+ British-Bangladeshi diaspora. Crucial RMG export market operating under the Developing Countries Trading Scheme (DCTS)."
  },
  {
    id: "de",
    name: "European Union",
    flag: "[LOC]",
    lat: 51.2,
    lon: 10.4,
    tier: "major",
    tagline: "Largest Trading Bloc Destination",
    tradeWithBD: "~$25 Billion Bilateral Trade",
    strategicStatus: "Everything But Arms (EBA) / GSP+ Transition",
    summary: "Absorbs over 45% of Bangladesh's garment exports under EBA preferences. Active collaborator on green transition, decent work, and renewable energy."
  },
  {
    id: "ru",
    name: "Russia",
    flag: "[LOC]",
    lat: 61.5,
    lon: 105.3,
    tier: "major",
    tagline: "Civil Nuclear & Energy Partner",
    tradeWithBD: "~$1.5 Billion Bilateral Trade",
    strategicStatus: "Nuclear Energy Development Partner",
    summary: "Financing and constructing Bangladesh's flagship 2,400 MW Rooppur Nuclear Power Plant through Rosatom; major supplier of wheat and fertilizer."
  },
  {
    id: "ae",
    name: "Gulf States",
    flag: "[LOC]",
    lat: 23.4,
    lon: 53.8,
    tier: "regional",
    tagline: "Remittance & Energy Lifeline",
    tradeWithBD: "~$20 Billion Remittances & Energy Inflows",
    strategicStatus: "Manpower, Energy & Investment Corridor",
    summary: "GCC countries (Saudi Arabia, UAE, Qatar, Oman) host over 4 million Bangladeshi workers, supplying the primary share of national foreign remittances and LNG."
  },
  {
    id: "jp",
    name: "Japan",
    flag: "[LOC]",
    lat: 36.2,
    lon: 138.3,
    tier: "major",
    tagline: "Top Bilateral Development Partner",
    tradeWithBD: "~$4 Billion Bilateral Trade",
    strategicStatus: "Strategic Partnership (BIG-B Initiative)",
    summary: "Finances mega-infrastructure under the Bay of Bengal Industrial Growth Belt (BIG-B), including Matarbari deep-sea port, Dhaka Metro Line 6, and airport terminals."
  },
  {
    id: "au",
    name: "Australia",
    flag: "[LOC]",
    lat: -25.3,
    lon: 133.8,
    tier: "regional",
    tagline: "Indo-Pacific & Education Partner",
    tradeWithBD: "~$2.5 Billion Bilateral Trade",
    strategicStatus: "Indo-Pacific Maritime & Trade Partner",
    summary: "Growing education destination for Bangladeshi students, bilateral trade partner for LNG and agricultural commodities, and collaborator in the Indian Ocean Rim Association."
  },
  {
    id: "ke",
    name: "East Africa",
    flag: "[LOC]",
    lat: -1.3,
    lon: 36.8,
    tier: "regional",
    tagline: "Emerging South-South Frontier",
    tradeWithBD: "~$600 Million Bilateral Trade",
    strategicStatus: "Contract Farming & Maritime Trade",
    summary: "Key partner in South-South maritime trade across the western Indian Ocean, with expanding Bangladeshi investments in contract farming and pharmaceuticals."
  },
  {
    id: "sg",
    name: "Southeast Asia",
    flag: "[LOC]",
    lat: 1.35,
    lon: 103.8,
    tier: "regional",
    tagline: "ASEAN Gateway & Financial Hub",
    tradeWithBD: "~$6 Billion Bilateral Trade",
    strategicStatus: "ASEAN Sectoral Dialogue Partner Aspirant",
    summary: "Singapore and Malaysia serve as crucial trans-shipment hubs, corporate financing centers, and major destinations for skilled and semi-skilled Bangladeshi labor."
  },
];const HUBS = HUBS_RAW.map((h) => Object.assign({}, h, proj(h.lat, h.lon)));

// Simplified World Continent Outlines (Longitude, Latitude) for Globe & Flat Map rendering
const CONTINENTS = [
  // Indian Subcontinent & South Asia (High detail)
  {
    name: "South Asia",
    isFocus: true,
    pts: [
      [68, 24], [70, 28], [72, 32], [74, 37], [78, 35], [80, 31], [88, 28], [92, 27],
      [93, 24], [92, 21], [89, 21.8], [88, 22.2], [85, 19.5], [81, 16], [80, 13], [77.5, 8.1],
      [76, 10], [74, 15], [72.8, 19], [69, 22], [68, 24]
    ]
  },
  // Sri Lanka
  {
    name: "Sri Lanka",
    isFocus: true,
    pts: [
      [80.0, 9.8], [80.6, 9.6], [81.3, 8.6], [81.9, 7.5], [81.8, 6.8], [81.0, 6.0],
      [80.2, 5.9], [79.8, 6.9], [79.7, 8.0], [79.8, 9.0], [80.0, 9.8]
    ]
  },
  // Africa
  {
    name: "Africa",
    pts: [
      [-17, 14.8], [-17.5, 21], [-13, 28], [-5.5, 36], [10, 37], [11, 33], [25, 32],
      [31.5, 31.3], [34, 28], [39, 21], [43.5, 12.5], [51.2, 10.5], [49, 0], [42, -4],
      [40, -11], [35, -20], [32.5, -28], [28, -33], [19, -34.8], [18, -32], [12, -18],
      [12, -6], [9, 4], [4, 6], [-4.5, 5], [-13, 9], [-17, 14.8]
    ]
  },
  // Madagascar
  {
    name: "Madagascar",
    pts: [
      [49.5, -12], [50.5, -15.5], [48.5, -25], [44, -25.5], [43.5, -22], [46, -16], [49.5, -12]
    ]
  },
  // Eurasia / Europe / Asia
  {
    name: "Eurasia",
    pts: [
      [-9.5, 36], [-9, 43], [-1.5, 43.5], [-4.5, 48.5], [1.5, 50], [8, 54], [9.5, 58],
      [13, 55.5], [19, 54.5], [24, 59], [28, 70], [40, 68], [60, 68], [90, 73], [120, 72],
      [140, 68], [170, 66], [180, 65], [170, 60], [150, 50], [140, 48], [130, 42],
      [122, 37], [121, 31], [118, 24], [108, 21.5], [107, 16], [105, 10], [100, 3],
      [98.5, 8], [98, 14], [92, 21], [68, 24], [62, 25], [56, 26], [50, 30], [44, 30],
      [35, 32], [36, 41], [27, 41], [23, 38], [15, 40], [12, 44], [3, 43], [-5.5, 36], [-9.5, 36]
    ]
  },
  // Arabian Peninsula
  {
    name: "Arabian Peninsula",
    pts: [
      [35, 29], [40, 30], [47, 30], [50, 26], [55, 25], [59.5, 22.5], [54, 16.5],
      [45, 12.8], [43.5, 13.5], [38, 22], [35, 28], [35, 29]
    ]
  },
  // Japan
  {
    name: "Japan",
    pts: [
      [131, 31], [133, 34], [136, 35], [140, 39], [141, 43], [145, 44], [141, 41],
      [139, 35], [136, 33.5], [131, 31]
    ]
  },
  // Southeast Asian Archipelago
  {
    name: "Maritime Southeast Asia",
    pts: [
      [95.5, 5.5], [98, 3], [104, -5], [106, -6], [114, -8], [116, -8.5], [115, -4],
      [109, 0], [104, 1.5], [100, 3.5], [95.5, 5.5]
    ]
  },
  // Australia
  {
    name: "Australia",
    pts: [
      [113, -26], [115, -34.5], [122, -34], [130, -32], [138, -35.5], [147, -38.5],
      [153, -28.5], [148, -20], [142, -10.5], [136, -12], [130, -15], [122, -17],
      [114, -22], [113, -26]
    ]
  },
  // North America
  {
    name: "North America",
    pts: [
      [-168, 65], [-150, 71], [-120, 70], [-90, 72], [-70, 62], [-60, 48], [-68, 44],
      [-75, 35], [-81, 25], [-88, 30], [-97, 26], [-97, 20], [-83, 9], [-85, 14],
      [-100, 18], [-106, 23], [-117, 32.5], [-124, 48], [-130, 54], [-140, 60], [-160, 58], [-168, 65]
    ]
  },
  // South America
  {
    name: "South America",
    pts: [
      [-77, 8], [-72, 11.5], [-60, 9], [-50, 0], [-35, -5], [-38, -14], [-43, -23],
      [-53, -33], [-65, -42], [-66, -55], [-74, -52], [-73, -40], [-76, -18], [-81, -5], [-77, 8]
    ]
  },
  // British Isles
  {
    name: "British Isles",
    pts: [
      [-5.5, 50], [1.5, 51.5], [0, 53], [-1.5, 58], [-5, 58.5], [-6, 55], [-3, 53], [-5.5, 50]
    ]
  }
];

const CHOKEPOINTS = [
  { id: "bob", name: "Bay of Bengal Littoral", lat: 18.0, lon: 88.5, flag: "[SLOC]", status: "Critical Sovereign SLOC", desc: "Primary approach connecting Chattogram & Mongla with international ocean feeder lines." },
  { id: "colombo", name: "Colombo Transshipment Hub", lat: 6.9, lon: 79.8, flag: "[PORT]", status: "Primary Feeder Port", desc: "Handles 70%+ of Bangladeshi ready-made garment transshipment to Europe & North America." },
  { id: "malacca", name: "Strait of Malacca", lat: 3.5, lon: 100.5, flag: "[STRAIT]", status: "Strategic Chokepoint", desc: "Main gateway connecting Indian Ocean trade to ASEAN and East Asian supply chains." },
  { id: "hormuz", name: "Strait of Hormuz", lat: 26.5, lon: 56.3, flag: "[GULF]", status: "Energy Security Gateway", desc: "Critical Gulf corridor supplying Bangladesh's national LNG and petroleum crude." },
  { id: "bab", name: "Bab-el-Mandeb", lat: 12.6, lon: 43.3, flag: "[SUEZ]", status: "Suez Export Route", desc: "Red Sea bottleneck connecting South Asian export carriers to the European Union." }
];

const MARITIME_LANES = [
  {
    id: "lane-bd-lk",
    name: "Chattogram --- Colombo Direct Corridor",
    volume: "70%+ RMG Feeder Volume",
    coords: [ [91.8, 22.3], [89.0, 19.5], [86.0, 15.0], [82.5, 9.5], [79.8, 6.9] ]
  },
  {
    id: "lane-lk-sg",
    name: "Colombo --- Malacca --- Singapore Trunk",
    volume: "Major Trans-Pacific Route",
    coords: [ [79.8, 6.9], [85.0, 5.5], [92.0, 4.5], [98.5, 3.8], [103.8, 1.35] ]
  },
  {
    id: "lane-gulf",
    name: "Bay of Bengal --- Gulf Energy Lifeline",
    volume: "LNG & Crude Import Corridor",
    coords: [ [90.4, 21.5], [85.0, 14.0], [78.0, 8.0], [70.0, 14.0], [62.0, 20.0], [55.0, 24.5] ]
  },
  {
    id: "lane-suez",
    name: "Colombo --- Bab-el-Mandeb --- Europe",
    volume: "EU Ready-Made Garment Route",
    coords: [ [79.8, 6.9], [72.0, 8.5], [62.0, 10.5], [52.0, 12.0], [43.3, 12.6] ]
  }
];

const TELEMETRY_STATS = [
  { label: "Bilateral Index", val: "78.4", unit: "/100", change: "+4.2 YoY", positive: true, detail: "Gradual Compounding Trajectory" },
  { label: "Bilateral Trade", val: "$134.1M", unit: "FY24", change: "+9.5% Est.", positive: true, detail: "PTA Negotiations Advancing" },
  { label: "Currency Swap", val: "$200M", unit: "Settled", change: "100% Repaid", positive: true, detail: "Full Principal & Interest Settled" },
  { label: "Active Accords", val: "18", unit: "Instruments", change: "6 Active MoUs", positive: true, detail: "Maritime SOPs in Finalization" }
];

const BILATERAL_COMPARE = [
  { category: "Economic Scale", metric: "GDP Nominal", bd: "$455 Billion", lk: "$84 Billion", lead: "bd", note: "Bangladesh is the 33rd largest economy; Sri Lanka is emerging from crisis." },
  { category: "Population", metric: "Total Population", bd: "173 Million", lk: "22 Million", lead: "bd", note: "Bangladesh provides massive market scale; Sri Lanka has high human capital." },
  { category: "Human Development", metric: "HDI Score", bd: "0.661 (Medium)", lk: "0.780 (High)", lead: "lk", note: "Sri Lanka leads in literacy (92%) and healthcare metrics." },
  { category: "Bilateral Exports", metric: "Trade Share", bd: "$82.7M (Apparel/Pharma)", lk: "$239M (Petroleum/Fabric)", lead: "lk", note: "Sri Lanka records a ~$157M trade surplus with Bangladesh." },
  { category: "Direct Investments", metric: "FDI in Partner", bd: "~$25M (Pharma/FMCG)", lk: "$428.6M (Garments/Banking)", lead: "lk", note: "Sri Lankan managers and technical directors anchor BD apparel hubs." },
  { category: "Maritime Gateways", metric: "Key Strategic Ports", bd: "Chattogram, Mongla, Matarbari", lk: "Colombo, Hambantota", lead: "balanced", note: "Chattogram acts as origin port; Colombo acts as global transshipment nexus." },
  { category: "People Exchange", metric: "Students & Experts", bd: "500 Sri Lankan Med Students", lk: "400 BD Buddhist Scholars", lead: "balanced", note: "Strong institutional education and monastic scholarship linkages." }
];

const AMBIENT_DOTS = Array.from({ length: 130 }, () => ({
  x: rng() * 1000,
  y: 60 + rng() * 380,
  r: rng() * 0.9 + 0.4,
}));

const ICONS = {
  diplomatic: "handshake",
  economic: "landmark",
  security: "shield",
  cultural: "users",
  science: "flask",
  environment: "leaf",
};

function trendMeta(t) {
  if (t === "up") return { color: COLORS.teal, label: "Improving", arrow: "up" };
  if (t === "down") return { color: COLORS.red, label: "Declining", arrow: "down" };
  return { color: COLORS.amber, label: "Stable", arrow: "flat" };
}

const CATEGORIES = [
  {
    id: "diplomatic",
    name: "Diplomatic Relations",
    color: "#38bdf8",
    accent: "#0ea5e9",
    themeName: "Diplomatic Azure",
    score: 82,
    trend: "up",
    status: "Strengthening high-level engagement",
    history: [60, 59, 78, 70, 72, 75, 84],
    indicators: [
      { label: "High-level visits", value: 74 },
      { label: "Treaties in force", value: 61 },
      { label: "Multilateral alignment", value: 88 },
      { label: "Embassy engagement", value: 79 },
    ],
    drivers: ["Regular bilateral consultations", "SAARC / BIMSTEC coordination", "Shared positions in UN forums"],
    cooperation: ["Foreign office consultations", "Joint commissions", "Diaspora and consular support"],
    risks: ["Diverging regional alignments", "Domestic political transitions affecting continuity"],
    opportunities: ["Deeper BIMSTEC coordination", "Joint multilateral advocacy on climate finance"],
    ai: {
      why: "Diplomatic ties set the tone for every other track - trade deals, security dialogues and cultural exchange all move faster when political trust is high.",
      changed: "Illustrative Demo Data: engagement frequency has trended upward over the last three prototype years, driven by more frequent ministerial contact.",
      opportunities: "Modeled opportunity: a standing BD-LK strategic dialogue could formalize coordination across trade and maritime issues.",
      risks: "Modeled risk: leadership transitions in either country could pause momentum until new mandates are established.",
      trend: "The illustrative trend line shows steady, unspectacular improvement - typical of a mature, low-friction relationship.",
    },
  },
  {
    id: "economic",
    name: "Economic Relations",
    color: "#10b981",
    accent: "#059669",
    themeName: "Economic Emerald",
    score: 76,
    trend: "up",
    status: "Trade expanding from a modest base",
    history: [55, 50, 82, 70, 75, 78, 86],
    indicators: [
      { label: "Bilateral trade volume", value: 66 },
      { label: "Investment flows", value: 58 },
      { label: "Market access", value: 71 },
      { label: "Connectivity infra.", value: 63 },
    ],
    drivers: ["Textile & apparel supply chains", "Port and connectivity investment", "Preferential trade discussions"],
    cooperation: ["Trade facilitation talks", "SME and business council links", "Line of credit arrangements"],
    risks: ["Currency and payment friction", "Narrow trade basket concentration"],
    opportunities: ["Diversifying export categories", "Joint logistics and port ventures"],
    ai: {
      why: "Economic ties are the most measurable dimension and often the one governments point to first when describing relationship health.",
      changed: "Illustrative Demo Data suggests trade volume climbed steadily, without major shocks.",
      opportunities: "Modeled opportunity: expanding beyond textiles into pharmaceuticals, IT services and agro-processing.",
      risks: "Modeled risk: overreliance on a narrow set of goods leaves the relationship exposed to sector-specific shocks.",
      trend: "A gradual, compounding trend - the kind of curve trade economists describe as 'healthy but underdeveloped'.",
    },
  },
  {
    id: "security",
    name: "Security & Defence",
    color: "#f43f5e",
    accent: "#e11d48",
    themeName: "Defense Crimson",
    score: 68,
    trend: "flat",
    status: "Steady, low-intensity cooperation",
    history: [55, 52, 54, 58, 60, 62, 66],
    indicators: [
      { label: "Maritime security dialogue", value: 64 },
      { label: "Defence exchanges", value: 52 },
      { label: "Intelligence sharing", value: 47 },
      { label: "Joint exercises", value: 55 },
    ],
    drivers: ["Shared Indian Ocean sea-lanes", "Anti-piracy and search-and-rescue coordination"],
    cooperation: ["Naval goodwill visits", "Coast guard training exchanges"],
    risks: ["Great-power competition in the Indian Ocean", "Non-traditional threats: trafficking, IUU fishing"],
    opportunities: ["Joint maritime domain awareness", "Disaster-response military-to-military drills"],
    ai: {
      why: "Both nations sit on strategic Indian Ocean sea-lanes, so even modest security cooperation has outsized regional relevance.",
      changed: "Illustrative Demo Data shows a flat trend - cooperation exists but hasn't materially deepened in the prototype window.",
      opportunities: "Modeled opportunity: a joint maritime domain awareness arrangement could plug a real regional gap.",
      risks: "Modeled risk: rising great-power competition in the Indian Ocean could complicate an otherwise low-key relationship.",
      trend: "A flat line here isn't necessarily bad - it can reflect a stable, non-escalatory security posture.",
    },
  },
  {
    id: "cultural",
    name: "Cultural & Social",
    color: "#c084fc",
    accent: "#9333ea",
    themeName: "Cultural Violet",
    score: 84,
    trend: "up",
    status: "Strong people-to-people ties",
    history: [65, 62, 74, 76, 78, 80, 83],
    indicators: [
      { label: "Student exchange", value: 60 },
      { label: "Tourism flow", value: 69 },
      { label: "Cultural programming", value: 78 },
      { label: "Media connections", value: 72 },
    ],
    drivers: ["Buddhist heritage and pilgrimage tourism", "Shared colonial and post-colonial history", "Growing diaspora links"],
    cooperation: ["Scholarship programs", "Cultural festivals and exhibitions", "Sister-city arrangements"],
    risks: ["Limited direct connectivity (flights, visas)", "Underinvestment in youth exchange"],
    opportunities: ["Expanded scholarship quotas", "Joint tourism circuits and heritage trails"],
    ai: {
      why: "Cultural ties build the public goodwill that makes harder diplomatic and economic negotiations easier to land.",
      changed: "Illustrative Demo Data shows the strongest, most consistent improvement of any dimension.",
      opportunities: "Modeled opportunity: joint Buddhist heritage tourism circuits could meaningfully lift visitor numbers.",
      risks: "Modeled risk: limited direct flight connectivity caps how far tourism and exchange can grow.",
      trend: "This is the standout category - a clear compounding upward trend across the whole window.",
    },
  },
  {
    id: "science",
    name: "Scientific & Technological",
    color: "#06b6d4",
    accent: "#0891b2",
    themeName: "Tech Electric Cyan",
    score: 61,
    trend: "up",
    status: "Early-stage, emerging collaboration",
    history: [38, 36, 55, 50, 58, 62, 68],
    indicators: [
      { label: "Joint research output", value: 41 },
      { label: "Digital cooperation", value: 55 },
      { label: "Tech transfer", value: 48 },
      { label: "Academic MOUs", value: 62 },
    ],
    drivers: ["Digital public infrastructure interest", "University partnership frameworks"],
    cooperation: ["Academic MOUs", "IT/ITES sector dialogues"],
    risks: ["Low base of joint publications", "Limited dedicated R&D funding"],
    opportunities: ["Joint digital ID / fintech pilots", "Shared climate-tech research"],
    ai: {
      why: "This is the most under-built dimension - meaning it likely has the highest long-run upside relative to current investment.",
      changed: "Illustrative Demo Data shows the fastest percentage growth of any category, from a low base.",
      opportunities: "Modeled opportunity: digital public infrastructure and fintech pilots could leapfrog slower legacy tracks.",
      risks: "Modeled risk: without dedicated funding, early momentum in joint research could stall.",
      trend: "A classic 'emerging' curve - small in absolute terms, but accelerating.",
    },
  },
  {
    id: "environment",
    name: "Environmental & Resource Management",
    color: "#22c55e",
    accent: "#16a34a",
    themeName: "Environmental Jade",
    score: 73,
    trend: "up",
    status: "Aligned by shared climate exposure",
    history: [48, 45, 58, 64, 68, 70, 74],
    indicators: [
      { label: "Climate cooperation", value: 70 },
      { label: "Fisheries coordination", value: 58 },
      { label: "Disaster response links", value: 77 },
      { label: "Marine conservation", value: 61 },
    ],
    drivers: ["Shared vulnerability to sea-level rise", "Cyclone and disaster-response coordination", "Marine ecosystem overlap"],
    cooperation: ["Joint disaster-response drills", "Climate finance advocacy coalitions"],
    risks: ["Overlapping fisheries claims", "Divergent adaptation funding capacity"],
    opportunities: ["Joint blue-economy planning", "Shared climate-finance advocacy at COP forums"],
    ai: {
      why: "Both countries face similar climate exposure, which gives this dimension unusually strong grounds for coordinated advocacy.",
      changed: "Illustrative Demo Data tracks a steady climb, roughly parallel to rising global climate-finance discourse.",
      opportunities: "Modeled opportunity: a joint blue-economy framework could turn shared exposure into shared upside.",
      risks: "Modeled risk: overlapping fisheries interests could become a friction point if left unmanaged.",
      trend: "A steady, externally-driven trend - likely to keep climbing as climate diplomacy intensifies globally.",
    },
  },
];

const THEME_PALETTES = [
  { id: "auto", name: "Dynamic Category", color: "#38bdf8", isGradient: true, desc: "Palette adapts automatically to active category" },
  { id: "cyan", name: "Cyber Cyan", color: "#22d3ee", desc: "Classic intelligence console cyan" },
  { id: "emerald", name: "Economic Emerald", color: "#10b981", desc: "Trade and maritime emerald green" },
  { id: "crimson", name: "Defense Crimson", color: "#f43f5e", desc: "Security and defense coral red" },
  { id: "violet", name: "Imperial Violet", color: "#c084fc", desc: "Cultural and people-to-people violet" },
  { id: "amber", name: "Obsidian Gold", color: "#f59e0b", desc: "Strategic high-level gold and amber" },
  { id: "jade", name: "Environmental Jade", color: "#22c55e", desc: "Climate and blue economy green" }
];
const OVERALL_AI = {
  why: "Bangladesh-Sri Lanka relations span diplomatic, economic, maritime, cultural, technological and environmental dimensions. No single track dominates - the relationship's resilience comes from having several moderate, independent tracks rather than one strong one.",
  changed: "Illustrative Demo Data models the bilateral index climbing from the low 60s to the high 70s over the prototype window, led by cultural exchange and diplomatic engagement.",
  opportunities: "The clearest modeled opportunities sit in trade diversification, maritime cooperation and joint climate-finance advocacy - areas where both countries have complementary rather than competing interests.",
  risks: "The most-cited modeled risks are regional geopolitical shifts and maritime security pressure in the wider Indian Ocean, both largely external to the bilateral relationship itself.",
  trend: "Overall trajectory: gradual and broad-based improvement, without acceleration or reversal - a textbook 'quietly strengthening' bilateral relationship.",
};

const TIMELINE = [
  { year: 2019, category: "economic", headline: "FTA plan targeted stronger trade ties", impact: "Moderate", note: "At a June forum in Colombo, Bangladesh's High Commissioner said the two countries were set to sign a free-trade agreement and recommended trade exhibitions and business delegations to expand commerce.", source: "SASEC, 30 June 2019", sourceUrl: "https://www.sasec.asia/index.php?page=news&nid=1045&url=bangladesh-sri-lanka-trade" },
  { year: 2020, category: "diplomatic", headline: "Pandemic slowed the bilateral agenda", impact: "Low", note: "The COVID-19 year produced no comparably documented bilateral milestone in the sources reviewed. The existing trade, diplomatic and regional-cooperation agenda continued, but major visits and negotiations were disrupted." },
  { year: 2021, category: "diplomatic", headline: "Prime ministers set a broader cooperation agenda", impact: "High", note: "During Mahinda Rajapaksa's 20 March visit to Dhaka, the two prime ministers agreed to pursue an FTA feasibility study, work toward a PTA, advance coastal-shipping talks, and signed six MoUs covering youth, agriculture, vocational training, health, strategic studies and culture.", source: "SASEC, 20 March 2021", sourceUrl: "https://www.sasec.asia/index.php?page=news&nid=1246&url=ban-sri-bangladesh50" },
  { year: 2022, category: "economic", headline: "Bangladesh provided $200m support during Sri Lanka crisis", impact: "High", note: "During Sri Lanka's economic crisis, Bangladesh extended assistance reported by Sri Lanka's foreign ministry as USD 200 million. The year also marked the 50th anniversary of diplomatic relations.", source: "Sri Lanka MFA, 6 November 2025 retrospective", sourceUrl: "https://mfa.gov.lk/en/fourth-round-of-sri-lanka-bangladesh-joint-media-release/" },
  { year: 2023, category: "economic", headline: "Bilateral trade framework review advanced", impact: "Moderate", note: "Bangladesh's Regional Connectivity Project-1 published a 2023 bilateral-trade-agreement review, identifying the existing instruments and policy issues to address for deeper Bangladesh-Sri Lanka commerce.", source: "Bangladesh Regional Connectivity Project-1, 2023", sourceUrl: "http://brcp-1.gov.bd/wp-content/uploads/2023/09/BilateralTradeAgreement_Sri-Lanka.pdf" },
  { year: 2024, category: "economic", headline: "Trade-promotion talks targeted stronger commercial ties", impact: "Moderate", note: "On 13 December, Sri Lanka's High Commissioner to Bangladesh met with Bangladesh's Export Promotion Bureau to discuss strengthening bilateral trade and expanding commercial opportunities.", source: "Apparel Views, 13 December 2024", sourceUrl: "https://www.apparelviews.com/sri-lanka-and-bangladesh-discuss-strengthening-bilateral-trade-ties/" },
  { year: 2025, category: "diplomatic", headline: "Fourth foreign-office consultations broadened cooperation", impact: "High", note: "The fourth round of Foreign Office Consultations concluded in Colombo on 6 November. The agenda covered trade, investment, shipping, tourism, agriculture, fisheries, education, health, digital economy, defence and culture, including potential Chattogram-Colombo connectivity.", source: "Sri Lanka MFA, 6 November 2025", sourceUrl: "https://mfa.gov.lk/en/fourth-round-of-sri-lanka-bangladesh-joint-media-release/" },
];

const RISK_OPP_RADAR = [
  { category: "Diplomacy", opportunity: 78, risk: 30 },
  { category: "Economy", opportunity: 82, risk: 45 },
  { category: "Security", opportunity: 55, risk: 60 },
  { category: "Culture", opportunity: 88, risk: 18 },
  { category: "Sci & Tech", opportunity: 70, risk: 25 },
  { category: "Environment", opportunity: 74, risk: 42 },
];

const TOP_OPPORTUNITIES = [
  "Trade diversification beyond textiles",
  "Joint maritime domain awareness",
  "Digital public infrastructure collaboration",
  "Expanded scholarship & cultural exchange",
  "Joint blue-economy & climate-finance advocacy",
  "Regional connectivity & port investment",
];

const TOP_RISKS = [
  "Shifting regional geopolitical alignments",
  "Indian Ocean maritime security pressure",
  "Narrow, concentrated trade basket",
  "Climate and disaster exposure",
  "Overlapping fisheries & marine-resource claims",
  "Sensitivities around great-power competition",
];

const GLOBAL_FEED = [
  { tag: "DIPLOMATIC", color: COLORS.cyan, text: "Bilateral consultation cadence indicator updated", cat: "diplomatic" },
  { tag: "ECONOMIC", color: COLORS.teal, text: "Trade-relationship signal shifted upward", cat: "economic" },
  { tag: "SECURITY", color: COLORS.amber, text: "Maritime cooperation indicator logged", cat: "security" },
  { tag: "TECHNOLOGY", color: COLORS.purple, text: "Emerging digital-collaboration signal detected", cat: "science" },
  { tag: "ENVIRONMENT", color: COLORS.teal, text: "Regional climate-cooperation signal recorded", cat: "environment" },
  { tag: "CULTURAL", color: COLORS.cyan, text: "People-to-people exchange indicator ticked up", cat: "cultural" },
];

// Scenario simulator levers - includes security cooperation per spec
const LEVERS = [
  { id: "trade", label: "Bilateral Trade", base: 20 },
  { id: "maritime", label: "Maritime Cooperation", base: 20 },
  { id: "tech", label: "Technology Cooperation", base: 20 },
  { id: "cultural", label: "Cultural Exchange", base: 20 },
  { id: "environmental", label: "Environmental Cooperation", base: 20 },
  { id: "security", label: "Security Cooperation", base: 20 },
];

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: "home" },
  { id: "globalmap", label: "Global Map", icon: "globe" },
  { id: "relationship", label: "Relationship Intelligence", icon: "network" },
  { id: "ai", label: "AI Insights", icon: "sparkles" },
  { id: "scenario", label: "Scenario Simulator", icon: "sliders" },
  { id: "risk", label: "Risk & Opportunity", icon: "radar" },
  { id: "reports", label: "Reports", icon: "file" },
];

const PRESET_SCENARIOS = [
  {
    id: "baseline",
    name: "Baseline Status Quo",
    desc: "Current balanced bilateral trajectory (+20% baseline level across all levers).",
    values: { trade: 20, maritime: 20, tech: 20, cultural: 20, environmental: 20, security: 20 }
  },
  {
    id: "fta",
    name: "Comprehensive FTA",
    desc: "Preferential trade pact activated with sensitive-list tariff concessions and joint export council.",
    values: { trade: 38, maritime: 30, tech: 26, cultural: 22, environmental: 18, security: 16 }
  },
  {
    id: "maritime",
    name: "Maritime & Blue Economy",
    desc: "Chattogram---Colombo direct shipping corridor, joint coast guard training, and fisheries coordination.",
    values: { trade: 28, maritime: 40, tech: 22, cultural: 18, environmental: 36, security: 34 }
  },
  {
    id: "tech",
    name: "Tech Corridor & Innovation",
    desc: "Fintech, digital public infrastructure, Bangabandhu-1 satellite data sharing, and academic exchange.",
    values: { trade: 24, maritime: 18, tech: 40, cultural: 32, environmental: 22, security: 20 }
  },
  {
    id: "stress",
    name: "Regional Friction",
    desc: "Heightened external Indian Ocean naval rivalry and slowed trade clearance friction.",
    values: { trade: 8, maritime: 12, tech: 10, cultural: 14, environmental: 16, security: 12 }
  }
];

const BRIEFS = {
  diplomatic: {
    label: "Diplomatic issue resolution brief",
    sections: [
      {
        title: "$200 Million Currency Swap Debt Resolution",
        paragraphs: [
          { label: "The issue", text: "In 2021, Bangladesh extended a $200 million currency-swap loan to Sri Lanka to help bolster Colombo's foreign-exchange reserves during its economic crisis. Sri Lanka's subsequent default and economic collapse created uncertainty about repayment and raised domestic concerns in Bangladesh." },
          { label: "The resolution", text: "Sri Lanka repaid the exposure through installments and completed the final rollover repayments to Bangladesh Bank, resolving the outstanding financial dependency." }
        ],
        sources: [
          { name: "Modern Diplomacy", url: "https://moderndiplomacy.eu/2022/06/05/will-bangladesh-fall-into-a-sri-lanka-like-crisis/" },
          { name: "Reuters", url: "https://www.reuters.com/world/asia-pacific/sri-lanka-repays-50-million-loan-bangladesh-source-2023-08-21/" },
          { name: "Al Jazeera", url: "https://www.aljazeera.com/opinions/2022/8/25/why-the-sri-lankan-collapse-looms-so-large-over-bangladesh" }
        ]
      },
      {
        title: "Trade Tariff and Sensitive-List Bottlenecks",
        paragraphs: [
          { label: "The issue", text: "Negotiations toward a Preferential Trade Agreement were slowed by protective barriers and sensitive lists, with Sri Lanka and Bangladesh maintaining 925 and 993 exempt items respectively. The imbalance affected market access and trade negotiations." },
          { label: "The resolution", text: "Consecutive Commerce Secretary-level meetings narrowed the lists and prioritized high-yield sectors, including Bangladeshi pharmaceuticals and agricultural exports, alongside Sri Lankan technical training for Bangladeshi nurses." }
        ],
        sources: [
          { name: "SASEC", url: "https://www.sasec.asia/index.php?page=news&nid=1274&url=ban-sl-pta-negotiations" },
          { name: "The Geopolitics", url: "https://thegeopolitics.com/bangladesh-sri-lanka-trade-ties-issues-and-prospects/" },
          { name: "LKI", url: "https://lki.lk/publication/deepening-regional-cooperation-a-case-for-strengthening-bangladesh-sri-lanka-economic-relations/" },
          { name: "The Daily Star", url: "https://www.thedailystar.net/news/bangladesh/diplomacy/news/bangladesh-expanding-bilateral-trade-sri-lanka-3564846" }
        ]
      },
      {
        title: "Port Connectivity and Shipping Agreement Delay",
        paragraphs: [
          { label: "The issue", text: "Direct shipping connectivity along the Bay of Bengal corridor remained limited while a coastal shipping agreement and operating procedures stayed pending, increasing route times and freight costs." },
          { label: "The resolution", text: "The countries reconvened the Joint Working Group on Shipping and advanced standard operating procedures connecting Bangladesh's Chattogram and Mongla ports with Colombo, improving maritime connectivity and reducing transshipment friction." }
        ],
        sources: [
          { name: "Maritime Gateway", url: "https://www.maritimegateway.com/sri-lanka-and-bangladesh-strengthen-ties-with-focus-on-port-connectivity/" },
          { name: "Bangladesh-Sri Lanka relations", url: "https://en.wikipedia.org/wiki/Bangladesh%E2%80%93Sri_Lanka_relations" }
        ]
      },
      {
        title: "Cricket Governance Disruptions (2026)",
        paragraphs: [
          { label: "The issue", text: "Ahead of the 2026 ICC Men's T20 World Cup, Bangladesh's request to move India-based matches to Sri Lanka over security concerns was denied by the ICC, creating a standoff and wider scrutiny of Sri Lanka Cricket's position." },
          { label: "The resolution", text: "Sports authorities clarified Sri Lanka's neutral hosting stance and reaffirmed long-standing athletic cooperation, containing the dispute so it did not spill into broader bilateral relations." }
        ],
        sources: [
          { name: "Hindustan Times", url: "https://www.hindustantimes.com/cricket/sri-lanka-explains-silence-in-bcb-icc-standoff-open-to-hosting-india-pakistan-or-bangladesh-amid-future-political-rows-101769700895334.html" },
          { name: "Moneycontrol", url: "https://www.moneycontrol.com/sports/cricket/in-these-disputes-sri-lanka-wades-into-icc-bangladesh-t20-world-cup-2026-row-article-13800793.html" }
        ]
      }
    ]
  },
  economic: {
    label: "Trade and investment brief",
    sections: [
      {
        title: "Trade and Tariffs on Import-Export",
        paragraphs: [
          { label: "Trade balance", text: "The bilateral balance is heavily tilted toward Sri Lanka, which has recorded an approximate $157 million trade surplus with Bangladesh." },
          { label: "Top exports from Sri Lanka to Bangladesh", text: "Petroleum gas, knitted and crocheted fabrics supporting Bangladesh's garment industry, audio alarms, tea, and rubber." },
          { label: "Top exports from Bangladesh to Sri Lanka", text: "Packaged medicaments, knit and non-knit apparel, potatoes, and other agricultural products." },
          { label: "Tariffs and sensitive lists", text: "Both countries participate in SAFTA and the Asia-Pacific Trade Agreement. Trade remains restricted because both maintain large sensitive lists, with more than 900 items exempt from tariff reductions under regional trade pacts." }
        ]
      },
      {
        title: "Bilateral Trade",
        paragraphs: [
          { label: "Total volume", text: "Total trade reached $134.06 million during the 2023-24 fiscal period." },
          { label: "Import and export breakdown", text: "Other annual tracking reports Sri Lankan exports to Bangladesh at around $239 million and Bangladeshi exports to Sri Lanka at about $82.7 million. These figures use different reporting periods or statistical bases and should not be added to the fiscal-period total above." }
        ]
      },
      {
        title: "Investments Made",
        paragraphs: [
          { label: "Sri Lankan investment in Bangladesh", text: "Sri Lankan entrepreneurs have invested approximately $428.56 million in foreign direct investment, concentrated mainly in banking, energy, construction, and apparel and textile sectors." },
          { label: "Bangladeshi investment in Sri Lanka", text: "Smaller Bangladeshi investments have focused primarily on pharmaceuticals and manufacturing." }
        ]
      },
      {
        title: "Trade Growth and Agreements",
        paragraphs: [
          { label: "Bilateral growth", text: "Bilateral trade has grown at an estimated annual rate of 9.5% over recent years." },
          { label: "Proposed agreements", text: "To reduce the limits imposed by existing SAFTA sensitive lists, both countries are negotiating a Preferential Trade Agreement as a step toward a comprehensive Free Trade Agreement. The proposals also aim to reduce tariff barriers and establish direct maritime shipping routes between Chattogram and Colombo." }
        ],
        sources: [
          { name: "SASEC PTA negotiations", url: "https://www.sasec.asia/index.php?page=news&nid=1274&url=ban-sl-pta-negotiations" },
          { name: "Lakshman Kadirgamar Institute", url: "https://lki.lk/publication/deepening-regional-cooperation-a-case-for-strengthening-bangladesh-sri-lanka-economic-relations/" },
          { name: "Maritime Gateway", url: "https://www.maritimegateway.com/sri-lanka-and-bangladesh-strengthen-ties-with-focus-on-port-connectivity/" }
        ]
      }
    ]
  },
  security: {
    label: "Defense and security cooperation brief",
    sections: [
      {
        title: "Defense Agreements and Military Sharing",
        paragraphs: [
          { label: "Defense agreements", text: "The nations do not share an overarching mutual-defense treaty, but they operate under active memorandums aimed at maritime security and institutional defense cooperation." },
          { label: "Intelligence and military sharing", text: "Cooperation focuses heavily on maritime training and educational exchanges. The Bangladesh Navy frequently visits Sri Lankan ports for goodwill exercises, while Sri Lankan military personnel are regularly sent to study at Bangladesh's elite defense command colleges." }
        ]
      },
      {
        title: "Maritime Domain Awareness & Indian Ocean Security",
        paragraphs: [
          { label: "Sea lines of communication", text: "Both nations oversee critical approaches to the Bay of Bengal and central Indian Ocean choke points, collaborating on anti-piracy, search-and-rescue (SAR), and countering illicit transnational narcotics trafficking." },
          { label: "Naval joint coordination", text: "Naval units participate in multilateral gatherings such as the Colombo Security Conclave observer track and the Indian Ocean Naval Symposium (IONS)." }
        ]
      }
    ]
  },
  cultural: {
    label: "Cultural and social exchanges brief",
    sections: [
      {
        title: "Cultural and Social Exchanges",
        paragraphs: [
          { label: "Historical and civilizational ties", text: "Bilateral cultural links date back thousands of years. Ancient Pali chronicles, for example, link ancestors of Sri Lanka's first king to the Vanga Kingdom of modern-day Bengal." },
          { label: "Institutional cooperation", text: "The two countries maintain an active Cultural Exchange Programme, and Bangladesh has a dedicated Bangladesh Gallery at the International Buddhist Museum in Kandy, Sri Lanka." }
        ]
      },
      {
        title: "Student and People Exchanges",
        paragraphs: [
          { label: "Sri Lankan students in Bangladesh", text: "Bangladesh hosts around 500 Sri Lankan medical and dental students across medical colleges." },
          { label: "Bangladeshi students in Sri Lanka", text: "Around 400 young Buddhist students from Bangladesh pursue higher studies in Buddhism and Pali at Sri Lankan monasteries and universities." },
          { label: "Professional diaspora", text: "Sri Lankan professionals work in Bangladesh's readymade-garment, banking, logistics, and information-technology sectors." }
        ]
      },
      {
        title: "Tourism Cooperation and Joint Circuits",
        paragraphs: [
          { label: "Joint initiatives", text: "During bilateral foreign-office consultations, Bangladesh and Sri Lanka agreed to pursue joint tourism initiatives focused on green tourism, tea tourism, and interconnected Buddhist tourism circuits." },
          { label: "Arrival frameworks", text: "Sri Lanka's tourism authorities have targeted 20,000 to 25,000 Bangladeshi visitors annually. For context, Sri Lanka receives more than two million international tourists globally per year, while Bangladesh receives approximately 600,000 to 700,000 visitors." }
        ]
      }
    ]
  },
  science: {
    label: "Digital innovation and science cooperation brief",
    sections: [
      {
        title: "Digital Innovation and Tech Corridor",
        paragraphs: [
          { label: "Tech Corridor initiative", text: "Bangladesh proposed a Bangladesh-Sri Lanka Tech Corridor to promote digital innovation, startup ecosystems, and shared IT expertise." },
          { label: "Information technology exchange", text: "Sri Lankan professionals contribute to IT and management sectors in major Bangladeshi hubs such as Dhaka and Chittagong, supporting technical-skills transfer." },
          { label: "Joint ICT frameworks", text: "Multiple memorandums of understanding have been established to align information and communication technology standards between the two countries." }
        ]
      },
      {
        title: "Joint Research and Institutional Cooperation",
        paragraphs: [
          { label: "Agricultural science research", text: "Research links connect the Bangladesh Agricultural Research Council and the Sri Lanka Council for Agricultural Research Policy on crop resilience and climate adaptation." },
          { label: "Technical education exchange", text: "Cooperation between technical-education bodies supports documentation sharing and technical-qualification mapping to strengthen vocational standards." },
          { label: "Multilateral leadership", text: "Through BIMSTEC, Sri Lanka helps steer the Science, Technology, and Innovation sector, providing a framework for shared South Asian research projects." }
        ]
      },
      {
        title: "Space Technology and Satellite Communication",
        paragraphs: [
          { label: "Regional satellite coverage", text: "Bangladesh's Bangabandhu-1 communication satellite provides transponder coverage across the Bay of Bengal, including Sri Lanka." },
          { label: "Disaster-management applications", text: "Both countries use space-based remote-sensing data for storm-surge and cyclone tracking, coordinating through international networks such as the Space Climate Observatory to reduce regional climate risks." }
        ]
      }
    ]
  },
  environment: {
    label: "Climate and environmental cooperation brief",
    sections: [
      {
        title: "Climate Initiatives",
        paragraphs: [
          { label: "Vulnerability & resilience", text: "Both are highly vulnerable coastal nations. They cooperate through regional platforms such as the South Asia Co-operative Environment Programme and RIMES to share climate-adaptation techniques, early-warning data, and ecosystem-restoration strategies." }
        ]
      },
      {
        title: "Water Resource Sharing and Management",
        paragraphs: [
          { label: "Marine vs river boundary", text: "Unlike relations with contiguous neighbors such as the transboundary river relationship between India and Bangladesh, Bangladesh and Sri Lanka share neither a land border nor freshwater rivers. Water management therefore focuses primarily on marine resources, sustainable fisheries, and the blue economy in the Bay of Bengal region." }
        ]
      },
      {
        title: "Pollution Control Together",
        paragraphs: [
          { label: "Marine ecosystems", text: "The two countries partner through regional grant frameworks to address common environmental threats, including marine plastic pollution and the protection of coastal ecosystems such as mangroves." }
        ]
      }
    ]
  }
};

