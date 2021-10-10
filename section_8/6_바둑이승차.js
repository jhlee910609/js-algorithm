function solution(C, dogs) {
  let ans = -1;

  function dfs(L, sum) {
    if (sum > C) return; // 타지도 못하게 한다.
    if (L === dogs.length) {
      ans = Math.max(ans, sum);
    } else {
      dfs(L + 1, sum);
      dfs(L + 1, sum + dogs[L]);
    }
  }
  dfs(0, 0);
  return ans;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
