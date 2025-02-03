'use strict';

const Dice = require('./dice');

const diceA = new Dice;
const diceB = new Dice;


console.log(diceA.dots);
console.log(diceA.dots);

console.log('max: ', diceA.maximumValue);
console.log('min: ', diceA.minimumValue);

console.log(diceA.toString());
console.log(diceB.toString());

console.log('diceA: ' + diceA);
console.log('diceB: ' + diceB);
console.log('****************************************');
console.log(`DiceA: ${diceA}, DiceB: ${diceB}`);

diceA.roll();
diceB.roll();
console.log(diceA.dots);
console.log(diceB.dots);

if (diceA.dots > diceB.dots) { console.log("Dice A wins!") };
if (diceA.dots < diceB.dots) { console.log("Dice B wins!") };
if (diceA.dots === diceB.dots) { console.log("It's a tie!") }

console.log('****************************************');

const diceArray = [new Dice(), new Dice(), new Dice()];
diceArray.forEach(
    dice => {
        console.log(dice.toString());

    }
);

diceArray.forEach(dice => dice.roll());
diceArray.forEach(
    dice => {
        console.log(dice.toString());

    }
);