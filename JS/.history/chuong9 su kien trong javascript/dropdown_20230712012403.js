const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const icon = document.querySelector(".dropdown__caret");
dropdownSelect.addEventListener("click", handleClickDropdown);
function handleClickDropdown(e) {
  if (dropdownList) {
    dropdownList.classList.toggle("show");
  }
  icon.classList.toggle("fa-caret-up");
  icon.classList.toggle("fa-caret-down");
}
// Dropdownitems
dropdownItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    const text = e.target.querySelector(".dropdown__text").textContent;
    // console.log(text);
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
// document
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    // icon.classList.toggle("fa-caret-up");
    dropdownList.classList.remove("show");
  }
});
