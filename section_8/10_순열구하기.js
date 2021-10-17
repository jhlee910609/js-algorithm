function solution(arr, M) {
  let ans = [];
  const ch = Array.from({ length: arr.length }).map(() => false);
  let temp = Array.from({ length: M }, () => 0);

  function dfs(L) {
    if (L === M) {
      ans.push([...temp]);
    } else {
      for (let i = 0; i < arr.length; i++) {
        ch[i] = true;
        temp[L] = arr[i];
        dfs(L + 1);
        ch[i] = false;
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution([3, 6, 9], 2));
