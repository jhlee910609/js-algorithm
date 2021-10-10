function solution(input, limitTime) {
  let maxScore = -1; // 최대 점수
  console.log(input, limitTime);

  function dfs(L, time) {
    if (time > limitTime) {
      return;
    }

    if (L === input.length) {
    } else {
      dfs(L + 1, time + input[L][1]);
      dfs(L + 1, time);
    }
  }

  dfs(0, 0);

  return maxScore;
}

console.log(
  solution(
    [
      [5, 20],
      [10, 5],
      [25, 12],
      [15, 8],
      [6, 3],
      [7, 4],
    ],
    20
  )
);
