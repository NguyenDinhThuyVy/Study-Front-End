// 1 . Viết chương trình nhập vào năm sinh và in ra số tuổi.
// 2. Viết chương trình đếm ngược thời gian theo từng giây (countdown) dựa vào thời gian đầu vào. Ví dụ thời gian làm bài là 30 phút nếu chạy về  0 thì thông báo đã hết thời gian .
// 3. Viết chương trình có tên là timeSince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại, ví dụ : bạn đang chat với 1 bạn A , sau đó bạn A offline và sau đó vài phút thì hiển thị bạn A vừa online ` 3 phút trước` , ` 3 ngày trước` , `2 tháng trước` , `30 giây trước` , ` 1 năm trước`
// BAI1
function getAge(year) {
  //  currentYear - year
  if (typeof year != "number") {
    console.log("có vẻ như bạn đã nhập sai định dạng tuổi");
    return;
  } else {
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - year;
  }
}
const yourAge = getAge("hihihi");
console.log(`Năm nay tuổi của ban là  ${yourAge} tuổi`);
