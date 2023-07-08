const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(event) {
  // event.stopPropagation();
  event.target.classList.toggle("fa-times");
  event.target.classList.toggle("fa-bars");
  menu.classList.toggle("is-show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  // event.stopPropagation();
  // toggle.classList.toggle("fa-times");
  // toggle.classList.toggle("fa-bars");
  // menu.classList.toggle("is-show");
  // event.target.matches
  // selector.contains : Kiểm tra element có chứa element khác không
  if (!menu.contains(event.target) && !event.target.matches(".menu-toggle")) {
    menu.classList.remove("is-show");
  }
}
