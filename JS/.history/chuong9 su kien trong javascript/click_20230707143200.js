// addEventListener
const button = document.querySelector(".button");
function handleClick() {
  console.log("click me");
}
// Lỗi sai khi dùng function vào eventListener
// button.addEventListener("click", handleClick());
button.addEventListener("click", handleClick);
