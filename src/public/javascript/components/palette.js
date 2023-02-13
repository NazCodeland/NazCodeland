const menuBtn = document.querySelector('.hamburger');
const palettes = document.querySelector('.palettes');

function showPalettes(event) {
  palettes.classList.toggle('show-palettes');
}

menuBtn.addEventListener('click', showPalettes);
