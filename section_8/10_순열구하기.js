function solution(arr, M) {
  let ans = [];

  function dfs(L, res, temp) {
    if (L === M) {
      ans.push(res);
      return;
    } else {
      for (let i = 0; i < temp.length; i++) {
        dfs(
          L + 1,
          [...res, temp[i]],
          [...temp.slice(0, i), ...temp.slice(i + 1)]
        );
      }
    }
  }
  dfs(0, [], arr);
  return ans;
}

console.log(solution([3, 6, 9], 2));
