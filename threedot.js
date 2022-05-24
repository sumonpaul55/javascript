// now i will learn three dot (...)
//
//we can concatinate 2 or more arry with (...) for instance

const age = [34, 54, 35, 22, 45, 2, 11, 24];
const team2Age = [84, 39, 274, 284, 284, 23, 4, 55, 3];
const morenumber = [83, 48, 32, 3, 1, 4, 22, 3, 443, 2, 42, 45, 22, 45];

// const allArry = age.concat(team2Age).concat([55]).concat(morenumber);
//use (...)
const allArry = [...age, ...team2Age, ...morenumber];

// console.log(allArry);

const minister = 483;
const sochib = 9483;
const king = 483;

// const maxAmount = Math.max(minister, sochib, king);
//if the value's are an arry
const numberofamount = [4838, 903, 5833, 84727, 29484, 382];
const maxAmount = Math.max(...numberofamount);

console.log(maxAmount);
