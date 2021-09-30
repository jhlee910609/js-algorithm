function solution(input) {
  let ans = 0;
  const stack = [];
  for (const x of input) {
    if (x === ")") {
    } else {
      stack.push(x);
    }
  }

  return ans;
}

console.log(solution("()(((()())(())()))(())") === 17);
console.log(solution("(((()(()()))(())()))(()())") === 24);
