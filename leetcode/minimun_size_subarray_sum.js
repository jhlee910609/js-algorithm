/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // sliding window + two pointer
  // 연속된 배열 찾는 것에만 사용가능하다.
  let l = 0, // left pointer
    r = 0, // right pointer
    sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  while (r < nums.length) {
    console.log("l:", l, "r:", r);
    sum += nums[r];
    console.log("sum:", sum);
    while (sum >= target) {
      const len = r - l + 1; // sum === target인 배열의 길이
      ans = Math.min(ans, len);
      sum -= nums[l++]; // l을 한칸 앞으로 당긴다.
    }
    r++;
  }

  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
