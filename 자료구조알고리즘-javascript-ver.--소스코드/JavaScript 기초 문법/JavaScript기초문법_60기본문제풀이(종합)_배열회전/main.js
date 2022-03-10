/* 8. 배열 회전 */
// reverse() 사용 금지

/* user code */
function answer(user) {
  let reverse = [];

  // O(n)
  /*
  for (let i = user.length - 1; i >= 0; i--) {
    reverse.push(user[i]);
  }
  */

  // O(n/2)
  for (let i = 0; i < user.length / 2; i++) {
    let temp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = temp;
  }
  reverse = user;

  return reverse;
}

/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
