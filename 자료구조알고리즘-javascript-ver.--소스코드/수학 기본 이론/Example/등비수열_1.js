// 등비수열 f(n) = f(n-1)*2
// for문 구현
let result;

// s: 초기값, t: 등비, number: 반복횟수
function forloop(s, t, number) {
  let acc = 1;

  if (number === 0) return s;
  for (let i = 1; i <= number; i++) {
    if (i === 1) acc *= s;
    else acc *= t;
    console.log(`${i}: ` + acc);
  }

  return acc;
}

result = forloop(3, 2, 5);
console.log(result);
