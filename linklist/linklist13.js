/*
 * @Author: your name
 * @Date: 2021-07-27 17:32:22
 * @LastEditTime: 2021-07-27 18:58:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist/linklist13.js
 */
/**
 * 给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 true 。 否则，返回 false 。

 

进阶：

你能用 O(1)（即，常量）内存解决此问题吗？

 

示例 1：



输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：



输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：



输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
 

提示：

链表中节点的数目范围是 [0, 104]
-105 <= Node.val <= 105
pos 为 -1 或者链表中的一个 有效索引 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 
 * 方法一快慢指针
 * 
 * 时间复杂度：O(N)O(N)，其中 NN 是链表中的节点数。

当链表中不存在环时，快指针将先于慢指针到达链表尾部，链表中每个节点至多被访问两次。

当链表中存在环时，每一轮移动后，快慢指针的距离将减小一。而初始距离为环的长度，因此至多移动 NN 轮。

空间复杂度：O(1)O(1)。我们只使用了两个指针的额外空间。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/linked-list-cycle/solution/huan-xing-lian-biao-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
// var hasCycle = function(head) {
//     if (head === null || head.next === null) {
//         return false;
//     }
//     let slow = head;
//     let fast = head.next;
//     while(slow !== fast) {
//         if (fast === null || fast.next === null) {
//             return false;
//         }
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return true;
// };


/**
 * 
 * 方法二，哈希表
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    let see = new Set();

    while(head) {
        if (see.has(head)) {
            return true;
        } else {
            see.add(head);
        }
        head = head.next;
    }
    return false;
};

// const test = new ListNode(
//     1,
//     new ListNode(
//       4,
//       new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2))))
//     )
//   );
  
//   const result1 = partition(test, 3);
  
//   const newOne1 = new LinkList();
//   newOne1.add(result1);
//   console.log(newOne1.toListNodeString());