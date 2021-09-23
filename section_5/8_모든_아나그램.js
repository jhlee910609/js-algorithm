// T.length <= S.length
function solution(S, T) {
  const map = new Map();
  for (let t of T) {
    map.set(t, (map.get(t) || 0) + 1);
  }

  let cnt = 0;
  for (let i = 0; i < S.length - T.length + 1; i++) {
    const temp = S.slice(i, i + T.length);

    console.log(temp);
    for (let a of temp) {
    }
  }
  return cnt;
}

console.log(solution("bacaAacba", "abc") === 3);
