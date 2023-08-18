// ES6
// Constructor/protype way
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.getName = function () {
//   console.log(this.name);
// };
// const zyzy = new Person("Zyzy");
// zyzy.getName();

// Class
class Person2 {
  constructor(name) {
    this.name = name;
  }
  // getName() {
  //   return this.name;
  //   // console.log(this.name);
  // }
  // // getName() {
  // //   return this.name;
  // // }
  // setName(newName) {
  //   return (this.name = newName);
  // }
}
const vy = new Person2("zymy");
console.log(vy.getName());
vy.setName("hihi");
console.log(vy.getName());
