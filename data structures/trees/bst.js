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

  isValidBst = () => {
    const checkValid = (node, min, max) => {
      if (!node) {
        return true;
      }
      let value = node.value;

      if (value <= min || value >= max) {
        return false;
      }

      if (!checkValid(node.right, value, max)) return false;
      if (!checkValid(node.left, min, value)) return false;

      return true;
    };

    return checkValid(
      this.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  };

  bfs = () => {
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  };

  bfsR = (queue, list) => {
    if (!queue.length) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.bfsR(queue, list);
  };

  dfsInorder = () => {
    const traverseInorder = (node, list) => {
      if (node.left) {
        traverseInorder(node.left, list);
      }
      list.push(node.value);

      if (node.right) {
        traverseInorder(node.right, list);
      }

      return list;
    };
    return traverseInorder(this.root, []);
  };
  dfsPostorder = () => {
    const traversePostorder = (node, list) => {
      if (node.left) {
        traversePostorder(node.left, list);
      }

      if (node.right) {
        traversePostorder(node.right, list);
      }

      list.push(node.value);

      return list;
    };
    return traversePostorder(this.root, []);
  };
  dfsPreorder = () => {
    const traversePreorder = (node, list) => {
      list.push(node.value);

      if (node.left) {
        traversePreorder(node.left, list);
      }

      if (node.right) {
        traversePreorder(node.right, list);
      }

      return list;
    };

    return traversePreorder(this.root, []);
  };
}

const tree = new BST();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// let bfs = tree.bfs();
// console.log(bfs);
// let bfsR = tree.bfsR([tree.root], []);
// console.log(bfsR);

console.log('in order:', tree.dfsInorder());
console.log('pre order:', tree.dfsPreorder());
console.log('Post order:', tree.dfsPostorder());
console.log('isValidBst:', tree.isValidBst());

// let node = tree.lookup(9);
// console.log(node);
