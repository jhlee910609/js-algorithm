/**
 * 이분탐색
 * 1. 정렬되어 있어야 함
 * 2. lt > rt && rt < lt 까지 무한 반복
 */
function solution(input, M) {
  input = input.sort((a, b) => a - b);
  let lt = 0;
  let rt = input.length - 1;
  let ans;

  while (lt < rt && rt > lt) {
    const mid = parseInt((lt + rt) / 2);
    if (input[mid] === M) {
      ans = mid + 1; // 몇 번째 인지
      break;
    } else {
      if (input[mid] > M) {
        rt = mid - 1;
      } else {
        lt = mid + 1;
      }
    }
  }

  return ans;
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 57));
