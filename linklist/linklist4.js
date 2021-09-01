/*
 * @Author: your name
 * @Date: 2021-07-23 11:31:55
 * @LastEditTime: 2021-07-23 13:51:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist4.js
 */

/**
 * 给你一个链表数组，每个链表都已经按升序排列。

请你将所有链表合并到一个升序链表中，返回合并后的链表。

 

示例 1：

输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
解释：链表数组如下：
[
  1->4->5,
  1->3->4,
  2->6
]
将它们合并到一个有序链表中得到。
1->1->2->3->4->4->5->6
示例 2：

输入：lists = []
输出：[]
示例 3：

输入：lists = [[]]
输出：[]
 

提示：

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] 按 升序 排列
lists[i].length 的总和不超过 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 
 * 方法一，利用合并两个有序链表函数
 */

 var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(0);
  let pre = preHead;
  while(l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
       pre.next = l1;
          l1 = l1.next;
      } else {
       pre.next = l2;
          l2 = l2.next;
      }
      pre = pre.next;
  }
  pre.next = l1 === null ? l2 : l1;
  return preHead.next;
};
/**
 * 时间复杂度：假设每个链表的最长长度是 nn。在第一次合并后，ans 的长度为 nn；第二次合并后，ans 的长度为 2\times n2×n，第 ii 次合并后，ans 的长度为 i\times ni×n。第 ii 次合并的时间代价是 O(n + (i - 1) \times n) = O(i \times n)O(n+(i−1)×n)=O(i×n)，那么总的时间代价为 O(\sum_{i = 1}^{k} (i \times n)) = O(\frac{(1 + k)\cdot k}{2} \times n) = O(k^2 n)O(∑ 
i=1
k
​
 (i×n))=O( 
2
(1+k)⋅k
​
 ×n)=O(k 
2
 n)，故渐进时间复杂度为 O(k^2 n)O(k 
2
 n)。

 空间复杂度：没有用到与 kk 和 nn 规模相关的辅助空间，故渐进空间复杂度为 O(1)O(1)。
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//  var mergeKLists = function(lists) {
//    let head = null;
//   for(let i = 0; i < lists.length; i ++) {
//     head = mergeTwoLists(head, lists[i]);
//   }
//   return head;
// };

/**
 * 
 * @description 方法二
 */

/**
 * @param {ListNode[]} lists
 * @param {int} l
 * @param {int} r
 */
var merge = function(lists, l, r) {
  
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
     
};