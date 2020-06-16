const { createQueue } = require('./Queue');

it("Should create empty queue", () => {
    const queue = createQueue();
    expect(queue.length).toBe(0);
    expect(queue.head).toBeNull();
    expect(queue.tail).toBeNull();
});

it("Should put new elements to queue", () => {
    const queue = createQueue();

    expect(queue.head).toBeNull();

    queue.put(1);
    queue.put(2);

    expect(queue.length).toBe(2);
    expect(queue.head.item).toBe(1);
    expect(queue.tail.item).toBe(2);
});

it("Should pick elements from queue", () => {
    const queue = createQueue();

    expect(queue.head).toBeNull();

    queue.put(1);
    queue.put(2);

    expect(queue.pick()).toBe(1);
    expect(queue.pick()).toBe(2);
    expect(queue.length).toBe(0);
});

it("Should return null if pick from empty queue", () => {
    const queue = createQueue();

    expect(queue.head).toBeNull();
    expect(queue.length).toBe(0);
    expect(queue.pick()).toBeNull();
});

it("Should support iterable", () => {
    const queue = createQueue();
    
    queue.put(1);
    queue.put(2);
    queue.put(3);

    expect([...queue]).toEqual([1, 2, 3]);
});