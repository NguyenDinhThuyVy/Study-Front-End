// removeEventListener
const button = document.querySelector(".button");
document.addEventListener("mousemove", function (e) {
  console.log("yeu");
});
button.addEventListener("click", function () {
  document.removeEventListener("mousemove", function (e) {
    console.log("yeu");
  });
});
