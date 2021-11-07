function solution(nums) {
  const max = nums.length / 2;
  const set = new Set();

  let i = 0;

  while (set.size < max && i < nums.length) {
    if (nums[i]) {
      set.add(nums[i]);
    }
    i++;
  }
  return set.size;
}

console.log(solution([3, 3, 3, 2, 2, 2]) === 2);
