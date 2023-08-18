// ES6
Constructor/protype way
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
}
const evondev = new Person("Evondev");
evondev.getName();
