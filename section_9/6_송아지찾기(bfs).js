function solution(s, e) {
  console.log("현 위치", s);
  console.log("송아지 위치", e);

  let ans = 0;
  const q = [s];
  const visited = []; // 방문 여부 idx로 담는다.
  visited[s] = 1; // s는 방문했다.

  const dis = Array.from({ length: 10001 }, () => 0); // 트리의 lv를 담는다
  dis[s] = 0;

  while (q.length) {
    const v = q.shift();

    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) {
        // 부모 + 1;
        return dis[v] + 1;
      }

      if (!visited.includes(nv)) {
        q.push(nv);
        visited.push(nv);
        dis[nv] = dis[v] + 1;
      }
    }
  }
  return ans;
}

console.log(solution(5, 14) === 3);
console.log(solution(8, 3) === 5);
