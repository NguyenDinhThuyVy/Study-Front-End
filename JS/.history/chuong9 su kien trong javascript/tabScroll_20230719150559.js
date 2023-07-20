window.addEventListener("load", function () {
  const tabItems = document.querySelectorAll(".tab-scorll-item");
  const tabList = document.querySelector(".tab-scorll-list");
  const tab = document.querySelector(".tab-scorll");
  const tabOffsetLeft = tab.offsetLeft;
  [...tabItems].forEach((item) =>
    item.addEventListener("click", handleTabClick)
  );
  function handleTabClick(e) {
    [...tabItems].forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    let leftSpacing = e.target.offsetLeft - tabOffsetLeft;
    tabList.scroll(leftSpacing / 0.2, 0);
  }
});
