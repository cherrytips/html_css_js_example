/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
  let employee_id;
  // 라이브러리 사용
  // employee_id = employee.indexOf(Math.max(...employee)) + 1;
  // End

  // 순수 알고리즘
  employee_id = employee[0]; // init value

  for (let i = 1; i < employee.length; i++) {
    if (employee_id < employee[i]) employee_id = employee[i];
  }

  employee_id = employee.indexOf(employee_id) + 1; // 사원번호로 변경
  // End

  return employee_id;
}

/* main code */
let input = [
  // TC: 1
  [3, 7, 9, 6, 1],
  // TC: 2
  [2, 7, 1, 4, 3, 0, 5],
  // TC: 3
  [7, 5, 0, 1, 2, 12, 6],
];
for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
