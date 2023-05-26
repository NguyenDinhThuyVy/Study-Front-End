//  function (hàm)
// Khai báo function
// Cú pháp (syntax) : function functionName(parameters){
// Your code here
// }
// Để bài là viêt hàm tính tổng 2 số a và b
function sum(a, b = 0) {
  // console.log(a + b);
  return a + b;
}
// function sum(parameter = defaultValue){}
console.log(sum(2, 7));
