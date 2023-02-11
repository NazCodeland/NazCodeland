const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__links a');

function openMenu(event) {
  menu.classList.toggle('open');
}

menuBtn.addEventListener('click', openMenu);
menuBtn.addEventListener('keypress', openMenu);

function handleClick(event) {
  // event.preventDefault();
}

menuLinks.forEach((link) => link.addEventListener('click', handleClick));
