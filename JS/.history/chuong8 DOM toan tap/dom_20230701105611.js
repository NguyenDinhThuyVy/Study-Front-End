//1.DOM lả gì?
// Document Object Model
// DOM attribute
// DOM node

//2.Selecting nodes
// 2.1 document.querySeletor("selector") -> trả về 1 node nếu tồn tại selector
// selectors:.header , p , body , #heading
const signleNode = document.querySelector(".container");
const signleNode2 = document.querySelector("h1");
const signleNode3 = document.querySelector("#spiner");
console.log(signleNode);
console.log(signleNode2);
console.log(signleNode3);
