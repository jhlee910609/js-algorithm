function solution(arr, K, M) {
  if (!arr) return 0;

  let count = 0;
  let ch = Array.from({ length: arr.length }).fill(false);
  let temp = Array.from({ length: K }).fill(0);
  let res = [];

  function dfs(L, sum) {
    if (L === K) {
      if (sum % M === 0) {
        count++;
        res.push(temp.slice());
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          temp[L] = arr[i];
          dfs(L + 1, sum + arr[i]);
          ch[i] = 0;
        }
      }
    }
  }

  dfs(0, 0);
  console.log(res);
  return count;
}

console.log(solution([2, 4, 5, 8, 12], 3, 6));
