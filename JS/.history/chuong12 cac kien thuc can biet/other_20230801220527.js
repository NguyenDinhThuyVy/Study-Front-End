// 1. Sự khác nhau giữa i++ và ++i
let i = 1;
let j = i++;
// console.log(i, j); // 2, 1
let a = 1;
let b = ++a;
// console.log(a, b); // 2,2

// 2.Lưu ý khi return function
function total(x, y) {
  return; // undefined
  x + y;
}

// 3. 2 cách chuyển đổi dữ liệu mới
const str = "";
// console.log(parseInt(str)); //NaN
// console.log(parseFloat(str)); //NaN
// console.log(Number(str)); //0
// chuyyển dưx liệu sang number
// console.log(+str); //0
// chuyển đổi dũ liệu ssng boolean
//  có dữ liệu sẽ trả về true ngược lại trả về false
// console.log(!!str); //false

// 4. arguments
function number(a, b, c) {
  // if (!arguments.length) console.log("please insert your arguments");
  // console.log(typeof arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  // console.log(arguments);
  // console.log(args2);
  // return console.log(a + b + c);
}
number(1, 2, 3);

// 5. closure in loop
for (let z = 1; z < 5; z++) {
  setTimeout(function () {
    // console.log(z); // z = ?
  }, 1000);
}
// let -> not hoisting
// let -> scope của nó sẽ thay đổi sau mỗi lần lặp
// var -> hoisting
// scope của var sau mỗi vòng lặp thì nó không thay đổi

// 6. Sự khác nhau giữa localStorage và sessionStorage
// Tắt trình duyệt hay đóng tab vẫn còn
// localStorage.getItem("abc");
// Tắt trình duyệt hay đóng tab sẽ bị mất
// sessionStorage.getItem("abc");

// 7. Những trường hợp ko nên sử dụng arrow function
// 7.1 Event handlers
const input = document.querySelector(".input");
input.addEventListener("keyup", () => {
  console.log(this.value);
});
// 7.2 Object
// const student = {
//   counter: 0,
//   increment: () => {
//     return ++this.counter;
//   },
// };
// console.log(student.increment());
