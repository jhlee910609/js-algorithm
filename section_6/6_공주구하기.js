function solution(N, K) {
  const q = Array.from({ length: N }, (v, i) => i + 1);
  let ans;

  while (q.length) {
    for (let i = 1; i < K; i++) {
      q.push(q.shift());
    }
    q.shift();
    if (q.length === 1) {
      ans = q.shift();
    }
  }
  return ans;
}

console.log(solution(8, 3));
