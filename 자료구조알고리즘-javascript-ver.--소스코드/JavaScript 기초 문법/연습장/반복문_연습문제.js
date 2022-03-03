// 반복문 for를 이용하여 0부터 10까지의 정수 중 짝수의 합을 구한 뒤 출력하는 코드를 작성하시오.
const UNTIL_NUM = 10;
let sum = 0;

// 구현 시작
for (let i = 0; i <= UNTIL_NUM; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
// 구현 끝

console.log(sum); // 30

// ---------------
// 반복문 for 2개를 이용하여 2~9단까지 출력해주는 코드를 작성하시오.
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

/* output
2 x 1 = 2
...
9 x 9 = 81
*/
