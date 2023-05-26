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
