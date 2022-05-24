//es6 object classes

// class students {
//   // need to use constructor for insert value or property
//   constructor(sname, sid) {
//     this.name = sname;
//     this.id = sid;
//     this.school = "School name here";
//   }
// }

// const student1 = new students("sumon paul", 48);
// const student2 = new students("someone name", 38);
// console.log(student1, student2);

//inherritance classes
class Father {
  constructor() {
    this.Fathername = "Father of all";
  }
}

class child extends Father {
  // need to use constructor for insert value or property
  constructor(sname, sid) {
    super();
    this.name = sname;
    this.id = sid;
    this.school = "School name here";
  }
  //we can use function here without function keywords
  fullname(fname) {
    return this.name + " " + fname;
  }
}

const child1 = new child("sumon paul", 48);
const chlid2 = new child("someone name", 38);
console.log(child1.fullname("promot paul"), chlid2.id);
