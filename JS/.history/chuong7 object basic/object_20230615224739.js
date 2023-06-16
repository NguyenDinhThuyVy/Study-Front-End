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
