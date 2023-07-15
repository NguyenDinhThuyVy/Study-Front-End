//  js sự kiện xảy ra đầu tiên theo thứ tự keydown > keypress > keyup
// 1.keydown : hoạt động  khi nhấn bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // e.key : key nhập vào
  // console.log(e.key);
  // Khuyên cáo ít nên dùng keycode và which
  // console.log(e.keyCode);
  // console.log(e.which);
  // ascii
  // /*  Bài tập nhỏ
  // if (e.key === "Enter") {
  //   console.log("You are press the enter");
  // } else {
  //   console.log(e.key);
  // }
  // */
  // if (e.key === "Home") {
  //   console.log("say hi");
  // }
});

// 2.keyup:Sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  // console.log(e.key);
});

// 3.keypress: sự kiện này xảy ra khi các bạn nhấn phím
// keypress sẽ ignore các phím như delete , mũi tên, page up, page dơn, home, end, ctrl, alt, shift,esc
input.addEventListener("keypress", function (e) {
  // console.log(e.key);
  //// không hoạt động
  // if (e.key === "Home") {
  //   console.log("say hi");
  // }
});

// 4.change : xảy ra khi gõ xong nhấn Enter hoặc nhấn chuột ra ngoài 1 lần
input.addEventListener("change", function (e) {
  // console.log("hihi");
});

// 5.focus
input.addEventListener("focus", function (e) {
  console.log("input is focusing");
});
