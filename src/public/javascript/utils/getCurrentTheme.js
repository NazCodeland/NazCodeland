/* eslint-disable no-unused-expressions */

export default function getCurrentTheme() {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  localStorage.getItem('NazCodeland.theme')
    ? (theme = localStorage.getItem('NazCodeland.theme'))
    : localStorage.setItem('NazCodeland.theme', theme);

  return theme;
}
