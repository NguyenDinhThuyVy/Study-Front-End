const button = document.querySelector(".button");
// mousemove , mouseover , mouseenter, mouseleave
// mouusemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });

// mouseover -> khi rê chuôttj vào phần tử mà bạn muốn và phần tử con của nó
// button.addEventListener("mouseover", function () {
//   console.log("mouseover");
// });

// mouseenter -> chỉ thực hiện khi rê chuôtj vào chính phần tử mà bạn muốn không bao gồm phần tử con
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });

// mouseleave: nó sẽ chạy khi rê chuột vào phần tử rồi rê ra ngoài
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });

// pageX, pageY , clinetX, clientY
document.addEventListener("mousemove", function (e) {
  // console.log(`pageX: ${e.pageX}`);
  // console.log(`clientX: ${e.clientX}`);
  // console.log(`pageY: ${e.pageY}`);
  // console.log(`clientY: ${e.clientY}`);
});
// clinetY : nó sẽ lấy tọa theo viewport
// pageY : nó sẽ lấy tọa độ của document, khi có scroll thì nó sẽ thay đổi
// X: theo chiều ngang
// Y: theo chiều dọc
