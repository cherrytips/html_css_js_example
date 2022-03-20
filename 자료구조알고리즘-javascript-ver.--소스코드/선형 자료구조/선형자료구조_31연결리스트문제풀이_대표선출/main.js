/* user code */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

function answer(n, m, k) {
  let result = [];
  let ll = new LinkedList();
  let cur, prev;

  // 원탁 초기화
  for (let i = 1; i <= n; i++) {
    let node = new Node(i);

    if (ll.head === null) {
      ll.head = node;
      cur = ll.head;
    } else {
      cur.next = node;
      cur = cur.next;
    }
  }
  cur.next = ll.head;
  prev = cur; // prev = last
  cur = prev.next; // cur = ll.head

  // 첫 m번째 사람 제외
  for (let i = 1; i < m; i++) {
    prev = cur;
    cur = cur.next;
  }

  prev.next = cur.next;
  result.push(cur.data); // 제외된 사람 추가
  cur = prev.next;

  // 제외된 사람의 다음 k번째 사람 제외 반복
  while (prev !== cur) {
    for (let i = 1; i < k; i++) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = cur.next;
    result.push(cur.data); // 제외된 사람 추가
    cur = prev.next;
  }

  // 마지막 남은 사람 추가
  result.push(cur.data);

  return result;
}

/* main code */
let input = [
  // TC: 1
  [8, 2, 3],

  // TC: 2
  [10, 2, 3],

  // TC: 3
  [20, 5, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1], input[i][2]));
}
