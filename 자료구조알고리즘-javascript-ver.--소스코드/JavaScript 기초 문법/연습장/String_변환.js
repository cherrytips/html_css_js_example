// --------------- 문자열 치환 (replace)
let text = "hello, world!!!";
let changed_text = "";

changed_text = text.replace("world", "earth");
console.log(changed_text); // hello, earth!!!

console.log(text.replace("!", "?")); // ! 하나만 변경됨.

console.log(text.replace(/!/g, "?")); // 정규표현식 사용 --> /!/g = "! 를 모두"

// --------------- 문자열 추출
text = "hello, world!!!";

console.log(text.slice(0, 5)); // hello --> 0 이상 5 미만까지 자름.
console.log(text.slice(-4)); // d!!! --> 맨 뒤에서부터 -1

console.log(text.slice(2, 6));
console.log(text.slice(6, 2)); // start 수가 더 크면 아예 잘라오질 못한다.
console.log(text.substring(2, 6));
console.log(text.substring(6, 2)); // 하지만 substring은 내부적으로 변환되어 가능하다.

console.log(text.substr(2, 2)); // 2번째 index에서 2개의 문자열 추출.

// --------------- 문자열 분할
let fruits = "apple banana melon lemon strawberry";

let result = fruits.split(" "); // 공백을 기준으로 쪼갠다
console.log(result);

result.forEach((fruit) => {
  console.log(fruit);
});

text = "hello";

result = text.split("", 3); // 3개까지만 분할 (limit)
console.log(result);
