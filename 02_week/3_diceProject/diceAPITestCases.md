# Dice testcases

## tests for constructor

### 1. Create dice with no upper bound given. Initializes a dice with a minimumValue 1, maximumValue 6 and dots 0.

Expect:

-   minimum value 1;
-   maximumValue 6;
-   dots 0.

### 2. Create dice with upper bounds 2-20

Expect:

-   minimumValue 1;
-   maximumValue upperBound;
-   dots 0.

### 3. Test the exceptions

Create dice with upperBound:

-   "a" throws `'upper bound must be an integer'`
-   "1" throws `'upper bound must be an integer'`
-   2.5 throws `'upper bound must be an integer'`
-   null throws `'upper bound must be an integer'`
-   true throws `'upper bound must be an integer'`
-   false throws `'upper bound must be an integer'`

-   1 throws `'upper bound too small'`
-   0 throws `'upper bound too small'`
-   -1 throws `'upper bound too small'`

-   21 throws `'upper bound too big'`

## Testing roll

### 1. Create a dice with no upper bound given

roll the dice

Expect:
dots to be <= 6
and dots >= 1

(TODO this should be repeated multiple times. To be checked later...)

### @. Create a dice with upperBound 2...20

roll the dice

Expect:
dots to be <= upperBound
and dots >= 1

(TODO this should be repeated multiple times. To be checked later...)

## Test the toString

Test with not rolled and rolled

In both cases create a new dice (here: no upper bound given)

1. roll the dice
   expect to return dot count as text. Compare ot with dots casted as string

2. not rolled
   expect to return `'not rolled yet'`
