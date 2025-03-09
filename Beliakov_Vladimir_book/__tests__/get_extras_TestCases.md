# **get_extras(searchKey)**

searches the book matching the searchKey and if match is found returns the extras object otherwise null is returned

> Parameters:
>
> > searchKey is the id of the book

> Returns:
>
> > returns the extras object of the book matching the searchKey. If no book matching the given searchKey is found or searchKey is missing, null will be returned

> Throws:
>
> >

## Test 1: book with extras

test uses default data
For example, book with id 1 returns:

```js
{
	comments: "no comments",
	type: "e-book",
	edition: "first edition"
}
```

## Test 2: book without extras

test uses default data
For example, book with id 5 returns `"there are no extras for this book"`

## Test 3: no book found

If no book matching the given searchKey is found, it returns null.
For example, book with id 100 returns:

```js
null;
```

## Test 4: missing parameter

If searchKey is missing, it returns:

```js
null;
```
