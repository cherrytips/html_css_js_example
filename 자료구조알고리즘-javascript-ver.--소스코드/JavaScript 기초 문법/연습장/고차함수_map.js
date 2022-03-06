// --------------- for loop
let nums = [1, 2, 3, 4, 5];
let use_for_loop = [];

for (let i = 0; i < nums.length; i++) {
  use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop); // [ 2, 4, 6, 8, 10 ]

// --------------- map 사용
let use_map = nums.map((item) => {
  return item * 2;
});
console.log(use_map); // [ 2, 4, 6, 8, 10 ]
