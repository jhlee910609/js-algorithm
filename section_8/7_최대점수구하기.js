function solution(input, limitTime) {
  let maxScore = -1; // 최대 점수

  function dfs(L, time = 0, totalScore = 0) {
    if (time > limitTime) {
      return;
    }

    if (L === input.length) {
      maxScore = Math.max(maxScore, totalScore);
    } else {
      dfs(L + 1, time + input[L][1], totalScore + input[L][0]);
      dfs(L + 1, time, totalScore);
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
