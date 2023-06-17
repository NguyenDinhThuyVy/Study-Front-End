// object literal
const objectLiteral = {};
// object constructor
const objectConstructor = new Object();
const student = {
  name: "zyzy",
  age: 27,
  fale: true,
  hi: function () {
    console.log("hello envondev");
  },
};
//  2  cách truy xuất giá trị của object
// 2.1 Dot notation object.key
console.log(student.name);
// 2.2 Bracket notation object["key"]
console.log(student["name"]);
//  Thay đổi giá trị của Object
student.name = "mymy";
// thêm giá trị vào object
student.address = " Da Nang";
student.hello = function () {
  console.log("hello");
};
// console.log(student);
// Cách xóa giá trị trong Object
delete student["address"];
//  for in
for (let key in student) {
  // console.log(`${key} : ${student[key]}`);
  // console.log(student[key]);
}

// Object.key() -> trả về một mảng chứa tất cả các keys của object
// console.log(Object.keys(student));

// Object.values(object) -> trả về một mảng chứa tất cả các giá trị của object
const value = Object.values(student);
// console.log(value);

// Object.entries(object) -> trả về một mảng nested [["name","zyzy"],["age","20"]] gồm có key và value
const entries = Object.entries(student);
console.log(entries);
// Object.assign() -> copy value từ object này đến object khác
const a = {
  fristName: "zy",
};
const b = {
  lastname: "nguyen",
};
// C1
const c = Object.assign(a, b);
console.log(c);
// C2
const d = { ...a, ...b };
console.log(d);

// Object.freeze(object) -> ngăn chặn chỉnh sửa key và value của object
const car = {
  brand: "BMW",
};
const newCar = Object.freeze(car);
newCar.brand = "audi";
console.log(newCar);

// Object.seal(object) -> cho phép chỉnh sửa key và value nhưng không được thêm key value mới
const user = {
  fullName: "Nguyen Hoang My",
};
// const newUser = Object.seal(user);
// newUser.age = 28;
// console.log(newUser);

// Sao cheép object cơ bản
// newUser.userName = "tran anh tuan";
// newUser.lastName = "john";
// console.log(newUser);
// [...array] {...object}
// spread operator to copy object
const newUser = { ...user };
newUser.fullName = "trananhtuan";
console.log(user);
console.log(newUser);
// Object.assign
const newUser1 = Object.assign(user);
console.log(newUser1);
