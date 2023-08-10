// Declaration, new, this, method, caution
let student = {
  name: "zyzy",
  age: 21,
};
// let student2 = {
//   name: "john",
//   age: 40
// }
// Constructor function Person Student
function Student(name, age) {
  // this = {}
  // add properties to this
  this.name = name;
  this.age = age;

  this.Name = function () {
    return `your name is ${this.name}`;
  };
  // return this
}
let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
// let student2 = new Student("john", 40);
console.log(student2.Name());
// Prototype
