let meetups = [
  {
    name: "JS",
    isActive: true,
    members: 450,
  },
  {
    name: "Angular",
    isActive: false,
    members: 500,
  },
  {
    name: "Node",
    isActive: true,
    member: 400,
  },
];

let isActive = true;
for (let i = 0; i < meetups.length; i++) {
  if (meetups[i].isActive) {
    isActive = false;
  }
}
console.log(isActive);

let meetupFP;
meetupFP = meetups.every((m) => {
  return m.isActive;
});
console.log(meetupFP);

let meetupFP1;
meetupFP1 = meetups.some((m) => {
  return m.isActive;
});
console.log(meetupFP1);
