'use strict';

const fs = require('fs').promises;
const path = require('path');
const storageFilePath = path.join(__dirname, 'cars.json');

module.exports = async function search(key, value) {
    try {
        const data = await fs.readFile(storageFilePath, 'utf8');
        const cars = JSON.parse(data);

        if (arguments.length < 2) {
            return cars;
        }
        return cars.filter(car => car[key] === value);

    } catch (error) {
        return [];
    }
};