
const quantityOfCategories = document.querySelectorAll('.item');
const showElement = element => `Nubmer of categories: ${element.length}`;
console.log(showElement(quantityOfCategories));

const showCategories = element => element.forEach(el => console.log(`Category : ${el.querySelector('h2').textContent}
 Elements:${el.querySelectorAll('li').length}`));
(showCategories(quantityOfCategories));
