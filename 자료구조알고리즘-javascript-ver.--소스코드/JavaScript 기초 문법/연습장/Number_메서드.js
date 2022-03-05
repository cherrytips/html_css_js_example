// --------------- 형 변환
us = 1e-6;

console.log(us.toString()); // 0.000001
console.log(typeof us.toString()); // string
console.log(typeof String(us)); // string
console.log(typeof (us + "")); // string

let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2); // 1.543999999999997
console.log((num_1 - num_2).toFixed(3)); // 1.544
console.log((num_1 - num_2).toPrecision(3)); // 1.54

// --------------- 형 변환
// NaN (Not a Number)
console.log(Number.isNaN(0.123)); // false
console.log(Number.isNaN(123 / "hello")); // true

// 무한대 판별
console.log(Number.isFinite(-123)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("hello")); // false

// 정수 or 실수 변경
console.log(Number.parseInt("125px")); // 125
console.log(parseInt("125px")); // 125
console.log(Number.parseFloat("1.25em")); // 1.25
console.log(parseFloat("1.25em")); // 1.25
