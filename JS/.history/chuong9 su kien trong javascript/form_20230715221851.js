// 1.keydown : hoạt động  khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // e.key : key nhập vào
  // console.log(e.key);
  // Khuyên cáo ít nên dùng keycode và which
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii
  if (e.key === "enter") {
    console.log("bạn đã nhấn enter");
  }
});
