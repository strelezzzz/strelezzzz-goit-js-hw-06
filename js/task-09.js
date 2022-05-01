function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//  по кліку на button.change - color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColors() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const changeColorBtn = document.querySelector(".change-color");
console.log(changeColorBtn);
const colorName = document.querySelector(".color");
const widget = document.querySelector(".widget");

changeColorBtn.addEventListener("click", handleClick);

function handleClick(event) {
  
  widget.style.backgroundColor = getRandomHexColor();
  colorName.textContent = widget.style.backgroundColor;
  console.log(event);
  console.log(widget.style.backgroundColor);
}