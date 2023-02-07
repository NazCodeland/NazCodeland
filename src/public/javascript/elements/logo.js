const logo = document.querySelector('.logo');

const logoText = logo.textContent;

function spanWord(word) {
  const wordArray = [...word];
  return wordArray.map((letter) =>
    letter === 'N'
      ? `<a href="/" class="first-letter" aria-label="NazCodeland">${letter}</a>`
      : `<span>${letter}</span>`
  );
}

let spannedWord = spanWord(logoText);
// prettier-ignore
spannedWord = 
[ `${spannedWord.slice(0, 1)}<span aria-hidden="true">${spannedWord.slice(1).join('')}</span>`];
logo.innerHTML = spannedWord;
