/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import {
  getCurrentTheme,
  setTheme,
  isClrWhiteOrBlack,
  prefersContrastLess,
  prefersContrastMore,
} from '../utils/index.js';

const root = document.querySelector(':root');

const menuBtn = document.querySelector('.hamburger');
const palettesContainer = document.querySelector('.palettes');
const palettes = document.querySelectorAll('.palette');
const mainPalette = document.querySelector('.mainPalette');

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

let previousTheme = (() => getCurrentTheme())();
mainPalette.addEventListener('click', () => {
  previousTheme = (() => getCurrentTheme())();
});

palettes.forEach((palette) =>
  palette.addEventListener('click', (event) => {
    const chosenPalette = event.target.name;

    chosenPalette === 'mainPalette'
      ? setTheme(previousTheme)
      : setTheme(getCurrentTheme());

    setPalette(chosenPalette);

    const rootStyles = getComputedStyle(root);
    const paletteBgClr = rootStyles.getPropertyValue('--main-background');
    const paletteBgClrRGB = paletteBgClr.split(',');
    const lightness = isClrWhiteOrBlack(paletteBgClrRGB);

    lightness > 186
      ? root.setAttribute('color-scheme', 'light')
      : root.setAttribute('color-scheme', 'dark');
  })
);

window.addEventListener('DOMContentLoaded', () => {
  if (prefersContrastLess()) {
    setPalette('desert');
    root.setAttribute('color-scheme', 'light');
  } else if (prefersContrastMore()) setPalette('night-sky');
  else setPalette(getCurrentPalette());
});
