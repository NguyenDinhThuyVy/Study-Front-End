// addEventListener
const button = document.querySelector(".button");
function handleClick() {
  console.log("click me");
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick());
// Đúng
button.addEventListener("click", handleClick);
// or
// button.addEventListener("click", function () {});

const span = document.querySelector(".button span");
