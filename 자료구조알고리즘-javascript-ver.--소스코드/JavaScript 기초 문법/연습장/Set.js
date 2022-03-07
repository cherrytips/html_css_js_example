// --------------- Set 기본
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("hello");

console.log(set);
console.log(num);
console.log(str); // 문자 l 중복으로 하나만 들어감.
/* 출력
Set(0) {}
Set(5) { 1, 2, 3, 4, 5 }
Set(4) { 'h', 'e', 'l', 'o' }
*/

set.add(1).add(1).add(10).add(20); // 1 중복으로 하나만 들어감.
console.log(set); // Set(3) { 1, 10, 20 }

console.log(set.has(10)); // true
console.log(set.has(2)); // false

set.delete(1);
console.log(set); // Set(2) { 10, 20 }

for (const item of str) {
  console.log(item);
}
