// T.length <= S.length
function solution(S, T) {
  let answer = 0;
  const sMap = new Map();
  const tMap = new Map();

  for (let t of T) {
    tMap.set(t, (tMap.get(t) || 0) + 1);
  }

  return answer;
}

console.log(solution("bacaAacba", "abc") === 3);
