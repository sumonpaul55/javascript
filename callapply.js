const normalPerson = {
  name: "Rahim",
  lastname: "Uddin",
  salary: 20000,
  getFullname: function () {
    console.log(this.name, this.lastname);
  },
  chargebill: function (amount = 0) {
    // console.log(this);
    this.salary = this.salary - amount;
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

const herobill = normalPerson.chargebill.bind(sumonpaul);
herobill(5000);
herobill(2000);
herobill(8000);
herobill(5000);
herobill(13000);
console.log(sumonpaul.salary);

// call ther hero persons salary after cutting chargebill
const heropersonchargebill = normalPerson.chargebill.bind(heroperson);

heropersonchargebill(4000);
heropersonchargebill(19000);

console.log(heroperson.salary);
