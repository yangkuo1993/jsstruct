/*
 * @Author: your name
 * @Date: 2021-07-26 20:13:41
 * @LastEditTime: 2021-07-27 11:51:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist11.js
 */
/**
 * 
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

 

示例 1：


输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]
 

提示：

链表中节点的数目在范围 [0, 200] 内
-100 <= Node.val <= 100
-200 <= x <= 200
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
 * @param {number} x
 * @return {ListNode}
 * 
 * 时间复杂度: O(n)O(n)，其中 nn 是原链表的长度。我们对该链表进行了一次遍历。

空间复杂度: O(1)O(1)。
 */
var partition = function (head, x) {
  let small = new ListNode(0);
  const smallHead = small;
  let large = new ListNode(0);
  const largeHead = large;
  while(head !== null) {
      if (head.val < x) {
        small.next = head;
        small = small.next;
      } else {
        large.next = head;
        large = large.next;
      }
      head = head.next;
  }
  large.next = null;
  small.next = largeHead.next;
  return smallHead.next;
};

const test = new ListNode(
  1,
  new ListNode(
    4,
    new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))
  )
);

const result1 = partition(test, 3);

const newOne1 = new LinkList();
newOne1.add(result1);
console.log(newOne1.toListNodeString());
