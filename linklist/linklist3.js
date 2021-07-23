/*
 * @Author: your name
 * @Date: 2021-07-23 11:04:35
 * @LastEditTime: 2021-07-23 11:29:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist3.js
 */

/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-two-sorted-lists
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
 * @description 递归解决
 * 时间复杂度分析  O(n + m)
 * 时间复杂度：O(n + m)O(n+m)，其中 nn 和 mm 分别为两个链表的长度。因为每次调用递归都会去掉 l1 或者 l2 的头节点（直到至少有一个链表为空），函数 mergeTwoList 至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即 O(n+m)O(n+m)。
 * 空间复杂度分析 O(n + m)
 * 空间复杂度：O(n + m)O(n+m)，其中 nn 和 mm 分别为两个链表的长度。递归调用 mergeTwoLists 函数时需要消耗栈空间，栈空间的大小取决于递归调用的深度。结束递归调用时 mergeTwoLists 函数最多调用 n+mn+m 次，因此空间复杂度为 O(n+m)O(n+m)。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//  var mergeTwoLists = function(l1, l2) {
//     if (l1 === null) {
//         return l2
//     } else if (l2 === null) {
//         return l1;
//     } else if (l1.val < l2.val) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// };


/**
 * @description 迭代
 * 时间复杂度：O(n + m)O(n+m)，其中 nn 和 mm 分别为两个链表的长度。因为每次循环迭代中，l1 和 l2 只有一个元素会被放进合并链表中， 因此 while 循环的次数不会超过两个链表的长度之和。所有其他操作的时间复杂度都是常数级别的，因此总的时间复杂度为 O(n+m)O(n+m)。
空间复杂度：O(1)O(1)。我们只需要常数的空间存放若干变量。
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
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