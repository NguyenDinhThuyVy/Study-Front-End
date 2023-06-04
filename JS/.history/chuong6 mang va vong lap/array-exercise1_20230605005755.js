// 1 . Đảo ngược 1 chuỗi. Vd : " My name is zyzy"
// const ex1 = ["My name is zyzy"];
function reverseString(str) {
  if (!str) return null;
  else {
    // split(""); -> chuyển chuỗi thành mảng
    const NewStr = str.split(" ").reverse();
    // join nối mảng thành chuỗi
    const joinStr = NewStr.join(" ");
    return joinStr;
  }
}
console.log(reverseString("My name is zyzy"));
// 2 . Đảo ngược một chuỗi bao gồm các kí tự . Ví du "i love" -> "evol i"
function reverseWord(str) {
  if (!str) return null;
  const newStr = str.split("").reverse();
  const joinStr = newStr.join("");
  return console.log(joinStr);
}
reverseWord("he love you");
// 3. In hoa chữ cái đầu trong chũ ví dụ : " my name is evondev" -> "My Name Is Evondev"
function capitalizeStr(str) {
  if (!str) return null;
}
