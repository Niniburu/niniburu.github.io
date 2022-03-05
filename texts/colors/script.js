// Play with these options to create different designs!
const defaults = {
  depth: 30,
  gap: 1,
  layersPerColor: 7,
  faceColor: '#FDD835',
  sideColors: ['#1E88E5', '#F44336', '#FDD835'] };


const getColor = (i, { depth, sideColors, layersPerColor, faceColor }) => {
  if (i === 0) {
    return faceColor;
  }
  if (i > 1 && i < depth - 1) {
    return sideColors[Math.floor((i - 2) / layersPerColor) % sideColors.length];
  }
};

const isometricText = (target, options = {}) => {

  options = { ...defaults, options };

  const text = target.innerText;
  target.innerText = '';
  target.classList.add('iso-text');

  for (let i = 0, color = 0; i < options.depth; i++, color++) {
    const div = document.createElement('div');
    div.innerText = text;
    div.style.setProperty("--depth", options.depth - i * options.gap);
    div.style.setProperty("color", getColor(i, options));
    target.appendChild(div);
  }
};

isometricText(document.getElementById('my-isometric-text'));