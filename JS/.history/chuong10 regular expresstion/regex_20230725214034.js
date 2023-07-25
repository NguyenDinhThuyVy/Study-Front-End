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
//  dấu ^ ở trong dấu ngoặc vuông mang tính phủ định
/[^a-z]/.test("a"); // false

// 4. Meta characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); // true
// \D: ngược lại với \d tương đương với [^0-9]
/\D/.test("123"); // false
// \w: khớp với các kí tự và dấu gạch dưới và số, nó sẽ tương đương [a-zA-Z0-9_]
/\w/.test("_"); // true
// \W: ngược lại \w nó sẽ tương đương [^a-zA-Z0-9_]
/\W/.test("_"); // false
// \s: khớp với các kí tự khoảng trắng: spaces, tab, newline
/\s/.test(" "); // true
// \S: các kí tự không phải khoảng trắng
/\S/.test(" "); // false
// \n: khớp với newline( xuống hàng )
// \t: khớp với lại tab character
// .: khớp với tất cả mọi thứ ngoại trừ newline(\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline(\n)

// 5.Quantifiers: {n} {n,m} + ? *
// string.match(regex)  "abc".match(/\w/) -> []
const str1 = "welcome to 2023222";
console.log(str1.match(/\d/)[0]); // số 2
//  sử dụng  {n} : số lượng nhất định
console.log(str1.match(/\d{4}/)[0]); // số 2023
//  {n,m} : số lượng trong khoảng từ n đến m
console.log(str1.match(/\d{4,6}/)[0]); // số 202322
// + : lấy 1 hoặc nhiều kí tự thỏa điều kiện
console.log(str1.match(/\d+/)[0]);
const str2 = "color or colour or color2?";
// ?: đẻ phía sau phần tử đó để xét rằng phần tử nớ  có thể có hoặc không có kí tự nào đó
console.log(str2.match(/colou?r2?/g)); // ["color", "colour" ,"color2"]
// flag
// g: global lấy nhiều giá trị
// i: case insensitive không phân biệt hoa thường
// m: multipe lines tích hợp khi sử dụng nhiều hàng
// *: không có hoặc là có nhiều
const str3 = "123456";
console.log(str3.match(/\d+/g)); //['123456', '']

// 6.group()
/(\d{3})?(\w+)/.test("123"); //false
