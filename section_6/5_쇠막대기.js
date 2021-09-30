function solution(input) {
  let ans = 0;
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      stack.push("(");
    } else {
      stack.pop();
      if (input[i - 1] === "(") {
        ans += stack.length;
      } else {
        ans++;
      }
    }
    console.log(ans);
  }

  return ans;
}

console.log(solution("()(((()())(())()))(())") === 17);
console.log(solution("(((()(()()))(())()))(()())") === 24);
