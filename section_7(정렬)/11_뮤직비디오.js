/**
 * 이분검색 => 결정 알고리즘
 */
function solution(input, M) {
  if (!input || !input.length) return;

  let lt = Math.max(...input);
  let rt = input.reduce((prev, cur) => prev + cur, 0);
  let mid;

  while (lt < rt && rt > lt) {
    mid = parseInt((lt + rt) / 2);
    let cnt = 0;
    let temp = 0;

    for (let i = 0; i < input.length; i++) {
      temp += input[i];
      if (temp >= mid) {
        cnt++;
        temp = input[i];
      }
    }

    if (cnt === M) {
      console.log(mid);
      break;
    } else {
      if (cnt < M) {
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
      cnt = 0;
      temp = 0;
    }
  }
  return mid;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === 17);
