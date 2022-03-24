/* 큐 만들기 */

/* user code */
function answer(cmds) {
  let result = [];
  let queue = [];

  for (let i = 0; i < cmds.length; i++) {
    let split = cmds[i].split(' ');

    switch (split[0]) {
      case 'enqueue':
        queue.push(parseInt(split[1]));
        break;
      case 'dequeue':
        if (queue.length === 0) result.push(-1);
        else result.push(queue.shift());
        break;
      case 'empty':
        if (queue.length === 0) result.push(1);
        else result.push(0);
        break;
      case 'front':
        if (queue[0] === undefined) result.push(-1);
        else result.push(queue[0]);
        break;
      case 'back':
        if (queue[queue.length - 1] === undefined) result.push(-1);
        else result.push(queue[queue.length - 1]);
        break;
      case 'size':
        result.push(queue.length);
        break;
      default:
        break;
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  ['enqueue 1', 'enqueue 2', 'dequeue', 'dequeue', 'dequeue'],

  // TC: 2
  ['enqueue 3', 'enqueue 4', 'enqueue 5', 'enqueue 6', 'front', 'back', 'dequeue', 'size', 'empty'],

  // TC: 3
  [
    'enqueue 7',
    'enqueue 8',
    'front',
    'back',
    'size',
    'empty',
    'dequeue',
    'dequeue',
    'dequeue',
    'size',
    'empty',
    'dequeue',
    'enqueue 9',
    'empty',
    'front',
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
