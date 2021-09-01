/*
 * @Author: your name
 * @Date: 2021-08-11 18:12:08
 * @LastEditTime: 2021-08-12 09:19:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist23.js
 */
/**
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

 

示例 1：

输入：head = [1,3,2]
输出：[2,3,1]
 */


/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let empty = [];
    while(head) {
        empty.unshift(head.val);
        head = head.next;
    }
    return empty;
};