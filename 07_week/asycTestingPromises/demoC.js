'use strict';
const search=require('./carstorageAsync');

// search()
//     .then(console.log)
//     .then(() => search('licence', 'ABC-1'))
//     .then(console.log)
//     .catch(console.log)

async function test(){
        const data = await search();
        console.log(data);
        const result = await search('licence', 'ABC-1');
        console.log(result); 
}

test();