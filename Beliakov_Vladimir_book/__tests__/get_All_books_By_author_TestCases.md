# **get_All_books_By_author(searchValue)**

searches books with given author

> Parameters:
>
> > searchValue is the author of the book to be searched

> Returns:
>
> > Returns an array of book objects of given author. If no book of given author is found, returns an empty array.

> Throws:
>
> > If a parameter searchValue is missing, an exeption `'missing parameter'` is thrown

## Test 1: author with books

test uses default data
Book with the author name `"Antony Lee"` returns:

```js
[
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
	},
	{
		id: 3,
		name: "SQL-mysteries",
		author: "Antony Lee",
		price: 36,
		publisher: "Lion books",
		keywords: ["Future SQL", "Gaming", "mystery"],
		extras: {
			comments: "no comments",
			type: "pocketbook",
			edition: "third edition",
		},
	},
	{
		id: 4,
		name: "Maria and My",
		author: "Antony Lee",
		price: 200,
		publisher: "Antony Lee publishing",
		keywords: ["mystery", "Computers", "Future SQL"],
		extras: {
			comments: "no comments",
			type: "softcover",
			edition: "seventh edition",
		},
	},
];
```

## Test 2: author without books

test uses default data
Book with the author name `"Antony Lee"` returns an empty array:

```js
[];
```

## Test 3: missing parameter

throws an exception `'missing parameter'`
