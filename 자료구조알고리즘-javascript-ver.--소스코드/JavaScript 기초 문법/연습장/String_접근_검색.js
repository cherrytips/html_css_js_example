// 개행문자 \n 의 길이도 1로 취급됨
let str = "hello\nworld\n!!!";
console.log(str.length);

// 개별 문자 접근
console.log(str.charAt(1)); // e
console.log(str.charCodeAt(1)); // 101
console.log(str[0]); // h

// 문자열 검색
let text = "hello, world!!!";
console.log(text.indexOf("l")); // 2
console.log(text.indexOf("l", 5)); // 5번째 위치부터 l 탐색, 10 출력
console.log(text.lastIndexOf("l")); // 뒤에서부터 l 탐색

console.log(text.includes("hello")); // true
console.log(text.includes("HeLlo")); // false

console.log(text.startsWith("ello")); // false
console.log(text.endsWith("!!!")); // true

console.log(text.toUpperCase()); // String 대문자화
console.log(text.toLowerCase()); // String 소문자화
