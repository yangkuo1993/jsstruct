/*
 * @Author: your name
 * @Date: 2021-08-12 15:24:55
 * @LastEditTime: 2021-08-12 15:25:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist30.js
 */

/**
 * 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。

 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/UHnkqh
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
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

var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};