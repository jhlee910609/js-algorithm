// T.length <= S.length
function solution(S, T) {
  let answer = 0;
  const tMap = new Map();
  const sMap = new Map();

  const compareMap = (aMap, bMap) => {
    console.log(aMap, bMap);
    if (aMap.size !== bMap.size) return false;
    for (let [k, v] of aMap) {
      if (bMap.get(k) !== v) return false;
    }
    return true;
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

  for (let rt = len; rt < S.length; rt++) {
    sMap.set(S[rt], (sMap.get(S[rt]) || 0) + 1);
    if (compareMap(sMap, tMap)) answer++;

    const key = S[lt];

    sMap.set(key, sMap.get(key) - 1);

    if (sMap.get(key) === 0) {
      sMap.delete(key);
    }
    lt++;
  }
  return answer;
}

console.log(solution("bacaAacba", "baca") === 2);
