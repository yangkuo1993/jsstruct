/**
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 方法一
 * 如果两个二叉树都为空，则两个二叉树相同。如果两个二叉树中有且只有一个为空，则两个二叉树一定不相同。

如果两个二叉树都不为空，那么首先判断它们的根节点的值是否相同，若不相同则两个二叉树一定不同，
若相同，再分别判断两个二叉树的左子树是否相同以及右子树是否相同。这是一个递归的过程，因此可以使用深度优先搜索，递归地判断两个二叉树是否相同。
 */
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  else if (!p || !q) return false;
  else if (p.val !== q.val) return false;
  else return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
方法二
方法二：广度优先搜索
也可以通过广度优先搜索判断两个二叉树是否相同。同样首先判断两个二叉树是否为空，如果两个二叉树都不为空，则从两个二叉树的根节点开始广度优先搜索。
使用两个队列分别存储两个二叉树的节点。初始时将两个二叉树的根节点分别加入两个队列。每次从两个队列各取出一个节点，进行如下比较操作。

比较两个节点的值，如果两个节点的值不相同则两个二叉树一定不同；

如果两个节点的值相同，则判断两个节点的子节点是否为空，如果只有一个节点的左子节点为空，或者只有一个节点的右子节点为空，则两个二叉树的结构不同，因此两个二叉树一定不同；

如果两个节点的子节点的结构相同，则将两个节点的非空子节点分别加入两个队列，子节点加入队列时需要注意顺序，如果左右子节点都不为空，则先加入左子节点，后加入右子节点。

如果搜索结束时两个队列同时为空，则两个二叉树相同。如果只有一个队列为空，则两个二叉树的结构不同，因此两个二叉树不同。


时间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点数。对两个二叉树同时进行广度优先搜索，只有当两个二叉树中的对应节点都不为空时才会访问到该节点，因此被访问到的节点数不会超过较小的二叉树的节点数。

空间复杂度：O(\min(m,n))O(min(m,n))，其中 mm 和 nn 分别是两个二叉树的节点数。空间复杂度取决于队列中的元素个数，队列中的元素个数不会超过较小的二叉树的节点数。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/same-tree/solution/xiang-tong-de-shu-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  else if (p === null || q === null) return false;
  const qQueue = [];
  const pQueue = [];
  qQueue.push(q);
  pQueue.push(p);
  while (pQueue.length > 0 && qQueue.length > 0) {
    var node1 = qQueue.shift();
    var node2 = pQueue.shift();
    if (node1.val !== node2.val) {
      return false;
    }
    var left1 = node1.left;
    var right1 = node1.right;
    var left2 = node2.left;
    var right2 = node2.right;
    if ((left1 === null) ^ (left2 === null)) {
      return false;
    }
    if ((right1 === null) ^ (right2 === null)) {
      return false;
    }
    if (left1 !== null) {
      qQueue.push(left1);
    }
    if (right1 !== null) {
      qQueue.push(right1);
    }
    if (left2 !== null) {
      pQueue.push(left2);
    }
    if (right2 !== null) {
      pQueue.push(right2);
    }
  }
  return qQueue.length === 0 && pQueue.length === 0;
};
