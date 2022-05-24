//defaulte parametre
let mynum = (x, y = 5) => {
  return x * y;
};
console.log(mynum(9)); //if we didn't give here any number it will take the above 5

// function doubleit(num) {
//   return num * 2;
// }

// let result = doubleit(45);

//if only one paramtres in this case arrow funtion

const doubleit = (num) => num * 3;

// console.log(doubleit(4));

//if two or more paramites included

const calculateit = (num1, num2) => num1 * num2;

let result = calculateit(6454, 3154);
// console.log(result);

//without paramiters arrow function

const giveMeIt = () => 50;
// console.log(giveMeIt());

// multi tasks arrow function          ..................and result should be return

const domath = (pone, ptwo) => {
  const multifly = pone + ptwo;
  const diff = pone - ptwo;
  const total = multifly * diff;
  const finaly = total * 5;
  return finaly;
};

let answer = domath(12, 2);
// console.log(answer);
