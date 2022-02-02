// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn); 

// const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn); 


// let counterValue = 0;
// const increment = () => {
// counterValue += 1;
// document.querySelector('#value').textContent = counterValue
// }

// const decrement = () =>{
// counterValue -= 1;
// document.querySelector('#value').textContent = counterValue

// }

// incrementBtn.addEventListener("click", increment )
// decrementBtn.addEventListener("click", decrement )




const wrap_button = {
    sub: document.querySelector('[data-action='increment']'),
    add: document.querySelector('[data-action='decrement']'),
    span: document.querySelector('#value'),
    wrapper: document.querySelector('#counter '),
  };
  let counterValue = 0;
  const increment = () => {
    counterValue += 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  
  const decrement = () => {
    counterValue -= 1;
  
    document.getElementById('value').textContent = counterValue;
  };
  wrap_button.sub.addEventListener('click', increment);
  wrap_button.add.addEventListener('click', decrement);