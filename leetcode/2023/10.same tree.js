// 10. Same tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/***
 * 1. 내가 생각한 풀이는 dfs
 */
var isSameTree = function (p, q) {
  const s1 = [p];
  const s2 = [q];

  const ll = null,
    rr = null;

  while (s1.length && s2.length) {
    ll = s1.pop();
    rr = s2.pop();

    if (!ll && !rr) continue;
    if (!ll || !rr) return false;
    if (ll.val !== rr.val) return false;

    s1.push(ll.left);
    s1.push(ll.right);
    s2.push(rr.left);
    s2.push(rr.right);
  }
};
