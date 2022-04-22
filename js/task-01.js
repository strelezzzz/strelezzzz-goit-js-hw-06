const categories = document.querySelector('#categories');
// console.log(categories); 
const items = document.querySelectorAll('.item');
console.log("Number of categories:" + items.length);
const h2 = document.querySelectorAll('h2');
// console.log(h2);
h2.forEach(item => {
    console.log(item.firstChild);
    console.log(item.lastChild);
});

// const list = items.children ;
// console.log(list);
// console.dir(items);