const DEFAULT_STORAGE_SIZE = 140;

const defaultHashing = (key, max) =>
    [...key].reduce((acc, x) => acc + x.charCodeAt(0), 0) % max;

const createHashTable = (
    storageMaxSize = DEFAULT_STORAGE_SIZE,
    getHash = defaultHashing
) => ({
    storage: Array(storageMaxSize).fill([]),
    map: Object.create(null),
    size: 0,
    set(key, value) {
        const hash = getHash(key, storageMaxSize);
        this.map[key] = hash;
        const storageItem = this.storage[hash];
        const node = storageItem.find((x) => x.key === key);

        if (!node) {
            this.storage[hash] = [...storageItem, { key, value }];
            this.size++;
        } else {
            node.value = value;
        }
    },
    get(key) {
        const hash = getHash(key, storageMaxSize);
        const storageItem = this.storage[hash];
        const node = storageItem.find((x) => x.key === key);
        return node && node.value;
    },
    has(key) {
        return Object.keys(this.map).includes(key);
    },
    delete(key) {
        delete this.map[key];
        const hash = getHash(key, storageMaxSize);
        const storageItem = this.storage[hash];
        const node = storageItem.find((x) => x.key === key);

        if (node) {
            this.storage[hash] = storageItem.filter((x) => x.key !== key);
            return node;
        }

        return null;
    },
    clear() {
        this.map = Object.create(null);
        this.storage = Array(storageMaxSize).fill([]);
        this.size = 0;
    },
    keys() {
        return Object.keys(this.map);
    },
    values() {
        return Object.values(this.map).flatMap((hash) =>
            this.storage[hash].map(({ value }) => value)
        );
    },
    *[Symbol.iterator]() {
        const valuesIterable = Object.values(this.map).flatMap((hash) =>
            this.storage[hash].map(({ value }) => value))

        for (const value of valuesIterable) {
            yield value;
        }
    },
    forEach(callback) {
        return Object.values(this.map).flatMap((hash) => this.storage[hash].map(({ value, key }) => callback(value, key, this)))
    },
});

module.exports = {
    DEFAULT_STORAGE_SIZE,
    defaultHashing,
    createHashTable,
};
