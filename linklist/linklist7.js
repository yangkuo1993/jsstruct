/*
 * @Author: your name
 * @Date: 2021-07-26 13:43:46
 * @LastEditTime: 2021-07-26 14:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist7.js
 */

/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * 翻转链表 方法一迭代
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * 
 * 复杂度分析

时间复杂度：O(n)O(n)，其中 nn 是链表的长度。需要遍历链表一次。

空间复杂度：O(1)O(1)。
 * @return {ListNode}
 */
//  var reverseList = function(head) {
//     let prev = null;
//     let curr = head;
//     while(curr) {
//         const next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// };


/**
 * 方法二  递归
 * 
 * 时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。

空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。

 * 
 */

 var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};


const test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const result1 = reverseList(test, 1);

const newOne1 = new LinkList();
newOne1.add(result1);
console.log(newOne1.toListNodeString());