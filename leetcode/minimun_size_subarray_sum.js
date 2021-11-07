/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // length 만큼 연속해서
  let l = 0,
    r = 0,
    sum = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  // 길이
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
