class MyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new MyNode(value);
    this.tail = this.head.next;
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
    this.tail = current.next;
  }

  // prepend data to the linked list
  prepend(data) {
    if (this.head === null) {
      this.head = new MyNode(data);
      this.tail = this.head.next;
      return;
    }
    let newHead = new MyNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  insertAfter(index, data) {
    let currentLoc = 0;
    let current = this.head;

    while (current.next !== null) {
      if (currentLoc === index) {
        let newNode = new MyNode(data);
        let oldNext = current.next;

        // re-route pointers
        current.next = newNode;
        newNode.next = oldNext;
        return;
      }
      currentLoc++;
      current = current.next;
    }
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
      if (current.next.data === data && current.next.data === this.tail.data) {
        this.tail = current;
        this.tail.next = null;
        return;
      } else if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  reverse = () => {
    if (!this.head.next) {
      return this.head;
    }
    let first = head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }
    this.head.next = null;
    this.head = first;
  };

  // print each node in the the linked list
  print() {
    let print = [];
    let current = this.head;
    while (current !== null) {
      print.push(current.data);
      current = current.next;
    }
    console.log(print);
    console.log('head:', this.head.data);
    console.log('tail:', this.tail.data);
  }
}

let ll = new LinkedList(6);
ll.append(3);
ll.append(5);
ll.prepend(1);
ll.prepend(2);
ll.prepend(88);
ll.delete(1);
ll.append(19);
ll.insertAfter(0, 17);
ll.delete(19);
// ll.reverse();
ll.print();
