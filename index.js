class Queue {
    items = [];

    enqueue(elemento) {
        this.items.push(elemento);
    }

    dequeue() {
        this.items.shift();
    }

    first() {
        return this.items[0];
    }

    last() {
        return this.items.at(-1);
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(4);

// queue.dequeue();

// console.log(queue.first());
// console.log(queue.last());
console.log(queue.isEmpty());
console.log(queue.size());

console.log(queue.items);