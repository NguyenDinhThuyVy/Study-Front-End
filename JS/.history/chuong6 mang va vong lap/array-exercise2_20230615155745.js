// 1. Cho 1 mảng gồm nhiều giá trị [1,1000, false, null, "evondev", "", undefined, "javascript", [1,2,3]]. Viết chương trình loại bỏ các giá trị là falsy ra khỏi mảng chỉ giữ lại giá trị truthy. Gợi ý giá trị falsy là 0 null undefined false "" NaN
const array = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
//  new Boolean
// Boolean
// built-in object
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);

// 2. Cho 1 mảng phức tạp [[1,2,3, [false, null]], [1,5,6, ["javascript"]], [888,666, [90]]]. Và kết quả mong muốn là [1,2,3,false,null,1,5,6,"javascript",888,666,90]
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
// flat(number) -> [1, 2, 3, false, null, 1, 5, 6, 'javascript', 888, 666, 90]
const result = complexArray.flat(2);
console.log(result);

// 3.Đảo ngược số nguyên . Ví dụ 1234 -> 4321, -567 -> -765
// Math.sign(123) -> 1
// Math.sign(-123) -> -1
function reverseNumber(number) {
  // convert to String
  // split("") -> [value]
  // reverse()
  // join("")
  const value =
    parseInt(number.toString().split("").reverse().join("")) *
    Math.sign(number);
  console.log(value);
}
// reverseNumber(-1234);
// reverseNumber(1234);
// 4. Viết chương trình có tên là fizzBuzz với đầu vào là một số nguyên, và cho chạy từ 1 cho tới số nguyên đó rồi kiểm tra nếu có số chia hết cho 2 thì in ra chữ "Fizz", nếu chia hết cho 3 thì in ra chữ "Buzz", nếu chia hết cho 2 và 3 thì in ra "FizzBuzz"
function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      console.log(`Fizz ` + i);
    }
    if (i % 3 === 0) {
      console.log(`Buzz ` + i);
    }
    if (i % 3 === 0 && i % 2 === 0) {
      console.log(`FizzBuzz ` + i);
    }
  }
}
fizzBuzz(6);

// 5. Cho 1 chuỗi bất kỳ, đếm số lượng kí tự `vowels` có trong chuỗi.
// vowels là các kí tự u e o a i
// Ví dụ "evondev" -> 3
function countVowels(string) {
  let count = 0;
  const characters = "ueoai";
  for (let c of string.toLowerCase()) {
    if (characters.includes(c)) count++;
  }
  return count;
}
console.log(countVowels("EVONDEV"));

// 6. Cho 1 mảng các giá trị số [1,2,3,1,1,1,2,2,2,5,5,5,7,7,6]. Viết một function trả về một mảng với các giá trị unique. Kết quả ở trên sẽ là [1,2,3,5,7,6];
function unique(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
}
