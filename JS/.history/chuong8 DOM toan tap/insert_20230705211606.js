// 1. element.insertAdjacentText(position, text)-> chèo vào 4 vị trí trong tag
const h3 = document.querySelector("h3");
// h3.insertAdjacentText("position", "text");
// position : beforebegin , afterbegin, beforeend, afterend
h3.insertAdjacentText("beforebegin", "beforebegin");
h3.insertAdjacentText("afterbegin", "afterbegin");
h3.insertAdjacentText("beforeend", "beforeend");
h3.insertAdjacentText("afterend", "afterend");

// insertAdjacentElement
const strong = document.createElement("strong");
strong.classList.add("bold");
