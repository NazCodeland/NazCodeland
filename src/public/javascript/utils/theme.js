/* eslint-disable no-unused-expressions */
const themeBtn = document.querySelector('.theme');
const root = document.querySelector(':root');

function getCurrentTheme() {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  localStorage.getItem('NazCodeland.theme')
    ? (theme = localStorage.getItem('NazCodeland.theme'))
    : null;

  return theme;
}

function setTheme(theme) {
  switch (theme) {
    case 'dark':
      // themeBtn.innerHTML = ``;
      break;

    case 'light':
      // themeBtn.innerHTML = ``;
      break;

    default:
      break;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

// "DOMContentLoaded" only listens to when the contents have been DOMContentLoaded
// therefore, we need the css media queries to constantly keep checking
// if the system changes color. Unless, we constantly keep running getCurrentTheme in a while loop maybe
window.addEventListener('DOMContentLoaded', () => {
  setTheme(getCurrentTheme());
});

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  theme === 'dark' ? (theme = 'light') : (theme = 'dark');
  localStorage.setItem('NazCodeland.theme', `${theme}`);
  setTheme(theme);
});
