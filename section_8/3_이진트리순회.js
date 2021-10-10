/**
 * binary tree traverse
 * 여기서 중요한 건 전위/중위/후위 순회는 부모 노드 기준
 */
function solution(root) {
  let ans = "";
  function DFS(L) {
    if (L > 7) return;
    else {
      DFS(2 * L);
      DFS(2 * L + 1);
      ans = `${ans} ${L}`;
    }
  }

  DFS(root);
  console.log(ans);
}

solution(1);
