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
document.head.appendChild(meta);
