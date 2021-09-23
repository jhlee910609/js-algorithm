function solution(input) {
  const map = new Map();
  let answer;
  for (let k of input) {
    const prev = map.get(k) || 0;
    map.set(k, prev + 1);
  }

  let max = -1;
  for (let [k, v] of map) {
    if (v > max) {
      answer = k;
      max = v;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE") === "C");
