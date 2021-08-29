function solution(s) {
  let answer = "",
    len = Number.MIN_SAFE_INTEGER;
  for (const word of s) {
    if (word.length > len) {
      len = word.length;
      answer = word;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
