// removeEventListener
const button = document.querySelector(".button");
function handleMouseMove(e) {
  console.log("yeu");
}
document.addEventListener("mousemove", handleMouseMove);
button.addEventListener("click", function () {
  document.removeEventListener("mousemove", function (e) {
    console.log("yeu");
  });
});
