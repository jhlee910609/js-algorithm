// 중복 문자를 제거한다.
// 원본을 훼손시켜 제거할수도 있지만, 중복문자를 제외하고 새로운 문자를 반환하는 것도 제거하는 것
function solution(s) {
  let answer = "";
  for (const word of s) {
    if (!answer.includes(word)) answer += word;
  }
  return answer;
}
console.log(solution("ksekkset"));
