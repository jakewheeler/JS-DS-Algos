class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek = () => this.first;

  enqueue = (val) => {
    let node = new MyNode(val);

    // check if first is null
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    this.length++;
    return this.last;
  };

  dequeue = () => {
    if (!this.first) return null;

    if (this.first === this.last) {
      this.last = null;
    }
    let oldFirst = this.first;
    this.first = oldFirst.next;
    this.length--;
    return oldFirst;
  };

  isEmpty = () => this.length <= 0;

  print = () => {
    console.log('first:', this.first.value);
    console.log('last:', this.last.value);
    console.log('length:', this.length);
    console.log('empty:', this.isEmpty());
  };
}

let q = new Queue();

// add to Q
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

// remove the first element
q.dequeue();

// print results
q.print();

console.log('peek:', q.peek().value);
// q.enqueue(1);
// q.dequeue();
// q.enqueue(16);
// console.log(q.peek());
