'use strict';

const fs=require('fs').promises;
const path=require('path');


module.exports = function createSearch(filename){
    const storageFilePath = path.join(__dirname, filename);

    return function search(key, value) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await fs.readFile(storageFilePath, 'utf8');
                const cars = JSON.parse(data);

                if (arguments.length < 2) {
                    resolve(cars);
                }
                else {
                    resolve(cars.filter(car => car[key] === value));
                }

            }
            catch (err) {
                reject([]);
            }
        })

    }

}


