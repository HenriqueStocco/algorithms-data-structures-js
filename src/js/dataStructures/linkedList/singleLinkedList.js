// HEAD --> (data, next) --> (data, next) --> null
//              NODE             NODE

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertNodeBegin(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  showNodes() {
    let current = this.head;

    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}

const lk = new LinkedList();
lk.insertNodeBegin(1);
lk.insertNodeBegin(2);
lk.insertNodeBegin(3);
lk.insertNodeBegin(4);
lk.showNodes();
