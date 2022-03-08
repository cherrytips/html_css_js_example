function dateSub(old_date, new_date) {
  return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
  return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
  let date_1 = new Date("2022-01-01");
  let date_2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) {
    callback_func(date_1, date_2);
  }
  return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms");
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms");
// 밀리세컨드로 변환해 계산하는것이 빠르다.
