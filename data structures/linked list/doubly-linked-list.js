class MyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    this.head = new MyNode(data);
    this.tail = this.head;
    this.length = 1;
  }

  append = (value) => {
    if (this.head === null) {
      this.head = new MyNode(value);
      this.tail = this.head;
    }
    const newNode = new MyNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  };

  prepend = (value) => {
    if (this.head === null) {
      this.head = new MyNode(value);
      this.tail = this.head;
    }
    const newNode = new MyNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  };

  insert = (index, value) => {
    let current = this.head;
    const newNode = new MyNode(value);
    let count = 0;
    while (current.next !== null) {
      current = current.next;
      count++;
      if (count === index) {
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
        this.length++;
        break;
      }
    }
  };

  print = () => {
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
    console.log(`size: ${this.length}`);
  };
}

let list = new DoublyLinkedList(10);
list.append(20);
list.append(54);
list.append(28);
list.prepend(35);
list.prepend(68);
list.insert(1, 15);
list.insert(4, 88);
list.print();
