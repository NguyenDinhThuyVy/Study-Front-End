// 1. offsetWidth (trả ra độ rộng thực sự) , offsetHeight , offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
// console.log(boxed.offsetWidth);
function log(value) {
  console.log(value);
}
log(boxed.offsetWidth); //độ rộng của boxed = 200
log(boxed.offsetHeight); //chiều cao của boxed = 200
log(boxed.offsetLeft); // vị trí của nó so với bên trái nếu sử dụng margin left : 50 px thì sẽ hiện ra giá trị 50px
log(boxed.offsetTop); //vị trí của nó so với phía trên
log(boxed.offsetParent); // lấy ra phần tử cha để lấy giá trị của phần tử cha

// 2.clientWidth , clientHeight , clietLeft , clinetTop
