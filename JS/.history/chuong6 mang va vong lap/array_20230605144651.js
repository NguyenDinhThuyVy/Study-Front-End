// Mảng
const a = "a";
const b = "b";
const c = "c";
// 2 cách tạo mảng
//  array literal
// const students1 = [];
// array constructor
const students = new Array();
// Ví dụ một mảng
// Mảng phức tạp  [ 0, false , undefined, null , "zyzy", ["hihi", false, 1200 , []]]
//  Mảng đơn giản [0 , false , undefined , null , "zyzy"]
// [1,2,3,4,5] ["a" , "b" ,"c" , "d"] [false , true , true]
// [] : empty array -> mảng rỗng
const students1 = ["zy", "my", "tom", "ngien", "dat"]; //0 1 2 3 4
// index : vị trí của phần tủ hay giá trị trong mnarg và nó bắt đầu từ 0
// length : độ dài của mảng , nó đếm từ 1
//  truy xuất trong mảng -> students1[index]
console.log(students1[0]);
//  lấy phần tử cuối cùng bằng length -1
console.log(students1[students1.length - 1]);
// Phương thức hay dùng của mnarg nên biết
// length -> trả về độ dài của mảng
console.log(students1.length);
// reverse -> Đảo ngược giá trị trong mảng
console.log(students1.reverse());
// join -> nối các phầnt tử trong mảng thành chuỗi.
console.log(students1.join());
console.log(students1.join(" ")); // xóa bỏ dấu ,
// includes -> kiểm tra mảng đó có chứa phần tử nào đó không
console.log(students1.includes("zy")); //true
// indexOf -> trả về vị trí của phần tử tìm thấy đầu tiên
console.log(students1.indexOf("tom")); //2
// lastIndexOf -> trả về vị trí của phần tử tìm thấy cuối cùng
console.log(students1.lastIndexOf("zy")); //4
// push -> thêm phần tử vào cuối mảng
console.log(students1.push("javascript"));
console.log(students1);
// unshift -> thêm phần tử vào đầu mảng
console.log(students1.unshift("meme"));
console.log(students1);
// pop -> xóa phần tử cuối cùng trong mảng
console.log(students1.pop());
console.log(students1);
//shift -> xóa phần tử đầu tiên trong mảng
console.log(students1.shift());
console.log(students1);
// slice -> tạo ra một mảng copy của mảng ban đầu
const animals = ["tiger", "lion", "horse", "elephant"];
// slice(): tạo ra mảng mới y hệch mảng ban đầu
const animals2 = animals.slice();
console.log(animals2); //['tiger', 'lion', 'horse', 'elephant']
// slice(start) start -> vị trí index ở trong mảng
const animals3 = animals.slice(1);
console.log(animals3); //['lion', 'horse', 'elephant']
// slice(start, end) : start end cũng là vị trí index của array
const animals4 = animals.slice(1, 3);
// ['lion', 'horse']
console.log(animals4);
// slice có thể truyền số âm vd slice (-1) => elephant
// splice -> nó có thể xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
// Nó sẽ xoá phần tử trong mảng hoặc thay thế phần tử trong mảng
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pets2 = pets.splice(2);
// ["bird", "dragon"];
// console.log(pets2);
// splice(start, deleteCount): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
// const pets3 = pets.splice(0, 4);
// [] empty array: mảng rỗng
// splice(start, deleteCount, item1, item2, itemN): deleteCount là số lượng phần tử muốn xoá hoặc thay thế
const pets3 = pets.splice(0, 2, "dinasour", "pig", false, 100);
// ["dinasour", "cat", "bird", "dragon"];
console.log(pets);
// sort -> sắp xếp các phần tử trong mảng theo chuẩn unicode-16
const random = [1, 100, 200, "hihi", 999, 10, 20, 5];
//[1, 10, 100, 20, 200, 5, 999, 'hihi']
console.log(random.sort());
//  sort(function(a,b))
// function(callback)
// c1
const random2 = random.sort(function (a, b) {
  if (a > b) return 1; // sắp xếp theo tăng dần
  if (a < b) return -1; //  sắp xếp theo giảm dần
});
// c2
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random2);
console.log(random3);
// find -> nó sẽ trả về phần tử tìm thấy đầu tiên trong mảng thỏa điều kiện
const numbers = [1, 100, 200, 999, 10, 20, 5];
const findYourNumber = numbers.find((element) => element > 10);
// nếu không tfm thấy thì nó sẽ trả vê kết quả là undefined
console.log(findYourNumber); //100
//  findIndex -> nó sẽ trả về vị trí index tìm thấy đầu tiên trong mảng thỏa điều kiện nào đó
const findYourIndex = numbers.findIndex((element) => element > 10);
console.log(findYourIndex); //100
// map -> duyệt qua từng phần tử trong mảng và trả ra một mảng mới mà không thay đổi mảng ban đầu
const listNumber = [1, 2, 3, 4, 5];
// trả ra một mảng mới mà các số( giá trị)trong mảng cũ nhân 2
// .map(callback(value, index, array))
const listNumberDouble = listNumber.map(function (value, index, array) {
  return value * 2;
});
console.log(listNumberDouble);
// forEach -> cúng duyệt qua từng phần tử trong mảng nhưng không trả ra mảng mới và không có return
const listNumberTripple = listNumber.forEach((value, index, array) => {
  return value * 3;
});
// console.log(listNumberTripple);
//  Hãy cho biết sự khác nhau giữa forEach và map
// Map thì có return còn forEach thì không
// Map thì trả về mảng dựa trên mảng bên đầu, còn forEach  vì không có return nên ko trả về gì hết.
// Map thì có thể dừng còn , forEach thì chạy vô hạn
// filter -> DÙng để sàng lọc các phần tử trong mảng thỏa điều kiện nào đó
// .filter(callback(value, index, array))
const greaterThanThree = listNumber.filter((value, index, array) => {
  return value > 3;
});
console.log(greaterThanThree);
// some and every return boolean
// some return true khi thỏa một điều kiện và ngược lại trả về flase khi không thỏa điều kiện nào cả
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
//  every nó chỉ trả về true khi tất cả điều kiện đều đúng và ngược lại chỉ cần một cái sai sẽ return flase
const everyNumber = listNumber.every((value) => value > 4);
console.log(everyNumber);
// reduce -> gom các phần tử trong mảng về  giá trị
// .reduce((a,b) => {} , initialize value);
const totalNumber = listNumber.reduce(function (previousValue, currentValue) {
  console.log(previousValue, currentValue);
  return previousValue + currentValue;
}, 0);
console.log(totalNumber);
