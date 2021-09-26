function solution(input) {
  let answer = "YES";
  const stack = [];
  for (let c of input) {
    console.log(c);
  }
  return answer;
}

console.log(solution("(()(()))(()") === "NO");
