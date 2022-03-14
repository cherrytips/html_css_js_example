// 3개의 알파벳(A, B, C)으로 단어를 만드는 경우의 수 (for문)
let input = ["A", "B", "C"];
let count = 0;

function permutation(arr) {
  // for i --> 첫번째 위치시킬 요소 a, b, c [i, 0, 0]
  for (let i = 0; i < arr.length; i++) {
    // for j --> 두번째 위치시킬 요소 a, b, c [i, j, 0]
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      // for k --> 세번째 위치시킬 요소 a, b, c [i, j, k]
      for (let k = 0; k < arr.length; k++) {
        if (i === k || j === k) continue;

        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}

permutation(input);

/*
알파벳이 하나씩 늘어날 때마다 중첩되는 내부 for문이 하나씩 추가됩니다.
따라서 재귀함수를 통해 구현하는 것이 바람직합니다.
*/
