class person {
  constructor(firstname, lastname, salary) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.salary = salary;
  }
}
const heroPerson = new person("hero", "Balam", 2000);
console.log(heroPerson);
const friendlyPerson = new person("Helo", "Kalam", 10000);
console.log(friendlyPerson);

function Person(firstName, lastName, salary) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.salary = salary;
}
const someOne = new Person("Sumon", "Paul", 30000);
console.log(someOne);
// use new keyword for make a new object from a class
