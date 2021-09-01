/*
 * @Author: your name
 * @Date: 2021-07-26 10:59:35
 * @LastEditTime: 2021-07-26 11:49:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist5.js
 */
/**
 * @description
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1：


输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
 

进阶：你能在不修改链表节点值的情况下解决这个问题吗?（也就是说，仅修改节点本身。）
 */

/**
 * 方法一递归
 * @param {ListNode} head
 * 用 head 表示原始链表的头节点，新的链表的第二个节点，用 newHead 表示新的链表的头节点，原始链表的第二个节点，则原始链表中的其余节点的头节点是 newHead.next。令 head.next = swapPairs(newHead.next)，表示将其余节点进行两两交换，交换后的新的头节点为 head 的下一个节点。然后令 newHead.next = head，即完成了所有节点的交换。最后返回新的链表的头节点 newHead。
时间复杂度：O(n)O(n)，其中 nn 是链表的节点数量。需要对每个节点进行更新指针的操作。

空间复杂度：O(n)O(n)，其中 nn 是链表的节点数量。空间复杂度主要取决于递归调用的栈空间。

 * @return {ListNode}
 */
//  var swapPairs = function(head) {
//     if (head === null || head.next=== null) {
//         return head;
//     }
//     let newHead = head.next;
//     head.next = swapPairs(newHead.next);
//     newHead.next = head;
//     return newHead;
// };


/**
 * 方法二 迭代
 * 
 * 时间复杂度：O(n)，其中 n 是链表的节点数量。需要对每个节点进行更新指针的操作。

空间复杂度：O(1)。
 */

var swapPairs = function(head) {
    let dummyHead = new ListNode(0);
    let temp = dummyHead;
    dummyHead.next = head;
    while (temp.next !== null && temp.next.next !== null) {
        let node1 = temp.next;
        let node2 = temp.next.next;
        temp.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        temp = node1;
    }
    return dummyHead.next;
};


const test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

const result1 = swapPairs(test, 1);

const newOne1 = new LinkList();
newOne1.add(result1);
console.log(newOne1.toListNodeString());