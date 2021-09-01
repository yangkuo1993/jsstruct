/*
 * @Author: your name
 * @Date: 2021-08-12 09:46:46
 * @LastEditTime: 2021-08-12 13:19:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/index24.js
 */

/**
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

示例1：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
限制：

0 <= 链表长度 <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 时间复杂度O(m+n)
 * 空间复杂度O(1)
 * 方法一
 * 迭代
 */
//  var mergeTwoLists = function(l1, l2) {
//     let head = new ListNode(0);
//     let pre = head;
//     while(l1 !== null && l2 !== null) {
//         if (l1.val < l2.val) {
//             pre.next = l1;
//             l1 = l1.next;
//         } else {
//             pre.next = l2;
//             l2 = l2.next;
//         }
//         pre = pre.next;
//     }
//     pre.next = l1 !== null ? l1 : l2;
//     return head.next;
// };

/**
 * 方法二 递归
 * 时间复杂度O(m+n)
 * 空间复杂度O(m+n)
 */

 var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};