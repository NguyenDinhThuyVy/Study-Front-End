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
const myStr = "Frontend Developer D";
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
// index dương từ trái qua phải , index âm thì từ phải qua trái
console.log(myStr.slice(-3));
// loại bỏ khoảng cách ở 2 bên
console.log(myStr.trim());
// loại bỏ khoảng cách ở bên trái
console.log(myStr.trimStart());
// loại bỏ khoảng cách ở bên phải
console.log(myStr.trimEnd());
// lấy ra kí tự theo vị trí index
console.log(myStr.charAt(5));
// substr --> Lấy ra 1 phần của chuỗi (string)
// substr(index, length) ->index: vị trí, length : số lươngj kí tự bạn muốn lấy
console.log(myStr.substr(1, 5)); // ronte
// substring --> Lấy ra các kí tụ của chuỗi (string)
// substring(start index , end index)
console.log(myStr.substring(1, 5)); // ront
// Loại bỏ khoảng trống 2 bên , đưa tất cả về in hoa , thay chữ Developer D thành chữ zyzy so cute, sau đó repeat 2 lần;
console.log(
  `Result of myStr :${myStr
    .trim()
    .replace("Developer D", "zyzy so cute")
    .toUpperCase()
    .repeat(2)}`
);
