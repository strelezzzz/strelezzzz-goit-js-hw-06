// Завдання 4

// Лічильник складається зі спану і кнопок,
//  які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//   1)  Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
//    2) Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
//    3) Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
let value = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log(decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log(incrementBtn);

decrementBtn.addEventListener('click',onTargetButtonClickDec);

incrementBtn.addEventListener('click', onTargetButtonClickInc);

function onTargetButtonClickInc(){
    // console.log('Click');
    counterValue += 1;
    value.textContent = counterValue;
}

function onTargetButtonClickDec(){
    // console.log('Click');
    counterValue -= 1;
    value.textContent = counterValue;
}