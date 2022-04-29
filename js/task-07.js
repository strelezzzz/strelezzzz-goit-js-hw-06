// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//     перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const control = document.querySelector("#font-size-control");

const text = document.getElementById("text");
// console.log(text);

control.addEventListener("input",(event) => {
    text.style.fontSize = event.currentTarget.value +'px';
    console.log(event.currentTarget.value +'px');
})