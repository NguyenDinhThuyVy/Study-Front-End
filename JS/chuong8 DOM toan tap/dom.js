//1.DOM lả gì?
// Document Object Model
// DOM attribute
// DOM node

//2.Selecting nodes
// 2.1 document.querySeletor("selector") -> trả về 1 node nếu tồn tại selector đó, ngược lại nó sẽ trả về null
// selectors:.header , p , body , #heading
const signleNode = document.querySelector(".container");
const signleNode2 = document.querySelector("h1");
const signleNode3 = document.querySelector("#spiner");
console.log(signleNode);
// console.log(signleNode2);
// console.log(signleNode3);
// 2.2 document.querySelectorAll("selector") ->Trả về một Nodelist chứa danh sách các node, nếu không có thì trả về empty
//  nó có thể loop và sử sụng forEach
// nos giống array là có thể loop nhưng không sử dụng được các phương thức như push , pop, shift
const multiNodes = document.querySelectorAll(".item");
console.log(multiNodes);
