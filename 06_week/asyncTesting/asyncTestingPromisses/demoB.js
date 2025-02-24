'use strict';

const search = require('./carStorageAsync');

search().then(console.log).catch(console.log);

//search("license", "ABC-1").then(console.log).catch(console.log);
//search("license", "CCC-1").then(console.log).catch(console.log);
//search("license", "CCC-1").then(result => console.log('result ', result));


// search("license", "XXX-4")
//     .then(result => console.log('result ', result));

// search("model", "model 3")
//     .then(result => {
//         console.log('model 3 :')
//         for (const car of result) {
//             console.log(`\t${car.license}`);
//         }
//     });

async function test() {
    const result = await search("model", "model 3");
    if (result.length === 0) {
        console.log("Nothing found");
    } else {
        console.log('model 3 :')
        for (const car of result) {
            console.log(`\t${car.license}`);

        }
    }
}