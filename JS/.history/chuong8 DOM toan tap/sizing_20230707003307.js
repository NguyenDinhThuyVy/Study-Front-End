// 1. offsetWidth (trả ra độ rộng thực sự) , offsetHeight , offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
// console.log(boxed.offsetWidth);
function log(value) {
  console.log(value);
}
log(boxed.offsetWidth); //độ rộng của boxed = 200
