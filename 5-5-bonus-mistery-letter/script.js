const letterP = document.getElementById('carta-gerada');
const createLetterBtn = document.getElementById('criar-carta');
const wordsCount = document.getElementById('carta-contador');

const removeChildren = () => {
  if (localStorage.getItem('carta')) {
    letterP.innerHTML = '';
  }
};

const lombra = (inputTxt) => {
  const splited = inputTxt.split('');
  let teste = 0;
  for (let i = 0; i < splited.length; i += 1) {
    if (splited[i] !== ' ') {
      teste += 1;
    }
  }
  if (teste === 0) {
    letterP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
  return letterP.innerText;
};

const inputConditions = (inputTxt) => {
  if (!inputTxt.length) {
    letterP.innerText = 'Por favor, digite o conteúdo da carta.';
  }
};

const wordStyle = (i) => {
  const span = document.getElementsByTagName('span');
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const randomizeStyle = styleGroup[Math.floor(Math.random() * 3)];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const randomizeSize = sizeGroup[Math.floor(Math.random() * 3)];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const randomizeRotation = rotationGroup[Math.floor(Math.random() * 2)];
  const inclinationGroup = ['skewleft', 'skewright'];
  const randomizeInclination = inclinationGroup[Math.floor(Math.random() * 2)];
  span[i].classList.add(randomizeStyle, randomizeSize, randomizeRotation, randomizeInclination);
};

const changeOneSpan = () => {
  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i += 1) {
    span[i].addEventListener('click', () => {
      span[i].className = '';
      wordStyle(i);
      console.log(span[i]);
      localStorage.setItem('carta', letterP.innerHTML);
    });
  }
};

createLetterBtn.addEventListener('click', () => {
  removeChildren();
  const inputTxt = document.getElementById('carta-texto').value;
  inputConditions(inputTxt);
  lombra(inputTxt);
  const splited = inputTxt.split(' ');
  for (let i = 0; i < splited.length; i += 1) {
    const createSpan = document.createElement('span');
    letterP.appendChild(createSpan);
    createSpan.innerText = '';
    createSpan.innerText = splited[i];
    wordStyle(i);
    wordsCount.innerText = splited.length;
    changeOneSpan();
  }
  localStorage.setItem('carta', letterP.innerHTML);
});

window.onload = () => {
  const carta = localStorage.getItem('carta');
  letterP.innerHTML = carta;
  changeOneSpan();
};
