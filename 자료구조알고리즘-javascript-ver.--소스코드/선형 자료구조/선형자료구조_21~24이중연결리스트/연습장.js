// Node(): data와 point인 next, prev를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoubleLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
  return this.length;
};

DoubleLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 정방향 연결현황 출력
DoubleLinkedList.prototype.printNode = function () {
  process.stdout.write('head --> ');
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} --> `);
  }
  console.log('null');
};

// 역방향 연결현황 출력
DoubleLinkedList.prototype.printNodeInverse = function () {
  let temp = [];

  process.stdout.write('null <-- ');
  for (let node = this.head; node !== null; node = node.next) {
    process.stdout.write(`${node.data} <-- `);
  }
  console.log('tail');
};

// 이중 연결 리스트 마지막에 노드 추가
DoubleLinkedList.prototype.append = function (value) {
  let node = new Node(value);

  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  this.length++;
};

// position(index) 위치에 value 값을 가지는 노드 삽입
DoubleLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }

  let node = new Node(value),
    cur = this.head,
    index = 0,
    prev;

  if (position === 0) {
    // 맨 처음 위치일 경우
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = cur;
      cur.prev = node;
      this.head = node;
    }
  } else if (position === this.length) {
    // 마지막 위치일 경우
    cur = this.tail;
    cur.next = node;
    node.prev = cur;
    this.tail = node;
  } else {
    // position 위치에 노드 삽입
    while (index++ < position) {
      prev = cur;
      cur = cur.next;
    }

    node.next = cur;
    prev.next = node;

    cur.prev = node;
    node.prev = prev;
  }

  this.length++;
};

// value 값을 가지는 노드 삭제
DoubleLinkedList.prototype.remove = function (value) {
  let cur = this.head,
    prev = cur;

  while (cur.data !== value && cur.next !== null) {
    prev = cur;
    cur = cur.next;
  }

  // 마지막까지 값이 없을 경우
  if (cur.data !== value) {
    return null;
  }

  if (cur === this.head) {
    // head 삭제일 경우
    this.head = cur.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (cur === this.tail) {
    // tail 삭제일 경우
    this.tail = cur.prev;
    this.tail.next = null;
  } else {
    prev.next = cur.next;
    cur.next.prev = prev;
  }

  this.length--;

  return cur.data;
};

// position(index)에 따른 노드 삭제
DoubleLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) return null;

  let cur = this.head,
    index = 0,
    prev;

  if (position === 0) {
    this.head = cur.next;
    if (this.length === 1) this.tail = null;
    else this.head.prev = null;
  } else if (position === this.length - 1) {
    cur = this.tail;
    this.tail = cur.prev;
    this.tail.next = null;
  } else {
    while (index++ < position) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = cur.next;
    cur.next.prev = prev;
  }

  this.length--;

  return cur.data;
};

DoubleLinkedList.prototype.indexOf = function (value) {
  let current = this.head,
    index = 0;

  while (current !== null) {
    if (current.data === value) {
      return index;
    }

    current = current.next;
    index++;
  }

  return -1;
};

DoubleLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let dll = new DoubleLinkedList();
let node;
console.log(dll);

node = new Node(123);
dll.head = node;
dll.tail = node;
dll.length++;
console.log(dll);

node = new Node(456);
dll.tail.next = node;
node.prev = dll.tail;
dll.tail = node;
dll.length++;
console.log(dll);

let dll_1 = new DoubleLinkedList();

dll_1.append(1);
dll_1.append(10);
dll_1.append(100);

dll_1.printNode();
dll_1.printNodeInverse();

let dll_2 = new DoubleLinkedList();

dll_2.insert(5);
dll_2.insert(25);
dll_2.insert(125);

dll_2.printNode();
dll_2.printNodeInverse();

dll_2.insert(10, 2);
dll_2.insert(100, 4);
dll_2.printNode();
dll_2.printNodeInverse();

console.log('--------------------------------------------------------');

console.log(dll_2.remove(5), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.remove(125), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.remove(25), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();

console.log('--------------------------------------------------------');

dll_2.insert(7, 2);
dll_2.insert(17, 3);
dll_2.printNode();
dll_2.printNodeInverse();

console.log(dll_2.removeAt(1), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();
console.log(dll_2.removeAt(2), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();

console.log(dll_2.remove2(7), 'removed');
dll_2.printNode();
dll_2.printNodeInverse();
