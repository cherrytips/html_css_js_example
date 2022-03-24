/* 프린터 출력 */

/* user code */
function answer(priorities, select) {
  let result = 1;
  let max = Math.max(...priorities);

  if (priorities.length === 1) return result;

  while (1) {
    if (priorities[0] === max) {
      priorities.shift();
      max = Math.max(...priorities);

      if (select === 0) return result;

      result++;
      select--;
    } else {
      priorities.push(priorities.shift());

      select--;
      if (select === -1) select = priorities.length - 1;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [[3], 0],

  // TC: 2
  [[3, 4, 5, 6], 2],

  // TC: 3
  [[1, 1, 5, 1, 1, 1], 0],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
