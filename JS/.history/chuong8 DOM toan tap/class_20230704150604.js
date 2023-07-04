// 1. selector.classList.add("class")
const container = document.querySelector(".container");
container.classList.add("is-active");

// 2.selector.classList.remove("class")
// container.classList.remove("container");

// 3.selector.classList.contains("class")
console.log(container.classList.contains("container")); // true
console.log(!container.classList.contains("container")); // false

// 4.selector.classList.toggle("is-active"); -> nếu đã có class rồi thì xóa, nếu chưa có thì tạo class mới
// if (container.classList.contains("is-active")) {
//   container.classList.remove("is-active");
// } else {
//   container.classList.add("is-active");
// }
container.classList.toggle("is-active");
