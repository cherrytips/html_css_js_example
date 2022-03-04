let list = [
  "john",
  27,
  function hello_func() {
    console.log("hello");
  },
]; // List에 함수 저장

let obj = {
  name: "john",
  age: 27,
  hello_func() {
    console.log("hello");
  },
}; // Object에 함수 저장

function hello_func() {
  console.log("hello");
} // 일반 함수

// 셋 모두 같은 결과값이 출력됨.
hello_func(); // hello
obj.hello_func(); // hello
list[2](); // hello

console.log(typeof hello_func); // function
console.log(typeof obj.hello_func); // function
console.log(typeof list[2]); // function
