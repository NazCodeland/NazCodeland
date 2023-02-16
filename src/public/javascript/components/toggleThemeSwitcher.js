/* eslint-disable import/extensions */
import { getPrefersClrScheme } from '../utils/index.js';

/* eslint-disable no-unused-expressions */
const themeSwitcherBtn = document.querySelector('.theme-switcher');
const root = document.querySelector(':root');

window.addEventListener('DOMContentLoaded', () => {
  root.setAttribute('color-scheme', getPrefersClrScheme());
});

themeSwitcherBtn.addEventListener('click', () => {
  let theme = getPrefersClrScheme();
  theme === 'dark' ? (theme = 'light') : (theme = 'dark');
  localStorage.setItem('NazCodeland.theme', `${theme}`);
  root.setAttribute('color-scheme', `${theme}`);
});
