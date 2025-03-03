'use strict';

const fs = require('fs').promises;
const path = require('path');

module.exports = function createSearch(fileName) {
    const storageFilePath = path.join(__dirname, fileName);

    return function search(key, value) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await fs.readFile(storageFilePath, 'utf8');
                const cars = JSON.parse(data);

                if (arguments.length < 2) {
                    resolve(cars);
                } else {
                    resolve(cars.filter(car => car[key] === value));
                }
            } catch (error) {
                reject([]);
            }
        })
    };
}
