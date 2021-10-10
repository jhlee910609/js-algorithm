function solution(N) {
  const origin = Array.from({ length: N }).map((v, i) => i + 1);
  let res = [];

  function combination(v, temp) {
    console.log(res);
    if (v > 3) return temp;
    else {
      combination(v * 2);
      combination(v * 2 + 1);
    }
  }

  combination(origin);
}

console.log(solution(3));
