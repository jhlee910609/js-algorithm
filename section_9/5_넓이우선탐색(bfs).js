function solution() {
  let ans = "";
  let q = [];

  q.push(1);

  while (q.length) {
    let v = q.shift();
    ans += v + " ";
    if (v * 2 > 7) {
      continue;
    }
    q.push(v * 2); // 이진트리 - 왼쪽 자식 노드
    q.push(v * 2 + 1); // 이진트리 - 오른쪽 자식 노드
  }

  return ans;
}

console.log(solution());
