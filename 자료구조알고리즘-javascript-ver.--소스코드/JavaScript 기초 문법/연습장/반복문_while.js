/*
let i = 0;
while (i < 3) {
  console.log(i);
} // 내 맥북에서 이륙하는 소리가 난다. 0 무한 반복 출력
*/

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
} // 0, 1, 2

// i = 0;
do {
  console.log(i); // 3
  i++;
} while (i < 3);
// do .. while 은 무조건 한 번 수행!

console.log(i); // 4
