// --------------- break
let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  text += i;
}
console.log(text); // 012

// --------------- continue
text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  text += i;
}
console.log(text); // 012456789

// --------------- Label (사용 지양할 것)
end: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i + " * " + j + " = " + i * j);
    break end; // 최상단 end Label 로 이동.
  }
}
