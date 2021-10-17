function solution(N) {
  function dfs(M) {
    console.log(M);
    if (M < 0) {
      return 1;
    } else {
      return (M - 1) * (M - 2);
    }
  }
  return dfs(N);
}

console.log(solution(5));
console.log(solution(5) === 120);
