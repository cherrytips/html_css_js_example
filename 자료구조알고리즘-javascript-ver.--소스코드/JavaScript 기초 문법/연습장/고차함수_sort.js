// --------------- sort 고차함수 : 숫자
let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort());
console.log(nums.reverse());

let ascending_order = function (x, y) {
  return x - y;
}; // 오름차순 정렬 --> 리턴값이 양수일 때 위치 바꿈

let descending_order = function (x, y) {
  return y - x;
}; // 내림차순 정렬 --> 리턴값이 양수일 때 위치 바꿈

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));

// --------------- sort 고차함수 : 문자
let fruits = ["apple", "Orange", "orange", "melon"];

let ascending_order_1 = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x > y) return 1;
  else if (x < y) return -1;
  else return 0;
};

let descending_order_1 = function (x, y) {
  x = x.toUpperCase();
  y = y.toUpperCase();

  if (x < y) return 1;
  else if (x > y) return -1;
  else return 0;
};

console.log(fruits.sort(ascending_order_1));

fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(descending_order_1));

// --------------- sort 고차함수 : 공용
let ascending_order_2 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  // 오름차순
  return x > y ? 1 : -1; // x 가 크면 자리 바꿈
};

let descending_order_2 = function (x, y) {
  if (typeof x === "string") x = x.toUpperCase();
  if (typeof y === "string") y = y.toUpperCase();

  // 내림차순
  return x < y ? 1 : -1; // y 가 크면 자리 바꿈
};

nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(ascending_order_2));

nums = [1, -1, 4, 0, 10, 20, 12];
console.log(nums.sort(descending_order_2));
