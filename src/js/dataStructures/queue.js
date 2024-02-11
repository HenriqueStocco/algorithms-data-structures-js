/*
Queue -> (FIFO): First-In-First-Out
Structure used to maintain the order of execution, e.g:
Imagine a print queue, where documents are printed in the order they are
sent.
 */

class Queue {
  constructor() {
    this.items = [];
  }
  // adds the element to the end of the queue
  enqueue(element) {
    return this.items.push(element);
  }

  // removes the last element from the queue
  dequeue() {
    if (this.isEmpty()) undefined;
    return this.items.shift();
  }

  // shows the first element in the queue
  showFront() {
    if (this.isEmpty()) undefined;
    return this.items[0];
  }

  // checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // shows the size of the queue
  size() {
    return this.items.length;
  }

  // clear the queue
  clear() {
    return this.items = [];
  }
}

let queue = new Queue();
let mapTest = new Map();

mapTest.set((x = 1) => x + 1, 'JS is the best');

queue.enqueue('hello');
queue.enqueue('world');
queue.enqueue(2024);
queue.enqueue([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
queue.enqueue({ 'name': 'John Doe' });
queue.enqueue(mapTest);
console.log(queue);
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.showFront());
queue.clear();
console.log(queue.isEmpty());
