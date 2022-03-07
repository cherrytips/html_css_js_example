// --------------- Map 기본
let map = new Map();

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");
console.log(map); // Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

console.log(map.get(123)); // 456
console.log(map.get("name")); // 456
console.log(map.get(true)); // 456
console.log(map.size);

map.delete(123);
console.log(map); // Map(2) { 'name' => 'john', true => 'bool_type' }
map.clear();
console.log(map); // Map(0) {}

map.set(123.789).set(false, "bool_type").set("fruit", "banana"); // chaining 가능
console.log(map);
/* 출력
Map(3) {
  123.789 => undefined,
  false => 'bool_type',
  'fruit' => 'banana'
}
*/

// --------------- Map 반복문 = 객체와 동일
const recipe_juice = new Map([
  ["strawberry", 50],
  ["banana", 100],
  ["ice", 150],
]);

for (const item of recipe_juice.keys()) {
  console.log(item); // key만 출력
}

for (const amount of recipe_juice.values()) {
  console.log(amount); // value만 출력
}

for (const entity of recipe_juice) {
  console.log(entity); // 요소대로 출력
}

// --------------- Map <-> Objcet 변환
console.log(recipe_juice);
let recipe_juice_obj = Object.fromEntries(recipe_juice); // Object로 변환
let recipe_juice_kv = Object.entries(recipe_juice_obj); // Map으로 변환

console.log(recipe_juice_obj);
console.log(recipe_juice_kv);
