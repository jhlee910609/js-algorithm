function solution(arr, K, M) {
    if(!arr) return 0;

  let count = 0;
  let ch = Array.from({length: arr.length}).fill(0);

  function dfs(L, sum) {
    if (L === K) {
      if (sum % M === 0) {
        count++;
      } else {
        // dfs();
        dfs(L + 1, sum + arr[]);
      }
    }
  }

  dfs(0, 0);

  return count;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
