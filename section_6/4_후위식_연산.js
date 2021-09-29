function solution(input) {
  const stack = [];
  let res;
  for (const x of input) {
    if (!isNaN(x)) {
      stack.push(x);
    } else {
      let temp;
      if (x === "+") {
        temp = stack.pop() + stack.pop();
      }

      if (x === "-") {
        temp = stack.pop() - stack.pop();
      }

      if (x === "*") {
        temp = stack.pop() * stack.pop();
      }

      if (x === "/") {
        temp = stack.pop() / stack.pop();
      }
      stack.push(temp);
    }
  }

  console.log(stack);
  return res;
}

console.log(solution("352+*9-") === 12);
