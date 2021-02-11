let map = new Map();

map.set("1", "String");
map.set(1, "Number");
map.set(true, "Bolean");

console.log(map.get(1));
console.log(map.get(true));
console.log(map.size);

let john = { name: "John" };
let visitsCountMap = new Map();

visitsCountMap.set(john, 345);
console.log(visitsCountMap.get(john));
