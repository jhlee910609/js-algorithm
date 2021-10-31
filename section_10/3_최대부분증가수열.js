function solution(input) {
  const temp = Array.from({ length: input.length }, () => 0);

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(temp);
    }
  }

  console.log(temp);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]) === 4);
