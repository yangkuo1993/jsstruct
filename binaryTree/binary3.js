/**
101. 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？
https://leetcode-cn.com/problems/symmetric-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 
 * @param {*} p 
 * @param {*} q 
 * @returns 
 * 
 * 方法一
 * 复杂度分析

假设树上一共 nn 个节点。

时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)O(n)。
空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 nn，故渐进空间复杂度为 O(n)O(n)。


作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/symmetric-tree/solution/dui-cheng-er-cha-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
// const check = (p,q) => {
//     if (!p && !q) return true;
//     if (!p || !q) return false;
//     return p.val === q.val && check(p.left,q.right) && check(p.right,q.left);
// }

// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   return check(root,root)
// };


/**
 * 方法二迭代
 * 复杂度分析

时间复杂度：O(n)O(n)，同「方法一」。
空间复杂度：这里需要用一个队列来维护节点，每个节点最多进队一次，出队一次，队列中最多不会超过 nn 个点，故渐进空间复杂度为 O(n)O(n)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/symmetric-tree/solution/dui-cheng-er-cha-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

const check = (p,q) => {
    var qQueue = [];
    qQueue.push(q);
    qQueue.push(p);
    while (qQueue.length) {
        q = qQueue.shift();
        p = qQueue.shift();
        if (!q && !p) continue;
        if ((!q || !p) || (q.val !== p.val)) return false;
        qQueue.push(q.left);
        qQueue.push(p.right);
        qQueue.push(q.right);
        qQueue.push(p.left);
    }
    return true;
}

var isSymmetric = function (root) {
  return check(root,root)
};

