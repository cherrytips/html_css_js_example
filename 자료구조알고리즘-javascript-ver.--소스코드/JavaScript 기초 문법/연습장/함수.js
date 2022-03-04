// --------------- Default 함수
function print_add(x, y = 10) {
  console.log(x + y);
}

print_add(10); // 20
print_add(10, 20); // 30

// --------------- Dynamic Parameter 함수
function print_min() {
  console.log(arguments); // 입력된 매개변수 모두 출력
}

print_min(10, 20, 30); // [Arguments] { '0': 10, '1': 20, '2': 30 }

// --------------- 함수 반환에 관하여
function add(x, y) {
  return x + y; // 반환 + 종료
  console.log("hello"); // Unreachable 'console' after 'return'. 접근 불가능한 코드.
}

let result = add(10, 20);
console.log(result);

// ---------------
function check_age(age) {
  if (age >= 18) return true;
  else return false;
}

console.log(check_age(15)); // false
console.log(check_age(20)); // true
