//1.textContent -> lấy nội dung nằm trong selector đó
const spiner = document.querySelector(".container");
//  Thay đổi text content
// spiner.textContent =
//   " what a day, now i can get the load my feet. I'll sleep alike a baby";
// console.log(spiner.textContent);

// 2.innerText
console.log(spiner.innerText); // loaij bỏ các khoảng trắng và không lấy được display: none
console.log(spiner.textContent); // vs code như sao là hiện lên y như vậy ( sử dụng phổ biến hơn)
