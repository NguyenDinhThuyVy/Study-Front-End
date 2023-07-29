// 1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
console.log(i, j); // 2, 1
let a = 1;
let b = ++a;
console.log(a, b); // 2,2

// 2.Lưu ý khi return function
function total(x, y) {
  return; // undefined
  x + y;
}

// 3. 2 cách chuyển đổi dữ liệu mới
const str = "123";
console.log(parseInt(str)); //NaN
console.log(parseFloat(str)); //NaN
console.log(Number(str)); //0
console.log(+str); //0
console.log(!!str); //false
