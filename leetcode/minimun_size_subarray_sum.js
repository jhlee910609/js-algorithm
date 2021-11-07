/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // sliding window + two pointer
  let l = 0,
    r = 0,
    sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;

  while (r < nums.length) {
    console.log(l, r);
    sum += nums[r];
    console.log("sum:", sum);

    while (sum >= target) {
      ans = Math.min(ans, r - l + 1);
      sum -= nums[l++];
    }
    r++;
  }

  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
