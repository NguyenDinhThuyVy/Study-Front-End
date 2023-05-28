const now = new Date();
// built-in object những cái đã tích hợp sẵn trong javascript
console.log(now);
// Sat May 27 2023 23:28:06 GMT+0700 (Giờ Đông Dương)
//  Timezone : GMT+0700 (Giờ Đông Dương)
// Second : 06
// Minute: 28
// Hour : 23
// Year :2023
// Month : May
// Day: 27
// Day of the week : Sat
// Timestamp & Epoch time
// Unix time
//  timestamp tính ra kết quả là miliseconds
console.log(now.getTime()); // print timestamp
console.log(new Date(0));
