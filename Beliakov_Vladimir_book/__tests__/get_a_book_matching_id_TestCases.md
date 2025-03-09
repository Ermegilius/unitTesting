# **get_a_book_matching_id(searchKey)**

Method searches the datastorage for an object with given searchKey. Key is unique.

> Parameters:
>
> > searchKey is the primary key id of the book

> Returns:
>
> > returns the book object matching the id or null if there is no match

> Throws:
>
> > if parameter searchKey is missing, throws an exception `'missing parameter'`

## Test 1: existing book

test uses default data
For example, book with id 1 returns:

```js
{
	id: 1,
	name: "NoSql - New Hope",
	author: "Antony Lee",
	price: 200,
	publisher: "ICT books",
	keywords: ["Computers", "Gaming", "Future SQL"],
	extras: {
		comments: "no comments",
		type: "e-book",
		edition: "first edition",
	},
}
```

## Test 2: non-existing book

test uses default data
For example, book with id 100 returns:

```js
null;
```

## Test 3: missing parameter

throws an exception `'missing parameter'`
