// 모든 순열 구함

function solution(N, M) {
  let res = [];
  function dfs(L, arr) {
    if (L === N + 1) return;
    if (arr.length === M) {
      res.push(arr);
      return;
    } else {
      dfs(L + 1, arr);
      dfs(L + 1, arr.concat(L));
    }
  }

  dfs(1, []);
  return res;
}

console.log(solution(3, 2));
