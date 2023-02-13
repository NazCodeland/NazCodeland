const root = document.querySelector(':root');

const menuBtn = document.querySelector('.hamburger');
const palettesContainer = document.querySelector('.palettes');
const palettes = document.querySelectorAll('.palette');

function showPalettes(event) {
  palettesContainer.classList.toggle('show-palettes');
}
menuBtn.addEventListener('click', showPalettes);

function getCurrentPalette(event) {
  const currentPalette = localStorage.getItem('NazCodeland.palette');
  return currentPalette;
}

function setPalette(chosenPalette) {
  root.setAttribute('theme', chosenPalette);
  localStorage.setItem('NazCodeland.palette', chosenPalette);
}

palettes.forEach((palette) =>
  palette.addEventListener('click', (event) => {
    const chosenPalette = event.target.name;
    setPalette(chosenPalette);
  })
);

window.addEventListener('DOMContentLoaded', () => {
  setPalette(getCurrentPalette());
});
