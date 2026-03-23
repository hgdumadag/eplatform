(function () {
  const svg = document.getElementById('graph');
  const grid = document.getElementById('grid');
  const axis = document.getElementById('axis');
  const pointA = document.getElementById('point-a');
  const pointB = document.getElementById('point-b');
  const pointM = document.getElementById('point-m');
  const segment = document.getElementById('segment');
  const labelA = document.getElementById('label-a');
  const labelB = document.getElementById('label-b');
  const labelM = document.getElementById('label-m');
  const coordinates = document.getElementById('coordinates');
  const formula = document.getElementById('formula');
  const hintButton = document.getElementById('hint-button');

  const sliders = {
    ax: document.getElementById('ax'),
    ay: document.getElementById('ay'),
    bx: document.getElementById('bx'),
    by: document.getElementById('by'),
  };

  const outputs = {
    ax: document.getElementById('ax-value'),
    ay: document.getElementById('ay-value'),
    bx: document.getElementById('bx-value'),
    by: document.getElementById('by-value'),
  };

  const width = 640;
  const height = 360;
  const scaleX = 30;
  const scaleY = 24;
  const originX = width / 2;
  const originY = height / 2;

  function postToParent(type, payload) {
    window.parent.postMessage(
      Object.assign({ type: type }, payload || {}),
      '*',
    );
  }

  function toSvgPoint(x, y) {
    return {
      x: originX + x * scaleX,
      y: originY - y * scaleY,
    };
  }

  function drawGrid() {
    const gridLines = [];
    for (let x = -8; x <= 8; x += 1) {
      const point = toSvgPoint(x, 0);
      gridLines.push('<line x1="' + point.x + '" y1="20" x2="' + point.x + '" y2="' + (height - 20) + '" stroke="#d8e6f4" stroke-width="1" />');
    }
    for (let y = -6; y <= 6; y += 1) {
      const point = toSvgPoint(0, y);
      gridLines.push('<line x1="20" y1="' + point.y + '" x2="' + (width - 20) + '" y2="' + point.y + '" stroke="#d8e6f4" stroke-width="1" />');
    }
    grid.innerHTML = gridLines.join('');
    axis.innerHTML = [
      '<line x1="20" y1="' + originY + '" x2="' + (width - 20) + '" y2="' + originY + '" stroke="#557a95" stroke-width="2" />',
      '<line x1="' + originX + '" y1="20" x2="' + originX + '" y2="' + (height - 20) + '" stroke="#557a95" stroke-width="2" />'
    ].join('');
  }

  function update() {
    const ax = Number(sliders.ax.value);
    const ay = Number(sliders.ay.value);
    const bx = Number(sliders.bx.value);
    const by = Number(sliders.by.value);
    const midpointX = (ax + bx) / 2;
    const midpointY = (ay + by) / 2;

    outputs.ax.textContent = String(ax);
    outputs.ay.textContent = String(ay);
    outputs.bx.textContent = String(bx);
    outputs.by.textContent = String(by);

    const pointOne = toSvgPoint(ax, ay);
    const pointTwo = toSvgPoint(bx, by);
    const pointMid = toSvgPoint(midpointX, midpointY);

    segment.setAttribute('x1', pointOne.x);
    segment.setAttribute('y1', pointOne.y);
    segment.setAttribute('x2', pointTwo.x);
    segment.setAttribute('y2', pointTwo.y);

    pointA.setAttribute('cx', pointOne.x);
    pointA.setAttribute('cy', pointOne.y);
    pointB.setAttribute('cx', pointTwo.x);
    pointB.setAttribute('cy', pointTwo.y);
    pointM.setAttribute('cx', pointMid.x);
    pointM.setAttribute('cy', pointMid.y);

    labelA.setAttribute('x', pointOne.x + 12);
    labelA.setAttribute('y', pointOne.y - 10);
    labelB.setAttribute('x', pointTwo.x + 12);
    labelB.setAttribute('y', pointTwo.y - 10);
    labelM.setAttribute('x', pointMid.x + 12);
    labelM.setAttribute('y', pointMid.y - 10);

    coordinates.textContent = 'A(' + ax + ', ' + ay + '), B(' + bx + ', ' + by + '), midpoint M(' + midpointX + ', ' + midpointY + ')';
    formula.textContent = 'M = ((' + ax + ' + ' + bx + ') / 2, (' + ay + ' + ' + by + ') / 2) = (' + midpointX + ', ' + midpointY + ')';

    postToParent('resize', { height: document.body.scrollHeight + 24 });
    postToParent('checkpoint', { checkpointId: 'midpoint-moved' });
  }

  Object.keys(sliders).forEach(function (key) {
    sliders[key].addEventListener('input', update);
  });

  hintButton.addEventListener('click', function () {
    postToParent('requestHint');
  });

  drawGrid();
  update();
  postToParent('ready');
  postToParent('checkpoint', { checkpointId: 'midpoint-ready' });
})();
