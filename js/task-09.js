
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  bodyColor: document.querySelector('body'),
  button: document.querySelector('button'),
 
};

const changeColor = (event) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  refs.bodyColor.style.backgroundColor = randomColor;
};


refs.button.addEventListener("click", changeColor);


// const onChangeBtnColor = (event) => {
//   const newColor = `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
//   body.style.backgroundColor = newColor;
//   spanText.textContent = newColor;
// };




