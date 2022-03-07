// --------------- 생성자 기본 틀
// 빵틀
function fishBread(flavor, price) { // 맛과 가격을 입력받아 붕어빵 생성
  this.flavor = flavor;
  this.price = price;
  this.base = "flour"; // 베이스는 밀가루로 동일
}

// 붕어빵
const bread_1 = new fishBread("cream", 1200); // 1200원짜리 크림붕어빵
const bread_2 = new fishBread("redbean", 1000); // 1000원짜리 팥붕어빵
const bread_3 = new fishBread("milk", 1500); // 1500원짜리 우유붕어빵

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);

/* 출력
fishBread { flavor: 'cream', price: 1200, base: 'flour' }
fishBread { flavor: 'redbean', price: 1000, base: 'flour' }
fishBread { flavor: 'milk', price: 1500, base: 'flour' }
*/

// --------------- new 자동 생성 생성자
function User(name) {
  if (!new.target) {
    // new 와 함께 호출하지 않았으면
    return new User(name); // 객체 생성 후 return
  }
  this.name = name;
}

const user_1 = User("john"); // new 가 없어도 잘 생성된다.
console.log(user_1); // User { name: 'john' }
const user_2 = new User("john");
console.log(user_2); // User { name: 'john' }
