function solution(arr, K, M) {
  if (!arr) return 0;

  let count = 0;

  function dfs(L, sum, s) {
    if (L === K) {
      if (sum % M === 0) {
        count++;
      }
    } else {
      for (let i = s; i < arr.length; i++) {
        dfs(L + 1, sum + arr[i], i + 1);
      }
    }
  }

  dfs(0, 0, 0);
  return count;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
