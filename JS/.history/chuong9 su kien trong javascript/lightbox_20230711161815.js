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

const template = ` <div class="lightbox">
   <div class="lightbox-content">
     <i class="fa fa-angle-left lightbox-prev"></i>
     <img
       src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80"
       alt=""
       class="lightbox-image"
     />
     <i class="fa fa-angle-right lightbox-next"></i>
   </div>
 </div>`;
const images = document.querySelector(".image");
images.addEventListener("click", handleClickImage(images));
function handleClickImage(event) {
  console.log(event.target);
  // document.body.insertAdjacentHTML("afterbegin", template);
}
