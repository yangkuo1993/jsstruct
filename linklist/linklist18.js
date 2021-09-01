/*
 * @Author: your name
 * @Date: 2021-08-10 15:53:33
 * @LastEditTime: 2021-08-10 16:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist18.js
 */

/**
 * @description 
给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。

 

示例 1：

输入：[1,2,3,4,5]
输出：此列表中的结点 3 (序列化形式：[3,4,5])
返回的结点值为 3 。 (测评系统对该结点序列化表述是 [3,4,5])。
注意，我们返回了一个 ListNode 类型的对象 ans，这样：
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, 以及 ans.next.next.next = NULL.
示例 2：

输入：[1,2,3,4,5,6]
输出：此列表中的结点 4 (序列化形式：[4,5,6])
由于该列表有两个中间结点，值分别为 3 和 4，我们返回第二个结点。
 

提示：

给定链表的结点数介于 1 和 100 之间。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

 function getLength(listnode) {
    let length = 0;
    let head = listnode;
    while (head) {
      length++;
      head = head.next;
    }
    return length;
  }
/**
 * @param {ListNode} head
 * @return {ListNode}
 * @description 时间复杂度：O(N)O(N)，其中 NN 是给定链表的结点数目。

空间复杂度：O(1)O(1)，只需要常数空间存放变量和指针。
 */
// var middleNode = function(head) {
//     if (head === null) return null;
//     const length = getLength(head);
//     const mid = Math.floor(length / 2);
//     let index = 0;
//     let temp = head;
//     while(index < mid && temp) {
//         index++;
//         temp = temp.next;
//     }
//     return temp;
// };


/**
 * 方法二 快慢指针
 * @description 时间复杂度：O(N)O(N)，其中 NN 是给定链表的结点数目。空间复杂度：O(1)O(1)，只需要常数空间存放变量和指针。
 */

 var middleNode = function(head) {
    if (head === null) return null;
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};


const test = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));


console.log(middleNode(test))