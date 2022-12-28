/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return root == null || isMirror(root.left, root.right);
};

// 루트 트리 기준으로 트리를 반 접었을때, 대칭인지 체크
function isMirror(l, r) {
  // 둘 다 없으면 대칭
  if (l == null && r == null) return true;
  // 둘 중 하나만 없으면 비대칭
  if (l == null || r == null) return false;
  return (
    // value가 같고, 양쪽 sub tree 대칭인지 체크
    l.val == r.val && isMirror(l.right, r.left) && isMirror(l.left, r.right)
  );
}
