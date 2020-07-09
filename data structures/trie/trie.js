class TrieNode {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.isWord = false;
  }

  getWord() {
    let output = [];
    let currentNode = this;

    while (currentNode) {
      output.unshift(currentNode.key);
      currentNode = currentNode.parent;
    }
    let word = output.join('');
    return word; //return the full word
  }
}

class Trie {
  constructor() {
    // root has no key
    this.root = new TrieNode(null);
  }

  add(word) {
    let currentNode = this.root;
    let chars = [...word];

    // for each character in the word, create a node
    chars.forEach((ch, i) => {
      // no node exists yet for character, create it
      if (!currentNode.children[ch]) {
        currentNode.children[ch] = new TrieNode(ch); // create node for char
        currentNode.children[ch].parent = currentNode; // set the parent node for char)
      }

      // move to next node
      currentNode = currentNode.children[ch];

      if (i === chars.length - 1) {
        currentNode.isWord = true;
      }
    });
  }

  // return true if word exists
  find(word) {
    let chars = [...word];
    let currentNode = this.root;

    for (let i = 0; i < chars.length; i++) {
      if (!currentNode.children[chars[i]]) {
        return false; // node doesn't exist, no word
      }
      currentNode = currentNode.children[chars[i]];
    }

    return currentNode.isWord;
  }

  getAllByPrefix(prefix) {
    let chars = [...prefix];
    let currentNode = this.root;
    let output = [];

    for (let i = 0; i < chars.length; i++) {
      let ch = chars[i];
      if (!currentNode.children[ch]) {
        return output; // nothing to return
      }
      currentNode = currentNode.children[ch]; // move to next node
    }
    // at the very last node now...
    findAllWords(currentNode, output);

    return output;
  }
}

// last node in prefix, output will hold strings
function findAllWords(node, output) {
  if (node.isWord) {
    output.push(node.getWord());
  }
  let children = Object.keys(node.children);
  for (let i = 0; i < children.length; i++) {
    findAllWords(node.children[children[i]], output);
  }
}

let trie = new Trie();
trie.add('cat');
trie.add('canada');
trie.add('corn');

console.log(trie.find('canada'));
console.log(trie.getAllByPrefix('co'));
