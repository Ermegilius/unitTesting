'use strict';

const search=require('../carstoragePromise');

describe('Testing to resolve with key "licence" and value "ABC-1"',()=>{

    const result = [{ "model": "Bored T-model", "licence": "ABC-1" }];

    test('then', ()=>{
        return search('licence','ABC-1')
            .then(data=>expect(data).toEqual(result));
    });

    test('async-wait', async ()=>{
        const data = await search('licence', 'ABC-1');
        expect(data).toEqual(result);
    });

    test('resolves', ()=>{
        return expect(search('licence', 'ABC-1')).resolves.toEqual(result)
    });

    test('resolves with async', async ()=>{
        await expect(search('licence', 'ABC-1')).resolves.toEqual(result)
    });

    test('resolves', () => {
        return expect(search('licence', 'X-1')).resolves.toEqual([]);
    });
});

describe('Testing to reject', ()=>{
    test('catch', ()=>{
        expect.assertions(1);
        return search()
            .catch(err=>expect(err).toEqual([]));
    });

    test('async-await', async ()=>{
        expect.assertions(1);
        try{
            await search();
        }
        catch(err){
            expect(err).toEqual([]);
        }
    })

    test('rejects', ()=>{
        return expect(search()).rejects.toEqual([]);
    });

    test('rejects with async', async()=>{
        await expect(search()).rejects.toEqual([]);
    });

})