class Person {
  constructor(fname, lname, email) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
  }

  info = function () {
    return `${this.fname} ${this.lname} ${this.email}`;
  };
}

let person = new Person("John", "Doe", "Email");
console.log(person.info());
