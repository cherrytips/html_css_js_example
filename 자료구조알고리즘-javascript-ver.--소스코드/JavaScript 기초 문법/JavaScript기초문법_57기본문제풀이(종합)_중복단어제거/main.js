/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {
  let new_arr = [];

  // 반복문 사용
  /*
  for (let i = 0; i < arr.length; i++) {
    if (new_arr.indexOf(arr[i]) === -1) new_arr.push(arr[i]);
  }
  */

  // Set 사용 1
  /*
  new Set(arr).forEach((item) => {
    new_arr.push(item);
  });
  */

  // Set 사용 2
  new_arr = Array.from(new Set(arr));

  return new_arr;
}

/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
