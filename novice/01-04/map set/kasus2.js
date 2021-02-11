let kamus = new Map();

kamus.set("car", "mobil");
kamus.set("motorcycle", "montor");
kamus.set("plane", "pesawat");

const ubahBahasa = () => {
  let kata = document.getElementById("kata").value;
  if (kamus.has(kata)) {
    let get = kamus.get(kata);
    let paragraf = document.createElemen("p");
    let show = document.createTextNode(get);
    let box = document.getElementById("box");
    box.appendChild(paragraf);
    paragraf.appendChild(show);
    console.log;
  } else {
    console.log("Kata tidak ada");
  }
};
let klik = document.getElementById("btn").addEventListener("click", ubahBahasa);
