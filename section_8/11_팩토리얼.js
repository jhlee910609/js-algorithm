function solution(N) {
  function dfs(M) {
    if (M === 1) {
      return 1;
    } else {
      return M * dfs(M - 1);
    }
  }
  return dfs(N);
}

console.log(solution(5) === 120);
