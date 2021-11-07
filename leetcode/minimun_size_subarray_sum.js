/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // length 만큼 연속해서
  let l = 0,
    r = 0;
  for (let i = 1; i <= nums.length; i++) {
    console.log(l, r);
  }
  return ans;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
