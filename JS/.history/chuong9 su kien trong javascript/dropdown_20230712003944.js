const dropdownSelect = document.querySelector(".dropdown__select");
// const dropdownList = document.querySelector(".dropdown__list");
// dropdownList.classList.add("show");
dropdownSelect.addEventListener("click", handleClickDropdown);
function handleClickDropdown(e) {
  const dropdownList = document.querySelector(".dropdown__list");
  dropdownList.classList.add("show");
  if (e.target.matches("dropdown__list .show")) {
    const show = document.querySelector(".show");
    show.parentNode.removeChild(".show");
  }
}
