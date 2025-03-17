'use strict';

module.exports=class Dice{
    #upperBound
    #dotCount

    constructor(uBound=6){
        if(!Number.isInteger(uBound)){
            throw new Error('upper bound must be an integer');
        }
        if(uBound<2){
            throw new Error('upper bound too small');
        }
        if(uBound>20){
            throw new Error('upper bound too big');
        }
        this.#upperBound=uBound
        this.#dotCount=0;
    }

    get minimumValue(){
        return 1;
    }

    get maximumValue(){
        return this.#upperBound;
    }

    get dots(){
        return this.#dotCount;
    }

    roll(){
        this.#dotCount=Math.floor(Math.random()*this.#upperBound)+1;
        // this.#dotCount=2;
    }

    toString(){
        return this.dots === 0 ? 'not rolled yet' : `${this.dots}`;
    }
}