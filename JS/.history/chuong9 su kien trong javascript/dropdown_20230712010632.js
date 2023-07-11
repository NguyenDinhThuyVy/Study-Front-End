const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
dropdownSelect.addEventListener("click", handleClickDropdown);
function handleClickDropdown(e) {
  const dropdownList = document.querySelector(".dropdown__list");
  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
  const icon = document.querySelector(".dropdown__caret");
  icon.classList.toggle("fa-caret-down");
  icon.classList.toggle("fa-caret-up");
}
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    // console.log(text);
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
