/*
<div class="modal">
      <div class="modal-content">
        <i class="fa fa-times modal-close"></i>
      </div>
    </div>
*/
const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;
const button = document.querySelector(".button1");
button.addEventListener("click", handleClickModal);
function handleClickModal(e) {
  // console.log("it fucntion when i click button");
  document.body.insertAdjacentHTML("afterbegin", template);
}
document.body.addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.matches(".modal-close")) {
    // handle close modal here
    const modal = document.querySelector(".modal");
    console.log(modal);
    modal.parentNode.removeChild(modal);
    modal.classList.remove("modal");
  } else if (event.target.matches(".modal")) {
    event.target.parentNode.removeChild(event.target);
  }
});
