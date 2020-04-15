class Queue {
  constructor() {
    this.q = new LinkedList(2);
  }

  enqueue(data) {
    this.q.append(data);
  }

  dequeue() {
    this.q.
  }

  isEmpty() {
    return this.q.head === null;
  }

  peek() {
    return this.q.head.data;
  }

  print() {
    this.q.print();
  }
}

let q = new Queue();
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
q.dequeue();
q.enqueue(16);
console.log(q.peek());
q.print();
