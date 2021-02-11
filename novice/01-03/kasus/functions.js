// Kasus 1 The Fortune Teller
const jobTitle = document.getElementById("jobTitle").value;
const geoLocation = document.getElementById("geoLocation").value;
const partnerName = document.getElementById("partnerName").value;
const numChild = document.getElementById("numbChild").value;

const tellFortune = (jobTitle, geoLocation, partnerName, numChild) => {
  console.log(
    `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChild} kids`
  );
};

// Kasus 2 The Puppy Age Calculator
const calculateDogAge = (peopleAge) => {
  let dogAge = peopleAge * 7;
  console.log(`You will need ${dogAge} years old in dog years!`);
};

calculateDogAge(1);
calculateDogAge(2.5);
calculateDogAge(3);

// Kasus 3 The Lifetime Supply Calculator
const calculateSuply = (age, amountPerDay) => {
  let maxAge = 100;
  let needCons = amountPerDay * 365 * (maxAge - age);
  console.log(
    `You will need ${needCons} to last you until the ripe old age of ${maxAge}`
  );
};

calculateSuply(60, 5);
calculateSuply(27, 6);
calculateSuply(35, 5);

// Kasus 4 The Geometrizer
const calcCircumference = (r) => {
  let phi = 3.14;
  let circum = phi * 2 * r;
  console.log(`The circumference is ${circum} cm`);
};

const calcArea = (r) => {
  let phi = 3.14;
  let area = phi * r * r;
  console.log(`The area is ${area} cm`);
};

calcCircumference(4);
calcArea(4);

// Or can use this script
const calcGeometry = (r) => {
  let circumference = Math.PI * 2 * r;
  console.log(`The circumference is ${circumference}`);
  let area = Math.PI * r * r;
  console.log(`The area is ${area}`);
};

calcGeometry(4);

// Kasus 5 Temperatur Converter
const celsiusToFahrenheit = (celcius) => {
  let toF = (9 / 5) * celcius + 32;
  console.log(`${celcius} ?C is ${toF} ?F`);
};
const fahrenheitToCelsius = (fahrenheit) => {
  let toC = ((fahrenheit - 32) * 5) / 9;
  console.log(`${fahrenheit} ?F is ${toC} ?C`);
};

celsiusToFahrenheit(100);
fahrenheitToCelsius(32);
