function solution(arr, M) {
  let ans = [];

  function dfs(L, res) {
    if (L === M) {
      ans.push(res);
      return;
    } else {
      if (L === 0) {
        for (let i = 0; arr.length; i++) {
          dfs(L + 1, [...res, arr[i]]);
        }
      } else {
        dfs(L + 1, [...res, arr[i]]);
      }
    }
  }
  dfs(0, []);
  return ans;
}

console.log(solution([3, 6, 9], 2));
