
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  bodyColor: document.querySelector('body'),
  button: document.querySelector('button'),
  nameOfColor: document.querySelector('.color')
 
};

function changeColor() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.nameOfColor.textContent = getRandomHexColor();
}

refs.button.addEventListener("click", changeColor);



 
 





