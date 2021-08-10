/*
 * @Author: your name
 * @Date: 2021-08-10 16:19:26
 * @LastEditTime: 2021-08-10 17:36:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist19.js
 */

/**
 * 给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。

请你返回该链表所表示数字的 十进制值 。

 

示例 1：



输入：head = [1,0,1]
输出：5
解释：二进制数 (101) 转化为十进制数 (5)
示例 2：

输入：head = [0]
输出：0
示例 3：

输入：head = [1]
输出：1
示例 4：

输入：head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
输出：18880
示例 5：

输入：head = [0,0]
输出：0
 

提示：

链表不为空。
链表的结点总数不超过 30。
每个结点的值不是 0 就是 1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
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
 * @return {number}
 * @description 时间复杂度O(n)空间复杂度O(1)
 */
// var getDecimalValue = function (head) {
//   if (head === null) return null;
//   let length = getLength(head);
//   let count = 0;
//   while (--length) {
//     count += head.val * (2 ** length);
//     head = head.next;
//   }
//   return count +  head.val * (2 ** length);
// };

/**
 * 方法二，翻转链表
 */

var reverseList = function(head) {
    if (head === null || head.next === null) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}

//  var getDecimalValue = function (head) {
//     if (head === null) return null;
//     let reverseHead = reverseList(head);
//     let count = 0;
//     let mi = 0;
//     while(reverseHead) {
//         count += reverseHead.val * 2 ** mi;
//         reverseHead = reverseHead.next;
//         mi++;
//     }
//     return count;
//   };


  /**
   * 方法三
   * 每读取链表的一个节点值，可以认为读到的节点值是当前二进制数的最低位；
当读到下一个节点值的时候，需要将已经读到的结果乘以 22，再将新读到的节点值当作当前二进制数的最低位；
如此进行下去，直到读到了链表的末尾。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/solution/er-jin-zhi-lian-biao-zhuan-zheng-shu-by-leetcode-s/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

时间复杂度O(n)
空间复杂度O(1)
   */

// var getDecimalValue = function (head) {
//     if (head === null) return null;
//     let count = 0;
//     while(head) {
//         count = 2 * count + head.val;
//         head = head.next;
//     }
//     return count;
//   };


const test = new ListNode(1, new ListNode(0, new ListNode(1)));

console.log(getDecimalValue(test));
