'use strict';
const search=require('./carstorageAsync');

search().then(console.log)

search('licence', 'ABC-1').then(console.log)

search('licence', 'X-1').then(console.log)

search('licence', 'ABC-1')
    .then(result=>console.log('result',result))

search('model','Bored T-model')
    .then(result=>{
        console.log('Bored T-model:')
        for(const car of result){
            console.log(`\t${car.licence}`);
        }
    })

async function test(){
        const result = await search('model', 'Bored T-model');
        if(result.length===0){
            console.log('Nothing found')
        }
        else{
            console.log('Bored T-model:')
            for (const car of result) {
                console.log(`\t${car.licence}`);
            }
        }  
    } 

test()