const number = [1, 3, 5, 6, 4, 7, 8, 4, 22, 11, 444, 657, 2, 34, 21, 34, 65];
const partnum = number.slice(3, 14); //3 starting index and 14 is ending
// console.log(partnum);
const partsplis = number.splice(2, 4, 10, 58); //it's changed the original arry
console.log(partsplis);
console.log(number);

const together = number.join(","); //it print without arry with the elemnt wich prvide(",")
console.log(together);
