const fs = require('node:fs/promises');
const { v4: generateId } = require('uuid');
const { NotFoundError } = require('../util/errors.js');

const FILE_PATH = 'storage/orders.json';

async function readData() {
    const data = await fs.readFile(FILE_PATH, 'utf8');
    return JSON.parse(data);
}

async function writeData(data) {
    await fs.writeFile(FILE_PATH, JSON.stringify(data));
}

async function getAll() {
    const storedData = await readData();
    if (!storedData.orders) {
        throw new NotFoundError('Could not find any orders.');
    }
    return storedData.orders;
}

async function get(id) {
    const storedData = await readData();
    if (!storedData.orders || storedData.orders.length === 0) {
        throw new NotFoundError('Could not find any orders.');
    }

    const order = storedData.orders.find((ev) => ev.id === id);
    if (!order) {
        throw new NotFoundError('Could not find order for id ' + id);
    }

    return order;
}

async function add(data) {
    const storedData = await readData();
    storedData.orders.unshift({ ...data, id: generateId() });
    await writeData(storedData);
}

async function replace(id, data) {
    const storedData = await readData();
    if (!storedData.orders || storedData.orders.length === 0) {
        throw new NotFoundError('Could not find any meals.');
    }

    const index = storedData.orders.findIndex((order) => order.id === id);
    if (index < 0) {
        throw new NotFoundError('Could not find meal for id ' + id);
    }

    storedData.orders[index] = { ...data, id };

    await writeData(storedData);
}

async function remove(id) {
    const storedData = await readData();
    const updatedData = storedData.orders.filter((ev) => ev.id !== id);
    await writeData({orders: updatedData});
}

exports.getAll = getAll;
exports.get = get;
exports.add = add;
exports.replace = replace;
exports.remove = remove;
