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
// Tham số là function
// Lưu function vào 1 biến rồi gọi sau
function add(a = 0, b = 0) {
  return a + b;
}
const sum2 = add; //gán function add cho biến sum2 nhưng chưa được gọi
sum2(300, 400);
console.log(sum2);
