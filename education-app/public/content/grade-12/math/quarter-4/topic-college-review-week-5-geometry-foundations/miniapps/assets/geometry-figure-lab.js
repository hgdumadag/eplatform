const figureSelect = document.getElementById('figure-select');
const sliderGroups = document.getElementById('slider-groups');
const showAnnotationsInput = document.getElementById('show-annotations');
const examModeInput = document.getElementById('exam-mode');
const revealButton = document.getElementById('reveal-formulas');
const factSummary = document.getElementById('fact-summary');
const measureList = document.getElementById('measure-list');
const formulaList = document.getElementById('formula-list');
const figureLayer = document.getElementById('figure-layer');
const annotationLayer = document.getElementById('annotation-layer');

const figureConfigs = {
  rightTriangle: {
    label: 'Right triangle',
    controls: [
      { key: 'a', label: 'Leg a', min: 3, max: 15, step: 1, value: 6 },
      { key: 'b', label: 'Leg b', min: 3, max: 15, step: 1, value: 8 }
    ],
    factSummary: 'Look for the right-angle marker, identify the two legs, and remember that the side across from the right angle is the hypotenuse.',
    formulas: [
      'Hypotenuse: c = sqrt(a^2 + b^2)',
      'Area: A = 1/2 ab',
      'Perimeter: P = a + b + c'
    ]
  },
  rectangle: {
    label: 'Rectangle',
    controls: [
      { key: 'length', label: 'Length', min: 4, max: 18, step: 1, value: 12 },
      { key: 'width', label: 'Width', min: 3, max: 14, step: 1, value: 7 }
    ],
    factSummary: 'A rectangle gives two distinct side lengths and four right angles. Perimeter adds all sides; area multiplies the side lengths.',
    formulas: [
      'Area: A = lw',
      'Perimeter: P = 2l + 2w'
    ]
  },
  parallelogram: {
    label: 'Parallelogram',
    controls: [
      { key: 'base', label: 'Base', min: 6, max: 18, step: 1, value: 12 },
      { key: 'side', label: 'Side', min: 4, max: 14, step: 1, value: 8 },
      { key: 'height', label: 'Height', min: 3, max: 10, step: 1, value: 6 }
    ],
    factSummary: 'For area, use the base and the perpendicular height. The slanted side helps with perimeter, but not with the area formula.',
    formulas: [
      'Area: A = bh',
      'Perimeter: P = 2b + 2s'
    ]
  },
  trapezoid: {
    label: 'Trapezoid',
    controls: [
      { key: 'base1', label: 'Longer base', min: 8, max: 20, step: 1, value: 16 },
      { key: 'base2', label: 'Shorter base', min: 4, max: 16, step: 1, value: 10 },
      { key: 'height', label: 'Height', min: 3, max: 10, step: 1, value: 6 }
    ],
    factSummary: 'The parallel sides are the bases. The height is the perpendicular distance between them, and that is what the area formula needs.',
    formulas: [
      'Area: A = 1/2 (b1 + b2)h',
      'Perimeter: add both bases and the two legs'
    ]
  },
  circle: {
    label: 'Circle',
    controls: [
      { key: 'radius', label: 'Radius', min: 2, max: 12, step: 1, value: 6 }
    ],
    factSummary: 'Check whether the diagram gives a radius or a diameter. Circumference uses a linear measure, while area squares the radius.',
    formulas: [
      'Circumference: C = 2πr',
      'Area: A = πr^2',
      'Diameter: d = 2r'
    ]
  }
};

const state = {
  figure: 'rightTriangle',
  values: {},
  formulasRevealed: false
};

function postMessageToHost(payload) {
  if (window.parent && window.parent !== window) {
    window.parent.postMessage(payload, '*');
  }
}

function initializeValues() {
  Object.entries(figureConfigs).forEach(([figureKey, config]) => {
    config.controls.forEach((control) => {
      state.values[`${figureKey}.${control.key}`] = control.value;
    });
  });
}

function getValue(controlKey) {
  return Number(state.values[`${state.figure}.${controlKey}`]);
}

function setAttr(node, attrs) {
  Object.entries(attrs).forEach(([key, value]) => {
    node.setAttribute(key, String(value));
  });
  return node;
}

function svgEl(name, attrs = {}) {
  return setAttr(document.createElementNS('http://www.w3.org/2000/svg', name), attrs);
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function format(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function renderSliders() {
  clearNode(sliderGroups);
  const config = figureConfigs[state.figure];

  config.controls.forEach((control) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'slider-group';

    const label = document.createElement('label');
    label.htmlFor = `${state.figure}-${control.key}`;
    label.textContent = control.label;

    const input = document.createElement('input');
    input.type = 'range';
    input.id = `${state.figure}-${control.key}`;
    input.min = String(control.min);
    input.max = String(control.max);
    input.step = String(control.step);
    input.value = String(getValue(control.key));

    const value = document.createElement('div');
    value.className = 'slider-value';
    value.textContent = `${control.label}: ${input.value}`;

    input.addEventListener('input', () => {
      state.values[`${state.figure}.${control.key}`] = Number(input.value);
      value.textContent = `${control.label}: ${input.value}`;
      renderFigure();
    });

    wrapper.append(label, input, value);
    sliderGroups.appendChild(wrapper);
  });
}

function addText(layer, x, y, text, extraClass = '') {
  const node = svgEl('text', { x, y, class: `annotation-text ${extraClass}`.trim() });
  node.textContent = text;
  layer.appendChild(node);
}

function renderRightTriangle() {
  const a = getValue('a');
  const b = getValue('b');
  const c = Math.sqrt(a * a + b * b);
  const scale = 16;
  const x0 = 120;
  const y0 = 330;
  const poly = svgEl('polygon', {
    points: `${x0},${y0} ${x0},${y0 - b * scale} ${x0 + a * scale},${y0}`,
    class: 'shape-fill'
  });
  figureLayer.appendChild(poly);
  annotationLayer.appendChild(svgEl('rect', { x: x0, y: y0 - 20, width: 20, height: 20, fill: 'none', stroke: '#d45a1a', 'stroke-width': 4 }));
  addText(annotationLayer, x0 + 52, y0 + 26, `a = ${a}`);
  addText(annotationLayer, x0 - 74, y0 - b * scale / 2, `b = ${b}`);
  addText(annotationLayer, x0 + a * scale / 2 - 24, y0 - b * scale / 2 - 12, `c ≈ ${format(c)}`);

  return {
    measures: [
      `Hypotenuse ≈ ${format(c)}`,
      `Area = ${format(0.5 * a * b)}`,
      `Perimeter ≈ ${format(a + b + c)}`
    ],
    formulas: figureConfigs.rightTriangle.formulas
  };
}

function renderRectangle() {
  const length = getValue('length');
  const width = getValue('width');
  const scale = 18;
  const x = 170;
  const y = 120;
  figureLayer.appendChild(svgEl('rect', {
    x,
    y,
    width: length * scale,
    height: width * scale,
    class: 'shape-fill'
  }));
  annotationLayer.appendChild(svgEl('rect', { x, y, width: 18, height: 18, fill: 'none', stroke: '#d45a1a', 'stroke-width': 4 }));
  addText(annotationLayer, x + length * scale / 2 - 34, y + width * scale + 30, `length = ${length}`);
  addText(annotationLayer, x - 88, y + width * scale / 2, `width = ${width}`);

  return {
    measures: [
      `Area = ${length * width}`,
      `Perimeter = ${2 * length + 2 * width}`
    ],
    formulas: figureConfigs.rectangle.formulas
  };
}

function renderParallelogram() {
  const base = getValue('base');
  const side = getValue('side');
  const height = getValue('height');
  const scale = 18;
  const x = 160;
  const y = 310;
  const skew = 70;
  const topY = y - height * scale;
  figureLayer.appendChild(svgEl('polygon', {
    points: `${x},${y} ${x + base * scale},${y} ${x + base * scale - skew},${topY} ${x - skew},${topY}`,
    class: 'shape-fill'
  }));
  annotationLayer.appendChild(svgEl('line', { x1: x + 40, y1: y, x2: x + 40, y2: topY, class: 'shape-alert' }));
  addText(annotationLayer, x + base * scale / 2 - 32, y + 28, `base = ${base}`);
  addText(annotationLayer, x - 114, y - height * scale / 2, `height = ${height}`);
  addText(annotationLayer, x + base * scale - skew + 16, y - height * scale / 2, `side = ${side}`);

  return {
    measures: [
      `Area = ${base * height}`,
      `Perimeter = ${2 * base + 2 * side}`
    ],
    formulas: figureConfigs.parallelogram.formulas
  };
}

function renderTrapezoid() {
  const base1 = getValue('base1');
  const base2 = getValue('base2');
  const height = getValue('height');
  const scale = 18;
  const x = 140;
  const y = 320;
  const offset = ((base1 - base2) * scale) / 2;
  const topY = y - height * scale;
  figureLayer.appendChild(svgEl('polygon', {
    points: `${x},${y} ${x + base1 * scale},${y} ${x + base1 * scale - offset},${topY} ${x + offset},${topY}`,
    class: 'shape-fill'
  }));
  annotationLayer.appendChild(svgEl('line', { x1: x + base1 * scale / 2, y1: y, x2: x + base1 * scale / 2, y2: topY, class: 'shape-alert' }));
  addText(annotationLayer, x + base1 * scale / 2 - 42, y + 28, `b1 = ${base1}`);
  addText(annotationLayer, x + base1 * scale / 2 - 42, topY - 16, `b2 = ${base2}`);
  addText(annotationLayer, x + base1 * scale / 2 + 16, y - height * scale / 2, `h = ${height}`);
  const leg = Math.sqrt((offset / scale) ** 2 + height ** 2);

  return {
    measures: [
      `Area = ${format(0.5 * (base1 + base2) * height)}`,
      `Leg length ≈ ${format(leg)}`,
      `Perimeter ≈ ${format(base1 + base2 + 2 * leg)}`
    ],
    formulas: figureConfigs.trapezoid.formulas
  };
}

function renderCircle() {
  const radius = getValue('radius');
  const scale = 18;
  const cx = 340;
  const cy = 210;
  figureLayer.appendChild(svgEl('circle', { cx, cy, r: radius * scale, class: 'shape-fill' }));
  annotationLayer.appendChild(svgEl('line', { x1: cx, y1: cy, x2: cx + radius * scale, y2: cy, class: 'shape-accent' }));
  annotationLayer.appendChild(svgEl('line', { x1: cx - radius * scale, y1: cy + 54, x2: cx + radius * scale, y2: cy + 54, class: 'shape-alert' }));
  addText(annotationLayer, cx + radius * scale / 2 - 14, cy - 12, `r = ${radius}`);
  addText(annotationLayer, cx - 46, cy + 82, `d = ${2 * radius}`);

  return {
    measures: [
      `Circumference ≈ ${format(2 * Math.PI * radius)}`,
      `Area ≈ ${format(Math.PI * radius * radius)}`,
      `Diameter = ${2 * radius}`
    ],
    formulas: figureConfigs.circle.formulas
  };
}

function renderFigure() {
  clearNode(figureLayer);
  clearNode(annotationLayer);

  const showAnnotations = showAnnotationsInput.checked;
  const config = figureConfigs[state.figure];
  factSummary.textContent = config.factSummary;

  let result;
  if (state.figure === 'rightTriangle') {
    result = renderRightTriangle();
  } else if (state.figure === 'rectangle') {
    result = renderRectangle();
  } else if (state.figure === 'parallelogram') {
    result = renderParallelogram();
  } else if (state.figure === 'trapezoid') {
    result = renderTrapezoid();
  } else {
    result = renderCircle();
  }

  if (!showAnnotations) {
    annotationLayer.setAttribute('visibility', 'hidden');
  } else {
    annotationLayer.setAttribute('visibility', 'visible');
  }

  clearNode(measureList);
  result.measures.forEach((text) => {
    const item = document.createElement('div');
    item.className = 'measure-item';
    item.textContent = text;
    measureList.appendChild(item);
  });

  const examMode = examModeInput.checked;
  revealButton.disabled = !examMode;
  clearNode(formulaList);
  const showFormulas = !examMode || state.formulasRevealed;

  if (showFormulas) {
    result.formulas.forEach((text) => {
      const item = document.createElement('div');
      item.className = 'formula-item';
      item.textContent = text;
      formulaList.appendChild(item);
    });
  } else {
    const item = document.createElement('div');
    item.className = 'formula-item';
    item.textContent = 'Exam mode is on. Try naming the needed measurements before revealing the formulas.';
    formulaList.appendChild(item);
  }

  postMessageToHost({
    type: 'checkpoint',
    checkpointId: `${state.figure}-updated`
  });
}

figureSelect.addEventListener('change', () => {
  state.figure = figureSelect.value;
  state.formulasRevealed = false;
  renderSliders();
  renderFigure();
});

showAnnotationsInput.addEventListener('change', renderFigure);
examModeInput.addEventListener('change', () => {
  state.formulasRevealed = false;
  renderFigure();
});

revealButton.addEventListener('click', () => {
  state.formulasRevealed = true;
  renderFigure();
});

initializeValues();
renderSliders();
renderFigure();
postMessageToHost({ type: 'ready' });
postMessageToHost({
  type: 'resize',
  height: Math.max(620, document.documentElement.scrollHeight)
});
