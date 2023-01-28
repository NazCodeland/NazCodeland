/* eslint-disable import/extensions */
import wait from '../utils/wait.js';
import removeUnusedClasses from '../utils/removeClasses.js';

const monitor = document.querySelector('.monitor');
const monitorBody = document.querySelector('.monitor-body');
const monitorLeg = document.querySelector('.monitor-leg');

const languageIcon = document.querySelector('.language-icon');

const languageIcons = [
  'vsc.svg',
  'html.svg',
  'css.svg',
  'tailwind.svg',
  'javascript.svg',
  'git.svg',
  'github.svg',
  'nodejs.svg',
  'expressjs.svg',
  'python.svg',
  'svelte.svg',
];

async function rotateIcons(icons) {
  for (let icon = 0; languageIcons.length > 0; icon += 1) {
    if (icon === languageIcons.length) {
      icon = 0;
    }

    languageIcon.href.baseVal = `/images/icons/${languageIcons[icon]}`;

    removeUnusedClasses(monitor, monitor.classList.value);
    removeUnusedClasses(monitorBody, monitorBody.classList.value);
    removeUnusedClasses(monitorLeg, monitorLeg.classList.value);

    switch (languageIcons[icon]) {
      case 'vsc.svg':
        monitor.classList.add('vsc-svg-all-fill');
        monitorBody.classList.add('vsc-svg-all-fill');
        monitorLeg.classList.add('vsc-svg-all-fill');
        break;

      case 'html.svg':
        monitor.classList.add('html-svg-monitor-fill');
        break;

      case 'css.svg':
        monitor.classList.add('css-svg-monitor-fill');
        break;

      case 'tailwind.svg':
        monitor.classList.add('tailwind-svg-monitor-fill');
        break;

      case 'javascript.svg':
        monitor.classList.add('javascript-svg-monitor-fill');
        break;

      case 'python.svg':
        monitorBody.classList.add('python-svg-body-fill');
        monitorLeg.classList.add('python-svg-leg-fill');
        break;

      case 'svelte.svg':
        monitor.classList.add('svelte-svg-all-fill');
        monitorBody.classList.add('svelte-svg-all-fill');
        monitorLeg.classList.add('svelte-svg-all-fill');
        break;

      case 'github.svg':
        monitor.classList.add('github-svg-monitor-fill');
        break;

      default:
        break;
    }

    // eslint-disable-next-line no-await-in-loop
    await wait(2000);
  }
}

if (languageIcon) rotateIcons(languageIcons);
