// // functional constructor
// function Developer(name) {
//   this.name = name;
//   this.type = "Developer";
// }
// function Tester(name) {
//   this.name = name;
//   this.type = "Tester";
// }

// function EmployeeFactory() {
//     // function declaration
//   this.create = (name, type) => {
//     switch (type) {
//       case 1:
//         return new Developer(name);
//         break;
//       case 2:
//         return new Tester(name);
//         break;
//     }
//   };

// }

// const employeeFact = new EmployeeFactory();
// const employee = [];
// function hi() {
//   console.log("Hi I am from !!!" + this.name + " " + this.type);
// }

// employee.push(employeeFact.create("Stakshi", 1));
// employee.push(employeeFact.create("Vishal", 1));
// employee.push(employeeFact.create("Gaurav", 2));
// console.log(employee.length);

// function Rice(name) {
//   this.name = name;
//   this.type = 1;
// }

// function Jeans(name) {
//   this.name = name;
//   this.type = 2;
// }
