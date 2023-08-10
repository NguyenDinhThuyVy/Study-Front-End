// 1. Bind
const student = {
  firstName: "nguyen dinh",
  lastName: "thuy vy",
  fullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
// $
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const button = $(".button");
button.addEventListener("click", student.fullName.bind(student));
// console.log(selectors(".button"));
function log(level, time, message) {
  console.log(`${level} ${time} ${message}`);
}
// function logErrToday(message) {
//   log("Error", "Today", message);
// }
// partial function
// logErrToday("Server OK!");
const logErrToday = log.bind(null, "Error", "Today");
logErrToday("Server OK!");
