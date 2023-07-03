// 1. slector.getAttribute("attribute") ->lấy ra giá trị của attribute selector
// slector là 1 cái không phải 1 llist
// attribute -> thuôjc tính : href , id , class , src , style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
  console.log(item.getAttribute("class"));
});
// console.log(li);

// 2.selector.setAttribute("attribute" , value) -> set giá trị cho attribute nào đó cho selector
// link.setAttribute("target", "_blank"); // _blank để mở ra 1 tag mới
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => {
  item.setAttribute("target", "_blank");
});

// 3.selector.removeAttribute("attribute" ) -> xoas attribute của selector
const p = document.getElementById("spiner");
p.removeAttribute("style");

// selector.hasAttribute("attribute") -> Kiểm tra selector có attribute nào đó hay không nếu có trả về true ngược lại trả về false
console.log(p.hasAttribute("class"));
