/*
 * @Author: your name
 * @Date: 2021-07-27 18:25:25
 * @LastEditTime: 2021-07-27 19:20:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist14.js
 */
/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 null 。

图示两个链表在节点 c1 开始相交：



题目数据 保证 整个链式结构中不存在环。

注意，函数返回结果后，链表必须 保持其原始结构 。

 

示例 1：



输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
示例 2：



输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
输出：Intersected at '2'
解释：相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。
从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。
在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
示例 3：



输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
输出：null
解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。
由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
这两个链表不相交，因此返回 null 。
 

提示：

listA 中节点数目为 m
listB 中节点数目为 n
0 <= m, n <= 3 * 104
1 <= Node.val <= 105
0 <= skipA <= m
0 <= skipB <= n
如果 listA 和 listB 没有交点，intersectVal 为 0
如果 listA 和 listB 有交点，intersectVal == listA[skipA + 1] == listB[skipB + 1]
 

进阶：你能否设计一个时间复杂度 O(n) 、仅用 O(1) 内存的解决方案？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * 方法一 哈希表
 * 时间复杂度：O(m+n)O(m+n)，其中 mm 和 nn 是分别是链表 \textit{headA}headA 和 \textit{headB}headB 的长度。需要遍历两个链表各一次。

空间复杂度：O(m)O(m)，其中 mm 是链表 \textit{headA}headA 的长度。需要使用哈希集合存储链表 \textit{headA}headA 中的全部节点。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
// var getIntersectionNode = function (headA, headB) {
//   if (headA === null) return null;
//   if (headB === null) return null;
//   const visited = new Set();
//   let temp = headA;
//   while(temp) {
//       visited.add(temp);
//       temp = temp.next;
//   }

//   temp = headB;
//   while(temp) {
//       if (visited.has(temp)) {
//           return temp;
//       }
//       temp = temp.next;
//   }
//   return null;
// };

/**
 * 方法二 双指针
 * 
 * 时间复杂度：O(m+n)O(m+n)，其中 mm 和 nn 是分别是链表 \textit{headA}headA 和 \textit{headB}headB 的长度。两个指针同时遍历两个链表，每个指针遍历两个链表各一次。

空间复杂度：O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/xiang-jiao-lian-biao-by-leetcode-solutio-a8jn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

 var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    const posA = headA;
    const posB = headB;
    while(posA !== posB) {
        if (posA === null) {
            posA = headB;
        } else {
            posA = posA.next;
        }
        if (posB === null) {
            posB = headA;
        } else {
            posB = posB.next;
        }
    }
    return posA
  };

//   var getIntersectionNode = function(headA, headB) {
//     if (headA === null || headB === null) {
//         return null;
//     }
//     let pA = headA, pB = headB;
//     while (pA !== pB) {
//         pA = pA === null ? headB : pA.next;
//         pB = pB === null ? headA : pB.next;
//     }
//     return pA;
// };

const test = new ListNode(
  4,
  new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))
);
const test1 = new ListNode(
  5,
  new ListNode(
    6,
    new ListNode(1, new ListNode(8, new ListNode(4, new ListNode(5))))
  )
);

const result1 = getIntersectionNode(test, test1);

console.log(result1);
