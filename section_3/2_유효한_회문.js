function solution(input) {
  let answer = "YES";
  input = input.replace(/[^a-zA-Z]/g, "");
  l;
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== input[i - 1 - length]) return "NO";
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
