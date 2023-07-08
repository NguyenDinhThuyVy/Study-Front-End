const tabItem = document.querySelectorAll(".tab-item");
[...tabItem].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  event.target.classList.add("active");
}
