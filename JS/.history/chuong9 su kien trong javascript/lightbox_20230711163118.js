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
  const template = ` <div class="lightbox">
   <div class="lightbox-content">
     <i class="fa fa-angle-left lightbox-prev"></i>
     <img
       src="${event.target.getAttribute}"
       alt=""
       class="lightbox-image"
     />
     <i class="fa fa-angle-right lightbox-next"></i>
   </div>
 </div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}
