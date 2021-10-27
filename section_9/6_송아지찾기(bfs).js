function solution(s, e) {
  console.log("현 위치", s);
  console.log("송아지 위치", e);

  let ans = 0;
  const q = [s];
  const ch = [e];

  while (q.length) {
    const v = q.shift();

    for (let nv of [v - 1, v + 1, v + 5]) {
      if (nv === e) {
        return;
      }

      if (ch.includes(nv)) {
        q.push(nv);
        ch.push(nv);
      }
    }
  }
  return ans;
}

console.log(solution(5, 14) === 3);
console.log(solution(8, 3) === 5);
