const { createHashTable, DEFAULT_STORAGE_SIZE } = require('./HashTable')

it("Should create hash table with default storage size", () => {
    const table = createHashTable();

    expect(table.size).toBe(0);
    expect(table.storage.length).toBe(DEFAULT_STORAGE_SIZE);
});

it("Should create hash table with provided storage size", () => {
    const NEW_STORAGE_SIZE = 100;
    const table = createHashTable(NEW_STORAGE_SIZE);

    expect(table.size).toBe(0);
    expect(table.storage.length).toBe(NEW_STORAGE_SIZE);
});


it("Should set key and value", () => {
    const table = createHashTable();

    expect(table.size).toBe(0);

    table.set('first', 1);
    table.set('second', 2);

    expect(table.size).toBe(2);
    expect(table.get('first')).toBe(1);
    expect(table.get('second')).toBe(2);
});

it("Should update value if key already exists", () => {
    const table = createHashTable();

    expect(table.size).toBe(0);

    table.set('first', 1);
    table.set('first', 2);

    expect(table.size).toBe(1);

    expect(table.get('first')).toBe(2);
});

it("Should return value for existing key", () => {
    const table = createHashTable();

    table.set('key', 2);

    expect(table.get('key')).toBe(2);
});

it("Should return undefined if no key", () => {
    const table = createHashTable();

    expect(table.get('key')).toBeUndefined();
});

it("Should return true if value was set", () => {
    const table = createHashTable();

    table.set('key', 2);

    expect(table.has('key')).toBe(true);
});

it("Should return false if has no value and key", () => {
    const table = createHashTable();

    expect(table.has('key')).toBe(false);
});

it("Should delete and return element by key", () => {
    const table = createHashTable();

    table.set('key', 2);

    expect(table.delete('key')).toEqual({ key: 'key', value: 2 });
});

it("Should return null if delete non-existent element", () => {
    const table = createHashTable();

    expect(table.delete('key')).toBeNull();
});

it("Should clear table", () => {
    const table = createHashTable();

    expect(table.size).toBe(0);

    table.set('first', 1);
    table.set('second', 2);

    expect(table.size).toBe(2);

    table.clear();

    expect(table.size).toBe(0);
    expect(table.has('first')).toBe(false);
    expect(table.has('second')).toBe(false);
});

it("Should return table keys", () => {
    const table = createHashTable();

    table.set('first', 1);
    table.set('second', 2);

    expect(table.keys()).toEqual(['first', 'second']);
});

it("Should return table values", () => {
    const table = createHashTable();

    table.set('first', 1);
    table.set('second', 2);
    table.set('third', 3);

    expect(table.values()).toEqual([1, 2, 3])
});

it("Should support iterable", () => {
    const table = createHashTable();

    table.set('first', 1);
    table.set('second', 2);
    table.set('third', 3);

    expect([...table]).toEqual([1, 2, 3]);
});