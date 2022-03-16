// 생성자 속성 정의
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// prototype을 이용한 Person 메서드 정의
Person.prototype.isAudult = function () {
  return this.age > 18; // 성인 판별 여부 return
};

// 객체 생성
const p1 = new Person("bob", 26); // bob, 26세
const p2 = new Person("alice", 16); // alice, 16세

console.log(p1); // Person { name: 'bob', age: 26 }
console.log(p2); // Person { name: 'alice', age: 16 }

console.log(p1.isAudult()); // true
console.log(p2.isAudult()); // false
