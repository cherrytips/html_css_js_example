/* 접시 꺼내기 */

/* user code */
function answer(str) {
  let result = [];
  let order = str.split('').sort();
  let dish = [];

  str = str.split('');

  dish.push(order.shift());
  result.push(0);

  while (str.length !== 0) {
    if (dish[dish.length - 1] === str[0]) {
      str.shift();
      dish.pop();
      result.push(1);
    } else if (dish[dish.length - 1] !== str[0]) {
      if (order.length === 0) return [];

      dish.push(order.shift());
      result.push(0);
    }
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  'bacd',

  // TC: 2
  'dabc',

  // TC: 3
  'edcfgbijha',
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
function answer(str) {
  let result = [];
  let order = str.split('').sort();
  let dish = [];

  str = str.split('');

  dish.push(order.shift());
  result.push(0);

  while (str.length !== 0) {
    if (dish[dish.length - 1] === str[0]) {
      str.shift();
      dish.pop();
      result.push(1);
    } else if (dish[dish.length - 1] !== str[0]) {
      if (order.length === 0) return [];

      dish.push(order.shift());
      result.push(0);
    }
  }

  return result;
}
