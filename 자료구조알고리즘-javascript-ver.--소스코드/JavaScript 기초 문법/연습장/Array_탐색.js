let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); // 1
console.log(fruits.indexOf("Orange")); // 없으므로 -1
console.log(fruits.indexOf("orange", 2)); // 2번째부터 찾으므로 3

console.log(fruits.lastIndexOf("orange")); // 3
console.log(fruits.lastIndexOf("orange", -3)); // 1
console.log(fruits.lastIndexOf("orange", 0)); // -1

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("mango")); // false
