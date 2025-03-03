'use strict';
const search=require('./carstoragePromise');

// search()
//     .then(console.log)
// //     .catch(console.log)
//     .then(() => search('licence', 'ABC-1'))
//     .then(console.log)
//     .catch(console.log)

async function test(){
        try{
                const data = await search();
                console.log(data);
                const result = await search('licence', 'ABC-1');
                console.log(result); 
        }
       catch(err){
          console.log(err);
       }
}

// test();

async function test2() {
        try {
          const data = await search();
          console.log(data);
        }
        catch (err) {
          console.log(err);
        }
        try{
          const result = await search('licence', 'ABC-1');
          console.log(result);
        }
        catch (err) {
          console.log(err);
        }
}

test2();