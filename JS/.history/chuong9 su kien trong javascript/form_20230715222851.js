// 1.keydown : hoạt động  khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // e.key : key nhập vào
  // console.log(e.key);
  // Khuyên cáo ít nên dùng keycode và which
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii
  if (e.key === "Enter") {
    console.log("You are press the enter");
  } else {
    console.log(e.key);
  }
});

// 2.keyup:Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  console.log(e.key);
});
