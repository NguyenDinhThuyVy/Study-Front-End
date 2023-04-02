"4.5"; // 4.5 parseFloat
"4"; // 4 parseint
// Number(value) ->number
console.log(Number(4.5)); // 4.5
console.log(Number(4)); // 4
console.log(Number("abacde")); // NaN
// NaN not a Number
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(false)); // 0
console.log(Number("")); // 0
console.log(Number(NaN)); // NaN
// falsy values
console.log(Number(true)); //1
// String(value) ->string
console.log(String(4.5)); // "4.5"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String(false)); // "false"
console.log(String(true)); // "true"
// Boolean(value) -> true or false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
// Những giá trị true
console.log(Boolean("hihi")); // true
console.log(Boolean(true)); // true
