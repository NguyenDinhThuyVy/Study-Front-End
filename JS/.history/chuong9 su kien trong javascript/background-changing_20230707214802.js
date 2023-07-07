const colors = [
  "#ea96b2",
  "#df9fea",
  "#9fa8ea",
  "#9fd9ea",
  "#9fead6",
  "#a7ea9f",
  "#e1ea9f",
  "#eab39f",
];
const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
function handleChangeColor() {
  // document.body.setAttribute("style", "background-color: red");
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
