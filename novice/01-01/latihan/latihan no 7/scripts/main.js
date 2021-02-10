// /* Hello Word */
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// /* Variable */
// let myVariable = "Bob";
// myVariable = "Steve";
// console.log(myVariable);

// /* Comment */
// /* Everything in between is a comment */
// // This is a comment

// /* Operator */
// const a = 4;
// const b = 6;
// // Addition
// console.log(a + b);
// // Subtraction
// console.log(b - a);
// // Multiplication
// console.log(a * b);
// // Division
// console.log(a / b);

// // Assigment
// let nama = "Bob";

// // Equality
// let angka = 3;
// console.log(angka === 4);

// // Not
// let c = 3;
// console.log(!(c === 3));

// // Does Not Equal
// let d = 5;
// console.log(d !== 5);

// // Conditional
// let makanan = "Sate";
// if (makanan === "Sate") {
//   alert("Yay, I love sate");
// } else {
//   alert("No, I dislike it");
// }

// // Functions
// let tampil = document.querySelector("h2");
// alert("Yes tampil");

// function multiply(a, b) {
//   let result = a * b;
//   return result;
// }

// // Events
// document.querySelector("button").onclick = function () {
//   alert("Ouch! anda telah mengklik");
// };

// Adding an image changer
let myImage = document.querySelector("img");  

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "../images/macbookpro.jpg") {
    myImage.setAttribute("src", "../images/ipadpro.jpg");
  } else {
    myImage.setAttribute("src", "../images/macbookpro.jpg");
  }
};

// Change name
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setName() {
  let name = prompt("Please insert name");
  if (!name) {
    setName();
  } else {
    localStorage.setItem("name", name);
    myHeading.textContent = `Setup is cool with ${name}`;
  }
}

if (!localStorage.getItem("name")) {
  setName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Setup is cool with " + storedName;
}

myButton.onclick = function () {
  setName();
};
