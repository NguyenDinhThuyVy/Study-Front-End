// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector(".span");
//  với mỗi chấm chấm đến một cấp EX : . parentElement đến lớp cha , chấm thêm .parentElement.parentElement đến lớp ông
console.log(span.parentElement.parentElement);
console.log(span.parentNode.parentNode);
// selector.parentNode hoặc selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);

//2. nextElementSibling vs previousElementSibling
// nextElementSibling
const nextSpan = span.nextElementSibling;
console.log(nextSpan); // <span class="span2">zyzy</span>
// previousElementSibling
const previousSpan = span.previousElementSibling;
console.log(previousSpan);
// if (!span.previousElementSibling) {
//   console.log("say hi");
// }

// 3.childNodes: trả về hết accs node bên trong bao gồm textNodes vs children : trả về các node không bao gồm textNodes
console.log(span.childNodes);
console.log(span.children);

// 4.firstChild vs firstElementChild
