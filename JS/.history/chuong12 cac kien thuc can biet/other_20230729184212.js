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
const str = "";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);
console.log(!!str);
