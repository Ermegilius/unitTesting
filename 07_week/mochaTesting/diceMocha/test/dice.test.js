'use strict';

import { expect } from 'chai';
import Dice from '../dice.js';

describe('methods/properties defined', function () {
    const dice = new Dice();
    it('getter maximumValue is defined', function () {
        expect(dice).to.have.a.property('maximumValue');
    });
    it('method roll is defined', function () {
        expect(dice).to.have.a.property('roll');
    });
    //not needed, because toString is always defined
    it('method toString is defined', function () {
        expect(dice).to.have.a.property('toString');
    });
});

describe('test roll', function () {
    let dice;
    this.beforeEach(function () {
        dice = new Dice();
    });

    it('test not rolled yet', function () {
        expect(dice.dots).to.equal(0);
    });

    it('test roll', function () {
        dice.roll();
        expect(dice.dots).to.be.within(1, 6);
    })
});