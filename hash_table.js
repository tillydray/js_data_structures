/* Hack table

Unordered associative array, invented in 1953

Time complexity:

Algo    Avg   Worst
space   O(n)  O(n)
search  O(1)  O(n)
insert  O(1)  O(n)
delete  O(1)  O(n)

Very fast (relatively) at search, insert, and delete. It's called a hash table
because it takes a key input and runs it through a hash function which
basically maps strings to number, and usually the numbers just correspond to
indexes in an array. The hash function must be consistent so that the same
string always results in the same hash, but there are no collisions (can't have
the same hash)
*/

class DecentHashMap {

  // 9 is pretty small, just here for demo
  constructor(initialCapacity = 9) {
    this.buckets = new Array(initialCapacity);
  }

  hash(key) {
    let hashValue = 0;
    // 'catstring'
    const stringTypeKey = `${key}${typeof key}`;

    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      // console.log(`charCode for ${stringTypeKey[index]} is: ${charCode}`);
      hashValue += charCode << (index * 8);
    }
    console.log(`hashValue is: ${hashValue}`);

    return hashValue;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }

  insert(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }

  lookup(key) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      console.log('this.buckets[bucketIndex] is:', this.buckets[bucketIndex]);
      const entry = this.buckets[bucketIndex][arrayIndex];
      if (entry.key === key) {
        return entry.value
      }
    }
  }

  del(key) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      if (this.buckets[bucketIndex][arrayIndex].key === key) {
        return delete this.buckets[bucketIndex];
      }
    }
  }

  update(key, value) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      if (this.buckets[bucketIndex][arrayIndex].key === key) {
        console.log('this.buckets[bucketIndex][arrayIndex].value is:', this.buckets[bucketIndex][arrayIndex].value);
        this.buckets[bucketIndex][arrayIndex].value = value;
      }
    }
  }
}

const hashMap = new DecentHashMap();

hashMap.insert('cat', 2);
hashMap.insert('rat', 7);
hashMap.insert('dog', 1);
hashMap.insert('art', 8);

// console.log(hashMap.buckets);
// console.log('rat value is:', hashMap.lookup('rat'));
// console.log('deleting art...', hashMap.del('art'));
// console.log('changing value of cat to 0...', hashMap.update('cat', 0));
// console.log(hashMap.buckets);

