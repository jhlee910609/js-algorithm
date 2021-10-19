function solution(arr, K, M) {
  if (!arr) return 0;

  let count = 0;
  let ch = Array.from({ length: arr.length }).fill(false);

  function dfs(L, sum) {
    if (L === K) {
      if (sum % M === 0) {
        count++;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          dfs(L + 1, sum + arr[i]);
          ch[i] = 0;
        }
      }
    }
  }

  dfs(0, 0);
  return count;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
