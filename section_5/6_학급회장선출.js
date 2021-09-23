function solution(input) {
  const map = new Map();
  input.split("").forEach((ele) => {
    const prev = map.get(ele) || 0;
    map.set(ele, prev + 1);
  });
  let answer;
  for (const [k, v] of map) {
    console.log(k, v);
  }
}

console.log(solution("BACBACCACCBDEDE"));
