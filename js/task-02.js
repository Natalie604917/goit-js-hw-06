const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const element =  ingredients.map(option => {
    const itemRef = document.createElement('li')
    itemRef.textContent = option
    itemRef.classList.add('item')
    return itemRef
})
console.log(ingredientsList)
ingredientsList.append(...element)