// 1. parentNode, parentElement
// parentNode vs parentElement
const span = document.querySelector(".span");
//  với mỗi chấm chấm đến một cấp EX : . parentElement đến lớp cha , chấm thêm .parentElement.parentElement đến lớp ông
console.log(span.parentElement.parentElement);
console.log(span.parentNode.parentNode);
