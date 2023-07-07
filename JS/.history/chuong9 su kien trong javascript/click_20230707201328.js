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
// event : e
span.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("click span");
});
document.body.addEventListener("click", function () {
  console.log("click body");
});

// bubbling : nổi bọt
//  sự kiện click chạy từ trong ra ngoài muốn ngăn hiện tưởng nội bọt ta sự dụng event.stopPropagation()
