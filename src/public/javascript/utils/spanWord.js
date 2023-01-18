const logo = document.querySelector('.jump');

const logoText = logo.textContent;

function spanWord(word) {
  const wordArray = [...word];
  return wordArray.map((letter) =>
    letter === 'N'
      ? `<span class="first-letter">${letter}</span>`
      : `<span>${letter}</span>`
  );
}

const spannedWord = spanWord(logoText);
logo.innerHTML = spannedWord.join('');
