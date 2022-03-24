/* 카드 뽑기 */

/* user code */
function answer(n) {
  let result = [];
  let dequeue = [];

  for (let i = 1; i <= n; i++) dequeue.push(i);

  while (dequeue.length !== 0) {
    let card;

    result.push(dequeue.shift());

    if (dequeue.length === 0) break;

    card = dequeue.shift();
    dequeue.push(card);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4,

  // TC: 2
  7,

  // TC: 3
  10,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
