/*
Linked Lists are a type of list where elements are stored in a node.
The node has two pieces of info: the element and a reference to the
next node (or a link).

Vs Array:

- Linked List has dynamic size and therefore no waste of memory. Array
is fixed and therefore wastes memory.
- LL has efficient insertions and deletions but arrays don't.
- However LL has no random access (no indexing)
- LL has slow sequential access since data is not stored sequentially
on the disk.

*/
class LinkedList {
  constructor() {
    let length = 0;
    let head = null;
    class Node {
      constructor(element) {
        this.element = element;
        this.next = null;
      }
    }
    this.length = function () {
      return length;
    };
    this.head = function () {
      return head;
    };
    this.add = function (element) {
      const node = new Node(element);
      // if the list is empty, add element and make it head
      if (head === null) {
        head = node;
      }
      else {
        // always start at the head
        let currentNode = head;
        // iterate to the end of the list
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      length++;
    };
    this.remove = function (element) {
      if (head === null) {
        return "list is already empty, nothing to remove";
      }
      let currentNode = head;
      let previousNode;
      if (currentNode.element === element) {
        head = currentNode.next;
      }
      else {
        while (currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        // change the link between the nodes that surround the element to be removed
        previousNode.next = currentNode.next;
      }
      length--;
    };
    this.isEmpty = function () {
      return length === 0;
    };
    this.indexOf = function (element) {
      let currentNode = head;
      let index = -1;
      while (currentNode) {
        index++;
        if (currentNode.element === element) {
          return index;
        }
        currentNode = currentNode.next;
      }
      return -1;
    };
    this.elementAt = function (index) {
      if (this.isEmpty) {
        return "list is empty";
      }
      if (index > this.length) {
        return false;
      }
      let currentNode = head;
      let count = 0; // 1, 2, 3, 4, 5, 6, 7, 8, 9
      while (count < index) {
        count++;
        currentNode = currentNode.next;
      }
      return currentNode.element;
    };
    // stop here
    this.addAt = function (index, element) {
      let node = new Node(element);
      let currentNode = head;
      let previousNode;
      let currentIndex = 0;
      if (index > length) {
        return false;
      }
      if (index === 0) {
        node.next = currentNode;
        head = node;
      }
      else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
      }
      length++;
    };
    this.removeAt = function (index) {
      let currentNode = head;
      let previousNode;
      let currentIndex = 0;
      if (index < 0 || index >= length) {
        return false;
      }
      if (index === 0) {
        head = currentNode.node;
      }
      else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.node;
      }
      length--;
      return currentNode.element;
    };
  }
}

let foo = new LinkedList();
console.log('are you empty?', foo.isEmpty());
console.log(foo.remove(1));
console.log('length is', foo.length());
console.log('head is', foo.head());
console.log('indexOf 3 is', foo.indexOf(3));
console.log('elementAt 3 is', foo.elementAt(3));
console.log('\nadding things\n');
foo.add(1);
foo.add(2);
foo.add(3);
console.log('length is', foo.length());
console.log('head is', foo.head());
console.log('indexOf 3 is', foo.indexOf(3));
console.log('elementAt 3 is', foo.elementAt(3));
console.log('\nmodifying list\n');
foo.remove(1);
foo.add(4);
console.log('length is', foo.length());
console.log('head is', foo.head());
console.log('are you empty?', foo.isEmpty());
console.log('indexOf 9 is', foo.indexOf(9));
