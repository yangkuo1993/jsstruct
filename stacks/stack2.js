//给定一个二叉树的根节点 root ，返回它的 中序 遍历。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 输入：root = [1,null,2,3]
输出：[1,3,2]
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    const numbers = [];
    if (root.val === null) return numbers;
    numbers.push(root.val);
    if (root.left !== null) {
        return numbers.push(inorderTraversal(root.left));
    }
    if (root.right !== null) {
        return numbers.push(inorderTraversal(root.right));
    }
    return numbers;
};