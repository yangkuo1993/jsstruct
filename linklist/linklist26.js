/*
 * @Author: your name
 * @Date: 2021-08-12 14:37:51
 * @LastEditTime: 2021-08-12 14:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist26.js
 */
/**
 * 剑指 Offer 24. 反转链表
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

 

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000


 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * O(n)
 * O(1)
 */
//  var reverseList = function(head) {
//     let pre = null;
//     let curr = head;
//     while(curr) {
//         const next = curr.next;
//         curr.next = pre;
//         pre = curr;
//         curr = next;
//     }
//     return pre;
// };
/**
 * 
 * @param {*} head 
 * @returns 
 * O(n)
 * O(n)
 */
 var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};