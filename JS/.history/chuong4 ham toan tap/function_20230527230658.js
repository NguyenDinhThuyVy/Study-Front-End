//  function (hàm)
// Khai báo function
// Cú pháp (syntax) : function functionName(parameters) tham số {
// Your code here
// }
// Để bài là viêt hàm tính tổng 2 số a và b
function sum(a, b = 0) {
  // console.log(a + b);
  return a + b;
}
// function sum(parameter (tham số) = defaultValue){}
// sum() : invoke function
console.log(sum(2, 7));
// invoke function sum(arguments)  Đối số
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
  console.log(a + b);
  return a + b;
}
const sum2 = add; //gán function add cho biến sum2 nhưng chưa được gọi
sum2(300, 400);
// Tham số là function
// Tính trung bình của a và b -> (a + b) /2
function average(a, b, fn) {
  const total = fn(a, b);
  return total / 2;
}
let result = average(2, 2, sum2);
console.log(`result:  ${result}`);
// Function declaration là fn có tên
// Anonymous function(function expression)  fn vô danh
// Không bị hoisting nên phải khai báo function trước khi gọi
const logName = function () {
  console.log("your name");
};
logName();
// IIFE -> immediately invoked function execution chạy function ngay
(function () {
  console.log("this is IIFE function");
})();
// Scope phạm vi biến có thể truy cập đến được
// Global scope avf function scope
let myName = "zyzy"; //global scope
function logYourName() {
  let myName2 = "mymy"; // function scope
}
console.log(myName);
// block scope
// if (2 > 1) {
//   // let message = " hello word";
//   const message1 = " hello word";
//   // global scope
//   // hoisted
//   var message2 = "hihi";
//   alert(message2);
// }
// // alert(message2);
// Lexical scope định nghĩa phạm vi của biến đó
let aNewName = "meme";
function sayhello() {
  let message3 = "hi";
  console.log(`ahihi: ${aNewName}`);
}
// sayhello();
// CLOUSE cho phép truy xuất từ function bên trong ra function bên ngoài
// function sayHello2() {
//   //parent function
//   let message = "hello";
//   function sayHi() {
//     console.log(message); // child function
//   }
//   return sayHi;
// }
// let hello = sayHello2();
// hello();
// function sayHello3(message) {
//   return function hiYourName(name) {
//     console.log(`${message} ${name}`);
//   };
// }
// let hello = sayHello3("How are you today?");
// hello("I'm fine thanks");
// function anotherFunction() {
//   let otherMessage = "hello";
//   function sayHi() {
//     console.log(otherMessage); // child function
//   }
//   return sayHi;
// }
// let callFn = anotherFunction(); // otherMessage ís no longer accessible ko được truy xuất nhưng ở clouse vẫn truy xuất được.
// callFn(); // hello
///////***************BÀI TẬP FUNCTION************
/////// 1. Viết hàm so sánh hai số a , b tìm ra số lớn hơn
function compare(a, b) {
  // if (a > b) {
  //   console.log(`${a} lớn hơn  ${b}`);
  // } else {
  //   console.log(`${b} lớn hơn  ${a}`);
  // }
  if (typeof a != "number" || typeof b != "number") {
    return 0;
  }
  return Math.max(a, b);
}
console.log(compare(10, 100));
//////////2. In  hoa chữ cái đầu trong chữ ví dụ vy -> Vy, VY -> vy
//  capitalize
function capitalize(word = "") {
  if (word.length == 0) return null;
  // convert to lower cáe first
  let newWord = word.toLowerCase().charAt(0).toUpperCase();
  // chartAt(index) vị trí in hoa
  // hello -> slice(0,3) -> hel
  // hello -> slice(1) ->ello
  // slice(startindex, endindex-1)
  // console.log(newWord);
  let otherWord = word.toLowerCase().slice(1);
  // console.log(otherWord);
  console.log(`${newWord}${otherWord}`);
}
capitalize("vy");
// ////////////////////////////////////// 3. Viết hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare đã viết ở trên
function useCallBack(a, b, callback) {
  let max = compare(a, b);
  function callback(max) {
    console.log(max);
  }
  return callback();
}
// function printlMax(number) {
//   console.log(number);
// }
console.log(useCallBack(2, 8, callback));
