function solution(s, e) {
  console.log("현 위치", s);
  console.log("송아지 위치", e);

  let ans = 0;
  const q = [s];

  while (q.length) {
    const v = q.shift();

    if (v === e) {
      console.log(ans);
      return ans;
    }

    q.push(v - 1);
    q.push(v + 1);
    q.push(v + 5);
    ans++;
  }
  return ans;
}

console.log(solution(5, 14) === 3);
console.log(solution(8, 3) === 5);
