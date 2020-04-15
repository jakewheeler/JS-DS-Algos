// stack class built on top of a linked list

class MyNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek = () => {
    return this.top;
  };

  push = (val) => {
    let node = new MyNode(val);
    if (!this.bottom) {
      this.bottom = node;
      this.top = node;
    } else {
      let currentTop = this.top;
      this.top = node;
      this.top.next = currentTop;
    }

    this.length++;
  };

  pop = () => {
    if (!this.top) return null;

    let prevTop = this.top;

    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
      return prevTop;
    }

    this.top = this.top.next;

    this.length--;
    return prevTop;
  };

  isEmpty = () => this.length <= 0;

  print = () => {
    let current = this.top;
    console.log('| top |');
    while (current) {
      console.log(`  [${current.value}]`);
      current = current.next;
    }
    console.log('| bottom |');
    console.log();

    console.log('length:', this.length);

    if (!this.top) return;

    console.log('top:', this.top.value);
    console.log('bottom:', this.bottom.value);
  };
}

let llstack = new LinkedListStack();

// add to top of stack
llstack.push(3);
llstack.push(1);
llstack.push(2);
llstack.push(22);
llstack.push(39);
llstack.push(89);

// remove 89
let poppedValue = llstack.pop();
console.log('popped value:', poppedValue.value);

// remove 39
llstack.pop();

// add 12
llstack.push(12);

// print stack with 12 at top and 3 at bottom
llstack.print();

if (llstack.peek()) console.log('peek:', llstack.peek().value);

console.log('isEmpty:', llstack.isEmpty());
