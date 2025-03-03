'use strict';

const searchCars = require('../carStorageCallback');

describe('testing callbacks', () => {
    test('search with license "ABC-1', done => {
        function cb(data) {
            try {
                expect(data).toEqual([{ "model": "Bored T-model", "license": "ABC-1" }]);
                done();
            } catch (err) {
                done(err);
            }
        }
        searchCars(cb, 'license', 'ABC-1');
    });
});

describe('testing callbacks with testEach', () => {
    const testValues = [
        //key, value, result
        ['license', 'ABC-1', [{ "model": "Bored T-model", "license": "ABC-1" }]],
        ['license', 'YYY', []],
    ];

    test.each(testValues)('%s, %s', (key, value, result, done) => {
        function testCb(data) {
            try {
                expect(data).toEqual(result);
                done();
            } catch (err) {
                done(err);
            }
        }
        searchCars(testCb, key, value);
    })
});