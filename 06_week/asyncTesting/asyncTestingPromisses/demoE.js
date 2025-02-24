'use strict';

const createSearch = require('./carStoragePromiseV2');
const search = createSearch('./cars.json');

search()
    .then(console.log)
    .catch(console.log)
    .then(() => search('license', "ABC-1"))
    .then(console.log)
    .catch(console.log);

