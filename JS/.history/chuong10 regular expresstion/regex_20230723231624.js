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
/[a-z]/.test("aadfs"); // true
/[a-z]/.test("A"); // false
/[a-z]/.test("Abc"); //  true
/[A-Z]/.test("Z"); // true
/[A-Z]/.test("x"); // false
/[0-9]/.test("10000"); // true
/[0-9]/.test("abc10000xyz"); // true
/[0-9]/.test("abc"); // false
/[a-zA-Z0-9]/.test("123abcAbc"); // true
/[^a-z]/.test("a"); // false
