'use strict';

const Dice = require('../dice');

describe('tests for constructor', () => {


    describe('with no upperBound given', () => {
        const dice = new Dice();

        test('minimumValue is 1', () => {
            expect(dice.minimumValue).toBe(1);
        });
        test('maximumValue is 6', () => {
            expect(dice.maximumValue).toBe(6);
        });
        test('dots is 0', () => {
            expect(dice.dots).toBe(0);
        });

        test('state of the dice is ok', () => {
            expect(dice.minimumValue).toBe(1);
            expect(dice.maximumValue).toBe(6);
            expect(dice.dots).toBe(0);
        })
    })

    describe('with upper bounds 2-20', () => {
        const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);

        test.each(testValues)('Test upperBound %s', upperBound => {
            const dice = new Dice(upperBound);
            expect(dice.minimumValue).toBe(1);
            expect(dice.dots).toBe(0);
            expect(dice.maximumValue).toBe(upperBound);
        })
    })

    describe('Test the exceptions', () => {
        const testValues = [
            ["a", 'upper bound must be an integer'],
            ["1", 'upper bound must be an integer'],
            [2.5, 'upper bound must be an integer'],
            [null, 'upper bound must be an integer'],
            [true, 'upper bound must be an integer'],
            [false, 'upper bound must be an integer'],
            [1, 'upper bound too small'],
            [0, 'upper bound too small'],
            [-1, 'upper bound too small'],
            [21, 'upper bound too big']
        ];
        test.each(testValues)('upperBound %s throws %s', (ub, text) => {
            expect(() => new Dice(ub)).toThrow(text);
        })
    });
    describe('Testing roll', () => {
        describe('default upperBound', () => {
            const dice = new Dice();

            test('when rolled', () => {
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
                expect(dice.dots).toBeLessThanOrEqual(6);
            });
        });

        describe('default upperBound v2', () => {
            const dice = new Dice();

            test('when rolled >=1', () => {
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
            });
            test('when rolled <= 6', () => {
                dice.roll();
                expect(dice.dots).toBeLessThanOrEqual(6);
            });
        });
        describe('default upperBound v2', () => {
            const dice = new Dice();

            test('when rolled >=1', () => {
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
            });
            test('when rolled <= 6', () => {
                dice.roll();
                expect(dice.dots).toBeLessThanOrEqual(6);
            });

        });
        describe('upperBounds 2...20', () => {
            const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);

            test.each(testValues)('test upper bound %s', (upperBound) => {
                const dice = new Dice(upperBound);
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
                expect(dice.dots).toBeLessThanOrEqual(upperBound);
            });
        });
    });
});// end of testing roll

describe('testing toString', () => {
    let dice;
    beforeEach(() => {
        dice = new Dice();
    });
    test('dice rolled', () => {
        dice.roll();
        expect(dice.toString()).toBe(`Dice with ${dice.dots} dots`);
    });
    test('dice not rolled', () => {
        expect(dice.toString()).toBe('not rolled yet');
    });
});

describe('test for roll  sequencies', () => {
    describe('create dice with no upperBound given', () => {
        const dice = new Dice();
        for (let i = 0; i < 100; i++) {
            test(`'${i + 1}th roll'`, () => {
                dice.roll();
                expect(dice.dots).toBeGreaterThanOrEqual(1);
                expect(dice.dots).toBeLessThanOrEqual(6);
            });
        }
        const dotCount = [];
        test('dot distribution ok', () => {
            for (let i = 0; i < 60; i++) {
                dice.roll();
                dotCount.push(dice.dots);
            }
            expect(new Set(dotCount).size).toBe(6);
        });
    });
});