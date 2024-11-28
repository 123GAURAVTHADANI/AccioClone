// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Functional constructor
// Person.prototype.course = "FSD";
// Person.prototype.calculateAge = function () {
//   console.log(this.age);
// };
// let ravi = new Person("Gaurav", 28);
// let stakshi = new Person("Stakshi", 20);

// console.log(ravi);
// console.log(stakshi);
// ravi.calculateAge();

// filter, forEach , push
let array = ["Gaurav", "Accio"];
let products = ["tv", "ac"];
Array.prototype.myLength = function () {
  console.log("Hello!!");
};
let obj = {
  name: "Stakshi!",
};
let obj2 = {
  name: "Akshat",
};

let proto1 = {
  age: 27,
};
// Object.setPrototypeOf()

// Object.prototype.course = "FSD";
// Object.setPrototypeOf(Object, proto1);

// obj.__proto__ = { age: 27 };

//
// Object.prototype = proto1;
console.log(obj);
console.log(obj2);
// Array - > Object -> Object -> Null
// Object -> Object -> null
// console.log(obj.__proto__.__proto__);
// console.log(array.__proto__);
// String.prototype.myLength=
// array.myLength();
// products.myLength();
// console.log(array);
// console.log(Object.getPrototypeOf(array));

// mdn (__proto__ getter and setter)
