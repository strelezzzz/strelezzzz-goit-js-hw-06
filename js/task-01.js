const categories = document.querySelector('#categories');

const items = document.querySelectorAll(".item");
console.log("Number of categories: " + items.length );
//end of first part;


items.forEach( item => {
    console.log(`Category: ${ item.querySelector("h2").textContent }`);
    console.log(`Elements: ${ item.querySelectorAll("li").length }`);
});
