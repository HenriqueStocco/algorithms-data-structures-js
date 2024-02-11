// Queue -> (FIFO): First-In-First-Out

class Queue {
  constructor() {
    this.items = [];
  }

  addElement(element) {
    return this.items.push(element);
  }

  delElement() {
    return this.items.pop();
  }

  showTop() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    return this.items = [];
  }

  showQueue() {
    console.log(this.items);
  }

}

let queue = new Queue();
let mapTest = new Map();

mapTest.set((x = 1) => x + 1, 'JS is the best');

// adding elements
queue.addElement('hello');
queue.addElement('world');
queue.addElement(2024);
queue.addElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
queue.addElement({ 'name': 'John Doe' });
queue.addElement(mapTest);

// showing the queue before the element is removed
queue.showQueue();

// checks if the queue is empty
console.log(queue.isEmpty());

// removing element: map object and literal object
queue.delElement();
queue.delElement();

// showing the queue
queue.showQueue();

// showing the last element
console.log(queue.showTop());

// cleaning the queue
queue.clear();

console.log(queue.isEmpty());
