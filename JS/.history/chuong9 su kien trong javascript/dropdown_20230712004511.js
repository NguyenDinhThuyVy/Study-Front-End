const dropdownSelect = document.querySelector(".dropdown__select");
// const dropdownList = document.querySelector(".dropdown__list");
// dropdownList.classList.add("show");
dropdownSelect.addEventListener("click", handleClickDropdown);
function handleClickDropdown(e) {
  const dropdownList = document.querySelector(".dropdown__list");
  dropdownList.classList.toggle("show");
  const icon = e.target.querySelector("dropdown__caret.");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
