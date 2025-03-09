# **get_publisher_of_book_by_name(searchKey)**

returns the publisher of the book matching the name

> Parameters:
>
> > searchKey is the name of the book

> Returns:
>
> > returns the publisher of book matching the searchKey name or null if no match is found

> Throws:
>
> > If a parameter searchValue is missing, an exception `'missing parameter'` is thrown

## Test 1: found from the default data

test uses default data

For example book with name `"SQL-mysteries"` returns: `"Lion books"`

## Test 2: book not found

test uses default data
For example book name `"x"` returns:

```js
null;
```

## Test 3: missing parameter

throws an exception `'missing parameter'`
