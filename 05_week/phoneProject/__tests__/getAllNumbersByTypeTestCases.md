# Test cases for getAllNumbersByType

## **getAllNumbersByType(type)**

returns all numbers as an array with the given type. If no number is found, an empty array [] is returned. if a person multiple numbers of given type, each of them will be in it's own object.

If the parameter is missing, throws an exception `'missing parameter'`.

The format of the returned object is:

```json
{
	"firstName": "",
	"lastName": "",
	"phones": [{ "type": "", "number": "" }]
}
```

For example type work:

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"number": "9876543210",
		"number": { "type": "work", "number": "00022233344" }
	},
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"number": { "type": "work", "number": "00022233344" }
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"number": { "type": "work", "number": "06786354" }
	}
]
```

### Test 1: type:mobile

test uses default data

returns

```json
[
	{
		"firstName": "Matt",
		"lastName": "River",
		"number": { "type": "mobile", "number": "574743210" }
	}
]
```

### Test : type: work

test uses default data

returns

```json
[
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [{ "type": "work", "number": "9876543210" }]
	},
	{
		"firstName": "Leila",
		"lastName": "Musterfrau",
		"phones": [{ "type": "work", "number": "00022233344" }]
	},
	{
		"firstName": "Matt",
		"lastName": "River",
		"number": { "type": "work", "number": "06786354" }
	}
]
```

### Test 3: type x

test uses default data

returns []

### Test: missing parameter

throws an exception 'missing parameter'
