// Regular expression : Biểu thức chính quy
// 1. 2 cách khai báo vơi Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
//  hello world
// regex.test(value) -> true or false
console.log(re1.test("hi world"));

// 2. Anchor ^ $
// ^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó
const re3 = /hi/;
re3.test("hi"); //true
// /hi/.test("hi"); //true
/hi$/.test("welcome to hi"); //true
/^hi/.test("hi you are welcome"); // true

// 3.ranges [] : 1 khoảng
// [a-z] : các kí tự từ a đến z in thường
// [A-Z] : các kí tự từ A đến Z in HOA
// [0-9] : các số từ 0-9
// [a-z0-9A-Z] : các số từ 0-9 hoặc từ a -> z  hoặc từ A -> Z