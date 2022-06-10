const normalperson = {
  firstName: "sumon",
  lastName: "paul",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount, tips, tax) {
    // console.log(this);
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

// console.log(normalperson.chargeBill(5000));
// console.log(normalperson.chargeBill(2000));
const heroPerson = {
  firstName: "hero",
  lastName: "Balam",
  salary: 25000,
};
const frindlyPerson = {
  firstName: "hero",
  lastName: "Balam",
  salary: 12000,
};
// apply bind method
// const herobillcharge = normalperson.chargeBill.bind(heroPerson);
// // herobillcharge(1000);
// herobillcharge(3000);
// herobillcharge(5000);
// // console.log(heroPerson.salary);

// const frindlychargBill = normalperson.chargeBill.bind(frindlyPerson);
// frindlychargBill(4039);
// // console.log(frindlyPerson.salary);
// normalperson.chargeBill.call(heroPerson, 900, 100, 10);
// normalperson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);
// normalperson.chargeBill.call(frindlyPerson, 5000, 500, 50);
// console.log(frindlyPerson.salary);
normalperson.chargeBill.apply(heroPerson, [3000, 200, 100]);
normalperson.chargeBill.apply(heroPerson, [2385, 150, 60]);
console.log(heroPerson.salary);
