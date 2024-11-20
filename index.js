// let person = {
//   name: "Vishal",
//   zebra: "Zebra",
//   age: 20,
//   address: {
//     address1: "Bangalore",
//     type: {
//       details: "Floor 3",
//     },
//   },
// };
// let person2 = {
//   name: "Vishal",
//   age: 20,
// };

// // console.log(JSON.stringify(person) == JSON.stringify(person2));

// // let newPerson = { ...person };

// // let deepPerson = JSON.parse(JSON.stringify(person));
// // // newPerson.address.address1 = "India";
// // deepPerson.address.address1 = "Bangladesh";

// // console.log(person);

// let stringifiedObj = JSON.stringify(person);
// // console.log(stringifiedObj);

// console.log(person);
// // MAPs Js
// // comparing the obj
// // deep copy or clone the object

let name = "stakshi";
let name1 = "ihskats";

let obj1 = { name: "Gaurav", age: 20 };
let obj2 = { age: 20, name: "Gaurav" };

console.log(JSON.stringify(obj1) == JSON.stringify(obj2));
