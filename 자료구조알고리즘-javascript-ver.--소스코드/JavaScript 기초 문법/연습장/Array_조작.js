// --------------- LIFO-Back
let fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.push("banana"); // 배열 끝에 banana 추가
console.log(fruits); // [ 'apple', 'orange', 'melon', 'banana' ]
console.log(fruits.length); // 4
console.log(ret); // 4 == push 후 배열의 길이

ret = fruits.pop(); // 배열 끝 원소 삭제
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
console.log(ret); // banana

// --------------- LIFO-Front
ret = fruits.unshift("banana"); // 배열 시작에 banana 추가
console.log(fruits); // [ 'banana', 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 4
console.log(ret); // 4 == unshift 후 배열의 길이

ret = fruits.shift(); // 배열 시작 원소 삭제
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 3
console.log(ret); // banana

// --------------- splice
ret = fruits.splice(1);
console.log(ret); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple' ]

fruits = ["apple", "orange", "melon", "strawberry"];
ret = fruits.splice(1, 1);
console.log(ret); // [ 'orange' ]
console.log(fruits); // [ 'apple', 'melon', 'strawberry' ]

ret = fruits.splice(1, 1, "mango", "kiwi"); // 잘라냄과 동시에 요소 삽입
console.log(ret); // [ 'melon' ]
console.log(fruits); // [ 'apple', 'mango', 'kiwi', 'strawberry' ]

// --------------- slice
fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1)); // [ 'orange', 'melon' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]

console.log(fruits.slice(1, 2)); // index 가 1 이상 2 미만
console.log(fruits); // [ 'apple', 'orange', 'melon' ]

// --------------- concat
let fruits_add = ["cherry", "guava"];

console.log(fruits.concat(fruits_add)); // [ 'apple', 'orange', 'melon', 'cherry', 'guava' ]
console.log(fruits); // [ 'apple', 'orange', 'melon' ]
