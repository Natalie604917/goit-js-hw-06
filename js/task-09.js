
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

const changeColor = (event => {
 const newColor = getRandomHexColor();
 refs.bodyColor.style.backgroundColor = newColor;
 refs.nameOfColor.textContent = newColor;
});

refs.button.addEventListener("click", changeColor);





