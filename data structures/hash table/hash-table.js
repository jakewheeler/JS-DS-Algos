// naive hash table implementation

class HashTable {
  constructor() {
    this.buckets = new Array(3);
    this.itemsInTable = 0;
  }

  // resizes the underlying array when data gets too large
  resize() {
    // do resize
    let newBuckets = new Array(this.buckets.length * 2);
    this.buckets.forEach(arr => {
      if (arr) {
        arr.forEach(([key, value]) => {
          this.addItemToBucket(key, value, newBuckets);
        });
      }
    });
    this.buckets = newBuckets;
  }

  addItemToBucket(key, value, buckets) {
    let index = this.computeHash(key, buckets.length);
    if (buckets[index]) {
      // allow for overwriting
      let item = buckets[index].find(x => x[0] === key);
      if (item) {
        item[1] = value;
      } else {
        buckets[index].push([key, value]);
      }
    } else {
      buckets[index] = [[key, value]];
    }
  }

  // super basic hash function
  computeHash(key, tableLength) {
    let hash = 11;
    for (let i = 0; i < key.length; i++) {
      hash = (hash * key.charCodeAt(i)) % tableLength;
    }
    return hash;
  }
  // adds a kv pair to the array based on hashed index
  put(key, value) {
    // tracking table size this way won't account for overwriting values, fine for example 😄
    this.itemsInTable++;

    // check if we need to resize the table
    let loadFactor = this.itemsInTable / this.buckets.length;
    if (loadFactor > 0.8) {
      this.resize();
    }
    this.addItemToBucket(key, value, this.buckets);
  }

  // get a value by key from the hash table
  get(key) {
    let index = this.computeHash(key, this.buckets.length);
    if (!this.buckets[index]) return null;

    return this.buckets[index].find(k => k[0] === key)[1];
  }
}

let ht = new HashTable();
ht.put('age', 25);
ht.put('test', 'idk');
ht.put('ok', 55);
ht.put('yes', 'hello');
ht.put('yeee', 'yeee');
ht.put('ok', 72);
ht.put('55', '102');

console.log('value at key "ok":', ht.get('ok'));
console.log('table size:', ht.buckets.length);
