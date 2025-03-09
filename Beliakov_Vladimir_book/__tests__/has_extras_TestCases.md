# **has_extras(searchKey)**

Method checks based on id if the book has `extras` or not.

> Parameters:
>
> > searchKey is the id to be searched

> Returns:
>
> > Returns true if the book matching the searchKey has `extras` object and it is not an empty object else returns false. If parameter searchKey is missing false is returned

> Throws:
>
> >

## Test 1: book with extras

test uses default data
For example, book with id 1 returns:

```js
true;
```

## Test 2: book without extras

test uses default data
For example, book with id 5 returns:

```js
false;
```

## Test 3: missing parameter

```js
false;
```
