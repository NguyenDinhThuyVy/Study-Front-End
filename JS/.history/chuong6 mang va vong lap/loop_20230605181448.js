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
// nested loop
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(`The value is ${numbers[i]}`);
}
