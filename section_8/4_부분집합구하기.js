function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);

  function DFS(L) {
    if (L === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 포함할 경우,
      ch[L] = 1;
      DFS(L + 1); // 포함해서 다시 순회

      // 포함 안할 경우,
      ch[L] = 0;
      DFS(L + 1); // 포함하지 않고 순회
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
