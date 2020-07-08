class tNode {
  constructor(char) {
    this.char = char;
    this.parent = null;
    this.children = {};
    this.isWord = false;
  }

  getWord() {
    let node = this;
    let output = [];

    while (node) {
      output.unshift(node.char);
      node = node.parent;
    }
    return output.join('');
  }
}

class Trie {
  constructor() {
    this.root = new tNode(null);
  }

  addWord(word) {
    // split word into array of chars
    let chars = [...word];

    let currentNode = this.root;

    // check children to see if character exists
    chars.forEach((ch, i) => {
      // if node does not exist
      if (!currentNode.children[ch]) {
        currentNode.children[ch] = new tNode(ch);
        currentNode.children[ch].parent = currentNode;
      }

      currentNode = currentNode.children[ch];

      // check length to see if it's a word
      if (i === chars.length - 1) {
        currentNode.isWord = true;
      }
    });
  }

  findWord(word) {
    // split word into array of chars
    let chars = [...word];

    // start at root
    let currentNode = this.root;

    // loop through each char in the word
    chars.forEach((ch) => {
      // if the char does not exist, we have no word
      if (currentNode.children[ch]) {
        currentNode = currentNode.children[ch];
      } else {
        return false;
      }
    });

    return currentNode.isWord;
  }

  // get list of words in trie with specified prefix
  findByPrefix(prefix) {
    let chars = [...prefix];
    let currentNode = this.root;
    let output = [];

    chars.forEach((ch) => {
      if (currentNode.children[ch]) {
        currentNode = currentNode.children[ch];
      } else {
        return output; // just return an empty list if the node doesn't exist
      }
    });

    findAllWords(currentNode, output);

    return output;
  }
}

function findAllWords(node, arr) {
  // base case
  if (node.isWord) {
    arr.unshift(node.getWord());
  }

  Object.keys(node.children).forEach((child) => {
    findAllWords(node.children[child], arr);
  });
}

let rootNode = new Trie();
rootNode.addWord('cat');
rootNode.addWord('cars');
rootNode.addWord('concrete');
rootNode.addWord('pickle');
rootNode.addWord('bird');
console.log(rootNode.findByPrefix('co'));
