/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // length 만큼 연속해서
  let l = 0,
    r = 0;
  let ans = Number.MAX_SAFE_INTEGER;
  // 길이
  for (let len = 1; len <= nums.length; len++) {
    while (l + len - 1 < nums.length) {
      r = l + len - 1;
      let temp = 0;

      for (let i = l; i <= r; i++) {
        temp += nums[i];
      }

      if (temp === target) {
        ans = Math.min(ans, len);
      }
      l++;
    }
    l = 0;
  }
  return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
