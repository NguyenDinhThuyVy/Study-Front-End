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
console.log(student);
// Cách xóa giá trị trong Object
