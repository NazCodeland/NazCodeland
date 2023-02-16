/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import {
  getPreferredClrScheme,
  isClrWhiteOrBlack,
  prefersContrastLess,
  prefersContrastMore,
  isForcedColorsActive,
} from '../utils/index.js';

const themeSwitcherBtn = document.querySelector('.theme-switcher');
const root = document.querySelector(':root');

const menuBtn = document.querySelector('.hamburger');
const palettesContainer = document.querySelector('.palettes');
const palettes = document.querySelectorAll('.palette');

// toggle-theme-switcher
themeSwitcherBtn.addEventListener('click', () => {
  let theme;
  localStorage.getItem('NazCodeland.theme')
    ? (theme = localStorage.getItem('NazCodeland.theme'))
    : (theme = getPreferredClrScheme());

  theme === 'dark' ? (theme = 'light') : (theme = 'dark');
  localStorage.setItem('NazCodeland.theme', `${theme}`);
  root.setAttribute('color-scheme', `${theme}`);

  // because the toggle theme switcher changes the site theme from light to dark
  // this line of code is needed to keep localStorage preferredContrast item in sync with the site theme.
  // Otherwise, if a user changes the site theme using the themeSwitcher toggle button and then clicks
  // on the 'mainPalette' theme it will change the site's theme from the one selected via the themeSwitcher toggle btn.
  localStorage.setItem('NazCodeland.preferredContrast', theme);
});

// --------------------------------------------------------------

// palette-theme-switcher
function showPalettes(event) {
  palettesContainer.classList.toggle('show-palettes');
}
menuBtn.addEventListener('click', showPalettes);

function getCurrentPalette(event) {
  const currentPalette = localStorage.getItem('NazCodeland.palette');
  return currentPalette;
}

function setPaletteInLocalStorage(chosenPalette) {
  root.setAttribute('theme', chosenPalette);
  localStorage.setItem('NazCodeland.palette', chosenPalette);
}

function getBodyBgClr() {
  const rootStyles = getComputedStyle(root);
  const bgClr = rootStyles.getPropertyValue('--main-background');
  const bgClrRGB = bgClr.split(',');
  const bgLightness = isClrWhiteOrBlack(bgClrRGB);

  // when the page is loaded the first time, for an unknown reason to me,
  // '--main-background' isn't declared, and so 'bgLightness' resolves to 'NaN' in that case,
  // the users OS theme preference is used
  if (Number.isNaN(bgLightness)) return getPreferredClrScheme();
  return bgLightness > 186 ? 'light' : 'dark';
}

palettes.forEach((palette) =>
  palette.addEventListener('click', (event) => {
    const chosenPalette = event.target.name;

    // when a user clicks any other theme but the mainPalette, before the color palette for the new theme is applied,
    // the background color (light/dark based on their OS preference), is stored in a localStorage item
    // named 'NazCodeland.preferredContrast'. This localStorage value is used to remember the theme (background color)
    // to revert to when the user clicks the 'mainPalette' button - the logic for that at the bottom of code
    //  in 'window.addEventListener()'

    if (chosenPalette !== 'mainPalette') {
      let bgClrBeforePaletteIsApplied;
      localStorage.getItem('NazCodeland.preferredContrast')
        ? (bgClrBeforePaletteIsApplied = localStorage.getItem(
            'NazCodeland.preferredContrast'
          ))
        : (bgClrBeforePaletteIsApplied = getBodyBgClr());

      // I had this before but I can't recall what I thought it fixed. Works without it, but will leave it
      // here incase it breaks
      // bgClrBeforePaletteIsApplied
      //   ? localStorage.setItem(
      //       'NazCodeland.preferredContrast',
      //       bgClrBeforePaletteIsApplied
      //     )
      //   : '';

      // this does the same thing as above commented code
      localStorage.setItem(
        'NazCodeland.preferredContrast',
        bgClrBeforePaletteIsApplied
      );
    }

    setPaletteInLocalStorage(chosenPalette);

    const bgClrAfterPaletteIsApplied = getBodyBgClr();

    if (bgClrAfterPaletteIsApplied === 'light') {
      root.setAttribute('color-scheme', 'light');
      localStorage.setItem('NazCodeland.theme', 'light');
    } else {
      root.setAttribute('color-scheme', 'dark');
      localStorage.setItem('NazCodeland.theme', 'dark');
    }

    if (chosenPalette === 'mainPalette') {
      let theme;
      // when a user visits the site, their  OS theme preference is used but,
      // once the user selects other themes to try out and then, clicks back to the mainPalette button
      // which is the main site theme, the localStorage item 'preferredContrast' is used to restore
      // the background color of the site to original site theme. Which, was based off of their OS Theme.
      localStorage.getItem('NazCodeland.preferredContrast')
        ? (theme = localStorage.getItem('NazCodeland.preferredContrast'))
        : (theme = localStorage.getItem('NazCodeland.theme'));

      root.setAttribute('color-scheme', theme);
      localStorage.setItem('NazCodeland.theme', theme);
    }

    //
  })
);

window.addEventListener('DOMContentLoaded', () => {
  //
  // if a user prefers contrast on windows, it enables 'forced-colors: active'
  // therefore, the below conditional statements will only run,
  // when the request is being made from Mac OS "Increase Contrast" option.
  //
  if (!isForcedColorsActive() && prefersContrastLess()) {
    setPaletteInLocalStorage('desert');
    root.setAttribute('color-scheme', 'light');
  }
  //
  else if (!isForcedColorsActive() && prefersContrastMore()) {
    setPaletteInLocalStorage('night-sky');
    root.setAttribute('color-scheme', 'dark');
  }
  //
  else setPaletteInLocalStorage(getCurrentPalette());

  // ------------------------------------------------------------
  // applied to windows and mac users

  // the color-scheme attribute is derived from the media query (prefers-color-scheme),
  // this media becomes problematic when a user visits the site in say, dark mode, and then, uses
  // the themeSwitcher toggle btn to change the site them to white. If they now refresh the website,
  // white theme doesn't persist because when the page is refreshed it re-triggers the media query. So,
  // this overrides that media query if the user uses the themeSwitcher toggle btn.
  const theme = localStorage.getItem('NazCodeland.theme')
    ? localStorage.getItem('NazCodeland.theme')
    : getPreferredClrScheme();

  root.setAttribute('color-scheme', theme);
});
