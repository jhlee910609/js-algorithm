function solution(N) {
  let ans = 0;
  console.log(N);
  let temp = Array.from({ length: N + 2 }, () => 0);
  temp[1] = 1;
  temp[2] = 2;
  for (let i = 3; i <= N + 1; i++) {
    temp[i] = temp[i - 1] + temp[i - 2];
  }
  return temp[N + 1];
}

console.log(solution(7) === 34);
