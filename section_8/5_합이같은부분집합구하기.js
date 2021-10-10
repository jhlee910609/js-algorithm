function solution(input) {
  let ans = false;
  const total = input.reduce((prev, cur) => prev + cur, 0);

  function dfs(L, sum) {
    let flag = false;
    if (flag) return;
    if (L === input.length) {
      if (total - sum === sum) {
        ans = true;
        flag = true;
      }
    } else {
      dfs(L + 1, sum); // 부분 집합으로 포함 했을때
      dfs(L + 1, sum + input[L + 1]); // 부분 집합으로 포함하지 않았을때
    }
  }

  dfs(0, 0);

  return ans;
}

console.log(solution([1, 3, 5, 6, 7, 10]) === true);
