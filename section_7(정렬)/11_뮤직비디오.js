/**
 * 이분검색 => 결정 알고리즘
 */
function solution(input, M) {
  if (!input || !input.length) return;

  const count = (songs, capacity) => {
    let cnt = 1; // 최소 1장은 만듬
    let sum = 0;

    for (let i = 0; i < songs.length; i++) {
      if (sum + songs[i] > capacity) {
        cnt++;
        sum = songs[i];
      } else {
        sum += songs[i];
      }
    }
    return cnt;
  };

  let lt = Math.max(...input);
  let rt = input.reduce((prev, cur) => prev + cur, 0);
  let ans;

  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    if (count(input, mid) <= M) {
      ans = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  console.log(ans);
  return ans;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === 17);
