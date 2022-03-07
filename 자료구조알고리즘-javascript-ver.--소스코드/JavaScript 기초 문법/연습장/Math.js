// --------------- 최대/최소값
console.log(Math.max(1, -1)); // 1
console.log(Math.min(1, -1)); // -1

console.log(Math.max(1, -1, 5, 23, 17, -99)); // 23
console.log(Math.min(1, -1, 5, 23, 17, -99)); // -99

let nums = [1, -1, 5, 23, 17, -99];
console.log(Math.max(nums)); // NaN

// 배열 min/max 시에는 apply 또는 스프레드 문법(...) 사용
console.log(Math.max.apply(null, nums)); // 23
console.log(Math.min.apply(null, nums)); // -99

console.log(Math.max(...nums)); // 23
console.log(Math.min(...nums)); // -99

// --------------- 절대값
console.log(Math.abs(1)); // 1
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-Infinity)); // Infinity

// --------------- property (프로퍼티)
console.log(Math.E); // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

// --------------- 랜덤 random
for (let i = 0; i < 10; i++) {
  console.log(`random${i + 1} :` + parseInt(Math.random() * 10)); // 0 ~ 1 사이의 랜덤값이므로 값을 곱해 범위 지정 가능.
}

// --------------- 제곱/제곱근
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8

console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(2)); // 1.4142135623730951

// --------------- 소수점 처리
// round : 반올림
console.log(Math.round(3.5)); // 4
console.log(Math.round(-2.3)); // -2
console.log(Math.round(-2.7)); // -3

// ceil : 올림
console.log(Math.ceil(3.7)); // 4
console.log(Math.ceil(-2.3)); // -2
console.log(Math.ceil(-2.7)); // -2

// floor : 내림
console.log(Math.floor(3.7)); // 3
console.log(Math.floor(-2.3)); // -3
console.log(Math.floor(-2.7)); // -3
