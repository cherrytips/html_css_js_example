for (let i = 0; i < 3; i++) {
  console.log(i);
} // 0, 1, 2

for (let i = 10; i < 3; i++) {
  console.log(i);
} // 아무것도 출력되지 않음 --> 조건 부적합

let num = 0;
for (; num < 2; ) {
  console.log(num);
  num++;
} // 0, 1

// --------------- 2중 for문
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`${i} + ${j} = ${i + j}`);
  }
}
/*
0 + 0 = 0
0 + 1 = 1
0 + 2 = 2
1 + 0 = 1
1 + 1 = 2
1 + 2 = 3
2 + 0 = 2
2 + 1 = 3
2 + 2 = 4
*/

// --------------- for .. in
const person = { fname: "John", lname: "Bob", age: 25 };

let text = "";
for (const x in person) {
  text += person[x] + " ";
}
console.log(text); // John Bob 25

// --------------- for .. of
let language = "JavaScript";
text = "";
for (const x of language) {
  text += x;
  console.log(x);
} // JavaScript (각 글자 사이 줄바꿈\n)
