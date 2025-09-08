// An array is a special variable, which can hold more than one value
// []
let cars = ["Saab", "Volvo", "BMW"];

let numbers = [1, 2, 3, 4, 5];

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

// iterate an array using forEach() method
/*
    array.forEach(function(currentValue, index, arr), thisValue)
*/
fruits.forEach(fruit => console.log(fruit));
numbers.forEach(number => console.log(number));

//Array methods
// push() - add an element to the end of an array
fruits.push("Mango");
console.log(fruits);

//pop() - remove the last element of an array
fruits.pop();
console.log(fruits);

//unshift() - add an element to the beginning of an array
fruits.unshift("Strawberry");
console.log(fruits);

//shift() - remove the first element of an array
fruits.shift();
console.log(fruits);

//indexOf() - search an element and return its index
let index = fruits.indexOf("Banana");
console.log(index);

//includes() - search an element and return true if found, otherwise false
let isFound = fruits.includes("Banana");
console.log(isFound);

// map, filter, reduce
// map is used to transform each element of an array and return a new array
let square = numbers.map(number => number * number);
console.log(square);

// filter is used to filter elements of an array based on a condition and return a new array
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//reduce is used to reduce the array to a single value based on a condition
// syntax: array.reduce((accumulator, value) => formula, initialValue)
// accumulator is the accumulated value
// value is the current value
// initialValue is the initial value of the accumulator
let sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
console.log(sumOfNumbers);