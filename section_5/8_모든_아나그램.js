// T.length <= S.length
function solution(S, T) {
  let answer = 0;
  const tMap = new Map();
  const sMap = new Map();

  // 1. tMap을 만든다.
  for (let t of T) {
    tMap.set(t, (tMap.get(t) || 0) + 1);
  }

  const len = T.length - 1;
  for (let i = 0; i < len; i++) {
    sMap.set(S[i], (sMap.get(S[i]) || 0) + 1);
  }

  let lt = 0;
  for (let rt = len; i < S.length; i++) {
    sMap.set(S[rt], (sMap.get(S[rt]) || 0) + 1);
  }
  return answer;
}

console.log(solution("bacaAacba", "abc") === 3);
