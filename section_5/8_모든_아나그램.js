// T.length <= S.length
function solution(S, T) {
  const map = new Map();
  for (let t of T) {
    map.set(t, (map.get(t) || 0) + 1);
  }
  console.log(map);
}

console.log(solution("bacaAacba", "abc") === 3);
