'use strict';

// module.exports = (key, value) => {
//     try {
//         const cars = require('./cars.json');// static, not async
//         if (arguments.length < 2) {
//             return cars;
//         }
//         return cars.filter(car => car[key] === value);
//     } catch (error) {
//         return [];
//     }
// }
const cars = require('./cars.json');// static, not async
module.exports = (key, value) => {
    if (arguments.length < 2) {
        return cars;
    }
    return cars.filter(car => car[key] === value);
}