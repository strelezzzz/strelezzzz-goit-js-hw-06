// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість смиволів повинна бути в інпуті, зазначається
//      в його атрибуті data - length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.

const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
    if (textInput.value.length == textInput.dataset.length) { 
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        
    }
    else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
        
    };
});