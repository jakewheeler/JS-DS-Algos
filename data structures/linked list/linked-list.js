class MyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // append data to the linked list
  append(data) {
    if (this.head === null) {
      this.head = new MyNode(data);
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new MyNode(data);
  }

  // prepend data to the linked list
  prepend(data) {
    if (this.head === null) {
      this.head = new MyNode(data);
      return;
    }
    let newHead = new MyNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  // delete first node with specified value
  delete(data) {
    if (this.head === null) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // print each node in the the linked list
  print() {
    let print = [];
    let current = this.head;
    while (current !== null) {
      print.push(current.data);
      current = current.next;
    }
    console.log(print);
  }
}

let ll = new LinkedList();
ll.append(3);
ll.append(5);
ll.prepend(1);
ll.prepend(2);
ll.prepend(5);
ll.delete(1);
ll.print();
