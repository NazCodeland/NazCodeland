/* eslint-disable import/extensions */
import './utils/spanWord.js';

const menuLinks = document.querySelectorAll('.menu li');

function handleClick(event) {
  // event.preventDefault();
}

menuLinks.forEach((link) => link.addEventListener('click', handleClick));
