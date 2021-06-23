/**
@desc 链表
链表是数据元素的线性集合，其顺序不是由它们在内存中的物理位置决定的
相反每个元素都指向下一个，它是一种数据结构，由一组节点组成，这些节点一起表示一个序列。

链表的缺点是访问的时间是线性的，随机访问是不可行的。（数组更适合随机访问）
 */


 function Node(value, next = null) {
     this.value = value;
     this.next = next;
 }


 function NodeList() {
     this.head = null;
     this.length = 0;
 }
/// 添加节点
NodeList.prototype.addNode = function(node) {
    let temp, p;
    temp = node;
    if (!this.head) {
        this.head = temp;
    } else {
        p = this.head;
        while (p.next != null) {
            p = p.next;
        }
        p.next = temp;
    }
    return this.head;
}
/// 展示所有节点
NodeList.prototype.listAll = function() {
    let arr = [];
    if (this.head) {
         arr.push(JSON.stringify(this.head.value));
        while(this.head.next) {
            arr.push(JSON.stringify(this.head.next.value));
            this.head = this.head.next;
        }
    }
    return arr.join("->");
}
/// 在节点之前添加节点
NodeList.prototype.insertAfter = function(node, newNode) {
    if (!node || !newNode) return;
    newNode.next = node.next;
    node.next = newNode;
}
/// 添加头节点
NodeList.prototype.insertBeginning = function(list, newNode) {
    if (!list.head) return;
    newNode.next = list.head;
    list.head = newNode;
}
/// 删除节点之后的固定节点
NodeList.prototype.removeAfter = function(node) {
    if (!node.next) return;
    node.next = node.next.next;
}
/// 删除头节点
NodeList.prototype.removeBeginning = function(list) {
    if (!list.head) return;
    if (!list.head.next) {
        list.head = null;
    } else {
        list.head = list.head.next;
    }
}

let test = new NodeList();
test.head = new Node("yangkuo1111");
let yangkuo2 = new Node("yangkuo2222"),
yangkuo3 = new Node("yangkuo3333"),
yangkuo4 = new Node("yangkuo4444"),
yangkuo5 = new Node("yangkuo5555");

test.addNode(yangkuo2);
test.addNode(yangkuo3);
// test.addNode(yangkuo4);
// test.addNode(yangkuo5);
test.insertAfter(test.head, yangkuo5)
test.insertBeginning(test, yangkuo4)
test.removeAfter(yangkuo2);
test.removeBeginning(test);
console.log(test.listAll())