// String
"Hello world";
"My name is Vy";
`I am frontend developer`;
// double quotes , single quote , backticks (template literal)
const name = "Thuy Vy";
const job = "Designer";
console.log(name);
// hiển thị kiểu dữ liệu
console.log(typeof name);
const newStr = "My name is " + name + " and I am " + job;
console.log(newStr);
// ${variable}
const newStr2 = `My name is ${name} and I am ${job}`;
console.log(newStr2);
// .length
console.log(newStr2.length);
// index là vị trí của từng kí tự trong chuỗi (bao gồm gồm cả khoảng trắng)
const myStr = "Frontend Developer D     ";
console.log(myStr.split(" ")); // ["Frontend", "Developer"]
console.log(myStr.split("")); // ["F","r","o","t","e"]
console.log(myStr.split("/")); // ["Frontend Developer"]
console.log(myStr.toLowerCase()); // frontend developer
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER
// true
console.log(myStr.startsWith("Frontend"));
// true
console.log(myStr.endsWith("Developer"));
// true
console.log(myStr.includes("end"));
// false
console.log(myStr.includes("abc"));
console.log(myStr.indexOf("D")); // 9
console.log(myStr.lastIndexOf("D")); // 19
// Thay thế
console.log(myStr.replace("Developer", "zyzy"));
// lặp lại
console.log(myStr.repeat(2));
// tạo ra chuỗi mới
console.log(myStr.slice(0, 8));
