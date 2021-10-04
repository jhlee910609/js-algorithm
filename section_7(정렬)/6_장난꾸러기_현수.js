function solution(input) {
  let ans = [];
  const res = [...input].sort((a, b) => a - b);

  input.forEach((v, i) => {
    if (v !== res[i]) {
      ans.push(i + 1);
    }
  });

  return ans.join(" ");
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log("3 8");
console.log(solution([120, 130, 150, 150, 130, 150]));
console.log("3 5");
