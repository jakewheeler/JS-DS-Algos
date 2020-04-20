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

  isLeafNode = (node) => {
    if (!node.left && !node.right) return true;
    return false;
  };

  remove = (value) => {
    if (!this.root) {
      return false;
    }

    let parentNode = null;
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        // go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        // go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // no right child
        if (!currentNode.right) {
          // if parent node is null, we just make the root equal the left node
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          // right child doesnt have a left child
        } else if (currentNode.right.left === null) {
          if (!parentNode) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;

            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          // right child has a left child
        } else {
          // find right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (!leftmost.left) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          // parent's left subtree is leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  };
}

const tree = new BST();
tree.insert(98);
tree.insert(46);
tree.insert(19);
tree.insert(14);
tree.insert(88);
tree.insert(89);
tree.insert(55);
tree.insert(69);
tree.insert(99);
// tree.remove(89);
console.log(JSON.stringify(traverse(tree.root)));

// let node = tree.lookup(9);
// console.log(node);
