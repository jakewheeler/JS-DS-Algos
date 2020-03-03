class HashTable {
  constructor() {
    this.data = new Array(11);
  }

  // super basic hash function
  computeHash(key) {
    let hash = 11;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * key.charCodeAt(i)) % this.data.length;
    }
    return hash;
  }
  // adds a kv pair to the array based on hashed index
  put(key, value) {
    let index = this.computeHash(key);
    this.data[index] = value;
  }

  // get a value by key from the hash table
  get(key) {
    let index = this.computeHash(key);
    return this.data[index];
  }
}

let ht = new HashTable();
ht.put('age', 25);
console.log(ht.get('age'));
