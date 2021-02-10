// Penulisan function type lama
function dewasa(age) {
  if (typeof age == "number") {
    if (age >= 20) {
      return "saya dewasa";
    } else {
      return "anak kecil";
    }
  } else {
    return "yang dimasukkan kok string";
  }
}

let cek = dewasa(31);
console.log(cek);

// Penulisan arrow function. nested function
const kendaraan = (age, wheels) => {
  if (wheels === 4) {
    const gb = dewasa(age);
    return `${gb} kendaraan roda ${wheels} mobil`;
  } else if (wheels === 2) {
    return `${gb} kendaraan roda ${wheels} motor`;
  } else {
    return `${gb} mungkin truck`;
  }
};

const hasil = kendaraan(20, 4);
console.log(hasil);

// Function callback
const saldo = (saldo1, saldo2, callback) => {
  return callback(saldo1, saldo2);
};

const add = (a, b) => {
  return a + b;
};

const minus = (a, b) => {
  return a - b;
};

const hsl = saldo(2000, 4000, minus);
console.log(hsl);

// FUNCTION CALLBACK
const prosesData = (full_name) => {
  // console.log(`Halo ${full_name}`);
  console.log(`Halo ${full_name}`);
};

const getInput = (first_name, last_name, callback) => {
  let full_name_fix = `${first_name} ${last_name}`;

  if (typeof callback == "function") {
    callback(full_name_fix);
  } else {
    // console.log("callback bukan function");
    console.log("Callback bukan function");
  }
};

getInput("Mr", "Al", prosesData);
