window.addEventListener("load", function () {
  const imageCover = document.querySelector(".image-cover");
  const imageWrapper = document.querySelector(".image-wrapper");
  const image = document.querySelector(".image1");
  let imageWraperWidth = imageWrapper.offsetWidth;
  let imageWraperHeight = imageWrapper.offsetHeight;
  imageCover.addEventListener("mousemove", function (e) {
    // console.log(e.pageX);
    const pX = e.pageX;
    const pY = e.pageY;
    image.style = "width:auto; height:auto; max-height:unset";
    let imageWidth = image.offsetWidth;
    let imageHeight = image.offsetHeight;
    let spaceX = (imageWidth / 2 - imageWraperWidth) * 2;
    let spaceY = (imageHeight / 2 - imageWraperHeight) * 2;
    // console.log(imageWidth);
    imageWidth = imageWidth + spaceX;
    imageHeight = imageHeight + spaceY;
    let radioX = imageWidth / imageWraperWidth / 2;
    let radioY = imageHeight / imageWraperHeight / 2;
    let x = (pX - imageWrapper.offsetLeft) * radioX;
    let y = pY * radioY;
    image.style = `left:${-x}px;  top:${-y}px; width:auto;  height:auto;  max-height:unset; transform: none `;
  });
  imageCover.addEventListener("mouseleave", function (e) {
    image.style = "";
  });
});
