'use strict';

test('This is the first test', () => {
    console.log('The first test was done!');
});

it('This is the second test', () => {
    console.log('The second test was done!');
});

beforeAll(() => {
    console.log('beforeAll', 'init before all tests');
});

afterAll(() => {
    console.log('afterAll', 'clean after all tests');
});

describe('This is a group A', () => {
    test('This is the first test of group A', () => {
        console.log('The first test of group A was done!');
    });
    test('This is the first second of group A', () => {
        console.log('The second test of group A was done!');
    });
    beforeEach(() => {
        console.log('beforeEach', 'init before each test of group A');
    });
    afterEach(() => {
        console.log('afterEach', 'clean after each test of group A');
    });
});// end of group A

describe('This is a group B', () => {
    beforeAll(() => {
        console.log('beforeAll', 'init before all tests of group B');
    });

    describe('This is a group B1', () => {
        test('test B1', () => {
            console.log('test B1');
        });
        test('test B2', () => {
            console.log('test B2');
        });
    });

    describe('This is a group B2', () => {
        test('test B3', () => {
            console.log('test B3');
        });
        test('test B4', () => {
            console.log('test B4');
        });
    });
});

describe('test addition', () => {
    test('2+2=4', () => {
        expect(2 + 2).toBe(4);
    });
});


