/**
 * 이분검색 => 결정 알고리즘
 */
function solution(input, M) {
  let lt = Math.max(...input);
  let rt = input.reduce((prev, cur) => prev + cur, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    let cnt = 0;
    let temp = 0;
    for (let i = 0; i < input.length; i++) {}
  }
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === 17);
