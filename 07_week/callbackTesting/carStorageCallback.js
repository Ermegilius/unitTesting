'use strict';

const { log } = require('console');
const fs = require('fs');
const storageFileName = './cars.json';

//cb is a callback function
module.exports = (cb, key, value) => {
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