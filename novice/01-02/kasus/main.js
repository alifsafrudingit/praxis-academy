// Soal 1
let soal1 = document.getElementById("soal1");

soal1.onclick = function () {
  let num1, num2;
  num1 = window.prompt("Input the first number", "0");
  num2 = window.prompt("Input the second number", "0");

  if (parseInt(num1) > parseInt(num2)) {
    alert(`The larger of ${num1} and ${num2} is ${num1}.`);
  } else if (parseInt(num2) > parseInt(num1)) {
    alert(`The larger of ${num1} and ${num2} is ${num2}`);
  } else {
    alert(`The values ${num1} and ${num2} are equal.`);
  }
};

// Soal 2
let soal2 = document.getElementById("soal2");

soal2.onclick = function () {
  let x, y, z;
  x = window.prompt("Input angka boleh + atau -");
  y = window.prompt("Input angka boleh + atau -");
  z = window.prompt("Input angka boleh + atau -");

  if (x > 0 && y > 0 && z > 0) {
    alert("Tanda + ke 1");
  } else if (x < 0 && y < 0 && z < 0) {
    alert("Tanda + ke 2");
  } else if (x > 0 && y < 0 && z < 0) {
    alert("Tanda + ke 3");
  } else if (x < 0 && y > 0 && z < 0) {
    alert("Tanda + ke 4");
  } else {
    alert("Tanda -");
  }
};

// Soal 3
let soal3 = document.getElementById("soal3");

soal3.onclick = function () {
  let a, b, c;
  a = window.prompt("Input angka pertama");
  b = window.prompt("Input angka kedua");
  c = window.prompt("Input angka ketiga");

  if (a > b && a > c) {
    if (b > c) {
      alert(`${a}, ${b}, ${c}`);
    } else {
      alert(`${a}, ${c}, ${b}`);
    }
  } else if (b > a && b > c) {
    if (a > c) {
      alert(`${b}, ${a}, ${c}`);
    } else {
      alert(`${b}, ${c}, ${a}`);
    }
  } else if (c > a && c > b) {
    if (a > b) {
      alert(`${c}, ${a}, ${b}`);
    } else {
      alert(`${c}, ${b}, ${a}`);
    }
  }
};

// Soal 4
let soal4 = document.getElementById("soal4");

soal4.onclick = function () {
  let d, e, f, g, h;
  d = window.prompt("Input angka pertama");
  e = window.prompt("Input angka kedua");
  f = window.prompt("Input angka ketiga");
  g = window.prompt("Input angka keempat");
  h = window.prompt("input angka kelima");

  if (d > e && d > f && d > g && d > h) {
    alert(`Angka terbesar adalah ${d}`);
  } else if (e > d && e > f && e > g && e > h) {
    alert(`Agnka terbesar adalah ${e}`);
  } else if (f > d && f > e && f > g && f > h) {
    alert(`Angka terbesar adalah ${f}`);
  } else if (g > d && g > e && g > f && g > h) {
    alert(`Angka terbesar adalah ${g}`);
  } else {
    alert(`Angka terbesar adalah ${h}`);
  }
};

// Soal 5
let soal5 = document.getElementById("soal5");

soal5.onclick = function () {
  alert("Hasil di console log");
  for (let i = 0; i <= 15; i++) {
    if (i === 0) {
      console.log(`${i} adalah genap`);
    } else if (i % 2 === 0) {
      console.log(`${i} adalah genap`);
    } else {
      console.log(`${i} adalah ganjil`);
    }
  }
};

// Soal 6
let soal6 = document.getElementById("soal6");

soal6.onclick = function () {
  const nilaiDavid = window.parseInt(prompt("Masukkan nilai David"));
  const nilaiVinoth = window.parseInt(prompt("Masukkan nilai Vinoth"));
  const nilaiDivya = window.parseInt(prompt("Masukkan nilai Divya"));
  const nilaiIshitha = window.parseInt(prompt("Masukkan nilai Ishitha"));
  const nilaiThomas = window.parseInt(prompt("Masukkan nilai Thomas"));

  let students = [
    nilaiDavid,
    nilaiVinoth,
    nilaiDivya,
    nilaiIshitha,
    nilaiThomas,
  ];

  let avgMarks = 0;
  let avg = null;

  for (let i = 0; i < students.length; i++) {
    avgMarks += students[i];
    avg = avgMarks / students.length;
  }

  // console.log("Average grade: " + avgMarks / students.length);

  if (avg < 60) {
    alert(`Average: ${avg}, Grade E`);
  } else if (avg < 70) {
    alert(`Average: ${avg}, Grade D`);
  } else if (avg < 80) {
    alert(`Average: ${avg}, Grade C`);
  } else if (avg < 90) {
    alert(`Average: ${avg}, Grade B`);
  } else {
    alert(`Average: ${avg}, Grade A`);
  }
};

// Soal 7
let soal7 = document.getElementById("soal7");

soal7.onclick = function () {
  alert("Hasil di console");
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`${i} is Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i} is Buzz`);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} is FizzBuzz`);
    } else {
      console.log(`${i}`);
    }
  }
};

// Soal 8

// Soal 9
// let soal9 = document.getElementById("soal9");
// soal9.onclick = function () {
//   for (let i = 1; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       for (let k = 0; k < 10; k++) {
//         let pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
//         let plus = i * 100 + i * 10 + i;
//         if (pow == plus) {
//           alert("POW");
//         }
//       }
//     }
//   }
// };

// Soal 9
let soal10 = document.getElementById("soal10");
soal10.onclick = function () {
  const jmlBaris = window.parseInt(prompt("Masukkan jumlah bintang"));
  let space;

  for (let i = 0; i <= jmlBaris; i++) {
    for (let j = 0; j < i; j++) {
      space += "*";
    }
    console.log(space);
    space = " ";
  }
};
