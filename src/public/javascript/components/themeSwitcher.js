/* eslint-disable import/extensions */
import { getCurrentTheme, setTheme } from '../utils/index.js';

/* eslint-disable no-unused-expressions */
const themeSwitcherBtn = document.querySelector('.theme-switcher');

// "DOMContentLoaded" only listens to when the contents have been DOMContentLoaded
// therefore, we need the css media queries to constantly keep checking
// if the system changes color. Unless, we constantly keep running getCurrentTheme in a while loop maybe
window.addEventListener('DOMContentLoaded', () => {
  setTheme(getCurrentTheme());
});

themeSwitcherBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  theme === 'dark' ? (theme = 'light') : (theme = 'dark');
  localStorage.setItem('NazCodeland.theme', `${theme}`);
  setTheme(theme);
});
