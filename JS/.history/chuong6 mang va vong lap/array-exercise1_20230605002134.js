// 1 . Đảo ngược 1 chuỗi. Vd : " My name is zyzy"
// const ex1 = ["My name is zyzy"];
function reverseString(str) {
  if (!str) return null;
  else {
    // split(""); -> chuyển chuỗi thành mảng
    const NewStr = str.split(" ").reverse();
    // join nối mảng thành chuỗi
    const joinStr = NewStr.join(" ");
    console.log(joinStr);
  }
}
reverseString("My name is zyzy");
