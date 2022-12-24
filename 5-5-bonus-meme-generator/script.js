const textPreview = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeContainer = document.getElementById('meme-image-container');
const miniatures = document.getElementById('images-section');

const memePreview = document.getElementById('meme-image');
const imageInput = document.getElementById('meme-insert');

const redBtn = document.getElementById('fire');
const blueBtn = document.getElementById('water');
const greenBtn = document.getElementById('earth');

textInput.addEventListener('keyup', (event) => {
  textPreview.innerText = event.target.value;
});

imageInput.onchange = () => {
  const [file] = imageInput.files;
  if (file) {
    memePreview.src = URL.createObjectURL(file);
  }
};

redBtn.addEventListener('click', () => {
  const redBorder = '3px dashed red';
  memeContainer.style.border = redBorder;
  localStorage.setItem('memeBorder', redBorder);
});

blueBtn.addEventListener('click', () => {
  const blueBorder = '5px double blue';
  memeContainer.style.border = blueBorder;
  localStorage.setItem('memeBorder', blueBorder);
});

greenBtn.addEventListener('click', () => {
  const greenBorder = '6px groove green';
  memeContainer.style.border = greenBorder;
  localStorage.setItem('memeBorder', greenBorder);
});

miniatures.addEventListener('click', (event) => {
  memePreview.src = event.target.src;
  localStorage.setItem('template', memePreview.src);
});

window.onload = () => {
  const getBorder = localStorage.getItem('memeBorder');
  memeContainer.style.border = getBorder;

  const getTemplate = localStorage.getItem('template');
  memePreview.src = getTemplate;
};
