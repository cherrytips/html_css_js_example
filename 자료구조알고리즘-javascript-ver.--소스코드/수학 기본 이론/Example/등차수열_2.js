// 등차수열 f(n) = f(n-1)+2
// 재귀함수 구현
let result = 0;

// s: 초기값, t: 등차, number: 반복횟수
function recursive(s, t, number) {
  // Stop 조건
  if (number === 0) return 0;
  if (number === 1) return s;

  // Recursive 부분
  return recursive(s, t, number - 1) + t;
}

result = recursive(3, 2, 5);
console.log(result);
