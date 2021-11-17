/**
 * @description 二叉树
 *
 * 先序遍历
 * 根->左->右
 *
 * 中序遍历
 * 左->根->右
 *
 * 后续遍历
 * 左->右->根
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * 给定一个二叉树的根节点 root ，返回它的 中序 遍历。
 * 
 * 树中节点数目在范围 [0, 100] 内
-100 <= Node.val <= 100

输入：root = [1,null,2,3]
输出：[1,3,2]

时间复杂度：O(n)O(n)，其中 nn 为二叉树节点的个数。二叉树的遍历中每个节点会被访问一次且只会被访问一次。
空间复杂度：O(n)O(n)。空间复杂度取决于递归的栈深度，而栈深度在二叉树为一条链的情况下会达到 O(n)O(n) 的级别。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// var inorderTraversal = function (root) {
//   const res = [];
//   const inorder = (root) => {
//     if (!root) {
//       return;
//     }
//     inorder(root.left);
//     res.push(root.val)
//     inorder(root.right);
//   }
//   inorder(root);
//   return res;
// };

/// 方法二  迭代


var inorderTraversal = function (root) {
  const res = [];
  const inorder = (root) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val)
    inorder(root.right);
  }
  inorder(root);
  return res;
};