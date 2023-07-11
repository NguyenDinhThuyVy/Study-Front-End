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
const template = ` <div class="lightbox">
   <div class="lightbox-content">
     <i class="fa fa-angle-left lightbox-prev"></i>
     <img
       src="${images}"
       alt=""
       class="lightbox-image"
     />
     <i class="fa fa-angle-right lightbox-next"></i>
   </div>
 </div>`;
images.forEach((item) => item.addEventListener("click", handleClickImage));
function handleClickImage(event) {
  // console.log(event.target);
  document.body.insertAdjacentHTML("afterbegin", template);
}
