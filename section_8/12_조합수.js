function solution(n, r) {
  function dfs(_n, _r) {
    if (_n === _r || _r === 0) return 1;
    else {
      return dfs(_n - 1, _r - 1) + dfs(_n - 1, _r);
    }
  }
  return dfs(n, r);
}

console.log(solution(33, 19));
