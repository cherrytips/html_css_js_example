let apple_price = 9;

if (apple_price >= 10) {
  console.log("very expensive :(");
} else if (apple_price < 5) {
  console.log("very cheap :)"); // 출력
} else {
  console.log("nice!");
}

// ---------------
let age = 10;

if (age < 10) console.log("young!");
// 한 줄일 때도 실행은 잘 된다.
else console.log("old!");

// ---------------
age = 20;

if (age < 19) {
  msg = "The user is not an audult";
} else {
  msg = "The user is an audult";
}

console.log(msg); // The user is an audult

// 삼항 연산자
msg_another = age < 19 ? "The user is not an audult" : "The user is an audult";
console.log(msg_another); // The user is an audult
