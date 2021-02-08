/* Program Structure */
// Expressions and Statements

1;
!false;

// Binding
let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1,
  two = 2;
console.log(one + two);

var name = " Ayda";
const greeting = "Hello";
console.log(greeting + name);

// Function
// prompt("Enter your name");

// The Console.log function
let x = 30;
console.log("the value of x is", x);

// Return values
console.log(Math.max(2, 4));
console.log(Math.min(2, 4) + 100);

// Control flow
// let theNumber = Number(prompt("Pick a number"));
// console.log("Your number is the square root of " + theNumber * theNumber);

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
