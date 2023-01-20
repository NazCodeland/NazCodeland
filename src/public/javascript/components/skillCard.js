/* eslint-disable import/extensions */
import wait from '../utils/wait.js';

const monitor = document.querySelector('.monitor');
const monitorBody = document.querySelector('.monitor-body');
const monitorLeg = document.querySelector('.monitor-leg');

const languageIcon = document.querySelector('.language-icon');

const languageIcons = [
  'html icon.svg',
  'css icon.svg',
  'javascript icon.svg',
  'python icon.svg',
  'svelte icon.svg',
];

async function rotateIcons(icons) {
  for (let icon = 0; languageIcons.length > 0; icon += 1) {
    if (icon === languageIcons.length) {
      icon = 0;
    }

    languageIcon.href.baseVal = `/images/${languageIcons[icon]}`;

    switch (languageIcons[icon]) {
      case 'html icon.svg':
        monitor.classList.remove('svelte-svg-monitor-fill');
        monitorBody.classList.remove('svelte-svg-body-fill');
        monitorLeg.classList.remove('svelte-svg-leg-fill');
        monitor.classList.add('html-svg-monitor-fill');
        break;

      case 'css icon.svg':
        monitor.classList.remove('html-svg-monitor-fill');
        monitor.classList.add('css-svg-monitor-fill');
        break;

      case 'javascript icon.svg':
        monitor.classList.remove('css-svg-monitor-fill');
        monitor.classList.add('javascript-svg-monitor-fill');
        break;

      case 'python icon.svg':
        monitor.classList.remove('javascript-svg-monitor-fill');
        monitor.classList.add('python-svg-monitor-fill');
        monitorLeg.classList.add('python-svg-leg-fill');
        break;

      case 'svelte icon.svg':
        monitor.classList.remove('python-svg-monitor-fill');
        monitorLeg.classList.remove('python-svg-leg-fill');
        monitor.classList.add('svelte-svg-monitor-fill');
        monitorBody.classList.add('svelte-svg-body-fill');
        monitorLeg.classList.add('svelte-svg-leg-fill');
        break;

      default:
        break;
    }

    // eslint-disable-next-line no-await-in-loop
    await wait(2000);
  }
}

if (languageIcon) rotateIcons(languageIcons);
