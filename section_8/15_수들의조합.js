function solution(arr, K, M) {
  let count = 0;

  function dfs(L, sum) {
    if (L === K) {
      if (sum % M === 0) {
        count++;
      }
    }
  }

  return count;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
