const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

function openMenu(event) {
  menu.classList.toggle('open');
}

menuBtn.addEventListener('click', openMenu);
menuBtn.addEventListener('keypress', openMenu);
