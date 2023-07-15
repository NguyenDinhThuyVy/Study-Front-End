window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  imageCover.addEventListener("mousemove", function (e) {
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
  });
});
