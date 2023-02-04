const navLinks = document.querySelectorAll('.menu li');

function handleClick(event) {
  // event.preventDefault();
}

navLinks.forEach((link) => link.addEventListener('click', handleClick));
