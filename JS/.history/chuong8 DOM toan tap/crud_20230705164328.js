// thêm xoá sửa node trong Javascript
// 1. Tạo ra Element trong Javascript: document.createElement("tag")
const div1 = document.createElement("div");

// 2. selector.appendChild
// document.body -> thẻ body
// document.querySelector("body")
const body = document.body;
body.appendChild(div);
// Thêm class
div.classList.add("container");
// Thay đổi tên cho class
div.className = "container wrapper";
// Thêm nội dung vào class
div.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, laboriosam error dolor dignissimos aliquam mollitia molestiae quibusdam provident voluptatum, rem recusandae consequuntur in eligendi aut laudantium, cum nesciunt. Laboriosam, accusantium?";
div.innerHTML = `<div class="content"><h3>hihi</h3></div>`;
div.setAttribute("data-name", "zyzy");

// Bài tập tạo ra HTML như đã minh hoạ ở file HTML
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
const cardImage = document.createElement("img");
cardImage.setAttribute(
  "src",
  "https://tse4.mm.bing.net/th?id=OIP.BmowCY0dHjG5AOkT2-MhogHaEK&pid=Api&P=0&h=180"
);
cardImage.classList.add("cardImage");
div2.appendChild(cardImage);

// 3. document.createTextNode
const text = document.createTextNode("Hello my name is Evondev");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);
// 4. element.cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);
// 5. element.hasChildNodes() -> kiểm tra element có phần tử con hay không, có -> true, không thì trả về false
console.log(document.querySelector("h3").hasChildNodes()); // false
