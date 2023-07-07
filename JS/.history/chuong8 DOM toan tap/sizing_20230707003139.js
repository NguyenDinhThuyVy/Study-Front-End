// 1. offsetWidth (trả ra độ rộng thực sự) , offsetHeight , offsetLeft, offsetParent, offsetTop
const boxed = document.querySelector(".boxed");
// console.log(boxed.offsetWidth);
function log(value) {
  console.log(value.offsetWidth);
}
log(boxed);
