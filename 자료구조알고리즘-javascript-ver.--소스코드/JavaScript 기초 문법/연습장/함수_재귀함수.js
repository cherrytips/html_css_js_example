// --------------- 기본 재귀함수
function recursive(num) {
  if (num === 0) return 0; // exit code : 탈출 코드
  console.log(num); // 3 2 1
  return num + recursive(--num); // num을 전위연산으로 1 감소시켜 전달
}
// 3 + (2 + (1 + 0)) = 6

console.log("recursive: " + recursive(3)); // 6

// --------------- Factorial
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(--num);
}
// 4 * 3 * 2 * 1 * 1 = 24

console.log("factorial: " + factorial(4));
