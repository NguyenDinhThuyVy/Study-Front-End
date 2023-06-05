// By value vs By references
// By value -> giá trị thực sự được lưu trong vùng bộ nhớ
const num1 = 1;
const num2 = 1;
console.log(num1 === num2); //true
// By references ->  nói tới vùng bộ nhớ
const arr1 = [1, 2];
const arr2 = [1, 2];
console.log(arr1 === arr2); //false
// JSON : Javascript Objiect Nonation
// {
// "key":value,
// "key":value,
// "key":value,
// "key":value,
// "key":value,
// }
// JSON.stringfy(value) -> convert giá trị sang dưới dạng JSON string
// toString()
// [1,2,3].toString() -> "1,2,3"
// JSON.stringfy([1,2,3]) -> "[1,2,3]"
// JSON.parse("[1,2,3]") -> [1,2,3]
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr2);
console.log(arr1Str === arr2Str);
//  2 Cách để sao chép mảng clone
const students = ["a", "b", " c", "e", "f", "g"];
//  1.để sao chéo mảng ta sử dụng slice()
const sliceStudents = students.slice();
console.log(sliceStudents);
// 2. spread operator [... array]
