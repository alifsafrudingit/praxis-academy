console.log("Selamat pagi...");

// ruang lingkup global
// function tambah(a, b) {
//   console.log(a + b);
//   function oke() {
//     console.log("halo");
//   }
//   oke();
// }

// es5 var
// es6 let dan const

var firstName = "Mr Al";
console.log(firstName);

document.getElementById("oke").innerHTML = firstName;

function tes() {
  let test = "Anda juga";
  test = "Kamu";
  console.log(test);
}
tes();

let dataDiri = {
  nama: "Alif",
  alamat: "Klaten",
  pendidikan_terakhir: "S1",
};
console.log(dataDiri);
