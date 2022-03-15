/* 나무 그리기 */

/* user code */
function answer(height) {
  let str = "";

  for (let i = 0; i < height; i++) {
    str += "\n";
    for (let j = 0; j < height - i - 1; j++) str += " ";
    for (let k = 0; k < i * 2 + 1; k++) str += "*";
  }

  str += "\n";

  return str;
}

/* main code */
let input = [
  // TC: 1
  3,

  // TC: 2
  5,

  // TC: 3
  7,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
