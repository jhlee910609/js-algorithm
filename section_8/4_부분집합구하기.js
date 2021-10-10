function solution(N) {
  const origin = Array.from({ length: N }).map((v, i) => i + 1);
  function combination(arr) {
    if (!arr.length) return;
    else {
      console.log(arr);
      combination(arr.slice(1));
    }
  }

  combination(origin);
}

console.log(solution(3));
