/*
 * @Author: your name
 * @Date: 2021-07-06 09:38:19
 * @LastEditTime: 2021-07-06 09:38:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jsstruct/linklist.js
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  function LinkList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   * @param {ListNode} listnode
   * @returns {Number}
   */
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
   *
   * @param {ListNode} listnode
   * @returns {ListNode}
   */
  LinkList.prototype.add = function (listnode) {
    let length = getLength(listnode);
    if (this.head === null) {
      this.length += length;
      return (this.head = this.tail = listnode);
    }
    let head = this.head;
    while (head.next) {
      head = head.next;
    }
    head.next = listnode;
    this.tail = listnode;
    this.length += length;
    return this.head;
  };
  /**
   * @param {ListNode} listnode
   * @returns {ListNode}
   */
  LinkList.prototype.addHead = function(listnode) {
      if (!listnode) return;
      let head = this.head;
      let listHead = listnode;
      let length = getLength(listnode);
      while(listHead.next) {
          listHead = listHead.next;
      }
      listHead.next = head;
      this.head = listnode;
      this.length += length;
      return this.head;
  }
  /**
   * 
   * @param {ListNode} listnode 
   * @returns {ListNode}
   */
  LinkList.prototype.addTail = function(listnode) {
      if (!listnode) return;
      let head = this.head;
      while(head.next) {
          head = head.next;
      }
      head.next = listnode;
      let length = getLength(listnode);
      this.length += length;
      return this.head;
  }
  /**
   * 
   * @param {Number} index 
   * @param {ListNode} listnode 
   */
  LinkList.prototype.addIndexNode = function(index, listnode) {
      if (index <= 0) {
          this.addHead(listnode);
          return;
      }
      if (index >= this.length) {
          this.addTail(listnode);
          return;
      }
      let start = 0;
      let head = this.head;
      while(start < index) {
          start++;
          head = head.next;
      }
      let nextNext = head.next.next;
      head.next = listnode;
      while(listnode.next) {
          listnode = listnode.next
      }
      listnode.next = nextNext;
      return this.head;
  }
  
  /**
   *
   * @returns {String}
   */
  LinkList.prototype.toListNodeString = function () {
    let str = [];
    let head = this.head;
    while (head) {
      str.push(JSON.stringify(head.val));
      head = head.next;
    }
    return str.join("->");
  };
  
  const demo = new LinkList();
  demo.add(new ListNode("1", new ListNode("7")));
  demo.add(new ListNode("2"));
  demo.add(new ListNode("3", new ListNode("8", new ListNode("9"))));
  demo.add(new ListNode("4"));
  demo.addHead(new ListNode("11", new ListNode("12", new ListNode("13"))))
  demo.addTail(new ListNode("17", new ListNode("18", new ListNode("19"))))
  demo.addIndexNode(2, new ListNode("27", new ListNode("28", new ListNode("29"))))
  console.log(demo.toListNodeString());
  console.log(demo.length);
  