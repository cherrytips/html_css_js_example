/**
 * 배열
 */
const data = 'a';
const num = 0;
const boolean = true;

// 0... 1... 2... 3...
const arr = [data, num, boolean, 'name'];

console.log(arr.length); // 4
console.log(arr[0]); // 0
console.log(typeof arr); // object
// 배열은 객체처럼 취급된다.

arr[4] = 'Test';
arr[0] = '첫번째'; // 이미 들어가있는 요소도 변경 가능하다.
arr[1] = 'Second'; // 이미 들어가있는 요소도 변경 가능하다.

console.log(arr);

arr.push('마지막');
arr.unshift('첫번째 또 추가');

console.log(arr);

for (let index = 0; index < arr.length; index++) {
  console.log(arr[index]);
}

arr.forEach((element) => {
  console.log(element);
});
