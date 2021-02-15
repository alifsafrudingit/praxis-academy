const R = require("ramda");
const U = require("underscore");
const L = require("lodash");

const xs = [{ a: 1 }, { a: 2 }, { a: 3 }];
console.log(R.find(R.propEq("a", 2))(xs)); //=> {a: 2}
console.log(R.find(R.propEq("a", 4))(xs)); //=> undefined

var evens = U.filter([1, 2, 3, 4, 5, 6], function (num) {
  return num % 2 == 0;
});
console.log(evens);

const cekLodash = L.join(["a", "b", "c"], "~");
console.log(cekLodash);
