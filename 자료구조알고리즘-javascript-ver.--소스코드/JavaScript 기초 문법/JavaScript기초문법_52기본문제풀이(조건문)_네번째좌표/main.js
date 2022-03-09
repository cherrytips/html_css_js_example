/*** 5. 네번째 좌표 ***/

/* user code */
function answer(x_arr, y_arr) {
  let result = [];
  let x_dot = x_arr[0];
  let y_dot = y_arr[0];

  if (x_dot === x_arr[1]) x_dot = x_arr[2];
  else if (x_dot === x_arr[2]) x_dot = x_arr[1];
  if (y_dot === y_arr[1]) y_dot = y_arr[2];
  else if (y_dot === y_arr[2]) y_dot = y_arr[1];

  result.push(x_dot);
  result.push(y_dot);
  
  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  // TC: 2
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  // TC: 3
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
