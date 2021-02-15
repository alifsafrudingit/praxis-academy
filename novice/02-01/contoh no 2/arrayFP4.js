let meetups = [
  {
    name: "JS",
    isActive: true,
    members: 500,
  },
  {
    name: "Angular",
    isActive: false,
    members: 400,
  },
  {
    name: "Node",
    isActive: true,
    members: 500,
  },
];

let sum = 0;
for (let i = 0; i < meetups.length; i++) {
  sum += meetups[i].members;
}
console.log(sum);

let sumFP = 0;
sumFP = meetups.reduce((accumulator, meetups) => {
  return accumulator + meetups.members;
}, 0);
console.log(sumFP);
