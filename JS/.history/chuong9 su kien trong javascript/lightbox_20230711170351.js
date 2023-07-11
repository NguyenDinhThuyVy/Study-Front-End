/**
 * <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
 */
const images = document.querySelectorAll(".content img");
images.forEach((item) => item.addEventListener("click", handleClickImage));
function handleClickImage(event) {
  // console.log(event.target);
  const image = event.target.getAttribute("src");
  const template = ` <div class="lightbox">
   <div class="lightbox-content">
     <i class="fa fa-angle-left lightbox-prev"></i>
     <img
       src="${image}"
       alt=""
       class="lightbox-image"
     />
     <i class="fa fa-angle-right lightbox-next"></i>
   </div>
 </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
let index = 0;
document.body.addEventListener("click", function (e) {
  const lightImage = document.querySelector(".lightbox-image");
  let lightSrc = "";
  if (e.target.matches(".lightbox")) {
    const lightbox = document.querySelector(".lightbox");
    lightbox.parentNode.removeChild(lightbox);
  } else if (e.target.matches(".lightbox-next")) {
    lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
      (item) => item.getAttribute("src") === lightSrc
    );
    console.log(index);
  } else if (e.target.matches(".lightbox-prev")) {
  }
});
