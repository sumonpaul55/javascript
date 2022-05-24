const bonus = 30; //it's a global variable it's usable anywhere
const result = (num1, num2) => {
  const answer = num1 * num2 + bonus; //we can call a variable inside a block scope but not outside
  console.log(answer); //should console before return
  return answer;
};
// we can't console the (answer)here because it's a block scope
let results = result(20, 54);
if (results > 9) {
  const mood = "happy";
  // console.log(mood);
}
// console.log(mood); //we can't us it here

// console.log(somename); //undefinded cause it's hoisting variable
// var somename = "someone";

// console.log(somename); //undefinded
let somename = "someone"; //error cannot use before initialization

//====================================== closure=======================================

const stopwatch = () => {
  let count = 0;
  return function () {
    count++;
    return count;
  };
};

// call the stopwatch function
const clock1 = stopwatch(); //clock1 is another function
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock1());
//it's call closure
//onefuntion inside other funtion
//we can find a funtion as a variable and call it many time for many result
