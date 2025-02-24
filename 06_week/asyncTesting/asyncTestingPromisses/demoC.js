'use strict';

const search = require('./carStorageAsync');

// search()
//     .then(console.log)
//     .then(() => search('license', "ABC-1"))
//     .then(console.log)
//     .catch(console.log);

async function test() {
    const data = await search();
    console.log(data);
    const result = await search('license', "ABC-1");
    console.log(result);
}

test();