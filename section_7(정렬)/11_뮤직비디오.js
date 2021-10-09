function solution(input, M) {
  if (!input || !input.length) return 0;

  const avg = input.reduce((prev, cur) => prev + cur, 0) / M;
  console.log(avg);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) === 17);
