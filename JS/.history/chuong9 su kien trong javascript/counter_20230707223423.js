const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counterNumber = document.querySelector(".counter-number");
let counterValue = parseInt(counterNumber.textContent);

buttonPlus.addEventListener("click", function () {
  counterValue++;
  counterNumber.textContent = counterValue;
});
