function solution(input) {
  const map = new Map();
  input.split("").forEach((ele) => {
    const prev = map.get(ele) || 0;
    map.set(ele, prev + 1);
  });
  let answer;
  let prev = 0;
  for (const [k, v] of map) {
    if (v > prev) {
      prev = v;
      answer = k;
    }
  }
  return answer;
}

console.log(solution("BACBACCACCBDEDE"));
