// 4개의 숫자 카드에서 2개를 뽑는 경우의 수 (for문 사용)
let input = [1, 2, 3, 4]; // 4C2
let count = 0;

function combination(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
}

combination(input);
console.log("경우의 수: " + count);
