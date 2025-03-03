'use strict';

export default class Dice {
    #upperBound
    #dotCount

    constructor(upperBound = 6) {
        if (upperBound === undefined) {
            upperBound = 6;
        }
        if (!Number.isInteger(upperBound)) {
            throw new Error('upper bound must be an integer');
        }
        if (upperBound < 2) {
            throw new Error('upper bound too small');
        }
        if (upperBound > 20) {
            throw new Error('upper bound too big');
        }
        this.#upperBound = upperBound;
        this.#dotCount = 0;
    }

    get minimumValue() {
        return 1;
    }

    get maximumValue() {
        return this.#upperBound;
    }

    get dots() {
        return this.#dotCount;
    }

    roll() {
        this.#dotCount = Math.floor(Math.random() * this.#upperBound) + 1;
        //this.#dotCount = 2;
    }

    toString() {
        // if (this.dots === 0) {
        //     return 'not rolled yet';
        // } else {
        //     return `Dice with ${this.dots} dots`;
        // }

        return this.dots === 0 ? 'not rolled yet' : `Dice with ${this.dots} dots`;

    }
}