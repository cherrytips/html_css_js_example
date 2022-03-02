console.log(true || false); // true

console.log(Boolean(0 || false)); // false

console.log(Boolean(123 || false)); // true

console.log(Boolean(123 && 0)); //false

console.log(Boolean(false && true)); // false

console.log(Boolean(true && 3)); // true

console.log(Boolean(0 && false)); // false

console.log(false); // false

console.log(!123); // false
