const person = {
  firstname: "John",
  lastname: "Doe",
  email: "joe@example.com",
  info: function () {
    return `${this.firstname}, ${this.lastname}, ${this.email}`;
  },
};

console.log(person.info());

// Object Constructor Class

let person2 = new Object();

person2.firstname = "John";
person2.lastname = "Doe";
person2.email = "Jdoe@example.com";

person2.info = function() {
    return `${this.firstname}, ${this.lastname}, ${this.email}`;
};

console.log(person2.info());