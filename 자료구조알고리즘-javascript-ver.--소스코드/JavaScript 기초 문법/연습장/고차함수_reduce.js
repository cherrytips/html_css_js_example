let nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\tindex");

let sum = nums.reduce((accumulator, item, index, array) => {
  console.log(accumulator, "\t\t", item, "\t\t", index);
  call_count++;
  return accumulator + item;
}, 0); // initial 없으면 1부터 시작
/*
result	value	index
0 		 1 		 0
1 		 2 		 1
3 		 3 		 2
6 		 4 		 3
10 		 5 		 4
*/

console.log("call_count :" + call_count); // call_count :5
console.log("sum :" + sum); // sum :15
