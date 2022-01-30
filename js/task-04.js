const counterValue = 0;
const actions = document.querySelectorAll('#counter button')
// console.log(actions[0]);

const decrement = actions[0];
console.log(decrement)
const increment = actions[1];
console.log(increment)

increment.addEventListener('click', event => {
    console.log(event)
    console.log('Add event')
});
decrement.addEventListener('click',event => {
    console.log(event)
    console.log('Cнимаю слушатель')

});

function onTargetBtnClick (event){
console.log('click...')
}

//  const CounterPlug = function({counterValue = 0, step = 1} ={}){
//     this.value = counterValue;
//     this.step = step;
// };
// CounterPlug.prototype.increment = function(){
//     this.value += this.step;
// }
// CounterPlug.prototype.decrement = function(){
//     this.value -= this.step;
// }
// const counter = new CounterPlug({step:1})
// console.log(counter)