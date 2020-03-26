class MinHeap {
  constructor() {
    this.size = 0;
    this.items = [null];
  }

  getLeftChildIndex = parentIndex => 2 * parentIndex + 1;

  getRightChildIndex = parentIndex => 2 * parentIndex + 2;

  getParentIndex = childIndex => Math.floor(childIndex / 2);

  hasLeftChild = index => this.getLeftChildIndex(index) < this.items.length;

  hasRightChild = index => this.getRightChildIndex(index) < this.items.length;

  hasParent = index => this.getParentIndex(index) >= 0;

  leftChild = index => this.items[this.getLeftChildIndex(index)];

  rightChild = index => this.items[this.getRightChildIndex(index)];

  parent = index => this.items[this.getParentIndex(index)];

  swap = (indexOne, indexTwo) => {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  };

  add = data => {
    this.items.push(data);

    if (this.items.length > 2) {
      // get index of item just added
      let index = this.items.length - 1;
      while (this.items[index] < this.items[this.getParentIndex(index)]) {
        if (index >= 1) {
          this.swap(index, this.getParentIndex(index));
          if (this.parent(index) > 1) {
            index = Math.floor(index / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  print = () => console.log(this.items);
}

let heap = new MinHeap();
heap.add(2);
heap.add(1);
heap.add(3);
heap.add(0);
heap.add(21);
heap.print();
