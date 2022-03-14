// 팩토리얼 f(n!)
let result;

function factorial(n) {
  // Stop
  if (n === 0 || n === 1) return 1;

  // Recursive
  return factorial(n - 1) * n;
}

result = factorial(5);
console.log(result);
