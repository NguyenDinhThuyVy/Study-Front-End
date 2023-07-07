// Viết 1 function tạo ra thông báo
function creatNotification(title = "Welcome to website") {
  const template = `    <div class="noti">
<img src="https://source.unsplash.com/random" alt="" class="noti-image" />
<div class="noti-content">
  <h3 class="noti-title">${title}</h3>
  <p class="noti-desc">
    Lorem ipsum dolor sit amet consec tetur, adipisicing elit. Quisquam
    dolor sit amet consec
  </p>
</div>
</div>`;
  document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
  "Welcome to my first website",
  "Say hi ! Have A Nice Day",
  "My name is zyzy",
  " Hello.Today is perfect",
  "I am a frontend developer",
];
const timer = setInterval(function () {
  const check = document.querySelector(".noti");
  if (check) check.parentNode.removeChild(check);
  // Lấy random title từ mảng randomData
  // Công thức random trong mảng bất kỳ: array[Math.floor(Math.random() * array.length)]
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  creatNotification(title);
}, 5000);
