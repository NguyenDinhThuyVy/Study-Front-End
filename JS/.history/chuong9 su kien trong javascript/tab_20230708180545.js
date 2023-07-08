const tabItem = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // Xóa hết tất cả các class active ở các tab-item
  [...tabItem].forEach((item) => item.classList.remove("active"));
  //  sau đó add class actiev vào tab hiện tại là tab mình đang click
  event.target.classList.add("active");
  const tabNumber = parseInt(event.target.dataset.tab);
  [...tabContent].forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-tab") === tabNumber) {
    }
  });
  [...tabContent][tabNumber - 1].classList.add("active");
}
