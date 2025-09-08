// An array is a special variable, which can hold more than one value
// []
let cars = ["Saab", "Volvo", "BMW"];

let number = [1, 2, 3, 4, 5];

let mixed = ["text", 1, true, null];

let fruits = new Array("Apple", "Banana", 1, 5, 8);

console.log(fruits);
console.log(typeof(fruits));

//iterate an array, using for loop
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

//iterate an array using for...of loop
/*
    for(const value of iterable){
        code block to be executed
        }
*/
for (let fruit of fruits) {
    console.log(fruit);
}