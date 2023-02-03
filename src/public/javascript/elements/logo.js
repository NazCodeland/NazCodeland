const logo = document.querySelector('.jump');

const logoText = logo.textContent;

function spanWord(word) {
  const wordArray = [...word];
  return wordArray.map((letter) =>
    letter === 'N'
      ? `<a href="/" class="first-letter">${letter}</a>`
      : `<span tabindex="0">${letter}</span>`
  );
}

const spannedWord = spanWord(logoText);
logo.innerHTML = spannedWord.join('');
