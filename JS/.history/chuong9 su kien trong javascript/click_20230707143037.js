// addEventListene
const button = document.querySelector(".button");
function handleClick() {
  console.log("click me");
  button.addEventListener("click", handleClick);
}
