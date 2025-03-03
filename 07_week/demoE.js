'use strict';
const createSearch=require('./carstoragePromiseV2');

const search = createSearch('cars.json');
search('licence', 'ABC-1')
    .then(console.log)
    .catch(console.log)
    

