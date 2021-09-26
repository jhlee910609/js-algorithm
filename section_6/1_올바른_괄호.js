function solution(input) {
  let answer = "YES";
  const stack = [];
  for (let c of input) {
    if (c === "(") {
      stack.push(c);
    } else {
      const c = stack.shift();
      console.log(c, stack);
      if (c !== "(") {
        return "NO";
      }
    }
  }
  return answer;
}

console.log(solution("(()(()))(()") === "NO");
