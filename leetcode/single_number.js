/**
 * 1. ^= 을 아는 게 중요하다.
 * https://sabarada.tistory.com/160
 * ex) a ^= a = 0;
 * b ^= a = b;
 */
var singleNumber = function (nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp ^= nums[i];
  }
  return temp;
};
