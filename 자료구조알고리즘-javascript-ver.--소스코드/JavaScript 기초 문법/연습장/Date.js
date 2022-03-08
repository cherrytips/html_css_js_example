// --------------- Date 생성자
let date_now = new Date();
let date_str = Date();

console.log(date_now); // 현재 날짜 & 시간
console.log(date_str); // 문자열로 된 현재 날짜 & 시간

let date_ms_1 = new Date(0);
console.log(date_ms_1); // 1970-01-01T00:00:00.000Z
let date_ms_2 = new Date(1000 * 3600 * 24); // 하루 증가
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

let date_string = new Date("2020-01-01");
console.log(date_string); // 2020-01-01T00:00:00.000Z

// month: 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); // UTC 보정
console.log(date_params_1); // 2020-12-31T15:00:00.000Z, 대한민국은 UTC+9
console.log(date_params_2); // 2021-01-01T00:00:00.000Z

// --------------- 날짜 정보 얻기
let date = new Date();

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDay()); // 일요일(0) ~ 토요일(6)

console.log(date.getHours());
console.log(date.getUTCHours());

console.log(date.getTime());
console.log(new Date(date.getTime()));
console.log(date.getTimezoneOffset());

// --------------- 날짜 정보 설정
date = new Date();

console.log(date);

let ms_year = date.setFullYear(2020, 3, 15);
console.log(date); // 2020-04-15T05:21:28.663Z
console.log(new Date(ms_year)); // 2020-04-15T05:21:28.663Z

date.setDate(1);
console.log(date); // 2020-04-01T05:22:22.542Z
date.setDate(0); // 하루 전날로 설정
console.log(date); // 2020-03-31T05:22:39.050Z

date.setHours(date.getHours() + 2);
console.log(date); // 2020-03-31T07:23:19.522Z

// --------------- parse
let ms_parse = Date.parse("2022-03-08T00:00:00.000");

console.log(ms_parse);
console.log(new Date(ms_parse)); // 2022-03-07T15:00:00.000Z

console.log(new Date(Date.parse("2022-03-08T00:00:00.000Z"))); // 2022-03-08T00:00:00.000Z
