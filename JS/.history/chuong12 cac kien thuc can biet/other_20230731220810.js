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
console.log(parseInt(str)); //NaN
console.log(parseFloat(str)); //NaN
console.log(Number(str)); //0
// chuyyển dưx liệu sang number
console.log(+str); //0
// chuyển đổi dũ liệu ssng boolean
//  có dữ liệu sẽ trả về true ngược lại trả về false
console.log(!!str); //false

// 4. arguments
function number(a, b, c) {
  // if (!arguments.length) console.log("please insert your arguments");
  console.log(typeof arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(arguments);
  console.log(args2);
  return a + b + c;
}
number(1, 2, 3);
