/*
 * @Author: your name
 * @Date: 2021-08-12 15:31:18
 * @LastEditTime: 2021-08-13 10:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist31.js
 */
/**
 * 给定一个链表的 头节点 head ，请判断其是否为回文链表。

如果一个链表是回文，那么链表节点序列从前往后看和从后往前看是相同的。

 

示例 1：



输入: head = [1,2,3,3,2,1]
输出: true
示例 2：



输入: head = [1,2]
输出: fasle
 

提示：

链表 L 的长度范围为 [1, 105]
0 <= node.val <= 9
 

进阶：能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/aMhZSa
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var reverseList = function(head) {
    let pre = null;
    let curr = head;
    while(curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
}

var getHalfList = function(head) {
    let fast = head;
    let slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
     if (head === null) return true;
    let firstHead = getHalfList(head);
    let secondHead = reverseList(firstHead.next);

    let p1 = head;
    let p2 = secondHead;
    let result = true;
    while(result && p2) {
        if (p1.val !== p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }
    firstHead.next = reverseList(secondHead);
    return result;
};