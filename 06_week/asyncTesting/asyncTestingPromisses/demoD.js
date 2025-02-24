'use strict';

const search = require('./carStoragePromise');

// search()
//     .then(console.log)
//     .catch(console.log)
//     .then(() => search('license', "ABC-1"))
//     .then(console.log)
//     .catch(console.log);

async function test1() {
    try {
        const data = await search();
        console.log(data);
    } catch (error) {
        console.log('Error: ', error);
    }

    try {
        const result = await search('license', "ABC-1");
        console.log(result);
    } catch (error) {
        console.log('Error: ', error);
    }
}
test1();
