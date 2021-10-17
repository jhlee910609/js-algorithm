// 최소 동전 개수

function solution(N, M) {
  N.sort((a, b) => b - a);
  console.log(N);
  let ans;

  function dfs(total) {
    if (total === 0) {
      return;
    } else {
      const coin = N.shift();
      ans += Math.floor(M / coin);
      console.log(ans % coin);
      dfs(ans % coin);
    }
  }
  dfs(M);
  return ans;
}

console.log(solution([1, 2, 5], 15) === 15);
