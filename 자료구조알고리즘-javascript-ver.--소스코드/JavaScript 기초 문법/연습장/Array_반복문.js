let fruits = ["apple", "orange", "melon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log(fruit);
}

for (const key in fruits) {
  console.log(key);
  console.log(fruits[key]);
}

fruits.forEach((element) => {
  console.log(element);
});
