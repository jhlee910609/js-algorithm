/**
 * @link https://leetcode.com/problems/missing-number/submissions/
 *
 */
var missingNumber = function (nums) {
  if (!nums || nums.length < 1) return null;

  let arraySum = 0,
    indexSum = 0;

  for (let i = 0; i < nums.length; i++) {
    arraySum += nums[i];
    indexSum += i + 1;
  }
  // 총합 - 현재 arr의 총합
  // 0 ~ n까지 연속된 수라 가능
  return indexSum - arraySum;
};
