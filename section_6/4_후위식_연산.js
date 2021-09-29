function solution(input) {
  const stack = [];
  let res;
  for (const x of input) {
    if (!isNaN(x)) {
      stack.push(x);
    }
  }

  console.log(stack);
  return res;
}

console.log(solution("352+*9-") === 12);
