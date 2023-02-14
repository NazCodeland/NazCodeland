const root = document.querySelector(':root');

export default function setTheme(theme) {
  root.setAttribute('color-scheme', `${theme}`);
}
