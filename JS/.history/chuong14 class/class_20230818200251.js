// ES6
// Constructor/protype way
function Person(name) {
  this.name = name;
}
Person.prototype.hihi = function () {
  console.log(this.name);
};
const zyzy = new Person("Zyzy");
zyzy.hihi();
