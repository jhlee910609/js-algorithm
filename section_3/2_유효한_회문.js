function solution(input) {
  let answer = "YES";
  // 정규식으로 불필요한 문자열 제거
  input = input.replace(/[^a-zA-Z]/g, "");

  const length = input.length;

  for (let i = 0; i < length / 2; i++) {
    if (input[i].toLowerCase() !== input[length - 1 - i].toLowerCase())
      return "NO";
  }

  return answer;
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
