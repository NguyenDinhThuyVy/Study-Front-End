// Vòng lặp
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++) {
//   // console.log(`The index is ${i}`);
//   if (numbers[i] === 8) {
//     // break;
//     continue;
//   }
//   console.log(`The value is ${numbers[i]}`);
// }
// nested loop [[1,2,3,4,5], [1,2,3,4,5]]
// for (let i = numbers.length - 1; i >= 0; i--) {
//   // console.log(`The value is ${numbers[i]}`);
//   // for (let j = numbers.length -1 ;  j >= 0; j --){}
// }
// 1. sao chép một mảng sử dụng vòng lặp for
let copuAr = [];
for (let i = 0; i < numbers.length; i++) {
  copuAr.push(numbers[i]);
}
console.log(copuAr);
// 2.Đảo ngược từ " i love " -> "evol i"
let str = " i love";
let copAr = "";
for (let i = str.length; i >= 0; i--) {}
