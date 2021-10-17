// 최소 동전 개수

function solution(N, M) {
  N.sort((a, b) => b - a);
  let ans = 0;

  function dfs(total) {
    if (total === 0 || !N.length) {
      return;
    } else {
      const coin = N.shift();
      ans += Math.floor(total / coin);
      dfs(total % coin);
    }
  }
  dfs(M);
  return ans;
}

console.log(solution([1, 2, 5], 17));
