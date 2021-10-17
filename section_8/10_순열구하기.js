function solution(arr, M) {
  let ans = [];

  function dfs(L, res, temp) {
    if (L === 1) {
      ans.push(res);
      return;
    } else {
      for (let i = 0; temp.length; i++) {
          console.log("L", L, "res", res, "temp", [
            ...temp.slice(0, i),
            ...temp.slice(i + 1),
          ]);
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
