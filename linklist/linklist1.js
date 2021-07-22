/*
 * @Author: your name
 * @Date: 2021-07-16 11:41:14
 * @LastEditTime: 2021-07-22 16:31:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist1.js
 */
/**
 * 
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

输入：l1 = [0], l2 = [0]
输出：[0]

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

提示：

每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let head = null, tail =null;
    let carry = 0;
    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;

        const sum = n1 + n2 + carry;

        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);

        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }

    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
};

const l1 = new ListNode(9, new ListNode(9, new ListNode(9 , new ListNode(9 , new ListNode(9 , new ListNode(9 , new ListNode(9)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9 , new ListNode(9))));

const result = addTwoNumbers(l1, l2);
console.log(result);
const newOne = new LinkList();
newOne.add(result);
console.log(newOne.toListNodeString());


/**
 * 复杂度分析
 * 时间复杂度：O(Max(m,n)) 要遍历链表的全部位置，处理每个位置只需要O(1)
 * 空间复杂度 O(1)
 * */ 