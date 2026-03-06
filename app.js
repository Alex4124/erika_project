const REAGENTS = [
  {
    id: "hcl",
    name: "Соляная кислота",
    formula: "HCl",
    description: "Бесцветный прозрачный раствор сильной кислоты.",
    color: [214, 243, 255],
    alpha: 0.56,
    clarity: 0.88,
    textureOpacity: 0.04,
    sedimentOpacity: 0,
    pHScore: 3.2,
    tags: ["acid", "chloride"]
  },
  {
    id: "koh",
    name: "Гидроксид калия",
    formula: "KOH",
    description: "Бесцветный щелочной раствор.",
    color: [220, 244, 252],
    alpha: 0.54,
    clarity: 0.86,
    textureOpacity: 0.03,
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
    alpha: 0.62,
    clarity: 0.9,
    textureOpacity: 0.03,
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
    alpha: 0.88,
    clarity: 0.72,
    textureOpacity: 0.08,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["copper2", "nitrate"]
  },
  {
    id: "agno3",
    name: "Нитрат серебра",
    formula: "AgNO₃",
    description: "Бесцветный прозрачный раствор.",
    color: [240, 246, 250],
    alpha: 0.48,
    clarity: 0.92,
    textureOpacity: 0.02,
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
    alpha: 0.5,
    clarity: 0.9,
    textureOpacity: 0.03,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["barium", "chloride"]
  },
  {
    id: "fecl3",
    name: "Хлорид трёхвалентного железа",
    formula: "FeCl₃",
    description: "Жёлто-бурый раствор ионов железа(III).",
    color: [184, 118, 42],
    alpha: 0.86,
    clarity: 0.65,
    textureOpacity: 0.08,
    sedimentOpacity: 0,
    pHScore: 0.8,
    tags: ["iron3", "chloride"]
  },
  {
    id: "ki",
    name: "Иодид калия",
    formula: "KI",
    description: "Бесцветный прозрачный раствор.",
    color: [234, 244, 246],
    alpha: 0.48,
    clarity: 0.9,
    textureOpacity: 0.03,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["iodide"]
  },
  {
    id: "phenolphthalein",
    name: "Фенолфталеин",
    formula: "C₂₀H₁₄O₄",
    description: "Бесцветный индикатор, малиновеет в щёлочи.",
    color: [245, 245, 245],
    alpha: 0.24,
    clarity: 0.96,
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
    alpha: 0.82,
    clarity: 0.36,
    textureOpacity: 0.24,
    sedimentOpacity: 0.28,
    pHScore: -1.8,
    tags: ["carbonate", "base", "suspension"]
  },
  {
    id: "na3po4",
    name: "Фосфат натрия",
    formula: "Na₃PO₄",
    description: "Бесцветный щелочной раствор.",
    color: [226, 244, 248],
    alpha: 0.52,
    clarity: 0.86,
    textureOpacity: 0.05,
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
    alpha: 0.64,
    clarity: 0.64,
    textureOpacity: 0.12,
    sedimentOpacity: 0.05,
    pHScore: -1.9,
    tags: ["silicate", "base", "viscous"]
  },
  {
    id: "na2s",
    name: "Сульфид натрия",
    formula: "Na₂S",
    description: "Бесцветный с желтоватым оттенком раствор.",
    color: [244, 234, 162],
    alpha: 0.66,
    clarity: 0.74,
    textureOpacity: 0.08,
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
    alpha: 0.8,
    clarity: 0.38,
    textureOpacity: 0.2,
    sedimentOpacity: 0.18,
    pHScore: -2.6,
    tags: ["base", "hydroxide", "suspension", "calcium"]
  },
  {
    id: "h2o2",
    name: "Пероксид водорода",
    formula: "H₂O₂",
    description: "Бесцветный прозрачный раствор окислителя.",
    color: [228, 246, 255],
    alpha: 0.56,
    clarity: 0.9,
    textureOpacity: 0.03,
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
    alpha: 0.92,
    clarity: 0.7,
    textureOpacity: 0.08,
    sedimentOpacity: 0,
    pHScore: 0,
    tags: ["permanganate", "oxidizer"]
  }
];

const REAGENT_MAP = Object.fromEntries(REAGENTS.map((reagent) => [reagent.id, reagent]));
const MAX_TUBE_CONTENTS = 6;
const FULLSCREEN_KEY = "f";

const app = document.querySelector(".app-shell");
const canvas = document.querySelector("#lab-canvas");
const ctx = canvas.getContext("2d");
const reagentGrid = document.querySelector("#reagent-grid");
const tubeRack = document.querySelector("#tube-rack");
const selectedReagentLabel = document.querySelector("#selected-reagent");
const eventFeed = document.querySelector("#event-feed");
const resetAllButton = document.querySelector("#reset-all-btn");

const tubeElements = new Map();
const reagentElements = new Map();

const state = {
  selectedReagentId: null,
  notifications: [],
  dragging: null,
  tubes: Array.from({ length: 4 }, (_, index) => createTube(index + 1)),
  clockMs: 0,
  lastTimestamp: 0
};

function createTube(number) {
  return {
    id: `tube-${number}`,
    label: `Пробирка ${number}`,
    contents: [],
    triggeredReactionKeys: [],
    activeEffects: [],
    analysis: createEmptyAnalysis(),
    lastReactionSummary: "Пробирка пуста."
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
    predicate: ({ ids }) => hasAcid(ids) && hasBase(ids),
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
    predicate: ({ ids }) => ids.has("agno3") && hasAny(ids, ["hcl", "bacl2", "fecl3"]),
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
    key: "barium-sulfate",
    label: "Осаждение сульфата бария",
    speed: "instant",
    note: "Белый тяжёлый осадок BaSO₄ выпадает сразу и быстро оседает.",
    predicate: ({ ids }) => ids.has("bacl2") && ids.has("h2so4"),
    precipitate: { color: [244, 244, 241], height: 0.17, opacity: 0.94 },
    animation: [
      { type: "flash", durationMs: 380, peak: 0.2 },
      { type: "precipitation", durationMs: 820, peak: 1 }
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
    key: "iron-phosphate",
    label: "Осаждение фосфата железа",
    speed: "fast",
    note: "Появляется светлый желтовато-белый осадок фосфата железа.",
    predicate: ({ ids }) => ids.has("fecl3") && ids.has("na3po4"),
    precipitate: { color: [227, 221, 196], height: 0.16, opacity: 0.78 },
    animation: [{ type: "precipitation", durationMs: 1120, peak: 1 }]
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
    key: "acid-carbonate",
    label: "Разложение карбоната кислотой",
    speed: "fast",
    note: "Идёт бурное выделение пузырьков CO₂, мутность постепенно снижается.",
    predicate: ({ ids }) => hasAny(ids, ["hcl", "h2so4"]) && ids.has("li2co3"),
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
    predicate: ({ ids }) => hasAny(ids, ["hcl", "h2so4"]) && ids.has("na2s"),
    animation: [{ type: "gas", durationMs: 1800, peak: 0.92 }]
  },
  {
    key: "acid-silicate",
    label: "Образование кремниевой кислоты",
    speed: "slow",
    note: "Раствор постепенно желируется, появляется бесцветный студенистый осадок.",
    predicate: ({ ids }) => hasAny(ids, ["hcl", "h2so4"]) && ids.has("k2sio3"),
    precipitate: { color: [236, 240, 239], height: 0.1, opacity: 0.42 },
    gelOpacity: 0.42,
    animation: [
      { type: "precipitation", durationMs: 2800, peak: 1 },
      { type: "color-wave", durationMs: 2600, peak: 0.18 }
    ]
  },
  {
    key: "permanganate-peroxide-acid",
    label: "Окисление пероксида перманганатом",
    speed: "fast",
    note: "Фиолетовая окраска быстро исчезает, смесь нагревается и активно выделяет O₂.",
    predicate: ({ ids }) => ids.has("kmno4") && ids.has("h2o2") && ids.has("h2so4"),
    bleach: 0.74,
    animation: [
      { type: "gas", durationMs: 2400, peak: 1 },
      { type: "heat", durationMs: 2000, peak: 0.72 },
      { type: "color-wave", durationMs: 1500, peak: 0.56 }
    ]
  }
];

init();

function init() {
  buildReagentCards();
  buildTubeRack();
  updateSelectedReagentLabel();
  postEvent("Стаканы готовы к работе. Перетащите реагент в пробирку, чтобы начать опыт.");
  renderSceneBackground();
  window.addEventListener("resize", handleResize);
  window.addEventListener("keydown", handleKeydown);
  resetAllButton.addEventListener("click", () => {
    state.tubes = Array.from({ length: 4 }, (_, index) => createTube(index + 1));
    buildTubeRack();
    postEvent("Все пробирки очищены.");
  });
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
  REAGENTS.forEach((reagent) => {
    const card = document.createElement("article");
    card.className = "reagent-card";
    card.dataset.reagentId = reagent.id;
    card.setAttribute("aria-label", reagent.name);
    card.innerHTML = `
      <div class="reagent-card-header">
        <h3>${reagent.name}</h3>
        <span class="formula">${reagent.formula}</span>
      </div>
      <div class="beaker">
        <div class="liquid-fill"></div>
        <div class="liquid-meniscus"></div>
      </div>
      <p class="reagent-description">${reagent.description}</p>
    `;
    applyLiquidStyle(card.querySelector(".liquid-fill"), reagent);
    card.addEventListener("pointerdown", onReagentPointerDown);
    card.addEventListener("click", () => {
      if (!state.dragging) {
        toggleSelectedReagent(reagent.id);
      }
    });
    reagentGrid.append(card);
    reagentElements.set(reagent.id, card);
  });
}

function buildTubeRack() {
  tubeRack.innerHTML = "";
  tubeElements.clear();
  state.tubes.forEach((tube) => {
    evaluateTube(tube);
    const card = document.createElement("article");
    card.className = "tube-card";
    card.dataset.tubeId = tube.id;
    card.setAttribute("aria-label", tube.label);
    card.innerHTML = `
      <h3>${tube.label}</h3>
      <div class="tube-glass">
        <div class="tube-liquid-wrap">
          <div class="tube-liquid">
            <div class="tube-overlay"></div>
            <div class="tube-gel"></div>
            <div class="tube-precipitate"></div>
            <div class="tube-bubbles"></div>
            <div class="tube-heat"></div>
            <div class="tube-flash"></div>
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
    renderTube(tube);
  });
}

function applyLiquidStyle(element, reagent) {
  element.style.setProperty("--liquid-color", rgba(reagent.color, reagent.alpha));
  element.style.setProperty("--particle-color", rgba(mixColors([
    { color: reagent.color, weight: 1 },
    { color: [255, 255, 255], weight: 0.35 }
  ]), 0.3));
  element.style.setProperty("--clarity", reagent.clarity.toFixed(2));
  element.style.setProperty("--texture-opacity", reagent.textureOpacity.toFixed(2));
  element.style.setProperty("--sediment-opacity", reagent.sedimentOpacity.toFixed(2));
}

function toggleSelectedReagent(reagentId) {
  state.selectedReagentId = state.selectedReagentId === reagentId ? null : reagentId;
  updateSelectedReagentLabel();
}

function updateSelectedReagentLabel() {
  reagentElements.forEach((element, reagentId) => {
    element.classList.toggle("is-selected", state.selectedReagentId === reagentId);
  });
  selectedReagentLabel.textContent = state.selectedReagentId
    ? `${REAGENT_MAP[state.selectedReagentId].name} (${REAGENT_MAP[state.selectedReagentId].formula})`
    : "Ничего не выбрано";
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
      <div class="reagent-card-header">
        <h3>${reagent.name}</h3>
        <span class="formula">${reagent.formula}</span>
      </div>
      <div class="beaker">
        <div class="liquid-fill"></div>
        <div class="liquid-meniscus"></div>
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
  renderTube(tube);
  postEvent(`${tube.label} очищена.`);
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
  tube.contents.push({ reagentId, addedAt: state.clockMs });
  evaluateTube(tube);
  const newReactions = tube.analysis.reactions.filter((reaction) => !previousKeys.has(reaction.key));
  tube.triggeredReactionKeys = tube.analysis.reactions.map((reaction) => reaction.key);
  const indicatorsPresent = tube.contents.some((entry) => REAGENT_MAP[entry.reagentId].tags.includes("indicator"));

  if (indicatorsPresent && previousPH !== tube.analysis.pHCategory) {
    tube.activeEffects.push({
      key: `indicator-${state.clockMs}`,
      type: "color-wave",
      startedAt: state.clockMs,
      durationMs: 900,
      peak: 0.28
    });
  }

  newReactions.forEach((reaction) => {
    reaction.animation.forEach((animation, index) => {
      tube.activeEffects.push({
        key: `${reaction.key}-${index}-${state.clockMs}`,
        reactionKey: reaction.key,
        type: animation.type,
        startedAt: state.clockMs,
        durationMs: animation.durationMs,
        peak: animation.peak
      });
    });
    postEvent(`${tube.label}: ${reaction.note}`);
  });

  tube.lastReactionSummary = newReactions.length
    ? newReactions.map((reaction) => reaction.note).join(" ")
    : `Добавлен реагент "${reagent.name}". Видимых изменений почти нет.`;

  if (!newReactions.length) {
    postEvent(`${tube.label}: добавлен реагент "${reagent.name}". Видимых изменений почти нет.`);
  }

  renderTube(tube);
}

function evaluateTube(tube) {
  if (!tube.contents.length) {
    tube.analysis = createEmptyAnalysis();
    return;
  }

  const reagents = tube.contents.map((entry) => REAGENT_MAP[entry.reagentId]);
  const ids = new Set(reagents.map((reagent) => reagent.id));
  const acidityScore = reagents.reduce((sum, reagent) => sum + reagent.pHScore, 0);
  const pHCategory = acidityScore > 1 ? "acidic" : acidityScore < -1 ? "basic" : "neutral";
  const reactions = REACTION_RULES.filter((rule) => rule.predicate({ ids, reagents, acidityScore, pHCategory }));

  let mixedColor = mixColors(reagents.map((reagent) => ({ color: reagent.color, weight: Math.max(reagent.alpha, 0.25) })));
  let alpha = clamp(average(reagents.map((reagent) => reagent.alpha)), 0.28, 0.95);
  let clarity = clamp(average(reagents.map((reagent) => reagent.clarity)), 0.2, 0.95);
  let textureOpacity = clamp(average(reagents.map((reagent) => reagent.textureOpacity)), 0, 0.32);
  let sedimentOpacity = clamp(average(reagents.map((reagent) => reagent.sedimentOpacity)), 0, 0.32);
  let overlayColor = [255, 255, 255];
  let overlayOpacity = 0;
  let gelOpacity = 0;
  let precipitateHeight = 0;
  let precipitateOpacity = 0;
  let precipitateColor = [236, 236, 236];

  reactions.forEach((reaction) => {
    if (reaction.overlay) {
      overlayColor = mixColors([
        { color: overlayColor, weight: 1 - overlayOpacity },
        { color: reaction.overlay.color, weight: reaction.overlay.opacity + 0.15 }
      ]);
      overlayOpacity = clamp(overlayOpacity + reaction.overlay.opacity, 0, 0.7);
    }
    if (reaction.precipitate) {
      precipitateColor = mixColors([
        { color: precipitateColor, weight: precipitateOpacity + 0.2 },
        { color: reaction.precipitate.color, weight: reaction.precipitate.opacity + 0.2 }
      ]);
      precipitateHeight = clamp(precipitateHeight + reaction.precipitate.height, 0, 0.42);
      precipitateOpacity = clamp(precipitateOpacity + reaction.precipitate.opacity * 0.6, 0, 0.96);
    }
    if (reaction.bleach) {
      mixedColor = mixColors([
        { color: mixedColor, weight: 1 - reaction.bleach },
        { color: [230, 238, 242], weight: reaction.bleach }
      ]);
      alpha = clamp(alpha - reaction.bleach * 0.22, 0.18, 0.9);
      clarity = clamp(clarity + reaction.bleach * 0.24, 0.2, 1);
    }
    if (reaction.clarify) {
      clarity = clamp(clarity + reaction.clarify, 0.2, 1);
      sedimentOpacity = clamp(sedimentOpacity - reaction.clarify * 0.5, 0, 0.3);
      textureOpacity = clamp(textureOpacity - reaction.clarify * 0.4, 0, 0.32);
    }
    if (reaction.gelOpacity) {
      gelOpacity = clamp(gelOpacity + reaction.gelOpacity, 0, 0.72);
      clarity = clamp(clarity - reaction.gelOpacity * 0.18, 0.1, 0.95);
    }
  });

  const indicatorTint = getIndicatorTint(reagents, pHCategory);
  if (indicatorTint) {
    mixedColor = mixColors([
      { color: mixedColor, weight: 1 },
      { color: indicatorTint.color, weight: indicatorTint.weight }
    ]);
    alpha = clamp(alpha + indicatorTint.alphaBoost, 0.2, 0.96);
    overlayOpacity = Math.max(overlayOpacity, indicatorTint.overlayOpacity);
    overlayColor = mixColors([
      { color: overlayColor, weight: 1 - overlayOpacity + 0.1 },
      { color: indicatorTint.color, weight: indicatorTint.overlayOpacity + 0.1 }
    ]);
  }

  tube.analysis = {
    pHCategory,
    acidityScore,
    displayColor: rgba(mixedColor, alpha),
    overlayColor: rgba(overlayColor, overlayOpacity),
    overlayOpacity,
    gelOpacity,
    precipitateColor: rgba(precipitateColor, precipitateOpacity),
    precipitateHeight,
    precipitateOpacity,
    liquidOpacity: alpha,
    textureOpacity,
    sedimentOpacity,
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
    tintEntries.push({ color: [240, 74, 144], weight: 0.8 });
    alphaBoost += 0.08;
    overlayOpacity += 0.16;
  }

  if (methylOrange) {
    if (pHCategory === "acidic") {
      tintEntries.push({ color: [220, 63, 49], weight: 0.86 });
      overlayOpacity += 0.12;
    } else if (pHCategory === "basic") {
      tintEntries.push({ color: [237, 181, 66], weight: 0.72 });
      overlayOpacity += 0.08;
    } else {
      tintEntries.push({ color: [236, 142, 74], weight: 0.62 });
      overlayOpacity += 0.06;
    }
    alphaBoost += 0.04;
  }

  if (litmus) {
    if (pHCategory === "acidic") {
      tintEntries.push({ color: [188, 72, 104], weight: 0.62 });
      overlayOpacity += 0.1;
    } else if (pHCategory === "basic") {
      tintEntries.push({ color: [72, 118, 214], weight: 0.62 });
      overlayOpacity += 0.12;
    } else {
      tintEntries.push({ color: [126, 88, 190], weight: 0.58 });
      overlayOpacity += 0.08;
    }
    alphaBoost += 0.03;
  }

  if (!tintEntries.length) {
    return null;
  }

  return {
    color: mixColors(tintEntries),
    weight: tintEntries.reduce((sum, entry) => sum + entry.weight, 0) / tintEntries.length,
    alphaBoost,
    overlayOpacity: clamp(overlayOpacity, 0, 0.36)
  };
}

function render() {
  drawCanvasScene();
  state.tubes.forEach((tube) => renderTube(tube));
}

function renderTube(tube) {
  const card = tubeElements.get(tube.id);
  if (!card) {
    return;
  }
  const liquid = card.querySelector(".tube-liquid");
  const overlay = card.querySelector(".tube-overlay");
  const gel = card.querySelector(".tube-gel");
  const precipitate = card.querySelector(".tube-precipitate");
  const bubbles = card.querySelector(".tube-bubbles");
  const heat = card.querySelector(".tube-heat");
  const flash = card.querySelector(".tube-flash");
  const note = card.querySelector(".tube-note");
  const contents = card.querySelector(".tube-contents");
  const volumeRatio = tube.contents.length ? clamp(0.14 + tube.contents.length * 0.12, 0.14, 0.86) : 0.02;
  const gasIntensity = getActiveEffectIntensity(tube, "gas");
  const heatIntensity = getActiveEffectIntensity(tube, "heat");
  const flashIntensity = getActiveEffectIntensity(tube, "flash");
  const waveIntensity = getActiveEffectIntensity(tube, "color-wave");
  const precipitationProgress = getEffectProgressOrCompleted(tube, "precipitation");

  liquid.style.height = `${volumeRatio * 100}%`;
  liquid.style.setProperty("--tube-liquid-color", tube.analysis.displayColor);
  liquid.style.setProperty("--tube-liquid-opacity", tube.contents.length ? tube.analysis.liquidOpacity.toFixed(2) : "0.06");
  liquid.style.setProperty("--texture-opacity", tube.analysis.textureOpacity.toFixed(2));
  liquid.style.setProperty("--sediment-opacity", tube.analysis.sedimentOpacity.toFixed(2));
  liquid.style.setProperty("--clarity", tube.analysis.clarity.toFixed(2));
  liquid.style.setProperty("--particle-color", rgba(mixColors([
    { color: parseColorToRgb(tube.analysis.displayColor), weight: 1 },
    { color: [255, 255, 255], weight: 0.4 }
  ]), 0.2 + waveIntensity * 0.24));

  overlay.style.setProperty("--overlay-color", tube.analysis.overlayColor);
  overlay.style.setProperty("--overlay-opacity", clamp(tube.analysis.overlayOpacity + waveIntensity * 0.2, 0, 0.7).toFixed(2));
  gel.style.setProperty("--gel-opacity", clamp(tube.analysis.gelOpacity + waveIntensity * 0.05, 0, 0.8).toFixed(2));
  precipitate.style.height = `${tube.analysis.precipitateHeight * precipitationProgress * 100}%`;
  precipitate.style.setProperty("--precipitate-color", tube.analysis.precipitateColor);
  precipitate.style.setProperty("--precipitate-opacity", tube.analysis.precipitateOpacity.toFixed(2));
  heat.style.setProperty("--heat-opacity", heatIntensity.toFixed(2));
  flash.style.setProperty("--flash-opacity", flashIntensity.toFixed(2));
  note.textContent = tube.lastReactionSummary;
  contents.textContent = tube.analysis.contentsText;
  card.classList.toggle("is-empty", tube.contents.length === 0);

  renderBubbles(tube, bubbles, gasIntensity);
}

function renderBubbles(tube, container, intensity) {
  container.innerHTML = "";
  if (intensity <= 0.01) {
    return;
  }
  const bubbleCount = Math.max(4, Math.round(6 + intensity * 10));
  const phase = state.clockMs / 1000;
  for (let index = 0; index < bubbleCount; index += 1) {
    const seed = seededUnit(`${tube.id}-${index}`);
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = 6 + seed * 10 + intensity * 6;
    const left = 10 + seededUnit(`${tube.id}-${index}-x`) * 68;
    const loop = (phase * (0.42 + seed * 0.46) + seededUnit(`${tube.id}-${index}-loop`)) % 1;
    const bottom = 6 + loop * 88;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;
    bubble.style.opacity = `${0.24 + intensity * 0.56}`;
    container.append(bubble);
  }
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

function postEvent(message) {
  state.notifications.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    message
  });
  state.notifications = state.notifications.slice(0, 6);
  eventFeed.innerHTML = "";
  state.notifications.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "event-item";
    item.textContent = entry.message;
    eventFeed.append(item);
  });
}

function tick(deltaMs) {
  state.clockMs += deltaMs;
  state.tubes.forEach((tube) => {
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
  drawCanvasScene();
}

function handleKeydown(event) {
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
  drawCanvasScene();
}

function drawCanvasScene() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * window.devicePixelRatio;
  canvas.height = height * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
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
  document.querySelectorAll(".hero-panel, .reagent-panel, .experiment-panel, .status-card").forEach((panel) => {
    const rect = panel.getBoundingClientRect();
    drawRoundedRect(rect.x, rect.y, rect.width, rect.height, 26, "rgba(8, 20, 27, 0.7)", "rgba(149, 197, 214, 0.18)");
  });
}

function drawCanvasReagents() {
  reagentElements.forEach((element, reagentId) => {
    const rect = element.getBoundingClientRect();
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
    ctx.font = "600 13px Aptos, Trebuchet MS, sans-serif";
    wrapCanvasText(reagent.name, rect.x + 12, rect.y + 22, rect.width - 24, 15, 2);
    ctx.fillStyle = "#86d6ff";
    ctx.font = "12px Aptos, Trebuchet MS, sans-serif";
    ctx.fillText(reagent.formula, rect.x + 12, rect.y + 52);
    drawCanvasBeaker(rect, reagent);
  });
}

function drawCanvasTubes() {
  state.tubes.forEach((tube) => {
    const card = tubeElements.get(tube.id);
    if (!card) {
      return;
    }
    const rect = card.getBoundingClientRect();
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
  const y = rect.y + 58;
  const width = rect.width * 0.38;
  const height = 82;

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
  gradient.addColorStop(0, rgba(reagent.color, Math.min(0.92, reagent.alpha + 0.12)));
  gradient.addColorStop(1, rgba(reagent.color, reagent.alpha));
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
  const liquidHeight = glassHeight * volumeRatio;
  const liquidY = glassY + glassHeight - liquidHeight - 4;
  roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
  const liquidGradient = ctx.createLinearGradient(0, liquidY, 0, liquidY + liquidHeight);
  liquidGradient.addColorStop(0, tube.analysis.displayColor);
  liquidGradient.addColorStop(1, rgba(parseColorToRgb(tube.analysis.displayColor), Math.max(0.1, tube.analysis.liquidOpacity - 0.06)));
  ctx.fillStyle = liquidGradient;
  ctx.fill();

  const precipitationProgress = getEffectProgressOrCompleted(tube, "precipitation");
  const precipHeight = glassHeight * tube.analysis.precipitateHeight * precipitationProgress;
  if (precipHeight > 1) {
    roundedPath(glassX + 5, glassY + glassHeight - precipHeight - 4, glassWidth - 10, precipHeight, 16);
    ctx.fillStyle = tube.analysis.precipitateColor;
    ctx.fill();
  }

  if (tube.analysis.overlayOpacity > 0.02) {
    roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
    ctx.fillStyle = tube.analysis.overlayColor;
    ctx.fill();
  }

  if (tube.analysis.gelOpacity > 0.02) {
    roundedPath(glassX + 5, liquidY, glassWidth - 10, liquidHeight, 18);
    ctx.fillStyle = `rgba(255, 255, 255, ${tube.analysis.gelOpacity.toFixed(3)})`;
    ctx.fill();
  }

  const gasIntensity = getActiveEffectIntensity(tube, "gas");
  if (gasIntensity > 0.01) {
    const phase = state.clockMs / 1000;
    ctx.fillStyle = `rgba(225, 246, 255, ${(0.2 + gasIntensity * 0.5).toFixed(3)})`;
    for (let index = 0; index < Math.round(7 + gasIntensity * 8); index += 1) {
      const seed = seededUnit(`${tube.id}-canvas-${index}`);
      const bubbleSize = 4 + seed * 6 + gasIntensity * 4;
      const x = glassX + 10 + seededUnit(`${tube.id}-bubble-x-${index}`) * (glassWidth - 20);
      const y = glassY + glassHeight - ((phase * (32 + seed * 28) + index * 11) % 160);
      ctx.beginPath();
      ctx.arc(x, y, bubbleSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const heatIntensity = getActiveEffectIntensity(tube, "heat");
  if (heatIntensity > 0.01) {
    const heatGradient = ctx.createRadialGradient(
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      10,
      glassX + glassWidth / 2,
      glassY + glassHeight * 0.72,
      glassWidth
    );
    heatGradient.addColorStop(0, `rgba(255, 179, 84, ${(heatIntensity * 0.36).toFixed(3)})`);
    heatGradient.addColorStop(1, "rgba(255, 179, 84, 0)");
    ctx.fillStyle = heatGradient;
    ctx.fillRect(glassX - 10, glassY + glassHeight * 0.4, glassWidth + 20, glassHeight * 0.7);
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
  const words = text.split(" ");
  let line = "";
  let lineIndex = 0;
  for (let index = 0; index < words.length; index += 1) {
    const test = line ? `${line} ${words[index]}` : words[index];
    if (ctx.measureText(test).width <= maxWidth || !line) {
      line = test;
      continue;
    }
    ctx.fillText(line, x, y + lineIndex * lineHeight);
    line = words[index];
    lineIndex += 1;
    if (lineIndex >= maxLines - 1) {
      break;
    }
  }
  if (lineIndex < maxLines) {
    const clipped = trimCanvasText(line, maxWidth);
    ctx.fillText(clipped, x, y + lineIndex * lineHeight);
  }
}

function trimCanvasText(text, maxWidth) {
  if (ctx.measureText(text).width <= maxWidth) {
    return text;
  }
  let output = text;
  while (output.length > 1 && ctx.measureText(`${output}…`).width > maxWidth) {
    output = output.slice(0, -1);
  }
  return `${output}…`;
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

function rgba(color, alpha) {
  return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha.toFixed(3)})`;
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
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
  return hasAny(ids, ["hcl", "h2so4"]);
}

function hasBase(ids) {
  return hasAny(ids, ["koh", "li2co3", "na3po4", "k2sio3", "na2s", "ca_oh_2"]);
}

function hasAny(ids, candidates) {
  return candidates.some((candidate) => ids.has(candidate));
}

function seededUnit(seed) {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 1000) / 1000;
}
