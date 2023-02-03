const menuBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

function handleMenuClick(event) {
  menu.classList.toggle('open');
}

menuBtn.addEventListener('click', handleMenuClick);
