// const input = document.querySelector('#validation-input');
// console.log(input.dataset);

// input.addEventListener('blur', onInputBlur);
// function onInputBlur(){
//    if (input.dataset === 6){
//        return  validation-input
//    }
// }


const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});