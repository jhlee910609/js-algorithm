// 중간에 return 시키기 보다 끝까지 돌고 남은 개수로 확인한다.
function solution(input) {
  let answer = "YES";
  const stack = [];
  for (let c of input) {
    if (c === "(") stack.push(c);
    else {
      // ) 인데 stack에 (가 없는 경우
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  if (stack.length > 0) return "NO";
  return answer;
}

console.log(solution("(()(()))(()") === "NO");
console.log(solution("(())") === "YES");
console.log(solution("())") === "NO");
