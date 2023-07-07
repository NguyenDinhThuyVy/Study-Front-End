// document.title -> thẻ title của trang web
console.log(document.title);
// document.title = "Say Hi";
// console.log(document.title);
// document.head
console.log(document.head);
// {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
// document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);

// insertBefore
// parentNode.insertBefore(newnode,existingnode) -> exsitingnode : là cái node đã có sẵn mục đích sẽ đưa newnode đứng trước existingnode
const boxed = document.querySelector(".boxed");
document.body.insertBefore(
  boxed,
  document.querySelector("h3").nextElementSibling
);
// insertAdjacentElement
// document.querySelector("h3").insertAdjacentElement("beforebegin", boxed);

// replaceChild
const span = document.createElement("span");
const template = ` <p class="noti-desc">
Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
dolor sit amet consec
</p>`;
const body = document.body;
// body.appendChild(span);
span.insertAdjacentHTML("afterbegin", template);
document.body(re);
