let users = [
  { name: "bob", age: 17, job: false },
  { name: "alice", age: 20, job: false },
  { name: "john", age: 27, job: true },
];

// --------------- find()
let find_job = users.find((user) => {
  return user.job === false;
});
console.log(find_job); // { name: 'bob', age: 17, job: false }

let find_age = users.find((user) => {
  return user.age >= 19;
});
console.log(find_age); // { name: 'alice', age: 20, job: false }
// find() 는 단 하나의 값만 반환한다!!

// --------------- filter()
let filter_job = users.filter((user) => {
  return user.job === false;
});
console.log(filter_job);
/*
[
  { name: 'bob', age: 17, job: false },
  { name: 'alice', age: 20, job: false }
]
*/

let filter_age = users.filter((user) => {
  return user.age >= 19;
});
console.log(filter_age);
/*
[
  { name: 'alice', age: 20, job: false },
  { name: 'john', age: 27, job: true }
]
*/