// 등비수열 f(n) = f(n-1)*2
// 재귀함수 구현
let result;

// s: 초기값, t: 등비, number: 반복횟수
function forloop(s, t, number) {
  // Stop
  if (number === 0) return 0;
  if (number === 1) return s;

  // Recursive
  return forloop(s, t, number - 1) * t;
}

result = forloop(3, 2, 5);
console.log(result);
