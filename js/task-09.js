function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyColor: document.querySelector('body'),
  button: document.querySelector('button'),
 
};
function changeColor(colorValue) {
  document.refs.bodyColor.style.background = document.getElementById(colorValue).dataset.color;
}