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

// 2.3 document.getElementByClassName("header")->Trả về một HTML Collection chứa danh sách các node, nếu không có thì trả về empty
const classNodes = document.getElementsByClassName("item");
console.log(classNodes);

// 2.4 document.getElementsByTagName("tagName")->Trả về một HTML Collection chứa danh sách các node, nếu không có thì trả về empty
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

// 2.5 document.getElementsById("Id") ->Trả về 1 node chứa danh sách các node, nếu không có thì trả về empty
const idNode = document.getElementById("spiner");
