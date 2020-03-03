// stack class built on top of an array

class MyStack {
  constructor() {
    this.data = [];
  }

  push(elem) {
    return this.data.unshift(elem);
  }

  pop() {
    return this.data.shift();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.data[0];
  }

  print() {
    console.log('top: ', this.data, ' :buttom');
  }

  isEmpty() {
    return this.data.length === 0;
  }
}

let stack = new MyStack();

// add to top of stack
stack.push(3);
stack.push(1);
stack.push(2);

// remove from stack
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack.isEmpty());

// check peek
stack.push(1);
stack.push(33);
console.log(stack.peek());

stack.print();
