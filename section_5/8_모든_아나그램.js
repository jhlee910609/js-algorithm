// T.length <= S.length
function solution(S, T) {
  const map = new Map();
  for (let t of T) {
    map.set(t, (map.get(t) || 0) + 1);
  }

  for (let i = 0; i < S.length - T.length + 1; i++) {
    const temp = S.slice(i, i + T.length);
    console.log(temp);
  }
}

console.log(solution("bacaAacba", "abc") === 3);
