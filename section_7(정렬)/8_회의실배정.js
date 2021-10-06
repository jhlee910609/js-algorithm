function solution(timeTable) {
  let ans = 1;
  // 1. 이차원배열 정렬할 때, 보통 아래 로직과 같이 짠다.
  timeTable.sort((a, b) => {
    if (a[1]) return a[1] - b[1];
  });

  let cur = timeTable[0];
  for (let i = 1; i < timeTable.length; i++) {
    const next = timeTable[i];
    if (cur[1] <= next[0]) {
      ans++;
      cur = next;
    }
  }

  return ans;
}

console.log(
  "ans:",
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
