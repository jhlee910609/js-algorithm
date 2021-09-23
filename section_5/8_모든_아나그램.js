// T.length <= S.length
function solution(S, T) {
  const map = new Map();
  for (let t of T) {
    map.set(t, (map.get(t) || 0) + 1);
  }

  let start = 0;
  let end = start + T.length + 1;
  for (let i = T.length - 1; i < S.length; i++) {}
}

console.log(solution("bacaAacba", "abc") === 3);
