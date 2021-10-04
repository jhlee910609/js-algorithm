function solution(input) {
  let ans = [];

  for (let i = 0; i < input.length; i++) {
    const temp = input[i];
    if (
      !(
        temp >= (input[i - 1] || 0) &&
        temp <= (input[i + 1] || Number.MAX_SAFE_INTEGER)
      )
    ) {
      ans.push(input[i]);
    }
  }

  return ans.join(" ");
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log("3 8");
console.log(solution([120, 130, 150, 150, 130, 150]));
console.log("3 5");
