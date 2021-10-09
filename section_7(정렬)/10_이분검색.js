function solution(input, M) {
  input = input.sort((a, b) => a - b);
  let lt = 0;
  let rt = input.length - 1;

  while (lt < rt && rt > lt) {
    const mid = parseInt((lt + rt) / 2);
    if (input[mid] === M) {
      return mid;
    } else {
      if (input[mid] > M) {
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }
  }
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 57));
