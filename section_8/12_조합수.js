function solution(n, r) {
  // 1. 조건을 보고 미리 큰 배열을 만들어 둔다.
  let dy = Array.from(Array(35), () => Array.from(35).fill(0));
  function dfs(_n, _r) {
    // 2. 기존의 저장된 값이 있다면 그 값을 그냥 return 한다.
    if (dy[_n][_r] > 0) return dy[_n][_r];
    if (_n === _r || _r === 0) return 1;
    else {
      return (dy[_n][_r] = dfs(_n - 1, _r - 1) + dfs(_n - 1, _r));
    }
  }
  return dfs(n, r);
}

console.log(solution(33, 19));
