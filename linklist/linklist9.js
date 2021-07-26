/*
 * @Author: your name
 * @Date: 2021-07-26 19:41:56
 * @LastEditTime: 2021-07-26 20:01:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist9.js
 */
/**
 * @description
 * 
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除链表中所有存在数字重复情况的节点，只保留原始链表中 没有重复出现 的数字。

返回同样按升序排列的结果链表。

 

示例 1：


输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：


输入：head = [1,1,1,2,3]
输出：[2,3]
 

提示：

链表中节点数目在范围 [0, 300] 内
-100 <= Node.val <= 100
题目数据保证链表已经按升序排列

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii
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
 * @return {ListNode}
 * 时间复杂度：O(n)O(n)，其中 nn 是链表的长度。

空间复杂度：O(1)O(1)。
 */
 var deleteDuplicates = function(head) {
    if (head === null) {
        return head;
    }
    let dummy = new ListNode(0, head);
    let curr = dummy;
    while(curr.next && curr.next.next) {
        if (curr.next.val === curr.next.next.val) {
            const x = curr.next.val;
            while(curr.next && curr.next.val === x) {
                curr.next = curr.next.next;
            }
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
};