'use strict';

const search = require('../carStoragePromise');

describe('Testing to resolve with key "license" and value "CBA-2"', () => {
    const result = [{ "model": "model 2", "license": "CBA-2" }];

    test('then', () => {
        return search('license', 'CBA-2')
            .then(data => expect(data).toEqual(result));
    });

    test('async-wait', async () => {
        const data = await search('license', 'CBA-2');
        expect(data).toEqual(result)
    });

    test('resolves', () => {
        return expect(search('license', 'CBA-2')).resolves.toEqual(result);
    });//the best one on my opinion

    test('resolves with async', async () => {
        await expect(search('license', 'CBA-2')).resolves.toEqual(result);
    });

    test('resolves', () => {
        return expect(search('license', 'X')).resolves.toEqual([]);
    });
});

describe('Testing to reject"', () => {
    test('catch', () => {
        expect.assertions(1);
        return search()
            .catch(error => expect(error).toEqual([]));
    });

    test('async-await', async () => {
        try {
            await search();
        } catch (error) {
            expect(error).toEqual([]);
        }
    });

    test('rejects', () => {
        return expect(search()).rejects.toEqual([]);
    });//the best one on my opinion

    test('rejects with async', async () => {
        await expect(search()).rejects.toEqual([]);
    });
})