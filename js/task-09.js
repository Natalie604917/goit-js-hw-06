
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  bodyColor: document.querySelector('body'),
  button: document.querySelector('button'),
 
};

const changeColor = () => {
  refs.bodyColor.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};



refs.button.addEventListener("click", changeColor);




