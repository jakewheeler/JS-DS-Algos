const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);

  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};

class MyNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert = (value) => {
    // create a new node
    let newNode = new MyNode(value);

    // if the root is empty, new node is the root
    if (!this.root) {
      this.root = newNode;
    } else {
      // otherwise, we traverse through the tree
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return newNode;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return newNode;
          }
          currentNode = currentNode.right;
        }
      }
    }

    // remove
  };

  lookup = (value) => {
    // tree is empty
    if (!this.root) return null;

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode;
      } else if (value < currentNode.value) {
        if (!currentNode.left) {
          return null;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return null;
        }
        currentNode = currentNode.right;
      }
    }
  };
}

const tree = new BST();
tree.insert(9);
tree.insert(18);
tree.insert(20);
tree.insert(20);
tree.insert(170);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));

let node = tree.lookup(9);
console.log(node);
