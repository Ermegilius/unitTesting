'use strict';

const searchCars = require('./carStorageCallback');
//searchCars(console.log);//all cars
//searchCars(console.log, 'model', 'Bored T-model');//search by one model

function printData(data) {
    console.log('#'.repeat(20));
    for (const car of data) {
        console.log(`model: ${car.model}, ${car.license}`);
    }
    console.log('#'.repeat(20));
}

searchCars(printData, 'model', 'Bored T-model');