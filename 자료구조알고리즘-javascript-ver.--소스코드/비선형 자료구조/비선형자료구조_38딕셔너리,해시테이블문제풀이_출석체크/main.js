/* 출석 체크 */

/* user code */
function answer(class_1, class_2) {
  let result = [];
  let check = {};

  for (let i = 0; i < class_1.length; i++) {
    check[class_1[i]] = 1;
  }

  for (let i = 0; i < class_2.length; i++) {
    if (check[class_2[i]] !== undefined) check[class_2[i]]++;
  }

  for (const key in check) {
    if (check[key] === 2) result.push(key);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  [
    ['Kali', 'Oliver', 'Naomi'],
    ['Oliver', 'Naomi', 'Maya'],
  ],

  // TC: 2
  [
    ['Roxy', 'Olga', 'Kara', 'Nana'],
    ['Oliver', 'Roxy', 'Kara', 'Nana', 'Maya'],
  ],

  // TC: 3
  [
    ['Roxy', 'Ravi', 'Nana', 'Rei', 'Karis', 'Mana', 'Naomi'],
    ['Olga', 'Nana', 'Rei', 'Naomi', 'Kali', 'Ravi', 'Kara'],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
