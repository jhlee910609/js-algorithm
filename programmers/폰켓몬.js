function solution(input) {
  const len = input.length / 2;
  const set = new Set(input);

  return Array(...set).length < len ? Array(...set).length : len;
}

console.log(solution([3, 3, 3, 2, 2, 4]));
