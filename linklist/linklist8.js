/*
 * @Author: your name
 * @Date: 2021-07-26 15:28:55
 * @LastEditTime: 2021-07-26 19:40:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist8.js
 */

/**
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。

 

示例 1：


输入：head = [1,2,3,4,5], k = 2
输出：[4,5,1,2,3]
示例 2：


输入：head = [0,1,2], k = 4
输出：[2,0,1]
 

提示：

链表中节点的数目在范围 [0, 500] 内
-100 <= Node.val <= 100
0 <= k <= 2 * 109

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/rotate-list
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
 * @param {number} k
 * @return {ListNode}
 * 时间复杂度：O(n)O(n)，最坏情况下，我们需要遍历该链表两次。

空间复杂度：O(1)O(1)，我们只需要常数的空间存储若干变量
 */
 var rotateRight = function(head, k) {
    if (k === 0 || head === null || head.next === null) {
        return head;
    }
    let n = 1;
    let curr = head;
    while(curr.next) {
        curr = curr.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }
    curr.next = head;
    
    while(add) {
        curr = curr.next;
        add--;
    }

    const ret = curr.next;
    curr.next = null;
    return ret;
};