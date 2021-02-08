/* Hello Word */
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/* Variable */
let myVariable = "Bob";
myVariable = "Steve";
console.log(myVariable);

/* Comment */
/* Everything in between is a comment */
// This is a comment

/* Operator */
const a = 4;
const b = 6;
// Addition
console.log(a + b);
// Subtraction
console.log(b - a);
// Multiplication
console.log(a * b);
// Division
console.log(a / b);

// Assigment
let nama = "Bob";

// Equality
let angka = 3;
console.log(angka === 4);

// Not
let c = 3;
console.log(!(c === 3));

// Does Not Equal
let d = 5;
console.log(d !== 5);

// Conditional
let makanan = "Sate";
if (makanan === "Sate") {
  alert("Yay, I love sate");
} else {
  alert("No, I dislike it");
}

// Functions
let tampil = document.querySelector("h2");
alert("Yes tampil");

function multiply(a, b) {
  let result = a * b;
  return result;
}

// Events
document.querySelector("button").onclick = function () {
  alert("Ouch! anda telah mengklik");
};
