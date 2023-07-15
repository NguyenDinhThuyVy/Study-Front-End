window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  imageCover.addEventListener("mousemove", function (e) {
    const image = document.querySelector(".image1");
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = " width: auto; heigth:auto; max-heigth:unset";
  });
});
