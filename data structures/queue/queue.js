class Queue {
  constructor() {
    this.buckets = [];
  }

  add(data) {
    this.buckets.push(data);
    return data;
  }

  remove() {
    let data = this.buckets.shift();
    return data;
  }

  isEmpty() {
    return this.buckets.length === 0;
  }

  peek() {
    if (this.buckets[0]) return this.buckets[0];
    return null;
  }

  print() {
    console.log('front:', this.buckets, ':back');
  }
}

let q = new Queue();
q.add(3);
q.add(2);
q.add(1);
q.remove();
q.add(16);
console.log(q.peek());
q.print();
