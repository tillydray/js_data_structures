/* Stacks!

LIFO: last in, first out.

Where does the average person encounter stacks?

functions: push(), pop(), peak(), size().
Array already has these functions in javascript

*/
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};

    this.push = function (val) {
      this.storage[this.count] = val;
      this.count++;
    };

    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }
      this.count--; // we do this first because of 0-indexing
      const last = this.storage[this.count];
      delete this.storage[this.count];
      return last;
    };

    this.peak = function () {
      return this.storage[this.count - 1];
    };

    this.size = function () {
      return this.count;
    };

  }
}

let stack = new Stack();

console.log('pushing foo');
stack.push('foo');
console.log('peaking', stack.peak());
console.log('pushing 2');
stack.push(2);
console.log('checking size', stack.size());
console.log('peaking', stack.peak());
console.log('popping', stack.pop());
console.log('peaking', stack.peak());
console.log('checking size', stack.size());

