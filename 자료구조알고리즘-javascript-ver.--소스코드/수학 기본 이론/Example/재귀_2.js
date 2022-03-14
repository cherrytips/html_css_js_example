// 4개의 숫자 카드에서 2개를 뽑는 경우의 수 (재귀함수 사용)
let input = [1, 2, 3, 4]; // 4C2
let output = [];
let count = 0;

// data: output으로 넘겨줄 데이터 s: 시작위치, idx: 현재 위치 r: 선택될 개수
function combination(arr, data, s, idx, r) {
  if (s === r) {
    count++;
    console.log(data);
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination(arr, data, s + 1, i + 1, r);
  }

  return count;
}

console.log("경우의 수: " + combination(input, output, 0, 0, 2));
