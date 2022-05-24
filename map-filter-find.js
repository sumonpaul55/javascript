//find the squer value
let num = [4, 5, 3, 6, 4, 6, 3, 2, 5, 7];
// let output = [];
// for (let i = 0; i < num.length; i++) {
//   const elemnt = num[i];
//   let result = elemnt * elemnt;
//   output.push(result);
// }

num.map(function (element, index, arry) {
  //   console.log(element, index, arry);
});

num.map((sqr) => {
  //   console.log(sqr * sqr);
});
// filter find the even number all of them

num.filter((even) => {
  //   if (even % 2 == 0) {
  //     console.log(even);
  //   } else console.log(`${even} it's a odd number`);
});

//find it's use for find a value such as
const result = num.filter((elemnet) => {
  // we will find 6,6,7
  const bigger = elemnet > 5;
  //   return bigger;
});
const result2 = num.find((elemnet) => {
  // we will find only 6
  const bigger = elemnet > 5;
  return bigger;
});
// console.log(result2);

//Usese of map and filter widly
const students = [
  { id: 48, name: "some one" },
  { id: 28, name: "other one" },
  { id: 58, name: "another one" },
  { id: 78, name: "Subol one" },
  { id: 75, name: "Nithaai one" },
  { id: 95, name: "gourango one" },
  { id: 15, name: "Sumon paul" },
];
//find out the arry of name

const names = students.map((n) => n.id);
const name2 = students.map((n) => n.name);
// console.log(name2);

//find the id which's value is upper than 70;
const upperId = students.filter((elemnts) => elemnts.id > 70);
console.log(upperId);
