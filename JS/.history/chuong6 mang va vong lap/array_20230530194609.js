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
