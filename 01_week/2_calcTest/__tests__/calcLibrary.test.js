'use strict';

const { sum } = require('../calcLibrary');

describe('Testing sum with integers', () => {
    test('sum(1,1) returns 2', () => {
        expect(sum(1, 1)).toBe(2);
    });

    test('sum(2,3) returns 5', () => {
        expect(sum(2, 3)).toBe(5);
    });

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

    test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => {
        expect(sum(a, b)).toBe(result);
    }); // %s is a placeholder for a variable
});// end of integer test

describe('Testing sum with float', () => {
    const testValues = [
        [10, 11.5, 21.5],
        [2.5, 3, 5.5],
        [-2.5, 3, 0.5],
        [2.4, -2.5, -0.1],
        [499.9, 500.0, 999.9],
        [-499.9, 500.0, 0.1]
    ];

    test.each(testValues)('sum(%s, %s) = %s', (a, b, result) => {
        expect(sum(a, b)).toBeCloseTo(result);
    });
});// end of float test

describe('Testing with missing parameters', () => {
    test('sum() throws an exception', () => {
        expect(() => sum()).toThrow('parameter missing');
    });
    test('sum(1) throws an exception', () => {
        expect(() => sum(1)).toThrow('parameter missing');
    });
    test('sum("a") throws an exception', () => {
        expect(() => sum("a")).toThrow('parameter missing');
    });
});// end of parameter missing test

describe('Testing with missing parameters', () => {
    const testValues = [
        //label            a   b
        ["sum('1','2')", '1', '2'],
        ["sum(1,'2')", 1, '2'],
        ["sum('1',2)", '1', 2],
        ["sum('','')", '', ''],
        ["sum(true,true)", true, true],
        ["sum(false,true)", false, true],
        ["sum(undefined,1)", undefined, 1],
    ];

    test.each(testValues)('%s throws an exception "only numbers are allowed"', (label, a, b) => {
        expect(() => sum(a, b)).toThrow('only numbers are allowed');
    });
}); //end of not numbers test

describe('Testing with numbers are not between -500 and 500', () => {
    const testValues = [
        //a    b
        [1000, 500],
        [500, 1000],
        [500, 501],
        [501, 500],
        [300, 500.1]
    ];
    test.each(testValues)('sum(%s,%s) throws an exception "numbers are not between -500 and 500"', (a, b) => {
        expect(() => sum(a, b)).toThrow('numbers are not between -500 and 500');
    });
}); //end of not numbers test