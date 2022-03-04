function hello_func() {
  console.log("hello");
}

function hi_func() {
  console.log("hi");
}

let obj = {
  name: "john",
  age: 27,
  func: hello_func,
};

hello_func(); // hello 출력
hi_func(); // hi 출력
obj.func(); // hello 출력

obj.func = hi_func; // Object의 func를 hi_func 함수로 변경.
obj.func(); // 변경 후 hi 출력
