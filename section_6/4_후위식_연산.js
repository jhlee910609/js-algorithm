function solution(input) {
  const stack = [];
  let res;
  for (const x of input) {
    if (!isNaN(x)) {
      stack.push(x / 1);
    } else {
      let temp;
      const second = stack.pop();
      const first = stack.pop();

      if (x === "+") {
        temp = first + second;
      }

      if (x === "-") {
        temp = first - second;
      }

      if (x === "*") {
        temp = first * second;
      }

      if (x === "/") {
        temp = first / second;
      }

      stack.push(temp);
    }
  }
  return stack[0];
}

console.log(solution("352+*9-") === 12);
