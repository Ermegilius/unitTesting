# Calc library API

## **sum(a,b)**

Function returns the sum of 2 numbers. Numbers are passed as parameters a and b.

parameters:
a number, -500 <= a <=500
b number, -500 <= b <=500

### Returns:

the sum of given numbers a and b as number, -1000 <= sum <= 1000

### Exceptions:

-   If a parameter is missing, throws an exception `'parameter missing'`
-   if the only parameter was given and it's a number, test still throws an exception `'parameter missing'`
-   If parameters are not numbers throws an exception `'only numbers are allowed'`
-   If parameters are not in the right interval, throws an exception `'numbers are not between -500 and 500'`

### Test cases for sum

#### sum with integers test

```
sum(1,1) returns 2
sum(2,3) returns 5

a, b, result
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
[-500, 500, 0]
```

#### sum with float test

```
a, b, result
[10, 11.5, 21.5],
[2.5, 3, 5.5],
[-2.5, 3, 0.5],
[2.4, -2.5, -0.1],
[499.9, 500.0, 999.9],
[-499.9, 500.0, 0.1]
```

#### parameter missing test

-   sum() throws an exception `'parameter missing'`
-   sum(1) throws an exception `'parameter missing'`
-   sum('a') throws an exception `'parameter missing'`

#### not numbers test

-   sum('1','2') throws an exception `'only numbers are allowed'`
-   sum(1,'2') throws an exception `'only numbers are allowed'`
-   sum('1',2) throws an exception `'only numbers are allowed'`
-   sum('','') throws an exception `'only numbers are allowed'`
-   sum(true,true) throws an exception `'only numbers are allowed'`
-   sum(false,true) throws an exception `'only numbers are allowed'`

#### not between -500 and 500 test

-   sum(1000,500) throws an exception `'numbers are not between -500 and 500'`
-   sum(500,1000) throws an exception `'numbers are not between -500 and 500'`
-   sum(500,501) throws an exception `'numbers are not between -500 and 500'`
-   sum(501,500) throws an exception `'numbers are not between -500 and 500'`
-   sum(300,500.1) throws an exception `'numbers are not between -500 and 500'`
