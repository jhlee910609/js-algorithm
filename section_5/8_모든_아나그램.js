// T.length <= S.length
function solution(S, T) {
  let answer = 0;
  const tMap = new Map();
  const sMap = new Map();

  const compareMap = (aMap, bMap) => {
    if (aMap.size !== bMap) return false;
  };

  // 1. tMap을 만든다.
  for (let t of T) {
    tMap.set(t, (tMap.get(t) || 0) + 1);
  }

  // 2. length 할당
  const len = T.length - 1;

  for (let i = 0; i < len; i++) {
    sMap.set(S[i], (sMap.get(S[i]) || 0) + 1);
  }

  let lt = 0;

  for (let rt = len; i < S.length; i++) {
    sMap.set(S[rt], (sMap.get(S[rt]) || 0) + 1);
    if (compareMap(sMap, tMap)) {
      answer++;
    }
    const temp = sMap.get(S[lt]);
    if (!temp) {
      sMap.delete(S[lt]);
    } else {
      sMap.set(S[lt], temp - 1);
    }
    lt++;
  }
  return answer;
}

console.log(solution("bacaAacba", "abc") === 3);
