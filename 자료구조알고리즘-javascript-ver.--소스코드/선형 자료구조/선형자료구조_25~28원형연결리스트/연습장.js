// Node(): data와 point를 가지고 있는 객체
function Node(data) {
  this.data = data;
  this.next = null;
}

// LinkedList(): head와 length를 가지고 있는 객체
function CircularLinkedList() {
  this.head = null;
  this.length = 0;
}

// size(): 연결 리스트 내 노드 개수 확인
CircularLinkedList.prototype.size = function () {
  return this.length;
};

// isEmpty(): 객체 내 노드 존재 여부 파악
CircularLinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

// 순환하며 노드 출력, 마지막 노드는 다시 head를 가리킴.
CircularLinkedList.prototype.printNode = function () {
  process.stdout.write('head -> ');

  if (this.length !== 0) {
    process.stdout.write(`${this.head.data} -> `);
    for (let node = this.head.next; node !== this.head; node = node.next) {
      process.stdout.write(`${node.data} -> `);
    }
  }

  console.log('head');
};

// 원형 연결 리스트의 마지막에 노드 추가.
CircularLinkedList.prototype.append = function (value) {
  let node = new Node(value),
    cur = this.head;

  if (this.head === null) {
    this.head = node;
  } else {
    while (cur.next != this.head) {
      cur = cur.next;
    }
    cur.next = node;
  }

  node.next = this.head;

  this.length++;
};

// position 위치에 value 값을 가지는 노드 추가.
CircularLinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) return false;

  let node = new Node(value),
    cur = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = cur;

    if (this.isEmpty()) {
      cur = node;
    } else {
      while (cur.next !== this.head) {
        cur = cur.next;
      }
    }

    this.head = node;
    cur.next = this.head;
  } else {
    while (index++ < position) {
      prev = cur;
      cur = cur.next;
    }

    node.next = cur;
    prev.next = node;

    if (node.next === null) node.next = this.head;
  }

  this.length++;

  return true;
};

// value 값을 가지는 노드 삭제.
CircularLinkedList.prototype.remove = function (value) {
  let cur = this.head,
    prev = cur,
    data;

  while (cur.data !== value && cur.next !== this.head) {
    prev = cur;
    cur = cur.next;
  }

  if (cur.data !== value) return null;

  data = cur.data;
  if (cur === this.head) {
    while (cur.next !== this.head) cur = cur.next;

    this.head = this.head.next;
    cur.next = this.head;
  } else {
    prev.next = cur.next;
  }

  this.length--;

  return data;
};

// position 위치에 있는 노드 삭제.
// 삭제된 값 return
CircularLinkedList.prototype.removeAt = function (position = 0) {
  if (position < 0 || position >= this.length) return null;

  let cur = this.head,
    index = 0,
    prev,
    data;

  if (position === 0) {
    data = cur.data;

    while (cur.next !== this.head) cur = cur.next;

    this.head = this.head.next;
    cur.next = this.head;
  } else {
    while (index++ < position) {
      prev = cur;
      cur = cur.next;
    }

    data = cur.data;

    prev.next = cur.next;
  }

  this.length--;

  return data;
};

// value 값을 가지는 노드의 index 반환.
// remove2 에서 removeAt()과 결합하여 사용.
CircularLinkedList.prototype.indexOf = function (value) {
  let cur = this.head,
    index = 0;

  do {
    if (cur.data === value) return index;

    index++;
    cur = cur.next;
  } while (cur !== this.head);

  return -1;
};

// indexOf() + removeAt()
CircularLinkedList.prototype.remove2 = function (value) {
  let index = this.indexOf(value);
  return this.removeAt(index);
};

let cll = new CircularLinkedList();
let node;
console.log(cll);

console.log('--------------------------------');

node = new Node(123);
cll.head = node; // head 설정
node.next = cll.head; // 자기 자신을 가리킨다. (초기 셀프 순환)
cll.length++; // 원형 연결 리스트 길이 +1
console.log(cll);

cll.printNode();

console.log('--------------------------------');

cll.append(456); // 456 추가
cll.printNode();

console.log('--------------------------------');

cll.insert(789);
cll.printNode();
cll.insert(10, 3);
cll.printNode();
cll.insert(100, 1);
cll.printNode();

console.log('--------------------------------');

console.log(cll.remove(100), 'removed');
cll.printNode();

console.log('--------------------------------');

console.log(cll.removeAt(3), 'removed');
cll.printNode();

console.log('--------------------------------');

console.log(cll.remove2(789), 'removed');
cll.printNode();
console.log(cll.remove2(456), 'removed');
cll.printNode();

console.log('--------------------------------');
