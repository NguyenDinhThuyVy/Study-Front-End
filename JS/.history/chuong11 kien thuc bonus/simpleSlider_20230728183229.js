window.addEventListener("load", function () {
  const slider = document.querySelector(".slider");
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const dotItem = document.querySelectorAll(".slider-dot-item");
  const nextBtn = document.querySelector(".slider-next");
  const prevBtn = document.querySelector(".slider-prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const sliderLength = sliderItems.length;
  // console.log(sliderLength);
  // console.log(sliderItemWidth);
  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });
  [...dotItem].forEach((item) =>
    item.addEventListener("click", function (e) {
      [...dotItem].forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
      const slideIndex = parseInt(e.target.dataset.index);
      index = slideIndex;
      postionX = -1 * index * sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
    })
  );
  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= sliderLength - 1) {
        index = sliderLength - 1;
        return;
      }
      postionX = postionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      postionX = postionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${postionX}px)`;
      index--;
    }
    [...dotItem].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }
});
