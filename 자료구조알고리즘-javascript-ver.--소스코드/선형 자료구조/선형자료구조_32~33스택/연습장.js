// Stack(): 생성자 함수
function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 객체 내 데이터 존재 유무
Stack.prototype.isEmpty = function () {
  return this.array.length === 0;
};

// push(): 데이터 추가
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop(): 데이터 삭제
Stack.prototype.pop = function () {
  return this.array.pop();
};

// peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

// size(): 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};

// indexOf(): 매개변수로 넘어온 element 위치 확인
Stack.prototype.indexOf = function (element, position = 0) {
  for (let i = position; i < this.array.length; i++) {
    if (element === this.array[i]) return i;
  }
};

// include(): 데이터 존재 여부 확인
Stack.prototype.include = function (element) {
  for (let i = 0; i < this.array.length; i++) {
    if (this.array[i] === element) return true;
  }

  return false;
};

console.log('--------------------');
let stack = new Stack([1, 2, 3]);
console.log(stack);

let data = stack.getBuffer();
console.log(data);
console.log(data === stack.array);

console.log(stack.isEmpty());
console.log(Object.getOwnPropertyDescriptors(Stack.prototype));

console.log('--------------------');
let stack_1 = new Stack([1, 2]);
console.log(stack_1);

stack_1.push(3);
stack_1.push(4);
stack_1.push(5);
console.log(stack_1);

console.log(stack_1.pop());
console.log(stack_1);

console.log(stack_1.peek());
console.log(stack_1.size());

console.log('--------------------');
