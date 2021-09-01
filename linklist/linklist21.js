/*
 * @Author: your name
 * @Date: 2021-08-10 18:30:45
 * @LastEditTime: 2021-08-11 17:50:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist21.js
 */
/**
 * 编写一个函数，检查输入的链表是否是回文的。

 

示例 1：

输入： 1->2
输出： false 
示例 2：

输入： 1->2->2->1
输出： true 
 

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * O(1)
 */

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

// var reverseList = function(head) {
//     if (head === null) return head;
//     let prev = null;
//     let curr = head;
//     while(curr) {
//         let next = curr.next;
//         curr.next = prev;
//         prev = curr;
//         curr = next;
//     }
//     return prev;
// }

/**
 * @description 方法一 复制链表值到数组列表中。
使用双指针法判断是否为回文。
 * @param {*} head 
 * @return {boolean}
 * 
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

//  var isPalindrome = function(head) {
//      if (head === null) return null;
//     let empty = [];
//     while(head) {
//         empty.push(head.val);
//         head = head.next;
//     }
//     for (let i = 0, j = empty.length - 1; i < j; ++i, --j) {
//         if (empty[i] !== empty[j]) {
//             return false;
//         }
//     }
//     return true;
// };

/**
 * 方法二 递归
 * 时间复杂度：O(n)O(n)，其中 nn 指的是链表的大小。
 * 空间复杂度：O(n)O(n)，其中 nn 指的是链表的大小。我们要理解计算机如何运行递归函数，在一个函数中调用一个函数时，计算机需要在进入被调用函数之前跟踪它在当前函数中的位置（以及任何局部变量的值），通过运行时存放在堆栈中来实现（堆栈帧）。在堆栈中存放好了数据后就可以进入被调用的函数。在完成被调用函数之后，他会弹出堆栈顶部元素，以恢复在进行函数调用之前所在的函数。在进行回文检查之前，递归函数将在堆栈中创建 nn 个堆栈帧，计算机会逐个弹出进行处理。所以在使用递归时空间复杂度要考虑堆栈的使用情况。
这种方法不仅使用了 O(n)O(n) 的空间，且比第一种方法更差，因为在许多语言中，堆栈帧的开销很大（如 Python），并且最大的运行时堆栈深度为 1000（可以增加，但是有可能导致底层解释程序内存出错）。为每个节点创建堆栈帧极大的限制了算法能够处理的最大链表大小。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci/solution/hui-wen-lian-biao-by-leetcode-solution-6cp3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
//  let frontPointer;
// const recursivelyCheck = (currentNode) => {
//     if (currentNode != null) {
//         if (!recursivelyCheck(currentNode.next)) {
//             return false;
//         }
//         if (currentNode.val !== frontPointer.val) {
//             return false;
//         }
//         frontPointer = frontPointer.next;
//     }
//     return true;
// }

//  var isPalindrome = function(head) {
//     frontPointer = head;
//     return recursivelyCheck(head);
// };


/**
 * 方法三
 * 快慢指针
 * 避免使用 O(n)O(n) 额外空间的方法就是改变输入。
 * 
 * 时间复杂度：O(n)O(n)，其中 nn 指的是链表的大小。

空间复杂度：O(1)O(1)。我们只会修改原本链表中节点的指向，而在堆栈上的堆栈帧不超过 O(1)O(1)。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/palindrome-linked-list-lcci/solution/hui-wen-lian-biao-by-leetcode-solution-6cp3/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var reverseList = function(head) {
    if (head === null) return null;
    let prev = null;
    let current = head;
    while(current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const endOfFirstHalf = (head) => {
    let fast = head;
    let slow = head;
    while(fast.next !== null && fast.next.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
} 

 var isPalindrome = function(head) {
    if (head === null) return true;
    let firstHead = endOfFirstHalf(head);
    let secondHead = reverseList(firstHead.next);

    let p1 = head;
    let p2 = secondHead;
    let result = true;
    while(result && p2 !== null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    firstHead.next = reverseList(secondHead);
    return result;
};


const test = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(1))));


console.log(isPalindrome(test))