class Cat {
  constructor(state1, state2, state3) {
    this.feed = state1;
    this.sleep = state2;
    this.pet = state3;
  }

  print() {
    return `Kucing persia ${feed} setelah bermain ${sleep} tetapi ${pet}`;
  }
}
let result = new Cat("sangat lapar", "mengantuk", "senang");
console.log(result);
