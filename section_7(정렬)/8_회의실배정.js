function solution(timeTable) {
  let ans = 1;
  timeTable.sort((a, b) => {
    return a[1] - b[1];
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
