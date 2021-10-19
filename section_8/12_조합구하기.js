/**
 * 모르면 그냥 조합 뽑는 로직(코드)을 통으로 외우자!
 */
function solution(n, m) {
  const temp = Array.from({ length: m }).fill(0);
  const res = [];
  function dfs(L, s) {
    if (L === m) {
      res.push(temp.slice());
    } else {
      for (let i = s; i <= n; i++) {
        temp[L] = i;
        dfs(L + 1, i + 1);
      }
    }
  }
  dfs(0, 1);
  return res;
}

console.log(solution(4, 2));
