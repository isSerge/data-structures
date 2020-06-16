const { createDequeue } = require("./Dequeue");

it("Should create empty dequeue", () => {
  const dequeue = createDequeue();
  expect(dequeue.length).toBe(0);
  expect(dequeue.head).toBeNull();
  expect(dequeue.tail).toBeNull();
});

it("Should push new elements to dequeue", () => {
  const dequeue = createDequeue();

  expect(dequeue.head).toBeNull();

  dequeue.push(1);
  dequeue.push(2);

  expect(dequeue.length).toBe(2);
  expect(dequeue.head.item).toBe(1);
  expect(dequeue.tail.item).toBe(2);
});

it("Should pop elements from dequeue", () => {
  const dequeue = createDequeue();

  expect(dequeue.head).toBeNull();

  dequeue.push(1);
  dequeue.push(2);

  expect(dequeue.pop()).toBe(2);
  expect(dequeue.pop()).toBe(1);
  expect(dequeue.length).toBe(0);
});

it("Should unshift elements to dequeue", () => {
  const dequeue = createDequeue();

  expect(dequeue.head).toBeNull();

  dequeue.push(1);
  dequeue.push(2);
  dequeue.unshift(3);
  expect(dequeue.length).toBe(3);

  expect(dequeue.pop()).toBe(2);
  expect(dequeue.pop()).toBe(1);
  expect(dequeue.pop()).toBe(3);
  expect(dequeue.length).toBe(0);
});

it("Should shift elements from dequeue", () => {
  const dequeue = createDequeue();

  expect(dequeue.head).toBeNull();

  dequeue.push(1);
  dequeue.push(2);
  dequeue.unshift(3);
  expect(dequeue.length).toBe(3);

  expect(dequeue.shift()).toBe(3);
  expect(dequeue.length).toBe(2);
});

it("Should return null if pop from empty dequeue", () => {
  const dequeue = createDequeue();

  expect(dequeue.head).toBeNull();
  expect(dequeue.length).toBe(0);
  expect(dequeue.pop()).toBeNull();
});

it("Should support iterable", () => {
  const dequeue = createDequeue();

  dequeue.push(1);
  dequeue.push(2);
  dequeue.push(3);

  expect([...dequeue]).toEqual([1, 2, 3]);
});
