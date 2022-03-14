// 3개의 알파벳(A, B, C)으로 단어를 만드는 경우의 수 (재귀함수)
let input = ["A", "B", "C"];
let count = 0;

// s: 시작위치, r: 종료위치
function permutation(arr, s, r) {
  // 1. 재귀함수를 멈춰야할 조건
  if (s === r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 할 부분
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]]; // swap
    permutation(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
  }

  return count;
}

console.log("경우의 수: " + permutation(input, 0, input.length - 1));

/*
재귀함수를 사용하면 알파벳의 개수가 늘더라도 시간복잡도가 크게 증가하지 않습니다.
 */
