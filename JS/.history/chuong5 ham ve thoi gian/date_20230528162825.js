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
// console.log(new Date(0));
// // 4 cách sử dụng new Date
// new Date() -> in ra ngày giờ hiện tại
// new Date(timestamp) -> dựa vào timestamp để in ra ngày giờ
// new Date( date string) ->
//  new Date (year , month, day, hours, minutes , seconds , miliseconds)
console.log(new Date(1685263962015));
console.log(new Date("Sun May 28 2023 15:52:42 GMT+0700 (Giờ Đông Dương)"));
console.log(new Date(2023, 6, 1, 23, 23, 23, 23));
//  tháng sẽ tính từ số 0 nên suy ra tháng 6 là số 5
//  Các hàm get trong Date
const birthday = new Date(2002, 11, 26);
// in ra year
console.log(birthday.getFullYear());
// in ra month
//  getmonth() :  0- 11
console.log(birthday.getMonth());
// in ra day of month : 1-> 31
console.log(birthday.getDate());
//  in ra day of week
// 0 - 6 : 0 : sunday
console.log(birthday.getDay());
//  in ra hours
console.log(birthday.getHours());
// in ra minutes
console.log(birthday.getMinutes());
// In ra seconds
console.log(birthday.getSeconds());
//  in ra timestamp
console.log(birthday.getTime());
//  Các hàm set trong Date
// Seminar các hàm get trong new Date mục đích để thiết lập lại các giá trị về year , month , day , hours , minutes, seconds
// set FullYear
console.log(birthday.setFullYear(2003));
// set Month
console.log(birthday.setMonth(8));
console.log(`My birthday : ${birthday}`);
// UTC
// in ra year
console.log(birthday.getUTCFullYear());
// in ra month
//  getmonth() :  0- 11
console.log(birthday.getUTCMonth());
// in ra day of month : 1-> 31
console.log(birthday.getUTCDate());
//  in ra day of week
// 0 - 6 : 0 : sunday
console.log(birthday.getUTCDay());
//  in ra hours
console.log(birthday.getUTCHours());
// in ra minutes
console.log(birthday.getUTCMinutes());
// In ra seconds
console.log(birthday.getUTCSeconds());
//
console.log(now.toDateString()); //Sun May 28 2023
console.log(now.toTimeString()); //16:28:17 GMT+0700 (Giờ Đông Dương)
