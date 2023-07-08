const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  event.target.classList.add("fa-times");
  event.target.classList.remove("fa-bars");
  menu.classList.toggle("is-show");
}
