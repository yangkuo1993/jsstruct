/*
 * @Author: your name
 * @Date: 2021-08-12 15:17:17
 * @LastEditTime: 2021-08-12 15:21:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist28.js
 */

/**
 * 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：

给定的 k 保证是有效的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */


/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 var kthToLast = function(head, k) {
    let fast = head;
    let slow = head;
    while(k--) {
        fast = fast.next;
    }
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};