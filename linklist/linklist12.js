/*
 * @Author: your name
 * @Date: 2021-07-27 11:52:40
 * @LastEditTime: 2021-07-27 17:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist12.js
 */
/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：

链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

进阶： 你可以使用一趟扫描完成反转吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let result = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return result;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 * 
 * 时间复杂度：O(N)O(N)，其中 NN 是链表总节点数。最坏情况下，需要遍历整个链表。

空间复杂度：O(1)O(1)。只使用到常数个变量。
 */
//  var reverseBetween = function(head, left, right) {
//     if (head === null || head.next === null) {
//         return head;
//     }
//     const dummyHead = new ListNode(-1);
//     dummyHead.next = head;

//     let pre = dummyHead;

//     for (let i = 0; i < left - 1; i++) {
//         pre = pre.next;
//     }

//     let rightNode = pre;

//     for (let i = 0; i< right - left + 1; i++) {
//         rightNode = rightNode.next;
//     }

//     let leftNode = pre.next;
//     let curr = rightNode.next;

//     pre.next = null;
//     rightNode.next = null;

//     reverseList(leftNode);

//     pre.next = rightNode;
//     leftNode.next = curr;
//     return dummyHead.next;

// };


/**
 * 方法二 遍历一次
 * 
 * 时间复杂度：O(N)O(N)，其中 NN 是链表总节点数。最多只遍历了链表一次，就完成了反转。

空间复杂度：O(1)O(1)。只使用到常数个变量。
 */

var reverseBetween = function(head, left, right) {
    if (head === null || head.next === null) {
        return head;
    }
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;

    let pre = dummyHead;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    let curr = pre.next;


    for (let i =0; i < right - left; i++) {
        const next = curr.next;
        curr.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummyHead.next;
};

const test = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(3, new ListNode(4, new ListNode(5)))
    )
  );
  
  const result1 = reverseBetween(test, 2, 4);
  
  const newOne1 = new LinkList();
  newOne1.add(result1);
  console.log(newOne1.toListNodeString());
  