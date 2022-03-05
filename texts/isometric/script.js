const defaults = {
  depth: 20,
  gap: 1 };


const isometricText = (target, options = {}) => {

  options = { ...defaults, options };

  const text = target.innerText;
  target.innerText = '';
  target.classList.add('iso-text');

  for (let i = 0; i < options.depth; i++) {
    const div = document.createElement('div');
    div.innerText = text;
    div.style.setProperty("--depth", options.depth - i * options.gap);
    target.appendChild(div);
  }
};

isometricText(document.getElementById('my-isometric-text'));