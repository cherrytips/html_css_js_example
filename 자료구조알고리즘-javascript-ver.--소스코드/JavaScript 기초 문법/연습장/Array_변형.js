// --------------- 배열 정렬, 반전
let nums = [1, -1, 4, 5, 2, 0];

console.log(nums.reverse()); // 역순으로 변형

console.log(nums.sort()); // 오름차순 정렬
console.log(nums.reverse()); // sort 후 reverse = 내림차순 정렬

// --------------- 배열 --> 문자열 변환
let fruits = ["apple", "orange", "banana", "melon"];
let str = fruits.join(); // apple,orange,banana,melon
console.log(str);

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon

let result = str_separator.split(";");
console.log(result); // [ 'apple', 'orange', 'banana', 'melon' ]
