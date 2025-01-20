# Dice class API

This is Dice class for games. Dice holds the number of dots. The number of dots is between 1 and given upper bound (included). The maximum upper bound is 20. The minimum upper bound is 2 (for coin).

if the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled the dots count can't become 0 again.

## getters

### **dots**

returns the number of dots (dot count).

### **minimumValue**

returns the minimum number of dots. It should be 1.

### **maximumValue**

returns the upper bound of the dice.

## Operations

### **constructor(upperBound)**

-   initializes the dice with upper bound passed as a parameter
-   if no upper bound was given the default upper bound equals 6
-   initializes the dot count to 0

-   if the upper bound was not a number and not an integer, throw an exception `'upper bound must be  an integer'`
-   if the upper bound was not between 2 and 20, throw an exception:
    -   upper bound > 20 `'upper bound is too big'`
    -   upper bound < 2 `'upper bound is too small'`

### methods

#### **roll()**

-   rolls the dice
-   when rolled the dot count will become a random number between 1 and the upper bound (included)
-   returns nothing

#### **toString()**

-   returns dot count (dots) as a text. For example: `'4'`
-   if the dice hasn't been rolled yet, returns the text: `'not rolled yet'`
