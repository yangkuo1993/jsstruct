/*
 * @Author: your name
 * @Date: 2021-08-12 14:51:53
 * @LastEditTime: 2021-08-12 15:13:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist27.js
 */
/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。

返回删除后的链表的头节点。

注意：此题对比原题有改动

示例 1:

输入: head = [4,5,1,9], val = 5
输出: [4,1,9]
解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
示例 2:

输入: head = [4,5,1,9], val = 1
输出: [4,5,9]
解释: 给定你链表中值为 1 的第三个节点，那么在调用了你的函数之后，该链表应变为 4 -> 5 -> 9.
 

说明：

题目保证链表中节点的值互不相同
若使用 C 或 C++ 语言，你不需要 free 或 delete 被删除的节点

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * O(n)
 * O(1)
 */
//  var deleteNode = function(head, val) {
//     let dummy = new ListNode(-1);
//     dummy.next = head;
//     let temp = dummy;
//     while(temp !== null && temp.next !== null) {
//         if (temp.next.val === val) {
//             temp.next = temp.next.next;
//         }
//         temp = temp.next;
//     }
//     return dummy.next;
// };

/**
 * 递归
 * O(n)
 * O(n)
 */

 var deleteNode = function(head, val) {
    if (head === null) return head;
    if (head.val === val) {
        return head.next;
    }
    head.next = deleteNode(head.next, val);
    return head;
};