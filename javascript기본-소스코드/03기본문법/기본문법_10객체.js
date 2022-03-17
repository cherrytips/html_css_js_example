/**
 * 객체
 */

// 나라는 사람을 프로그래밍 언어로 표현한다면?
const hyeonSeok = {
  // key = property, value = 속성
  name: {
    first: 'jang',
    last: 'hyeon-seok',
  },
  age: 10,
  gender: 'male',
  introduce: function () {
    return 'hello my name is hyeonseok';
  },
  hobby: ['youtube', 'football'],
};

const cherrytips = {
  // key = property, value = 속성
  name: {
    first: 'cherry',
    last: 'tips',
  },
  age: 20,
  gender: 'male',
  introduce: function () {
    return 'hello my name is cherrytips';
  },
  hobby: ['youtube', 'coding', 'driving'],
};

console.log(hyeonSeok['name']['first']);
console.log(hyeonSeok.name.last);
console.log(hyeonSeok.age);
console.log(hyeonSeok.introduce());

console.log('\n');
console.log(cherrytips.name);
console.log(cherrytips.age);
console.log(cherrytips.introduce());
console.log('My hobby: ' + cherrytips.hobby);
