// // Map untuk Array
// const myArr = [1, 2, 3, 4];
// const myMap = myArr.map((tambah) => tambah + 3);
// console.log(myArr);
// console.log(myMap);

// const makanan = ['mie ayam', 'sate', 'nasi goreng'];
// const listMakanan = makanan.map((value, index, arr) => {
//   retrun {
//     'nilai dari element' : value
//     'index dari element' : index
//     'daftar makanan' : arr
//   }
// })

// const map = new Map();
// map.set("firstName", "Huda");
// map.set("lastName", "Jorge");
// map.set("occupation", "John Kenedi");
// console.log(map);

// const map = new Map([
//   ["firstName", "Huda"],
//   ["lastName", "Jorge"],
//   ["occupation", "John Kenedi"],
// ]);
// console.log(map);

// const luke = {
//   firstName: "Luke",
//   lastName: "Skywear",
//   occupation: "John Kenedi",
// };

// const map = new Map(Object.entries(luke));
// const obj = Object.fromEntries(map);
// console.log(obj);

// const arr = Array.from(map);
// console.log(arr);

let matriksA = [];
for (let i = 0; i < 1; i++) {
  matriksA.push(
    prompt("Enter a number untuk matriks A")
      .split(",")
      .map((x) => +x)
  );
}
console.log(matriksA);
let matriksB = [];
for (let j = 0; j < 1; j++) {
  matriksA.push(
    prompt("Enter a number untuk matriks B")
      .split(",")
      .map((x) => +x)
  );
}

// let sumMatriks[k] = matriksA[i] + matriksB[j];
// console.log(sumMatriks);

// let matriksB = [];
// for (let j = 0; j < 3; i++) {
//   matriksB.push(prompt("Enter a number untuk matriks B").split(","));
// }

// let sumMatriks = `(${matriksA[0]} + ${matriksB[0]}), (${matriksA[1]} + ${matriksB[1]}), (${matriksA[2]} + ${matriksB[2]}}))`;
// console.log(sumMatriks);
