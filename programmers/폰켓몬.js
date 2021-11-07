function solution(input) {
  const len = input.length / 2;
  const visited = Array.from({ length: 10001 }, () => false);
  let ans = -1;

  function dfs(L) {
    if (L === len) {
      ans = Math.max(ans, visited.filter((v) => v).length);
    } else {
      for (let i = 0; i < input.length; i++) {
        if (!visited[input[i]]) {
          visited[input[i]] = true;
          dfs(L + 1);
          visited[input[i]] = false;
        }
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
