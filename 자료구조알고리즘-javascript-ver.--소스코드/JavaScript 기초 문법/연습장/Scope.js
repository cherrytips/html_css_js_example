let x = 1;
let y = 2;
let z = 3;

console.log(x); // 1
console.log(y); // 2

{
  let x = 3;
  let y = 4;

  console.log(x); // 3
  console.log(y); // 4
  console.log(z); // 3
}

console.log(x); // 1
console.log(y); // 2

// ---------------
let A = 1;
let B = 2;

{
  let C = 3;
  let D = 4;

  console.log(A); // 1
  console.log(C); // 3
}

// console.log(C); // ReferenceError: C is not defined

// ---------------
A = 1;

{
  let C = 3;
  let D = 4;
  console.log(C); // 3
  {
    let C = 5;
    let D = 6;
    console.log(C); // 5
  }
}
