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
