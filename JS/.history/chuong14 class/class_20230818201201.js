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
  getname() {
    return this.name;
    // console.log(this.name);
  }
  // getName() {
  //   return this.name;
  // }
  setname(newName) {
    return (this.name = newName);
  }
}
const vy = new Person2("zymy");
console.log(vy.getname());
vy.setname("hihi");
