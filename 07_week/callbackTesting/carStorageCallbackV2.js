'use strict';

const { log } = require('console');
const fs = require('fs');
const storageFileName = './cars.json';

//cb is a callback function
module.exports = (key, value, cb) => {
    //in this case, cb is the last parameter, so both key and value are obligatory params. Because engine is waiting for cte callback as the third parameter. To fix it we must run the next checks.
    if (typeof key === 'function') {
        cb = key;
        key = null;
        value = null;
    }
    if (typeof value === 'function') {
        cb = value;
        key = null;
        value = null;
    }
    fs.readFile(storageFileName, 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
            cb([]);//if error - call cb with empty array
        } else {
            const cars = JSON.parse(data);
            let foundCars = [];
            if (key && value) {
                for (const car of cars) {
                    if (car[key] === value) {
                        foundCars.push(car);
                    }
                }
            } else {
                foundCars = cars;
            }
            cb(foundCars);
        }
    });
};