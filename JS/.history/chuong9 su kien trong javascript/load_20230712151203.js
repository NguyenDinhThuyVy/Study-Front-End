// document.addEventLisener("DOMContentLoaded") -> khi mà Dom load hay html load css load tới js load
window.addEventListener("load", function () {
  console.log("window.addEventListener(load)");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded");
});
// window.addEventLisener("load") -> muốn web load xong hoàn toàn mới làm một việc gì đó
