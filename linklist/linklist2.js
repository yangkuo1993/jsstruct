/*
 * @Author: your name
 * @Date: 2021-07-22 16:45:05
 * @LastEditTime: 2021-07-22 18:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist2.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 
 * @description 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

进阶：你能尝试使用一趟扫描实现吗？

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz

 */

/**
 * @description 解法1
 * 利用遍历链表长度，得到length，
 * 新建头结点，来当链表前驱，
 * 找到的节点即为删除节点的前驱
 * 指向next，next即可
 * 
 * 时间复杂度 O(L) L 为链表的长度
 * 空间复杂度 O(1)
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//     const length = getLength(head);
//     let newHead = new ListNode(0);
//     newHead.next = head;
//     let now = newHead;
//     for (let i = 0; i < length - n; i++) {
//         now = now.next;
//     }
//     now.next = now.next.next;
//     return newHead.next;
// };



/**
 * @description 方法2 栈
 * 
 * 时间复杂度：O(L)O(L)，其中 LL 是链表的长度。

空间复杂度：O(L)O(L)，其中 LL 是链表的长度。主要为栈的开销。
 */

// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function (head, n) {
//     const empty = [];
//     const now = new ListNode(0);
//     now.next = head;
//     for (let i = now; i != null; i = i.next) {
//         empty.push(i);
//     }
//     const prev = empty[empty.length - n - 1];
//     prev.next = prev.next.next;
//     return now.next;
//  }


/**
 * 
 * @description 第三种做法 双指针
 */


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
     let now = new ListNode(0);
     now.next = head;
    let first = head, second = now;
    for (let i = 0; i < n; i ++) {
        first = first.next;
    }
    while(first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return now.next;
 }

//  const test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const test = new ListNode(1, new ListNode(2));

const result1 = removeNthFromEnd(test, 1);

const newOne1 = new LinkList();
newOne1.add(result1);
console.log(newOne1.toListNodeString());