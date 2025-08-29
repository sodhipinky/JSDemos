// Function
function greet(name) {
    return `Hello, ${name}!`; // Template literal
}

console.log(greet("Alice")); // Example usage

console.log(add(5, 3)); // Example usage
// Function Expression
const add = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// hoisting: means you can call the function before its declaration
// Functions are hoisted, meaning you can call them before their declaration in the code.
// Function expressions are not hoisted, so you must define them before calling.
// Function expressions are Immediately Invoked (IIFE), meaning they can be executed right after their definition.