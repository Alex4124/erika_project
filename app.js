const REAGENTS = [
  {
    id: "hcl",
    name: "Соляная кислота",
    formula: "HCl",
    description: "Бесцветный прозрачный раствор сильной кислоты.",
    color: [214, 243, 255],
    alpha: 0.42,
    clarity: 0.95,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 3.2,
    tags: ["acid", "chloride"]
  },
  {
    id: "hno3",
    name: "Азотная кислота",
    formula: "HNO₃",
    description: "Бесцветный прозрачный раствор сильной кислоты.",
    color: [220, 244, 255],
    alpha: 0.43,
    clarity: 0.96,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 3.3,
    tags: ["acid", "nitrate", "oxidizer"]
  },
  {
    id: "koh",
    name: "Гидроксид калия",
    formula: "KOH",
    description: "Бесцветный щелочной раствор.",
    color: [220, 244, 252],
    alpha: 0.4,
    clarity: 0.94,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: -3.3,
    tags: ["base", "hydroxide"]
  },
  {
    id: "h2so4",
    name: "Серная кислота",
    formula: "H₂SO₄",
    description: "Прозрачный бесцветный раствор сильной кислоты.",
    color: [223, 245, 255],
    alpha: 0.44,
    clarity: 0.96,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 3.4,
    tags: ["acid", "sulfate"]
  },
  {
    id: "cu_no3_2",
    name: "Нитрат меди",
    formula: "Cu(NO₃)₂",
    description: "Голубой раствор ионов меди(II).",
    color: [88, 177, 238],
    alpha: 0.82,
    clarity: 0.8,
    textureOpacity: 0.06,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["copper2", "nitrate"]
  },
  {
    id: "ni_no3_2",
    name: "Нитрат никеля",
    formula: "Ni(NO₃)₂",
    description: "Зелёный раствор ионов никеля(II).",
    color: [126, 180, 108],
    alpha: 0.72,
    clarity: 0.82,
    textureOpacity: 0.06,
    sedimentOpacity: 0,
    pHScore: 0.2,
    tags: ["nickel2", "nitrate"]
  },
  {
    id: "agno3",
    name: "Нитрат серебра",
    formula: "AgNO₃",
    description: "Бесцветный прозрачный раствор.",
    color: [240, 246, 250],
    alpha: 0.32,
    clarity: 0.96,
    textureOpacity: 0.01,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["silver", "nitrate"]
  },
  {
    id: "bacl2",
    name: "Хлорид бария",
    formula: "BaCl₂",
    description: "Бесцветный раствор соли бария.",
    color: [228, 245, 252],
    alpha: 0.36,
    clarity: 0.94,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["barium", "chloride"]
  },
  {
    id: "ca_no3_2",
    name: "Нитрат кальция",
    formula: "Ca(NO₃)₂",
    description: "Бесцветный прозрачный раствор соли кальция.",
    color: [232, 245, 252],
    alpha: 0.34,
    clarity: 0.95,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["calcium", "nitrate"]
  },
  {
    id: "znso4",
    name: "Сульфат цинка",
    formula: "ZnSO₄",
    description: "Бесцветный раствор ионов цинка(II).",
    color: [236, 245, 250],
    alpha: 0.34,
    clarity: 0.94,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0.18,
    tags: ["zinc2", "sulfate"]
  },
  {
    id: "fecl3",
    name: "Хлорид трёхвалентного железа",
    formula: "FeCl₃",
    description: "Жёлто-бурый раствор ионов железа(III).",
    color: [184, 118, 42],
    alpha: 0.8,
    clarity: 0.72,
    textureOpacity: 0.06,
    sedimentOpacity: 0,
    pHScore: 0.8,
    tags: ["iron3", "chloride"]
  },
  {
    id: "alcl3",
    name: "Хлорид алюминия",
    formula: "AlCl₃",
    description: "Бесцветный раствор соли алюминия с кислой реакцией среды.",
    color: [226, 244, 252],
    alpha: 0.36,
    clarity: 0.95,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0.9,
    tags: ["aluminum3", "chloride"]
  },
  {
    id: "ki",
    name: "Иодид калия",
    formula: "KI",
    description: "Бесцветный прозрачный раствор.",
    color: [234, 244, 246],
    alpha: 0.34,
    clarity: 0.95,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["iodide"]
  },
  {
    id: "nh4cl",
    name: "Хлорид аммония",
    formula: "NH₄Cl",
    description: "Бесцветный раствор аммонийной соли со слабокислой реакцией.",
    color: [236, 245, 250],
    alpha: 0.34,
    clarity: 0.96,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0.7,
    tags: ["ammonium", "chloride"]
  },
  {
    id: "phenolphthalein",
    name: "Фенолфталеин",
    formula: "C₂₀H₁₄O₄",
    description: "Бесцветный индикатор, малиновеет в щёлочи.",
    color: [245, 245, 245],
    alpha: 0.18,
    clarity: 0.98,
    textureOpacity: 0.01,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["indicator", "phenolphthalein"]
  },
  {
    id: "methyl_orange",
    name: "Метилоранж",
    formula: "C₁₄H₁₄N₃NaO₃S",
    description: "Оранжевый индикатор: краснеет в кислоте, желтеет в щёлочи.",
    color: [236, 147, 60],
    alpha: 0.72,
    clarity: 0.84,
    textureOpacity: 0.05,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["indicator", "methyl-orange"]
  },
  {
    id: "litmus",
    name: "Лакмус",
    formula: "Индикатор",
    description: "Фиолетовый индикатор: красный в кислоте, синий в щёлочи.",
    color: [128, 97, 196],
    alpha: 0.72,
    clarity: 0.78,
    textureOpacity: 0.05,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["indicator", "litmus"]
  },
  {
    id: "li2co3",
    name: "Карбонат лития",
    formula: "Li₂CO₃",
    description: "Слаборастворимая белёсая взвесь карбоната.",
    color: [233, 236, 240],
    alpha: 0.74,
    clarity: 0.44,
    textureOpacity: 0.2,
    sedimentOpacity: 0.24,
    pHScore: -1.8,
    tags: ["carbonate", "base", "suspension"]
  },
  {
    id: "na3po4",
    name: "Фосфат натрия",
    formula: "Na₃PO₄",
    description: "Бесцветный щелочной раствор.",
    color: [226, 244, 248],
    alpha: 0.38,
    clarity: 0.9,
    textureOpacity: 0.03,
    sedimentOpacity: 0,
    pHScore: -2.1,
    tags: ["phosphate", "base"]
  },
  {
    id: "k2sio3",
    name: "Силикат калия",
    formula: "K₂SiO₃",
    description: "Бесцветный слегка опалесцирующий вязкий раствор.",
    color: [221, 237, 243],
    alpha: 0.46,
    clarity: 0.72,
    textureOpacity: 0.09,
    sedimentOpacity: 0.03,
    pHScore: -1.9,
    tags: ["silicate", "base", "viscous"]
  },
  {
    id: "na2s",
    name: "Сульфид натрия",
    formula: "Na₂S",
    description: "Бесцветный с желтоватым оттенком раствор.",
    color: [244, 234, 162],
    alpha: 0.5,
    clarity: 0.8,
    textureOpacity: 0.05,
    sedimentOpacity: 0,
    pHScore: -2.3,
    tags: ["sulfide", "base"]
  },
  {
    id: "ca_oh_2",
    name: "Гидроксид кальция",
    formula: "Ca(OH)₂",
    description: "Известковая вода с молочно-белой мутностью.",
    color: [241, 245, 248],
    alpha: 0.68,
    clarity: 0.48,
    textureOpacity: 0.16,
    sedimentOpacity: 0.14,
    pHScore: -2.6,
    tags: ["base", "hydroxide", "suspension", "calcium"]
  },
  {
    id: "h2o2",
    name: "Пероксид водорода",
    formula: "H₂O₂",
    description: "Бесцветный прозрачный раствор окислителя.",
    color: [228, 246, 255],
    alpha: 0.38,
    clarity: 0.96,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["peroxide", "oxidizer"]
  },
  {
    id: "kmno4",
    name: "Перманганат калия",
    formula: "KMnO₄",
    description: "Насыщенно-фиолетовый раствор сильного окислителя.",
    color: [106, 43, 135],
    alpha: 0.88,
    clarity: 0.76,
    textureOpacity: 0.08,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["permanganate", "oxidizer"]
  }
];

const REAGENT_MAP = Object.fromEntries(REAGENTS.map((reagent) => [reagent.id, reagent]));
const REAGENT_REFERENCE_DATA = {
  hcl: {
    solubility: "82,3 г/100 г H₂O (0 °C); хорошо растворим",
    meltingPoint: "−114,2 °C",
    boilingPoint: "−85,1 °C",
    electrolyte: "сильный электролит"
  },
  hno3: {
    solubility: "смешивается с водой в любых соотношениях",
    meltingPoint: "−41,6 °C",
    boilingPoint: "83 °C",
    electrolyte: "сильный электролит"
  },
  koh: {
    solubility: "121 г/100 г H₂O (25 °C); очень хорошо растворим",
    meltingPoint: "≈360–380 °C",
    boilingPoint: "≈1324 °C",
    electrolyte: "сильный электролит"
  },
  h2so4: {
    solubility: "смешивается с водой в любых соотношениях",
    meltingPoint: "10,3 °C",
    boilingPoint: "337 °C",
    electrolyte: "сильный электролит"
  },
  cu_no3_2: {
    solubility: "гидраты хорошо растворимы; до 137,8 г/100 мл H₂O (0 °C)",
    meltingPoint: "≈255–256 °C (разл.)",
    boilingPoint: "сублимирует / разлагается",
    electrolyte: "сильный электролит"
  },
  ni_no3_2: {
    solubility: "очень хорошо растворим в воде; образует зелёные гидраты",
    meltingPoint: "≈56,7 °C для гексагидрата",
    boilingPoint: "разлагается при нагревании",
    electrolyte: "сильный электролит"
  },
  agno3: {
    solubility: "122 г/100 мл H₂O (0 °C); хорошо растворим",
    meltingPoint: "212 °C",
    boilingPoint: "440 °C (разлагается)",
    electrolyte: "сильный электролит"
  },
  bacl2: {
    solubility: "37,0 г/100 г H₂O (25 °C); хорошо растворим",
    meltingPoint: "960 °C",
    boilingPoint: "1560 °C",
    electrolyte: "сильный электролит"
  },
  ca_no3_2: {
    solubility: "121 г/100 г H₂O (20 °C); очень хорошо растворим",
    meltingPoint: "≈561 °C",
    boilingPoint: "разлагается",
    electrolyte: "сильный электролит"
  },
  znso4: {
    solubility: "57,7 г/100 г H₂O (20 °C); хорошо растворим",
    meltingPoint: "≈680 °C (разл.)",
    boilingPoint: "разлагается",
    electrolyte: "сильный электролит"
  },
  fecl3: {
    solubility: "74,4 г/100 мл H₂O (0 °C); хорошо растворим",
    meltingPoint: "304 °C",
    boilingPoint: "≈316 °C (разлагается)",
    electrolyte: "сильный электролит"
  },
  alcl3: {
    solubility: "хорошо растворим; в воде заметно гидролизуется",
    meltingPoint: "192,4 °C",
    boilingPoint: "≈180 °C (сублимирует)",
    electrolyte: "сильный электролит"
  },
  ki: {
    solubility: "148 г/100 г H₂O (25 °C); очень хорошо растворим",
    meltingPoint: "681 °C",
    boilingPoint: "1323 °C",
    electrolyte: "сильный электролит"
  },
  nh4cl: {
    solubility: "29,7 г/100 г H₂O (25 °C); хорошо растворим",
    meltingPoint: "338 °C",
    boilingPoint: "возгоняется / разлагается",
    electrolyte: "сильный электролит"
  },
  phenolphthalein: {
    solubility: "0,04 г/л H₂O; очень слабо растворим",
    meltingPoint: "262,5 °C",
    boilingPoint: "разлагается",
    electrolyte: "слабый электролит"
  },
  methyl_orange: {
    solubility: "≈5 г/л H₂O (20 °C); умеренно растворим",
    meltingPoint: ">300 °C",
    boilingPoint: "разлагается",
    electrolyte: "слабый электролит"
  },
  litmus: {
    solubility: "растворим в воде; смесь природных красителей",
    meltingPoint: "нет единого значения",
    boilingPoint: "нет единого значения",
    electrolyte: "слабый электролит"
  },
  li2co3: {
    solubility: "1,31 г/100 г H₂O (20 °C); малорастворим",
    meltingPoint: "723 °C",
    boilingPoint: "≈1300 °C (разлагается)",
    electrolyte: "сильный электролит"
  },
  na3po4: {
    solubility: "25,8 г/100 г H₂O (20 °C); хорошо растворим",
    meltingPoint: "≈73–76 °C для гидрата",
    boilingPoint: "теряет воду / разлагается",
    electrolyte: "сильный электролит"
  },
  k2sio3: {
    solubility: "хорошо растворим в воде; образует вязкий щелочной раствор",
    meltingPoint: ">300 °C",
    boilingPoint: "для растворов >100 °C",
    electrolyte: "сильный электролит"
  },
  na2s: {
    solubility: "18,6 г/100 г H₂O (20 °C); хорошо растворим",
    meltingPoint: "≈1180 °C",
    boilingPoint: "очень высокая / без чёткой tкип",
    electrolyte: "сильный электролит"
  },
  ca_oh_2: {
    solubility: "0,16 г/100 г H₂O (20 °C); малорастворим",
    meltingPoint: "разлагается при ≈580 °C",
    boilingPoint: "разлагается",
    electrolyte: "сильный электролит (в растворённой части)"
  },
  h2o2: {
    solubility: "смешивается с водой; очень хорошо растворим",
    meltingPoint: "−0,43 °C",
    boilingPoint: "150,2 °C",
    electrolyte: "слабый электролит"
  },
  kmno4: {
    solubility: "6,4 г/100 мл H₂O (20 °C); умеренно растворим",
    meltingPoint: "разлагается при нагревании (>240 °C)",
    boilingPoint: "разлагается",
    electrolyte: "сильный электролит"
  }
};
const MAX_TUBE_CONTENTS = 6;
const MAX_NOTIFICATIONS = 18;
const FULLSCREEN_KEY = "f";
const DRAWER_META = {
  equations: {
    kicker: "",
    title: "Уравнения реакций"
  },
  journal: {
    kicker: "",
    title: "Журнал наблюдений"
  }
};

const ACIDIC_HYDROLYSIS_RULES = [
  {
    reagentId: "agno3",
    boost: 1.24,
    blockedBy: [
      "silver-chloride",
      "silver-iodide",
      "silver-sulfide",
      "silver-phosphate",
      "silver-phosphate-chloride-transition",
      "silver-oxide",
      "silver-oxide-chloride-transition",
      "silver-carbonate",
      "silver-carbonate-chloride-transition"
    ]
  },
  {
    reagentId: "cu_no3_2",
    boost: 1.58,
    blockedBy: [
      "copper-hydroxide",
      "copper-phosphate",
      "copper-carbonate",
      "copper-silicate",
      "copper-sulfide",
      "copper-iodide-redox"
    ]
  },
  {
    reagentId: "ni_no3_2",
    boost: 1.04,
    blockedBy: [
      "nickel-hydroxide",
      "nickel-phosphate",
      "nickel-carbonate",
      "nickel-silicate",
      "nickel-sulfide"
    ]
  },
  {
    reagentId: "znso4",
    boost: 0.96,
    blockedBy: [
      "zinc-hydroxide",
      "zinc-hydroxide-dissolves-in-alkali",
      "zinc-phosphate",
      "zinc-carbonate",
      "zinc-silicate",
      "zinc-sulfide"
    ]
  },
  {
    reagentId: "fecl3",
    boost: 1.48,
    blockedBy: [
      "iron-hydroxide",
      "iron-carbonate-hydrolysis",
      "iron-phosphate"
    ]
  },
  {
    reagentId: "alcl3",
    boost: 1.62,
    blockedBy: [
      "aluminum-hydroxide",
      "aluminum-hydroxide-dissolves-in-alkali",
      "aluminum-carbonate-hydrolysis",
      "aluminum-phosphate",
      "aluminum-sulfide-hydrolysis"
    ]
  },
  {
    reagentId: "nh4cl",
    boost: 0.72,
    blockedBy: ["ammonium-base-reaction"]
  }
];

const app = document.querySelector(".app-shell");
const canvas = document.querySelector("#lab-canvas");
const ctx = canvas.getContext("2d");
const backgroundCanvas = document.querySelector("#lab-canvas-bg");
const backgroundCtx = backgroundCanvas.getContext("2d");
const reagentGrid = document.querySelector("#reagent-grid");
const tubeRack = document.querySelector("#tube-rack");
const selectedReagentLabel = document.querySelector("#selected-reagent");
const eventFeed = document.querySelector("#event-feed");
const equationFeed = document.querySelector("#equation-feed");
const resetAllButton = document.querySelector("#reset-all-btn");
const slideoutDrawer = document.querySelector("#slideout-drawer");
const drawerKicker = document.querySelector("#drawer-kicker");
const drawerTitle = document.querySelector("#drawer-title");
const drawerCloseButton = document.querySelector("#drawer-close-btn");
const drawerTabs = Array.from(document.querySelectorAll("[data-drawer-tab]"));
const drawerPanels = Array.from(document.querySelectorAll("[data-drawer-panel]"));
const scenePanels = Array.from(document.querySelectorAll(".hero-panel, .reagent-panel, .experiment-panel, .status-card, .slideout-drawer"));
const heroPanel = document.querySelector(".hero-panel");
const reagentPanel = document.querySelector(".reagent-panel");
const experimentPanel = document.querySelector(".experiment-panel");

const tubeElements = new Map();
const tubeRenderElements = new Map();
const reagentElements = new Map();
const rectCache = new Map();
const seededCache = new Map();

const RECT_TTL_MS = 200;
const BUBBLE_POOL_SIZE = 32;
const FALLOUT_POOL_SIZE = 64;

const state = {
  selectedReagentId: null,
  notifications: [],
  drawer: {
    open: true,
    panel: "equations"
  },
  dragging: null,
  tubes: Array.from({ length: 4 }, (_, index) => createTube(index + 1)),
  clockMs: 0,
  lastTimestamp: 0,
  backgroundDirty: true,
  sceneDirty: true
};

function markBackgroundDirty() {
  state.backgroundDirty = true;
  state.sceneDirty = true;
}

function markSceneDirty() {
  state.sceneDirty = true;
}

function markTubeDirty(tube) {
  if (!tube) {
    return;
  }
  tube.dirty = true;
  markSceneDirty();
}

function resetGeometryCache() {
  rectCache.clear();
  markBackgroundDirty();
}

function getCachedRect(element, key) {
  const cached = rectCache.get(key);
  const now = performance.now();
  if (cached && now - cached.timestamp < RECT_TTL_MS) {
    return cached.rect;
  }
  const rect = element.getBoundingClientRect();
  rectCache.set(key, { rect, timestamp: now });
  return rect;
}

function ensurePool(container, className, size) {
  while (container.children.length < size) {
    const element = document.createElement("span");
    element.className = className;
    element.style.display = "none";
    container.append(element);
  }
}

function hidePooledChildren(container, fromIndex = 0) {
  for (let index = fromIndex; index < container.children.length; index += 1) {
    container.children[index].style.display = "none";
  }
}

function syncCanvasSize(targetCanvas, targetCtx, width, height) {
  const pixelRatio = window.devicePixelRatio || 1;
  const pixelWidth = Math.max(1, Math.round(width * pixelRatio));
  const pixelHeight = Math.max(1, Math.round(height * pixelRatio));
  if (targetCanvas.width !== pixelWidth || targetCanvas.height !== pixelHeight) {
    targetCanvas.width = pixelWidth;
    targetCanvas.height = pixelHeight;
  }
  targetCtx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function createTube(number) {
  return {
    id: `tube-${number}`,
    label: `Пробирка ${number}`,
    contents: [],
    triggeredReactionKeys: [],
    activeEffects: [],
    analysis: createEmptyAnalysis(),
    lastReactionSummary: "Пробирка пуста.",
    dirty: true
  };
}

function createEmptyAnalysis() {
  return {
    pHCategory: "neutral",
    acidityScore: 0,
    displayColor: "rgba(210, 231, 239, 0.18)",
    overlayColor: "transparent",
    overlayOpacity: 0,
    gelOpacity: 0,
    precipitateColor: "rgba(235, 235, 235, 0.25)",
    precipitateHeight: 0,
    precipitateOpacity: 0,
    liquidOpacity: 0.1,
    textureOpacity: 0.02,
    sedimentOpacity: 0,
    clarity: 0.86,
    reactions: [],
    notes: [],
    contentsText: "Пусто"
  };
}

const REACTION_RULES = [
  {
    key: "acid-base-neutralization",
    label: "Нейтрализация",
    speed: "fast",
    note: "Идёт быстрая нейтрализация, смесь ощутимо нагревается.",
    predicate: ({ ids }) => hasAcid(ids) && hasAny(ids, ["koh", "ca_oh_2"]),
    animation: [
      { type: "flash", durationMs: 520, peak: 0.36 },
      { type: "heat", durationMs: 1500, peak: 0.66 }
    ]
  },
  {
    key: "silver-chloride",
    label: "Осаждение хлорида серебра",
    speed: "instant",
    note: "Мгновенно выпадает белый творожистый осадок AgCl.",
    predicate: ({ ids }) => ids.has("agno3") && hasChlorideSource(ids),
    precipitate: { color: [242, 242, 236], height: 0.16, opacity: 0.9 },
    animation: [
      { type: "flash", durationMs: 420, peak: 0.28 },
      { type: "precipitation", durationMs: 920, peak: 1 }
    ]
  },
  {
    key: "silver-iodide",
    label: "Осаждение иодида серебра",
    speed: "instant",
    note: "Практически сразу появляется ярко-жёлтый осадок AgI.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("ki"),
    precipitate: { color: [245, 212, 82], height: 0.18, opacity: 0.92 },
    animation: [
      { type: "flash", durationMs: 380, peak: 0.24 },
      { type: "precipitation", durationMs: 760, peak: 1 }
    ]
  },
  {
    key: "silver-sulfide",
    label: "Осаждение сульфида серебра",
    speed: "instant",
    note: "Сразу образуется чёрный осадок Ag₂S.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("na2s"),
    precipitate: { color: [42, 45, 48], height: 0.2, opacity: 0.95 },
    animation: [
      { type: "flash", durationMs: 420, peak: 0.22 },
      { type: "precipitation", durationMs: 720, peak: 1 }
    ]
  },
  {
    key: "silver-phosphate",
    label: "Осаждение фосфата серебра",
    speed: "fast",
    note: "Выпадает ярко-жёлтый осадок Ag₃PO₄.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("na3po4"),
    precipitate: { color: [244, 188, 36], height: 0.19, opacity: 0.96 },
    animation: [
      { type: "flash", durationMs: 440, peak: 0.24 },
      { type: "precipitation", durationMs: 980, peak: 1 }
    ]
  },
  {
    key: "silver-phosphate-chloride-transition",
    label: "Переход фосфата серебра в хлорид",
    priority: 13,
    suppresses: ["silver-phosphate"],
    speed: "fast",
    note: "Жёлтый осадок Ag₃PO₄ быстро переходит в белый AgCl после добавления HCl.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("na3po4") && ids.has("hcl"),
    clarify: 0.16,
    animation: [
      { type: "dissolve", durationMs: 1480, peak: 1 },
      { type: "flash", durationMs: 320, peak: 0.14 }
    ]
  },
  {
    key: "silver-oxide",
    label: "Осаждение оксида серебра",
    speed: "fast",
    note: "Раствор быстро темнеет, выпадает буро-коричневый осадок Ag₂O.",
    predicate: ({ ids }) => ids.has("agno3") && hasAny(ids, ["koh", "ca_oh_2"]),
    precipitate: { color: [96, 64, 38], height: 0.18, opacity: 0.9 },
    animation: [
      { type: "color-wave", durationMs: 760, peak: 0.28 },
      { type: "precipitation", durationMs: 960, peak: 1 }
    ]
  },
  {
    key: "silver-oxide-chloride-transition",
    label: "Переход оксида серебра в хлорид",
    priority: 13,
    suppresses: ["silver-oxide"],
    speed: "fast",
    note: "Бурый осадок Ag₂O исчезает в HCl, пробирка быстро заполняется белым AgCl.",
    predicate: ({ ids }) => ids.has("agno3") && hasAny(ids, ["koh", "ca_oh_2"]) && ids.has("hcl"),
    clarify: 0.16,
    animation: [
      { type: "dissolve", durationMs: 1520, peak: 1 },
      { type: "flash", durationMs: 320, peak: 0.16 }
    ]
  },
  {
    key: "acid-dissolves-silver-oxide",
    label: "Растворение оксида серебра кислотой",
    priority: 12,
    suppresses: ["silver-oxide"],
    speed: "fast",
    note: "Бурый осадок Ag₂O растворяется в кислоте, смесь заметно светлеет.",
    predicate: ({ ids }) =>
      ids.has("agno3")
      && hasAny(ids, ["koh", "ca_oh_2"])
      && hasAny(ids, ["h2so4", "hno3"]),
    clarify: 0.24,
    animation: [
      { type: "dissolve", durationMs: 1480, peak: 1 },
      { type: "color-wave", durationMs: 1020, peak: 0.22 },
      { type: "flash", durationMs: 280, peak: 0.12 }
    ]
  },
  {
    key: "silver-carbonate",
    label: "Осаждение карбоната серебра",
    speed: "fast",
    note: "Появляется бледно-жёлтый осадок карбоната серебра.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("li2co3"),
    precipitate: { color: [236, 223, 156], height: 0.18, opacity: 0.88 },
    animation: [
      { type: "flash", durationMs: 400, peak: 0.18 },
      { type: "precipitation", durationMs: 1120, peak: 1 }
    ]
  },
  {
    key: "silver-carbonate-chloride-transition",
    label: "Переход карбоната серебра в хлорид",
    priority: 13,
    suppresses: ["silver-carbonate"],
    speed: "fast",
    note: "Бледно-жёлтый осадок карбоната серебра переходит в белый AgCl, одновременно выделяется CO₂.",
    predicate: ({ ids }) => ids.has("agno3") && ids.has("li2co3") && ids.has("hcl"),
    clarify: 0.16,
    animation: [
      { type: "dissolve", durationMs: 1520, peak: 1 },
      { type: "gas", durationMs: 1940, peak: 0.82 },
      { type: "flash", durationMs: 280, peak: 0.12 }
    ]
  },
  {
    key: "barium-sulfate",
    label: "Осаждение сульфата бария",
    speed: "instant",
    note: "Белый тяжёлый осадок BaSO₄ выпадает сразу и быстро оседает.",
    predicate: ({ ids }) => ids.has("bacl2") && hasSulfateSource(ids),
    precipitate: { color: [244, 244, 241], height: 0.17, opacity: 0.94 },
    animation: [
      { type: "flash", durationMs: 380, peak: 0.2 },
      { type: "precipitation", durationMs: 820, peak: 1 }
    ]
  },
  {
    key: "calcium-sulfate",
    label: "Осаждение сульфата кальция",
    speed: "fast",
    note: "Смесь заметно мутнеет, выпадает белый мелкокристаллический осадок CaSO₄.",
    predicate: ({ ids }) => hasCalciumSource(ids) && hasSulfateSource(ids),
    precipitate: { color: [244, 243, 238], height: 0.18, opacity: 0.9 },
    animation: [
      { type: "flash", durationMs: 320, peak: 0.12 },
      { type: "precipitation", durationMs: 1220, peak: 1 }
    ]
  },
  {
    key: "barium-carbonate",
    label: "Осаждение карбоната бария",
    speed: "fast",
    note: "Выпадает плотный белый осадок BaCO₃.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("li2co3"),
    precipitate: { color: [245, 244, 239], height: 0.2, opacity: 0.94 },
    animation: [
      { type: "precipitation", durationMs: 1180, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-barium-carbonate",
    label: "Растворение карбоната бария кислотой",
    priority: 12,
    suppresses: ["barium-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Белый осадок BaCO₃ растворяется в кислоте с выделением пузырьков CO₂.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("li2co3") && hasAcid(ids),
    clarify: 0.28,
    animation: [
      { type: "dissolve", durationMs: 1560, peak: 1 },
      { type: "gas", durationMs: 1960, peak: 0.82 },
      { type: "flash", durationMs: 260, peak: 0.12 }
    ]
  },
  {
    key: "copper-hydroxide",
    label: "Осаждение гидроксида меди(II)",
    speed: "fast",
    note: "Появляется голубой студенистый осадок Cu(OH)₂.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && hasAny(ids, ["koh", "ca_oh_2"]),
    precipitate: { color: [122, 205, 241], height: 0.18, opacity: 0.82 },
    animation: [
      { type: "color-wave", durationMs: 860, peak: 0.32 },
      { type: "precipitation", durationMs: 1200, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-copper-hydroxide",
    label: "Растворение гидроксида меди кислотой",
    priority: 12,
    suppresses: ["copper-hydroxide"],
    speed: "fast",
    note: "Голубой осадок Cu(OH)₂ растворяется в кислоте, раствор снова становится голубым и прозрачнее.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && hasAny(ids, ["koh", "ca_oh_2"]) && hasAcid(ids),
    clarify: 0.24,
    overlay: { color: [98, 188, 236], opacity: 0.16 },
    animation: [
      { type: "dissolve", durationMs: 1520, peak: 1 },
      { type: "color-wave", durationMs: 1180, peak: 0.28 }
    ]
  },
  {
    key: "copper-phosphate",
    label: "Осаждение фосфата меди(II)",
    speed: "fast",
    note: "Появляется ярко-голубой осадок фосфата меди(II).",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("na3po4"),
    precipitate: { color: [88, 170, 232], height: 0.19, opacity: 0.9 },
    animation: [
      { type: "color-wave", durationMs: 940, peak: 0.32 },
      { type: "precipitation", durationMs: 1180, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-copper-phosphate",
    label: "Растворение фосфата меди кислотой",
    priority: 12,
    suppresses: ["copper-phosphate"],
    speed: "fast",
    note: "Ярко-голубой осадок фосфата меди растворяется в кислоте, раствор снова становится ярко-голубым.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.28,
    overlay: { color: [88, 186, 240], opacity: 0.18 },
    animation: [
      { type: "dissolve", durationMs: 1560, peak: 1 },
      { type: "color-wave", durationMs: 1180, peak: 0.28 }
    ]
  },
  {
    key: "copper-carbonate",
    label: "Осаждение основного карбоната меди",
    speed: "fast",
    note: "Раствор мутнеет, выпадает сине-зелёный осадок основного карбоната меди.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("li2co3"),
    precipitate: { color: [92, 182, 162], height: 0.2, opacity: 0.9 },
    animation: [
      { type: "color-wave", durationMs: 1040, peak: 0.34 },
      { type: "precipitation", durationMs: 1240, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-copper-carbonate",
    label: "Растворение карбоната меди кислотой",
    priority: 12,
    suppresses: ["copper-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Сине-зелёный осадок карбоната меди растворяется в кислоте, выделяется CO₂, раствор снова становится голубым.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("li2co3") && hasAcid(ids),
    clarify: 0.3,
    overlay: { color: [96, 182, 228], opacity: 0.18 },
    animation: [
      { type: "dissolve", durationMs: 1620, peak: 1 },
      { type: "gas", durationMs: 1960, peak: 0.86 },
      { type: "color-wave", durationMs: 1120, peak: 0.24 }
    ]
  },
  {
    key: "copper-silicate",
    label: "Осаждение силиката меди",
    speed: "medium",
    note: "Появляется голубовато-зелёный хлопьевидный осадок силиката меди.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("k2sio3"),
    precipitate: { color: [86, 184, 172], height: 0.18, opacity: 0.88 },
    gelOpacity: 0.12,
    animation: [
      { type: "color-wave", durationMs: 1420, peak: 0.28 },
      { type: "precipitation", durationMs: 1540, peak: 1 }
    ]
  },
  {
    key: "acid-decomposes-copper-silicate",
    label: "Разложение силиката меди кислотой",
    priority: 12,
    suppresses: ["copper-silicate"],
    speed: "medium",
    note: "Голубовато-зелёный осадок силиката меди разрушается кислотой, раствор синеет, остаётся гель кремниевой кислоты.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("k2sio3") && hasAcid(ids),
    overlay: { color: [84, 180, 232], opacity: 0.2 },
    animation: [
      { type: "dissolve", durationMs: 1740, peak: 1 },
      { type: "color-wave", durationMs: 1320, peak: 0.24 }
    ]
  },
  {
    key: "iron-hydroxide",
    label: "Осаждение гидроксида железа(III)",
    speed: "fast",
    note: "Бурый хлопьевидный осадок Fe(OH)₃ формируется почти сразу.",
    predicate: ({ ids }) => ids.has("fecl3") && hasAny(ids, ["koh", "ca_oh_2"]),
    precipitate: { color: [124, 74, 46], height: 0.22, opacity: 0.84 },
    animation: [
      { type: "color-wave", durationMs: 960, peak: 0.26 },
      { type: "precipitation", durationMs: 1300, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-iron-hydroxide",
    label: "Растворение гидроксида железа кислотой",
    priority: 12,
    suppresses: ["iron-hydroxide", "iron-carbonate-hydrolysis"],
    speed: "fast",
    note: "Бурый осадок соединений железа постепенно растворяется в кислоте, раствор становится прозрачнее.",
    predicate: ({ ids }) =>
      ids.has("fecl3")
      && hasAcid(ids)
      && (hasAny(ids, ["koh", "ca_oh_2"]) || ids.has("li2co3")),
    clarify: 0.28,
    overlay: { color: [182, 122, 64], opacity: 0.2 },
    animation: [
      { type: "dissolve", durationMs: 1680, peak: 1 },
      { type: "color-wave", durationMs: 1240, peak: 0.26 }
    ]
  },
  {
    key: "calcium-carbonate",
    label: "Осаждение карбоната кальция",
    speed: "fast",
    note: "Из раствора выпадает плотный белый осадок CaCO₃.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("li2co3"),
    precipitate: { color: [246, 245, 242], height: 0.24, opacity: 0.98 },
    clarify: 0.18,
    animation: [
      { type: "flash", durationMs: 320, peak: 0.14 },
      { type: "precipitation", durationMs: 1320, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-calcium-carbonate",
    label: "Растворение карбоната кальция кислотой",
    priority: 12,
    suppresses: ["calcium-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Белый осадок CaCO₃ растворяется в кислоте с выделением CO₂.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("li2co3") && hasAcid(ids),
    clarify: 0.32,
    animation: [
      { type: "dissolve", durationMs: 1620, peak: 1 },
      { type: "gas", durationMs: 2080, peak: 0.88 },
      { type: "flash", durationMs: 260, peak: 0.12 }
    ]
  },
  {
    key: "iron-carbonate-hydrolysis",
    label: "Гидролиз карбоната железа(III)",
    speed: "fast",
    note: "Раствор буреет, выпадает бурый осадок Fe(OH)₃ и заметны пузырьки CO₂.",
    predicate: ({ ids }) => ids.has("fecl3") && ids.has("li2co3"),
    precipitate: { color: [132, 79, 46], height: 0.22, opacity: 0.88 },
    overlay: { color: [170, 96, 48], opacity: 0.22 },
    animation: [
      { type: "color-wave", durationMs: 1200, peak: 0.24 },
      { type: "precipitation", durationMs: 1420, peak: 1 },
      { type: "gas", durationMs: 1680, peak: 0.56 }
    ]
  },
  {
    key: "iron-phosphate",
    label: "Осаждение фосфата железа",
    speed: "fast",
    note: "Появляется светлый желтовато-белый осадок фосфата железа.",
    predicate: ({ ids }) => ids.has("fecl3") && ids.has("na3po4"),
    precipitate: { color: [227, 221, 196], height: 0.16, opacity: 0.78 },
    animation: [{ type: "precipitation", durationMs: 1120, peak: 1 }]
  },
  {
    key: "acid-dissolves-iron-phosphate",
    label: "Растворение фосфата железа кислотой",
    priority: 12,
    suppresses: ["iron-phosphate"],
    speed: "fast",
    note: "Светлый осадок фосфата железа растворяется в кислоте, раствор вновь желтеет и светлеет.",
    predicate: ({ ids }) => ids.has("fecl3") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.26,
    overlay: { color: [186, 138, 76], opacity: 0.18 },
    animation: [
      { type: "dissolve", durationMs: 1620, peak: 1 },
      { type: "color-wave", durationMs: 1220, peak: 0.24 }
    ]
  },
  {
    key: "barium-phosphate",
    label: "Осаждение фосфата бария",
    speed: "fast",
    note: "Выпадает белый осадок фосфата бария.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("na3po4"),
    precipitate: { color: [238, 239, 233], height: 0.15, opacity: 0.84 },
    animation: [{ type: "precipitation", durationMs: 980, peak: 1 }]
  },
  {
    key: "acid-dissolves-barium-phosphate",
    label: "Растворение фосфата бария кислотой",
    priority: 12,
    suppresses: ["barium-phosphate"],
    speed: "fast",
    note: "Белый осадок фосфата бария растворяется в кислоте; в серной кислоте его сменяет осадок BaSO₄.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.18,
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "flash", durationMs: 280, peak: 0.12 }
    ]
  },
  {
    key: "calcium-phosphate",
    label: "Осаждение фосфата кальция",
    speed: "fast",
    note: "Образуется белый осадок фосфата кальция.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("na3po4"),
    precipitate: { color: [244, 243, 238], height: 0.18, opacity: 0.9 },
    animation: [
      { type: "precipitation", durationMs: 1080, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-calcium-phosphate",
    label: "Растворение фосфата кальция кислотой",
    priority: 12,
    suppresses: ["calcium-phosphate"],
    speed: "fast",
    note: "Белый осадок фосфата кальция растворяется в кислоте; в серной кислоте мутность может сохраниться из-за CaSO₄.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.18,
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "flash", durationMs: 260, peak: 0.1 }
    ]
  },
  {
    key: "barium-silicate",
    label: "Осаждение силиката бария",
    speed: "medium",
    note: "Постепенно образуется белый гелеобразный осадок силиката бария.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("k2sio3"),
    precipitate: { color: [233, 239, 237], height: 0.14, opacity: 0.62 },
    gelOpacity: 0.28,
    animation: [
      { type: "precipitation", durationMs: 1800, peak: 1 },
      { type: "color-wave", durationMs: 1500, peak: 0.18 }
    ]
  },
  {
    key: "acid-decomposes-barium-silicate",
    label: "Разложение силиката бария кислотой",
    priority: 12,
    suppresses: ["barium-silicate"],
    speed: "medium",
    note: "Белый осадок силиката бария разрушается кислотой, остаётся более прозрачный гель кремниевой кислоты.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("k2sio3") && hasAcid(ids),
    clarify: 0.08,
    animation: [
      { type: "dissolve", durationMs: 1760, peak: 1 },
      { type: "color-wave", durationMs: 1380, peak: 0.16 }
    ]
  },
  {
    key: "calcium-silicate",
    label: "Осаждение силиката кальция",
    speed: "medium",
    note: "Появляется белый хлопьевидный осадок силиката кальция.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("k2sio3"),
    precipitate: { color: [241, 243, 241], height: 0.17, opacity: 0.86 },
    gelOpacity: 0.18,
    animation: [
      { type: "precipitation", durationMs: 1680, peak: 1 },
      { type: "color-wave", durationMs: 1360, peak: 0.16 }
    ]
  },
  {
    key: "acid-decomposes-calcium-silicate",
    label: "Разложение силиката кальция кислотой",
    priority: 12,
    suppresses: ["calcium-silicate"],
    speed: "medium",
    note: "Белый осадок силиката кальция постепенно разрушается кислотой, остаётся желеобразная кремниевая кислота.",
    predicate: ({ ids }) => hasCalciumSource(ids) && ids.has("k2sio3") && hasAcid(ids),
    clarify: 0.08,
    animation: [
      { type: "dissolve", durationMs: 1740, peak: 1 },
      { type: "color-wave", durationMs: 1360, peak: 0.16 }
    ]
  },
  {
    key: "copper-sulfide",
    label: "Осаждение сульфида меди",
    speed: "instant",
    note: "Раствор темнеет, выпадает чёрный осадок CuS.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("na2s"),
    precipitate: { color: [34, 37, 44], height: 0.22, opacity: 0.92 },
    animation: [
      { type: "flash", durationMs: 360, peak: 0.18 },
      { type: "precipitation", durationMs: 700, peak: 1 }
    ]
  },
  {
    key: "iron-iodide-redox",
    label: "Окисление иодида железом(III)",
    speed: "medium",
    note: "Раствор постепенно буреет из-за выделения йода.",
    predicate: ({ ids }) => ids.has("fecl3") && ids.has("ki"),
    overlay: { color: [144, 72, 32], opacity: 0.36 },
    animation: [{ type: "color-wave", durationMs: 2100, peak: 0.38 }]
  },
  {
    key: "copper-iodide-redox",
    label: "Реакция нитрата меди с иодидом",
    speed: "medium",
    note: "Появляется белый осадок CuI, а раствор приобретает бурый оттенок йода.",
    predicate: ({ ids }) => ids.has("cu_no3_2") && ids.has("ki"),
    precipitate: { color: [236, 238, 233], height: 0.16, opacity: 0.82 },
    overlay: { color: [150, 82, 32], opacity: 0.28 },
    animation: [
      { type: "precipitation", durationMs: 1400, peak: 1 },
      { type: "color-wave", durationMs: 2000, peak: 0.32 }
    ]
  },
  {
    key: "ammonium-base-reaction",
    label: "Выделение аммиака из аммонийной соли",
    speed: "fast",
    note: "При добавлении щёлочи из аммонийной соли выделяется аммиак, заметны пузырьки газа.",
    predicate: ({ ids }) => ids.has("nh4cl") && hasAny(ids, ["koh", "ca_oh_2"]) && !hasAcid(ids),
    animation: [
      { type: "gas", durationMs: 1880, peak: 0.9 },
      { type: "flash", durationMs: 240, peak: 0.08 }
    ]
  },
  {
    key: "aluminum-hydroxide",
    label: "Осаждение гидроксида алюминия",
    speed: "fast",
    note: "Появляется белый студенистый осадок Al(OH)₃.",
    predicate: ({ ids, reagents }) =>
      ids.has("alcl3")
      && hasAny(ids, ["koh", "ca_oh_2"])
      && !hasExcessKoh(reagents),
    precipitate: { color: [244, 244, 241], height: 0.2, opacity: 0.86 },
    gelOpacity: 0.2,
    animation: [
      { type: "color-wave", durationMs: 980, peak: 0.22 },
      { type: "precipitation", durationMs: 1320, peak: 1 }
    ]
  },
  {
    key: "aluminum-hydroxide-dissolves-in-alkali",
    label: "Растворение гидроксида алюминия в избытке щёлочи",
    priority: 13,
    suppresses: ["aluminum-hydroxide"],
    speed: "medium",
    note: "Белый гель Al(OH)₃ растворяется в избытке KOH, раствор светлеет и снова становится прозрачнее.",
    predicate: ({ ids, reagents }) => ids.has("alcl3") && hasExcessKoh(reagents) && !hasAcid(ids),
    clarify: 0.32,
    animation: [
      { type: "dissolve", durationMs: 1640, peak: 1 },
      { type: "color-wave", durationMs: 1200, peak: 0.2 }
    ]
  },
  {
    key: "acid-dissolves-aluminum-hydroxide",
    label: "Растворение гидроксида алюминия кислотой",
    priority: 14,
    suppresses: ["aluminum-hydroxide", "aluminum-hydroxide-dissolves-in-alkali", "aluminum-carbonate-hydrolysis"],
    speed: "fast",
    note: "Белый осадок Al(OH)₃ растворяется в кислоте.",
    predicate: ({ ids }) =>
      ids.has("alcl3")
      && hasAcid(ids)
      && (hasAny(ids, ["koh", "ca_oh_2"]) || ids.has("li2co3")),
    clarify: 0.32,
    animation: [
      { type: "dissolve", durationMs: 1600, peak: 1 },
      { type: "color-wave", durationMs: 1120, peak: 0.18 }
    ]
  },
  {
    key: "aluminum-carbonate-hydrolysis",
    label: "Гидролиз карбоната алюминия",
    speed: "fast",
    note: "Сразу образуется белый гелеобразный осадок Al(OH)₃, выделяются пузырьки CO₂.",
    predicate: ({ ids }) => ids.has("alcl3") && ids.has("li2co3"),
    precipitate: { color: [243, 243, 239], height: 0.22, opacity: 0.88 },
    gelOpacity: 0.24,
    animation: [
      { type: "precipitation", durationMs: 1380, peak: 1 },
      { type: "gas", durationMs: 1680, peak: 0.64 }
    ]
  },
  {
    key: "aluminum-phosphate",
    label: "Осаждение фосфата алюминия",
    speed: "fast",
    note: "Выпадает белый осадок AlPO₄.",
    predicate: ({ ids }) => ids.has("alcl3") && ids.has("na3po4"),
    precipitate: { color: [242, 243, 239], height: 0.18, opacity: 0.88 },
    animation: [{ type: "precipitation", durationMs: 1160, peak: 1 }]
  },
  {
    key: "acid-dissolves-aluminum-phosphate",
    label: "Растворение фосфата алюминия кислотой",
    priority: 12,
    suppresses: ["aluminum-phosphate"],
    speed: "fast",
    note: "Белый осадок фосфата алюминия растворяется в кислоте.",
    predicate: ({ ids }) => ids.has("alcl3") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.24,
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "color-wave", durationMs: 1040, peak: 0.16 }
    ]
  },
  {
    key: "aluminum-sulfide-hydrolysis",
    label: "Гидролиз сульфида алюминия",
    speed: "fast",
    note: "Появляется белый студенистый осадок Al(OH)₃ и одновременно выделяется H₂S.",
    predicate: ({ ids }) => ids.has("alcl3") && ids.has("na2s"),
    precipitate: { color: [242, 243, 239], height: 0.2, opacity: 0.84 },
    gelOpacity: 0.18,
    animation: [
      { type: "precipitation", durationMs: 1260, peak: 1 },
      { type: "gas", durationMs: 1820, peak: 0.9 }
    ]
  },
  {
    key: "zinc-hydroxide",
    label: "Осаждение гидроксида цинка",
    speed: "fast",
    note: "Выпадает белый студенистый осадок Zn(OH)₂.",
    predicate: ({ ids, reagents }) =>
      ids.has("znso4")
      && hasAny(ids, ["koh", "ca_oh_2"])
      && !hasExcessKoh(reagents),
    precipitate: { color: [244, 244, 241], height: 0.19, opacity: 0.86 },
    gelOpacity: 0.12,
    animation: [
      { type: "color-wave", durationMs: 920, peak: 0.18 },
      { type: "precipitation", durationMs: 1240, peak: 1 }
    ]
  },
  {
    key: "zinc-hydroxide-dissolves-in-alkali",
    label: "Растворение гидроксида цинка в избытке щёлочи",
    priority: 13,
    suppresses: ["zinc-hydroxide"],
    speed: "medium",
    note: "Белый осадок Zn(OH)₂ растворяется в избытке KOH.",
    predicate: ({ ids, reagents }) => ids.has("znso4") && hasExcessKoh(reagents) && !hasAcid(ids),
    clarify: 0.28,
    animation: [
      { type: "dissolve", durationMs: 1580, peak: 1 },
      { type: "color-wave", durationMs: 1080, peak: 0.16 }
    ]
  },
  {
    key: "acid-dissolves-zinc-hydroxide",
    label: "Растворение гидроксида цинка кислотой",
    priority: 14,
    suppresses: ["zinc-hydroxide", "zinc-hydroxide-dissolves-in-alkali"],
    speed: "fast",
    note: "Белый осадок Zn(OH)₂ растворяется в кислоте.",
    predicate: ({ ids }) => ids.has("znso4") && hasAny(ids, ["koh", "ca_oh_2"]) && hasAcid(ids),
    clarify: 0.28,
    animation: [
      { type: "dissolve", durationMs: 1500, peak: 1 },
      { type: "color-wave", durationMs: 1020, peak: 0.16 }
    ]
  },
  {
    key: "zinc-phosphate",
    label: "Осаждение фосфата цинка",
    speed: "fast",
    note: "Образуется белый осадок фосфата цинка.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("na3po4"),
    precipitate: { color: [243, 243, 239], height: 0.18, opacity: 0.88 },
    animation: [{ type: "precipitation", durationMs: 1120, peak: 1 }]
  },
  {
    key: "acid-dissolves-zinc-phosphate",
    label: "Растворение фосфата цинка кислотой",
    priority: 12,
    suppresses: ["zinc-phosphate"],
    speed: "fast",
    note: "Белый осадок фосфата цинка растворяется в кислоте.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.22,
    animation: [
      { type: "dissolve", durationMs: 1520, peak: 1 },
      { type: "color-wave", durationMs: 1040, peak: 0.14 }
    ]
  },
  {
    key: "zinc-carbonate",
    label: "Осаждение карбоната цинка",
    speed: "fast",
    note: "Появляется белый осадок карбоната цинка.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("li2co3"),
    precipitate: { color: [242, 243, 239], height: 0.2, opacity: 0.9 },
    animation: [
      { type: "precipitation", durationMs: 1260, peak: 1 },
      { type: "color-wave", durationMs: 960, peak: 0.14 }
    ]
  },
  {
    key: "acid-dissolves-zinc-carbonate",
    label: "Растворение карбоната цинка кислотой",
    priority: 12,
    suppresses: ["zinc-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Белый осадок карбоната цинка растворяется в кислоте с выделением CO₂.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("li2co3") && hasAcid(ids),
    clarify: 0.28,
    animation: [
      { type: "dissolve", durationMs: 1560, peak: 1 },
      { type: "gas", durationMs: 1900, peak: 0.84 }
    ]
  },
  {
    key: "zinc-silicate",
    label: "Осаждение силиката цинка",
    speed: "medium",
    note: "Раствор мутнеет, появляется белый осадок силиката цинка.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("k2sio3"),
    precipitate: { color: [241, 243, 240], height: 0.17, opacity: 0.82 },
    gelOpacity: 0.12,
    animation: [
      { type: "precipitation", durationMs: 1500, peak: 1 },
      { type: "color-wave", durationMs: 1320, peak: 0.14 }
    ]
  },
  {
    key: "acid-decomposes-zinc-silicate",
    label: "Разложение силиката цинка кислотой",
    priority: 12,
    suppresses: ["zinc-silicate"],
    speed: "medium",
    note: "Белый осадок силиката цинка разрушается кислотой, остаётся гель кремниевой кислоты.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("k2sio3") && hasAcid(ids),
    clarify: 0.1,
    animation: [
      { type: "dissolve", durationMs: 1660, peak: 1 },
      { type: "color-wave", durationMs: 1260, peak: 0.14 }
    ]
  },
  {
    key: "zinc-sulfide",
    label: "Осаждение сульфида цинка",
    speed: "fast",
    note: "Выпадает белый осадок ZnS.",
    predicate: ({ ids }) => ids.has("znso4") && ids.has("na2s"),
    precipitate: { color: [243, 244, 240], height: 0.19, opacity: 0.88 },
    animation: [
      { type: "flash", durationMs: 300, peak: 0.12 },
      { type: "precipitation", durationMs: 980, peak: 1 }
    ]
  },
  {
    key: "nickel-hydroxide",
    label: "Осаждение гидроксида никеля",
    speed: "fast",
    note: "Появляется светло-зелёный осадок Ni(OH)₂.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && hasAny(ids, ["koh", "ca_oh_2"]),
    precipitate: { color: [160, 196, 112], height: 0.2, opacity: 0.86 },
    animation: [
      { type: "color-wave", durationMs: 980, peak: 0.26 },
      { type: "precipitation", durationMs: 1260, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-nickel-hydroxide",
    label: "Растворение гидроксида никеля кислотой",
    priority: 12,
    suppresses: ["nickel-hydroxide"],
    speed: "fast",
    note: "Светло-зелёный осадок Ni(OH)₂ растворяется в кислоте.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && hasAny(ids, ["koh", "ca_oh_2"]) && hasAcid(ids),
    clarify: 0.24,
    overlay: { color: [146, 192, 118], opacity: 0.12 },
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "color-wave", durationMs: 1120, peak: 0.18 }
    ]
  },
  {
    key: "nickel-phosphate",
    label: "Осаждение фосфата никеля",
    speed: "fast",
    note: "Выпадает бледно-зелёный осадок фосфата никеля.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("na3po4"),
    precipitate: { color: [174, 196, 134], height: 0.18, opacity: 0.86 },
    animation: [{ type: "precipitation", durationMs: 1160, peak: 1 }]
  },
  {
    key: "acid-dissolves-nickel-phosphate",
    label: "Растворение фосфата никеля кислотой",
    priority: 12,
    suppresses: ["nickel-phosphate"],
    speed: "fast",
    note: "Бледно-зелёный осадок фосфата никеля растворяется в кислоте.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("na3po4") && hasAcid(ids),
    clarify: 0.22,
    overlay: { color: [148, 188, 116], opacity: 0.1 },
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "color-wave", durationMs: 1040, peak: 0.14 }
    ]
  },
  {
    key: "nickel-carbonate",
    label: "Осаждение карбоната никеля",
    speed: "fast",
    note: "Появляется светло-зелёный осадок карбоната никеля.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("li2co3"),
    precipitate: { color: [148, 186, 118], height: 0.2, opacity: 0.88 },
    animation: [
      { type: "precipitation", durationMs: 1260, peak: 1 },
      { type: "color-wave", durationMs: 1020, peak: 0.18 }
    ]
  },
  {
    key: "acid-dissolves-nickel-carbonate",
    label: "Растворение карбоната никеля кислотой",
    priority: 12,
    suppresses: ["nickel-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Зелёный осадок карбоната никеля растворяется в кислоте с выделением CO₂.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("li2co3") && hasAcid(ids),
    clarify: 0.26,
    overlay: { color: [142, 186, 112], opacity: 0.12 },
    animation: [
      { type: "dissolve", durationMs: 1600, peak: 1 },
      { type: "gas", durationMs: 1940, peak: 0.82 }
    ]
  },
  {
    key: "nickel-silicate",
    label: "Осаждение силиката никеля",
    speed: "medium",
    note: "Смесь мутнеет, появляется серо-зелёный осадок силиката никеля.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("k2sio3"),
    precipitate: { color: [132, 176, 126], height: 0.18, opacity: 0.84 },
    gelOpacity: 0.1,
    animation: [
      { type: "precipitation", durationMs: 1520, peak: 1 },
      { type: "color-wave", durationMs: 1360, peak: 0.18 }
    ]
  },
  {
    key: "acid-decomposes-nickel-silicate",
    label: "Разложение силиката никеля кислотой",
    priority: 12,
    suppresses: ["nickel-silicate"],
    speed: "medium",
    note: "Осадок силиката никеля разрушается кислотой, остаётся гель кремниевой кислоты.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("k2sio3") && hasAcid(ids),
    clarify: 0.12,
    overlay: { color: [142, 182, 118], opacity: 0.1 },
    animation: [
      { type: "dissolve", durationMs: 1660, peak: 1 },
      { type: "color-wave", durationMs: 1220, peak: 0.14 }
    ]
  },
  {
    key: "nickel-sulfide",
    label: "Осаждение сульфида никеля",
    speed: "instant",
    note: "Раствор темнеет, выпадает чёрный осадок NiS.",
    predicate: ({ ids }) => ids.has("ni_no3_2") && ids.has("na2s"),
    precipitate: { color: [40, 43, 46], height: 0.21, opacity: 0.92 },
    animation: [
      { type: "flash", durationMs: 340, peak: 0.16 },
      { type: "precipitation", durationMs: 760, peak: 1 }
    ]
  },
  {
    key: "acid-dissolves-silver-phosphate",
    label: "Растворение фосфата серебра кислотой",
    priority: 12,
    suppresses: ["silver-phosphate"],
    speed: "fast",
    note: "Жёлтый осадок Ag₃PO₄ растворяется в кислоте.",
    predicate: ({ ids }) =>
      ids.has("agno3")
      && ids.has("na3po4")
      && hasAny(ids, ["h2so4", "hno3"])
      && !ids.has("hcl"),
    clarify: 0.24,
    animation: [
      { type: "dissolve", durationMs: 1520, peak: 1 },
      { type: "color-wave", durationMs: 1040, peak: 0.16 }
    ]
  },
  {
    key: "acid-dissolves-silver-carbonate",
    label: "Растворение карбоната серебра кислотой",
    priority: 12,
    suppresses: ["silver-carbonate", "acid-carbonate"],
    speed: "fast",
    note: "Бледно-жёлтый осадок Ag₂CO₃ растворяется в кислоте с выделением CO₂.",
    predicate: ({ ids }) =>
      ids.has("agno3")
      && ids.has("li2co3")
      && hasAny(ids, ["h2so4", "hno3"])
      && !ids.has("hcl"),
    clarify: 0.24,
    animation: [
      { type: "dissolve", durationMs: 1540, peak: 1 },
      { type: "gas", durationMs: 1880, peak: 0.82 }
    ]
  },
  {
    key: "acid-carbonate",
    label: "Разложение карбоната кислотой",
    speed: "fast",
    note: "Идёт бурное выделение пузырьков CO₂, мутность постепенно снижается.",
    predicate: ({ ids }) => hasAcid(ids) && ids.has("li2co3"),
    clarify: 0.22,
    animation: [
      { type: "gas", durationMs: 2200, peak: 1 },
      { type: "flash", durationMs: 300, peak: 0.12 }
    ]
  },
  {
    key: "acid-sulfide",
    label: "Выделение сероводорода",
    speed: "fast",
    note: "Кислота вытесняет H₂S: наблюдаются быстрые пузырьки газа.",
    predicate: ({ ids }) => hasAcid(ids) && ids.has("na2s"),
    animation: [{ type: "gas", durationMs: 1800, peak: 0.92 }]
  },
  {
    key: "acid-silicate",
    label: "Образование кремниевой кислоты",
    speed: "slow",
    note: "Раствор постепенно желируется, появляется бесцветный студенистый осадок.",
    predicate: ({ ids }) => hasAcid(ids) && ids.has("k2sio3"),
    precipitate: { color: [236, 240, 239], height: 0.1, opacity: 0.42 },
    gelOpacity: 0.42,
    animation: [
      { type: "precipitation", durationMs: 2800, peak: 1 },
      { type: "color-wave", durationMs: 2600, peak: 0.18 }
    ]
  },
  {
    key: "permanganate-iodide-neutral",
    label: "Окисление иодида перманганатом",
    speed: "medium",
    note: "Фиолетовый раствор постепенно буреет: выделяется йод и образуется бурый MnO₂.",
    predicate: ({ ids }) => ids.has("kmno4") && ids.has("ki") && !hasAcid(ids),
    overlay: { color: [134, 68, 22], opacity: 0.56 },
    precipitate: { color: [114, 82, 48], height: 0.14, opacity: 0.74 },
    bleach: 0.12,
    animation: [
      { type: "redox", durationMs: 2280, peak: 0.84 },
      { type: "precipitation", durationMs: 1680, peak: 1 },
      { type: "color-wave", durationMs: 1620, peak: 0.4 }
    ]
  },
  {
    key: "permanganate-iodide-acid",
    label: "Окисление иодида перманганатом в кислой среде",
    priority: 14,
    speed: "fast",
    note: "Фиолетовый перманганат быстро обесцвечивается, раствор буреет из-за выделения йода.",
    predicate: ({ ids }) => ids.has("kmno4") && ids.has("ki") && hasPermanganateCompatibleAcid(ids),
    overlay: { color: [144, 62, 18], opacity: 0.74 },
    bleach: 0.28,
    animation: [
      { type: "redox", durationMs: 1860, peak: 0.94 },
      { type: "color-wave", durationMs: 1260, peak: 0.48 },
      { type: "flash", durationMs: 320, peak: 0.14 }
    ]
  },
  {
    key: "permanganate-peroxide-neutral",
    label: "Разложение пероксида перманганатом",
    speed: "medium",
    note: "Фиолетовая окраска тускнеет, появляется бурый MnO₂ и выделяются пузырьки O₂.",
    predicate: ({ ids }) => ids.has("kmno4") && ids.has("h2o2") && !hasAcid(ids),
    precipitate: { color: [116, 84, 52], height: 0.16, opacity: 0.78 },
    bleach: 0.4,
    animation: [
      { type: "redox", durationMs: 2140, peak: 0.8 },
      { type: "gas", durationMs: 2320, peak: 0.86 },
      { type: "precipitation", durationMs: 1700, peak: 1 }
    ]
  },
  {
    key: "permanganate-peroxide-acid",
    label: "Окисление пероксида перманганатом",
    priority: 15,
    speed: "fast",
    note: "Фиолетовая окраска быстро исчезает, смесь нагревается и активно выделяет O₂.",
    predicate: ({ ids }) => ids.has("kmno4") && ids.has("h2o2") && hasPermanganateCompatibleAcid(ids),
    bleach: 0.74,
    animation: [
      { type: "redox", durationMs: 1760, peak: 0.9 },
      { type: "gas", durationMs: 2400, peak: 1 },
      { type: "heat", durationMs: 2000, peak: 0.72 },
      { type: "color-wave", durationMs: 1500, peak: 0.56 }
    ]
  }
];

const REACTION_EQUATIONS = {
  "acid-base-neutralization": ["H⁺ + OH⁻ → H₂O"],
  "silver-chloride": ["Ag⁺ + Cl⁻ → AgCl↓"],
  "silver-iodide": ["Ag⁺ + I⁻ → AgI↓"],
  "silver-sulfide": ["2Ag⁺ + S²⁻ → Ag₂S↓"],
  "silver-phosphate": ["3Ag⁺ + PO₄³⁻ → Ag₃PO₄↓"],
  "silver-phosphate-chloride-transition": ["Ag₃PO₄↓ + 3HCl → 3AgCl↓ + H₃PO₄"],
  "silver-oxide": ["2Ag⁺ + 2OH⁻ → Ag₂O↓ + H₂O"],
  "silver-oxide-chloride-transition": ["Ag₂O↓ + 2HCl → 2AgCl↓ + H₂O"],
  "acid-dissolves-silver-oxide": ["Ag₂O↓ + 2H⁺ → 2Ag⁺ + H₂O"],
  "silver-carbonate": ["2Ag⁺ + CO₃²⁻ → Ag₂CO₃↓"],
  "silver-carbonate-chloride-transition": ["Ag₂CO₃↓ + 2HCl → 2AgCl↓ + H₂O + CO₂↑"],
  "acid-dissolves-silver-phosphate": ["Ag₃PO₄↓ + 3H⁺ → 3Ag⁺ + H₃PO₄"],
  "acid-dissolves-silver-carbonate": ["Ag₂CO₃↓ + 2H⁺ → 2Ag⁺ + H₂O + CO₂↑"],
  "barium-sulfate": ["Ba²⁺ + SO₄²⁻ → BaSO₄↓"],
  "calcium-sulfate": ["Ca²⁺ + SO₄²⁻ → CaSO₄↓"],
  "barium-carbonate": ["Ba²⁺ + CO₃²⁻ → BaCO₃↓"],
  "acid-dissolves-barium-carbonate": ["BaCO₃↓ + 2H⁺ → Ba²⁺ + H₂O + CO₂↑"],
  "copper-hydroxide": ["Cu²⁺ + 2OH⁻ → Cu(OH)₂↓"],
  "acid-dissolves-copper-hydroxide": ["Cu(OH)₂↓ + 2H⁺ → Cu²⁺ + 2H₂O"],
  "copper-phosphate": ["3Cu²⁺ + 2PO₄³⁻ → Cu₃(PO₄)₂↓"],
  "acid-dissolves-copper-phosphate": ["Cu₃(PO₄)₂↓ + 6H⁺ → 3Cu²⁺ + 2H₃PO₄"],
  "copper-carbonate": ["2Cu²⁺ + 2CO₃²⁻ + H₂O → Cu₂(OH)₂CO₃↓ + CO₂↑"],
  "acid-dissolves-copper-carbonate": ["Cu₂(OH)₂CO₃↓ + 4H⁺ → 2Cu²⁺ + 3H₂O + CO₂↑"],
  "copper-silicate": ["Cu²⁺ + SiO₃²⁻ → CuSiO₃↓"],
  "acid-decomposes-copper-silicate": ["CuSiO₃↓ + 2H⁺ → Cu²⁺ + H₂SiO₃↓"],
  "iron-hydroxide": ["Fe³⁺ + 3OH⁻ → Fe(OH)₃↓"],
  "acid-dissolves-iron-hydroxide": ["Fe(OH)₃↓ + 3H⁺ → Fe³⁺ + 3H₂O"],
  "calcium-carbonate": ["Ca²⁺ + CO₃²⁻ → CaCO₃↓"],
  "acid-dissolves-calcium-carbonate": ["CaCO₃↓ + 2H⁺ → Ca²⁺ + H₂O + CO₂↑"],
  "iron-carbonate-hydrolysis": ["2Fe³⁺ + 3CO₃²⁻ + 3H₂O → 2Fe(OH)₃↓ + 3CO₂↑"],
  "iron-phosphate": ["Fe³⁺ + PO₄³⁻ → FePO₄↓"],
  "acid-dissolves-iron-phosphate": ["FePO₄↓ + 3H⁺ → Fe³⁺ + H₃PO₄"],
  "barium-phosphate": ["3Ba²⁺ + 2PO₄³⁻ → Ba₃(PO₄)₂↓"],
  "acid-dissolves-barium-phosphate": ["Ba₃(PO₄)₂↓ + 6H⁺ → 3Ba²⁺ + 2H₃PO₄"],
  "calcium-phosphate": ["3Ca²⁺ + 2PO₄³⁻ → Ca₃(PO₄)₂↓"],
  "acid-dissolves-calcium-phosphate": ["Ca₃(PO₄)₂↓ + 6H⁺ → 3Ca²⁺ + 2H₃PO₄"],
  "barium-silicate": ["Ba²⁺ + SiO₃²⁻ → BaSiO₃↓"],
  "acid-decomposes-barium-silicate": ["BaSiO₃↓ + 2H⁺ → Ba²⁺ + H₂SiO₃↓"],
  "calcium-silicate": ["Ca²⁺ + SiO₃²⁻ → CaSiO₃↓"],
  "acid-decomposes-calcium-silicate": ["CaSiO₃↓ + 2H⁺ → Ca²⁺ + H₂SiO₃↓"],
  "copper-sulfide": ["Cu²⁺ + S²⁻ → CuS↓"],
  "iron-iodide-redox": ["2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂"],
  "copper-iodide-redox": ["2Cu²⁺ + 4I⁻ → 2CuI↓ + I₂"],
  "ammonium-base-reaction": ["NH₄⁺ + OH⁻ → NH₃↑ + H₂O"],
  "aluminum-hydroxide": ["Al³⁺ + 3OH⁻ → Al(OH)₃↓"],
  "aluminum-hydroxide-dissolves-in-alkali": ["Al(OH)₃↓ + OH⁻ → [Al(OH)₄]⁻"],
  "acid-dissolves-aluminum-hydroxide": ["Al(OH)₃↓ + 3H⁺ → Al³⁺ + 3H₂O"],
  "aluminum-carbonate-hydrolysis": ["2Al³⁺ + 3CO₃²⁻ + 3H₂O → 2Al(OH)₃↓ + 3CO₂↑"],
  "aluminum-phosphate": ["Al³⁺ + PO₄³⁻ → AlPO₄↓"],
  "acid-dissolves-aluminum-phosphate": ["AlPO₄↓ + 3H⁺ → Al³⁺ + H₃PO₄"],
  "aluminum-sulfide-hydrolysis": ["2Al³⁺ + 3S²⁻ + 6H₂O → 2Al(OH)₃↓ + 3H₂S↑"],
  "zinc-hydroxide": ["Zn²⁺ + 2OH⁻ → Zn(OH)₂↓"],
  "zinc-hydroxide-dissolves-in-alkali": ["Zn(OH)₂↓ + 2OH⁻ → [Zn(OH)₄]²⁻"],
  "acid-dissolves-zinc-hydroxide": ["Zn(OH)₂↓ + 2H⁺ → Zn²⁺ + 2H₂O"],
  "zinc-phosphate": ["3Zn²⁺ + 2PO₄³⁻ → Zn₃(PO₄)₂↓"],
  "acid-dissolves-zinc-phosphate": ["Zn₃(PO₄)₂↓ + 6H⁺ → 3Zn²⁺ + 2H₃PO₄"],
  "zinc-carbonate": ["Zn²⁺ + CO₃²⁻ → ZnCO₃↓"],
  "acid-dissolves-zinc-carbonate": ["ZnCO₃↓ + 2H⁺ → Zn²⁺ + H₂O + CO₂↑"],
  "zinc-silicate": ["Zn²⁺ + SiO₃²⁻ → ZnSiO₃↓"],
  "acid-decomposes-zinc-silicate": ["ZnSiO₃↓ + 2H⁺ → Zn²⁺ + H₂SiO₃↓"],
  "zinc-sulfide": ["Zn²⁺ + S²⁻ → ZnS↓"],
  "nickel-hydroxide": ["Ni²⁺ + 2OH⁻ → Ni(OH)₂↓"],
  "acid-dissolves-nickel-hydroxide": ["Ni(OH)₂↓ + 2H⁺ → Ni²⁺ + 2H₂O"],
  "nickel-phosphate": ["3Ni²⁺ + 2PO₄³⁻ → Ni₃(PO₄)₂↓"],
  "acid-dissolves-nickel-phosphate": ["Ni₃(PO₄)₂↓ + 6H⁺ → 3Ni²⁺ + 2H₃PO₄"],
  "nickel-carbonate": ["Ni²⁺ + CO₃²⁻ → NiCO₃↓"],
  "acid-dissolves-nickel-carbonate": ["NiCO₃↓ + 2H⁺ → Ni²⁺ + H₂O + CO₂↑"],
  "nickel-silicate": ["Ni²⁺ + SiO₃²⁻ → NiSiO₃↓"],
  "acid-decomposes-nickel-silicate": ["NiSiO₃↓ + 2H⁺ → Ni²⁺ + H₂SiO₃↓"],
  "nickel-sulfide": ["Ni²⁺ + S²⁻ → NiS↓"],
  "acid-carbonate": ["CO₃²⁻ + 2H⁺ → CO₂↑ + H₂O"],
  "acid-sulfide": ["S²⁻ + 2H⁺ → H₂S↑"],
  "acid-silicate": ["SiO₃²⁻ + 2H⁺ → H₂SiO₃↓"],
  "permanganate-iodide-neutral": ["2MnO₄⁻ + 6I⁻ + 4H₂O → 2MnO₂↓ + 3I₂ + 8OH⁻"],
  "permanganate-iodide-acid": ["2MnO₄⁻ + 10I⁻ + 16H⁺ → 2Mn²⁺ + 5I₂ + 8H₂O"],
  "permanganate-peroxide-neutral": ["2MnO₄⁻ + 3H₂O₂ → 2MnO₂↓ + 3O₂↑ + 2OH⁻ + 2H₂O"],
  "permanganate-peroxide-acid": ["2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 8H₂O + 5O₂↑"]
};

const REACTION_MOLECULAR_EQUATIONS = {
  "acid-base-neutralization": [
    "HCl + KOH → KCl + H₂O",
    "HNO₃ + KOH → KNO₃ + H₂O",
    "H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O",
    "2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O",
    "2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O",
    "H₂SO₄ + Ca(OH)₂ → CaSO₄↓ + 2H₂O"
  ],
  "silver-chloride": [
    "AgNO₃ + HCl → AgCl↓ + HNO₃",
    "2AgNO₃ + BaCl₂ → 2AgCl↓ + Ba(NO₃)₂",
    "3AgNO₃ + FeCl₃ → 3AgCl↓ + Fe(NO₃)₃",
    "3AgNO₃ + AlCl₃ → 3AgCl↓ + Al(NO₃)₃",
    "AgNO₃ + NH₄Cl → AgCl↓ + NH₄NO₃"
  ],
  "silver-iodide": ["AgNO₃ + KI → AgI↓ + KNO₃"],
  "silver-sulfide": ["2AgNO₃ + Na₂S → Ag₂S↓ + 2NaNO₃"],
  "silver-phosphate": ["3AgNO₃ + Na₃PO₄ → Ag₃PO₄↓ + 3NaNO₃"],
  "silver-phosphate-chloride-transition": ["Ag₃PO₄↓ + 3HCl → 3AgCl↓ + H₃PO₄"],
  "silver-oxide": [
    "2AgNO₃ + 2KOH → Ag₂O↓ + 2KNO₃ + H₂O",
    "2AgNO₃ + Ca(OH)₂ → Ag₂O↓ + Ca(NO₃)₂ + H₂O"
  ],
  "silver-oxide-chloride-transition": ["Ag₂O↓ + 2HCl → 2AgCl↓ + H₂O"],
  "acid-dissolves-silver-oxide": [
    "Ag₂O↓ + H₂SO₄ → Ag₂SO₄ + H₂O",
    "Ag₂O↓ + 2HNO₃ → 2AgNO₃ + H₂O"
  ],
  "silver-carbonate": ["2AgNO₃ + Li₂CO₃ → Ag₂CO₃↓ + 2LiNO₃"],
  "silver-carbonate-chloride-transition": ["Ag₂CO₃↓ + 2HCl → 2AgCl↓ + H₂O + CO₂↑"],
  "acid-dissolves-silver-phosphate": [
    "Ag₃PO₄↓ + 3HNO₃ → 3AgNO₃ + H₃PO₄",
    "2Ag₃PO₄↓ + 3H₂SO₄ → 3Ag₂SO₄ + 2H₃PO₄"
  ],
  "acid-dissolves-silver-carbonate": [
    "Ag₂CO₃↓ + 2HNO₃ → 2AgNO₃ + H₂O + CO₂↑",
    "Ag₂CO₃↓ + H₂SO₄ → Ag₂SO₄ + H₂O + CO₂↑"
  ],
  "barium-sulfate": [
    "BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl",
    "BaCl₂ + ZnSO₄ → BaSO₄↓ + ZnCl₂"
  ],
  "calcium-sulfate": [
    "Ca(OH)₂ + H₂SO₄ → CaSO₄↓ + 2H₂O",
    "Ca(NO₃)₂ + H₂SO₄ → CaSO₄↓ + 2HNO₃",
    "Ca(OH)₂ + ZnSO₄ → CaSO₄↓ + Zn(OH)₂↓",
    "Ca(NO₃)₂ + ZnSO₄ → CaSO₄↓ + Zn(NO₃)₂"
  ],
  "barium-carbonate": ["BaCl₂ + Li₂CO₃ → BaCO₃↓ + 2LiCl"],
  "acid-dissolves-barium-carbonate": [
    "BaCO₃↓ + 2HCl → BaCl₂ + H₂O + CO₂↑",
    "BaCO₃↓ + H₂SO₄ → BaSO₄↓ + H₂O + CO₂↑",
    "BaCO₃↓ + 2HNO₃ → Ba(NO₃)₂ + H₂O + CO₂↑"
  ],
  "copper-hydroxide": [
    "Cu(NO₃)₂ + 2KOH → Cu(OH)₂↓ + 2KNO₃",
    "Cu(NO₃)₂ + Ca(OH)₂ → Cu(OH)₂↓ + Ca(NO₃)₂"
  ],
  "acid-dissolves-copper-hydroxide": [
    "Cu(OH)₂↓ + 2HCl → CuCl₂ + 2H₂O",
    "Cu(OH)₂↓ + H₂SO₄ → CuSO₄ + 2H₂O",
    "Cu(OH)₂↓ + 2HNO₃ → Cu(NO₃)₂ + 2H₂O"
  ],
  "copper-phosphate": ["3Cu(NO₃)₂ + 2Na₃PO₄ → Cu₃(PO₄)₂↓ + 6NaNO₃"],
  "acid-dissolves-copper-phosphate": [
    "Cu₃(PO₄)₂↓ + 6HCl → 3CuCl₂ + 2H₃PO₄",
    "Cu₃(PO₄)₂↓ + 3H₂SO₄ → 3CuSO₄ + 2H₃PO₄",
    "Cu₃(PO₄)₂↓ + 6HNO₃ → 3Cu(NO₃)₂ + 2H₃PO₄"
  ],
  "copper-carbonate": ["2Cu(NO₃)₂ + 2Li₂CO₃ + H₂O → Cu₂(OH)₂CO₃↓ + 4LiNO₃ + CO₂↑"],
  "acid-dissolves-copper-carbonate": [
    "Cu₂(OH)₂CO₃↓ + 4HCl → 2CuCl₂ + 3H₂O + CO₂↑",
    "Cu₂(OH)₂CO₃↓ + 2H₂SO₄ → 2CuSO₄ + 3H₂O + CO₂↑",
    "Cu₂(OH)₂CO₃↓ + 4HNO₃ → 2Cu(NO₃)₂ + 3H₂O + CO₂↑"
  ],
  "copper-silicate": ["Cu(NO₃)₂ + K₂SiO₃ → CuSiO₃↓ + 2KNO₃"],
  "acid-decomposes-copper-silicate": [
    "CuSiO₃↓ + 2HCl → CuCl₂ + H₂SiO₃↓",
    "CuSiO₃↓ + H₂SO₄ → CuSO₄ + H₂SiO₃↓",
    "CuSiO₃↓ + 2HNO₃ → Cu(NO₃)₂ + H₂SiO₃↓"
  ],
  "iron-hydroxide": [
    "FeCl₃ + 3KOH → Fe(OH)₃↓ + 3KCl",
    "2FeCl₃ + 3Ca(OH)₂ → 2Fe(OH)₃↓ + 3CaCl₂"
  ],
  "acid-dissolves-iron-hydroxide": [
    "Fe(OH)₃↓ + 3HCl → FeCl₃ + 3H₂O",
    "2Fe(OH)₃↓ + 3H₂SO₄ → Fe₂(SO₄)₃ + 6H₂O",
    "Fe(OH)₃↓ + 3HNO₃ → Fe(NO₃)₃ + 3H₂O"
  ],
  "calcium-carbonate": [
    "Ca(OH)₂ + Li₂CO₃ → CaCO₃↓ + 2LiOH",
    "Ca(NO₃)₂ + Li₂CO₃ → CaCO₃↓ + 2LiNO₃"
  ],
  "acid-dissolves-calcium-carbonate": [
    "CaCO₃↓ + 2HCl → CaCl₂ + H₂O + CO₂↑",
    "CaCO₃↓ + H₂SO₄ → CaSO₄↓ + H₂O + CO₂↑",
    "CaCO₃↓ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂↑"
  ],
  "iron-carbonate-hydrolysis": ["2FeCl₃ + 3Li₂CO₃ + 3H₂O → 2Fe(OH)₃↓ + 3CO₂↑ + 6LiCl"],
  "iron-phosphate": ["FeCl₃ + Na₃PO₄ → FePO₄↓ + 3NaCl"],
  "acid-dissolves-iron-phosphate": [
    "FePO₄↓ + 3HCl → FeCl₃ + H₃PO₄",
    "2FePO₄↓ + 3H₂SO₄ → Fe₂(SO₄)₃ + 2H₃PO₄",
    "FePO₄↓ + 3HNO₃ → Fe(NO₃)₃ + H₃PO₄"
  ],
  "barium-phosphate": ["3BaCl₂ + 2Na₃PO₄ → Ba₃(PO₄)₂↓ + 6NaCl"],
  "acid-dissolves-barium-phosphate": [
    "Ba₃(PO₄)₂↓ + 6HCl → 3BaCl₂ + 2H₃PO₄",
    "Ba₃(PO₄)₂↓ + 3H₂SO₄ → 3BaSO₄↓ + 2H₃PO₄",
    "Ba₃(PO₄)₂↓ + 6HNO₃ → 3Ba(NO₃)₂ + 2H₃PO₄"
  ],
  "calcium-phosphate": [
    "3Ca(OH)₂ + 2Na₃PO₄ → Ca₃(PO₄)₂↓ + 6NaOH",
    "3Ca(NO₃)₂ + 2Na₃PO₄ → Ca₃(PO₄)₂↓ + 6NaNO₃"
  ],
  "acid-dissolves-calcium-phosphate": [
    "Ca₃(PO₄)₂↓ + 6HCl → 3CaCl₂ + 2H₃PO₄",
    "Ca₃(PO₄)₂↓ + 3H₂SO₄ → 3CaSO₄↓ + 2H₃PO₄",
    "Ca₃(PO₄)₂↓ + 6HNO₃ → 3Ca(NO₃)₂ + 2H₃PO₄"
  ],
  "barium-silicate": ["BaCl₂ + K₂SiO₃ → BaSiO₃↓ + 2KCl"],
  "acid-decomposes-barium-silicate": [
    "BaSiO₃↓ + 2HCl → BaCl₂ + H₂SiO₃↓",
    "BaSiO₃↓ + H₂SO₄ → BaSO₄↓ + H₂SiO₃↓",
    "BaSiO₃↓ + 2HNO₃ → Ba(NO₃)₂ + H₂SiO₃↓"
  ],
  "calcium-silicate": [
    "Ca(OH)₂ + K₂SiO₃ → CaSiO₃↓ + 2KOH",
    "Ca(NO₃)₂ + K₂SiO₃ → CaSiO₃↓ + 2KNO₃"
  ],
  "acid-decomposes-calcium-silicate": [
    "CaSiO₃↓ + 2HCl → CaCl₂ + H₂SiO₃↓",
    "CaSiO₃↓ + H₂SO₄ → CaSO₄↓ + H₂SiO₃↓",
    "CaSiO₃↓ + 2HNO₃ → Ca(NO₃)₂ + H₂SiO₃↓"
  ],
  "copper-sulfide": ["Cu(NO₃)₂ + Na₂S → CuS↓ + 2NaNO₃"],
  "iron-iodide-redox": ["2FeCl₃ + 2KI → 2FeCl₂ + I₂ + 2KCl"],
  "copper-iodide-redox": ["2Cu(NO₃)₂ + 4KI → 2CuI↓ + I₂ + 4KNO₃"],
  "ammonium-base-reaction": [
    "NH₄Cl + KOH → NH₃↑ + KCl + H₂O",
    "2NH₄Cl + Ca(OH)₂ → 2NH₃↑ + CaCl₂ + 2H₂O"
  ],
  "aluminum-hydroxide": [
    "AlCl₃ + 3KOH → Al(OH)₃↓ + 3KCl",
    "2AlCl₃ + 3Ca(OH)₂ → 2Al(OH)₃↓ + 3CaCl₂"
  ],
  "aluminum-hydroxide-dissolves-in-alkali": [
    "AlCl₃ + 4KOH → K[Al(OH)₄] + 3KCl",
    "Al(OH)₃↓ + KOH → K[Al(OH)₄]"
  ],
  "acid-dissolves-aluminum-hydroxide": [
    "Al(OH)₃↓ + 3HCl → AlCl₃ + 3H₂O",
    "2Al(OH)₃↓ + 3H₂SO₄ → Al₂(SO₄)₃ + 6H₂O",
    "Al(OH)₃↓ + 3HNO₃ → Al(NO₃)₃ + 3H₂O"
  ],
  "aluminum-carbonate-hydrolysis": [
    "2AlCl₃ + 3Li₂CO₃ + 3H₂O → 2Al(OH)₃↓ + 6LiCl + 3CO₂↑"
  ],
  "aluminum-phosphate": ["AlCl₃ + Na₃PO₄ → AlPO₄↓ + 3NaCl"],
  "acid-dissolves-aluminum-phosphate": [
    "AlPO₄↓ + 3HCl → AlCl₃ + H₃PO₄",
    "2AlPO₄↓ + 3H₂SO₄ → Al₂(SO₄)₃ + 2H₃PO₄",
    "AlPO₄↓ + 3HNO₃ → Al(NO₃)₃ + H₃PO₄"
  ],
  "aluminum-sulfide-hydrolysis": [
    "2AlCl₃ + 3Na₂S + 6H₂O → 2Al(OH)₃↓ + 6NaCl + 3H₂S↑"
  ],
  "zinc-hydroxide": [
    "ZnSO₄ + 2KOH → Zn(OH)₂↓ + K₂SO₄",
    "ZnSO₄ + Ca(OH)₂ → Zn(OH)₂↓ + CaSO₄↓"
  ],
  "zinc-hydroxide-dissolves-in-alkali": [
    "ZnSO₄ + 4KOH → K₂[Zn(OH)₄] + K₂SO₄",
    "Zn(OH)₂↓ + 2KOH → K₂[Zn(OH)₄]"
  ],
  "acid-dissolves-zinc-hydroxide": [
    "Zn(OH)₂↓ + 2HCl → ZnCl₂ + 2H₂O",
    "Zn(OH)₂↓ + H₂SO₄ → ZnSO₄ + 2H₂O",
    "Zn(OH)₂↓ + 2HNO₃ → Zn(NO₃)₂ + 2H₂O"
  ],
  "zinc-phosphate": ["3ZnSO₄ + 2Na₃PO₄ → Zn₃(PO₄)₂↓ + 3Na₂SO₄"],
  "acid-dissolves-zinc-phosphate": [
    "Zn₃(PO₄)₂↓ + 6HCl → 3ZnCl₂ + 2H₃PO₄",
    "Zn₃(PO₄)₂↓ + 3H₂SO₄ → 3ZnSO₄ + 2H₃PO₄",
    "Zn₃(PO₄)₂↓ + 6HNO₃ → 3Zn(NO₃)₂ + 2H₃PO₄"
  ],
  "zinc-carbonate": ["ZnSO₄ + Li₂CO₃ → ZnCO₃↓ + Li₂SO₄"],
  "acid-dissolves-zinc-carbonate": [
    "ZnCO₃↓ + 2HCl → ZnCl₂ + H₂O + CO₂↑",
    "ZnCO₃↓ + H₂SO₄ → ZnSO₄ + H₂O + CO₂↑",
    "ZnCO₃↓ + 2HNO₃ → Zn(NO₃)₂ + H₂O + CO₂↑"
  ],
  "zinc-silicate": ["ZnSO₄ + K₂SiO₃ → ZnSiO₃↓ + K₂SO₄"],
  "acid-decomposes-zinc-silicate": [
    "ZnSiO₃↓ + 2HCl → ZnCl₂ + H₂SiO₃↓",
    "ZnSiO₃↓ + H₂SO₄ → ZnSO₄ + H₂SiO₃↓",
    "ZnSiO₃↓ + 2HNO₃ → Zn(NO₃)₂ + H₂SiO₃↓"
  ],
  "zinc-sulfide": ["ZnSO₄ + Na₂S → ZnS↓ + Na₂SO₄"],
  "nickel-hydroxide": [
    "Ni(NO₃)₂ + 2KOH → Ni(OH)₂↓ + 2KNO₃",
    "Ni(NO₃)₂ + Ca(OH)₂ → Ni(OH)₂↓ + Ca(NO₃)₂"
  ],
  "acid-dissolves-nickel-hydroxide": [
    "Ni(OH)₂↓ + 2HCl → NiCl₂ + 2H₂O",
    "Ni(OH)₂↓ + H₂SO₄ → NiSO₄ + 2H₂O",
    "Ni(OH)₂↓ + 2HNO₃ → Ni(NO₃)₂ + 2H₂O"
  ],
  "nickel-phosphate": ["3Ni(NO₃)₂ + 2Na₃PO₄ → Ni₃(PO₄)₂↓ + 6NaNO₃"],
  "acid-dissolves-nickel-phosphate": [
    "Ni₃(PO₄)₂↓ + 6HCl → 3NiCl₂ + 2H₃PO₄",
    "Ni₃(PO₄)₂↓ + 3H₂SO₄ → 3NiSO₄ + 2H₃PO₄",
    "Ni₃(PO₄)₂↓ + 6HNO₃ → 3Ni(NO₃)₂ + 2H₃PO₄"
  ],
  "nickel-carbonate": ["Ni(NO₃)₂ + Li₂CO₃ → NiCO₃↓ + 2LiNO₃"],
  "acid-dissolves-nickel-carbonate": [
    "NiCO₃↓ + 2HCl → NiCl₂ + H₂O + CO₂↑",
    "NiCO₃↓ + H₂SO₄ → NiSO₄ + H₂O + CO₂↑",
    "NiCO₃↓ + 2HNO₃ → Ni(NO₃)₂ + H₂O + CO₂↑"
  ],
  "nickel-silicate": ["Ni(NO₃)₂ + K₂SiO₃ → NiSiO₃↓ + 2KNO₃"],
  "acid-decomposes-nickel-silicate": [
    "NiSiO₃↓ + 2HCl → NiCl₂ + H₂SiO₃↓",
    "NiSiO₃↓ + H₂SO₄ → NiSO₄ + H₂SiO₃↓",
    "NiSiO₃↓ + 2HNO₃ → Ni(NO₃)₂ + H₂SiO₃↓"
  ],
  "nickel-sulfide": ["Ni(NO₃)₂ + Na₂S → NiS↓ + 2NaNO₃"],
  "acid-carbonate": [
    "Li₂CO₃ + 2HCl → 2LiCl + H₂O + CO₂↑",
    "Li₂CO₃ + H₂SO₄ → Li₂SO₄ + H₂O + CO₂↑",
    "Li₂CO₃ + 2HNO₃ → 2LiNO₃ + H₂O + CO₂↑"
  ],
  "acid-sulfide": [
    "Na₂S + 2HCl → 2NaCl + H₂S↑",
    "Na₂S + H₂SO₄ → Na₂SO₄ + H₂S↑",
    "Na₂S + 2HNO₃ → 2NaNO₃ + H₂S↑"
  ],
  "acid-silicate": [
    "K₂SiO₃ + 2HCl → 2KCl + H₂SiO₃↓",
    "K₂SiO₃ + H₂SO₄ → K₂SO₄ + H₂SiO₃↓",
    "K₂SiO₃ + 2HNO₃ → 2KNO₃ + H₂SiO₃↓"
  ],
  "permanganate-iodide-neutral": ["2KMnO₄ + 6KI + 4H₂O → 2MnO₂↓ + 3I₂ + 8KOH"],
  "permanganate-iodide-acid": [
    "2KMnO₄ + 10KI + 8H₂SO₄ → 2MnSO₄ + 6K₂SO₄ + 5I₂ + 8H₂O",
    "2KMnO₄ + 10KI + 16HNO₃ → 2Mn(NO₃)₂ + 12KNO₃ + 5I₂ + 8H₂O"
  ],
  "permanganate-peroxide-neutral": ["2KMnO₄ + 3H₂O₂ → 2MnO₂↓ + 3O₂↑ + 2KOH + 2H₂O"],
  "permanganate-peroxide-acid": [
    "2KMnO₄ + 5H₂O₂ + 3H₂SO₄ → K₂SO₄ + 2MnSO₄ + 8H₂O + 5O₂↑",
    "2KMnO₄ + 5H₂O₂ + 6HNO₃ → 2Mn(NO₃)₂ + 2KNO₃ + 8H₂O + 5O₂↑"
  ]
};

init();

function init() {
  buildReagentCards();
  buildTubeRack();
  updateSelectedReagentLabel();
  renderDrawer();
  postEvent("Стаканы готовы к работе. Перетащите реагент в пробирку, чтобы начать опыт.");
  renderSceneBackground();
  window.addEventListener("resize", handleResize);
  window.addEventListener("keydown", handleKeydown);
  drawerTabs.forEach((tab) => {
    tab.addEventListener("click", () => toggleDrawer(tab.dataset.drawerTab));
  });
  drawerCloseButton.addEventListener("click", () => {
    if (state.drawer.open) {
      closeDrawer();
      return;
    }
    toggleDrawer(state.drawer.panel);
  });
  resetAllButton.addEventListener("click", () => {
    state.notifications = [];
    renderJournalFeed();
    state.tubes = Array.from({ length: 4 }, (_, index) => createTube(index + 1));
    buildTubeRack();
    postEvent("Все пробирки очищены.");
  });
  window.__chemLabDebug = {
    reset: () => {
      state.notifications = [];
      renderJournalFeed();
      state.tubes = Array.from({ length: 4 }, (_, index) => createTube(index + 1));
      buildTubeRack();
      render();
    },
    add: (reagentId, tubeId = "tube-1") => addReagentToTube(reagentId, tubeId),
    clear: (tubeId) => clearTube(tubeId),
    snapshot: () => JSON.parse(renderGameToText())
  };
  window.render_game_to_text = renderGameToText;
  window.advanceTime = (ms) => {
    const steps = Math.max(1, Math.round(ms / (1000 / 60)));
    for (let index = 0; index < steps; index += 1) {
      tick(ms / steps);
    }
    render();
  };
  requestAnimationFrame(frame);
}

function buildReagentCards() {
  reagentGrid.innerHTML = "";
  reagentElements.clear();
  REAGENTS.forEach((reagent) => {
    const tooltipId = `${reagent.id}-tooltip`;
    const card = document.createElement("article");
    card.className = "reagent-card";
    card.dataset.reagentId = reagent.id;
    card.dataset.reagentTone = getReagentTone(reagent);
    card.setAttribute("aria-label", reagent.name);
    card.setAttribute("aria-describedby", tooltipId);
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="reagent-card-topline">
        <span class="reagent-chip reagent-chip-emphasis">${getReagentFamilyLabel(reagent)}</span>
        <span class="reagent-chip">${getReagentAppearanceLabel(reagent)}</span>
      </div>
      <div class="reagent-card-header">
        <h3>${reagent.name}</h3>
        <span class="formula">${reagent.formula}</span>
      </div>
      <div class="reagent-vessel">
        <div class="beaker">
          <div class="liquid-fill"></div>
          <div class="liquid-meniscus"></div>
        </div>
      </div>
      <p class="reagent-description">${reagent.description}</p>
      ${getReagentTooltipMarkup(reagent, tooltipId)}
    `;
    applyLiquidStyle(card.querySelector(".liquid-fill"), reagent);
    card.addEventListener("pointerenter", () => showReagentTooltip(card));
    card.addEventListener("pointerleave", () => hideReagentTooltip(card));
    card.addEventListener("focusin", () => showReagentTooltip(card));
    card.addEventListener("focusout", () => hideReagentTooltip(card));
    card.addEventListener("pointerdown", onReagentPointerDown);
    reagentGrid.append(card);
    reagentElements.set(reagent.id, card);
  });
  resetGeometryCache();
}

function buildTubeRack() {
  tubeRack.innerHTML = "";
  tubeElements.clear();
  tubeRenderElements.clear();
  state.tubes.forEach((tube, index) => {
    evaluateTube(tube);
    const card = document.createElement("article");
    card.className = "tube-card";
    card.dataset.tubeId = tube.id;
    card.setAttribute("aria-label", tube.label);
    card.innerHTML = `
      <div class="tube-card-header">
        <div class="tube-heading">
          <p class="tube-kicker">Эксперимент ${index + 1}</p>
          <h3>${tube.label}</h3>
        </div>
        <div class="tube-card-actions">
          <span class="tube-badge">Пусто</span>
          <button class="clear-tube-button" type="button">Очистить</button>
        </div>
      </div>
      <div class="tube-stage">
        <div class="tube-stand" aria-hidden="true"></div>
        <div class="tube-scale" aria-hidden="true"></div>
        <div class="tube-glass">
        <div class="tube-liquid-wrap">
          <div class="tube-liquid">
            <div class="tube-overlay"></div>
            <div class="tube-gel"></div>
            <div class="tube-precipitate"></div>
            <div class="tube-fallout"></div>
            <div class="tube-dissolve"></div>
            <div class="tube-redox"></div>
            <div class="tube-bubbles"></div>
            <div class="tube-heat"></div>
            <div class="tube-flash"></div>
          </div>
        </div>
      </div>
      </div>
      <div class="tube-meta">
        <p class="tube-note"></p>
        <p class="tube-contents"></p>
        <button class="clear-tube-button" type="button">Очистить пробирку</button>
      </div>
    `;
    card.addEventListener("pointerenter", () => {
      if (state.dragging) {
        setDropTarget(tube.id);
      }
    });
    card.addEventListener("pointerleave", () => {
      if (state.dragging && state.dragging.dropTargetId === tube.id) {
        setDropTarget(null);
      }
    });
    card.addEventListener("click", (event) => {
      if (!event.target.closest(".clear-tube-button") && state.selectedReagentId) {
        addReagentToTube(state.selectedReagentId, tube.id);
      }
    });
    card.querySelector(".clear-tube-button").addEventListener("click", () => {
      clearTube(tube.id);
    });
    tubeRack.append(card);
    tubeElements.set(tube.id, card);
    const renderElements = {
      card,
      liquid: card.querySelector(".tube-liquid"),
      overlay: card.querySelector(".tube-overlay"),
      gel: card.querySelector(".tube-gel"),
      precipitate: card.querySelector(".tube-precipitate"),
      fallout: card.querySelector(".tube-fallout"),
      dissolve: card.querySelector(".tube-dissolve"),
      redox: card.querySelector(".tube-redox"),
      bubbles: card.querySelector(".tube-bubbles"),
      heat: card.querySelector(".tube-heat"),
      flash: card.querySelector(".tube-flash"),
      note: card.querySelector(".tube-note"),
      contents: card.querySelector(".tube-contents"),
      badge: card.querySelector(".tube-badge")
    };
    ensurePool(renderElements.fallout, "fallout-particle", FALLOUT_POOL_SIZE);
    ensurePool(renderElements.bubbles, "bubble", BUBBLE_POOL_SIZE);
    hidePooledChildren(renderElements.fallout);
    hidePooledChildren(renderElements.bubbles);
    tubeRenderElements.set(tube.id, renderElements);
    renderTube(tube);
    tube.dirty = false;
  });
  resetGeometryCache();
  renderEquationFeed();
}

function applyLiquidStyle(element, reagent) {
  const vividColor = amplifyColor(reagent.color, 0.16, 0.08);
  element.style.setProperty("--liquid-color", rgba(vividColor, clamp(reagent.alpha * 0.72, 0.14, 0.62)));
  element.style.setProperty("--particle-color", rgba(mixColors([
    { color: vividColor, weight: 1 },
    { color: [255, 255, 255], weight: 0.35 }
  ]), 0.22));
  element.style.setProperty("--clarity", reagent.clarity.toFixed(2));
  element.style.setProperty("--texture-opacity", (reagent.textureOpacity * 0.72).toFixed(2));
  element.style.setProperty("--sediment-opacity", (reagent.sedimentOpacity * 0.72).toFixed(2));
}

function getReagentFamilyLabel(reagent) {
  if (reagent.tags.includes("indicator")) {
    return "Индикатор";
  }
  if (reagent.tags.includes("acid")) {
    return "Кислота";
  }
  if (reagent.tags.includes("base")) {
    return "Основание";
  }
  if (reagent.tags.includes("oxidizer")) {
    return "Окислитель";
  }
  return "Соль";
}

function getReagentAppearanceLabel(reagent) {
  if (reagent.tags.includes("viscous")) {
    return "Вязкий";
  }
  if (reagent.tags.includes("suspension") || reagent.sedimentOpacity > 0.12 || reagent.clarity < 0.58) {
    return "Мутный";
  }
  const channelSpread = Math.max(...reagent.color) - Math.min(...reagent.color);
  if (channelSpread > 42 || reagent.alpha > 0.68) {
    return "Окрашенный";
  }
  return "Прозрачный";
}

function getReagentTone(reagent) {
  if (reagent.tags.includes("indicator")) {
    return "indicator";
  }
  if (reagent.tags.includes("acid")) {
    return "acid";
  }
  if (reagent.tags.includes("base")) {
    return "base";
  }
  if (reagent.tags.includes("oxidizer")) {
    return "oxidizer";
  }
  if (reagent.tags.includes("suspension")) {
    return "suspension";
  }
  return "salt";
}

function getReagentTooltipMarkup(reagent, tooltipId) {
  const reference = REAGENT_REFERENCE_DATA[reagent.id];
  if (!reference) {
    return "";
  }
  return `
    <div id="${tooltipId}" class="reagent-tooltip" role="tooltip">
      <p class="reagent-tooltip-title">Справка по веществу</p>
      <dl class="reagent-tooltip-list">
        <div class="reagent-tooltip-row">
          <dt>Растворимость</dt>
          <dd>${reference.solubility}</dd>
        </div>
        <div class="reagent-tooltip-row">
          <dt>tпл</dt>
          <dd>${reference.meltingPoint}</dd>
        </div>
        <div class="reagent-tooltip-row">
          <dt>tкип</dt>
          <dd>${reference.boilingPoint}</dd>
        </div>
        <div class="reagent-tooltip-row">
          <dt>Электролит</dt>
          <dd>${reference.electrolyte}</dd>
        </div>
      </dl>
    </div>
  `;
}

function showReagentTooltip(card) {
  positionReagentTooltip(card);
  card.classList.add("is-peeking");
}

function hideReagentTooltip(card) {
  card.classList.remove("is-peeking");
}

function positionReagentTooltip(card) {
  const tooltip = card.querySelector(".reagent-tooltip");
  if (!tooltip) {
    return;
  }
  const rect = card.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth || 280;
  const tooltipHeight = tooltip.offsetHeight || 170;
  const gap = 14;
  const spaces = {
    top: rect.top,
    right: window.innerWidth - rect.right,
    bottom: window.innerHeight - rect.bottom,
    left: rect.left
  };

  let placement = "bottom";
  if (spaces.bottom >= tooltipHeight + gap) {
    placement = "bottom";
  } else if (spaces.top >= tooltipHeight + gap) {
    placement = "top";
  } else if (spaces.right >= tooltipWidth + gap) {
    placement = "right";
  } else if (spaces.left >= tooltipWidth + gap) {
    placement = "left";
  } else {
    placement = spaces.bottom >= spaces.top ? "bottom" : "top";
  }

  card.dataset.tooltipPlacement = placement;
}

function toggleSelectedReagent(reagentId) {
  state.selectedReagentId = state.selectedReagentId === reagentId ? null : reagentId;
  updateSelectedReagentLabel();
  markBackgroundDirty();
}

function updateSelectedReagentLabel() {
  reagentElements.forEach((element, reagentId) => {
    element.classList.toggle("is-selected", state.selectedReagentId === reagentId);
  });
  selectedReagentLabel.textContent = state.selectedReagentId
    ? `${REAGENT_MAP[state.selectedReagentId].name} (${REAGENT_MAP[state.selectedReagentId].formula})`
    : "Ничего не выбрано";
}

function toggleDrawer(panel) {
  if (!DRAWER_META[panel]) {
    return;
  }
  if (state.drawer.open && state.drawer.panel === panel) {
    closeDrawer();
    return;
  }
  state.drawer.panel = panel;
  state.drawer.open = true;
  renderDrawer();
}

function closeDrawer() {
  state.drawer.open = false;
  renderDrawer();
}

function renderDrawer() {
  const meta = DRAWER_META[state.drawer.panel];
  slideoutDrawer.classList.toggle("is-open", state.drawer.open);
  slideoutDrawer.dataset.panel = state.drawer.panel;
  slideoutDrawer.setAttribute("aria-expanded", state.drawer.open ? "true" : "false");
  drawerKicker.textContent = meta.kicker;
  drawerKicker.hidden = !meta.kicker;
  drawerTitle.textContent = meta.title;
  drawerCloseButton.textContent = state.drawer.open ? "Свернуть" : "Развернуть";
  drawerCloseButton.setAttribute("aria-label", state.drawer.open ? "Свернуть правую панель" : "Развернуть правую панель");
  drawerTabs.forEach((tab) => {
    const isActive = tab.dataset.drawerTab === state.drawer.panel;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
    tab.setAttribute("aria-expanded", state.drawer.open && isActive ? "true" : "false");
  });
  drawerPanels.forEach((panel) => {
    const isActive = panel.dataset.drawerPanel === state.drawer.panel;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function onReagentPointerDown(event) {
  if (event.button !== 0) {
    return;
  }
  const source = event.currentTarget;
  const reagentId = source.dataset.reagentId;
  state.dragging = {
    reagentId,
    pointerId: event.pointerId,
    source,
    dropTargetId: null,
    moved: false,
    ghost: createDragGhost(REAGENT_MAP[reagentId])
  };
  source.classList.add("is-dragging");
  moveGhost(event.clientX, event.clientY);
  source.setPointerCapture(event.pointerId);
  source.addEventListener("pointermove", onReagentPointerMove);
  source.addEventListener("pointerup", onReagentPointerUp);
  source.addEventListener("pointercancel", onReagentPointerCancel);
}

function onReagentPointerMove(event) {
  if (!state.dragging || state.dragging.pointerId !== event.pointerId) {
    return;
  }
  state.dragging.moved = true;
  moveGhost(event.clientX, event.clientY);
  const tubeCard = document.elementFromPoint(event.clientX, event.clientY)?.closest(".tube-card");
  setDropTarget(tubeCard?.dataset.tubeId ?? null);
}

function onReagentPointerUp(event) {
  if (!state.dragging || state.dragging.pointerId !== event.pointerId) {
    return;
  }
  const { reagentId, moved, dropTargetId } = state.dragging;
  cleanupDrag(event.currentTarget);
  if (dropTargetId) {
    addReagentToTube(reagentId, dropTargetId);
    return;
  }
  if (!moved) {
    toggleSelectedReagent(reagentId);
  }
}

function onReagentPointerCancel(event) {
  if (!state.dragging || state.dragging.pointerId !== event.pointerId) {
    return;
  }
  cleanupDrag(event.currentTarget);
}

function cleanupDrag(source) {
  source.classList.remove("is-dragging");
  source.releasePointerCapture?.(state.dragging?.pointerId);
  source.removeEventListener("pointermove", onReagentPointerMove);
  source.removeEventListener("pointerup", onReagentPointerUp);
  source.removeEventListener("pointercancel", onReagentPointerCancel);
  state.dragging?.ghost?.remove();
  setDropTarget(null);
  state.dragging = null;
}

function createDragGhost(reagent) {
  const wrapper = document.createElement("div");
  wrapper.className = "drag-ghost";
  wrapper.innerHTML = `
    <article class="reagent-card">
      <div class="reagent-card-topline">
        <span class="reagent-chip reagent-chip-emphasis">${getReagentFamilyLabel(reagent)}</span>
        <span class="reagent-chip">${getReagentAppearanceLabel(reagent)}</span>
      </div>
      <div class="reagent-card-header">
        <h3>${reagent.name}</h3>
        <span class="formula">${reagent.formula}</span>
      </div>
      <div class="reagent-vessel">
        <div class="beaker">
          <div class="liquid-fill"></div>
          <div class="liquid-meniscus"></div>
        </div>
      </div>
    </article>
  `;
  applyLiquidStyle(wrapper.querySelector(".liquid-fill"), reagent);
  document.body.append(wrapper);
  return wrapper;
}

function moveGhost(clientX, clientY) {
  if (!state.dragging?.ghost) {
    return;
  }
  state.dragging.ghost.style.left = `${clientX}px`;
  state.dragging.ghost.style.top = `${clientY}px`;
}

function setDropTarget(tubeId) {
  if (state.dragging) {
    state.dragging.dropTargetId = tubeId;
  }
  tubeElements.forEach((element, currentId) => {
    element.classList.toggle("is-drop-target", tubeId === currentId);
  });
}

function clearTube(tubeId) {
  const tube = state.tubes.find((entry) => entry.id === tubeId);
  if (!tube) {
    return;
  }
  tube.contents = [];
  tube.triggeredReactionKeys = [];
  tube.activeEffects = [];
  tube.lastReactionSummary = "Пробирка пуста.";
  evaluateTube(tube);
  markTubeDirty(tube);
  renderEquationFeed();
  postEvent(`${tube.label} очищена.`);
  render();
}

function addReagentToTube(reagentId, tubeId) {
  const tube = state.tubes.find((entry) => entry.id === tubeId);
  const reagent = REAGENT_MAP[reagentId];
  if (!tube || !reagent) {
    return;
  }
  if (tube.contents.length >= MAX_TUBE_CONTENTS) {
    postEvent(`${tube.label} уже заполнена. Очистите её перед новым опытом.`);
    return;
  }
  const previousPH = tube.analysis.pHCategory;
  const previousKeys = new Set(tube.triggeredReactionKeys);
  const previousAnalysis = {
    displayColor: tube.analysis.displayColor,
    overlayColor: tube.analysis.overlayColor,
    overlayOpacity: tube.analysis.overlayOpacity,
    precipitateColor: tube.analysis.precipitateColor,
    precipitateHeight: tube.analysis.precipitateHeight,
    precipitateOpacity: tube.analysis.precipitateOpacity
  };
  tube.contents.push({ reagentId, addedAt: state.clockMs });
  evaluateTube(tube);
  const newReactions = tube.analysis.reactions.filter((reaction) => !previousKeys.has(reaction.key));
  tube.triggeredReactionKeys = tube.analysis.reactions.map((reaction) => reaction.key);
  const indicatorsPresent = tube.contents.some((entry) => REAGENT_MAP[entry.reagentId].tags.includes("indicator"));
  const indicatorMessage = getIndicatorMessage(
    tube.contents.map((entry) => REAGENT_MAP[entry.reagentId]),
    tube.analysis.pHCategory
  );
  const shouldDescribeIndicator = Boolean(indicatorMessage) && (reagent.tags.includes("indicator") || previousPH !== tube.analysis.pHCategory);
  const summaryParts = [];

  if (indicatorsPresent && (previousPH !== tube.analysis.pHCategory || reagent.tags.includes("indicator"))) {
    tube.activeEffects.push({
      key: `indicator-${state.clockMs}`,
      type: "color-wave",
      startedAt: state.clockMs,
      durationMs: 900,
      peak: 0.28
    });
  }

  if (shouldDescribeIndicator) {
    summaryParts.push(indicatorMessage);
    postEvent(`${tube.label}: ${indicatorMessage}`);
  }

  newReactions.forEach((reaction) => {
    reaction.animation.forEach((animation, index) => {
      tube.activeEffects.push({
        key: `${reaction.key}-${index}-${state.clockMs}`,
        reactionKey: reaction.key,
        type: animation.type,
        startedAt: state.clockMs,
        durationMs: animation.durationMs,
        peak: animation.peak,
        fromAnalysis: animation.type === "dissolve" || animation.type === "redox" ? previousAnalysis : null
      });
    });
    summaryParts.push(reaction.note);
    postEvent(`${tube.label}: ${reaction.note}`);
  });

  tube.lastReactionSummary = summaryParts.length
    ? summaryParts.join(" ")
    : `Добавлен реагент "${reagent.name}". Видимых изменений почти нет.`;

  if (!newReactions.length && !shouldDescribeIndicator) {
    postEvent(`${tube.label}: добавлен реагент "${reagent.name}". Видимых изменений почти нет.`);
  }

  markTubeDirty(tube);
  renderEquationFeed();
  render();
}

function evaluateTube(tube) {
  if (!tube.contents.length) {
    tube.analysis = createEmptyAnalysis();
    return;
  }

  const reagents = tube.contents.map((entry) => REAGENT_MAP[entry.reagentId]);
  const ids = new Set(reagents.map((reagent) => reagent.id));
  const baseAcidityScore = reagents.reduce((sum, reagent) => sum + reagent.pHScore, 0);
  const basePHCategory = getPHCategory(baseAcidityScore);
  const reactions = resolveReactions(
    REACTION_RULES.filter((rule) => rule.predicate({
      ids,
      reagents,
      acidityScore: baseAcidityScore,
      pHCategory: basePHCategory
    }))
  );
  const acidityScore = getAdjustedAcidityScore(reagents, reactions, baseAcidityScore);
  const pHCategory = getPHCategory(acidityScore);

  let mixedColor = mixColors(reagents.map((reagent) => ({ color: reagent.color, weight: Math.max(reagent.alpha, 0.25) })));
  let alpha = clamp(average(reagents.map((reagent) => reagent.alpha)), 0.28, 0.95);
  let clarity = clamp(average(reagents.map((reagent) => reagent.clarity)), 0.2, 0.95);
  let textureOpacity = clamp(average(reagents.map((reagent) => reagent.textureOpacity)), 0, 0.32);
  let sedimentOpacity = clamp(average(reagents.map((reagent) => reagent.sedimentOpacity)), 0, 0.32);
  let overlayColor = null;
  let overlayOpacity = 0;
  let gelOpacity = 0;
  let precipitateHeight = 0;
  let precipitateOpacity = 0;
  let precipitateColor = [236, 236, 236];

  reactions.forEach((reaction) => {
    if (reaction.overlay) {
      overlayColor = overlayColor
        ? mixColors([
          { color: overlayColor, weight: Math.max(0.34, 1 - overlayOpacity) },
          { color: reaction.overlay.color, weight: reaction.overlay.opacity + 0.48 }
        ])
        : reaction.overlay.color.slice();
      overlayOpacity = clamp(overlayOpacity + reaction.overlay.opacity * 1.18 + 0.05, 0, 0.82);
    }
    if (reaction.precipitate) {
      precipitateColor = mixColors([
        { color: precipitateColor, weight: precipitateOpacity + 0.2 },
        { color: reaction.precipitate.color, weight: reaction.precipitate.opacity + 0.34 }
      ]);
      precipitateHeight = clamp(precipitateHeight + reaction.precipitate.height * 1.08, 0, 0.5);
      precipitateOpacity = clamp(precipitateOpacity + reaction.precipitate.opacity * 0.82, 0, 0.98);
    }
    if (reaction.bleach) {
      mixedColor = mixColors([
        { color: mixedColor, weight: 1 - reaction.bleach * 1.08 },
        { color: [236, 242, 246], weight: reaction.bleach * 1.12 }
      ]);
      alpha = clamp(alpha - reaction.bleach * 0.28, 0.14, 0.9);
      clarity = clamp(clarity + reaction.bleach * 0.32, 0.2, 1);
    }
    if (reaction.clarify) {
      clarity = clamp(clarity + reaction.clarify * 1.1, 0.2, 1);
      alpha = clamp(alpha - reaction.clarify * 0.16, 0.14, 0.9);
      sedimentOpacity = clamp(sedimentOpacity - reaction.clarify * 0.68, 0, 0.3);
      textureOpacity = clamp(textureOpacity - reaction.clarify * 0.52, 0, 0.32);
    }
    if (reaction.gelOpacity) {
      gelOpacity = clamp(gelOpacity + reaction.gelOpacity * 1.12, 0, 0.84);
      clarity = clamp(clarity - reaction.gelOpacity * 0.22, 0.08, 0.95);
    }
  });

  const indicatorTint = getIndicatorTint(reagents, pHCategory);
  if (indicatorTint) {
    mixedColor = mixColors([
      { color: mixedColor, weight: 1 },
      { color: indicatorTint.color, weight: indicatorTint.weight }
    ]);
    alpha = clamp(alpha + indicatorTint.alphaBoost, 0.24, 0.98);
    overlayOpacity = Math.max(overlayOpacity, indicatorTint.overlayOpacity);
    overlayColor = overlayColor
      ? mixColors([
        { color: overlayColor, weight: Math.max(0.34, 1 - overlayOpacity + 0.08) },
        { color: indicatorTint.color, weight: indicatorTint.overlayOpacity + 0.24 }
      ])
      : indicatorTint.color;
  }

  mixedColor = amplifyColor(
    mixedColor,
    0.14 + reactions.length * 0.03 + (indicatorTint ? 0.08 : 0),
    0.06 + overlayOpacity * 0.12 + reactions.length * 0.01
  );
  overlayColor = amplifyColor(overlayColor ?? [255, 255, 255], 0.16 + overlayOpacity * 0.12, 0.08 + overlayOpacity * 0.1);
  precipitateColor = amplifyColor(
    precipitateColor,
    0.08 + precipitateOpacity * 0.12,
    0.08 + precipitateOpacity * 0.08
  );
  alpha = clamp(alpha + reactions.length * 0.015 + (indicatorTint ? 0.02 : 0), 0.28, 0.98);
  const renderedAlpha = clamp(alpha * 0.74, 0.16, 0.76);

  tube.analysis = {
    pHCategory,
    acidityScore,
    displayColor: rgba(mixedColor, renderedAlpha),
    overlayColor: rgba(overlayColor, overlayOpacity),
    overlayOpacity,
    gelOpacity,
    precipitateColor: rgba(precipitateColor, precipitateOpacity),
    precipitateHeight,
    precipitateOpacity,
    liquidOpacity: renderedAlpha,
    textureOpacity: clamp(textureOpacity * 0.76, 0, 0.24),
    sedimentOpacity: clamp(sedimentOpacity * 0.76, 0, 0.24),
    clarity,
    reactions,
    notes: reactions.map((reaction) => reaction.note),
    contentsText: formatContentsText(reagents)
  };
}

function getIndicatorTint(reagents, pHCategory) {
  const phenolphthalein = reagents.some((reagent) => reagent.id === "phenolphthalein");
  const methylOrange = reagents.some((reagent) => reagent.id === "methyl_orange");
  const litmus = reagents.some((reagent) => reagent.id === "litmus");
  const tintEntries = [];
  let alphaBoost = 0;
  let overlayOpacity = 0;

  if (phenolphthalein && pHCategory === "basic") {
    tintEntries.push({ color: [255, 28, 156], weight: 1.22 });
    alphaBoost += 0.16;
    overlayOpacity += 0.34;
  }

  if (methylOrange) {
    if (pHCategory === "acidic") {
      tintEntries.push({ color: [255, 34, 18], weight: 1.12 });
      overlayOpacity += 0.26;
    } else if (pHCategory === "basic") {
      tintEntries.push({ color: [255, 214, 24], weight: 1 });
      overlayOpacity += 0.22;
    } else {
      tintEntries.push({ color: [255, 144, 42], weight: 0.84 });
      overlayOpacity += 0.16;
    }
    alphaBoost += 0.1;
  }

  if (litmus) {
    if (pHCategory === "acidic") {
      tintEntries.push({ color: [222, 34, 72], weight: 0.96 });
      overlayOpacity += 0.24;
    } else if (pHCategory === "basic") {
      tintEntries.push({ color: [20, 118, 255], weight: 1.04 });
      overlayOpacity += 0.26;
    } else {
      tintEntries.push({ color: [154, 72, 232], weight: 0.8 });
      overlayOpacity += 0.18;
    }
    alphaBoost += 0.09;
  }

  if (!tintEntries.length) {
    return null;
  }

  return {
    color: amplifyColor(mixColors(tintEntries), 0.18, 0.08),
    weight: tintEntries.reduce((sum, entry) => sum + entry.weight, 0) / tintEntries.length,
    alphaBoost,
    overlayOpacity: clamp(overlayOpacity, 0, 0.62)
  };
}

function getIndicatorMessage(reagents, pHCategory) {
  const messages = [];
  if (reagents.some((reagent) => reagent.id === "phenolphthalein")) {
    if (pHCategory === "basic") {
      messages.push("Фенолфталеин окрашивает раствор в малиновый цвет.");
    } else if (pHCategory === "acidic") {
      messages.push("Фенолфталеин остаётся бесцветным в кислой среде.");
    }
  }
  if (reagents.some((reagent) => reagent.id === "methyl_orange")) {
    if (pHCategory === "acidic") {
      messages.push("Метилоранж становится красным в кислой среде.");
    } else if (pHCategory === "basic") {
      messages.push("Метилоранж меняет окраску на жёлтую в щёлочи.");
    } else {
      messages.push("Метилоранж сохраняет оранжевый оттенок вблизи нейтральной среды.");
    }
  }
  if (reagents.some((reagent) => reagent.id === "litmus")) {
    if (pHCategory === "acidic") {
      messages.push("Лакмус окрашивает раствор в красный цвет.");
    } else if (pHCategory === "basic") {
      messages.push("Лакмус окрашивает раствор в синий цвет.");
    } else {
      messages.push("Лакмус остаётся фиолетовым вблизи нейтральной среды.");
    }
  }
  return messages.join(" ");
}

function render() {
  const shouldDrawScene = state.backgroundDirty
    || state.sceneDirty
    || state.tubes.some((tube) => tube.dirty || tube.activeEffects.length > 0);

  if (state.backgroundDirty) {
    drawCanvasBackground();
    state.backgroundDirty = false;
  }

  if (shouldDrawScene) {
    drawCanvasScene();
    state.sceneDirty = false;
  }

  state.tubes.forEach((tube) => {
    if (tube.dirty || tube.activeEffects.length > 0) {
      renderTube(tube);
      tube.dirty = false;
    }
  });
}

function renderTube(tube) {
  const renderElements = tubeRenderElements.get(tube.id);
  if (!renderElements) {
    return;
  }
  const {
    card,
    liquid,
    overlay,
    gel,
    precipitate,
    fallout,
    dissolve,
    redox,
    bubbles,
    heat,
    flash,
    note,
    contents,
    badge
  } = renderElements;
  const volumeRatio = tube.contents.length ? clamp(0.14 + tube.contents.length * 0.12, 0.14, 0.86) : 0.02;
  const gasIntensity = clamp(getActiveEffectIntensity(tube, "gas") * 1.36, 0, 1.28);
  const redoxEffect = getDominantEffect(tube, "redox");
  const dissolveEffect = getDominantEffect(tube, "dissolve");
  const redoxProgress = getEffectProgressFromEntry(redoxEffect);
  const dissolveProgress = getEffectProgressFromEntry(dissolveEffect);
  const redoxIntensity = redoxEffect ? Math.sin(redoxProgress * Math.PI) * redoxEffect.peak : 0;
  const dissolveIntensity = dissolveEffect ? Math.sin(dissolveProgress * Math.PI) * dissolveEffect.peak : 0;
  const heatIntensity = clamp(getActiveEffectIntensity(tube, "heat") * 1.2, 0, 1.2);
  const flashIntensity = clamp(getActiveEffectIntensity(tube, "flash") * 1.4, 0, 1.24);
  const waveIntensity = clamp(getActiveEffectIntensity(tube, "color-wave") * 1.62 + tube.analysis.overlayOpacity * 0.22, 0, 1.32);
  const precipitationFallProgress = getCurrentEffectProgress(tube, "precipitation");
  const precipitationProgress = getEffectProgressOrCompleted(tube, "precipitation");
  const reactionGlow = clamp(
    Math.max(
      gasIntensity * 0.72,
      redoxIntensity * 0.88,
      dissolveIntensity * 0.76,
      heatIntensity,
      flashIntensity,
      waveIntensity * 0.88,
      tube.analysis.precipitateOpacity * 0.62
    ),
    0,
    1.28
  );
  const liquidPalette = getRenderedLiquidPalette(tube, reactionGlow, redoxIntensity, waveIntensity, flashIntensity);

  liquid.style.height = `${volumeRatio * 100}%`;
  liquid.style.setProperty("--tube-liquid-color", rgba(liquidPalette.coreColor, tube.analysis.liquidOpacity));
  liquid.style.setProperty("--tube-liquid-top", rgba(liquidPalette.topColor, Math.min(0.98, tube.analysis.liquidOpacity + 0.18)));
  liquid.style.setProperty("--tube-liquid-mid", rgba(liquidPalette.midColor, Math.min(0.98, tube.analysis.liquidOpacity + 0.08)));
  liquid.style.setProperty("--tube-liquid-bottom", rgba(liquidPalette.bottomColor, Math.max(0.22, tube.analysis.liquidOpacity - 0.02)));
  liquid.style.setProperty("--tube-liquid-opacity", tube.contents.length ? Math.max(tube.analysis.liquidOpacity, 0.32 + reactionGlow * 0.04).toFixed(2) : "0.06");
  liquid.style.setProperty("--texture-opacity", tube.analysis.textureOpacity.toFixed(2));
  liquid.style.setProperty("--sediment-opacity", tube.analysis.sedimentOpacity.toFixed(2));
  liquid.style.setProperty("--clarity", tube.analysis.clarity.toFixed(2));
  liquid.style.setProperty("--effect-saturation", (1.16 + waveIntensity * 1.28 + flashIntensity * 0.46 + redoxIntensity * 0.42).toFixed(2));
  liquid.style.setProperty("--effect-brightness", (1.1 + flashIntensity * 0.54 + heatIntensity * 0.28 + waveIntensity * 0.12 + redoxIntensity * 0.16).toFixed(2));
  liquid.style.setProperty("--particle-color", rgba(mixColors([
    { color: liquidPalette.midColor, weight: 1 },
    { color: [255, 255, 255], weight: 0.4 }
  ]), 0.24 + waveIntensity * 0.3));
  liquid.style.boxShadow = `
    inset 0 10px 16px rgba(255, 255, 255, 0.16),
    inset 0 -12px 18px rgba(0, 0, 0, 0.22),
    0 0 ${Math.round(12 + reactionGlow * 24)}px rgba(150, 224, 255, ${(0.1 + reactionGlow * 0.24).toFixed(3)})
  `;

  overlay.style.setProperty("--overlay-color", tube.analysis.overlayColor);
  overlay.style.setProperty("--overlay-opacity", clamp(tube.analysis.overlayOpacity + waveIntensity * 0.32 + flashIntensity * 0.14 + redoxIntensity * 0.22, 0, 0.96).toFixed(2));
  gel.style.setProperty("--gel-opacity", clamp(tube.analysis.gelOpacity + waveIntensity * 0.14, 0, 0.9).toFixed(2));
  const precipitateVisual = getRenderedPrecipitateState(tube, reactionGlow, precipitationProgress, dissolveEffect);
  precipitate.style.height = `${precipitateVisual.heightRatio * 100}%`;
  precipitate.style.setProperty("--precipitate-color", precipitateVisual.color);
  precipitate.style.setProperty("--precipitate-opacity", precipitateVisual.opacity.toFixed(2));
  precipitate.style.setProperty("--precipitate-saturation", (1.16 + reactionGlow * 0.58).toFixed(2));
  precipitate.style.setProperty("--precipitate-brightness", (1.1 + reactionGlow * 0.28).toFixed(2));
  heat.style.setProperty("--heat-opacity", clamp(heatIntensity + reactionGlow * 0.1, 0, 1).toFixed(2));
  flash.style.setProperty("--flash-opacity", clamp(flashIntensity + reactionGlow * 0.12, 0, 1).toFixed(2));
  note.textContent = tube.lastReactionSummary;
  contents.textContent = tube.analysis.contentsText;
  badge.textContent = tube.contents.length ? getPHLabel(tube.analysis.pHCategory) : "Пусто";
  card.classList.toggle("is-empty", tube.contents.length === 0);
  card.classList.toggle("has-reaction", tube.analysis.reactions.length > 0);
  card.dataset.phCategory = tube.contents.length ? tube.analysis.pHCategory : "empty";

  renderFallout(tube, fallout, precipitationFallProgress);
  renderDissolve(tube, dissolve, dissolveEffect, precipitateVisual, dissolveIntensity);
  renderRedox(tube, redox, redoxEffect, redoxIntensity);
  renderBubbles(tube, bubbles, gasIntensity);
}

function renderFallout(tube, container, progress) {
  ensurePool(container, "fallout-particle", FALLOUT_POOL_SIZE);
  if (progress === null) {
    hidePooledChildren(container);
    return;
  }
  const intensity = clamp(getActiveEffectIntensity(tube, "precipitation") * 1.42 + tube.analysis.precipitateOpacity * 0.24, 0, 1.28);
  const particleCount = getFalloutParticleCount(intensity);
  const precipColor = amplifyColor(parseColorToRgb(tube.analysis.precipitateColor), 0.12 + intensity * 0.1, 0.08);
  const accentColor = getFalloutAccentColor(precipColor);
  let visibleParticles = 0;
  for (let index = 0; index < particleCount; index += 1) {
    const metrics = getFalloutParticleMetrics(tube.id, index, progress, intensity);
    if (!metrics) {
      continue;
    }
    const fleck = container.children[visibleParticles];
    visibleParticles += 1;
    fleck.style.display = "block";
    fleck.style.left = `${metrics.leftPercent}%`;
    fleck.style.top = `${metrics.topPercent}%`;
    fleck.style.width = `${metrics.width}px`;
    fleck.style.height = `${metrics.height}px`;
    fleck.style.opacity = metrics.opacity.toFixed(3);
    fleck.style.setProperty("--trail-scale", metrics.trailScale.toFixed(2));
    fleck.style.setProperty("--trail-height", `${Math.max(8, metrics.height * metrics.trailScale * 0.66).toFixed(1)}px`);
    fleck.style.setProperty("--fall-angle", `${Math.round(-12 + metrics.seed * 24)}deg`);
    fleck.style.setProperty("--trail-color", `rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, 0.72)`);
    fleck.style.boxShadow = `0 0 14px rgba(255, 255, 255, 0.22), 0 0 0 1px rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, 0.46), inset 0 0 6px rgba(255, 255, 255, 0.42)`;
    fleck.style.background = `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.98), rgba(${precipColor[0]}, ${precipColor[1]}, ${precipColor[2]}, 0.96) 44%, rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, 0.78) 76%, rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, 0.22) 100%)`;
  }
  hidePooledChildren(container, visibleParticles);
}

function renderBubbles(tube, container, intensity) {
  ensurePool(container, "bubble", BUBBLE_POOL_SIZE);
  container.style.setProperty(
    "--gas-haze",
    intensity > 0.01
      ? `linear-gradient(180deg, rgba(255, 255, 255, ${(0.12 + intensity * 0.12).toFixed(3)}), rgba(255, 255, 255, 0) 42%, rgba(220, 244, 255, ${(0.08 + intensity * 0.2).toFixed(3)}))`
      : "transparent"
  );
  if (intensity <= 0.01) {
    hidePooledChildren(container);
    return;
  }
  const bubbleCount = Math.max(7, Math.round(10 + intensity * 14));
  const phase = state.clockMs / 1000;
  for (let index = 0; index < bubbleCount; index += 1) {
    const seed = seededUnit(`${tube.id}-${index}`);
    const bubble = container.children[index];
    const size = 7 + seed * 12 + intensity * 8;
    const drift = Math.sin(phase * (1.3 + seed * 0.7) + index) * (2 + intensity * 5);
    const left = 8 + seededUnit(`${tube.id}-${index}-x`) * 72 + drift;
    const loop = (phase * (0.54 + seed * 0.52) + seededUnit(`${tube.id}-${index}-loop`)) % 1;
    const bottom = 4 + loop * 94;
    bubble.style.display = "block";
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;
    bubble.style.opacity = `${0.34 + intensity * 0.58}`;
  }
  hidePooledChildren(container, bubbleCount);
}

function renderDissolve(tube, container, effect, precipitateVisual, intensity) {
  container.replaceChildren();
  container.style.background = "transparent";
  if (!effect || intensity <= 0.02) {
    return;
  }
  const progress = getEffectProgressFromEntry(effect);
  const fromColor = parseColorToRgb(effect.fromAnalysis?.precipitateColor ?? tube.analysis.precipitateColor);
  const toColor = parseColorToRgb(tube.analysis.displayColor);
  const dissolveColor = mixColors([
    { color: fromColor, weight: 1 - progress + 0.18 },
    { color: toColor, weight: progress + 0.28 }
  ]);
  container.style.background = `radial-gradient(circle at 50% ${Math.round(72 - progress * 24)}%, rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, ${(0.08 + intensity * 0.16).toFixed(3)}), rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, 0) 72%)`;
  const fragment = document.createDocumentFragment();
  const wispCount = Math.max(6, Math.round(9 + intensity * 10));
  for (let index = 0; index < wispCount; index += 1) {
    const seed = seededUnit(`${tube.id}-dissolve-${index}`);
    const rise = ((state.clockMs / 1000) * (18 + seed * 10) + index * 8) % 62;
    const wisp = document.createElement("span");
    wisp.className = "dissolve-wisp";
    wisp.style.left = `${14 + seededUnit(`${tube.id}-dissolve-x-${index}`) * 66}%`;
    wisp.style.bottom = `${clamp(precipitateVisual.heightRatio * 100 + rise * 0.7, 6, 96)}%`;
    wisp.style.width = `${14 + seed * 16 + intensity * 9}px`;
    wisp.style.height = `${22 + seed * 26 + intensity * 14}px`;
    wisp.style.opacity = `${clamp(0.22 + intensity * 0.48 - progress * 0.08, 0.16, 0.82)}`;
    wisp.style.background = `radial-gradient(circle at 50% 50%, rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, 0.72), rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, 0) 76%)`;
    fragment.append(wisp);
  }
  container.replaceChildren(fragment);
}

function renderRedox(tube, container, effect, intensity) {
  container.replaceChildren();
  container.style.background = "transparent";
  if (!effect || intensity <= 0.02) {
    return;
  }
  const progress = getEffectProgressFromEntry(effect);
  const fromColor = parseColorToRgb(effect.fromAnalysis?.displayColor ?? tube.analysis.displayColor);
  const targetColor = parseColorToRgb(tube.analysis.overlayOpacity > 0.01 ? tube.analysis.overlayColor : tube.analysis.displayColor);
  container.style.background = `linear-gradient(180deg, rgba(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}, ${(0.08 + intensity * 0.16).toFixed(3)}), rgba(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}, 0) 34%, rgba(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}, ${(0.06 + intensity * 0.1).toFixed(3)}) 100%)`;
  const fragment = document.createDocumentFragment();
  const streakCount = Math.max(6, Math.round(8 + intensity * 10));
  for (let index = 0; index < streakCount; index += 1) {
    const seed = seededUnit(`${tube.id}-redox-${index}`);
    const phase = ((state.clockMs / 1000) * (20 + seed * 9) + index * 12) % 118;
    const streakColor = mixColors([
      { color: fromColor, weight: 1 - progress + seed * 0.18 },
      { color: targetColor, weight: progress + 0.26 }
    ]);
    const streak = document.createElement("span");
    streak.className = "redox-streak";
    streak.style.left = `${8 + seededUnit(`${tube.id}-redox-x-${index}`) * 76}%`;
    streak.style.top = `${phase - 14}%`;
    streak.style.width = `${8 + seed * 12 + intensity * 6}px`;
    streak.style.height = `${28 + seed * 40 + intensity * 20}px`;
    streak.style.opacity = `${clamp(0.24 + intensity * 0.48, 0.24, 0.82)}`;
    streak.style.setProperty("--redox-color", `rgba(${streakColor[0]}, ${streakColor[1]}, ${streakColor[2]}, 0.9)`);
    streak.style.setProperty("--redox-core", `rgba(255, 255, 255, ${clamp(0.16 + intensity * 0.32, 0.16, 0.48).toFixed(3)})`);
    fragment.append(streak);
  }
  container.replaceChildren(fragment);
}

function getActiveEffectIntensity(tube, type) {
  return tube.activeEffects
    .filter((effect) => effect.type === type)
    .reduce((maxIntensity, effect) => {
      const progress = clamp((state.clockMs - effect.startedAt) / effect.durationMs, 0, 1);
      return Math.max(maxIntensity, Math.sin(progress * Math.PI) * effect.peak);
    }, 0);
}

function getEffectProgressOrCompleted(tube, type) {
  const relevantEffects = tube.activeEffects.filter((effect) => effect.type === type);
  if (!relevantEffects.length) {
    return tube.analysis.precipitateHeight > 0 ? 1 : 0;
  }
  return clamp(relevantEffects.reduce((maxProgress, effect) => {
    return Math.max(maxProgress, clamp((state.clockMs - effect.startedAt) / effect.durationMs, 0, 1));
  }, 0), 0, 1);
}

function getDominantEffect(tube, type) {
  const relevantEffects = tube.activeEffects.filter((effect) => effect.type === type);
  if (!relevantEffects.length) {
    return null;
  }
  return relevantEffects.reduce((dominant, effect) => {
    if (!dominant) {
      return effect;
    }
    return effect.startedAt >= dominant.startedAt ? effect : dominant;
  }, null);
}

function getEffectProgressFromEntry(effect) {
  if (!effect) {
    return 0;
  }
  return clamp((state.clockMs - effect.startedAt) / effect.durationMs, 0, 1);
}

function getRenderedPrecipitateState(tube, reactionGlow, precipitationProgress, dissolveEffect) {
  const targetHeightRatio = clamp(tube.analysis.precipitateHeight * (1.08 + reactionGlow * 0.1), 0, 0.56) * precipitationProgress;
  const targetOpacity = clamp(tube.analysis.precipitateOpacity + getActiveEffectIntensity(tube, "color-wave") * 0.16 + 0.04, 0, 0.99);
  if (!dissolveEffect) {
    return {
      heightRatio: targetHeightRatio,
      opacity: targetOpacity,
      color: tube.analysis.precipitateColor
    };
  }
  const progress = easeInOutCubic(getEffectProgressFromEntry(dissolveEffect));
  const fromHeightRatio = clamp(
    (dissolveEffect.fromAnalysis?.precipitateHeight ?? tube.analysis.precipitateHeight) * (1.06 + reactionGlow * 0.08),
    0,
    0.56
  );
  const fromOpacity = clamp((dissolveEffect.fromAnalysis?.precipitateOpacity ?? tube.analysis.precipitateOpacity) + 0.08, 0, 1);
  const fromColor = parseColorToRgb(dissolveEffect.fromAnalysis?.precipitateColor ?? tube.analysis.precipitateColor);
  const toColor = parseColorToRgb(tube.analysis.precipitateColor);
  return {
    heightRatio: lerp(fromHeightRatio, targetHeightRatio, progress),
    opacity: lerp(fromOpacity, targetOpacity, progress),
    color: rgba(mixColors([
      { color: fromColor, weight: 1 - progress + 0.1 },
      { color: toColor, weight: progress + 0.1 }
    ]), lerp(fromOpacity, targetOpacity, progress))
  };
}

function getRenderedLiquidPalette(tube, reactionGlow, redoxIntensity, waveIntensity, flashIntensity) {
  const baseColor = amplifyColor(
    parseColorToRgb(tube.analysis.displayColor),
    0.18 + reactionGlow * 0.14 + redoxIntensity * 0.08,
    0.08 + waveIntensity * 0.08 + flashIntensity * 0.04
  );
  const overlayWeight = clamp(tube.analysis.overlayOpacity * 0.82 + redoxIntensity * 0.54 + waveIntensity * 0.18, 0, 1.18);
  const overlayColor = tube.analysis.overlayOpacity > 0.01
    ? amplifyColor(parseColorToRgb(tube.analysis.overlayColor), 0.18 + reactionGlow * 0.08, 0.04)
    : baseColor;
  const coreColor = overlayWeight > 0.01
    ? mixColors([
      { color: baseColor, weight: 1 },
      { color: overlayColor, weight: overlayWeight }
    ])
    : baseColor;
  const topColor = mixColors([
    { color: coreColor, weight: 1 },
    { color: [255, 255, 255], weight: 0.42 + reactionGlow * 0.18 + flashIntensity * 0.12 }
  ]);
  const midColor = amplifyColor(coreColor, 0.08 + redoxIntensity * 0.06, 0.03 + waveIntensity * 0.03);
  const bottomColor = amplifyColor(coreColor, 0.2 + reactionGlow * 0.1, -0.06 + redoxIntensity * 0.02);
  return { topColor, midColor, bottomColor, coreColor };
}

function resolveReactions(candidates) {
  const pending = candidates.map((rule, index) => ({ rule, index }));
  pending.sort((left, right) => {
    const priorityDelta = (right.rule.priority ?? 0) - (left.rule.priority ?? 0);
    return priorityDelta !== 0 ? priorityDelta : left.index - right.index;
  });
  const suppressedKeys = new Set();
  const selected = [];
  pending.forEach(({ rule, index }) => {
    if (suppressedKeys.has(rule.key)) {
      return;
    }
    selected.push({ rule, index });
    rule.suppresses?.forEach((key) => suppressedKeys.add(key));
  });
  return selected
    .sort((left, right) => left.index - right.index)
    .map(({ rule }) => rule);
}

function getCurrentEffectProgress(tube, type) {
  const relevantEffects = tube.activeEffects.filter((effect) => effect.type === type);
  if (!relevantEffects.length) {
    return null;
  }
  return clamp(relevantEffects.reduce((maxProgress, effect) => {
    return Math.max(maxProgress, clamp((state.clockMs - effect.startedAt) / effect.durationMs, 0, 1));
  }, 0), 0, 1);
}

function getFalloutParticleCount(intensity) {
  return Math.max(20, Math.round(24 + intensity * 26));
}

function getFalloutParticleMetrics(tubeId, index, progress, intensity) {
  const seed = seededUnit(`${tubeId}-fallout-${index}`);
  const xSeed = seededUnit(`${tubeId}-fallout-x-${index}`);
  const delay = seededUnit(`${tubeId}-fallout-delay-${index}`) * 0.56;
  if (progress < delay * 0.62) {
    return null;
  }
  const localProgress = clamp((progress - delay) / Math.max(0.2, 1 - delay), 0, 1);
  const reveal = clamp((progress - delay * 0.58) / Math.max(0.18, 1 - delay * 0.58), 0, 1);
  const drift = Math.sin(progress * Math.PI * (1.6 + seed * 0.7) + index) * (1.1 + intensity * 2.4);
  return {
    seed,
    leftPercent: clamp(12 + xSeed * 68 + drift, 8, 92),
    topPercent: clamp(3 + localProgress * (86 + seed * 10), 2, 94),
    width: 6.2 + seed * 8.4 + intensity * 5.4,
    height: 7 + seed * 10.6 + intensity * 6.2,
    opacity: clamp((0.26 + intensity * 0.54) * (0.34 + reveal * 0.82), 0, 0.96),
    trailScale: 1.2 + localProgress * 2.1
  };
}

function postEvent(message) {
  state.notifications.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    message
  });
  state.notifications = state.notifications.slice(0, MAX_NOTIFICATIONS);
  renderJournalFeed();
}

function renderJournalFeed() {
  eventFeed.innerHTML = "";
  if (!state.notifications.length) {
    const empty = document.createElement("div");
    empty.className = "event-item event-item-empty";
    empty.textContent = "Журнал пока пуст. Добавьте реагент в пробирку, чтобы начать наблюдения.";
    eventFeed.append(empty);
    return;
  }
  state.notifications.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "event-item";
    item.textContent = entry.message;
    eventFeed.append(item);
  });
}

function renderEquationFeed() {
  equationFeed.innerHTML = "";
  const fragment = document.createDocumentFragment();
  state.tubes.forEach((tube) => {
    const section = document.createElement("article");
    section.className = "equation-tube-card";
    const header = document.createElement("div");
    header.className = "equation-tube-header";
    header.innerHTML = `
      <div>
        <h3>${tube.label}</h3>
        <p class="equation-tube-contents">${tube.analysis.contentsText}</p>
      </div>
      <span class="equation-tube-badge">${getPHLabel(tube.analysis.pHCategory)}</span>
    `;
    section.append(header);

    const entries = getTubeEquationEntries(tube);
    if (!tube.contents.length) {
      const empty = document.createElement("p");
      empty.className = "equation-empty";
      empty.textContent = "Пробирка пуста. Уравнения реакций появятся после смешивания реагентов.";
      section.append(empty);
    } else if (!entries.length) {
      const empty = document.createElement("p");
      empty.className = "equation-empty";
      empty.textContent = "Сейчас видимых химических реакций не зафиксировано.";
      section.append(empty);
    } else {
      entries.forEach((entry) => {
        const block = document.createElement("section");
        block.className = "equation-entry";
        const title = document.createElement("p");
        title.className = "equation-entry-title";
        title.textContent = entry.label;
        block.append(title);
        appendEquationGroup(block, "Молекулярное", entry.equations.molecular);
        appendEquationGroup(block, "Ионное", entry.equations.ionic);
        section.append(block);
      });
    }
    fragment.append(section);
  });
  equationFeed.replaceChildren(fragment);
}

function appendEquationGroup(parent, label, lines) {
  if (!lines.length) {
    return;
  }
  const group = document.createElement("div");
  group.className = "equation-group";
  const heading = document.createElement("p");
  heading.className = "equation-kind";
  heading.textContent = label;
  group.append(heading);
  lines.forEach((equation) => {
    const line = document.createElement("code");
    line.className = "equation-line";
    line.textContent = equation;
    group.append(line);
  });
  parent.append(group);
}

function tick(deltaMs) {
  state.clockMs += deltaMs;
  state.tubes.forEach((tube) => {
    if (tube.activeEffects.length) {
      markTubeDirty(tube);
    }
    tube.activeEffects = tube.activeEffects.filter((effect) => state.clockMs - effect.startedAt <= effect.durationMs);
  });
}

function frame(timestamp) {
  if (!state.lastTimestamp) {
    state.lastTimestamp = timestamp;
  }
  const deltaMs = Math.min(34, timestamp - state.lastTimestamp);
  state.lastTimestamp = timestamp;
  tick(deltaMs);
  render();
  requestAnimationFrame(frame);
}

function handleResize() {
  resetGeometryCache();
  render();
}

function handleKeydown(event) {
  if (event.key === "Escape" && state.drawer.open) {
    closeDrawer();
    return;
  }
  if (event.key.toLowerCase() !== FULLSCREEN_KEY) {
    return;
  }
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    app.requestFullscreen?.();
  }
}

function renderSceneBackground() {
  markBackgroundDirty();
  render();
}

function drawCanvasBackground() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  syncCanvasSize(canvas, ctx, width, height);
  syncCanvasSize(backgroundCanvas, backgroundCtx, width, height);
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "#07121b");
  gradient.addColorStop(0.42, "#0c1d2a");
  gradient.addColorStop(1, "#102633");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(171, 221, 247, 0.06)";
  for (let index = 0; index < 12; index += 1) {
    ctx.beginPath();
    ctx.arc(width * 0.88, height * 0.12, 120 + index * 34, 0, Math.PI * 2);
    ctx.fill();
  }

  drawShelf(width, height * 0.28, height * 0.04);
  drawShelf(width, height * 0.62, height * 0.05);
  ctx.fillStyle = "rgba(214, 160, 96, 0.16)";
  ctx.fillRect(0, height - height * 0.18, width, height * 0.18);

  drawCanvasPanels();
  drawCanvasReagents();

  backgroundCtx.clearRect(0, 0, width, height);
  backgroundCtx.drawImage(canvas, 0, 0, width, height);
}

function drawCanvasScene() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  syncCanvasSize(canvas, ctx, width, height);
  ctx.clearRect(0, 0, width, height);
  if (!backgroundCanvas.width || !backgroundCanvas.height) {
    drawCanvasBackground();
  }
  ctx.drawImage(backgroundCanvas, 0, 0, width, height);
  drawCanvasTubes();
}

function drawShelf(width, y, thickness) {
  const shelfGradient = ctx.createLinearGradient(0, y, 0, y + thickness);
  shelfGradient.addColorStop(0, "rgba(158, 106, 60, 0.34)");
  shelfGradient.addColorStop(1, "rgba(71, 40, 18, 0.62)");
  ctx.fillStyle = shelfGradient;
  ctx.fillRect(0, y, width, thickness);
  ctx.fillStyle = "rgba(255, 223, 196, 0.08)";
  ctx.fillRect(0, y, width, 4);
}

function drawCanvasPanels() {
  scenePanels.forEach((panel, index) => {
    const rect = getCachedRect(panel, `panel-${index}`);
    drawRoundedRect(rect.x, rect.y, rect.width, rect.height, 26, "rgba(8, 20, 27, 0.7)", "rgba(149, 197, 214, 0.18)");
  });

  const hero = heroPanel ? getCachedRect(heroPanel, "panel-hero") : null;
  if (hero) {
    ctx.fillStyle = "#86d6ff";
    ctx.font = "12px Aptos, Trebuchet MS, sans-serif";
    ctx.fillText("Виртуальная лаборатория", hero.x + 18, hero.y + 24);
    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 28px Cambria, Georgia, serif";
    wrapCanvasText("Смешивание растворов и наблюдение признаков реакций", hero.x + 18, hero.y + 58, hero.width - 240, 30, 2);
  }

  const reagentPanelRect = reagentPanel ? getCachedRect(reagentPanel, "panel-reagents") : null;
  if (reagentPanelRect) {
    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 20px Cambria, Georgia, serif";
    ctx.fillText("Стаканы с реагентами", reagentPanelRect.x + 16, reagentPanelRect.y + 28);
  }

  const experimentPanelRect = experimentPanel ? getCachedRect(experimentPanel, "panel-experiment") : null;
  if (experimentPanelRect) {
    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 20px Cambria, Georgia, serif";
    ctx.fillText("Пробирки", experimentPanelRect.x + 16, experimentPanelRect.y + 28);
  }

  const drawerRect = slideoutDrawer ? getCachedRect(slideoutDrawer, "panel-drawer") : null;
  if (drawerRect) {
    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 20px Cambria, Georgia, serif";
    ctx.fillText("Журнал и уравнения", drawerRect.x + 16, drawerRect.y + 28);
  }
}

function drawCanvasReagents() {
  reagentElements.forEach((element, reagentId) => {
    const rect = getCachedRect(element, `reagent-${reagentId}`);
    const reagent = REAGENT_MAP[reagentId];
    drawRoundedRect(
      rect.x,
      rect.y,
      rect.width,
      rect.height,
      22,
      state.selectedReagentId === reagentId ? "rgba(14, 40, 54, 0.96)" : "rgba(10, 26, 35, 0.88)",
      state.selectedReagentId === reagentId ? "rgba(164, 232, 255, 0.88)" : "rgba(173, 220, 236, 0.16)"
    );

    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 12px Aptos, Trebuchet MS, sans-serif";
    wrapCanvasText(reagent.name, rect.x + 10, rect.y + 18, rect.width - 20, 13, 3);
    ctx.fillStyle = "#86d6ff";
    ctx.font = "11px Aptos, Trebuchet MS, sans-serif";
    wrapCanvasText(reagent.formula, rect.x + 10, rect.y + 58, rect.width - 20, 11, 2);
    drawCanvasBeaker(rect, reagent);
  });
}

function drawCanvasTubes() {
  state.tubes.forEach((tube) => {
    const card = tubeElements.get(tube.id);
    if (!card) {
      return;
    }
    const rect = getCachedRect(card, `tube-${tube.id}`);
    drawRoundedRect(rect.x, rect.y, rect.width, rect.height, 22, "rgba(8, 22, 31, 0.84)", "rgba(171, 215, 230, 0.16)");
    ctx.fillStyle = "#edf7fb";
    ctx.font = "600 13px Aptos, Trebuchet MS, sans-serif";
    ctx.fillText(tube.label, rect.x + 16, rect.y + 24);
    drawCanvasTube(rect, tube);
    ctx.fillStyle = "rgba(184, 208, 219, 0.95)";
    ctx.font = "11px Aptos, Trebuchet MS, sans-serif";
    wrapCanvasText(tube.analysis.contentsText, rect.x + 16, rect.y + rect.height - 54, rect.width - 32, 13, 2);
  });
}

function drawCanvasBeaker(rect, reagent) {
  const x = rect.x + rect.width * 0.31;
  const y = rect.y + 84;
  const width = rect.width * 0.38;
  const height = 64;
  const vividReagentColor = amplifyColor(reagent.color, 0.16, 0.08);

  roundedPath(x, y, width, height, 12);
  ctx.fillStyle = "rgba(210, 236, 248, 0.12)";
  ctx.fill();
  ctx.strokeStyle = "rgba(236, 250, 255, 0.52)";
  ctx.lineWidth = 2;
  ctx.stroke();

  const liquidHeight = height * 0.72;
  const liquidY = y + height - liquidHeight - 4;
  roundedPath(x + 5, liquidY, width - 10, liquidHeight, 10);
  const gradient = ctx.createLinearGradient(0, liquidY, 0, liquidY + liquidHeight);
  gradient.addColorStop(0, rgba(mixColors([
    { color: vividReagentColor, weight: 1 },
    { color: [255, 255, 255], weight: 0.24 }
  ]), Math.min(0.96, reagent.alpha + 0.18)));
  gradient.addColorStop(1, rgba(vividReagentColor, Math.min(0.96, reagent.alpha + 0.08)));
  ctx.fillStyle = gradient;
  ctx.fill();

  if (reagent.textureOpacity > 0.06 || reagent.sedimentOpacity > 0.06) {
    ctx.fillStyle = rgba([255, 255, 255], Math.max(reagent.textureOpacity, reagent.sedimentOpacity));
    ctx.fillRect(x + 7, liquidY + liquidHeight * 0.66, width - 14, liquidHeight * 0.28);
  }
}

function drawCanvasTube(rect, tube) {
  const glassX = rect.x + rect.width * 0.36;
  const glassY = rect.y + 36;
  const glassWidth = rect.width * 0.28;
  const glassHeight = 210;
  roundedPath(glassX, glassY, glassWidth, glassHeight, 22);
  ctx.fillStyle = "rgba(210, 236, 248, 0.1)";
  ctx.fill();
  ctx.strokeStyle = "rgba(239, 248, 255, 0.6)";
  ctx.lineWidth = 2;
  ctx.stroke();

  const volumeRatio = tube.contents.length ? clamp(0.14 + tube.contents.length * 0.12, 0.14, 0.86) : 0.02;
  const gasIntensity = clamp(getActiveEffectIntensity(tube, "gas") * 1.32, 0, 1.25);
  const redoxEffect = getDominantEffect(tube, "redox");
  const dissolveEffect = getDominantEffect(tube, "dissolve");
  const redoxProgress = getEffectProgressFromEntry(redoxEffect);
  const dissolveProgress = getEffectProgressFromEntry(dissolveEffect);
  const redoxIntensity = redoxEffect ? Math.sin(redoxProgress * Math.PI) * redoxEffect.peak : 0;
  const dissolveIntensity = dissolveEffect ? Math.sin(dissolveProgress * Math.PI) * dissolveEffect.peak : 0;
  const heatIntensity = clamp(getActiveEffectIntensity(tube, "heat") * 1.22, 0, 1.2);
  const waveIntensity = clamp(getActiveEffectIntensity(tube, "color-wave") * 1.6 + tube.analysis.overlayOpacity * 0.22, 0, 1.32);
  const flashIntensity = clamp(getActiveEffectIntensity(tube, "flash") * 1.4, 0, 1.24);
  const precipitationFallProgress = getCurrentEffectProgress(tube, "precipitation");
  const reactionGlow = clamp(
    Math.max(
      gasIntensity * 0.7,
      redoxIntensity * 0.86,
      dissolveIntensity * 0.74,
      heatIntensity,
      waveIntensity * 0.88,
      flashIntensity,
      tube.analysis.precipitateOpacity * 0.62
    ),
    0,
    1.28
  );
  const liquidHeight = glassHeight * volumeRatio;
  const liquidY = glassY + glassHeight - liquidHeight - 4;
  const liquidPalette = getRenderedLiquidPalette(tube, reactionGlow, redoxIntensity, waveIntensity, flashIntensity);
  roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
  const liquidGradient = ctx.createLinearGradient(0, liquidY, 0, liquidY + liquidHeight);
  liquidGradient.addColorStop(0, rgba(liquidPalette.topColor, Math.min(0.98, tube.analysis.liquidOpacity + 0.18)));
  liquidGradient.addColorStop(0.46, rgba(liquidPalette.midColor, Math.min(0.98, tube.analysis.liquidOpacity + 0.08)));
  liquidGradient.addColorStop(1, rgba(liquidPalette.bottomColor, Math.max(0.2, tube.analysis.liquidOpacity - 0.02)));
  ctx.fillStyle = liquidGradient;
  ctx.fill();

  if (reactionGlow > 0.01) {
    const liquidGlow = ctx.createRadialGradient(
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      6,
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      glassWidth * 1.25
    );
    liquidGlow.addColorStop(0, `rgba(174, 228, 255, ${(0.12 + reactionGlow * 0.18).toFixed(3)})`);
    liquidGlow.addColorStop(1, "rgba(174, 228, 255, 0)");
    ctx.fillStyle = liquidGlow;
    ctx.fillRect(glassX - 12, liquidY - 10, glassWidth + 24, liquidHeight + 20);
  }

  const precipitationProgress = getEffectProgressOrCompleted(tube, "precipitation");
  const precipitateVisual = getRenderedPrecipitateState(tube, reactionGlow, precipitationProgress, dissolveEffect);
  const precipHeight = glassHeight * precipitateVisual.heightRatio;
  if (precipHeight > 1) {
    const vividPrecipitateColor = amplifyColor(
      parseColorToRgb(precipitateVisual.color),
      0.08 + reactionGlow * 0.12,
      0.08
    );
    roundedPath(glassX + 5, glassY + glassHeight - precipHeight - 4, glassWidth - 10, precipHeight, 16);
    ctx.fillStyle = rgba(vividPrecipitateColor, clamp(precipitateVisual.opacity, 0, 0.99));
    ctx.fill();
    ctx.fillStyle = `rgba(255, 255, 255, ${(0.08 + reactionGlow * 0.12).toFixed(3)})`;
    ctx.fillRect(glassX + 8, glassY + glassHeight - precipHeight - 2, glassWidth - 16, Math.max(4, precipHeight * 0.22));
  }

  if (precipitationFallProgress !== null) {
    const precipColor = amplifyColor(parseColorToRgb(tube.analysis.precipitateColor), 0.12 + reactionGlow * 0.1, 0.08);
    const accentColor = getFalloutAccentColor(precipColor);
    for (let index = 0; index < getFalloutParticleCount(reactionGlow); index += 1) {
      const metrics = getFalloutParticleMetrics(tube.id, index, precipitationFallProgress, reactionGlow);
      if (!metrics) {
        continue;
      }
      const fleckX = glassX + (metrics.leftPercent / 100) * glassWidth;
      const fleckY = glassY + (metrics.topPercent / 100) * (glassHeight - 8);
      const trailHeight = metrics.height * metrics.trailScale * 0.86;
      const trailWidth = Math.max(1.5, metrics.width * 0.28);
      const trailGradient = ctx.createLinearGradient(fleckX, fleckY - trailHeight, fleckX, fleckY);
      trailGradient.addColorStop(0, `rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, ${(metrics.opacity * 0.52).toFixed(3)})`);
      trailGradient.addColorStop(1, `rgba(${precipColor[0]}, ${precipColor[1]}, ${precipColor[2]}, 0)`);
      ctx.fillStyle = trailGradient;
      ctx.fillRect(fleckX - trailWidth / 2, fleckY - trailHeight, trailWidth, trailHeight);
      ctx.fillStyle = `rgba(${precipColor[0]}, ${precipColor[1]}, ${precipColor[2]}, ${metrics.opacity.toFixed(3)})`;
      ctx.beginPath();
      ctx.ellipse(fleckX, fleckY, metrics.width / 2, metrics.height / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = `rgba(${accentColor[0]}, ${accentColor[1]}, ${accentColor[2]}, ${(metrics.opacity * 0.74).toFixed(3)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.fillStyle = `rgba(255, 255, 255, ${(metrics.opacity * 0.38).toFixed(3)})`;
      ctx.beginPath();
      ctx.ellipse(fleckX - metrics.width * 0.12, fleckY - metrics.height * 0.14, metrics.width * 0.16, metrics.height * 0.14, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (dissolveEffect && dissolveIntensity > 0.02) {
    const fromColor = parseColorToRgb(dissolveEffect.fromAnalysis?.precipitateColor ?? tube.analysis.precipitateColor);
    const dissolveColor = mixColors([
      { color: fromColor, weight: 1 - dissolveProgress + 0.16 },
      { color: parseColorToRgb(tube.analysis.displayColor), weight: dissolveProgress + 0.28 }
    ]);
    const dissolveGlow = ctx.createRadialGradient(
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.78,
      8,
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.78,
      glassWidth * 1.2
    );
    dissolveGlow.addColorStop(0, `rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, ${(0.12 + dissolveIntensity * 0.18).toFixed(3)})`);
    dissolveGlow.addColorStop(1, `rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, 0)`);
    ctx.fillStyle = dissolveGlow;
    ctx.fillRect(glassX - 10, liquidY, glassWidth + 20, liquidHeight + 12);
    for (let index = 0; index < Math.round(8 + dissolveIntensity * 10); index += 1) {
      const seed = seededUnit(`${tube.id}-canvas-dissolve-${index}`);
      const rise = ((state.clockMs / 1000) * (20 + seed * 12) + index * 10) % 74;
      const wispWidth = 12 + seed * 14 + dissolveIntensity * 10;
      const wispHeight = 22 + seed * 22 + dissolveIntensity * 16;
      const x = glassX + 10 + seededUnit(`${tube.id}-canvas-dissolve-x-${index}`) * (glassWidth - 20);
      const y = glassY + glassHeight - (precipitateVisual.heightRatio * glassHeight) - 10 - rise;
      const wispGradient = ctx.createRadialGradient(x, y, 2, x, y, wispWidth);
      wispGradient.addColorStop(0, `rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, ${(0.42 + dissolveIntensity * 0.28).toFixed(3)})`);
      wispGradient.addColorStop(1, `rgba(${dissolveColor[0]}, ${dissolveColor[1]}, ${dissolveColor[2]}, 0)`);
      ctx.fillStyle = wispGradient;
      ctx.fillRect(x - wispWidth / 2, y - wispHeight / 2, wispWidth, wispHeight);
    }
  }

  if (redoxEffect && redoxIntensity > 0.02) {
    const fromColor = parseColorToRgb(redoxEffect.fromAnalysis?.displayColor ?? tube.analysis.displayColor);
    const targetColor = parseColorToRgb(tube.analysis.overlayOpacity > 0.01 ? tube.analysis.overlayColor : tube.analysis.displayColor);
    const redoxGlow = ctx.createLinearGradient(0, liquidY, 0, liquidY + liquidHeight);
    redoxGlow.addColorStop(0, `rgba(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}, ${(0.1 + redoxIntensity * 0.16).toFixed(3)})`);
    redoxGlow.addColorStop(0.34, "rgba(255, 255, 255, 0)");
    redoxGlow.addColorStop(1, `rgba(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]}, ${(0.08 + redoxIntensity * 0.12).toFixed(3)})`);
    roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
    ctx.fillStyle = redoxGlow;
    ctx.fill();
    for (let index = 0; index < Math.round(8 + redoxIntensity * 10); index += 1) {
      const seed = seededUnit(`${tube.id}-canvas-redox-${index}`);
      const bandColor = mixColors([
        { color: fromColor, weight: 1 - redoxProgress + seed * 0.18 },
        { color: targetColor, weight: redoxProgress + 0.22 }
      ]);
      const width = 7 + seed * 10 + redoxIntensity * 6;
      const height = 26 + seed * 34 + redoxIntensity * 20;
      const x = glassX + 9 + seededUnit(`${tube.id}-canvas-redox-x-${index}`) * (glassWidth - 18);
      const y = glassY + ((state.clockMs / 1000) * (26 + seed * 10) + index * 14) % (glassHeight - 18) - 10;
      const bandGradient = ctx.createLinearGradient(x, y, x, y + height);
      bandGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      bandGradient.addColorStop(0.28, `rgba(255, 255, 255, ${(0.16 + redoxIntensity * 0.22).toFixed(3)})`);
      bandGradient.addColorStop(0.62, `rgba(${bandColor[0]}, ${bandColor[1]}, ${bandColor[2]}, ${(0.32 + redoxIntensity * 0.42).toFixed(3)})`);
      bandGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = bandGradient;
      ctx.fillRect(x - width / 2, y, width, height);
    }
  }

  if (tube.analysis.overlayOpacity > 0.02) {
    roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
    ctx.fillStyle = rgba(
      parseColorToRgb(tube.analysis.overlayColor),
      clamp(tube.analysis.overlayOpacity + waveIntensity * 0.2 + flashIntensity * 0.12 + redoxIntensity * 0.24, 0, 0.92)
    );
    ctx.fill();
  }

  if (tube.analysis.gelOpacity > 0.02) {
    roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
    ctx.fillStyle = `rgba(255, 255, 255, ${clamp(tube.analysis.gelOpacity + waveIntensity * 0.12, 0, 0.88).toFixed(3)})`;
    ctx.fill();
  }

  if (gasIntensity > 0.01) {
    const phase = state.clockMs / 1000;
    ctx.fillStyle = `rgba(225, 246, 255, ${(0.26 + gasIntensity * 0.56).toFixed(3)})`;
    for (let index = 0; index < Math.round(12 + gasIntensity * 10); index += 1) {
      const seed = seededUnit(`${tube.id}-canvas-${index}`);
      const bubbleSize = 5 + seed * 8 + gasIntensity * 5;
      const drift = Math.sin(phase * (1.6 + seed) + index) * (2 + gasIntensity * 4);
      const x = glassX + 10 + seededUnit(`${tube.id}-bubble-x-${index}`) * (glassWidth - 20) + drift;
      const y = glassY + glassHeight - ((phase * (44 + seed * 36) + index * 13) % 178);
      ctx.beginPath();
      ctx.arc(x, y, bubbleSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (heatIntensity > 0.01) {
    const heatGradient = ctx.createRadialGradient(
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      10,
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      glassWidth
    );
    heatGradient.addColorStop(0, `rgba(255, 179, 84, ${(heatIntensity * 0.5).toFixed(3)})`);
    heatGradient.addColorStop(0.42, `rgba(255, 118, 52, ${(heatIntensity * 0.14).toFixed(3)})`);
    heatGradient.addColorStop(1, "rgba(255, 179, 84, 0)");
    ctx.fillStyle = heatGradient;
    ctx.fillRect(glassX - 10, glassY + glassHeight * 0.4, glassWidth + 20, glassHeight * 0.7);
  }

  if (flashIntensity > 0.01) {
    const flashGradient = ctx.createRadialGradient(
      glassX + glassWidth / 2,
      liquidY + liquidHeight * 0.34,
      4,
      glassX + glassWidth / 2,
      liquidY + liquidHeight * 0.34,
      glassWidth * 0.9
    );
    flashGradient.addColorStop(0, `rgba(255, 255, 255, ${(flashIntensity * 0.48).toFixed(3)})`);
    flashGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = flashGradient;
    ctx.fillRect(glassX, liquidY, glassWidth, liquidHeight);
  }
}

function drawRoundedRect(x, y, width, height, radius, fill, stroke) {
  roundedPath(x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function roundedPath(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapCanvasText(text, x, y, maxWidth, lineHeight, maxLines) {
  const normalized = `${text}`.replace(/\s+/g, " ").trim();
  if (!normalized) {
    return;
  }
  const tokens = normalized
    .split(" ")
    .flatMap((word, index) => {
      const parts = splitCanvasWord(word, maxWidth);
      return index === 0 ? parts : [" ", ...parts];
    });
  let line = "";
  let lineIndex = 0;
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    const test = line + token;
    if (ctx.measureText(test).width <= maxWidth || !line) {
      line = test;
      continue;
    }
    ctx.fillText(trimCanvasText(line.trimEnd(), maxWidth), x, y + lineIndex * lineHeight);
    line = token === " " ? "" : token;
    lineIndex += 1;
    if (lineIndex >= maxLines - 1) {
      line += tokens.slice(index + 1).join("");
      break;
    }
  }
  if (lineIndex < maxLines) {
    const clipped = trimCanvasText(line.trim(), maxWidth);
    ctx.fillText(clipped, x, y + lineIndex * lineHeight);
  }
}

function splitCanvasWord(word, maxWidth) {
  if (ctx.measureText(word).width <= maxWidth) {
    return [word];
  }
  const parts = [];
  let current = "";
  for (const char of Array.from(word)) {
    const next = current + char;
    if (current && ctx.measureText(next).width > maxWidth) {
      parts.push(current);
      current = char;
    } else {
      current = next;
    }
  }
  if (current) {
    parts.push(current);
  }
  return parts;
}

function trimCanvasText(text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }
  let output = text;
  while (output.length > 1 && ctx.measureText(`${output}...`).width > maxWidth) {
    output = output.slice(0, -1);
  }
  return `${output}...`;
}

function getTubeEquationEntries(tube) {
  const ids = new Set(tube.contents.map((entry) => entry.reagentId));
  return tube.analysis.reactions
    .filter((reaction) => shouldShowReactionEquation(reaction, ids))
    .map((reaction) => ({
      key: reaction.key,
      label: reaction.label,
      equations: getReactionEquations(reaction.key, ids)
    }))
    .filter((entry) => hasEquationContent(entry.equations));
}

function shouldShowReactionEquation() {
  return true;
}

function getReactionEquations(key, ids) {
  return {
    molecular: getRelevantMolecularEquations(key, ids),
    ionic: REACTION_EQUATIONS[key] ?? []
  };
}

function getRelevantMolecularEquations(key, ids) {
  const lines = REACTION_MOLECULAR_EQUATIONS[key] ?? [];
  if (!lines.length) {
    return [];
  }

  switch (key) {
    case "acid-base-neutralization":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["hcl", "koh"] },
        { index: 1, requires: ["hno3", "koh"] },
        { index: 2, requires: ["h2so4", "koh"] },
        { index: 3, requires: ["hcl", "ca_oh_2"] },
        { index: 4, requires: ["hno3", "ca_oh_2"] },
        { index: 5, requires: ["h2so4", "ca_oh_2"] }
      ], ids);
    case "silver-chloride":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["agno3", "hcl"] },
        { index: 1, requires: ["agno3", "bacl2"] },
        { index: 2, requires: ["agno3", "fecl3"] },
        { index: 3, requires: ["agno3", "alcl3"] },
        { index: 4, requires: ["agno3", "nh4cl"] }
      ], ids);
    case "silver-oxide":
    case "copper-hydroxide":
    case "iron-hydroxide":
    case "ammonium-base-reaction":
    case "aluminum-hydroxide":
    case "zinc-hydroxide":
    case "nickel-hydroxide":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: [getPrimaryMetalReagentIdForKey(key), "koh"] },
        { index: 1, requires: [getPrimaryMetalReagentIdForKey(key), "ca_oh_2"] }
      ], ids);
    case "acid-dissolves-silver-oxide":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["h2so4"] },
        { index: 1, requires: ["hno3"] }
      ], ids);
    case "acid-dissolves-silver-phosphate":
    case "acid-dissolves-silver-carbonate":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["hno3"] },
        { index: 1, requires: ["h2so4"] }
      ], ids);
    case "barium-sulfate":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["bacl2", "h2so4"] },
        { index: 1, requires: ["bacl2", "znso4"] }
      ], ids);
    case "calcium-sulfate":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["ca_oh_2", "h2so4"] },
        { index: 1, requires: ["ca_no3_2", "h2so4"] },
        { index: 2, requires: ["ca_oh_2", "znso4"] },
        { index: 3, requires: ["ca_no3_2", "znso4"] }
      ], ids);
    case "acid-dissolves-barium-carbonate":
    case "acid-dissolves-copper-hydroxide":
    case "acid-dissolves-copper-phosphate":
    case "acid-dissolves-copper-carbonate":
    case "acid-decomposes-copper-silicate":
    case "acid-dissolves-iron-hydroxide":
    case "acid-dissolves-calcium-carbonate":
    case "acid-dissolves-iron-phosphate":
    case "acid-dissolves-barium-phosphate":
    case "acid-dissolves-calcium-phosphate":
    case "acid-decomposes-barium-silicate":
    case "acid-decomposes-calcium-silicate":
    case "acid-dissolves-aluminum-hydroxide":
    case "acid-dissolves-aluminum-phosphate":
    case "acid-dissolves-zinc-hydroxide":
    case "acid-dissolves-zinc-phosphate":
    case "acid-dissolves-zinc-carbonate":
    case "acid-decomposes-zinc-silicate":
    case "acid-dissolves-nickel-hydroxide":
    case "acid-dissolves-nickel-phosphate":
    case "acid-dissolves-nickel-carbonate":
    case "acid-decomposes-nickel-silicate":
    case "acid-carbonate":
    case "acid-sulfide":
    case "acid-silicate":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["hcl"] },
        { index: 1, requires: ["h2so4"] },
        { index: 2, requires: ["hno3"] }
      ], ids);
    case "calcium-carbonate":
    case "calcium-phosphate":
    case "calcium-silicate":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["ca_oh_2"] },
        { index: 1, requires: ["ca_no3_2"] }
      ], ids);
    case "aluminum-hydroxide-dissolves-in-alkali":
    case "zinc-hydroxide-dissolves-in-alkali":
      return ids.has("koh") ? [lines[0]] : lines.slice(0, 1);
    case "permanganate-iodide-acid":
    case "permanganate-peroxide-acid":
      return selectMolecularEquationVariants(lines, [
        { index: 0, requires: ["h2so4"] },
        { index: 1, requires: ["hno3"] }
      ], ids);
    default:
      return lines;
  }
}

function selectMolecularEquationVariants(lines, variants, ids) {
  const selected = variants
    .filter((variant) => variant.requires.every((requiredId) => ids.has(requiredId)))
    .map((variant) => lines[variant.index])
    .filter(Boolean);
  return selected.length ? selected : lines.slice(0, 1);
}

function getPrimaryMetalReagentIdForKey(key) {
  if (key.startsWith("copper-")) {
    return "cu_no3_2";
  }
  if (key.startsWith("iron-")) {
    return "fecl3";
  }
  if (key.startsWith("aluminum-") || key === "acid-dissolves-aluminum-hydroxide" || key === "acid-dissolves-aluminum-phosphate") {
    return "alcl3";
  }
  if (key.startsWith("zinc-") || key === "acid-dissolves-zinc-hydroxide" || key === "acid-dissolves-zinc-phosphate" || key === "acid-dissolves-zinc-carbonate" || key === "acid-decomposes-zinc-silicate") {
    return "znso4";
  }
  if (key.startsWith("nickel-") || key === "acid-dissolves-nickel-hydroxide" || key === "acid-dissolves-nickel-phosphate" || key === "acid-dissolves-nickel-carbonate" || key === "acid-decomposes-nickel-silicate") {
    return "ni_no3_2";
  }
  if (key === "silver-oxide") {
    return "agno3";
  }
  if (key === "ammonium-base-reaction") {
    return "nh4cl";
  }
  return "";
}

function hasEquationContent(equations) {
  return equations.molecular.length > 0 || equations.ionic.length > 0;
}

function getFlattenedEquationLines(equations) {
  return [
    ...equations.molecular.map((line) => `Молекулярное: ${line}`),
    ...equations.ionic.map((line) => `Ионное: ${line}`)
  ];
}

function getPHLabel(pHCategory) {
  if (pHCategory === "acidic") {
    return "Кислая среда";
  }
  if (pHCategory === "basic") {
    return "Щелочная среда";
  }
  return "Нейтральная среда";
}

function renderGameToText() {
  return JSON.stringify({
    mode: "virtual-chemistry-lab",
    coordinateSystem: {
      origin: "top-left",
      xDirection: "right",
      yDirection: "down"
    },
    selectedReagent: state.selectedReagentId ? REAGENT_MAP[state.selectedReagentId].name : null,
    drawer: {
      open: state.drawer.open,
      panel: state.drawer.panel
    },
    journal: state.notifications.map((entry) => entry.message),
    tubes: state.tubes.map((tube) => ({
      id: tube.id,
      label: tube.label,
      volumeUnits: tube.contents.length,
      pHCategory: tube.analysis.pHCategory,
      contents: tube.contents.map((entry) => REAGENT_MAP[entry.reagentId].name),
      reactions: tube.analysis.reactions.map((reaction) => ({
        key: reaction.key,
        label: reaction.label,
        speed: reaction.speed
      })),
      equations: getTubeEquationEntries(tube).map((entry) => ({
        key: entry.key,
        label: entry.label,
        molecular: entry.equations.molecular,
        ionic: entry.equations.ionic,
        equations: getFlattenedEquationLines(entry.equations)
      })),
      activeEffects: tube.activeEffects.map((effect) => effect.type),
      note: tube.lastReactionSummary
    }))
  });
}

function parseColorToRgb(colorString) {
  const matches = colorString.match(/\d+/g);
  return matches?.length >= 3 ? matches.slice(0, 3).map(Number) : [220, 230, 235];
}

function mixColors(entries) {
  const totals = [0, 0, 0];
  let totalWeight = 0;
  entries.forEach((entry) => {
    const weight = entry.weight ?? 1;
    totals[0] += entry.color[0] * weight;
    totals[1] += entry.color[1] * weight;
    totals[2] += entry.color[2] * weight;
    totalWeight += weight;
  });
  return totalWeight ? totals.map((value) => Math.round(value / totalWeight)) : [220, 230, 235];
}

function amplifyColor(color, saturationBoost = 0.12, brightnessBoost = 0.06) {
  const midpoint = average(color);
  return color.map((channel) => {
    const saturated = midpoint + (channel - midpoint) * (1 + saturationBoost);
    const brightened = saturated + (255 - saturated) * brightnessBoost;
    return Math.round(clamp(brightened, 0, 255));
  });
}

function getFalloutAccentColor(color) {
  const brightness = average(color);
  if (brightness > 220) {
    return mixColors([
      { color, weight: 0.32 },
      { color: [116, 138, 154], weight: 1.08 }
    ]);
  }
  return amplifyColor(color, 0.12, 0.02);
}

function rgba(color, alpha) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha.toFixed(3)})`;
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function getAdjustedAcidityScore(reagents, reactions, baseAcidityScore) {
  const reactionKeys = new Set(reactions.map((reaction) => reaction.key));
  const hydrolysisBoost = ACIDIC_HYDROLYSIS_RULES.reduce((sum, rule) => {
    const matches = reagents.filter((reagent) => reagent.id === rule.reagentId).length;
    if (!matches) {
      return sum;
    }
    if (rule.blockedBy.some((key) => reactionKeys.has(key))) {
      return sum;
    }
    return sum + rule.boost * matches;
  }, 0);
  return baseAcidityScore + hydrolysisBoost;
}

function getPHCategory(acidityScore) {
  if (acidityScore > 1) {
    return "acidic";
  }
  if (acidityScore < -1) {
    return "basic";
  }
  return "neutral";
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function easeInOutCubic(value) {
  return value < 0.5
    ? 4 * value * value * value
    : 1 - Math.pow(-2 * value + 2, 3) / 2;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function formatContentsText(reagents) {
  const counts = new Map();
  reagents.forEach((reagent) => {
    counts.set(reagent.name, (counts.get(reagent.name) ?? 0) + 1);
  });
  return Array.from(counts.entries())
    .map(([name, count]) => (count > 1 ? `${name} ×${count}` : name))
    .join(", ");
}

function hasAcid(ids) {
  return hasAny(ids, ["hcl", "hno3", "h2so4"]);
}

function hasBase(ids) {
  return hasAny(ids, ["koh", "li2co3", "na3po4", "k2sio3", "na2s", "ca_oh_2"]);
}

function hasChlorideSource(ids) {
  return hasAny(ids, ["hcl", "bacl2", "fecl3", "alcl3", "nh4cl"]);
}

function hasSulfateSource(ids) {
  return hasAny(ids, ["h2so4", "znso4"]);
}

function hasCalciumSource(ids) {
  return hasAny(ids, ["ca_oh_2", "ca_no3_2"]);
}

function hasPermanganateCompatibleAcid(ids) {
  return hasAny(ids, ["h2so4", "hno3"]);
}

function countReagent(reagents, reagentId) {
  return reagents.filter((reagent) => reagent.id === reagentId).length;
}

function hasExcessKoh(reagents) {
  return countReagent(reagents, "koh") >= 2;
}

function hasAny(ids, candidates) {
  return candidates.some((candidate) => ids.has(candidate));
}

function seededUnit(seed) {
  if (seededCache.has(seed)) {
    return seededCache.get(seed);
  }
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  const value = ((hash >>> 0) % 1000) / 1000;
  seededCache.set(seed, value);
  return value;
}
