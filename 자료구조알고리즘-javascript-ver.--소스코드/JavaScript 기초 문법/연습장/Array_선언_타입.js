// --------------- 배열 선언
let arr_1 = new Array(10); // 10 크기의 빈 배열.
let arr_2 = []; // 빈 배열.

console.log(arr_1); // [ <10 empty items> ]
console.log(arr_2); // []

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length); // 3
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // 각 index의 과일명 출력.

fruits[1] = "banana"; // index == 1 (두번째) 의 값을 "banana"로 변경.
console.log(fruits); // [ 'apple', 'banana', 'melon' ]

// --------------- 배열 타입 확인
let num = 123.456;
let str = "here i am";
fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num)); // false
console.log(Array.isArray(str)); // false
console.log(Array.isArray(fruits)); // true

delete fruits[1];
console.log(fruits); // [ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length); // 3
// delete를 사용하면 데이터만 삭제되고, 빈 공간으로 남아있는 문제점이 있음!
