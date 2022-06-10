const normalPerson = {
  name: "Rahim",
  lastname: "Uddin",
  salary: 20000,
  getFullname: function () {
    console.log(this.name, this.lastname);
  },
  chargebill: function (amount, tips, tax) {
    //we can use more paramiter here
    // console.log(this);
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

const heroperson = {
  firstname: "hero",
  lastname: "Alom",
  salary: 30000,
};

const sumonpaul = {
  firstname: "Sumon",
  lastname: "Paul",
  salary: 40000,
};

// const herobill = normalPerson.chargebill.bind(sumonpaul);
// herobill(5000);
// herobill(2000);
// herobill(8000);
// herobill(5000);
// herobill(3000);
// console.log(sumonpaul.salary);

// call ther hero persons salary after cutting chargebill
// const heropersonchargebill = normalPerson.chargebill.bind(heroperson);

// heropersonchargebill(4000);
// heropersonchargebill(5000);

// console.log(heroperson.salary);
// ======================================================= call
// normalPerson.chargebill.call(heroperson, 7000, 499, 39); //7000 is amount of paramitre
// normalPerson.chargebill.call(sumonpaul, 2000, 500, 4000); //should use (,) for more paramiter
// console.log(sumonpaul.salary);
//=========================================================apply=========================
normalPerson.chargebill.apply(sumonpaul, [4000, 3993, 30]); //we can use apply for more paramiter
normalPerson.chargebill.apply(heroperson, [4000, 3993, 30]);
console.log(heroperson.salary);
