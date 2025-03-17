'use strict';
const expect = require('chai').expect;
// const {expect} = require('chai');

const { sum } =require('../calcLibrary');

describe('Test sum(1,1)=2', function(){
    it('sum(1,1)=2', function(){
        expect(sum(1,1)).to.equal(2);
    });
});

describe('test sum with integers', function(){
    const testValues=[
        {a:-2, b:-4, result:-6},
        { a: -2, b: 4, result: 2 },
        { a: 2, b: -4, result: -2 },
        { a: 0, b: 0, result: 0 }
    ];
                //tc=testcase
    testValues.forEach(function(tc){
        it(`sum(${tc.a},${tc.b})=${tc.result}`, function(){
            expect(sum(tc.a, tc.b)).to.equal(tc.result);
        });
    });
});

describe('Test sum with integers for-of version', function(){
    const testValues = [
        { a: -2, b: -4, result: -6 },
        { a: -2, b: 4, result: 2 },
        { a: 2, b: -4, result: -2 },
        { a: 0, b: 0, result: 0 }
    ];

    for (const v of testValues){
        it(`sum(${v.a}, ${v.b}) = ${v.result}`, function(){
            expect(sum(v.a,v.b)).to.equal(v.result);
        });
    }
});

describe('test sum with integers "jest" version', function(){
    const testValues = [
        //   a, b, result
        [0, 3, 3],
        [3, 0, 3],
        [-3, 0, -3],
        [0, -3, -3]
    ];

    testValues.forEach(function(row){
        it(`sum(${row[0]}, ${row[1]}) = ${row[2]}`, function(){
            expect(sum(row[0],row[1])).to.equal(row[2]);
        });
    });
});

describe('test sum with floats', function(){
    const testValues=[
        {a:-2.5, b:-2.5, result:-5.0},
        { a: -2.5, b: 2.5, result: 0 },
        { a: 2.4, b: -2.5, result: -0.1 }
    ];

    testValues.forEach(function(tc){
        it(`sum(${tc.a}, ${tc.b}) = ${tc.result}`, function(){
            expect(sum(tc.a, tc.b)).to.be.closeTo(tc.result,0.01);
        });
    });

    testValues.forEach(function (tc) {
        it(`sum(${tc.a}, ${tc.b}) = ${tc.result}`, function () {
            expect(sum(tc.a, tc.b))
                .to.be.within(tc.result-0.01, tc.result+0.01);
        });
    });
});

describe('testing exceptions', function(){
    it('sum(1) throws an exception "missing parameter"', function(){
        expect(function(){
            sum(1)
        }).to.throw('parameter missing');
    });
});