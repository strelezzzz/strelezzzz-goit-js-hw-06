const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

// elem.classList.add(cls) - додає клас cls до списку класів елемента.
// document.createElement(tagName);
// const heading = document.createElement("h1");
// heading.textContent = "This is a heading";


const items = ingredients.map( name => {
  const ingredient = document.createElement("li");
  ingredient.classList.add('item');
  ingredient.textContent = name;
  // console.log(ingredient);
  return ingredient;
})

// console.log(items);
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...items);