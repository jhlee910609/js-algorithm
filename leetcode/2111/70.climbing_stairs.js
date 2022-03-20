/**
 * 완전 탐색 문제
 * 브루투 포스로 풀어도 풀림
 * 트리 형태로 생각해보면 됨
 * 현재 위치에서 1) 한 칸 올라갈 경우, 2) 두 칸 올라갈 경우 이렇게
 * 예를 들면 계단 3개를 올라갈 경우,
 *   /   \
 *  1칸    2칸
 *  / \    / \
 * 2칸 1칸
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return climb_stairs(0, n);
};

function climb_stairs(start, end, memo = []) {
  if (start > end) return 0;
  if (start == end) return 1;
  if (memo[start]) {
    return memo[start];
  } else {
    memo[start] =
      climb_stairs(start + 1, end, memo) + climb_stairs(start + 2, end, memo);
    return memo[start];
  }
}
