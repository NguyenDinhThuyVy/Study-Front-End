const dropdownSelect = document.querySelector(".dropdown__select");
// const dropdownList = document.querySelector(".dropdown__list");
// dropdownList.classList.add("show");
dropdownSelect.addEventListener("click", handleClickDropdown);
function handleClickDropdown(e) {
  const dropdownList = document.querySelector(".dropdown__list");
  dropdownList.classList.toggle("show");
  if(e.target.matches(".show")){}
  const icon = document.querySelector("dropdown__caret");
  icon.classList.toggle("fa-caret-down");
  icon.classList.toggle("fa-caret-up");}
}
