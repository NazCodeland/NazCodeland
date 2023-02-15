/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
import { prefersColorSchemeDark } from './prefersColorScheme.js';

export default function getCurrentTheme() {
  let theme = prefersColorSchemeDark() ? 'dark' : 'light';

  localStorage.getItem('NazCodeland.theme')
    ? (theme = localStorage.getItem('NazCodeland.theme'))
    : localStorage.setItem('NazCodeland.theme', theme);

  return theme;
}
