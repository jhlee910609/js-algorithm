function solution(s) {
  let answer = [];
  for (const word of s) {
    if (!answer.includes(word)) {
      answer.push(word);
    }
  }
  return answer.toString();
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
