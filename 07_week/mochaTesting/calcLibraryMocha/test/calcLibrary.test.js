'use strict';

import { expect } from 'chai';
import sum from '../calcLibrary.js';

describe('Test sum(1,1)=2', function () {
    it('sum(1,1) should return 2', function () {
        expect(sum(1, 1)).to.equal(2);
    });
});

describe('test sum with integers', function () {
    const testValues = [
        { a: -2, b: 2, expected: 0 },
        { a: -2, b: 4, expected: 2 },
        { a: 2, b: -4, expected: -2 },
        { a: 0, b: 0, expected: 0 },
    ];
    testValues.forEach(function (value) {
        it(`sum(${value.a},${value.b}) should return ${value.expected}`, function () {
            expect(sum(value.a, value.b)).to.equal(value.expected);
        });
    });
});

describe('test sum with integers "jest" version', function () {
    const testValues = [
        // [a, b, result]
        [1, 1, 2],
        [2, 3, 5],
        [2, -4, -2],
        [-2, 4, 2],
        [0, 0, 0],
        [0, 3, 3],
        [3, 0, 3],
        [-3, 0, -3],
        [0, -3, -3],
        [123, 200, 323],
        [-500, -500, -1000],
        [500, 500, 1000],
        [500, -500, 0],
        [-500, 500, 0],
        [500.0, 500.0, 1000.0]
    ];

    testValues.forEach(function (row) {
        it(`sum(${row[0]},${row[1]}) should return ${row[2]}`, function () {
            expect(sum(row[0], row[1])).to.equal(row[2]);
        });
    });
});

describe('test sum with floats', function () {
    const testValues = [
        { a: -2.5, b: -2.5, result: -5.0 },
        { a: -2.5, b: 2.5, result: 0.0 },
        { a: 2.4, b: -2.5, result: -0.1 },
    ];
    testValues.forEach(function (value) {
        it(`sum(${value.a},${value.b}) should return ${value.result}`, function () {
            expect(sum(value.a, value.b))
                .to.be.closeTo(value.result, 0.01);//to be close to the result with a tolerance of 0.01
        });
    });

    testValues.forEach(function (value) {
        it(`sum(${value.a},${value.b}) should return ${value.result}`, function () {
            expect(sum(value.a, value.b))
                .to.be.within(value.result - 0.01, value.result + 0.01);//within the interval
        });
    });
});

describe('testing exceptions', function () {
    it('sim(1) throws an exception "parameter missing"', function () {
        expect(function () {
            sum(1)
        }).to.throw("parameter missing");
    });
});