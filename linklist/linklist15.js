/*
 * @Author: yangkuo
 * @Date: 2021-07-28 10:31:47
 * @LastEditTime: 2021-07-28 11:19:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist15.js
 */

/**
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 

示例 1：


输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：

输入：head = [], val = 1
输出：[]
示例 3：

输入：head = [7,7,7,7], val = 7
输出：[]
 

提示：

列表中的节点数目在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= val <= 50

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-linked-list-elements
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 
 * 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。需要遍历链表一次。

空间复杂度：O(1)O(1)。
 */
//  var removeElements = function(head, val) {
//     if (head === null) return null;
//     let dummyHead = new ListNode(-1);
//     dummyHead.next = head;
//     let copyhead = dummyHead;
//     while(copyhead.next) {
//         if (copyhead.next.val === val) {
//             copyhead.next = copyhead.next.next;
//         } else {
//             copyhead = copyhead.next;
//         }
//     }
//     return dummyHead.next;
// };

/**
 * 
 * 方法二 递归
 * 
 * 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。递归过程中需要遍历链表一次。

空间复杂度：O(n)O(n)，其中 nn 是链表的长度。空间复杂度主要取决于递归调用栈，最多不会超过 nn 层

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/remove-linked-list-elements/solution/yi-chu-lian-biao-yuan-su-by-leetcode-sol-654m/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var removeElements = function(head, val) {
    if (head === null) return head;
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};